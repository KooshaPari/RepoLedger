# Emergent Garden Wave 2 Census and Direct-Graph Projection

**Projection ID:** `EG-PROJ-2026-09-W2-CENSUS-DIRECT-GRAPH`  
**Campaign:** `eg-nested-corpus-2026-09`  
**Recorded:** 2026-09-04  
**Canonical authority:** `KooshaPari/ResearchLedger`  
**Canonical branch:** `docs/emergent-garden-nested-corpus-20260904`  
**Observed canonical head:** `771d50d15e749439dd359973309c557b9d75ddb4`  
**Canonical draft PR:** `KooshaPari/ResearchLedger#81`  
**Blocking issue:** `KooshaPari/ResearchLedger#82`  
**Projection draft PR:** `KooshaPari/RepoLedger#38`  
**First experiment draft:** `KooshaPari/Benchora#106`

## Projection purpose

This file records fleet-level state only. Canonical source records, hashes, normalized descriptions, outbound edges, repository captures, paper metadata, creator-page captures, and research interpretation remain in ResearchLedger. RepoLedger does not duplicate those payloads.

## Change since the Wave 1 projection

ResearchLedger now contains a reproducible Wave 2 acquisition and expansion path:

1. an official YouTube Data API v3 collector;
2. an explicitly incomplete official Atom-feed fallback;
3. a per-video text and transcript-route coverage matrix;
4. a normalized description-edge ledger;
5. a high-value direct-link expander for GitHub repositories, arXiv papers, and creator-controlled pages;
6. a machine-readable gate status;
7. a Wave 2 checkpoint and updated research index.

Both repository Actions secrets and the repository's isolated Infisical `dev` environment were checked for `YOUTUBE_API_KEY`. Neither currently supplies it. The collector therefore committed the official Atom recent window and left `G1_INVENTORY` blocked rather than manufacturing a complete-channel claim.

## Current bounded counts

| Surface                                   | Observed state |
| ----------------------------------------- | -------------: |
| Official Atom recent-window video records |             15 |
| Non-empty recent descriptions             |             15 |
| Transcript records acquired               |              0 |
| Normalized description edges              |            186 |
| Unique outbound targets                   |            116 |
| Domains represented                       |             49 |
| Unique high-value targets                 |             23 |
| GitHub implementation candidates expanded |             11 |
| Primary arXiv papers expanded             |              3 |
| Creator-controlled pages expanded         |              9 |
| High-value expansion failures             |              0 |
| Canonical ResearchLedger draft PRs        |              1 |
| RepoLedger projection draft PRs           |              1 |
| Individual experiment-spec drafts         |              1 |
| Product-code changes                      |              0 |

These counts apply only to the current official Atom-feed window. They are not the channel total and do not bound older descriptions.

## Gate projection

| Gate                   | Projected state                      | Fleet implication                                                                                              |
| ---------------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `G1_INVENTORY`         | **BLOCKED**                          | Do not report a complete channel corpus. Issue #82 owns the restricted-key action.                             |
| `G2_TEXT_COVERAGE`     | **PARTIAL**                          | Recent description metadata is usable; transcripts remain unavailable and unacquired.                          |
| `G3_DIRECT_GRAPH`      | **PARTIAL / RECENT WINDOW EXPANDED** | The 23 high-value targets in the sample are revision- or response-pinned. Older edges remain unknown.          |
| `G4_PROJECT_RELEVANCE` | **PARTIAL**                          | Existing evidence-backed mappings remain; direct links strengthen provenance but do not clear thematic fanout. |
| `G5_EXPERIMENT`        | **SPECIFIED, NOT RUN**               | Benchora #106 is the only currently cleared experiment contract.                                               |
| `G6_PROJECT_PR`        | **ONE DOCUMENTATION PILOT OPEN**     | No implementation PR is cleared.                                                                               |
| `G7_RELEASE`           | **NOT APPLICABLE**                   | No reproduced result or product implementation exists.                                                         |

## Directly expanded implementation frontier

The recent description window directly links and now revision-pins:

- `MaxRobinsonTheGreat/AgentsOfEmpires`;
- `MaxRobinsonTheGreat/agent_prompts`;
- `MaxRobinsonTheGreat/fractalsearch`;
- `MaxRobinsonTheGreat/hyperdimensions`;
- `MaxRobinsonTheGreat/mandelbrotnn`;
- `MaxRobinsonTheGreat/slopcity`;
- `cabaletta/baritone`;
- `karpathy/autoresearch`;
- `mboop127/AutoDE`;
- `mindcraft-bots/mindcraft`;
- `mindcraft-ce/mindcraft-ce`.

