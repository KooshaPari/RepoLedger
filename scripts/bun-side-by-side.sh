#!/usr/bin/env bash
# Run a workspace script via Bun + pnpm.
# Usage: ./scripts/bun-side-by-side.sh <script-name>
set -euo pipefail
SCRIPT="${1:-}"
if [[ -z "$SCRIPT" ]]; then
  echo "usage: $0 <script-name>" >&2
  exit 1
fi
bun --bun pnpm -r run "$SCRIPT"
