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
Provider-independent geospatial abstraction remains mandatory. **Géoportail / ACT is the current preferred primary official Luxembourg geospatial provider.** Mapbox and MapTiler remain secondary/fallback candidates behind the abstraction; OpenStreetMap remains an open/community geographic source/ecosystem; Google Street View remains the principal external 360° Experience provider.

**Status: ACCEPTED / RECONCILED**

## ADR-005 — Identity & Authentication
OAuth 2.0/OIDC, JWT/session model, RBAC, accountless exploration and account-based memory/synchronisation. Auth0 is the preferred initial Identity Provider following R4.2 validation.

**Status: ACCEPTED / VALIDATED — Auth0 preferred**

## ADR-006 — Media & 360° Strategy
Google Street View for existing external coverage; Explore 360 proprietary 360° for selected trails/routes and locations; own photography/video for editorial content; Object Storage + CDN for proprietary media; PostgreSQL stores metadata/relationships rather than large binaries.

**Status: ACCEPTED / RECONCILED**

## ADR-007 — API Architecture
Versioned REST API, `/api/v1/`, OpenAPI, clients do not access the database directly, and API/domain boundaries remain reusable by future clients.

**Status: ACCEPTED**

# 4. PRE-CODEX READINESS

## R1 — Stack & Runtime
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R1-IMPLEMENTATION-STACK-DECISION.md`

Final stack: Next.js 16.3.x, React 19.2.x, TypeScript strict, Tailwind CSS 4.3.x, Node.js 24 LTS, NestJS 11.x, REST/OpenAPI, PostgreSQL/PostGIS, pnpm, monorepo/pnpm workspaces, Vitest, Playwright, ESLint and Prettier. Exact patch versions are locked at bootstrap. Provider, ORM, cloud, observability and detailed offline implementation were intentionally outside R1 and have since been resolved through the dedicated R2/R4/R5 decisions.

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

The first slice includes loading, empty, error, unavailable Experience, permission-denied and limited-connectivity states. Complete offline architecture is defined by the narrower MVP boundary in R5.6. Search is not a mandatory dependency. My Explore is intentionally minimal. MUST HAVE versus FUTURE is explicit to prevent silent scope growth. A representative real/curated content pack is required.

A nine-panel visual companion was approved for documentation; written Product/Architecture contracts remain authoritative.

**Final audit: PASS / CLOSED.**

## R4 — External Infrastructure & Providers
**STATUS: CLOSED / APPROVED**

Validate concrete technologies without reopening approved architecture.

### R4.1 Mapping provider
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R4.1-MAPPING-PROVIDER-VALIDATION.md`

Provider-independent mapping remains mandatory. **Géoportail / ACT is the current primary official Luxembourg geospatial provider.** Mapbox and MapTiler remain secondary/fallback candidates behind the internal abstraction; OSM remains a source/ecosystem rather than direct production tile infrastructure; Google Street View remains the principal external 360° Experience provider.

The 2026-09-02 ACT response closed the previously pending provider-strategy validation at the architectural level. Dataset-level licensing, attribution, caching and special conditions remain to be checked before concrete production reuse. No partnership, endorsement or blanket licensing approval is assumed.

The final audit confirmed the free-first/cost-controlled rule, provider abstraction, explicit MUST HAVE versus SHOULD/FUTURE boundary, and separation between geospatial infrastructure and the 360° Experience layer.

**Final audit: PASS / CLOSED / APPROVED.**

### R4.2 Authentication provider
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R4.2-AUTHENTICATION-PROVIDER.md`

Auth0 is the preferred initial Identity Provider. The approved model is accountless exploration with authentication only for persistent user features such as Saves and Collections. Credentials remain with the specialised identity provider; Explore Luxembourg 360 does not store passwords. Auth0 remains behind an application authentication boundary, while PostgreSQL remains authoritative for application-domain user data.

The final audit confirmed the free-first strategy, current Free-plan assumptions, accountless UX, provider abstraction, data minimisation, GDPR responsibility boundaries, deletion/export requirements and the distinction between architectural scalability and unlimited free usage. Current Auth0 features/pricing and applicable terms must be revalidated at implementation/bootstrap.

**Final audit: PASS / CLOSED / APPROVED.**

### R4.3 360° renderer & capture pipeline
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R4.3-360-RENDERER-CAPTURE-PIPELINE.md`

Google Street View is the primary external visual/distribution layer for project-created outdoor trail coverage. The Explore 360 proprietary 360° layer remains independently renderable, with Photo Sphere Viewer as the initial open-source renderer. The approved capture standard uses two passes: **Pass 1 — Trail Capture** for continuous route documentation, followed by **Pass 2 — Experience Capture** for deliberate 360°, photography, heritage, nature, viewpoint and Story content. The field kit is fixed as Insta360 X6 + Magic Selfie Stick/invisible-style pole + backpack mount + power bank + extra batteries.

The audit confirmed the Street View ↔ Explore 360 transition requirement, outdoor/indoor distinction, Embed-first cost guardrail, project-owned Route/GPS/Experience identity, and the rule that Google panorama IDs are external references rather than permanent territorial identifiers. Future X6/3D investigation is preserved as a non-MVP option, especially for castles, monuments and interiors. The first real route capture remains the required field-validation event for Capture Standard v1.

A visual companion was approved for documentation; the written architecture contract remains authoritative.

**Final audit: PASS / CLOSED / APPROVED.**

