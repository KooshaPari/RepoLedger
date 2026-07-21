export type NodeTier = 0 | 1 | 2 | 3;
export type ActionType = 'merge' | 'rename' | 'archive' | 'delete' | 'keep';
export type Language = 'rust' | 'typescript' | 'go' | 'python' | 'vue' | 'astro' | 'javascript' | 'html' | 'shell' | 'swift' | 'svelte' | 'css' | 'ruby' | 'java' | 'c' | '-';

export interface RepoNode {
  id: string;
  name: string;
  lang: Language;
  tier: NodeTier;
  intent?: string;
  description?: string;
  locked?: boolean;
  x: number;
  y: number;
}

export interface ActionEdge {
  id: string;
  source: string;
  target: string;
  action: ActionType;
  note?: string;
  decidedAt?: string;
}

export interface EcosystemState {
  nodes: RepoNode[];
  edges: ActionEdge[];
}
