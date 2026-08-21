# Explore Luxembourg 360 — R1 Implementation Stack Decision

**Status:** REFINED / AWAITING FINAL APPROVAL  
**Phase:** Pre-Codex Readiness — R1  
**Scope:** Concrete implementation stack and developer foundation  
**Decision type:** Implementation decision; does not reopen approved architecture principles.

---

## 1. Purpose

R1 converts the already-approved architecture direction into a practical implementation stack for the Explore Luxembourg 360 Web/PWA and API.

It deliberately does **not** decide cloud, mapping provider, authentication provider, 360° renderer, observability, or the detailed database access strategy. Those belong to later roadmap blocks.

---

# 2. Core Stack

| Area | Decision | Status |
|---|---|---|
| Product delivery | Responsive Web / PWA first | ACCEPTED |
| Frontend framework | Next.js 16.3.x | PROPOSED |
| UI framework | React 19.2.x | PROPOSED |
| Language | TypeScript, strict mode | PROPOSED |
| Styling | Tailwind CSS 4.3.x | PROPOSED |
| Backend runtime | Node.js 24 LTS | PROPOSED |
| Backend framework | NestJS 11.x | PROPOSED |
| API | REST, `/api/v1/`, OpenAPI | ACCEPTED |
| Database | PostgreSQL + PostGIS | ACCEPTED |
| Package manager | pnpm | PROPOSED |
| Repository model | Monorepo / pnpm workspaces | PROPOSED |
| Unit/integration testing | Vitest | PROPOSED |
| E2E testing | Playwright | PROPOSED |
| Linting | ESLint | PROPOSED |
| Formatting | Prettier | PROPOSED |

### Versioning rule

The versions above define the **baseline major/minor direction** for the implementation. Exact patch versions must be locked in the project bootstrap through the package manager lockfile and explicit runtime/package-manager configuration.

Do not use an unbounded `latest` dependency for the production project.

---

# 3. Frontend

## 3.1 Next.js

Use **Next.js 16.3.x** as the initial application framework.

Reasons:

- strong fit for responsive Web/PWA delivery;
- routing and application structure built in;
- server/client rendering boundaries;
- metadata and SEO capabilities;
- image and performance tooling;
- current navigation improvements are relevant to the Explore 360 exploration model.

Next.js 16.3 was released in August 2026 and includes improvements to development/build performance and instant navigation capabilities. The project should still pin the exact patch version used at bootstrap rather than depending on `latest`.

## 3.2 React

Use **React 19.2.x**.

React 19.2 is the current stable major/minor line and provides the foundation for the Next.js frontend.

### Component rule

Use server rendering/components by default where appropriate. Client components are reserved for genuinely interactive behaviour such as maps, 360° viewers, GPS, filters, save interactions and other browser-dependent experiences.

Do not turn the entire application into client-side rendering without a demonstrated reason.

## 3.3 TypeScript

Use **TypeScript with strict mode enabled**.

The implementation must favour explicit domain/API types and shared contracts over duplicated ad-hoc shapes.

---

# 4. Styling & Design System

Use **Tailwind CSS 4.3.x** as the implementation utility layer for the approved Explore Luxembourg 360 design system.

Tailwind is an implementation mechanism; it does not replace the project's design tokens, component rules or visual decisions.

The implementation must preserve the approved design foundations, including the soft near-black dark-mode direction rather than absolute black as a default global background.

### Rule

The Codex must consume the approved design tokens/components rather than inventing arbitrary visual values throughout the application.

---

# 5. Backend

## 5.1 Runtime

Use **Node.js 24 LTS**.

Node.js 24 is currently an LTS release. Production applications should use an Active LTS or Maintenance LTS release rather than a Current release.

## 5.2 Framework

Use **NestJS 11.x**.

This supports the approved **Modular Monolith First** architecture and provides a clear module structure for the initial backend.

## 5.3 Backend principle

Do not create microservices for individual domains during the initial implementation.

The backend begins as one deployable modular application with explicit domain boundaries.

---

# 6. API

The following are already approved and are therefore not reopened in R1:

- REST API;
- version prefix `/api/v1/`;
- OpenAPI documentation;
- clients communicate through the API rather than directly with the database;
- API/domain boundaries remain reusable by future clients, including potential native applications.

---

# 7. Repository Model

## 7.1 Monorepo

Use a **monorepo with pnpm workspaces**.

Initial conceptual structure:

```text
explore-luxembourg-360/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── ui/
│   ├── types/
│   └── config/
├── docs/
├── package.json
├── pnpm-workspace.yaml
└── ...
```

