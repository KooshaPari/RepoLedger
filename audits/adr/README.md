# Architecture Decision Records (ADR) — Template

This directory holds the canonical ADR records for the host repo.
Each ADR follows the MADR (Markdown Architectural Decision Records)
3.0 convention with phenotype-specific extensions.

## File naming

- `NNNN-<slug>.md` where `NNNN` is a zero-padded 4-digit ordinal
- Slug is kebab-case, max 5 words
- Files are append-only; never rename an existing ADR. If the
  decision is reversed, write a new ADR with `Superseded-by:` header

## Status lifecycle

| Status | Meaning |
|---|---|
| `proposed` | Under discussion; no commitment yet |
| `accepted` | Adopted; downstream code must follow |
| `rejected` | Considered, declined; rationale preserved |
| `superseded` | Replaced by a later ADR; pointer in header |
| `deprecated` | No longer relevant; kept for history |

## Frontmatter (phenotype extension)

```yaml
---
id: NNNN
title: <short title>
status: proposed | accepted | rejected | superseded | deprecated
date: YYYY-MM-DD
deciders: <comma-separated>
consulted: <comma-separated>
informed: <comma-separated>
supersedes: <id> (optional)
superseded-by: <id> (optional)
related-fr-ids: <FR-...> (optional)
backlog: <BACKLOG-...> (optional)
---
```

## Body template

```
# NNNN — <title>

## Context and Problem Statement

<What is forcing this decision? What constraints?>

## Decision Drivers

* driver 1
* driver 2

## Considered Options

* option 1
* option 2
* option 3

## Decision Outcome

<Chosen option, with rationale.>

### Consequences

* Good, because ...
* Bad, because ...

### Confirmation

<How will compliance with this decision be confirmed?>

## Pros and Cons of the Options

### option 1

<example | good | bad>

### option 2

<example | good | bad>

## References

* <link 1>
* <link 2>
```

## Cross-references

- MADR 3.0: <https://adr.github.io/madr/>
- Phenotype parent convention: see `docs/adr/` in
  `phenotype-registry` if it exists.
- This ADR is the canonical template for the cluster of 5 repos
  (Benchora, PhenoPlugins, Eidolon, RepoLedger, ResearchLedger)
  that lack ADRs.
