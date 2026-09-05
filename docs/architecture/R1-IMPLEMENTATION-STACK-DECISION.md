# Explore Luxembourg 360 — R1 Implementation Stack Decision

**Status:** CLOSED / APPROVED  
**Phase:** Pre-Codex Readiness — R1  
**Scope:** Concrete implementation stack and developer foundation

R1 converts the already-approved architecture direction into a practical implementation stack for the Explore Luxembourg 360 Web/PWA and API. It does not reopen approved architecture principles and does not decide cloud, mapping provider, authentication provider, 360° renderer, observability, or detailed database access strategy.

> **Historical deferrals:** The provider, cloud, authentication, 360° renderer, media storage/CDN, observability, security/privacy, backup/rollback and offline items listed as deferred below were intentionally outside R1's scope at the time. They were subsequently resolved by the approved R4/R5 decisions. Where a later approved decision exists, that later decision supersedes the historical deferral; the historical R1 text is retained for traceability.

## 1. Core Stack

| Area | Decision | Status |
|---|---|---|
| Product delivery | Responsive Web / PWA first | ACCEPTED |
| Frontend framework | Next.js 16.3.x | ACCEPTED |
| UI framework | React 19.2.x | ACCEPTED |
| Language | TypeScript, strict mode | ACCEPTED |
| Styling | Tailwind CSS 4.3.x | ACCEPTED |
| Backend runtime | Node.js 24 LTS | ACCEPTED |
| Backend framework | NestJS 11.x | ACCEPTED |
| API | REST, `/api/v1/`, OpenAPI | ACCEPTED |
| Database | PostgreSQL + PostGIS | ACCEPTED |
| Package manager | pnpm | ACCEPTED |
| Repository model | Monorepo / pnpm workspaces | ACCEPTED |
| Unit/integration testing | Vitest | ACCEPTED |
| E2E testing | Playwright | ACCEPTED |
| Linting | ESLint | ACCEPTED |
| Formatting | Prettier | ACCEPTED |

Exact patch versions are locked at project bootstrap through the package lockfile and explicit runtime/package-manager configuration. No unbounded `latest` dependencies in production.

## 2. Frontend

### Next.js
Use **Next.js 16.3.x**. It is the application framework for responsive Web/PWA delivery, routing, rendering boundaries, metadata/SEO, image/performance tooling and navigation.

### React
Use **React 19.2.x**. Server rendering/components are preferred where appropriate; client components are reserved for genuinely interactive/browser-dependent experiences such as maps, 360° viewers, GPS, filters and save interactions.

### TypeScript
Use **TypeScript strict mode**. Prefer explicit domain/API types and shared contracts over duplicated ad-hoc shapes.

## 3. Styling & Design System

Use **Tailwind CSS 4.3.x** as the implementation utility layer for the approved Explore Luxembourg 360 design system. Tailwind does not replace design tokens, component rules or visual decisions.

The implementation must preserve the approved visual foundations, including the **soft near-black** dark-mode direction rather than absolute black as the default global background. Codex must consume approved design tokens/components rather than invent arbitrary visual values.

## 4. Backend

Use **Node.js 24 LTS** and **NestJS 11.x**.

The backend begins as one deployable **Modular Monolith** with explicit domain boundaries. No domain-by-domain microservices during the initial implementation.

## 5. API

Already approved and not reopened in R1:

- REST API;
- `/api/v1/` version prefix;
- OpenAPI documentation;
- clients communicate through the API rather than directly with the database;
- API/domain boundaries remain reusable by future clients, including possible native applications.

## 6. Repository Model

Use a **monorepo with pnpm workspaces**.

Conceptual baseline:

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

This is a baseline, not a licence to create unnecessary packages. A package exists only when it represents a meaningful shared boundary.

**Turborepo is deferred.** pnpm workspaces are sufficient initially; build orchestration/caching can be added if scale demonstrates the need.

## 7. Testing

**Vitest** for unit/integration tests covering domain logic, services, utilities, transformations and application/API logic.

**Playwright** for realistic end-to-end journeys. A representative journey is:

```text
Explore → Find/select place → Open Place → Story/media → 360° → Save → Authenticate when required → Verify collection
```

Testing must validate user-visible behaviour, not only isolated code units.

## 8. Code Quality

Use **ESLint** for static code quality and **Prettier** for formatting. Formatting should be predictable; linting should protect meaningful project quality without unnecessary friction.

Husky/lint-staged are implementation tooling only and are not an R1 architectural decision.

## 9. Reproducibility & Local Development

Minimum expectations:

- explicit Node.js version configuration;
- explicit package-manager configuration;
- committed lockfile;
- pinned dependency versions;
- documented local setup;
- no production secrets in Git.

The exact pnpm version is fixed during bootstrap.

Expected commands:

```text
pnpm dev
pnpm test
pnpm lint
pnpm typecheck
pnpm build
```

The exact orchestration of local PostgreSQL/PostGIS and other services belongs to implementation setup and later operational decisions.

## 10. PWA Boundary

The stack supports the approved Web/PWA-first strategy. R1 does not implement the complete offline architecture.

Deferred: dedicated offline maps, downloadable regions/experiences, complex offline synchronisation, background GPS engine and full offline content packages. The **MVP offline boundary is defined in R5.6**; deeper offline capabilities remain future evolution.

## 11. Explicitly Deferred

The following deferrals describe R1's scope at the time it was approved. They are historical and must be read together with the later approved roadmap decisions referenced below.

### R2 — Domain & Data
- ORM/data-access strategy;
- detailed PostgreSQL/PostGIS schema;
- migration tooling;
- domain aggregates/entities;
- search indexing model.

**Later status:** resolved through R2 and subsequent implementation-readiness decisions.

### R4 — External Infrastructure & Providers
- mapping provider;
- authentication provider;
- 360° renderer;
- media storage/CDN provider.

**Later status:** resolved through R4.1, R4.2, R4.3 and R4.4. See the Master Roadmap for the current authoritative status.

### R5 — Operations / Cloud / Security
- cloud provider/boundary;
- container/deployment strategy;
- Kubernetes adoption;
- CI/CD;
- observability stack;
- security/privacy operational controls;
- backups/rollback;
- offline MVP boundary.

**Later status:** resolved through R5.1–R5.6. The approved MVP offline boundary is specifically defined in R5.6.

## 12. Decision Principles

1. **Stable before fashionable.** Prefer mature LTS foundations.
2. **Simple before complex.** Do not add infrastructure merely because it might be useful someday.
3. **Product before technology.** Technology serves the approved Explore 360 experience.
4. **Future-ready without overbuilding.** Preserve clean boundaries for future clients and scale without implementing them prematurely.

> **Boring where possible. Powerful where necessary.**

## 13. Final Audit

**Status: PASS / CLOSED**

The final audit confirms that R1:

- respects approved Product, Design and Architecture decisions;
- introduces no contradiction with Web/PWA-first;
- does not reopen Modular Monolith;
- keeps native Android/iOS outside the current MVP while preserving future API/client compatibility;
- separates stack decisions from later provider, data and operations decisions;
- avoids premature infrastructure complexity;
- provides a sufficiently concrete foundation for the next roadmap block;
- defines explicit boundaries so Codex does not need to infer the basic technology stack.

**R1 is CLOSED / APPROVED.**

The next roadmap block is **R2 — Domain & Data**, but only after re-checking the Master Roadmap and project history as required by the project execution rule. This final sentence is historical roadmap context; later approved roadmap status supersedes it.