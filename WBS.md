# WBS — RepoLedger (2026-08-09)

**Repo:** RepoLedger
**Status:** initial skeleton; expand as scope grows.
**Owner:** forge (agent CLI). **Driver:** `proc` / `proc <id>`.

## Phase overview

RepoLedger is the **fleet-wide tracking layer** — it tracks repos,
branches, and PRs across the KooshaPari/Phenotype ecosystem. It's the
"meta-repo" — every other repo's WBS links back here.

| Phase | Tasks | Theme | Outcome |
|-------|-------|-------|---------|
| 0 | 1–5 | audit close-out + inventory | reproducible baseline |
| 1 | 6–15 | fleet scan (count repos, branches, PRs) | dashboard live |
| 2 | 16–25 | cross-repo WBS lint | every Phenotype repo has WBS.md |
| 3 | 26–35 | branch taxonomy enforcement | 8-prefix rule applied |
| 4 | 36–50 | PR / merge tracking | auto-rollup nightly |
| 5 | 51–60 | CI hardening (ruff + mypy + bandit + tsc) | 0 findings |
| 6 | 61–70 | fleet dashboard (web) | public dashboard URL |
| 7 | 71–80 | integrate & ship | `repoledger-v0.x` tag |

---

## Phase 0 — Audit (tasks 1–5)

| ID | Title | depends_on | ac |
|----|-------|------------|----|
| 1 | inventory `apps/`, `lib/`, `src/` modules | — | ac_v1 |
| 2 | scan remaining mypy errors | 1 | ac_v1 |
| 3 | scan tsc / eslint findings (TypeScript side) | 1 | ac_v1 |
| 4 | scan bandit MEDIUM findings (Python side) | 1 | ac_v1 |
| 5 | tag current HEAD as `repoledger-v0.x` baseline | 1–4 | ac_v1 |

---

## Ac conventions

- `ac_v1`: commit on `main` with conventional subject + DAG id in footer.
- `ac_test`: `pytest -q tests/` (Python) + `bun test` (TS) exit 0.
- `ac_tsc`: `tsc --noEmit` exits 0.

---

## Notes

- Part of the **Phenotype Fleet** (cross-repo audit at
  `pheno-harness/_cockpit/XREPO_BACKLOG.json`).
- RepoLedger is the canonical home for **fleet-wide state** — every
  other repo's WBS-PERT references back to this one.
- AMC / Agentora remains paused per `pheno-harness/AGENTS.md §3.2`.
- Branch taxonomy: 8-prefix (feat/, fix/, chore/, docs/, test/, refactor/,
  perf/, build/).
