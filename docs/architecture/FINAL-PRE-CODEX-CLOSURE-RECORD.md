# Explore Luxembourg 360 — Final Pre-Codex Closure Record

**Status:** RECONCILED — Foundation technically prepared with bounded owner acceptance; human review and merge approval pending
**Date:** 2026-09-07
**Implementation reconciliation:** 2026-09-10
**Current checkpoint reconciliation:** 2026-09-27, HEAD `500ed58b0576d039efe89f8175a11c72515d565d`; current evidence and owner acceptance are in `FOUNDATION-VALIDATION-RECORD.md`.
**Authority:** Final Pre-Codex Audit + approved Product/Design/Architecture decisions

## Purpose

This record closes, clarifies or reclassifies every finding identified in `FINAL-PRE-CODEX-AUDIT.md` without erasing the historical audit. It is the working checklist for the final gate.

A finding is considered **CLOSED** when the project decision/documentation is explicit; this does not mean the corresponding feature has been implemented. An **IMPLEMENTATION GATE** belongs to the relevant implementation increment. A **PRODUCTION GATE** must be closed before public production.

Application code now exists on `feature/foundation` / PR #1. The owner authorised foundation-only closure on 2026-09-10, not R3 implementation or merge. Current technical evidence, asset inventory and governance actions are recorded in [Foundation validation](FOUNDATION-VALIDATION-RECORD.md). Historical findings below retain their decision authority; this reconciliation does not claim retroactive approval of previously unverified gates.

---

## P-01 — Saved Trails scope ambiguity

**Status: CLOSED**

PDR-004 has been clarified: basic Route/Trail saving is MVP, `Saved Trails` is therefore an MVP personal view, while richer Collections remain minimal/future.

The first vertical slice may prove Save Place first without redefining the complete MVP boundary.

**Source:** `docs/product/PDR-004-mvp-scope.md`

---

## A-01 — Volume I reconciliation

**Status: CLOSED**

A canonical reconciliation record now exists at `docs/architecture/VOLUME-I-RECONCILIATION.md`.

It preserves the material principles: territory-first/not trail-first, 360° as territorial and immersive dimension, accountless exploration/account-based memory, premium editorial identity, community as future direction, and privacy-aware location handling.

Where historical wording conflicts with later approved decisions, the later approved decision governs implementation and the conflict is recorded rather than silently resolved.

---

## D-01 — Typography freeze

**Status: CLOSED as product decision; PRODUCTION VALIDATION remains required**

Canonical production direction is frozen as:

- **Cormorant Garamond** — editorial/display/place names/storytelling.
- **Inter** — interface/metadata/navigation/controls/technical text.

Historical state on 2026-09-10: only fallback stacks existed; font assets/notices and loading integration were missing. Current state: seven official WOFF2 faces, notices and local loading are integrated. The owner accepts current Foundation typography with the four experimental limitations remaining INCONCLUSIVE, not PASS. Production validation criteria are not thereby demonstrated. See the font inventory and Foundation Validation Record; previous valid evidence remains preserved.

Codex may not replace these families for convenience.

**Source:** `docs/design/PRE-CODEX-DESIGN-IMPLEMENTATION-CONTRACT.md`

---

## D-02 — Design-token source of truth

**Status: CLOSED**

A canonical implementation contract now exists at `docs/design/PRE-CODEX-DESIGN-IMPLEMENTATION-CONTRACT.md`.

It defines the approved palette, semantic token requirement, typography, geometry/spacing/elevation principles, composition rules, responsive behaviour, accessibility and visual quality gate.

The initial CSS token layer in `apps/web/src/app/globals.css` was partial evidence at the 2026-09-10 checkpoint. Current Foundation acceptance covers the implemented theme and previously obtained contrast, responsive, keyboard, focus and accessibility evidence for existing surfaces. Dynamic-map contrast and absence of complete WCAG certification remain explicit limitations. No component may introduce arbitrary project colours or framework-default visual styling.

---

## D-03 — Brand asset package

**Status: ACCEPTED FOR CURRENT FOUNDATION SURFACES; PRODUCTION / NEW-SURFACE VALIDATION REMAINS APPLICABLE**

Historical state on 2026-09-10: `apps/web/public/brand/` contained only its README. Current state: the owner-approved PNG master and provenance are present and the application references it directly. Current desktop/mobile use is accepted for the Foundation. SVG, light/dark/monochrome variants and favicon do not exist and are not required for this bounded closure. Codex must not generate replacements or variants.

No new clear-space measurements or usage rights are invented; existing usage rules remain. This acceptance does not approve production or new surfaces.

