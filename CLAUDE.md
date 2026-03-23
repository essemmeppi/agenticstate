# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for **The Agentic State** (agenticstate.org) — a Global GovTech Centre initiative on rethinking government for the era of agentic AI. Hosted on GitHub Pages with a custom domain.

## Architecture

- **Pure static site** — no build system, no package manager, no framework. HTML + CSS + vanilla JS.
- **Pages**: `index.html` (landing), `paper.html` (vision paper reader, ~288KB), `announcements.html`, `contacts.html`, `imprint.html`, `privacypolicy.html`
- **Single CSS file**: `Style Sheets/all.css`
- **Single JS file**: `Scripts/main.js` — handles mobile menu toggle, scroll-to-top, and Bootstrap ScrollSpy for the paper reader
- **External dependency**: Bootstrap (loaded via CDN in `paper.html`) for ScrollSpy and dropdown navigation within the vision paper
- The vision paper PDF is distributed as a GitHub Release asset (repo: `essemmeppi/agenticstate`), not stored in the repo

## Development

No build or test commands. To preview locally, serve the root directory with any static file server:

```
python3 -m http.server 8000
# or
npx serve .
```

## Utility Scripts

- `check-downloads-with-history.sh` — checks GitHub Release download counts (includes historical tracking from deleted v1.0.0 release). Requires `curl` and `jq`.
- `simple-check.sh` — quick download count check for v1.0.0 release

## Branching

- `main` — production branch (deployed via GitHub Pages)
- `dev` — development branch
