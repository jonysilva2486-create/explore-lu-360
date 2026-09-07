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

### FINDING A-01 — Volume I is not present as a canonical repository artefact

A canonical `Volume I` architecture document is not currently present in the GitHub repository under the architecture directory, and the available repository evidence does not provide a single explicit Volume I reconciliation record.

The project history is known to contain earlier foundational decisions, many of which are already reflected in Product/Design/Architecture documents, but the final gate should not depend on memory when the governing project rule explicitly requires historical reconciliation.

**Required resolution before READY FOR CODEX:** Create or identify a canonical Volume I reconciliation record, explicitly mapping all material Volume I decisions to the current Product/Design/Architecture records and marking any superseded items.

**Severity:** HIGH — source-of-truth / historical reconciliation.

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

### PASS — Approved palette

P6.1 records the core tokens:

| Token | Value |
|---|---|
| Ink | `#171A19` |
| Paper | `#F5F3EE` |
| White | `#FFFFFF` |
| Stone | `#D9D6CE` |
| Slate | `#68706C` |
| Forest | `#263C32` |
| Moss | `#52685A` |
| Lichen | `#879587` |
| Copper | `#A46645` |

Copper is intentionally restrained rather than used as a dominant decorative colour.

### PASS — Typography direction

P6.1 specifies:

- **Cormorant Garamond** for editorial/display typography, place names and major storytelling.
- **Inter** for interface, metadata, navigation, controls and technical information.

The content hierarchy also defines Display, H1, H2, H3, Body and Supporting roles with responsive guidance.

### FINDING D-01 — Typography is directionally approved but not fully frozen

The P6.1 visual-language document names Cormorant Garamond and Inter, but the later typography refinement states that final font-family selection remains open pending validation of licensing, performance, multilingual coverage, special characters and desktop/mobile readability.

**Required resolution before READY FOR CODEX:** Freeze the production font decision and fallback stacks explicitly. At minimum record font source/license, supported weights, loading strategy, fallback families, language/character coverage validation and accessibility/performance acceptance criteria.

The implementation may preserve the editorial/utility pairing, but Codex must not independently replace the typefaces with a generic system font or another web font.

**Severity:** HIGH — brand/design implementation ambiguity.

### FINDING D-02 — Design-token implementation contract is not yet materialised

The approved visual tokens exist in documentation, but there is not yet an implementation artefact defining canonical CSS/Tailwind tokens, semantic colour roles, spacing scale, radii, elevation and light/dark mappings.

This is expected before code, but the final gate should explicitly require a single source-of-truth token definition during foundation work.

**Severity:** MEDIUM — implementation contract.

### PASS — Responsive philosophy

Desktop is not a stretched mobile layout. Desktop can use richer map/context panels and editorial compositions; mobile prioritises map-first exploration, touch interaction, bottom sheets and progressive disclosure.

### PASS — Accessibility target

WCAG 2.2 AA is the product target. Semantic HTML, keyboard navigation, visible focus, meaningful labels, contrast, reduced motion and non-map alternatives are documented as baseline requirements.

### PASS — Official brand assets

PDR-006 states that the official Explore Luxembourg 360 logo and brand materials remain authoritative and that the design system must not invent a replacement logo.

### FINDING D-03 — Brand asset implementation package not present in repository

The repository documents the requirement to use the official logo/brand materials, but the current root is documentation-first and does not yet contain the production asset package.

**Required resolution:** During foundation creation, add a controlled brand-asset location and document licensing/source-of-truth for those assets. Codex must not generate a replacement logo.

**Severity:** MEDIUM — implementation readiness / brand integrity.

---

## 6. Architecture audit

### PASS — Web/PWA first

Responsive Web/PWA is the first channel; native Android/iOS remain future/native-ready.

### PASS — Modular monolith

The initial backend is one modular monolith with explicit domain boundaries. No day-one microservice decomposition is permitted.

### PASS — API boundary

REST `/api/v1/`, OpenAPI, DTO/domain separation and no direct browser-to-database access are explicit.

### PASS — Domain model