This structure is a baseline, not a licence to create unnecessary packages. A package should exist only when it represents a meaningful shared boundary.

## 7.2 Turborepo

**Do not introduce Turborepo initially.**

pnpm workspaces are sufficient for the first implementation. Build orchestration/caching can be added later if project scale demonstrates the need.

---

# 8. Testing

## Unit / integration

Use **Vitest** for:

- domain logic;
- services;
- utilities;
- transformations;
- API/application logic;
- focused integration tests.

## End-to-end

Use **Playwright** for realistic user journeys.

A representative Explore 360 journey should eventually be testable as:

```text
Explore
  ↓
Find / select place
  ↓
Open Place
  ↓
Open story / media
  ↓
Open 360° experience
  ↓
Save
  ↓
Authenticate when required
  ↓
Verify saved collection
```

Testing must validate user-visible behaviour, not only isolated code units.

---

# 9. Code Quality

Use:

- **ESLint** for static code-quality/linting rules;
- **Prettier** for formatting.

Formatting should be automatic and predictable. Linting should protect real project quality without becoming an unnecessary source of friction.

Husky/lint-staged are **not an R1 architectural decision**. They may be introduced as implementation tooling if useful.

---

# 10. Package and Runtime Reproducibility

The project must make the development environment reproducible.

Minimum expectations:

- explicit Node.js version configuration;
- explicit package-manager configuration;
- committed lockfile;
- pinned dependency versions through the package manifest/lockfile;
- documented local setup;
- no production secrets committed to Git.

The exact pnpm version is fixed during project bootstrap rather than prematurely hard-coded in this roadmap.

---

# 11. Local Development

The intended developer experience is:

```text
clone repository
    ↓
pnpm install
    ↓
pnpm dev
    ↓
Web + API + required local services
```

The project should provide predictable commands for at least:

```text
pnpm dev
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

The exact orchestration of local PostgreSQL/PostGIS and other services belongs to the implementation setup and R5 operational decisions where relevant.

---

# 12. PWA Boundary

The selected stack must support the approved Web/PWA-first strategy.

R1 does **not** implement the complete offline architecture.

The following remain outside the R1 decision:

- offline maps;
- downloadable regions;
- complex offline synchronisation;
- background GPS engine;
- full offline content packages.

Those boundaries are defined later under R5.5 unless the product scope changes.

---

# 13. Explicitly Deferred Decisions

R1 must not silently decide the following:

### R2 — Domain & Data
- ORM/data-access strategy;
- detailed PostgreSQL/PostGIS schema;
- migration tooling;
- domain aggregates/entities;
- search indexing model.

### R4 — External Infrastructure & Providers
- mapping provider;
- authentication provider;
- 360° renderer;
- media storage/CDN provider.

### R5 — Operations / Cloud / Security
- cloud provider/boundary;
- container/deployment strategy;
- Kubernetes adoption;
- CI/CD;
- observability stack;
- security/privacy operational controls;
- backups/rollback;
- offline MVP boundary.

---

# 14. Decision Principles

The implementation stack follows four project principles:

1. **Stable before fashionable.** Prefer mature LTS foundations over chasing the newest runtime.
2. **Simple before complex.** Do not add infrastructure because it might be useful someday.
3. **Product before technology.** Technology serves the approved Explore 360 experience.
4. **Future-ready without overbuilding.** Keep clean boundaries for future native clients and future scale without implementing them prematurely.

> **Boring where possible. Powerful where necessary.**

---

# 15. Audit Corrections Incorporated

The R1 audit identified and this refinement incorporates the following corrections:

- Next.js baseline refined to **16.3.x**;
- React baseline refined to **19.2.x**;
- Tailwind baseline refined to **4.3.x**;
- Node.js 24 LTS retained;
- pnpm remains the selected package manager, but its exact version is fixed during bootstrap;
- PostgreSQL/PostGIS remain approved without prematurely fixing database versions in R1;
- ORM/data-access remains explicitly deferred to R2;
- Husky/lint-staged removed from architectural R1 scope;
- PWA support remains a foundation capability, while full offline behaviour is deferred;
- Turborepo is explicitly deferred unless scale demonstrates a need.

---

# 16. R1 Gate

**Current status: REFINED / AWAITING FINAL APPROVAL**

R1 may be marked **CLOSED** only after the refined proposal is visually reviewed, approved, audited as final, and recorded as an accepted implementation decision.

After closure, the Master Roadmap must be re-checked before starting R2.
