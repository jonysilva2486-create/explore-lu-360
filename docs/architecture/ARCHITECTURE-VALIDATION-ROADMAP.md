# Explore Luxembourg 360 — Pre-Codex Master Roadmap

**Status:** ACTIVE MASTER ROADMAP  
**Phase:** Architecture & Implementation Readiness  
**Purpose:** Canonical execution map from completed product/design foundations to the Codex implementation start.

## 0. Governing rule

This roadmap is the execution map, but not the authority for historical status by itself. Before starting any item, reconcile it against the project conversation/history, approved ADRs and current GitHub documentation.

**Mandatory workflow:** Check plan → reconcile history/GitHub → proposal → demonstration when useful → user approval → audit → refine if necessary → record in GitHub → re-check this roadmap → move to the next planned block.

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

Initial implementation must work with realistically producible content: curated routes, Google Street View integration, own photography, viewpoints, exterior monument/place documentation and place/editorial information. Future proprietary 360° capture and authorised interior mapping must not require a redesign of the core platform.

# 2. DESIGN — CLOSED

## P6.1 — Visual Language
**CLOSED / APPROVED**

## P6.2 — Component Language
**CLOSED / APPROVED**

## P6.3 — Design System Foundations
**CLOSED / APPROVED**

Includes Iconography, Buttons & Controls, System States, Light/Dark Behaviour, Motion and Accessibility. Dark mode uses the approved soft/near-black direction rather than absolute black.

# 3. APPROVED ARCHITECTURE — RECONCILED

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

# 4. PRE-CODEX READINESS

## R1 — Stack & Runtime
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R1-IMPLEMENTATION-STACK-DECISION.md`

Final stack: Next.js 16.3.x, React 19.2.x, TypeScript strict, Tailwind CSS 4.3.x, Node.js 24 LTS, NestJS 11.x, REST/OpenAPI, PostgreSQL/PostGIS, pnpm, monorepo/pnpm workspaces, Vitest, Playwright, ESLint and Prettier. Exact patch versions are locked at bootstrap. Provider, ORM, cloud, observability and full offline decisions remain deferred to their roadmap blocks.

**Final audit: PASS / CLOSED.**

## R2 — Domain & Data
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R2-DOMAIN-MODEL-V1.md`

Approved conceptual territory-first model covering Territory, administrative and landscape contexts, Place, Route, Experience, Media, Story, Category, Tag, User, Save, Collection and History. It explicitly separates administrative territory from Landscape, keeps Experience cross-domain, supports flexible Story relationships, multilingual content, accountless exploration, account-based persistent saving and PostGIS geography.

**Final audit: PASS / CLOSED.**

## R3 — Experience Contract / First Vertical Slice
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R3-EXPERIENCE-CONTRACT-VERTICAL-SLICE.md`

Approved first vertical slice:

**Explore → Discover → Place → Story/Media → Experience → Continue Exploring**

The slice is genuinely end-to-end across Web/PWA → API → domain → PostgreSQL/PostGIS → media/experience boundary → Web/PWA. It preserves accountless exploration, requires authentication for persistent cross-device Save, and uses a fallback Experience hierarchy: proprietary 360° → Street View → panoramic/photo → editorial media.

The first slice includes loading, empty, error, unavailable Experience, permission-denied and limited-connectivity states. Complete offline architecture is deferred to R5. Search is not a mandatory dependency. My Explore is intentionally minimal. MUST HAVE versus FUTURE is explicit to prevent silent scope growth. A representative real/curated content pack is required.

A nine-panel visual companion was approved for documentation; written Product/Architecture contracts remain authoritative.

**Final audit: PASS / CLOSED.**

## R4 — External Infrastructure & Providers
**STATUS: OPEN**

Validate concrete technologies without reopening approved architecture.

### R4.1 Mapping provider
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R4.1-MAPPING-PROVIDER-VALIDATION.md`

Provider-independent mapping remains mandatory. Mapbox and MapTiler are approved interchangeable basemap candidates behind the internal abstraction; Géoportail/ACT is the strategic official Luxembourg data layer under external validation; OSM remains a source/ecosystem rather than direct production tile infrastructure; Google Street View remains the principal external 360° Experience provider.

Final audit confirmed the free-first/cost-controlled rule, the MapTiler Free non-commercial limitation, the Mapbox Permanent Geocoding restriction, the explicit MUST HAVE versus SHOULD/FUTURE boundary, and the separation between basemap provider and Street View Experience. No single basemap provider is prematurely locked.