R2 preserves the territory-first model with `Territory`, `Region`, `Municipality`, `Landscape`, `Place`, `Route`, `Experience`, `Story`, `Media`, user state and PostGIS geometry. `Place` is not reduced to a generic POI, `Route` is not conflated with `Experience`, and `Landscape` is not incorrectly nested under administrative geography.

### PASS — Multilingual model

Localised content must not be represented as fixed `name_en`, `name_fr`, etc. columns. The structure must support the current six-language plan and future expansion.

### PASS — Data authority

PostgreSQL/PostGIS is authoritative; Redis is cache/temporary state; OpenSearch is derived and rebuildable; R2 is object/media storage.

### PASS — Provider abstraction

Provider-specific SDKs and identifiers must not leak into Product/UI/domain contracts.

### FINDING A-02 — R3 contains historical deferral wording that could confuse implementation readers

R3 correctly states that provider selection and operational decisions were out of scope at the time. Later R4/R5 decisions supersede those deferrals. R1 explicitly contains a reconciliation note, but other historical documents still contain historical wording.

**Required resolution:** Add a consistent "Historical deferral — superseded by later approved decision" banner or equivalent to historical documents where necessary. This prevents Codex from treating stale wording as an unresolved choice.

**Severity:** MEDIUM — documentation clarity.

---

## 7. Geospatial / Géoportail / ACT audit

### PASS — Provider strategy

Géoportail / ACT is the preferred primary official Luxembourg geospatial provider; PostgreSQL/PostGIS remains the project's own geographic authority; Mapbox/MapTiler are fallback candidates; OSM is an open source/ecosystem; Google Street View is separate as the external 360° experience provider.

### PASS — Provider independence

The domain and UI remain provider-independent.

### FINDING G-01 — Dataset-level production validation remains open

R4.1 explicitly requires dataset-by-dataset checks for licence, attribution, caching and special conditions. The ACT response materially closed provider-strategy validation at the architectural level, but not the concrete production rights check for each dataset/service.

**Required resolution before production use:** validate each selected ACT/Géoportail dataset/service actually reused by the first production slice.

**Gate classification:** Does not block Codex foundation if the first implementation can use project-owned PostGIS geometry and provider-neutral adapters, but it blocks final production data reuse.

**Severity:** HIGH — production/legal dependency.

---

## 8. Google Street View / Google Maps audit

### PASS — Role separation

Google Street View is an external experience/distribution layer, not the authoritative owner of Routes, Places, Stories, media identity or territorial relationships.

### PASS — Hybrid 360 strategy

The project-created 360° strategy is selective and differentiated. The field workflow is two-pass: continuous Trail Capture followed by deliberate Experience Capture.

### FINDING G-02 — Street View wording requires one explicit reconciliation

R3 prioritises proprietary Explore 360 360° when available, followed by Street View. R4.3 describes Google Street View as the preferred distribution layer for continuous project-created outdoor trail coverage.

These are compatible only when read contextually: **owned experience priority** and **continuous trail-distribution practicality** are different decisions.

**Required resolution:** Freeze one sentence in the implementation contract clarifying that R3 defines user-facing experience preference, while R4.3 defines the distribution strategy for continuous trail capture. Codex must not interpret the two as contradictory provider-selection rules.

**Severity:** MEDIUM — implementation interpretation.

### FINDING G-03 — API-key security configuration must be narrowed before application integration

The project has a Google Maps Platform API key, and the setup screen observed during onboarding displayed a broad restriction summary. The key must not be copied into GitHub or sent through chat.

Google's current security guidance recommends both an application restriction and API restrictions, and recommends limiting each key to only the APIs actually used. Google also recommends separate keys when different application restriction types are required. citeturn140379search1

**Required resolution before integration:** create/use a dedicated web key with website restrictions for the actual controlled application origins and only the Maps APIs actually used. Create separate server-side keys where a web-service API requires a server-secret model. Review key usage before finalising restrictions.

**Severity:** CRITICAL for production security; HIGH for foundation readiness.

---

## 9. Authentication / Auth0 audit

### PASS — Identity architecture

