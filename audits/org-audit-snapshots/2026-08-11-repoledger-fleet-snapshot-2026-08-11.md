# Snapshot: RepoLedger Fleet Snapshot — 2026-08-11

## Summary

Anchors the as-of-2026-08-11 fleet-wide repository inventory
inside RepoLedger. The numbers below are read from
`_cockpit/XREPO_BACKLOG.json` and the per-repo `audit-*.json`
files; they are auditable from a single source.

## Fleet-wide inventory

| Metric | Value |
|---|---|
| Repos in fleet | 13 (in scope this turn) |
| Repos with `audits/` directory | 6 (Benchora, PhenoPlugins, Eidolon, RepoLedger, ResearchLedger, plus phenotype-registry) |
| Repos with `AGENTS.md` | 7 (all 6 audit-dir repos + airlock + CivicSurvival-public) |
| Repos with `CLAUDE.md` | most legacy repos; gaps remain for 7 active repos per phenotype-registry audit |
| Total cross-repo gaps in XREPO_BACKLOG | 12 (1 of 12 closed: `BACKLOG-CROSSREPO-001` audit-dir cluster) |
| Beads in cockpit | 860 beads (across 13 repos) |
| States represented | 14 |
| Bead kinds | 16 |

## Cluster-level roll-up

| Cluster | Repos | Status |
|---|---|---|
| audit-dir | Benchora, PhenoPlugins, Eidolon, RepoLedger, ResearchLedger | closed (5/5) |
| agents-md | CivicSurvival-public, airlock, RepoLedger, ResearchLedger | partial (4 of 13+) |
| WBS/PLAN/WORK_DAG | 6 repos | not started |
| typeconfig-no-mypy | 10 repos | not started |
| repo-too-large | 10 repos | not started |

## Cross-references

- `_cockpit/XREPO_BACKLOG.json` (source)
- `_cockpit/audit-*.json` (per-repo audits)
- `BACKLOG-CROSSREPO-001-cluster-4` (RepoLedger audits scaffold, this
  artifact)
- `cockpit/bead-cockpit-20260809-191131-f5ca38f7.html` (UI)

## Supersedes

None.
