import { useState, useCallback, useEffect, useMemo } from 'react';
import useEcosystem from './state/useEcosystem';
import EcosystemGraph from './components/EcosystemGraph';
import Inspector from './components/Inspector';
import SummaryBar from './components/SummaryBar';
import Timeline from './components/Timeline';
import type { RepoNode, ActionEdge, ActionType } from './types';

export default function App() {
  const { state, dispatch, addEdge, stats, undo, redo, canUndo, canRedo } = useEcosystem();
  const [actionMode, setActionMode] = useState<ActionType | null>(null);
  const [clickSource, setClickSource] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // Handle node click based on action mode
  const handleNodeClick = useCallback((nodeId: string) => {
    if (!actionMode) {
      dispatch({ type: 'SELECT_NODE', id: nodeId });
      return;
    }
    if (actionMode === 'delete' || actionMode === 'keep' || actionMode === 'archive') {
      const target = actionMode === 'delete' ? '__delete__' : actionMode === 'archive' ? '__archive__' : nodeId;
      if (actionMode === 'keep') {
        dispatch({ type: 'SELECT_NODE', id: nodeId });
        setActionMode(null);
        return;
      }
      addEdge(nodeId, target, actionMode, '');
      setActionMode(null);
      return;
    }
    // merge or rename: first click sets source, second sets target
    if (!clickSource) {
      setClickSource(nodeId);
    } else {
      addEdge(clickSource, nodeId, actionMode, '');
      setClickSource(null);
      setActionMode(null);
    }
  }, [actionMode, clickSource, dispatch, addEdge]);

  const handleSelectEdge = useCallback((edgeId: string) => {
    dispatch({ type: 'SELECT_EDGE', id: edgeId });
  }, [dispatch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault();
        e.shiftKey ? redo() : undo();
      }
      if (e.key === 'Escape') {
        setActionMode(null);
        setClickSource(null);
        dispatch({ type: 'SELECT_NODE', id: null });
      }
      if (e.key === 'm' && !e.metaKey) setActionMode('merge');
      if (e.key === 'r' && !e.metaKey) setActionMode('rename');
      if (e.key === 'a' && !e.metaKey) setActionMode('archive');
      if (e.key === 'd' && !e.metaKey) setActionMode('delete');
      if (e.key === 'k' && !e.metaKey) setActionMode('keep');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo, redo, dispatch]);

  const selectedNode = state.selectedNodeId ? state.nodes.find(n => n.id === state.selectedNodeId) ?? null : null;
  const selectedEdge = state.selectedEdgeId ? state.edges.find(e => e.id === state.selectedEdgeId) ?? null : null;

  const exportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify({ nodes: state.nodes, edges: state.edges }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'repo-ledger-export.json'; a.click();
    URL.revokeObjectURL(url);
  }, [state]);

  const exportMD = useCallback(() => {
    const lines = ['# RepoLedger Ecosystem Plan', '', `_Generated: ${new Date().toISOString()}_`, '', '## Summary', '',
      `- Total repos: ${stats.nodeCount}`,
      `- Actions queued: ${stats.edgeCount}`,
      `- Tier-0 spines: ${stats.tier0Count}`,
      `- Pending decisions: ${stats.pendingCount}`, '', '## Actions', ''];
    state.edges.forEach((e, i) => {
      const src = state.nodes.find(n => n.id === e.source);
      lines.push(`### ${i + 1}. ${e.action.toUpperCase()}: \`${e.source}\` → ${e.target === '__delete__' ? '**DELETE**' : e.target === '__archive__' ? '**ARCHIVE**' : '\`' + e.target + '\`'}`);
      if (src) lines.push(`- Source: ${src.name} (${src.lang}, tier ${src.tier})`);
      if (e.note) lines.push(`- Note: ${e.note}`);
      lines.push('');
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'repo-ledger-plan.md'; a.click();
    URL.revokeObjectURL(url);
  }, [state, stats]);

  return (
    <div className="app">
      <SummaryBar
        stats={stats}
        actionMode={actionMode}
        setActionMode={setActionMode}
        clickSource={clickSource}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={undo}
        onRedo={redo}
        onExportJSON={exportJSON}
        onExportMD={exportMD}
        search={search}
        setSearch={setSearch}
      />
      <div className="main-area">
        <div className="graph-container">
          <EcosystemGraph
            state={state}
            onSelectNode={handleNodeClick}
            onSelectEdge={handleSelectEdge}
            actionMode={actionMode}
            clickSource={clickSource}
            search={search}
          />
          {actionMode && (
            <div className="mode-banner">
              {actionMode.toUpperCase()} mode — {clickSource ? `source: ${clickSource}, click target` : 'click source node'}
              <button onClick={() => { setActionMode(null); setClickSource(null); }}>Cancel</button>
            </div>
          )}
        </div>
        <Inspector
          node={selectedNode}
          edge={selectedEdge}
          allNodes={state.nodes}
          onUpdateNode={(id, patch) => dispatch({ type: 'UPDATE_NODE', id, patch })}
          onUpdateEdge={(id, patch) => dispatch({ type: 'UPDATE_EDGE', id, patch })}
          onDeleteEdge={(id) => dispatch({ type: 'REMOVE_EDGE', id })}
          onClose={() => { dispatch({ type: 'SELECT_NODE', id: null }); dispatch({ type: 'SELECT_EDGE', id: null }); }}
        />
      </div>
      <Timeline
        edges={state.edges}
        allNodes={state.nodes}
        onSelectEdge={handleSelectEdge}
        selectedEdgeId={state.selectedEdgeId}
      />
    </div>
  );
}