Auth0 is the preferred identity provider, while Explore Luxembourg 360 retains ownership of application-domain user data and authorization.

### PASS — No bespoke password system

The project must not implement its own password storage or credential-recovery system.

### PASS — Accountless UX

Authentication appears only when persistent identity-dependent functionality requires it.

### FINDING I-01 — Current development tenant is in US-5

The current Auth0 development tenant observed during setup is in a US region. Auth0 currently offers public-cloud region choices including Europe and indicates that the selected region determines where tenant data is hosted. Existing tenants cannot be moved between regions; moving from US to EU requires a new tenant and migration of configuration/data. citeturn794486search0turn794486search2

**Required resolution:** decide explicitly that the current US tenant is development-only and provision a separate EU-region staging/production tenant if the project's EU-first privacy/data-placement policy requires it. Do not casually build production identity data into a US tenant and discover the residency issue later.

**Severity:** CRITICAL for privacy architecture / production setup.

### PASS — Privacy responsibility

Auth0 does not make the application automatically GDPR-compliant. Explore Luxembourg 360 remains responsible for lawful basis, minimisation, transparency, retention, deletion, export and processor/controller arrangements. citeturn144965search2turn144965search3

### Operational note

Auth0 tenant region, production tenant topology and custom-domain decisions should be treated as environment configuration, not domain logic.

---

## 10. Cloudflare / R2 audit

### PASS — Role

Cloudflare is the public edge/security layer; R2 is the primary media/object store.

### PASS — Media separation

Private masters/originals are separated from public/processed derivatives. Public media may be cacheable; personalised/sensitive data must not be indiscriminately cached.

### PASS — Signed access principle

Where temporary private browser access is needed, presigned URLs are appropriate and credentials remain server-side. Current Cloudflare documentation confirms presigned URLs provide temporary access without exposing credentials and that browser use still requires an appropriate CORS policy. citeturn140379search3turn140379search4

### FINDING C-01 — R2 production bucket/policy not yet provisioned

The architecture is approved, but there is not yet an application storage implementation to prove:

- private master bucket/namespace;
- public derivative boundary;
- CORS policy;
- signed URL policy;
- versioned/immutable keys;
- retention/deletion behaviour;
- environment separation.

This is expected foundation work, but Codex must implement the documented security model rather than defaulting to a public bucket or unrestricted object access.

**Severity:** HIGH for foundation security.

---

## 11. Render / runtime / environment audit

### PASS — Runtime boundary

Render is the approved initial runtime for the Web/API/managed PostgreSQL layer. Cloudflare remains the edge boundary.

### FINDING O-01 — Current draft Render service is not the actual Explore 360 application

The Render flow observed during account setup shows a proposed `explore-lu-360` Web Service connected to GitHub, but the repository is still documentation-only and no application service has been successfully deployed. This is correctly treated as setup work rather than a working production system.

**Required resolution:** Codex foundation must create the real services from the repository and connect them through environment-specific configuration.

**Severity:** MEDIUM — implementation stage.

### FINDING O-02 — Current Render region shown was Oregon

Render currently supports Frankfurt as an available region and states that services/datastores choose their region at creation; existing services/databases cannot simply have their region changed. citeturn884212search0

**Required resolution:** for an EU-first production architecture, select and document Frankfurt for production runtime/datastore where appropriate. Do not create the definitive production database in Oregon and assume a later in-place region switch.

**Severity:** HIGH — data placement / latency / recoverability choice.

### PASS — Private-network model

Services in the same Render region can communicate over Render's private network; cross-region communication does not use that private network. citeturn884212search5

---

## 12. PostgreSQL / PostGIS / Redis / OpenSearch audit

### PASS — Authority model

PostgreSQL/PostGIS is authoritative. Redis and OpenSearch are supporting systems rather than alternate sources of truth.

### PASS — Search derivation

OpenSearch indexes must be rebuildable from authoritative data.

### FINDING D-04 — Search and Redis should remain conditional infrastructure, not day-one mandatory services

