# ARCHITECTURE.md

## Overview
Static GitHub Pages site.

## Public files
- `docs/index.html`: top page
- `docs/episodes/index.json`: episode list
- `docs/episodes/epXX/index.html`: episode viewer
- `docs/episodes/epXX/episode.json`: public episode content
- `docs/assets/common/app.css`: shared CSS
- `docs/assets/common/app.js`: shared viewer logic

## Data boundary
Public repo must not contain:
- answer conditions
- endings
- GM prompt
- secret notes

Private repo owns those materials.