---

## A-02 — Historical R3 provider deferral wording

**Status: CLOSED**

`A-02-HISTORICAL-DECISION-RECONCILIATION.md` records that R3 provider deferrals were historical and were subsequently superseded by R4/R5 decisions.

Codex must use the later approved provider/runtime decisions rather than treating R3's historical deferral as an unresolved choice.

---

## G-01 — ACT/Géoportail dataset-level validation

**Status: PRODUCTION GATE**

The architectural provider decision is closed: Géoportail/ACT remains the preferred official Luxembourg geospatial provider, while the project remains provider-independent.

Before production reuse, each concrete dataset/service must be checked for licence, attribution, caching and special conditions. The pending ACT correspondence does not block Codex foundation, provided implementation uses the approved abstraction and does not assume blanket rights.

---

## G-02 — Street View / proprietary 360° wording

**Status: CLOSED**

`docs/architecture/PROVIDER-EXPERIENCE-RECONCILIATION.md` explicitly separates:

- user-facing experience priority from R3;
- continuous trail distribution practicality from R4.3.

Owned Explore 360 immersive content remains the differentiated experience where available. Google Street View remains an external experience/distribution layer and a practical channel for continuous project-created trail coverage where appropriate.

---

## G-03 — Google API-key security

**Status: SECURITY CONFIGURATION GATE**

The security policy is now recorded at `docs/architecture/GOOGLE-API-KEY-SECURITY-POLICY.md`.

Before integration, the actual Google credential must be configured with:

- application restriction;
- API restriction limited to APIs actually used;
- environment separation where practical;
- no secret in GitHub or chat;
- server-side credentials kept server-side.

The exact web-origin allowlist cannot be finalised until the real application domains exist. This is intentional.

---

## I-01 — Auth0 US-5 development tenant / EU production

**Status: DECISION CLOSED; PRODUCTION CONFIGURATION GATE**

The current Auth0 tenant is explicitly **development-only**.

Production/staging identity must use a separate EU-region Auth0 tenant if required by the project's final privacy/data-placement assessment. Existing Auth0 tenants cannot be transferred between regions, so this decision must be respected before production identity data is introduced.

**Source:** `docs/architecture/ENVIRONMENT-DATA-RESIDENCY-POLICY.md`

---

## C-01 — R2 security configuration

**Status: IMPLEMENTATION / PRODUCTION GATE**

The approved R2 model is now fixed: private masters/originals, controlled public derivatives, appropriate CORS, signed access where required, versioned/immutable asset keys where practical, retention/deletion controls and environment separation.

Codex must implement this model; it must not default to a public bucket.

---

## O-01 — Draft Render service vs real application

**Status: CLOSED AS A PRE-CODEX ACCOUNT-SETUP ISSUE**

Application code now exists, but this repository checkpoint provides no validated staging or production deployment. The historical draft account/service setup is not proof of deployment. Runtime provisioning and release validation remain separate approved tasks; this foundation pass creates no Render services.

---

## O-02 — Render region

**Status: DECISION CLOSED; CREATION GATE**

The approved production target is **Frankfurt, Germany** for the Render Web/API and managed PostgreSQL resources where appropriate. Services that need private-network communication with the database should share the same region.

The current Oregon setup is not the definitive production environment. Because Render regions are chosen at resource creation and are not changed in place, the definitive production resources must be created correctly from the start.

**Source:** `docs/architecture/ENVIRONMENT-DATA-RESIDENCY-POLICY.md`

---

## D-04 — Redis/OpenSearch conditional infrastructure

**Status: CLOSED**

Redis and OpenSearch remain conditional supporting infrastructure. They are not mandatory day-one provisioning requirements. PostgreSQL/PostGIS is the authoritative foundation; OpenSearch remains rebuildable from authoritative data if later introduced.

---

## B-01 — Recovery configuration inventory

**Status: PRODUCTION GATE**

Before production, create a non-secret inventory covering environment configuration names, owners, provisioning locations, backup/recovery dependencies and rotation procedures. Secret values must never be stored in the inventory.

---

## O-03 — Monitoring / alert ownership

**Status: PRODUCTION GATE**

Before public production, instantiate the minimum approved uptime/operational monitoring and define alert recipients and incident ownership. Monitoring must remain system-focused and minimise personal data in logs.

---

## S-01 — GitHub main branch protection

**Status: CORRECTED AND VERIFIED AT CURRENT CHECKPOINT**

