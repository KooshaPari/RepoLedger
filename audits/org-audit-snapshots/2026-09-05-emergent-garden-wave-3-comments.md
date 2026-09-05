# Emergent Garden Wave 3: comment-informed research projection

Projection type: append-only research-state supplement. Campaign: `eg-nested-corpus-2026-09`. Tracking: [AgilePlus #1073](https://github.com/KooshaPari/AgilePlus/issues/1073).

## Canonical evidence

The research authority remains ResearchLedger, draft PR #81. The Wave 3 interpretation is frozen at `8c271fd6765b01c6a6a6339d7273199a48e06334`:

- [Comment-informed synthesis](https://github.com/KooshaPari/ResearchLedger/blob/8c271fd6765b01c6a6a6339d7273199a48e06334/docs/corpora/emergent-garden/research/WAVE-3-COMMENTS-AND-SYNTHESIS.md).
- [Primary-source review depths](https://github.com/KooshaPari/ResearchLedger/blob/8c271fd6765b01c6a6a6339d7273199a48e06334/docs/corpora/emergent-garden/research/WAVE-3-PRIMARY-SOURCES.md).
- [Execution receipt](https://github.com/KooshaPari/ResearchLedger/blob/8c271fd6765b01c6a6a6339d7273199a48e06334/docs/corpora/emergent-garden/data/wave-3-execution-receipt.json).

This snapshot records the canonical execution receipt. It is not a second interpretation, a new capture, or a claim that every source was independently re-read by the projection process.

## Recorded acquisition and review

The official public-upload census remains 74 videos. Comment capture run `33949179655` returned 30,572 unique records: 22,429 top-level comments and 8,143 replies, including 203 creator records. The capture used 597 API requests. Reply pagination was separate where embedded reply sets were incomplete.

Count reconciliation is not uniformly clean: 59 videos reconcile without pagination faults, 14 reconcile after deduplication, and one remains discrepant. The focused 39-request audit, run `33949558539`, repeatedly observed 780 time-ordered IDs against a stable reported count of 781 for `Y5OUS-pM9Mc`. The relevance-ordered result contained 647 IDs. The missing record's cause remains unknown.

The canonical review records all 203 creator comments read and audience comments computationally screened, not every audience comment individually interpreted. It records 24 corrections/qualifications and 14 selected primary sources with explicit review depth. It does not claim full transcript acquisition or exhaustive linked-source review.

Offline description-marker reprocessing recovered 325 markers across 49 videos; 47 lists meet the recorded sequence-candidate checks. These are description time markers, not confirmed player chapter metadata.

## Bounded downstream documents

- [Benchora #106](https://github.com/KooshaPari/Benchora/pull/106): original coordination protocol plus `docs/research/2026-09-04-emergent-garden-protocol-amendment.md`, added at `d798711d10a38aa89064160d381f411be26e4ed0`.
- [Agentora #212](https://github.com/KooshaPari/Agentora/pull/212): outcome-evidence and memory-provenance dossier at `00980c669fc594e782c2cd7d87211ed32e06cc21`, against audited base `2460a736e734700e752a00314ef9fbdad2cf5aad`.
- [Tracera #1028](https://github.com/KooshaPari/Tracera/pull/1028): correction-aware evidence and action traces at `28d15c2896c9002a2d8514f805327ffef6e8516f`, against audited base `b23469678da42d0d0ec8c303a7a97e5b1b19d293`.

These are proposed documentation, not accepted API contracts, migrations or benchmark results. The cited commit IDs identify the projected documents; current review, mergeability and CI state must be checked independently.

## Interpretation changes requiring propagation

The original universal-loop formulation is qualified: static generative objects, persistent local dynamics, selected artifact search, goal-directed agents and artistic/normative inquiry are different families. The portfolio's evidence-and-rollback loop is an engineering adaptation, not a theorem attributed to every creator project.

Creator corrections motivate activation-parameterization controls, distinction between code search and model-weight learning, real execution baselines, historical capability pinning, and independent evaluator authority. Audience links remain audience leads rather than retroactive creator influences.

## Executed checks versus unexecuted benchmark

The canonical receipt records nine comment-ingestion tests, sixteen offline analysis/numerical tests, a normalized-tanh identity check over 8,001 points, and a 33-sample, 200-step gradient-descent parameterization control. These checks do not establish which coordination topology performs best. The live Benchora comparison remains specified, not run.

## Remaining work and boundaries

Full transcript acquisition, exhaustive semantic review of audience comments, deep review of every linked source, historical Git lineage, and live multi-agent benchmark execution remain incomplete. The one-comment discrepancy remains unresolved. No additional gate is promoted merely because a source was reachable or a test suite passed.

Full comment text and research-input encryption keys are not included in this projection. The capture used a short-lived encrypted artifact, not a public Git text mirror. No product runtime code, provider spend, hardware action, merge or release is represented here.

HeliosLab, forgecode/heliosLite and PhenoSpecs authority conflicts are unchanged. Regenerate later projections from canonical source revisions and append a new snapshot rather than overwriting this record.
