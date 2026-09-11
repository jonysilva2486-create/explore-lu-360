# Production fonts

This directory is the controlled asset location for the production WOFF2 files required by D-01.

## Canonical families

- Cormorant Garamond — editorial/display
- Inter — interface/utility

The production files must be sourced from the approved open-source distributions and retained with their applicable SIL Open Font License 1.1 notices.

Do not add Google Fonts runtime imports or replace the canonical families with framework/system fonts as a design decision.

Before aggressive subsetting, validate the real character coverage required by French, German, English, Dutch, Portuguese and Luxembourgish content.

## Inventory — 2026-09-10

Only this README is present. CSS declares the canonical family names and fallback stacks, but there are no WOFF2 files or font-loading declarations. The intended fonts are therefore not bundled/loaded by the application.

| Approved family | Required weight coverage | Missing deliverables |
|---|---|---|
| Cormorant Garamond | 400, 500, 600 | Self-hosted WOFF2 asset(s) covering these weights; SIL OFL 1.1 notice; source/version record |
| Inter | 400, 500, 600, 700 | Self-hosted WOFF2 asset(s) covering these weights; SIL OFL 1.1 notice; source/version record |

Authoritative sources recorded by D-01:

- Cormorant: https://github.com/CatharsisFonts/Cormorant
- Inter: https://github.com/rsms/inter

Exact filenames, static-versus-variable packaging and subset boundaries have not been selected. Do not invent additional required styles or weights. After approved asset intake, wire controlled local loading with a non-blocking strategy and validate all six languages, layout shift, mobile/network behaviour and accessibility under D-01.

This pass inventories only: no downloads, substitutes, font-CDN imports or changes to the approved typography.
