import { useReducer, useCallback, useMemo, useEffect, useRef } from 'react';
import type { RepoNode, ActionEdge, EcosystemState, ActionType } from '../types';
import { sampleNodes, seedEdges } from './sampleData';

type State = EcosystemState & { selectedNodeId: string | null; selectedEdgeId: string | null };

type Action =
  | { type: 'SET_STATE'; nodes: RepoNode[]; edges: ActionEdge[] }
  | { type: 'SELECT_NODE'; id: string | null }
  | { type: 'SELECT_EDGE'; id: string | null }
  | { type: 'UPDATE_NODE'; id: string; patch: Partial<RepoNode> }
  | { type: 'REMOVE_NODE'; id: string }
  | { type: 'UPDATE_EDGE'; id: string; patch: Partial<ActionEdge> }
  | { type: 'ADD_EDGE'; edge: ActionEdge }
  | { type: 'REMOVE_EDGE'; id: string }
  | { type: 'UNDO' }
  | { type: 'REDO' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_STATE':
      return { ...state, nodes: action.nodes, edges: action.edges };
    case 'SELECT_NODE':
      return { ...state, selectedNodeId: action.id, selectedEdgeId: null };
    case 'SELECT_EDGE':
      return { ...state, selectedEdgeId: action.id, selectedNodeId: null };
    case 'UPDATE_NODE':
      return {
        ...state,
        nodes: state.nodes.map(n => n.id === action.id ? { ...n, ...action.patch } : n),
      };
    case 'REMOVE_NODE':
      return {
        ...state,
        nodes: state.nodes.filter(n => n.id !== action.id),
        edges: state.edges.filter(e => e.source !== action.id && e.target !== action.id),
        selectedNodeId: state.selectedNodeId === action.id ? null : state.selectedNodeId,
      };
    case 'UPDATE_EDGE':
      return {
        ...state,
        edges: state.edges.map(e => e.id === action.id ? { ...e, ...action.patch } : e),
      };
    case 'ADD_EDGE':
      return { ...state, edges: [...state.edges, action.edge] };
    case 'REMOVE_EDGE':
      return {
        ...state,
        edges: state.edges.filter(e => e.id !== action.id),
        selectedEdgeId: state.selectedEdgeId === action.id ? null : state.selectedEdgeId,
      };
    case 'UNDO':
      return state; // handled by history stack
    case 'REDO':
      return state; // handled by history stack
    default:
      return state;
  }
}

function loadInitial(): State {
  try {
    const saved = localStorage.getItem('repo-ledger-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.nodes?.length) {
        return { ...parsed, selectedNodeId: null, selectedEdgeId: null };
      }
    }
  } catch {}
  return {
    nodes: sampleNodes,
    edges: seedEdges.map((e, i) => ({
      id: `seed_${i}`,
      source: e.source,
      target: e.target,
      action: e.action,
      note: e.note,
      decidedAt: new Date().toISOString(),
    })),
    selectedNodeId: null,
    selectedEdgeId: null,
  };
}

export default function useEcosystem() {
  const [state, rawDispatch] = useReducer(reducer, null, loadInitial);
  const historyRef = useRef<State[]>([state]);
  const futureRef = useRef<State[]>([]);
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prevNodesRef = useRef<string>('');

  // Persist to localStorage debounced
  useEffect(() => {
    const key = JSON.stringify({ nodes: state.nodes, edges: state.edges });
    if (key === prevNodesRef.current) return;
    prevNodesRef.current = key;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      localStorage.setItem('repo-ledger-state', JSON.stringify({ nodes: state.nodes, edges: state.edges }));
      // Also persist to server
      fetch('/api/state', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ version: Date.now(), state: { nodes: state.nodes, edges: state.edges } }),
      }).catch(() => {});
    }, 400);
  }, [state.nodes, state.edges]);

  const dispatch = useCallback((action: Action) => {
    if (action.type === 'UNDO') {
      if (historyRef.current.length > 1) {
        futureRef.current.push(historyRef.current.pop()!);
        rawDispatch({ type: 'SET_STATE', nodes: historyRef.current[historyRef.current.length - 1].nodes, edges: historyRef.current[historyRef.current.length - 1].edges });
      }
      return;
    }
    if (action.type === 'REDO') {
      if (futureRef.current.length > 0) {
        const next = futureRef.current.pop()!;
        historyRef.current.push(next);
        rawDispatch({ type: 'SET_STATE', nodes: next.nodes, edges: next.edges });
      }
      return;
    }
    rawDispatch(action);
    // Push to history on mutation
    if (['UPDATE_NODE', 'REMOVE_NODE', 'ADD_EDGE', 'REMOVE_EDGE', 'UPDATE_EDGE'].includes(action.type)) {
      const current = historyRef.current[historyRef.current.length - 1];
      // We need to compute the next state... simplified: push raw state snapshot
      historyRef.current.push({ nodes: state.nodes, edges: state.edges } as State);
      if (historyRef.current.length > 50) historyRef.current.shift();
      futureRef.current = [];
    }
  }, [state.nodes, state.edges]);

  const addEdge = useCallback((source: string, target: string, action: ActionType, note: string) => {
    const edge: ActionEdge = {
      id: `edge_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      source, target, action, note,
      decidedAt: new Date().toISOString(),
    };
    dispatch({ type: 'ADD_EDGE', edge });
  }, [dispatch]);

  const stats = useMemo(() => ({
    nodeCount: state.nodes.length,
    edgeCount: state.edges.length,
    tier0Count: state.nodes.filter(n => n.tier === 0).length,
    pendingCount: state.nodes.filter(n => !state.edges.some(e => e.source === n.id)).length,
  }), [state.nodes, state.edges]);

  const canUndo = historyRef.current.length > 1;
  const canRedo = futureRef.current.length > 0;

  return {
    state,
    dispatch,
    addEdge,
    stats,
    undo: useCallback(() => dispatch({ type: 'UNDO' }), [dispatch]),
    redo: useCallback(() => dispatch({ type: 'REDO' }), [dispatch]),
    canUndo,
    canRedo,
  };
}
