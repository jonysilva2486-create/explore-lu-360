# Explore Luxembourg 360 — Pre-Codex Master Roadmap

**Status:** ACTIVE MASTER ROADMAP  
**Phase:** Architecture & Implementation Readiness  
**Purpose:** Canonical execution map from completed product/design foundations to the Codex implementation start.

## 0. Governing rule

This roadmap is the execution map, but not the authority for historical status by itself. Before starting any item, reconcile it against the project conversation/history, approved ADRs and decisions, Volume II — Software Architecture, and current GitHub documentation.

If an item is already decided elsewhere, do not repeat the decision. Update this roadmap to reflect reality and move to the first genuinely unresolved dependency.

### Mandatory workflow

**Check plan → reconcile history/GitHub → proposal → demonstration when useful → user approval → audit → refine if necessary → record in GitHub → re-check this roadmap → move to the next planned block.**

Do not invent the next block during execution.

---

# 1. PRODUCT — CLOSED

- Product Experience Model — CLOSED
- Information Architecture — CLOSED
- Core User Journeys — CLOSED
- MVP Scope — CLOSED
- Screen Inventory / MVP Flows — CLOSED
- Accountless exploration / account-based memory — CLOSED
- Initial content-production strategy — CLOSED

### Initial content reality

The first implementation must work with content the project can realistically produce initially: curated routes, Google Street View integration, own photography, viewpoints, exterior monument/place documentation, and place/editorial information.

Future capabilities include proprietary 360° capture and authorised interior mapping, without requiring a redesign of the core platform.

---

# 2. DESIGN — CLOSED

## P6.1 — Visual Language
**CLOSED / APPROVED**

## P6.2 — Component Language
**CLOSED / APPROVED**

## P6.3 — Design System Foundations
**CLOSED / APPROVED**

Includes Iconography, Buttons & Controls, System States, Light/Dark Behaviour, Motion and Accessibility.

Dark mode preference is **soft / near-black**, not absolute black as the global background.

---

# 3. APPROVED ARCHITECTURE — RECONCILED

These decisions are not to be reopened unless their documented review trigger is reached.

## ADR-001 — Web/PWA First, Native-Ready

Responsive Web/PWA first; mobile-first; desktop supported; native Android/iOS outside current MVP; architecture remains native-ready.

**Status: ACCEPTED / VALIDATED**

## ADR-002 — Modular Monolith First

Modular monolith for initial implementation, with explicit domain boundaries and future service extraction only when justified.

**Status: ACCEPTED**

## ADR-003 — Data Foundation

PostgreSQL/PostGIS as authoritative data foundation; Redis only where justified; OpenSearch as derived search capability when justified.

**Status: ACCEPTED**

## ADR-004 — Provider-Independent Geospatial Architecture

Provider-independent geospatial abstraction; official Luxembourg sources, OSM, Mapbox, MapTiler and project data may participate as sources/providers; no assumed partnership or licensing without validation.

**Status: ACCEPTED**

## ADR-005 — Identity & Authentication

OAuth 2.0/OIDC, JWT/session model, RBAC, accountless exploration and account-based memory/synchronisation. Auth0 remains the current candidate pending concrete validation.

**Status: ARCHITECTURE ACCEPTED; IMPLEMENTATION VALIDATION REMAINS**

## ADR-006 — Media & 360° Strategy

Google Street View for broad existing coverage; Explore 360 proprietary 360° for differentiation; own photography/video for editorial content; Object Storage + CDN for proprietary media; PostgreSQL stores metadata/relationships rather than large binaries.

**Status: ACCEPTED**

## ADR-007 — API Architecture

Versioned REST API, `/api/v1/`, OpenAPI, clients do not access the database directly, and API/domain boundaries remain reusable by future clients.

**Status: ACCEPTED**

---

# 4. PRE-CODEX READINESS — OPEN WORK

These are the remaining blocks required before the first production implementation begins.

## R1 — Stack & Runtime
**STATUS: CLOSED / APPROVED**

**Decision document:** `docs/architecture/R1-IMPLEMENTATION-STACK-DECISION.md`

Final decision includes Next.js 16.3.x, React 19.2.x, TypeScript strict, Tailwind CSS 4.3.x, Node.js 24 LTS, NestJS 11.x, REST/OpenAPI, PostgreSQL/PostGIS, pnpm, monorepo/pnpm workspaces, Vitest, Playwright, ESLint and Prettier.

Exact patch versions are locked at bootstrap. ORM/data access, mapping, authentication, 360 renderer, cloud, CI/CD, observability and full offline behaviour remain deferred to their roadmap blocks.

**Final audit: PASS / CLOSED.**

---

## R2 — Domain & Data
**STATUS: OPEN**

Define the minimum coherent domain/data model required by the first vertical slice.

Must cover Place, Route/Trail, Media, Experience/360° Experience, User/Identity, Collection/Save, required editorial content, geographic relationships, initial PostgreSQL/PostGIS schema, media rights metadata, MVP search indexing strategy, migrations and seed data.

**Rule:** Do not build the complete future domain model.

---

## R3 — Experience Contract / First Vertical Slice
**STATUS: OPEN**

