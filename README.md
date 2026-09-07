# Explore Luxembourg 360

> A territory-first exploration platform for Luxembourg — connecting places, landscapes, trails, stories, heritage, nature, media and immersive 360° experiences.

## Project status

**Phase:** Final Pre-Codex audit / infrastructure preparation

The repository is intentionally documentation-first at this stage. Application code has not yet been introduced.

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
│   └── product/
└── README.md
```

The application foundation (`apps/web`, `apps/api`, shared packages and CI workflows) will be introduced only after the final readiness gate is closed.

## Codex rule

**Codex implements approved decisions; it does not silently redesign them.**

If implementation encounters a material conflict involving product behaviour, domain, architecture, security, privacy, provider strategy or MVP scope, stop the affected work, document the conflict and request a human decision.