Historical evidence on 2026-09-10: `Protect principal` (22632366) had deletion, non-fast-forward and update restrictions, no bypass actors and no PR/required-check rules, preventing the intended integration flow. At the current checkpoint, PR and strict required `Quality gates` rules are verified; deletion/force-push protections remain and `Restrict updates` is removed. The owner confirmed no bypass actors. Zero required approvals does not waive the human-review process.

The historical correction checklist and current evidence are in `FOUNDATION-VALIDATION-RECORD.md`. No administrative change or merge is performed by this reconciliation.

This is a governance control and must be verified before the first real protected merge.

---

## S-02 — CI/security workflow

**Status: QUALITY GATES VERIFIED ON CURRENT REFERENCE HEAD**

The original PR CI passed after the Tailwind fix. The closure pass adds explicit TypeScript linting for the API, regression coverage of that configuration, strict `--frozen-lockfile` installation, map-adapter tests and HTTP smoke tests of the compiled API. The workflow retains the stable `Quality gates` check name for branch protection.

Both Quality gates passed on reference HEAD `500ed58b0576d039efe89f8175a11c72515d565d`; run links and approved local results are in `FOUNDATION-VALIDATION-RECORD.md`. A previous green run must not be presented as evidence for later changes. Administrative security controls are separately owner-confirmed there, not inferred from CI. CodeQL setup is enabled; application analysis on main remains post-merge, not yet proven.

---

## P-02 — Privacy/GDPR operational artefacts

**Status: PRODUCTION GATE**

The architecture is approved, but the following must exist before public production:

- data inventory;
- processor register;
- DPA/contract register;
- international-transfer assessment where relevant;
- retention/deletion schedule;
- privacy notice;
- user-rights handling procedure;
- DPIA screening and full DPIA where legally triggered.

Codex must not invent legal policy text as a substitute for qualified privacy/legal review.

---

## P-03 — EU-first processor policy

**Status: CLOSED**

The EU-first environment/data-residency policy is now explicit and applies across processors, not just Render and Auth0. Provider-specific exceptions must be documented and explicitly decided before production.

---

## M-01 — First real route capture

**Status: PRODUCTION / FIELD VALIDATION GATE**

Capture Standard v1 must be validated on a real route before field-production operations are considered final. This does not block creation of the application foundation.

---

## M-02 — Rights / EXIF / GPS workflow

**Status: PRODUCTION MEDIA GATE**

Before public media publication, implement the rights/permission metadata workflow and deliberate EXIF/GPS handling. Personal/location-sensitive metadata must not be exposed unintentionally.

---

## R-01 — Root README

**Status: CLOSED**

The root README is now a concise implementation entry point with links to the Master Roadmap, R6, Final Audit, Volume I reconciliation, Volume II and the project's governing principles.

---

## R-02 — Canonical implementation entry point

**Status: CLOSED**

The README now points directly to the Master Roadmap, R6 and the final audit/reconciliation records. Codex is not expected to discover the project architecture through filename archaeology.

---

## Final gate state after this closure pass

### Closed now

- Product/MVP Saved Trails ambiguity
- Volume I reconciliation
- Typography product decision
- Design token contract
- R3 historical wording
- 360° provider reconciliation
- EU-first environment policy
- Redis/OpenSearch day-one scope
- Root README / implementation entry point

### Current foundation closure / integration requirements

- Governance and reference-head CI are verified; official assets are integrated and D-01/D-02/D-03 have bounded Foundation owner acceptance with documented limitations.
- Approve and separately publish the documentary reconciliation, verify resulting CI, and explicitly authorise Ready for review; then obtain human PR review and explicit merge approval. No final sign-off or merge is granted here.
- Verify CodeQL application analysis on main after an authorised merge. R3 remains separately authorised work.

### Separate integration gate

- Google Maps key restrictions remain required before actual Google integration. No Google integration or credential is introduced by the foundation pass.

### Required after Codex foundation but before public production

- CI execution on a real PR is already proven; future increments retain their own CI/release requirements.
- R2 bucket/policy implementation.
- EU Auth0 production tenant and privacy/contractual review.
- Render Frankfurt production resources.
- ACT/Géoportail dataset-level rights validation.
- Recovery inventory and restore test.
- Monitoring/alert ownership.
- Privacy/GDPR operational artefacts and DPIA screening.
- Rights/EXIF/GPS publication workflow.
- First real route capture validation.
- Production domain/DNS.

## Gate rule

The historical pre-Codex gate is not retrospectively declared passed. Current implementation status is foundation closure in progress; the live evidence and verdict are in `FOUNDATION-VALIDATION-RECORD.md`. Neither CI success nor this reconciliation grants R3 start, merge or production approval.