Turn the approved journey **Explore → Map → Place → Story/Media → 360° → Continue Exploring** into an implementation-ready contract.

Must cover exact screens, component usage, transitions, loading/empty/error states, accountless behaviour, account/save behaviour, Street View, proprietary media, 360° fallbacks, map/place data, API calls, acceptance criteria and representative real content.

**Output:** First Vertical Slice Implementation Specification.

---

## R4 — External Infrastructure & Providers
**STATUS: OPEN**

Validate concrete technologies without reopening the approved architecture strategy.

### R4.1 Mapping provider
Evaluate relevant options such as Mapbox, MapTiler, OSM and official Luxembourg sources for licensing, commercial use, cost, quotas, coverage, geocoding/routing, rendering, Luxembourg requirements and lock-in risk.

### R4.2 Authentication provider
Validate Auth0 or select an alternative if necessary, considering cost, OIDC/OAuth, sessions/tokens, GDPR/privacy, account deletion/export and integration complexity.

### R4.3 360° renderer
Select and validate the initial Web/PWA renderer for mobile performance, touch, fullscreen, Street View integration, proprietary 360°, accessibility and fallback behaviour.

### R4.4 Media storage/CDN
Define the initial storage/CDN approach for proprietary assets, including asset structure, URLs, thumbnails, responsive media, permissions, rights metadata and future processing.

---

## R5 — Operations / Cloud / Security
**STATUS: OPEN**

Define the smallest credible operational foundation for the first vertical slice.

### R5.1 Cloud & deployment
Volume II gives a target direction including AWS, Docker, Kubernetes/Helm and GitHub Actions. Do not overbuild the first slice.

Decide cloud boundary, environments, container strategy, whether Kubernetes is justified initially or deferred, deployment method, secrets/configuration, backups, rollback and cost-control boundaries.

### R5.2 CI/CD
Define the minimum pipeline for lint, type checks, tests, build, appropriate security checks, preview/staging deployment and production approval.

### R5.3 Observability
Rationalise Prometheus, Grafana, Sentry and Datadog rather than adopting all automatically. Define logs, errors, metrics, traces where justified, alerts, dashboards and health checks.

### R5.4 Security / privacy / legal baseline
Cover MVP-relevant controls for secrets, authentication, authorisation, personal data, location permissions, account deletion/data handling, Google attribution/terms, media rights, storage access control and basic auditability.

### R5.5 Offline MVP boundary
Explicitly define what the PWA may cache in MVP. Full offline maps, downloadable regions and complex synchronisation remain out of scope unless explicitly changed.

---

## R6 — Codex Readiness
**STATUS: OPEN**

Prepare a stable implementation contract so Codex does not have to infer architecture.

Must cover repository structure, module boundaries, naming conventions, TypeScript/API conventions, environment variables, secrets policy, testing, lint/format rules, Git workflow, Definition of Done, acceptance criteria, seed/demo data, first vertical slice implementation brief, constraints and explicit non-goals.

### Codex rule

Codex implements approved Product, Design and Architecture. It must not silently redesign product, architecture or scope.

---

# 5. FINAL PRE-CODEX GATE

## Architecture + Product + Design Implementation Readiness Audit
**STATUS: NOT STARTED**

Before production implementation, audit Product, Design, Architecture, Operations and Implementation readiness, including approved ADRs, stack, domain model, API contracts, mapping, authentication, media/360°, storage, cloud, environments, CI/CD, observability, security/privacy, backups/rollback, repository structure, tests, seed data, first vertical slice, acceptance criteria and Codex instructions.

The project may enter implementation only when the audit explicitly states:

> **READY FOR CODEX**

---

# 6. CODEX START

After the final gate:

1. Codex creates the application foundation.
2. Codex implements the first vertical slice.
3. Work remains constrained by approved Product, Design and Architecture decisions.
4. New architectural decisions require explicit review rather than silent invention during coding.

---

# 7. EXECUTION ORDER

```text
PRODUCT                              CLOSED
   ↓
DESIGN                               CLOSED
   ↓
APPROVED ARCHITECTURE                CLOSED / RECONCILED
   ↓
R1 — Stack & Runtime                 CLOSED / APPROVED
   ↓
R2 — Domain & Data                   OPEN ← NEXT
   ↓
R3 — Experience Contract             OPEN
   ↓
R4 — External Infrastructure         OPEN
   ↓
R5 — Operations / Cloud / Security   OPEN
   ↓
R6 — Codex Readiness                 OPEN
   ↓
FINAL PRE-CODEX AUDIT                🔒 GATE
   ↓
READY FOR CODEX                      🚀
   ↓
APPLICATION FOUNDATION
   ↓
FIRST VERTICAL SLICE
```

---

# 8. NON-NEGOTIABLE PROJECT RULE

**We do not move forward by memory or improvisation.**

At the end of every completed block:

1. record the result in GitHub;
2. update this master roadmap;
3. check project history for already-made decisions;
4. confirm the next unresolved item from this roadmap;
5. only then begin the next block.

This roadmap remains the single operational map until the project reaches **READY FOR CODEX**.