The documentation correctly says Redis/OpenSearch are used where justified. The foundation should therefore avoid provisioning both simply because they appear in the architecture. Initial implementation can operate with PostgreSQL/PostGIS and add supporting services when the first slice proves the need.

**Severity:** LOW — cost/scope discipline.

### PASS — Production backup direction

The approved recovery design is consistent with managed PostgreSQL backup/PITR plus an independent logical export. Render's current documentation confirms PITR and restore to a separate recovery database for paid Postgres plans. citeturn140379search0

---

## 13. Backup / recovery / rollback audit

### PASS

The project correctly distinguishes:

- Backup
- Recovery
- Rollback

It also distinguishes authoritative data, irreplaceable masters and regenerable derivatives.

### PASS

Application rollback is tied to Git/release versions and does not automatically roll back the database.

### PASS

Irreplaceable media is not considered protected until an independent verified copy exists.

### FINDING B-01 — Recovery configuration inventory is still a future implementation artefact

The architecture requires a non-secret recovery configuration inventory. It does not yet exist as an implementation artefact because there is no application environment yet.

**Required resolution:** create the inventory before production deployment and include all environment-specific configuration names, owners, provisioning locations and rotation procedures without storing secret values.

**Severity:** MEDIUM — operational readiness.

---

## 14. Observability audit

### PASS

The approved MVP strategy is native-first: Render + Cloudflare/R2 operational visibility + external uptime monitoring, with Sentry optional rather than mandatory.

### PASS

The principle "Observe the system, not the user" is explicit.

### PASS

Logs must not contain passwords, secrets, tokens or unnecessary personal data.

### FINDING O-03 — Concrete alert ownership and uptime monitor setup are not yet instantiated

The policy exists, but the real monitor, alert recipients and incident ownership are not yet live.

**Required resolution before production:** instantiate the approved minimum monitoring and define who receives critical/error alerts.

**Severity:** MEDIUM — production operations.

---

## 15. Security audit

### PASS — Baseline

The project explicitly requires:

- least privilege;
- server-side authorization;
- BOLA/IDOR protection;
- input validation;
- CSRF assessment;
- XSS protections;
- SSRF protection where relevant;
- safe uploads;
- CORS control;
- security headers;
- protected secrets;
- rate/abuse controls;
- database protection;
- secure handling of personal data.

### PASS — Admin security

Future administrative tooling requires MFA, least privilege, server-side authorization and auditability of critical actions.

### PASS — Codex security boundary

Codex is explicitly prohibited from bypassing branch protection, disabling CI/security checks, accessing production credentials from development, exposing secrets, removing authorization controls or silently changing approved security/privacy policy.

### FINDING S-01 — Branch protection is required but not currently verifiable through the connected GitHub API

R5.2 requires `main` protection and prohibits direct pushes, but the connected GitHub integration cannot currently read the branch-protection endpoint for this repository.

**Required resolution:** manually verify in GitHub repository settings that `main` is protected, direct pushes are controlled, required checks are configured when CI exists, and the relevant PR/review rules match R5.2 before first real merge.

**Severity:** HIGH — governance/security control.

### FINDING S-02 — CI/security checks do not yet exist in the repository

The repository currently has no application code and no `.github` workflow tree. The R5.2 contract specifies the checks that must exist once implementation begins.

**Required resolution:** Codex's foundation task must establish the minimal GitHub Actions workflow covering lint, typecheck, unit/integration tests and build, plus appropriate dependency/secret/code scanning available to the repository. The final gate should not be marked complete until the workflow executes successfully on a PR.

**Severity:** HIGH — implementation governance.

---

## 16. Privacy / GDPR audit

### PASS — Data minimisation

The architecture explicitly separates identity data, application-domain data and public editorial content.

### PASS — Location privacy

Location permission is contextual. Continuous/background tracking is not part of the MVP.

### PASS — User rights

Account deletion and export are explicit requirements. Retention must be defined by data category.

### PASS — DPIA screening

R5.4 requires DPIA screening before public production and a full DPIA when high-risk processing triggers the legal threshold.

### FINDING P-02 — Privacy documents/operational register are still pre-production tasks

