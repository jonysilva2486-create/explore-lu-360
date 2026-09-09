# Explore Luxembourg 360 — Final Pre-Codex Audit

**Status:** IN PROGRESS — BLOCKERS / VERIFICATIONS IDENTIFIED
**Phase:** Final Pre-Codex Gate
**Date:** 2026-09-07
**Purpose:** Perform the final implementation-readiness audit across Product, Design, Architecture, Operations, Security, Privacy and the documented decisions from the project's earlier volumes before authorising Codex to introduce application code.

> **Gate principle:** A project is not `READY FOR CODEX` merely because the architecture is approved. The implementation contract must also be internally consistent, visually explicit, operationally credible, and secure enough that Codex does not have to invent material decisions.

---

## 1. Executive result

The project foundations are substantially complete and the repository is coherent at the architectural level. R1–R6 are recorded as CLOSED / APPROVED in the master roadmap, while the final pre-Codex gate is correctly still IN PROGRESS.

The repository is currently documentation-first and does **not** contain the application foundation (`apps/web`, `apps/api`, packages, CI workflows or production services). This is consistent with the current pre-implementation stage.

**Current gate result: NOT YET READY FOR CODEX.**

The audit identified a small number of material items that should be closed or explicitly verified before the gate can change to `READY FOR CODEX`.

---

## 2. Scope of audit

The audit covers:

1. Product foundations and MVP boundaries.
2. Design language, typography, colour, premium visual identity and accessibility.
3. Earlier architecture volumes and their reconciliation with the current roadmap.
4. R1–R6 implementation readiness.
5. Domain/data contracts.
6. Provider boundaries: Géoportail / ACT, Google Street View, Auth0, Cloudflare/R2, Render.
7. Cloud/deployment and environment strategy.
8. CI/CD and operational traceability.
9. Security, privacy and GDPR operating baseline.
10. Backup, recovery and rollback.
11. Offline boundary.
12. Codex decision authority and change control.
13. Repository hygiene and source-of-truth discipline.

---

## 3. Product audit

### PASS — Core product identity

Explore Luxembourg 360 remains an exploration platform, not a dashboard or generic map utility. The approved product philosophy is territory-first, exploration-first and community/knowledge oriented.

The product loop remains:

`Explore → Discover → Explore → Continue`

The first vertical slice remains:

`Explore → Discover → Place → Story/Media → Experience → Continue Exploring`

### PASS — Accountless exploration

Exploration remains available without account creation. Persistent Save/Collections require authentication. This is consistently reflected across PDR-004, PDR-005, R3 and R4.2.

### PASS — MVP discipline

PDR-004 explicitly separates MVP, Phase 2, Future and excluded functionality. Native apps, advanced AI, social/community expansion, gamification, full offline, marketplace/booking and premature microservices remain outside the first implementation.

### PASS — Search boundary

Search is a product MVP capability, but it is not a mandatory dependency for the first vertical slice. This distinction is sound and should remain explicit in implementation planning.

### FINDING P-01 — Saved Trails scope ambiguity

PDR-005 includes an MVP screen `S09 — Saved Trails`, while PDR-004 initially describes Save as saving Places and says broader collections can evolve later. R3's first-slice acceptance criteria explicitly prove saving a Place.

**Required resolution before READY FOR CODEX:** Decide whether `Saved Trails` is truly part of the first implementation or whether it is deferred until route saving is explicitly required. Codex must not infer this from screen inventory alone.

**Severity:** HIGH — scope ambiguity.

---

## 4. Earlier-volume reconciliation

### PASS — Volume II direction reconciled

The repository contains `ARCHITECTURE-VALIDATION-VOLUME-II.md`, and subsequent R1–R5 decisions explicitly resolve its material implementation questions: PWA-first, staged modular monolith, PostgreSQL/PostGIS, provider abstraction, Auth0, cloud/runtime, media strategy and operational controls.

Volume II remains useful as historical architecture direction; later approved ADRs and the Master Roadmap are the current operational authority.

### PASS — Volume I reconciliation

A canonical Volume I reconciliation record now exists at `docs/architecture/VOLUME-I-RECONCILIATION.md`.

The record explicitly maps the material Volume I principles to the current Product, Design and Architecture authority and establishes a supersession rule for historical wording that conflicts with later approved decisions. It preserves the agreed territory-first/not trail-first model, 360° as both territorial and immersive dimension, accountless exploration/account-based memory, premium editorial identity, future community direction and privacy-aware location handling.

**Resolution:** A-01 is closed. Codex must use the reconciliation record together with the current Product/Design/Architecture decisions and must not reconstruct Volume I from memory.

**Severity:** CLOSED.

---

## 5. Design audit — premium identity

### PASS — Distinctive visual concept

P6.1 defines a contemporary digital-atlas / editorial-travel / immersive-cartographic language. PDR-006 explicitly rejects generic SaaS aesthetics and requires calm, intelligent, exploratory premium craft.

### PASS — Premium restraint

The repository explicitly rejects:

- generic SaaS/dashboard aesthetics;
- repetitive card grids;
- random gradients;
- meaningless glassmorphism;
- heavy shadows;
- excessive badges;
- template-like navigation;
- animation for novelty.

This is a strong anti-Codex guardrail and must remain a release requirement, not merely a design note.
