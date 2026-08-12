---
id: 0001
title: RepoLedger uses append-only audit snapshots dated YYYY-MM-DD
status: accepted
date: 2026-08-11
deciders: agent-droid-phenotype
consulted: repoledger maintainers
informed: phenoregistry, cockpit
related-fr-ids: FR-XREPO-LEDGER-SNAPSHOT-1
backlog: BACKLOG-CROSSREPO-001-cluster-4
---

# 0001 — RepoLedger uses append-only audit snapshots dated YYYY-MM-DD

## Context and Problem Statement

RepoLedger must produce snapshots of the fleet inventory that
downstream tooling (cockpit, infrastructure runners, audit
reviewers) can rely on. Each snapshot must be immutable so that
a regression can be bisected by date.

## Decision Drivers

* Auditors want a stable sequence of snapshots for compliance.
* The `audit-regen` job (see `just audit-regen`) must be idempotent.
* Date-based filenames double as a human-readable timeline.

## Considered Options

* **Option A — Append-only dated snapshots (chosen)**:
  `audits/org-audit-snapshots/YYYY-MM-DD-<slug>.md`; never overwrite.
* **Option B — Single mutable `latest.md`**: easier to read but
  destroys history.
* **Option C — Git-tagged snapshots**: tag each release; richer
  metadata but harder to grep.

## Decision Outcome

Chose **Option A** because (a) the audit snapshot
(`audits/org-audit-snapshots/2026-08-11-repoledger-fleet-snapshot-2026-08-11.md`)
already follows this convention, and (b) the cluster-wide audit
contract (Benchora, PhenoPlugins, Eidolon, ResearchLedger) all
use the same date-prefix scheme, so one `find` command sweeps
the entire fleet.

### Consequences

* Good, because bisection by date is trivial.
* Good, because the same convention applies cluster-wide.
* Bad, because stale snapshots can hide regressions; the
  `audit-regen` job must run on every audit event.
* Bad, because the filename must be carefully chosen to avoid
  collisions (use `-<slug>` suffix).

### Confirmation

Compliance is confirmed by `find audits/org-audit-snapshots -name '*.md' | sort`
showing monotonically increasing dates.

## Pros and Cons of the Options

### Option A — Append-only dated snapshots

Good: bisection by date.
Good: cluster-wide consistency.
Bad: stale snapshots can hide regressions.

### Option B — Single mutable `latest.md`

Good: easy to read.
Bad: no history.

### Option C — Git-tagged snapshots

Good: rich metadata.
Bad: harder to grep.

## References

* `audits/org-audit-snapshots/2026-08-11-repoledger-fleet-snapshot-2026-08-11.md`
* `audits/README.md` (cluster-wide audit contract)
* MADR 3.0 template at `audits/adr/README.md`
