# RepoLedger

Repository ledger — fleet-wide tracking of repos, branches, and PRs across the KooshaPari/Phenotype ecosystem.

[![AI slop inside](https://sladge.net/badge.svg)](https://sladge.net) [![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/KooshaPari/RepoLedger/total)](https://github.com/KooshaPari/RepoLedger/releases)

## Overview

This repository is part of the **Phenotype Fleet** — a multi-repo ecosystem covering Rust workspaces, TypeScript/Node apps, and Python tooling.

## Repository Structure

```
drwxr-xr-x@  23 kooshapari  staff    736 Aug  8 17:54 .
drwxr-xr-x@ 155 kooshapari  staff   4960 Aug  8 16:52 ..
drwxr-xr-x@   3 kooshapari  staff     96 Aug  7 18:58 .circleci
-rw-r--r--@   1 kooshapari  staff    250 Aug  8 17:53 .editorconfig
drwxr-xr-x@  15 kooshapari  staff    480 Aug  8 17:54 .git
drwxr-xr-x@   7 kooshapari  staff    224 Aug  8 17:36 .github
-rw-r--r--@   1 kooshapari  staff     71 Jul 20 20:43 .gitignore
-rw-r--r--@   1 kooshapari  staff   3192 Aug  7 18:58 .mergify.yml
-rw-r--r--@   1 kooshapari  staff   2571 Aug  7 18:58 .pre-commit-config.yaml
drwxr-xr-x@   3 kooshapari  staff     96 Aug  7 18:58 .trunk
drwxr-xr-x@   3 kooshapari  staff     96 Jul 20 20:42 apps
-rw-r--r--@   1 kooshapari  staff    166 Jul 22 06:00 bunfig.toml
-rw-r--r--@   1 kooshapari  staff    270 Aug  8 17:36 CHANGELOG.md
-rw-r--r--@   1 kooshapari  staff   1068 Aug  8 17:53 LICENSE
drwxr-xr-x@   5 kooshapari  staff    160 Jul 20 21:39 node_modules
```

## Getting Started

```bash
# Clone
git clone https://github.com/KooshaPari/RepoLedger.git
cd RepoLedger

# Install dependencies

pnpm install


# Run tests

pnpm test

```

## Development

- Use **trunk** for lint/format: `trunk check`, `trunk fmt`
- Use **mergify** for queue management
- Use **dependabot** for dependency updates

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

MIT — see [LICENSE](LICENSE).

## See Also

- [Phenotype Fleet Cockpit](../../cockpit/latest.html) — fleet-wide dashboard
- [KooshaPari/Phenotype](https://github.com/KooshaPari) — fleet overview
