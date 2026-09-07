# Explore Luxembourg 360 — Provider / 360° Experience Reconciliation

**Status:** Accepted
**Date:** 2026-09-07

## Purpose

Resolve the apparent wording tension between the earlier R3 experience contract and the later R4.3 360° capture/distribution strategy.

## Decision

The two decisions operate at different layers and are therefore complementary:

- **R3 defines user-facing experience priority:** when Explore Luxembourg 360 owns a suitable 360° experience, that project-owned experience has priority as the differentiated Explore Luxembourg 360 experience; external Street View is used where appropriate when owned coverage is unavailable or unsuitable.
- **R4.3 defines capture/distribution practicality for continuous outdoor coverage:** Google Street View is a preferred external distribution channel for project-created continuous trail coverage where the relevant operational, technical and rights conditions are satisfied.

These statements must not be interpreted as competing global provider-selection rules.

## Implementation rule

Provider choice is evaluated by experience layer:

| Layer | Priority / role |
|---|---|
| Project-owned immersive experience | Preferred differentiated experience where available |
| Continuous project-created trail distribution | Google Street View preferred where operationally appropriate |
| External existing panorama coverage | Google Street View as an external experience source |
| Territorial geographic authority | PostgreSQL/PostGIS |
| Official Luxembourg geospatial provider | Géoportail / ACT preferred provider |

## Non-negotiable boundary

Google panorama identifiers are external references. They must never become permanent Explore Luxembourg 360 territorial identifiers or replace the project's own domain relationships.

Codex must keep provider-specific SDKs, identifiers and integration mechanics behind the approved provider boundaries.
