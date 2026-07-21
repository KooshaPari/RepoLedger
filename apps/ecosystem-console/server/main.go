package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/gorilla/websocket"
)

// State represents the ecosystem state structure
type State struct {
	Repos  map[string]interface{} `json:"repos"`
	Global map[string]interface{} `json:"global"`
}

// Client represents a WebSocket client
type Client struct {
	hub  *Hub
	conn *websocket.Conn
	send chan []byte
}

// Hub maintains the set of active clients and broadcasts messages
type Hub struct {
	clients    map[*Client]bool
	broadcast  chan []byte
	register   chan *Client
	unregister chan *Client
	mu         sync.RWMutex
}

var (
	stateFile string
	state     State
	stateMu   sync.RWMutex
	hub       *Hub
	upgrader  = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
		CheckOrigin: func(r *http.Request) bool {
			return true // Allow all connections for dev
		},
	}
)

func newHub() *Hub {
	return &Hub{
		broadcast:  make(chan []byte, 256),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		clients:    make(map[*Client]bool),
	}
}

func (h *Hub) run() {
	for {
		select {
		case client := <-h.register:
			h.mu.Lock()
			h.clients[client] = true
			h.mu.Unlock()
			log.Printf("Client connected. Total: %d", len(h.clients))

		case client := <-h.unregister:
			h.mu.Lock()
			if _, ok := h.clients[client]; ok {
				delete(h.clients, client)
				close(client.send)
			}
			h.mu.Unlock()
			log.Printf("Client disconnected. Total: %d", len(h.clients))

		case message := <-h.broadcast:
			h.mu.RLock()
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
			h.mu.RUnlock()
		}
	}
}

func (c *Client) readPump() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()

	c.conn.SetReadLimit(512 * 1024) // 512KB limit
	c.conn.SetReadDeadline(time.Now().Add(60 * time.Second))
	c.conn.SetPongHandler(func(string) error {
		c.conn.SetReadDeadline(time.Now().Add(60 * time.Second))
		return nil
	})

	for {
		_, _, err := c.conn.ReadMessage()
		if err != nil {
			break
		}
	}
}

func (c *Client) writePump() {
	ticker := time.NewTicker(30 * time.Second)
	defer func() {
		ticker.Stop()
		c.conn.Close()
	}()

	for {
		select {
		case message, ok := <-c.send:
			c.conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
			if !ok {
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			w.Write(message)

			if err := w.Close(); err != nil {
				return
			}

		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(10 * time.Second))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

func loadState() {
	stateMu.Lock()
	defer stateMu.Unlock()

	data, err := os.ReadFile(stateFile)
	if err != nil {
		if os.IsNotExist(err) {
			state = State{
				Repos:  make(map[string]interface{}),
				Global: make(map[string]interface{}),
			}
			log.Printf("Created new state (file not found: %s)", stateFile)
			return
		}
		log.Printf("Error reading state file: %v", err)
		return
	}

	if err := json.Unmarshal(data, &state); err != nil {
		log.Printf("Error parsing state file: %v", err)
		state = State{
			Repos:  make(map[string]interface{}),
			Global: make(map[string]interface{}),
		}
	}
}

func watchStateFile() {
	initialStat, err := os.Stat(stateFile)
	if err != nil {
		log.Printf("Initial stat failed: %v", err)
	}

	ticker := time.NewTicker(500 * time.Millisecond)
	defer ticker.Stop()

	for range ticker.C {
		stat, err := os.Stat(stateFile)
		if err != nil {
			continue
		}

		if initialStat == nil || stat.ModTime().After(initialStat.ModTime()) {
			initialStat = stat
			loadState()

			// Broadcast state to all connected clients
			stateMu.RLock()
			data, err := json.Marshal(state)
			stateMu.RUnlock()

			if err == nil {
				msg := fmt.Sprintf(`{"type":"state_update","data":%s}`, data)
				hub.broadcast <- []byte(msg)
			}
		}
	}
}

func enableCORS(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next(w, r)
	}
}

func handleState(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		stateMu.RLock()
		data, err := json.Marshal(state)
		stateMu.RUnlock()

		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.Write(data)

	case http.MethodPut:
		var newState State
		if err := json.NewDecoder(r.Body).Decode(&newState); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		stateMu.Lock()
		state = newState
		data, _ := json.Marshal(state)
		stateMu.Unlock()

		// Write to file
		if err := os.WriteFile(stateFile, data, 0644); err != nil {
			log.Printf("Error writing state file: %v", err)
			http.Error(w, "Failed to save state", http.StatusInternalServerError)
			return
		}

		// Broadcast to all clients
		msg := fmt.Sprintf(`{"type":"state_update","data":%s}`, data)
		hub.broadcast <- []byte(msg)

		w.Header().Set("Content-Type", "application/json")
		w.Write(data)

	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Printf("WebSocket upgrade error: %v", err)
		return
	}

	client := &Client{hub: hub, conn: conn, send: make(chan []byte, 256)}
	hub.register <- client

	// Send current state to new client
	stateMu.RLock()
	data, _ := json.Marshal(state)
	stateMu.RUnlock()

	msg := fmt.Sprintf(`{"type":"state_update","data":%s}`, data)
	client.send <- []byte(msg)

	go client.writePump()
	go client.readPump()
}

func main() {
	addr := flag.String("addr", ":8091", "Listen address")
	distDir := flag.String("dist", "../dist", "Path to React dist directory")
	flag.Parse()

	// Initialize hub
	hub = newHub()
	go hub.run()

	// Set state file path (in the same directory as the executable)
	execPath, err := os.Executable()
	if err != nil {
		log.Printf("Warning: Could not determine executable path: %v", err)
		execPath = "."
	}
	stateFile = filepath.Join(filepath.Dir(execPath), "repo-ledger-state.json")

	// Load initial state
	loadState()

	// Watch for state file changes
	go watchStateFile()

	// API routes
	http.HandleFunc("/api/state", enableCORS(handleState))
	http.HandleFunc("/ws", handleWebSocket)

	// SPA serving
	fs := http.Dir(*distDir)
	fileServer := http.FileServer(fs)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Try to serve the file directly
		path := filepath.Clean(r.URL.Path)
		if path == "/" {
			path = "index.html"
		}

		// Check if file exists
		fullPath := filepath.Join(*distDir, path)
		_, err := os.Stat(fullPath)
		if err == nil {
			fileServer.ServeHTTP(w, r)
			return
		}

		// Serve index.html for SPA routing
		r.URL.Path = "/"
		fileServer.ServeHTTP(w, r)
	})

	log.Printf("Ecosystem Console Server starting on %s", *addr)
	log.Printf("Serving React app from: %s", *distDir)
	log.Printf("State file: %s", stateFile)

	if err := http.ListenAndServe(*addr, nil); err != nil {
		log.Fatalf("Server failed: %v", err)
	}
}
