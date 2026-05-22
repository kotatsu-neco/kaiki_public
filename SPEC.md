# SPEC.md

## Purpose
A static GitHub Pages site that presents episodes of a horror pictogram reasoning game.

## Public user flow
1. Open the episode page.
2. Read the introduction.
3. View scene and pictogram images in a fixed order.
4. Read the final situation.
5. Write a free-form action answer.
6. Copy the answer for GM judgment in a separate ChatGPT session.

## Non-goals
- No automatic judging in the public site.
- No answer reveal.
- No endings.
- No secret GM instructions.

## Episode structure
Each episode lives at:

```text
docs/episodes/epXX/
  index.html
  episode.json
  assets/
    scene/
    pictograms/
```

## Acceptance criteria
- Public site contains no secret judgment rules.
- Episode can be played on mobile.
- Images are shown in fixed order.
- The answer can be copied easily.
