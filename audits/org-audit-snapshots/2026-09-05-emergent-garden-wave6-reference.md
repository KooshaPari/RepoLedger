# Emergent Garden Wave 6 continuation projection

Campaign `eg-nested-corpus-2026-09`. This append-only note records the interrupted Wave 6 execution and its continuation; prior snapshots are not overwritten.

Canonical research remains [ResearchLedger #81](https://github.com/KooshaPari/ResearchLedger/pull/81), with the new `docs/corpora/emergent-garden/research/WAVE-6-RECOVERY-AND-REFERENCE.md` checkpoint. Work tracking remains [AgilePlus #1073](https://github.com/KooshaPari/AgilePlus/issues/1073).

## Evidence recovery

Fresh comment capture run `33956842110` used ResearchLedger source `b6ada57f0211c67a66bfbaf3f345ecb08b76b9c0`. Artifact `9966649890`, SHA-256 `17a9ebdec97ee19f8315b0744a23143398997a5acba16ca541abd073916d5527`, contains encrypted minimized input. The preceding local pass recovered 30,573 records, reproduced chapter-marker counts and reconstructed the comment-link graph. This is a fresh capture, not proof that the original Wave 3 key was recovered. The extra record alone does not resolve the prior per-video discrepancy.

Public-mirror inspection runs `33957536396` and `33957878043` returned artifacts `9966845218` and `9966954481`. Three timestamped mirrors were identified during the preceding analysis. These are third-party representations, not creator-certified captions or complete-channel transcript coverage. Raw mirror pages and raw audience comments are not fleet projections.

## Executed reference, separate from the language-agent protocol

[Benchora #107](https://github.com/KooshaPari/Benchora/pull/107) is a new open draft at observed source `0802d6925463788e81d58d52f8a6d03c45552909`, branch `worktrees/emergent-garden-reference-20260905`.

Its finite-state scripted-worker design runs 6,480 outer trials: six dispatch policies, three arithmetic task classes, six fault states, three controls and twenty seeds. Prior local execution recorded 1,178, 2,040 and 2,160 correct end states out of 2,160 per control, respectively for unchecked, versioned/idempotent and versioned/recovery execution. Corresponding false-completion counts were 862, zero and zero. Sixteen local deterministic tests passed. Hosted execution requires its own job/result receipt; a PR body is not independent verification.

The implementation corrects an early fault-allocation confound: isolated best-of copies share one injected fault per outer trial and split one total budget. Actual operations and selection overhead remain measurable rather than assumed equal. The arithmetic workers are correct by construction except for injected protocol failures. These results do not rank real LLMs or establish durable process recovery.

[Benchora #106](https://github.com/KooshaPari/Benchora/pull/106) remains the separate language-agent protocol, not a benchmark completed by this simulator. Agentora #212 and Tracera #1028 remain proposed documentation contracts, not implemented runtime migrations.

## Gate interpretation

The official public inventory remains reconciled within its captured scope. Comments now have fresh recoverable input, but whole-corpus semantic review is not claimed. Transcript acquisition advances from no recovered full-span text to selected third-party mirrors, without claiming authenticity or universal coverage. A finite-state execution layer now exists, while the real language-agent experiment remains open.

Open work still includes per-video discrepancy reconciliation, source-text quality/coverage, exhaustive meaningful recursive review and live language-agent evaluation. No product runtime changes, paid model evaluation, hardware actions, default-branch commits, merges or releases are authorized or reported here.

## Staleness

Refresh this projection when the canonical Wave 6 manifest, mirror assessment, comment coverage, Benchora #107 source/results or any downstream decision changes. Store source hashes and actual payloads in ResearchLedger/experiment artifacts; this fleet receipt must not become a competing corpus.
