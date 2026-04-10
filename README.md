# Property Report Template

This workspace is a clean template derived from the visual structure of the prior property-specific report, with all legacy subject content removed.

## What's editable

- [`data/property-template.js`](/Users/yirongding/Documents/Claude/Projects/3055 Patrick Henry/data/property-template.js)
  This is the main content file. Update the address, summary, cards, tables, bullets, and section notes here.
- [`index.html`](/Users/yirongding/Documents/Claude/Projects/3055 Patrick Henry/index.html)
  Keeps the shell minimal and loads the template data + renderer.
- [`styles.css`](/Users/yirongding/Documents/Claude/Projects/3055 Patrick Henry/styles.css)
  Contains the preserved visual system from the original report, cleaned up for reuse.
- [`app.js`](/Users/yirongding/Documents/Claude/Projects/3055 Patrick Henry/app.js)
  Renders the tabbed report from the data file.

## Safety check

Run:

```bash
node scripts/audit-template.js
```

This flags legacy references such as old property names, old submarkets, and leftover filename terms before the site is shared.

## Recommended next steps for 3055 Patrick Henry

1. Replace the placeholder content in `data/property-template.js` with verified subject-property facts.
2. Add new Santa Clara-specific images/maps into a fresh folder like `assets/3055-patrick-henry/`.
3. If you need dynamic charts or richer comp cards, add new data files instead of hard-coding them into `index.html`.
4. Re-run the audit script before publishing.
