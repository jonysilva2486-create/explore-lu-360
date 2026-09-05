# Explore Luxembourg 360 — R6 Codex Readiness

**Status:** Approved / Closed
**Phase:** Pre-implementation readiness
**Purpose:** Define the implementation contract and decision boundaries for Codex before application code is introduced.

---

## 1. Purpose

R6 translates the approved Product, Design, Architecture and operational decisions of Explore Luxembourg 360 into a practical implementation contract.

It is not a new product specification and not a new architecture. It exists to remove implementation ambiguity while preserving the decisions already established in R1–R5.

> **Codex implements approved decisions; it does not silently redesign them.**

---

## 2. Governing principles

1. Implement approved decisions before introducing new ones.
2. Preserve existing product, domain and architectural boundaries.
3. Prefer simple, reversible implementation choices where the architecture permits freedom.
4. Keep the MVP scope explicit and controlled.
5. Treat security, privacy, accessibility and performance as implementation requirements, not post-launch additions.
6. Keep provider-specific integrations behind appropriate abstractions.
7. Keep production data contracts independent from seed/demo data.
8. Work in small, reviewable increments.
9. Test before declaring implementation complete.
10. When a material conflict exists, stop and request a human decision rather than silently changing an approved decision.

---

## 3. Decision Authority

Codex has autonomy over implementation details inside approved boundaries, but does not have authority to silently change product or architectural decisions.

| Decision type | Codex authority |
|---|---|
| Implementation details | May decide |
| Internal code organisation | May decide |
| Implementation technique | May decide |
| Unit/integration test implementation | May decide |
| Product behaviour | Must not silently change |
| Domain model | Must not silently change |
| Architecture | Must not silently change |
| Security model | Must not silently change |
| Provider strategy | Must not silently change |
| MVP scope | Must not expand |

### Decision rule

**Freedom inside the boundary. Discipline at the boundary.**

Minor implementation ambiguity should be resolved using existing project conventions and established patterns. Product, architecture, domain, security, provider or scope conflicts require human review.

---

## 4. Repository structure

