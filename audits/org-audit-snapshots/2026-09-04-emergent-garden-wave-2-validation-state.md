# Emergent Garden Wave 2 Validation-State Projection

**Projection ID:** `EG-PROJ-2026-09-W2-VALIDATION`  
**Campaign:** `eg-nested-corpus-2026-09`  
**Recorded:** 2026-09-04  
**Projection type:** append-only operational supplement  
**Canonical authority:** `KooshaPari/ResearchLedger`  
**Canonical draft PR:** `KooshaPari/ResearchLedger#81`  
**Fleet projection draft PR:** `KooshaPari/RepoLedger#38`  
**Experiment-spec draft PR:** `KooshaPari/Benchora#106`  
**Generic CI-repair draft PR:** `KooshaPari/RepoLedger#39`

## Purpose

This snapshot supplements the existing Wave 1 and Wave 2 fleet projections with observed validation state. It does not replace ResearchLedger as the source and claim authority, alter the bounded research counts, or create a second interpretation of the corpus.

## Canonical ResearchLedger validation

**Observed canonical head:** `9b76082a5a12069c37746d60e08c71cd990a8458`

| Workflow | Run | State | Interpretation |
|---|---:|---|---|
| CI | 335 | success | Python, TypeScript, Rust, dependency, security, and license validation completed successfully. |
| Trunk Check | 333 | success | Changed Markdown, JSON, YAML, and related formatting passed. |
| Infisical Sync | 203 | success | Repository secret-synchronization validation completed successfully. |
| Review Fanout | 44 | failure at runner setup | `Dispatch to smart queue` failed during `Set up job` before any repository step. This is infrastructure state, not corpus validation evidence. |

The substantive canonical validation is green. The Review Fanout result must not be reinterpreted as evidence that the research content is valid or invalid.

## RepoLedger projection validation

**Observed projection head before this append-only snapshot:** `4e794262f8eb18d00993c16920e71cd5583e7adf`

| Workflow | Run | State | Interpretation |
|---|---:|---|---|
| CI | 123 | success | Aggregate RepoLedger CI passed for the projection branch. |
| Trunk Check | 124 | success | The formatted append-only projection artifacts passed. |
| Infisical Sync | 44 | queued | No conclusion was available at the recording point. |
| Review Fanout | 8 | failure at runner setup | The smart-queue dispatch failed during setup before project steps. |

The projection content passed its normal CI and formatting gates. The generic CI implementation still contained defects hidden by advisory jobs, which were isolated instead of patched into the research branch.

## Isolated RepoLedger CI repair

**Repair branch:** `fix/ci-pnpm-gitleaks-history-20260904`  
**Observed repair head:** `bab5310b2f3d1faaaa473e39cd8238706c74bf5d`

Draft PR #39 repairs three repository-wide CI defects discovered while validating the projection:

1. the TypeScript job used npm caching and `npm ci` even though the repository declares `pnpm@10.33.0` and contains `pnpm-lock.yaml` and `pnpm-workspace.yaml`;
2. Gitleaks used a shallow checkout, so its generated pull-request commit range was unavailable and the previous run performed an approximately zero-byte partial scan;
3. the aggregate gate referenced `dependency-review` although the actual job ID is `dep-review`.

The repair remains separate from PR #38. It changes CI infrastructure only and contains no corpus or fleet-projection content.

### Verified repair result

| Check | Result |
|---|---|
| Trunk Check | success |
| pinned pnpm installation | success |
| pnpm cache setup | success |
| `pnpm install --frozen-lockfile` | success |
| repository lint script | success |
| repository typecheck script | success |
| workspace tests when present | success |
| Gitleaks with full Git history | success |
| dependency review | success |
| aggregate `ci / lint` | success |
| aggregate `ci / test` | success |
| Review Fanout | runner-setup failure before project steps |
| Infisical Sync | queued at the recording point |

The repaired Gitleaks run passed. The earlier partial run produced no secret finding; it was an invalid scan caused by missing Git history, not proof of either a leak or a clean repository.

## Benchora evidence propagation

Benchora PR #106 received a canonical Wave 2 evidence update without changing its implementation scope. The comment records:

- planner, observation, actuator, environment, and evaluator as separate interfaces;
- foreground automation constraints from the Age of Empires chain;
- shared-artifact contention and orphan-prevention controls from the Slopcity chain;
- retained evaluation and selection pressure in directly linked open-ended-search work;
- mandatory single-agent and best-of-independent alternatives;
- equalized compute, model-call, tool-call, timeout, initial-state, and evaluator controls.

The pilot remains documentation-only and has no result claim.

## Research gate state remains unchanged

| Gate | State |
|---|---|
| `G1_INVENTORY` | **BLOCKED** — ResearchLedger issue #82 owns the restricted YouTube Data API credential action. |
| `G2_TEXT_COVERAGE` | **PARTIAL** — recent description metadata exists; transcripts are unacquired. |
| `G3_DIRECT_GRAPH` | **PARTIAL / RECENT WINDOW EXPANDED** — 23 of 23 discovered high-value targets expanded successfully. |
| `G4_PROJECT_RELEVANCE` | **PARTIAL** — existing evidence-backed mappings remain; broad fanout is not cleared. |
| `G5_EXPERIMENT` | **SPECIFIED, NOT RUN** — Benchora #106. |
| `G6_PROJECT_PR` | **ONE DOCUMENTATION PILOT OPEN** — no implementation clearance. |
| `G7_RELEASE` | **NOT APPLICABLE**. |

The bounded Wave 2 counts remain:

- 15 official Atom recent-window records;
- 15 non-empty description records;
- 186 normalized description edges;
- 116 unique outbound targets across 49 domains;
- 23 unique high-value targets;
- 11 GitHub repository expansions;
- 3 primary-paper expansions;
- 9 creator-controlled page expansions;
- 23 successful expansions and 0 failures;
- 0 transcript records acquired.

These are not complete-channel counts.

## Explicit non-conclusions

- A green CI run does not reproduce creator experiments or paper results.
- A runner-setup failure does not invalidate repository content.
- A successful direct-link expansion does not prove authorship, endorsement, or Git lineage.
- A successful Gitleaks run does not establish that no secret can exist outside the scanned Git history.
- A working pnpm pipeline does not validate application behavior beyond the scripts actually executed.
- The 15-row official Atom window does not establish the complete uploads inventory.
- More agents are not assumed to outperform a single agent or equal-budget best-of-independent attempts.

## Publication and mutation boundary

This snapshot records observed state only. It does not authorize:

- merging PR #81, #38, #39, or #106;
- releasing any artifact;
- implementing the Benchora pilot;
- adding product-code changes to the research or projection branches;
- bypassing the G1 credential gate with scraping, cookie extraction, undocumented endpoints, or audiovisual downloading;
- opening additional project PRs solely from thematic similarity.

## Staleness triggers

Regenerate this operational projection when any of the following changes:

- ResearchLedger PR #81 head or workflow conclusions;
- RepoLedger PR #38 head or workflow conclusions;
- RepoLedger PR #39 head, review state, or workflow conclusions;
- Benchora PR #106 protocol or implementation state;
- ResearchLedger issue #82 state;
- any campaign gate, inventory count, edge count, expansion result, or authority decision.
