# D-01 — Production Typography Contract

**Status:** CLOSED / APPROVED
**Phase:** Final Pre-Codex Audit
**Authority:** P6.1 Typography & Content Hierarchy Refinement + final pre-Codex resolution

## 1. Decision

Explore Luxembourg 360 uses **Cormorant Garamond** and **Inter** as its canonical production typefaces.

This decision freezes the editorial/utility pairing already established by the design system. Codex must not replace either typeface with a generic system font, another web font, or a framework default without an explicit project decision.

## 2. Roles

### Cormorant Garamond — editorial/display

Use for:

- Display moments;
- major place names;
- principal storytelling titles;
- selected editorial headings and immersive narrative moments.

Cormorant Garamond is deliberately used with restraint. It is not the default interface font.

### Inter — interface/utility

Use for:

- navigation;
- controls and buttons;
- forms;
- metadata;
- labels;
- search and filtering UI;
- technical information;
- body/supporting text where interface readability is the priority.

## 3. Approved weights

The implementation should keep the weight set intentionally small:

| Family | Approved weights | Primary use |
|---|---|---|
| Cormorant Garamond | 400, 500, 600 | editorial/display hierarchy |
| Inter | 400, 500, 600, 700 | interface, body, metadata and emphasis |

Weights outside this set must not be introduced merely for visual variation.

## 4. Fallback policy

Fallbacks are resilience mechanisms, not alternate brand choices.

```css
--font-display: "Cormorant Garamond", Georgia, "Times New Roman", serif;
--font-ui: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
```

The canonical family must be attempted first. Fallbacks must preserve readable hierarchy and must not become the normal production path.

## 5. Font source and licensing

Both typefaces are open-source fonts distributed under the **SIL Open Font License 1.1**.

- Cormorant: Catharsis Fonts / Christian Thalmann.
- Inter: Inter Project.

The repository must retain the applicable licence notices when font files are bundled or redistributed with the application.

Reference sources:

- https://github.com/CatharsisFonts/Cormorant
- https://github.com/rsms/inter

## 6. Delivery strategy

Production web delivery should use **self-hosted WOFF2 assets** under the project's controlled asset pipeline rather than making the application dependent on a third-party font CDN at runtime.

Requirements:

- WOFF2 preferred for web delivery;
- preload only the critical face(s) actually needed for the initial render;
- use `font-display: swap` or an equivalent non-blocking strategy;
- subset only after language/character coverage has been validated;
- avoid loading unused weights/styles;
- keep font loading compatible with the application's privacy and performance model.

The implementation must not introduce a runtime dependency on Google Fonts merely because the fonts are available there.

## 7. Language and character coverage

The initial language plan is:

- French — Français
- German — Deutsch
- English
- Dutch — Nederlands
- Portuguese — Português
- Luxembourgish — Lëtzebuergesch

The production font assets must be validated against the real character set required by these languages, including diacritics, punctuation, apostrophes, quotation marks, dashes, numerals and other characters present in editorial/place content.

No language may silently fall back to a visibly incompatible typeface for ordinary content.

Validation must include representative real-world strings from all six languages on desktop and mobile widths.

## 8. Responsive and accessibility contract

The approved P6.1 hierarchy remains the basis for implementation:

| Role | Range | Weight | Line-height |
|---|---:|---:|---:|
| Display | 48–64 px | 600 | ~1.1 |
| H1 | 28–40 px | 600 | ~1.2 |
| H2 | 20–28 px | 600 | ~1.3 |
| H3 | 16–20 px | 600 | ~1.4 |
| Body | 14–18 px | 400 | ~1.6–1.7 |
| Supporting | 12–14 px | 400 | ~1.4–1.6 |

These ranges are responsive implementation guidance, not permission to invent a separate typography system.

Accessibility acceptance includes:

- readable body text at supported viewport sizes;
- no meaning conveyed by typography alone where semantics are required;
- sufficient contrast against the approved colour system;
- visible focus and keyboard usability for interactive UI;
- support for browser/user text scaling without destructive layout failure;
- no essential information hidden solely because a font fails to load.

## 9. Premium visual guardrail

Typography is part of the Explore Luxembourg 360 identity. The implementation must preserve the contrast between **editorial character** and **quiet functional clarity**.

Reject implementations that produce:

- generic SaaS typography;
- indiscriminate use of Cormorant;
- excessive font-size variation;
- heavy all-caps UI treatment;
- decorative typography that reduces usability;
- framework-default typography that erases the project's identity.

## 10. Performance acceptance

Typography is considered implementation-complete only when:

1. Critical text remains usable during font loading.
2. No unnecessary font weights/styles are downloaded.
3. Font files are served from the project's controlled asset/CDN path.
4. Mobile loading is tested on a constrained connection.
5. Layout shift caused by font loading is measured and kept within the project's performance budget.
6. All six planned languages are tested before any aggressive subsetting is committed.

## 11. Implementation authority

This document closes D-01 for the final pre-Codex gate.

Codex may decide the exact bundling/build mechanics inside this contract, but may not change:

- the two canonical families;
- their editorial/interface roles;
- the approved weight boundaries;
- the privacy-oriented delivery principle;
- the multilingual validation requirement;
- the accessibility/performance acceptance criteria.

Any material change requires an explicit human decision and documentation update.

**D-01 — CLOSED.**
