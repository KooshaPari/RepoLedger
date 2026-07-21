import { memo, useCallback } from 'react';
import {
  ReactFlow, Background, MiniMap, Controls, Handle, Position,
  type Node, type Edge, type NodeTypes, type EdgeTypes, type NodeProps,
  type EdgeProps,
  BaseEdge, getBezierPath,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { RepoNode, ActionEdge, ActionType, NodeTier } from '../types';

interface RepoNodeData { [key: string]: unknown; repo: RepoNode; selected?: boolean; highlighted?: boolean; }

const TIER_COLORS: Record<NodeTier, string> = { 0: '#7c5cff', 1: '#14b8a6', 2: '#60a5fa', 3: '#f59e0b' };
const TIER_BG: Record<NodeTier, string> = {
  0: 'rgba(124,92,255,0.12)', 1: 'rgba(20,184,166,0.08)',
  2: 'rgba(96,165,250,0.08)', 3: 'rgba(245,158,11,0.08)',
};

function EcosystemNode({ data, selected }: NodeProps<Node<RepoNodeData>>) {
  const { repo, highlighted } = data;
  const tier = repo.tier as NodeTier;
  const color = TIER_COLORS[tier];
  const bg = TIER_BG[tier];
  const w = tier === 0 ? 170 : tier <= 1 ? 150 : 140;
  const h = tier === 0 ? 60 : tier <= 1 ? 50 : 42;

  return (
    <>
      <Handle type="target" position={Position.Top} style={{ width: 6, height: 6, background: color }} />
      <div style={{
        width: w, height: h, borderRadius: 6,
        background: bg, border: `1px solid ${selected ? '#fff' : highlighted ? color : 'rgba(255,255,255,0.08)'}`,
        padding: '6px 10px', display: 'flex', flexDirection: 'column', gap: 2,
        boxShadow: selected ? `0 0 12px ${color}40` : 'none',
        transition: 'border-color 0.15s, box-shadow 0.15s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#f1f5f9', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>
            {repo.name}
          </span>
          {repo.locked && <span style={{ fontSize: 9 }}>🔒</span>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 9, padding: '0 4px', borderRadius: 3, background: 'rgba(255,255,255,0.06)', color: '#94a3b8' }}>{repo.lang}</span>
          <span style={{ fontSize: 9, color: '#64748b' }}>T{repo.tier}</span>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} style={{ width: 6, height: 6, background: color }} />
    </>
  );
}

const ACTION_COLORS: Record<string, string> = {
  merge: '#22c55e', rename: '#3b82f6', archive: '#f59e0b', delete: '#ef4444', keep: '#6b7280',
};

function ActionEdgeComp(props: EdgeProps) {
  const edge = props as unknown as Edge<{ action: string; note: string }>;
  const action = edge.data?.action || 'merge';
  const color = ACTION_COLORS[action] || '#6b7280';
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: props.sourceX, sourceY: props.sourceY,
    targetX: props.targetX, targetY: props.targetY,
    sourcePosition: props.sourcePosition, targetPosition: props.targetPosition,
  });

  return (
    <>
      <BaseEdge path={edgePath} style={{ stroke: color, strokeWidth: 1.5, strokeDasharray: action === 'merge' ? '5,3' : 'none' }} />
      {labelX != null && (
        <g transform={`translate(${labelX},${labelY})`}>
          <rect x={-20} y={-8} width={40} height={16} rx={3} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={0.5} />
          <text textAnchor="middle" dominantBaseline="central" fill={color} fontSize={9} fontWeight={600}>{action}</text>
        </g>
      )}
    </>
  );
}

interface Props {
  state: { nodes: RepoNode[]; edges: ActionEdge[]; selectedNodeId: string | null; selectedEdgeId: string | null };
  onSelectNode: (id: string) => void;
  onSelectEdge: (id: string) => void;
  actionMode: ActionType | null;
  clickSource: string | null;
  search: string;
}

function EcosystemGraph({ state, onSelectNode, onSelectEdge, actionMode, clickSource, search }: Props) {
  const nodes = state.nodes.map(n => ({
    id: n.id, position: { x: n.x, y: n.y },
    data: { repo: n, selected: n.id === state.selectedNodeId, highlighted: search && n.name.toLowerCase().includes(search.toLowerCase()) },
    type: 'ecosystemNode',
  })) as Node<RepoNodeData>[];

  const edges: Edge[] = state.edges
    .filter(e => e.source !== '__delete__' && e.source !== '__archive__' && e.target !== '__delete__' && e.target !== '__archive__')
    .map(e => ({
      id: e.id, source: e.source, target: e.target,
      type: 'actionEdge',
      data: { action: e.action, note: e.note },
      selected: e.id === state.selectedEdgeId,
    }));

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    onSelectNode(node.id);
  }, [onSelectNode]);

  const onEdgeClick = useCallback((_: React.MouseEvent, edge: Edge) => {
    onSelectEdge(edge.id);
  }, [onSelectEdge]);

  const nodeTypes: NodeTypes = { ecosystemNode: EcosystemNode };
  const edgeTypes: EdgeTypes = { actionEdge: ActionEdgeComp };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodeClick={onNodeClick}
      onEdgeClick={onEdgeClick}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      minZoom={0.1}
      maxZoom={2}
      proOptions={{ hideAttribution: true }}
    >
      <Background gap={20} size={1} color="rgba(255,255,255,0.03)" />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

export default memo(EcosystemGraph);
