# RepoLedger — AGENTS.md

## Project Overview

RepoLedger is the **fleet-wide repository ledger** for the
KooshaPari/Phenotype ecosystem. It tracks repos, branches, and PRs
across the org, joins that information with the cross-repo
expectations catalogued in `_cockpit/XREPO_BACKLOG.json`, and powers
the cockpit UI.

| Aspect | Value |
|---|---|
| Language stack | TypeScript + Bun (Bun runtime), pnpm monorepo (`pnpm-workspace.yaml`) |
| Apps | `apps/` (workspace members) |
| Outputs | JSON snapshots, Markdown reports, audit-grade ledger updates |
| Audience | Sponsors, agents, and automation tools that need a fleet-wide picture |

## Workspace Layout

```
RepoLedger/
├── apps/                       # Workspace apps (Bun + TS)
├── bunfig.toml                 # Bun runtime config
├── package.json                # Root package manifest
├── pnpm-lock.yaml              # pnpm lockfile
├── pnpm-workspace.yaml         # Workspace definition
├── README.md                   # User-facing readme
├── renovate.json               # Dependency-update config
├── LICENSE                     # License
├── CHANGELOG.md                # Release notes
└── audits/                     # Audit-trail artifacts (added 2026-08-11)
    ├── README.md
    ├── org-audit-snapshots/
    ├── postmortems/
    ├── ci-exceptions/
    ├── boundary-reconciliation/
    └── absorption-justifications/
```

## Branch Discipline

- `main` is protected; all changes flow through PRs.
- Branch naming: `feat/`, `fix/`, `chore/`, `docs/`, `refactor/`.
- Snapshot commits must include a `docs/plan)` tag in the commit
  message so the audit-ledger can grep them.

## Conventions

- TypeScript with strict mode; prefer `interface` over `type` for
  object literals.
- JSON snapshots are sorted by key for stable diffs.
- Audit snapshots land in `audits/org-audit-snapshots/YYYY-MM-DD-<slug>.md`.

## Quality Gates

- `bun install` (uses `bunfig.toml` for evaluator defaults)
- `bun run typecheck` (tsc --noEmit)
- `bun run lint` (eslint)
- `bun run test` (vitest)

## Key Commands

- `bun run dev` — start the dev server
- `bun run build` — build the workspace
- `bun run snapshot` — emit a fleet-wide JSON snapshot
- `bun run ledger:update` — refresh the audit ledger from
  `_cockpit/XREPO_BACKLOG.json`

## Important Notes

- RepoLedger is the **single source of truth** for "what's in the
  fleet". Any change to the catalog must be coordinated with the
  `phenotype-registry` repo's `BOUNDARY_OWNERS.md`.
- The `apps/` directory is a pnpm workspace; do not delete
  workspace members without first archiving them in the registry.
- Snapshots are append-only; never overwrite a dated snapshot.

## Cross-references

- Parent context: `/Users/kooshapari/CodeProjects/Phenotype/repos/_cockpit/audit-RepoLedger.json`
- Backlog: `X-DOCS-017` (closes "Missing AGENTS.md" gap from
  `_cockpit/XREPO_BACKLOG.json`).
- Sister audit-dir commits: Benchora `bd8b717`, PhenoPlugins
  `0fc70fb`, Eidolon `cc20a5e`, ResearchLedger `e64126d`.
- Phenotype root: `/Users/kooshapari/CodeProjects/Phenotype/repos/CLAUDE.md`.
