import type { RepoNode, ActionEdge } from '../types';

interface Props {
  edges: ActionEdge[];
  allNodes: RepoNode[];
  onSelectEdge: (id: string) => void;
  selectedEdgeId: string | null;
}

export default function Timeline({ edges, allNodes, onSelectEdge, selectedEdgeId }: Props) {
  if (edges.length === 0) {
    return <div className="timeline"><div className="timeline-empty">No actions yet — use M/R/A/D/K buttons to start</div></div>;
  }

  return (
    <div className="timeline">
      {edges.map(e => (
        <div
          key={e.id}
          className={`timeline-card${e.id === selectedEdgeId ? ' selected' : ''}`}
          onClick={() => onSelectEdge(e.id)}
        >
          <div className="tc-header">
            <span className={`action-badge action-${e.action}`}>{e.action}</span>
            <span className="tc-path">{e.source} → {e.target === '__delete__' ? 'DEL' : e.target === '__archive__' ? 'ARCH' : e.target}</span>
          </div>
          {e.note && <div className="tc-note">{e.note}</div>}
        </div>
      ))}
    </div>
  );
}
