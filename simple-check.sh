#!/bin/bash

# Simple script to check PDF download counts
# Usage: ./simple-check.sh

echo "📊 Download count for The Agentic State Vision Paper:"

curl -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/essemmeppi/agenticstate/releases/tags/v1.0.0 \
  | jq '.assets[] | "⬇️  \(.name): \(.download_count) downloads"'