The project has the privacy architecture but does not yet have a live data inventory, processor register, DPA register, retention schedule, privacy notice or documented rights-handling procedure.

This should not be invented by Codex as legal text.

**Required resolution:** create the operational/privacy artefacts before public production, with qualified legal/privacy review where necessary.

**Severity:** HIGH — production/legal readiness; does not necessarily block local Codex foundation.

### FINDING P-03 — EU-first environment policy should be explicit across all processors

Auth0 region and Render region need an explicit production policy, and every additional processor should be recorded in the provider/transfer register before production.

**Severity:** HIGH — privacy/data governance.

---

## 17. Media / 360° / rights audit

### PASS

The two-pass capture standard is coherent and useful: continuous route documentation first, deliberate editorial/immersive capture second.

### PASS

Google panorama IDs are external references, not permanent Explore 360 territorial identifiers.

### PASS

Project-owned master/derivative separation and backup requirements are explicit.

### FINDING M-01 — First real route capture remains required field validation

The architecture is approved, but Capture Standard v1 has not yet been validated by a real route. This does not need to precede Codex foundation, but it is a known validation event before finalising field-production operations.

**Severity:** LOW for Codex start; HIGH for production capture confidence.

### FINDING M-02 — Rights/EXIF/privacy workflow must be implemented before public media publication

The documentation requires rights/permission metadata and EXIF/GPS handling but the operational workflow is not yet instantiated.

**Severity:** HIGH for public media publication; not necessarily a blocker to application foundation.

---

## 18. Offline audit

### PASS

The MVP is explicitly **offline-aware, not offline-first**.

Allowed MVP resilience is limited to already-available/local content, GPS/GNSS availability, preserved local state and graceful connectivity degradation.

The project does not require full offline maps, downloadable regions, offline sync, offline uploads or advanced offline 360° architecture at this stage.

### PASS

Codex is explicitly prohibited from expanding into full offline infrastructure without an approved change.

---

## 19. Codex readiness / decision authority audit

### PASS

R6 clearly separates implementation freedom from project-level decisions.

Codex may decide implementation details but must not silently change:

- product behaviour;
- domain model;
- architecture;
- security model;
- provider strategy;
- MVP scope.

### PASS

The change-control process is explicit: conflict → stop → document → human decision → update record → resume.

### PASS

The Definition of Done requires functional code, typecheck, lint, tests, build, security, acceptance criteria, architecture compliance, no secrets, no scope expansion and documentation updates when needed.

---

## 20. Repository / source-of-truth audit

### PASS

The master roadmap exists and clearly states that it is the operational map until `READY FOR CODEX`.

### PASS

The repository has separate `docs/architecture`, `docs/decisions`, `docs/design` and `docs/product` areas.

### PASS

PDR-006 has been reconciled and no longer represents a merely proposed design direction even though its historical filename contains `proposed`.

### FINDING R-01 — Root README is insufficient as an implementation entry point

The root README currently contains only the repository title. That is acceptable during documentation construction but weak as the Codex entry point.

**Required resolution:** before or as part of foundation creation, make the root README a concise project entry point that links to the Master Roadmap, R6, the final audit, the Product/Design authority documents and local-development instructions.

**Severity:** MEDIUM — onboarding/source-of-truth clarity.

### FINDING R-02 — Canonical implementation entry point should be explicit

Codex should not need to discover the architecture through file-name archaeology.

**Required resolution:** make `docs/architecture/R6-CODEX-READINESS.md` and the Master Roadmap the explicit implementation entry points, and link the most important authoritative documents from them.

**Severity:** MEDIUM.

---

## 21. Current external-account state observed before implementation

The following account/setup state has been established during preparation:

- GitHub repository exists and is public.
- Google Maps Platform project/account and API key exist.
- Cloudflare account exists.
- Render account exists and is connected to the GitHub repository.
- Auth0 development tenant and `EXPLORE LUXEMBOURG 360` application exist.

These account objects do **not** constitute a deployed application.

No production credential values belong in this repository or chat history.

---

