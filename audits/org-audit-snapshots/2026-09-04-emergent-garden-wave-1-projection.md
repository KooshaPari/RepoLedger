# Emergent Garden Nested-Corpus — Wave 1 Projection Record

**Projection ID:** `EG-PROJ-2026-09-W1`  
**Campaign ID:** `eg-nested-corpus-2026-09`  
**Recorded:** 2026-09-04  
**Projection status:** draft / partial research wave  
**Canonical research authority:** `KooshaPari/ResearchLedger`  
**Canonical draft PR:** `KooshaPari/ResearchLedger#81`  
**Observed ResearchLedger branch:** `docs/emergent-garden-nested-corpus-20260904`  
**Observed ResearchLedger head:** `04d573b6415ae9f404a655fbfb1299e6a6d84308`

## Purpose

Register the first evidence-backed research wave rooted in the Emergent Garden YouTube channel and creator project graph. This is an append-only RepoLedger projection of ResearchLedger state. RepoLedger does not own or duplicate the corpus, claims, ontology, or source versions.

## Authority contract

| Concern                                                           | Canonical owner                | Projection rule                                                  |
| ----------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------- |
| Source records, versions, provenance, claims, ontology, synthesis | `ResearchLedger`               | Link by campaign/snapshot/claim IDs; do not copy raw corpus      |
| Repository state, fanout destination, branch/PR and staleness     | `RepoLedger`                   | Append-only fleet projection                                     |
| Experiment and baseline machinery                                 | `Benchora`                     | Create only after an accepted work package                       |
| Journey/challenge-world evidence                                  | `phenotype-journeys`           | Create only after an accepted work package                       |
| Session replay                                                    | `SessionLedger`                | Store run references/bundles, not corpus copies                  |
| Trace/evidence graph                                              | `Tracera`                      | Link claims, configurations, actions, evaluators, and promotions |
| Work packages and evidence gates                                  | `AgilePlus`                    | Campaign tasks and experiment state                              |
| Project-specific interpretation                                   | Destination project repository | Evidence-backed dossier only after relevance gate                |
| Portfolio narrative/catalog                                       | generated surfaces             | Generate after canonical decisions; no hand-edited authority     |

## ResearchLedger materialization observed

The canonical draft branch currently contains:

### Campaign and operations

- `docs/corpora/emergent-garden/README.md`
- `docs/corpora/emergent-garden/operations/CAMPAIGN_SPEC.md`
- `docs/corpora/emergent-garden/operations/LOCAL_AGENT_MASTER_PROMPT.md`
- `docs/corpora/emergent-garden/operations/campaign.yaml`
- `docs/superpowers/plans/2026-09-04-emergent-garden-nested-corpus.md`

### Wave 1 research

- `docs/corpora/emergent-garden/research/README.md`
- `docs/corpora/emergent-garden/research/WAVE-1-ANCHOR-CORPUS.md`
- `docs/corpora/emergent-garden/research/CLAIM-LEDGER-WAVE-1.md`
- `docs/corpora/emergent-garden/research/CONCEPT-ONTOLOGY-WAVE-1.md`
- `docs/corpora/emergent-garden/research/NESTED-SOURCE-GRAPH-WAVE-1.md`
- `docs/corpora/emergent-garden/research/PORTFOLIO-APPLICABILITY-WAVE-1.md`
- `docs/corpora/emergent-garden/research/WAVE-1-QUALITY-REPORT.md`
- `docs/corpora/emergent-garden/data/wave-1-inventory.json`

## Observed Wave 1 coverage

| Surface                                             |                                       Observed coverage |
| --------------------------------------------------- | ------------------------------------------------------: |
| Current external channel count                      | 74 videos; not yet official uploads-playlist reconciled |
| High-information video nodes identified             |                                                      14 |
| Anchors analyzed                                    |                            13 at varying evidence depth |
| Creator-owned public GitHub repositories enumerated |                                                      30 |
| Priority-A implementation repositories classified   |                                                      16 |
| Controlled primary papers analyzed                  |                                                       1 |
| Claim records                                       |                                                      28 |
| Normalized concepts                                 |                                                      40 |
| Portfolio experiment contracts                      |                                                      10 |
| Individual product PRs                              |                                0; deliberately withheld |

## Canonical Wave 1 conclusion

The current synthesis rejects the simplistic proposition that the corpus is uniformly “pro-emergence.” The stronger supported pattern is:

```text
compact substrate of state, rules, actions, and constraints
→ repeated execution in an environment
→ observation and preserved evidence
→ useful, harmful, chaotic, or incoherent behavior
→ evaluation and selection
→ change to rules, representation, tools, topology, pressure, or governance
→ retained rollback and repeat
```

The same corpus supplies negative evidence:

- weakly coordinated agents overwrite or degrade shared work;
- forced detailed-plan communication can reduce benchmark performance;
- increasing agent count can sharply reduce success in tested environments;
- adding vision does not automatically produce task-relevant grounding;
- high-level planning cannot indefinitely compensate for stale state or unreliable actuators;
- autonomous code/strategy search can optimize a narrow evaluator rather than the intended outcome.

## Fleet relevance state

### Cleared central authorities

| Repository           | Classification                                    | Projection state                                                      |
| -------------------- | ------------------------------------------------- | --------------------------------------------------------------------- |
| `ResearchLedger`     | `DIRECTLY_ADOPT`, partially `ALREADY_IMPLEMENTED` | Canonical Wave 1 branch/PR open                                       |
| `RepoLedger`         | `DIRECTLY_ADOPT`                                  | This projection record                                                |
| `Benchora`           | `DIRECTLY_ADOPT`                                  | Experiment contracts exist centrally; no repo PR yet                  |
| `phenotype-journeys` | `DIRECTLY_ADOPT`                                  | Challenge-world/hard-oracle contracts exist centrally; no repo PR yet |
| `SessionLedger`      | `DIRECTLY_ADOPT`                                  | Replay/run bundle role identified; no repo PR yet                     |
| `Tracera`            | `DIRECTLY_ADOPT`                                  | Evidence-link vocabulary proposed centrally; no repo PR yet           |
| `AgilePlus`          | `DIRECTLY_ADOPT`                                  | Work-package/evidence-gate role identified; no repo PR yet            |