### R4.4 Media storage/CDN
**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R4.4-MEDIA-STORAGE-CDN.md`

Cloudflare R2 is the approved primary object storage and media delivery foundation for Explore Luxembourg 360. Backblaze B2 is retained as a future strategic backup/archive candidate and is not required for MVP. Supabase Storage is not selected for the current media layer.

The approved media architecture separates private masters/originals from processed and public derivatives, stores media metadata and relationships in PostgreSQL rather than large binaries, uses application-level provider abstraction, supports responsive images/thumbnails/lazy loading and progressive/tiled 360° delivery, and uses Cloudflare edge caching/CDN delivery for public assets where appropriate.

Public media should use versioned/immutable asset keys where practical so replacements do not depend on immediate CDN cache invalidation. Provider-specific edge-network numbers or transport details are not application requirements.

The MVP remains free-first/pay-as-you-grow: R2 is the only required media storage service. B2 may be introduced later for second-copy backup, archive, disaster recovery or retention protection when real project needs justify it.

**Final audit: PASS / CLOSED / APPROVED.**

### R4 — provider conclusion

**Primary official geospatial provider:** Géoportail / ACT.  
**Project-owned geographic authority:** PostgreSQL/PostGIS.  
**Secondary/fallback geospatial candidates:** Mapbox / MapTiler.  
**Open geographic source/ecosystem:** OpenStreetMap.  
**Principal external 360° provider:** Google Street View.  
**Proprietary 360°:** Explore Luxembourg 360 own content.

These roles are complementary and remain behind explicit application boundaries. Provider-specific choices must not leak into Product/UI/domain contracts.

# 5. R5 — OPERATIONS / CLOUD / SECURITY — CLOSED

R5 is complete. It defines the smallest credible operational foundation for the first vertical slice: cloud/deployment, CI/CD, observability, security/privacy/legal baseline, backups/recovery/rollback and the explicit MVP offline boundary.

### R5.1 — Cloud & Deployment
**CLOSED / APPROVED / FINAL AUDIT PASS**

### R5.2 — CI/CD & Release Operations
**CLOSED / APPROVED / FINAL AUDIT PASS**

### R5.3 — Observability & Operations
**CLOSED / APPROVED / FINAL AUDIT PASS**

### R5.4 — Security & Privacy Operations
**CLOSED / APPROVED / FINAL AUDIT PASS**

### R5.5 — Backup / Recovery / Rollback
**CLOSED / APPROVED / FINAL AUDIT PASS**

### R5.6 — MVP Offline Boundary
**CLOSED / APPROVED / FINAL AUDIT PASS**

R5.6 establishes the MVP as **offline-aware, not offline-first**. The MVP supports locally available content, GPS/GNSS where available, graceful degradation and preservation of locally available state. Full downloadable experiences, dedicated offline maps/navigation, offline sync, offline uploads, advanced offline media and offline 3D remain future evolution.

# 6. R6 — CODEX READINESS

**STATUS: CLOSED / APPROVED**

Decision document: `docs/architecture/R6-CODEX-READINESS.md`

R6 defines the stable implementation contract: repository structure, module boundaries, naming conventions, TypeScript/API conventions, environment variables, secrets policy, testing, lint/format rules, Git workflow, Definition of Done, acceptance criteria, seed/demo data, first vertical slice brief, security constraints, provider boundaries, offline boundary, scope control, change-control and explicit non-goals.

Codex implements approved Product, Design and Architecture. It must not silently redesign product, architecture or scope. Decision Authority explicitly separates implementation freedom from project-level decisions requiring human approval.

**Final audit: PASS / CLOSED / APPROVED.**

# 7. FINAL PRE-CODEX GATE

## Architecture + Product + Design + Operations + Implementation Readiness Audit
**STATUS: IN PROGRESS**

This is the active final gate before Codex implementation. Audit Product, Design, Architecture, Operations and Implementation readiness, including approved ADRs, stack, domain model, API contracts, mapping, authentication, media/360°, storage, cloud, environments, CI/CD, observability, security/privacy, backups/rollback, offline boundary, repository structure, tests, seed data, first vertical slice, acceptance criteria and Codex instructions.

The project may enter implementation only when the audit explicitly states:

> **READY FOR CODEX**

# 8. CODEX START

After the final gate:

1. Codex creates the application foundation.
2. Codex implements the first vertical slice.
3. Work remains constrained by approved Product, Design and Architecture decisions.
4. New architectural decisions require explicit review rather than silent invention during coding.

# 9. EXECUTION ORDER

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
R4 — External Infrastructure         CLOSED / APPROVED
   ↓
R4.1 — Mapping Provider              CLOSED / APPROVED
   ↓
R4.2 — Authentication                CLOSED / APPROVED
   ↓
R4.3 — 360° Renderer & Capture      CLOSED / APPROVED
   ↓
R4.4 — Media / CDN                   CLOSED / APPROVED
   ↓
R5 — Operations / Cloud / Security   CLOSED / APPROVED
   ↓
R5.1 — Cloud & Deployment            CLOSED
   ↓
R5.2 — CI/CD                         CLOSED
   ↓
R5.3 — Observability                 CLOSED
   ↓
R5.4 — Security & Privacy            CLOSED
   ↓
R5.5 — Backup / Recovery             CLOSED
   ↓
R5.6 — MVP Offline Boundary          CLOSED
   ↓
R6 — Codex Readiness                 CLOSED / APPROVED
   ↓
FINAL PRE-CODEX AUDIT                🔒 IN PROGRESS
   ↓
READY FOR CODEX                      🚀
   ↓
APPLICATION FOUNDATION
   ↓
FIRST VERTICAL SLICE
```

# 10. NON-NEGOTIABLE PROJECT RULE

**We do not move forward by memory or improvisation.**

At the end of every completed block:

1. record the result in GitHub;
2. update this master roadmap;
3. check project history for already-made decisions;
4. confirm the next unresolved item from this roadmap;
5. only then begin the next block.

This roadmap remains the single operational map until the project reaches **READY FOR CODEX**.
