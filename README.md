# Explore Luxembourg 360

> A territory-first exploration platform for Luxembourg — connecting places, landscapes, trails, stories, heritage, nature, media and immersive 360° experiences.

## Project status

**Phase:** Application foundation — validation and closure in progress

Application code exists on `feature/foundation` in [PR #1](https://github.com/jonysilva2486-create/explore-lu-360/pull/1). It has not been merged into `main`. The initial Tailwind build failure was fixed; passing CI is not, by itself, full foundation or production approval.

Implemented: pnpm workspace, Next.js/React web shell, initial design tokens, a replaceable MapLibre/OSM development map, and a NestJS API exposing `GET /api/v1/health`.

The map's three hard-coded prototype locations are not a production catalogue. PostgreSQL/PostGIS, OpenAPI, Auth0 and the R3 Place/Story/Media/Experience/Save journey are **not implemented and are outside the current foundation-closure task**.

See the [Foundation validation record](docs/architecture/FOUNDATION-VALIDATION-RECORD.md) for test evidence, missing assets, GitHub governance and remaining manual gates. Do not start R3 or merge without the required project approval.

## Source of truth

Before implementation, read the following in order:

1. [Master Roadmap](docs/architecture/ARCHITECTURE-VALIDATION-ROADMAP.md)
2. [R6 — Codex Readiness](docs/architecture/R6-CODEX-READINESS.md)
3. [Final Pre-Codex Audit](docs/architecture/FINAL-PRE-CODEX-AUDIT.md)
4. [Volume I Reconciliation](docs/architecture/VOLUME-I-RECONCILIATION.md)
5. [Volume II — Architecture Validation](docs/architecture/ARCHITECTURE-VALIDATION-VOLUME-II.md)
6. Current approved Product, Design and Architecture decisions under `docs/`.

## Product principles

- **Territory-first, not trail-first.**
- **360° is a matrix of the territory as well as an immersive medium.**
- **Accountless exploration. Account-based memory.**
- **Explore → Discover → Explore → Continue.**
- Content leads; interface guides.
- Premium quality comes from restraint, hierarchy, composition, typography, cartography, photography and immersive media — not generic UI decoration.
- Privacy, security, accessibility and performance are product requirements.

## Implementation direction

The approved implementation direction is:

- responsive Web/PWA first;
- modular monolith initially;
- PostgreSQL/PostGIS as authoritative geographic/application data store;
- provider-independent geospatial boundaries;
- Auth0 for identity;
- Cloudflare/R2 for edge and object/media storage;
- Render for initial runtime/managed infrastructure;
- Google Street View as an external 360° experience/distribution layer where appropriate;
- Géoportail / ACT as the preferred official Luxembourg geospatial provider, subject to dataset-level production validation.

## Repository structure

```text
explore-lu-360/
├── docs/
│   ├── architecture/
│   ├── decisions/
│   ├── design/
│   ├── product/
│   └── viability/
├── apps/
│   ├── web/
│   └── api/
├── .github/workflows/ci.yml
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
└── README.md
```

Shared packages are created only when actual reuse justifies them. Volume III viability work has its [own roadmap](docs/viability/VOLUME-III-VIABILITY-FINANCING-ROADMAP.md); foundation maintenance does not change its approved decisions.

## Local foundation validation

Use Node.js 24 and **pnpm 10.15.0**, as pinned by `packageManager` and CI. Run from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:smoke
```

Smoke tests require the preceding build: API tests use only loopback HTTP, and web tests inspect the generated shell and its linked CSS, including actual Tailwind utility generation. They require no database, credentials or external providers. Unit tests mock the map SDK; these checks do not prove real cartographic rendering, visual sign-off or WCAG conformance.

For local development, `pnpm dev` starts the web shell; `pnpm --filter @explore-lu/api dev` starts the API. Never use production credentials.

Official branding and font binaries are still absent. Consult the [brand inventory](apps/web/public/brand/README.md) and [font inventory](apps/web/public/fonts/README.md); no substitutes are authorised.

## Codex rule

**Codex implements approved decisions; it does not silently redesign them.**

If implementation encounters a material conflict involving product behaviour, domain, architecture, security, privacy, provider strategy or MVP scope, stop the affected work, document the conflict and request a human decision.
