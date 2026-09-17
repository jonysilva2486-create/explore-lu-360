# Explore Luxembourg 360 brand assets

This directory is the controlled production location for the official Explore Luxembourg 360 brand assets.

Only project-owner-approved assets may be added here.

## Project-owner decision — 2026-09-17

The owner confirmed the existing logo as the official approved Explore Luxembourg 360 identity on 17 September 2026. According to that declaration, it was developed specifically for the project in August 2026 through ChatGPT, with AI-assisted image generation, and was selected, approved and subsequently used by João Filipe Gaspar da Silva. He reaffirmed that approval on 17 September 2026.

The existing logo explicitly approved by the project owner is authorised as the official production identity, including its documented AI-assisted origin. This approval applies only to that existing asset. It does not authorise Codex or developers to generate, redraw, vectorise, recolour, replace or create variants of the official logo without explicit project-owner approval.

The official raster master is now present as `explore-luxembourg-360-logo-primary.png`, a PNG verified as 1254 × 1254 pixels. The owner approved this supplied file and corrected the earlier 1536 × 1536 description; the file was not resized. See [D-03 §§2, 4 and 8](../../../../docs/design/D-03-brand-asset-implementation-contract.md) for the reconciled contract and provenance. No specific licence, legal exclusivity or additional rights are inferred from this declaration.

## Rules

- Do not autonomously redraw, regenerate, vectorise or recolour the logo.
- Do not create replacement marks, map pins or symbols.
- Preserve the supplied geometry, proportions and approved colour variants.
- Record provenance and usage rights for non-trivial assets.
- Sanitise and validate SVG files before production use when they originate from an external source.

The supplied official PNG has been added byte-for-byte, without resizing, recompression, optimisation, conversion, metadata removal or colour changes.

## Inventory — 2026-09-17

This directory contains this README and the official raster master:

- File: [`explore-luxembourg-360-logo-primary.png`](explore-luxembourg-360-logo-primary.png)
- Dimensions: 1254 × 1254 px
- Size: 1,100,049 bytes
- SHA-256: `54dd2bc6837655e7bfedd0aee2001905362e5b1a72e6edd0eba3908f862dd9f8`

The SHA-256 matches the original supplied file. No vector asset or additional variant has been added.

| Required input under D-03 | Current state |
|---|---|
| Official primary logo | Present: `explore-luxembourg-360-logo-primary.png`, 1254 × 1254 px; original bytes preserved, SHA-256 recorded above |
| SVG master, where available | No official SVG master currently exists; conditional asset, not permission to vectorise the PNG |
| Approved monochrome/light/dark variants | No official approved variants currently exist; conditional assets, not permission to create them |
| Responsive wordmarks/lockups, where supplied | No approval or delivery documented; do not invent variants |
| Raster fallback, where needed | No separate approved export documented; the PNG master is not automatically an additional fallback |
| Favicon / application icons derived from the official mark | No approval or delivery documented; approval of the PNG master does not authorise icon creation |
| Provenance | Owner-confirmed creation history and approval recorded above and in D-03 §8 |
| Usage-rights documentation and usage/clear-space guidance | No specific licence, legal exclusivity, additional rights or usage/clear-space guidance documented by this decision; applicable documentation remains required |

These are asset roles from `docs/design/D-03-brand-asset-implementation-contract.md`, not invented filenames or permission to generate variants. The supplied PNG is the identified approved master; additional files require explicit owner approval. Applicable geometry, colour, responsive-use and accessibility validation remains required before sign-off; SVG checks apply only if an SVG is supplied later.

This update adds only the supplied official PNG and records its verified dimensions and hash. No asset was generated, vectorised, recoloured or substituted. The application does not yet reference the asset. D-03 is not declared implemented or complete; application integration and the remaining validation and acceptance criteria are still pending.
