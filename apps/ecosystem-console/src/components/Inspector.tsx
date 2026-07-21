import type { RepoNode, ActionEdge } from '../types';

interface Props {
  node: RepoNode | null;
  edge: ActionEdge | null;
  allNodes: RepoNode[];
  onUpdateNode: (id: string, patch: Partial<RepoNode>) => void;
  onUpdateEdge: (id: string, patch: Partial<ActionEdge>) => void;
  onDeleteEdge: (id: string) => void;
  onClose: () => void;
}

export default function Inspector({ node, edge, allNodes, onUpdateNode, onUpdateEdge, onDeleteEdge, onClose }: Props) {
  if (!node && !edge) {
    return (
      <div className="inspector">
        <div className="inspector-empty">Select a node or edge to inspect</div>
      </div>
    );
  }

  if (edge) {
    const src = allNodes.find(n => n.id === edge.source);
    const tgt = allNodes.find(n => n.id === edge.target);
    return (
      <div className="inspector">
        <div className="inspector-header">
          <span className={`action-badge action-${edge.action}`}>{edge.action}</span>
          <h3>{edge.source} → {edge.target === '__delete__' ? 'DELETE' : edge.target === '__archive__' ? 'ARCHIVE' : edge.target}</h3>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>
        <div className="inspector-body">
          <div className="field-group">
            <label>Action</label>
            <select value={edge.action} onChange={e => onUpdateEdge(edge.id, { action: e.target.value as ActionEdge['action'] })}>
              <option value="merge">merge</option>
              <option value="rename">rename</option>
              <option value="archive">archive</option>
              <option value="delete">delete</option>
              <option value="keep">keep</option>
            </select>
          </div>
          <div className="field-group">
            <label>Note</label>
            <textarea value={edge.note || ''} onChange={e => onUpdateEdge(edge.id, { note: e.target.value })} placeholder="Why this action?" />
          </div>
          {edge.decidedAt && <div style={{ fontSize: 10, color: '#64748b' }}>Decided: {new Date(edge.decidedAt).toLocaleString()}</div>}
          <button className="btn-danger" onClick={() => onDeleteEdge(edge.id)}>Remove Edge</button>
        </div>
      </div>
    );
  }

  if (node) {
    const outgoing = (window as any).__edges?.filter((e: any) => e.source === node.id) || [];
    const incoming = (window as any).__edges?.filter((e: any) => e.target === node.id) || [];
    return (
      <div className="inspector">
        <div className="inspector-header">
          <span className={`tier-badge tier-${node.tier}`}>T{node.tier}</span>
          <h3>{node.name} {node.locked && '🔒'}</h3>
          <button className="icon-btn" onClick={onClose}>✕</button>
        </div>
        <div className="inspector-body">
          <div className="field-group">
            <label>Name</label>
            <input value={node.name} onChange={e => onUpdateNode(node.id, { name: e.target.value })} disabled={node.locked} />
          </div>
          <div className="field-group">
            <label>Language</label>
            <select value={node.lang} onChange={e => onUpdateNode(node.id, { lang: e.target.value as any })} disabled={node.locked}>
              {['rust','typescript','go','python','vue','astro','javascript','html','shell','swift','svelte','css','-'].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div className="field-group">
            <label>Tier</label>
            <select value={node.tier} onChange={e => onUpdateNode(node.id, { tier: Number(e.target.value) as any })} disabled={node.locked}>
              <option value={0}>0 — Spine (locked)</option>
              <option value={1}>1 — Active Research</option>
              <option value={2}>2 — WIP</option>
              <option value={3}>3 — Cleanup</option>
            </select>
          </div>
          <div className="field-group">
            <label>Intent / Judgment</label>
            <textarea value={node.intent || ''} onChange={e => onUpdateNode(node.id, { intent: e.target.value })} placeholder="What should happen to this repo?" />
          </div>
          <div className="field-group">
            <label>Description</label>
            <textarea value={node.description || ''} onChange={e => onUpdateNode(node.id, { description: e.target.value })} placeholder="What does this repo do?" />
          </div>
        </div>
      </div>
    );
  }

  return null;
}