The initial implementation should use the existing monorepo direction:

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
│   ├── architecture/
│   ├── decisions/
│   ├── design/
│   └── product/
└── tests/
```

Packages must be created when justified by real reuse or boundary requirements. Do not create speculative packages or abstractions solely for structural symmetry.

---

## 5. Application boundaries

### Web — `apps/web`

Responsible for the responsive exploration experience, UI rendering, client interaction, local UI state and communication with the API.

### API — `apps/api`

Responsible for application logic, validation, authorization, domain orchestration, persistence access and external-provider integration boundaries.

### Database

The browser must never connect directly to the database.

```text
Web → API → Application / Domain → Repository → PostgreSQL / PostGIS
```

---

## 6. Modular monolith boundary

The backend starts as a modular monolith.

Modules should have explicit responsibilities and should avoid direct access to another module's internal persistence or implementation details.

The initial domain direction includes concepts such as:

- User
- Place
- Municipality
- Region
- Category
- Tag
- Story
- Media
- Experience
- 360° Experience
- Route
- Collection
- Favourite / Saved Place
- Exploration History

These concepts must remain consistent with the approved domain model. R6 does not redefine the domain schema.

---

## 7. Data ownership

### PostgreSQL / PostGIS

Primary source of truth for authoritative application and geographic data.

### Redis

Cache and temporary/accelerating state where justified.

### OpenSearch

Derived search/indexing layer. Search indexes must be rebuildable from authoritative data.

### Object storage / R2

Media and other appropriate binary/object assets.

The system must not treat a cache, search index or derived representation as the authoritative source when PostgreSQL/PostGIS owns that data.

---

## 8. API contract

The API follows the established REST direction:

```text
/api/v1/
```

The implementation should use:

- OpenAPI documentation;
- explicit DTOs;
- input validation;
- consistent error handling;
- versioned endpoints where appropriate.

Database entities and internal domain structures must not be exposed directly as the public API contract.

Preferred flow:

```text
Client → Controller → Application → Domain → Repository → Data
```

---

## 9. Naming conventions

Use consistent TypeScript and API naming.

- `PascalCase` for classes and public types/interfaces where appropriate.
- `camelCase` for variables and functions.
- Conventional TypeScript file names such as `place.service.ts`, `place.controller.ts`, `place.repository.ts` and `place.dto.ts`.
- REST resources use noun-based paths such as `/api/v1/places`.
- Avoid inconsistent endpoint styles such as action-heavy or mixed naming patterns unless an explicit API decision requires them.

The goal is consistency rather than dogmatic naming for its own sake.

---

## 10. Provider abstraction

Provider-specific integrations must remain behind appropriate application boundaries.

### Geospatial

```text
Geospatial Provider abstraction
├── Géoportail / ACT — primary
├── Mapbox — fallback option
└── MapTiler — fallback option
```

The architecture must not make the product domain or UI unnecessarily dependent on a specific provider SDK or implementation.

### 360°

```text
360° Experience
├── Google Street View — external experience
└── Explore 360 — proprietary 360° content
```

The rendering layer should remain replaceable where practical.

Provider independence does not mean provider neutrality: approved preferred providers remain the default unless an explicit decision changes them.

---

## 11. Authentication

Exploration should remain accountless where the product permits it.

Authentication is required for persistent user capabilities such as Save and other identity-dependent features.

The implementation must not introduce a custom password system when the approved authentication-provider strategy applies.

Authentication and authorization must remain distinct: authentication establishes identity; authorization determines what that identity may access or modify.

---

## 12. Media and 360°

Media metadata and binary assets remain separated.

The implementation should support:

- responsive media variants;
- thumbnails/previews;
- lazy loading;
- CDN delivery;
- controlled upload handling;
- 360° media suitable for immersive viewing.

The initial proprietary 360° pipeline supports Explore Luxembourg 360 capture, including route/trail capture workflows already established in the architecture.

The first implementation should not attempt to build a full media-processing platform beyond what the vertical slice requires.

---

## 13. Offline boundary

The first release is:

> **Offline-aware, not offline-first.**

MVP may support useful local state, cached/already-loaded content, GPS/GNSS and graceful degradation when connectivity is lost.

The following remain future scope unless explicitly approved later:

- full offline maps;
- downloadable offline packages;
- offline navigation;
- advanced synchronization;
- offline uploads;
- advanced offline 360° support.

Do not introduce a complex offline architecture merely because the product may support richer offline functionality in a future update.

---

## 14. Security contract

Security is a transversal implementation constraint.

Required baseline areas include:

- least privilege;
- secure authentication and session handling;
- server-side authorization;
- object-level access control;
- input validation;
- output/input sanitization where applicable;
- rate limiting where appropriate;
- secure media upload validation;
- protection against common web/API abuse including BOLA/IDOR, XSS and SSRF where relevant;
- HTTPS in deployed environments;
- server/client secret separation;
- protected configuration;
- secure handling of personal data;
- logs that avoid unnecessary sensitive information.

> **Never trust the client for security-critical decisions.**

Security-sensitive architectural changes require human approval.

---

## 15. Environment and secrets

Expected environments:

```text
development
staging
production
```

Configuration must be supplied through environment-specific configuration and secret mechanisms.

Examples of server-side secrets/configuration may include database credentials, authentication client secrets and object-storage secret credentials.

Rules:

- never commit secrets to Git;
- never expose server secrets to browser code;
- distinguish public/client-safe configuration from server-only configuration;
- keep production credentials separate from development/staging credentials.

R6 defines the contract; actual credentials are supplied only through the appropriate runtime environment.

---

## 16. Testing contract

### Unit

Use Vitest for domain logic, application rules, transformations and utilities.

### Integration

Test important API/application/database interactions.

### End-to-end

Use Playwright for user-visible journeys.

Testing should be proportional to risk. Critical security, persistence, domain and user journeys receive stronger coverage than trivial implementation details.

---

## 17. First vertical slice

The first implementation should validate a complete end-to-end exploration journey rather than build isolated infrastructure indefinitely.

```text
Explore
  ↓
Place
  ↓
Story / Media
  ↓
Experience
  ↓
Continue Exploring
  ↓
Save intent
  ↓
Authentication when required
  ↓
