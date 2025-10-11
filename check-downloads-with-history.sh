#!/bin/bash

# Script to check PDF download counts with historical tracking
# Usage: ./check-downloads-with-history.sh

echo "📊 Checking download statistics for The Agentic State Vision Paper..."
echo ""

# Historical downloads that were lost when v1.0.0 was deleted
HISTORICAL_DOWNLOADS=302

# Get current release data
TIMESTAMP=$(date +%s)
RELEASE_DATA=$(curl -s -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28" -H "Cache-Control: no-cache" "https://api.github.com/repos/essemmeppi/agenticstate/releases/latest?t=$TIMESTAMP")

# Extract current download count
CURRENT_DOWNLOADS=$(echo "$RELEASE_DATA" | jq -r '.assets[0].download_count')

# Calculate total including historical
TOTAL_DOWNLOADS=$((CURRENT_DOWNLOADS + HISTORICAL_DOWNLOADS))

# Extract release info
RELEASE_TAG=$(echo "$RELEASE_DATA" | jq -r '.tag_name')
RELEASE_DATE=$(echo "$RELEASE_DATA" | jq -r '.published_at' | cut -d'T' -f1)
ASSET_NAME=$(echo "$RELEASE_DATA" | jq -r '.assets[0].name')
ASSET_SIZE=$(echo "$RELEASE_DATA" | jq -r '.assets[0].size')

echo "📄 Current Release: $RELEASE_TAG"
echo "📅 Published: $RELEASE_DATE"
echo "📁 Asset: $ASSET_NAME"
echo "📏 Size: $(($ASSET_SIZE / 1024 / 1024)) MB"
echo ""
echo "📊 Download Statistics:"
echo "  • Current Release Downloads: $CURRENT_DOWNLOADS"
echo "  • Historical Downloads (v1.0.0): $HISTORICAL_DOWNLOADS"
echo "  • TOTAL DOWNLOADS: $TOTAL_DOWNLOADS"
echo ""
echo "🔗 Download URL:"
echo "$RELEASE_DATA" | jq -r '.assets[0].browser_download_url'
echo ""

# Test download functionality
echo "🧪 Testing download functionality..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" -L "$(echo "$RELEASE_DATA" | jq -r '.assets[0].browser_download_url')")
if [ "$HTTP_STATUS" = "200" ]; then
    echo "✅ Download URL is accessible (HTTP $HTTP_STATUS)"
else
    echo "❌ Download URL returned HTTP $HTTP_STATUS"
fi
