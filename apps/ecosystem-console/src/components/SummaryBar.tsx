import type { ActionType } from '../types';

interface Stats { nodeCount: number; edgeCount: number; tier0Count: number; pendingCount: number; }

interface Props {
  stats: Stats;
  actionMode: ActionType | null;
  setActionMode: (m: ActionType | null) => void;
  clickSource: string | null;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onExportJSON: () => void;
  onExportMD: () => void;
  search: string;
  setSearch: (s: string) => void;
}

const MODES: { key: ActionType; label: string; kbd: string }[] = [
  { key: 'merge', label: 'Merge', kbd: 'M' },
  { key: 'rename', label: 'Rename', kbd: 'R' },
  { key: 'archive', label: 'Archive', kbd: 'A' },
  { key: 'delete', label: 'Delete', kbd: 'D' },
  { key: 'keep', label: 'Keep', kbd: 'K' },
];

export default function SummaryBar({ stats, actionMode, setActionMode, clickSource, canUndo, canRedo, onUndo, onRedo, onExportJSON, onExportMD, search, setSearch }: Props) {
  return (
    <div className="summary-bar">
      <span className="title">RepoLedger</span>
      <span className="subtitle">Ecosystem Console</span>
      <div style={{ width: 1, height: 20, background: '#1e293b', margin: '0 4px' }} />
      {MODES.map(m => (
        <button
          key={m.key}
          className={`action-btn${actionMode === m.key ? ' active' : ''}`}
          onClick={() => setActionMode(actionMode === m.key ? null : m.key)}
          title={`${m.label} (${m.kbd})`}
        >{m.kbd}</button>
      ))}
      {actionMode && <button className="icon-btn" onClick={() => setActionMode(null)} title="Clear (Esc)">✕</button>}
      <div className="spacer" />
      <input className="search-input" placeholder="Search repos..." value={search} onChange={e => setSearch(e.target.value)} />
      <span className="stat-pill">{stats.nodeCount} nodes</span>
      <span className="stat-pill">{stats.edgeCount} edges</span>
      <span className="stat-pill">T0: {stats.tier0Count}</span>
      <span className="stat-pill">pending: {stats.pendingCount}</span>
      <div style={{ width: 1, height: 20, background: '#1e293b', margin: '0 4px' }} />
      <button className="icon-btn" onClick={onUndo} disabled={!canUndo} title="Undo (⌘Z)">↶</button>
      <button className="icon-btn" onClick={onRedo} disabled={!canRedo} title="Redo (⌘⇧Z)">↷</button>
      <button className="export-btn" onClick={onExportJSON}>Export JSON</button>
      <button className="export-btn" onClick={onExportMD}>Export MD</button>
    </div>
  );
}
