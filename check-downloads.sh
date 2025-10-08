#!/bin/bash

# Script to check PDF download counts from GitHub releases
# Usage: ./check-downloads.sh

echo "📊 Checking download statistics for The Agentic State Vision Paper..."
echo ""

# Get the latest release data with cache-busting
TIMESTAMP=$(date +%s)
RELEASE_DATA=$(curl -s -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" -H "Cache-Control: no-cache" "https://api.github.com/repos/essemmeppi/agenticstate/releases/latest?t=$TIMESTAMP")

# Check if we got valid data
if [ "$(echo "$RELEASE_DATA" | jq -r '.message')" != "null" ] && [ "$(echo "$RELEASE_DATA" | jq -r '.message')" != "" ]; then
    echo "❌ Error: $(echo "$RELEASE_DATA" | jq -r '.message')"
    exit 1
fi

# Extract download count
DOWNLOAD_COUNT=$(echo "$RELEASE_DATA" | jq -r '.assets[0].download_count')

# Extract release info
RELEASE_TAG=$(echo "$RELEASE_DATA" | jq -r '.tag_name')
RELEASE_DATE=$(echo "$RELEASE_DATA" | jq -r '.published_at' | cut -d'T' -f1)
ASSET_NAME=$(echo "$RELEASE_DATA" | jq -r '.assets[0].name')
ASSET_SIZE=$(echo "$RELEASE_DATA" | jq -r '.assets[0].size')
ASSET_UPDATED=$(echo "$RELEASE_DATA" | jq -r '.assets[0].updated_at')

echo "📄 Release: $RELEASE_TAG"
echo "📅 Published: $RELEASE_DATE"
echo "📁 Asset: $ASSET_NAME"
echo "📏 Size: $(($ASSET_SIZE / 1024 / 1024)) MB"
echo "⬇️  Downloads: $DOWNLOAD_COUNT"
echo "🕒 Last Updated: $ASSET_UPDATED"
echo ""
echo "🔗 Download URL:"
echo "$RELEASE_DATA" | jq -r '.assets[0].browser_download_url'
echo ""

# Show detailed asset info
echo "📊 Detailed Asset Information:"
echo "$RELEASE_DATA" | jq -r '.assets[0] | "  • State: \(.state)\n  • Content Type: \(.content_type)\n  • Created: \(.created_at)\n  • Updated: \(.updated_at)"'
echo ""

# Optional: Show all assets if there are multiple
ASSET_COUNT=$(echo "$RELEASE_DATA" | jq '.assets | length')
if [ "$ASSET_COUNT" -gt 1 ]; then
    echo "📦 All assets in this release:"
    echo "$RELEASE_DATA" | jq -r '.assets[] | "  • \(.name): \(.download_count) downloads"'
fi

# Test download functionality
echo ""
echo "🧪 Testing download functionality..."
echo "Testing download URL accessibility..."

HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -L "https://github.com/essemmeppi/agenticstate/releases/download/v1.0.0/The.Agentic.State.-.Vision.Paper.pdf")
if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Download URL is accessible (HTTP $HTTP_STATUS)"
else
    echo "❌ Download URL returned HTTP $HTTP_STATUS"
fi
