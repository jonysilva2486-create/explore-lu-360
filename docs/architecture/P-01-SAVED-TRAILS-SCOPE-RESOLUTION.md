# P-01 — Saved Trails Scope Resolution

**Status:** CLOSED
**Gate:** Final Pre-Codex Audit
**Date:** 2026-09-09

## Finding

The Final Pre-Codex Audit identified an apparent ambiguity between the MVP screen inventory (`S09 — Saved Trails`) and earlier wording describing Save primarily around Places.

## Resolution

The ambiguity is resolved in favour of the explicit MVP scope recorded in `docs/product/PDR-004-mvp-scope.md`:

- **Save Place:** MVP.
- **Save Route/Trail:** MVP, as part of the basic Route/Trail capability.
- **Saved Places:** MVP personal view.
- **Saved Trails:** MVP personal view corresponding to saved basic Routes/Trails.
- **Collections:** authenticated capability may remain minimal; richer collection management is not required for the first vertical slice.

The distinction between the **first vertical slice** and the **complete MVP** is intentional. The first vertical slice proves Save Place first; this does not remove Saved Trails from the complete MVP scope.

## Implementation rule

Codex must implement Saved Trails as an authenticated personal view for saved basic Routes/Trails. It must not infer that route saving or Saved Trails are deferred merely because the first vertical slice validates Place saving first.

At the same time, Codex must not expand this scope into advanced route tracking, navigation, full offline functionality, social features or rich collection management without a separate approved decision.

## Authority

This resolution is subordinate to the approved product scope and screen inventory. The canonical product source is:

`docs/product/PDR-004-mvp-scope.md`

The screen definition remains:

`docs/product/PDR-005-screen-inventory-mvp-user-flows.md`

The implementation contract remains:

`docs/architecture/R6-CODEX-READINESS.md`

## Audit outcome

**P-01 — CLOSED.**

No product decision remains open on Saved Trails scope.
