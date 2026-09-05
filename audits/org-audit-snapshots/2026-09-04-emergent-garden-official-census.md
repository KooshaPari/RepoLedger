# Emergent Garden Official Census Projection

**Projection:** `EG-PROJ-2026-09-G1-PASS`

**Recorded:** 2026-09-04 America/Los_Angeles; acquisition at `2026-09-05T05:55:02Z`.

**Canonical authority:** `KooshaPari/ResearchLedger`, draft PR #81.

**Observed canonical head:** `cc57a481d3e5747105e589b513ae28a2cc870c1c`.

## Append-only transition

This projection supplements earlier Wave 1, Wave 2, and validation snapshots. Their missing-credential and 15-row Atom-window states remain historical records, not current blockers. No corpus or source-text copy is stored here.

ResearchLedger issue #82 is closed as completed after a successful credentialed official API run. [Run 33948427726](https://github.com/KooshaPari/ResearchLedger/actions/runs/33948427726) used collector source `7a48a604a4ff66d65b595b0e1eb1d9cd1f00ecce` and committed acquisition outputs at `6b41757eb9bb85eb1842a41920770758557b3def`.

The updated research index and checkpoint distinguish original acquisition evidence from a subsequent narrative correction. The original snapshot remains recoverable at its output commit.

## Evidence summary

Two complete ordered upload enumerations returned 74 unique IDs each and matched. Channel counts before and after were both 74. All 74 public video details resolved; all 13 reconciliation checks passed without duplicate IDs, invalid rows, missing details, or wrong-channel records. The successful run used eight API requests and passed 21 offline tests before acquisition.

The current source summary is 74 uploads, 62 non-empty descriptions, 12 empty descriptions, 58 videos with links, 528 description edges, 300 normalized target URLs, and 93 domains. The previous sample had 15 uploads, 186 edges, and 116 targets.

The selected direct frontier comprises 54 URLs: 22 GitHub targets, 19 arXiv targets, and 13 creator-page targets. Metadata retrieval succeeded for 53 and failed for the `https://evolvecode.io/` root. Multiple child pages on that site succeeded. GitHub URLs include alias duplicates and must not be counted as 22 unique implementations.

Zero transcript texts have been acquired. Chapter parsing and the coarse API caption signal require verification. Retrieval success is not full source review or independent reproduction.

## Canonical references

- Current checkpoint: `docs/corpora/emergent-garden/research/2026-09-04-official-census-checkpoint.md` in ResearchLedger.
- Status record: `docs/corpora/emergent-garden/data/youtube-census-status-v1.json`.
- Status SHA-256: `75791a1bdf56591484a120dcff9bff00d774dd04059e80425fca624c94783f90`.
- Description-edge SHA-256: `181bda36d25c1a325b89032761fa26a9680097ec29431d0d85ecf0bfece20c0f`.
- Exact-output manifest: `docs/corpora/emergent-garden/data/youtube-census-manifest-v2.json`, including narrative-correction provenance.

## Projected gates

- G1: PASS for public uploads visible to the API at capture; not private/deleted/unlisted history or an atomic snapshot.
- G2: PARTIAL; description metadata captured, transcript text unacquired, chapter/parser semantics unresolved.
- G3: PARTIAL; one failed target, alias reconciliation, omitted high-value domains, full source review, and recursion remain.
- G4: PARTIAL; earlier repository mappings are not automatically revalidated by the larger inventory.
- G5: SPECIFIED, NOT RUN; Benchora #106 remains documentation-only.
- G6: existing bounded draft PRs only; no broad project implementation clearance.
- G7: no release or merge.

## Authority and next work

ResearchLedger retains source and claim authority. RepoLedger records this transition and downstream state. Benchora's protocol is unchanged. Agentora, thegent, Helios, Civis, and hardware-project implementation are not authorized by a passing inventory gate. The HeliosLab, forgecode/heliosLite, and PhenoSpecs authority conflicts remain unresolved.

Next research work is source-text evidence, chapter/caption verification, URL identity reconciliation, review of the failed target and omitted primary-source domains, and full-text/code review of newly exposed older description chains. The frontier narrative generator needs the curated scope/counting corrections incorporated before another refresh.

No new CI-repair changes are included here. RepoLedger #39 remains a separate prior repair. A successful acquisition workflow is not a claim that every later application CI job passes.

## Refresh and staleness

The recorded API-metadata deadline is `2026-10-05T05:55:01Z`; no unattended refresh/deletion service is claimed. This projection becomes stale if the canonical status, source manifest, failed-target outcomes, text coverage, repository authority, or downstream experiment state changes.

No credential value, raw transcript, audiovisual data, release, product-code change, default-branch mutation, or merge is included in this projection.
