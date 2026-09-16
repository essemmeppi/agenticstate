#!/bin/bash
set -euo pipefail

# Show separate download counts for the Finland full report and key findings.
# Requires GitHub CLI (gh), authenticated for API access.
gh api repos/essemmeppi/agenticstate/releases/tags/first-moves-finland-v1.0 \
  --jq '.assets[] | "\(.name): \(.download_count) downloads"'
