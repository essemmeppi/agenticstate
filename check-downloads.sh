#!/bin/bash

# Script to check PDF download counts from GitHub releases
# Usage: ./check-downloads.sh

echo "📊 Checking download statistics for The Agentic State Vision Paper..."
echo ""

# Get the latest release data
RELEASE_DATA=$(curl -s -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" https://api.github.com/repos/essemmeppi/agenticstate/releases/latest)

# Extract download count
DOWNLOAD_COUNT=$(echo "$RELEASE_DATA" | jq -r '.assets[0].download_count')

# Extract release info
RELEASE_TAG=$(echo "$RELEASE_DATA" | jq -r '.tag_name')
RELEASE_DATE=$(echo "$RELEASE_DATA" | jq -r '.published_at' | cut -d'T' -f1)

echo "📄 Release: $RELEASE_TAG"
echo "📅 Published: $RELEASE_DATE"
echo "⬇️  Downloads: $DOWNLOAD_COUNT"
echo ""
echo "🔗 Download URL:"
echo "$RELEASE_DATA" | jq -r '.assets[0].browser_download_url'
echo ""

# Optional: Show all assets if there are multiple
ASSET_COUNT=$(echo "$RELEASE_DATA" | jq '.assets | length')
if [ "$ASSET_COUNT" -gt 1 ]; then
    echo "📦 All assets in this release:"
    echo "$RELEASE_DATA" | jq -r '.assets[] | "  • \(.name): \(.download_count) downloads"'
fi