Géoportail/ACT remains an external dependency: the initial contact has been made and any technical/institutional guidance will be incorporated when received. This pending response does not block unrelated R4 work and does not constitute an assumed partnership or licensing approval.

**Final audit: PASS / CLOSED / APPROVED.**

### R4.2 Authentication provider
**STATUS: REFINED / AWAITING FINAL AUDIT**

Decision document: `docs/architecture/R4.2-AUTHENTICATION-PROVIDER.md`

Auth0 is the preferred initial Identity Provider. Accountless exploration remains the default; authentication is introduced for persistent user features such as Saves and Collections. Passwords and bespoke authentication infrastructure are not stored or implemented by Explore 360.

The application retains its own domain User and personal application data in PostgreSQL, linked to the external identity through an authentication boundary/adapter. Domain code must not depend directly on Auth0-specific user types.

The free-first rule remains mandatory: the current Auth0 Free plan is treated as a time-sensitive assumption and no paid tier is assumed during MVP validation while the free plan satisfies the approved requirements and applicable terms.

GDPR refinement: Auth0 provides identity-security and privacy capabilities that support our GDPR obligations; it does **not** make Explore Luxembourg 360 automatically GDPR-compliant. Explore 360 remains responsible for lawful basis, transparency, minimisation, retention, deletion, export, controller/processor responsibilities and applicable contractual arrangements.

Scalability refinement: the architecture is designed to scale beyond the initial free tier without requiring a change to the application's authentication model. This is an architectural goal, not a promise of unlimited users at zero cost.

Custom-domain verification requirements, Free-plan features/limits and pricing must be revalidated at implementation time.

**Refinement recorded in GitHub. Final audit remains pending.**

### R4.3 360° renderer
**OPEN**

Select and validate the initial Web/PWA renderer for mobile performance, touch, fullscreen, Street View integration, proprietary 360°, accessibility and fallback behaviour.

### R4.4 Media storage/CDN
**OPEN**

Define initial storage/CDN approach for proprietary assets, including asset structure, URLs, thumbnails, responsive media, permissions, rights metadata and future processing.

## R5 — Operations / Cloud / Security
**STATUS: OPEN**

Define the smallest credible operational foundation for the first vertical slice: cloud/deployment, CI/CD, observability, security/privacy/legal baseline, backups/rollback and the explicit MVP offline boundary. Do not overbuild the first slice.

## R6 — Codex Readiness
**STATUS: OPEN**

Prepare the stable implementation contract: repository structure, module boundaries, naming conventions, TypeScript/API conventions, environment variables, secrets policy, testing, lint/format rules, Git workflow, Definition of Done, acceptance criteria, seed/demo data, first vertical slice brief, constraints and explicit non-goals.

Codex implements approved Product, Design and Architecture. It must not silently redesign product, architecture or scope.

# 5. FINAL PRE-CODEX GATE

## Architecture + Product + Design Implementation Readiness Audit
**STATUS: NOT STARTED**

Before production implementation, audit Product, Design, Architecture, Operations and Implementation readiness, including approved ADRs, stack, domain model, API contracts, mapping, authentication, media/360°, storage, cloud, environments, CI/CD, observability, security/privacy, backups/rollback, repository structure, tests, seed data, first vertical slice, acceptance criteria and Codex instructions.

The project may enter implementation only when the audit explicitly states:

> **READY FOR CODEX**

# 6. CODEX START

After the final gate:

1. Codex creates the application foundation.
2. Codex implements the first vertical slice.
3. Work remains constrained by approved Product, Design and Architecture decisions.
4. New architectural decisions require explicit review rather than silent invention during coding.

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
R2 — Domain & Data                   CLOSED / APPROVED
   ↓
R3 — Experience Contract             CLOSED / APPROVED
   ↓
R4 — External Infrastructure         OPEN
   ↓
R4.1 — Mapping Provider              CLOSED / APPROVED
   ↓
R4.2 — Authentication                REFINED / AWAITING FINAL AUDIT
   ↓
R4.3 — 360° Renderer                 OPEN
   ↓
R4.4 — Media / CDN                   OPEN
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

# 8. NON-NEGOTIABLE PROJECT RULE

**We do not move forward by memory or improvisation.**

At the end of every completed block:

1. record the result in GitHub;
2. update this master roadmap;
3. check project history for already-made decisions;
4. confirm the next unresolved item from this roadmap;
5. only then begin the next block.

This roadmap remains the single operational map until the project reaches **READY FOR CODEX**.
