# Explore Luxembourg 360 — Final Pre-Codex Closure Record

**Status:** IN PROGRESS — active closure record
**Date:** 2026-09-07
**Authority:** Final Pre-Codex Audit + approved Product/Design/Architecture decisions

## Purpose

This record closes, clarifies or reclassifies every finding identified in `FINAL-PRE-CODEX-AUDIT.md` without erasing the historical audit. It is the working checklist for the final gate.

A finding is considered **CLOSED** when the project decision/documentation is now explicit. A finding marked **IMPLEMENTATION GATE** is intentionally deferred to the application foundation because there is no application code yet. A finding marked **PRODUCTION GATE** is not allowed to be forgotten and must be closed before public production.

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

Fallback stacks, required weights, loading strategy, licensing/source verification, multilingual character coverage and performance/accessibility checks remain implementation/production validation items.

Codex may not replace these families for convenience.

**Source:** `docs/design/PRE-CODEX-DESIGN-IMPLEMENTATION-CONTRACT.md`

---

## D-02 — Design-token source of truth

**Status: CLOSED**

A canonical implementation contract now exists at `docs/design/PRE-CODEX-DESIGN-IMPLEMENTATION-CONTRACT.md`.

It defines the approved palette, semantic token requirement, typography, geometry/spacing/elevation principles, composition rules, responsive behaviour, accessibility and visual quality gate.

During foundation work these rules must be materialised as the actual CSS/design-token source of truth. No component may introduce arbitrary project colours or framework-default visual styling.

---

## D-03 — Brand asset package

**Status: IMPLEMENTATION GATE**

The official logo remains authoritative. During repository foundation, create a controlled brand-asset location and record source/licensing information. Codex must not generate a replacement logo.

This cannot be completed correctly until the project asset files are available.

---

## A-02 — Historical R3 provider deferral wording

**Status: CLOSED**

R3 now contains an explicit historical-deferral notice stating that its provider deferrals were intentional at that stage and were subsequently superseded by R4/R5 decisions.

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

The current Render setup is explicitly not a deployed application. No Web Service is to be treated as production while the repository remains documentation-first.

The actual services will be created during foundation work from the real application structure.

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

**Status: MANUAL VERIFICATION REQUIRED**

The connected GitHub integration cannot currently read the branch-protection endpoint. The project owner must verify manually that `main` is protected and direct pushes are controlled, with required checks/reviews configured once CI exists.

This is a governance control and must be verified before the first real protected merge.

---

## S-02 — CI/security workflow

**Status: IMPLEMENTATION GATE**

The repository has no application code yet, so the CI workflow cannot currently execute meaningful application checks.

Foundation must create at minimum:

- lint;
- typecheck;
- unit/integration tests;
- build;
- appropriate dependency/security/secret scanning.

The final readiness gate after foundation must include a successful PR run.

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

### Still required before `READY FOR CODEX`

- Manual verification of GitHub `main` protection.
- Google Maps key restriction configuration sufficient for the first integration.

### Required after Codex foundation but before public production

- CI execution proven on a real PR.
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

The project is **not** marked `READY FOR CODEX` until the two current pre-Codex security/governance gates above are explicitly verified and the final audit is re-run.