Persistence
```

The sequence represents the product journey and should not be interpreted as requiring authentication before general exploration.

---

## 18. Seed / demo data

The first vertical slice should use a small representative seed set, approximately 5–10 Places, selected to exercise different capabilities and relationships.

Seed data must remain clearly distinguishable from authoritative production content.

The purpose of seed data is to prove the product and technical flow, not to simulate full Luxembourg coverage.

---

## 19. Definition of Done

A feature or implementation increment is complete when applicable:

- the implementation is functional;
- TypeScript checks pass;
- lint passes;
- formatting is consistent;
- relevant tests pass;
- the build passes;
- security requirements are satisfied;
- acceptance criteria are satisfied;
- architecture boundaries are respected;
- no secrets are introduced;
- MVP scope is not expanded;
- required documentation is updated.

"Code exists" is not a Definition of Done.

---

## 20. Acceptance criteria

Feature requirements should use explicit, testable criteria where practical, preferably in Given / When / Then form.

Example:

```text
Given an anonymous visitor viewing a Place
When the visitor selects Save
Then authentication is requested before persistent user data is created
```

Acceptance criteria should describe observable behaviour rather than prescribe unnecessary implementation details.

---

## 21. Git workflow

Implementation should follow small, reviewable changes:

```text
feature branch
    ↓
implementation
    ↓
tests / validation
    ↓
PR
    ↓
CI
    ↓
review
    ↓
main
    ↓
staging
    ↓
validation
    ↓
production
```

Codex must not bypass the project's review and deployment gates.

---

## 22. Scope control

Every proposed implementation item should be understood as one of:

- **MUST HAVE** — required for the current milestone.
- **SHOULD HAVE** — valuable but not allowed to destabilize the milestone.
- **FUTURE** — explicitly deferred.
- **NON-GOAL** — outside the current product scope.

> **Future ≠ MVP.**

Interesting ideas discovered during implementation must not automatically become current requirements.

---

## 23. Change-control process

If implementation exposes a genuine conflict with an approved decision:

```text
Conflict discovered
      ↓
Stop affected work
      ↓
Document the issue and impact
      ↓
Human decision
      ↓
Update the relevant decision/documentation
      ↓
Resume implementation
```

The exception is a minor implementation ambiguity that can be resolved safely using an existing approved convention.

No material product, domain, architecture, security, provider or scope change should be hidden inside a normal implementation commit.

---

## 24. Codex operating instructions

Before coding:

1. Read the relevant project documentation.
2. Identify the approved decisions affecting the task.
3. Confirm the task is within scope.
4. Reuse established conventions and abstractions.

During coding:

5. Keep changes focused and reviewable.
6. Do not silently alter approved product or architectural decisions.
7. Do not introduce unnecessary infrastructure or speculative abstractions.
8. Treat security and privacy constraints as first-class requirements.
9. Keep provider-specific code behind the appropriate boundary.
10. Keep secrets out of source control and client bundles.

Before completion:

11. Run the relevant tests and validation.
12. Verify acceptance criteria.
13. Check architecture and security boundaries.
14. Update documentation when an approved implementation decision genuinely changes.
15. Report unresolved material conflicts rather than inventing a new project decision.

---

## 25. Explicit non-goals for the initial implementation

The initial Codex implementation must not expand into:

- native Android/iOS applications;
- microservices architecture;
- full offline infrastructure;
- offline navigation;
- advanced offline synchronization;
- advanced 3D;
- advanced AI functionality;
- complex recommendation engines;
- full community/social platform;
- marketplace/payments;
- sophisticated CMS/admin platform;
- full territorial population of Luxembourg;
- speculative third-party integrations.

These may be revisited through explicit future decisions.

---

## 26. Final readiness checklist

Before R6 is formally closed:

- [x] Repository structure confirmed
- [x] Module boundaries confirmed
- [x] Domain ownership confirmed
- [x] API conventions confirmed
- [x] Naming conventions confirmed
- [x] Environment strategy confirmed
- [x] Secrets boundary confirmed
- [x] Testing strategy confirmed
- [x] Git/CI workflow confirmed
- [x] Definition of Done confirmed
- [x] Acceptance criteria confirmed
- [x] Seed/demo data strategy confirmed
- [x] First vertical slice confirmed
- [x] Provider boundaries confirmed
- [x] Offline MVP boundary confirmed
- [x] Security guardrails confirmed
- [x] Scope/non-goals confirmed
- [x] Decision Authority confirmed
- [x] Change-control process confirmed
- [x] Codex operating instructions confirmed

---

## 27. Readiness gate

R6 has been reviewed and the implementation contract contains no unresolved material implementation ambiguity.

Formal status:

```text
R6 — PROPOSED
      ↓
R6 — AUDITED
      ↓
R6 — APPROVED
      ↓
R6 — CLOSED
      ↓
FINAL PRE-CODEX AUDIT
      ↓
CODEX IMPLEMENTATION
```

**R6 does not authorize production release. It authorizes the project to proceed to the final pre-Codex validation gate once R6 is approved and closed.**