## 22. Gate classification

### Blocking for `READY FOR CODEX`

1. **A-01:** Canonical Volume I reconciliation.
2. **P-01:** Resolve Saved Trails vs actual MVP save scope.
3. **D-01:** Freeze production typography/fallbacks and multilingual/performance validation criteria.
4. **D-02:** Define the implementation token source of truth.
5. **G-02:** Reconcile the R3 experience-priority wording with R4.3 trail-distribution wording.
6. **G-03:** Lock the Google Maps key policy before integration: dedicated key(s), application restriction(s), API restriction(s), no secrets in repository/chat.
7. **I-01:** Decide the environment model for the current US Auth0 development tenant and EU production identity tenancy.
8. **O-02:** Decide/document EU-first production runtime/database region, with Frankfurt considered for Render.
9. **S-01:** Manually verify `main` branch protection.
10. **S-02:** Establish the minimum CI workflow and prove it runs successfully once foundation code exists.

### Required before public production, but not necessarily blocking Codex foundation

- ACT/Géoportail dataset-by-dataset licensing/attribution/caching validation.
- Auth0 production EU tenant creation/configuration and contractual/privacy review.
- Render production service/database creation in the approved region.
- R2 bucket/security/CORS/signed-URL configuration.
- Privacy notice, data inventory, processor/transfer register, retention/deletion schedule and DPIA screening.
- Backup/recovery inventory and restore test.
- Uptime monitor and alert ownership.
- Rights/EXIF/GPS publication workflow.
- First real route capture field validation.
- Production-domain and DNS configuration.

---

## 23. What Codex is allowed to build after the gate

Once the gate is `READY FOR CODEX`, Codex may create the application foundation and first vertical slice using the approved contracts.

The expected first implementation order is:

```text
Repository foundation
    ↓
Tooling / workspaces / locked versions
    ↓
Design tokens + shared UI foundations
    ↓
Web application shell
    ↓
API shell + OpenAPI
    ↓
PostgreSQL/PostGIS foundation
    ↓
Domain modules
    ↓
Representative seed data
    ↓
Explore → Place → Story/Media → Experience
    ↓
Save → Auth0 → Persistence
    ↓
Continue Exploring
    ↓
E2E / accessibility / security / performance validation
```

Provider integrations are implemented behind the approved application boundaries.

---

## 24. Explicit Codex visual quality gate

Before any feature is considered visually complete, the implementation must pass this product-specific test:

> **Would this interface still look recognisably like Explore Luxembourg 360 if the project logo were removed and the framework/vendor names were hidden?**

The answer must be yes.

Visual rejection conditions include:

- generic AI-generated/SaaS appearance;
- repetitive card-grid composition;
- default Tailwind/shadcn-style visual language without project adaptation;
- generic system-font substitution where the approved typography is required;
- arbitrary colours outside the approved semantic palette;
- excessive rounded containers;
- decorative gradients/glassmorphism;
- heavy shadows;
- oversized controls;
- navigation that overwhelms the territory or content;
- map treated as a generic embedded widget;
- 360° experience cluttered by unnecessary UI.

This quality gate is a product requirement, not optional visual polish.

---

## 25. Final audit decision

At this audit pass:

**Architecture:** strong / materially reconciled.

**Product:** strong / MVP boundaries clear except Saved Trails scope ambiguity.

**Design:** strong and distinctive, but the final typography/implementation token contract requires explicit freezing.

**Operations:** coherent and cost-controlled, but region selection, CI and production configuration are not yet instantiated.

**Security:** strong baseline; branch protection and key restrictions require explicit verification/configuration.

**Privacy:** strong principles; EU-region environment policy and production governance artefacts remain to be completed.

**Codex readiness:** not yet authorised.

Formal gate:

```text
FINAL PRE-CODEX AUDIT
        ↓
BLOCKERS / VERIFICATIONS
        ↓
RESOLVE + RE-AUDIT
        ↓
READY FOR CODEX
```

The project must not change the master roadmap to `READY FOR CODEX` until the blocking items above are closed or explicitly accepted by the project owner.