This list is an outbound-edge frontier, not an authorship list. It intentionally preserves creator implementation, upstream dependency, fork, runner, and contextual repository as distinct possible relationships.

## Directly expanded paper frontier

- `2201.05989v2` — _Instant Neural Graphics Primitives with a Multiresolution Hash Encoding_;
- `2412.17799v2` — _Automating the Search for Artificial Life with Foundation Models_;
- `2505.22954v3` — _Darwin Godel Machine: Open-Ended Evolution of Self-Improving Agents_.

Paper and README claims remain reported evidence, not independent reproduction.

## Fleet-level mechanism updates

### Planner, observation, actuator, environment, and evaluator remain separate

The direct Mindcraft and Baritone chain makes it unsafe to model an embodied agent as one undifferentiated component. Benchora, phenotype-journeys, SessionLedger, Tracera, and the physical-engineering family should preserve these interfaces independently in future experiment contracts.

### Foreground automation needs its own benchmark class

The Age of Empires chain includes screen capture, fixed display assumptions, focus/timing constraints, mutable game files, incremental result persistence, and separate strategy generation. A text-only strategy benchmark is not a valid proxy for that system.

### Shared-artifact swarms need merge governance

The Slopcity chain combines multiple agents, shared site structure, rendering, inspection, critique, and repeated revision. The appropriate fleet translation is an adversarial benchmark for file ownership, conflicting writes, orphan detection, rollback, and evidence completeness—not a presumption that more agents improve throughput or quality.

### Open-endedness still contains selection pressure

The directly linked paper chain uses learned measures, benchmark outcomes, archives, or explicit selection procedures. The portfolio should not translate “open-ended” into “evaluator-free.”

## Repository routing impact

### Unchanged cleared central owners

- **ResearchLedger:** canonical sources, versions, claims, concepts, normalized edge records, and publication-safe exports;
- **RepoLedger:** append-only fleet projection and downstream PR state;
- **Benchora:** controlled comparison, pinned baselines, mutation-oriented testing, and regression detection;
- **phenotype-journeys:** real-environment journeys and hard assertions;
- **SessionLedger:** replayable run and session bundles;
- **Tracera:** claim-to-run-to-decision evidence links;
- **AgilePlus:** work packages, prerequisites, and gate state.

### Experiment candidates remain candidates

- Agentora;
- thegent;
- helios-cli;
- Civis;
- physical and hardware engineering repositories.

The direct graph makes several mechanisms more concrete but does not by itself define repository-local acceptance criteria or authorize implementation.

### Authority conflicts remain unresolved

- HeliosLab;
- forgecode / missing or unverified `heliosLite` authority;
- PhenoSpecs.

Emergent Garden evidence cannot settle internal portfolio authority by analogy.

## Required operator action

ResearchLedger issue #82 owns the only current credential-dependent transition: store a Google API key restricted to YouTube Data API v3 under the exact name `YOUTUBE_API_KEY` in either ResearchLedger Actions secrets or its isolated Infisical `dev` environment, then rerun **Emergent Garden YouTube Census**.

The key must not be committed, pasted into an issue, passed through a workflow input, or exposed in logs. `yt-dlp`, browser-cookie extraction, undocumented transcript endpoints, or HTML scraping are not acceptable replacements.

## Withheld fanout

No additional project PR is cleared until at least one of the following produces repository-local evidence:

1. complete uploads and description coverage after G1 passes;
2. a controlled Benchora result with equalized compute and tool budgets;
3. a reproduced creator mechanism with a pinned environment and evaluator;
4. a destination repository review that establishes direct mechanism fit, owner, path, and acceptance criteria;
5. an authority decision for any conflicted repository.

## Staleness triggers

Regenerate this projection when any of the following changes:

- ResearchLedger PR #81 head;
- issue #82 state or credential availability;
- G1 inventory result;
- video, description, edge, domain, or expansion counts;
- repository head SHAs or ancestry;
- paper versions;
- creator-page response hashes;
- Benchora #106 protocol or result state;
- project authority decision;
- downstream PR state.

A stale RepoLedger projection must be regenerated from ResearchLedger. It must not be patched into a competing source of truth.