### Experiment candidates

| Repository                       | Classification                                | Required gate                                             |
| -------------------------------- | --------------------------------------------- | --------------------------------------------------------- |
| `Agentora`                       | `EXPERIMENT`, `CONTRADICTION`                 | Matched framework benchmark and fault/coordination corpus |
| `thegent`                        | `EXPERIMENT`, `CONTRADICTION`                 | Boundary/WIP audit plus coordination-curve pilot          |
| `helios-cli`                     | `EXPERIMENT`, partially `ALREADY_IMPLEMENTED` | Harness-versus-direct-upstream recovery/evidence pilot    |
| `Civis`                          | `EXPERIMENT`, `PHILOSOPHICAL_CONVERGENCE`     | Emergence-versus-scripted-null-model pilot                |
| `hwLedger`, `Eidolon`, `PlayCua` | `RESEARCH_LEAD` / `EXPERIMENT`                | Observer/actuator/state-freshness decomposition           |

### Blocked fanout

| Repository   | Blocker                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `HeliosLab`  | Current configuration-management identity conflicts with accepted desktop coding-workbench intent              |
| `forgecode`  | `helioslite` product/repository/successor claims are not reconciled with current inventory and role boundaries |
| `PhenoSpecs` | Current instructions restrict new specs despite newer plans assigning cross-repository contract authority      |

No blocked repository may receive corpus-derived architecture language merely to make the documentation appear coherent.

## Proposed experiment queue

| Experiment                                                | Candidate owners                                   | Status   |
| --------------------------------------------------------- | -------------------------------------------------- | -------- |
| `EXP-EG-001` agent-count coordination curve               | Benchora, Agentora/thegent, SessionLedger, Tracera | proposed |
| `EXP-EG-002` communication ablation                       | Benchora, Agentora/thegent                         | proposed |
| `EXP-EG-003` actuator-reliability ceiling                 | phenotype-journeys, Benchora, target product       | proposed |
| `EXP-EG-004` evaluator gaming and held-out generalization | Benchora, ResearchLedger                           | proposed |
| `EXP-EG-005` vision versus structured observation         | phenotype-journeys, Eidolon/PlayCua                | proposed |
| `EXP-EG-006` state machine versus LLM/hybrid controller   | Benchora plus bounded environment                  | proposed |
| `EXP-EG-007` open-ended-loop governance                   | Benchora, Agentora/thegent                         | proposed |
| `EXP-EG-008` replay fidelity and divergence               | SessionLedger, Tracera, phenotype-journeys         | proposed |
| `EXP-EG-009` Civis emergence null model                   | Civis, Benchora, ResearchLedger                    | proposed |
| `EXP-EG-010` physical-loop stage decomposition            | hwLedger/physical project, Benchora, Tracera       | proposed |

These are research contracts, not claims that the destination repositories already implement them.

## Projection gate status

| Gate                     | State                                                |
| ------------------------ | ---------------------------------------------------- |
| `G0_PREFLIGHT`           | pass for Wave 1                                      |
| `G1_INVENTORY`           | incomplete — official uploads-playlist census absent |
| `G2_TEXT_COVERAGE`       | incomplete — full permitted text matrix absent       |
| `G3_DIRECT_GRAPH`        | pass for selected anchors                            |
| `G4_RECURSIVE_GRAPH`     | partial                                              |
| `G5_SYNTHESIS`           | pass for Wave 1                                      |
| `G6_PORTFOLIO_MAPPING`   | pass for central research use                        |
| `G7_GITHUB_PROJECTION`   | partial — ResearchLedger and RepoLedger drafts only  |
| `G8_INCREMENTAL_REFRESH` | not run                                              |

## Withheld downstream mutations

No individual project PR is registered in this wave because the following preconditions are not all satisfied:

1. official channel/source inventory and canonical source-manifest hash;
2. complete or explicitly bounded description/transcript coverage;
3. supported claims with exact source-version locators;
4. audited destination commit and authority;
5. mechanism-level relevance rather than metaphor alone;
6. alternative interpretation and falsifier;
7. RepoLedger projection link;
8. no unresolved destination identity conflict.

Withholding fanout avoids turning a preliminary philosophical synthesis into fleet-wide documentation drift.

## Staleness and refresh contract

This projection becomes stale when any of these occur:

- ResearchLedger PR #81 head changes after review without a new projection record;
- the canonical source-manifest hash is created or changes;
- official YouTube inventory contradicts the 74-video external count or identified node set;
- a material claim is promoted, rejected, contradicted, or superseded;
- destination repository role/identity changes;
- a proposed experiment produces evidence that changes the mapping;
- ResearchLedger PR #81 closes or merges.

Append a successor projection record rather than rewriting this snapshot.

## Evidence honesty

This record does not claim:

- complete channel or transcript coverage;
- reproducible creator experiments;
- builds/tests run against creator or portfolio repositories;
- project-code authorization;
- merged ResearchLedger state;
- accepted cross-repository ADRs;
- individual repository adoption.

## Next transition

```text
ResearchLedger Wave 1 draft
→ review publication/claim/source quality
→ official inventory + source-version manifest
→ append successor RepoLedger projection
→ create bounded AgilePlus/Benchora experiment packages
→ open only evidence-backed individual draft PRs
```
