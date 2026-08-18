# Architecture Validation — Volume II vs Baseline

**Status:** Review required
**Phase:** Foundation / Architecture validation
**Date:** 2026-08-18

## Purpose

This document compares the current Architecture Baseline with the previously approved **Volume II — Software Architecture, Version 1.0 (August 2026)**.

The objective is not to rewrite Volume II. It is to identify where the implementation baseline is already aligned, where it is too generic, and where an explicit decision is still required before production code begins.

## Executive result

**Assessment: broadly aligned, but not yet implementation-ready.**

The current baseline correctly captures the major architectural principles and product boundaries. Volume II provides substantially more concrete technical direction than the baseline currently records.

No production application code should be started until the material differences below are resolved or explicitly accepted as staged implementation decisions.

## 1. Strong alignment

The following areas are consistent between the baseline and Volume II:

- shared platform/data model across channels;
- exploration-first product philosophy;
- API/service-oriented architecture;
- PostgreSQL as the primary relational data direction;
- Redis for caching/session/rate-limiting concerns;
- S3-compatible object storage for media and assets;
- CDN-based media delivery;
- mapping/geolocation as a first-class platform capability;
- 360° media as a core capability;
- security-first architecture;
- scalable cloud infrastructure;
- observability and operational monitoring;
- CI/CD and automated development workflow;
- responsive web experience;
- accessibility and privacy requirements.

## 2. Technical direction already established by Volume II

Volume II is more specific than the current baseline in the following areas.

### Frontend / Web

Volume II identifies:

- React;
- Next.js;
- TypeScript;
- Tailwind CSS.

### Mobile

Volume II describes a cross-platform mobile application direction using React Native, with the documentation also mentioning Flutter as a possible mobile technology.

### Backend / API

Volume II identifies:

- Node.js;
- NestJS;
- REST APIs;
- GraphQL where appropriate;
- modular services / microservices boundaries;
- API gateway responsibilities.

### Data

Volume II identifies:

- PostgreSQL;
- PostGIS for spatial data;
- Redis;
- OpenSearch / Elasticsearch-style search indexing.

### Storage and delivery

Volume II identifies:

- S3-compatible object storage / AWS S3;
- CloudFront/CDN delivery;
- media processing and derived assets.

### Infrastructure

Volume II identifies:

- AWS;
- Docker;
- Kubernetes;
- Helm;
- GitHub Actions for CI/CD.

### Authentication and security

Volume II identifies:

- JWT-based access tokens;
- refresh-token mechanisms;
- OAuth 2.0 / OpenID Connect;
- RBAC;
- Auth0 as an external identity-provider direction;
- secure session management and monitoring.

### Monitoring

Volume II identifies a combination including:

- Prometheus;
- Grafana;
- Sentry;
- with Datadog also appearing in the external-services direction.

### Mapping / geolocation

Volume II identifies an architecture around:

- Mapbox;
- OpenStreetMap;
- MapTiler;
- official Luxembourg geographic/topographic sources such as IGN Luxembourg;
- PostGIS;
- vector tiles;
- geocoding;
- routing;
- spatial analytics;
- location cache and offline map capabilities.

## 3. Material differences / open decisions

### Decision A — PWA-first vs native mobile application

**Current baseline:** treats the web application/PWA as the initial mobile-capable platform.

**Volume II:** defines a dedicated mobile application architecture and describes React Native / Flutter.

**Assessment:** This is the clearest architectural difference.

**Recommendation:** For the first vertical slice, build the responsive web/PWA experience first. Preserve the domain/API/media contracts so a React Native mobile client can be added without creating a second data model. Do not commit to Flutter unless a later evaluation demonstrates a concrete advantage.

**Status:** Proposed — requires explicit approval before being recorded as an architectural decision.

### Decision B — Microservices from day one vs staged service boundaries

**Current baseline:** describes an application/API layer but deliberately avoids locking the implementation shape.

**Volume II:** describes a modular microservices ecosystem with an API gateway and independently deployable services.

**Assessment:** The direction is compatible, but the baseline is currently too vague for implementation.

**Recommendation:** Preserve the Volume II service boundaries as the target architecture. For the first vertical slice, evaluate whether those boundaries should initially run as a modular deployment rather than immediately creating operationally expensive independent services. This must be treated as an implementation-stage decision, not as a silent change to Volume II.

**Status:** Proposed — requires explicit approval.

### Decision C — Authentication provider

**Current baseline:** deliberately unresolved.

**Volume II:** points toward Auth0 / OAuth 2.0 / OIDC, JWT access tokens, refresh-token rotation and RBAC.

**Assessment:** The security model is sufficiently defined to narrow the decision.

**Recommendation:** Use the Volume II authentication model as the baseline and validate Auth0 specifically during the foundation phase, including cost, tenant model, data residency/privacy implications, logout/session behaviour and integration complexity.

**Status:** Proposed.

### Decision D — Database model

**Current baseline:** lists domain concepts but explicitly avoids a final schema.

**Volume II:** establishes PostgreSQL/PostGIS as the principal relational/spatial data layer, with Redis and search indexing as complementary systems.

**Assessment:** Aligned. The baseline should be made more concrete before implementation.

**Recommendation:** Adopt PostgreSQL + PostGIS as the authoritative system of record for core domain and geographic data. Treat Redis as a cache/session/ephemeral system and OpenSearch as a derived search index rather than a source of truth.

**Status:** Proposed.

### Decision E — Mapping provider and geographic data

**Current baseline:** leaves the provider open.

**Volume II:** identifies Mapbox, OpenStreetMap, MapTiler, IGN Luxembourg and curated custom data as complementary sources/providers.

**Assessment:** The architecture is not a single-provider map architecture. This is important for licensing, resilience and future independence.

**Recommendation:** Keep a provider abstraction in the platform. Do not couple the domain model directly to a single mapping vendor. Validate Mapbox as the initial rendering/integration choice against licensing, costs, Luxembourg coverage and the project's 360° requirements.

**Status:** Proposed.

### Decision F — Observability stack

**Current baseline:** says observability without choosing tools.

**Volume II:** contains Prometheus, Grafana, Sentry and Datadog in different operational contexts.

**Assessment:** Potential overlap needs clarification before infrastructure implementation.

**Recommendation:** Define one authoritative operational monitoring strategy before deployment. Avoid paying for overlapping systems without a clear division of responsibilities.

**Status:** Open.

## 4. Items that should remain deliberately deferred

The following should not block the first foundation unless required by the vertical slice:

- advanced AI services;
- sophisticated recommendation systems;
- complex social/community features;
- advanced gamification;
- full native mobile implementation;
- advanced offline packs;
- large partner integration catalogue;
- full administrative platform.

## 5. Important architectural principle confirmed

The comparison reinforces a key rule:

> **The domain and API contracts must not depend on the presentation channel.**

The same Place, Experience, Media, Story, Route, Collection and user-state concepts must be consumable by web/PWA, future native mobile applications and administrative tooling without creating separate silos.

## 6. Validation status

| Area | Volume II direction | Baseline | Result |
|---|---|---|---|
| Product architecture | Exploration-first | Exploration-first | Aligned |
| Web | React / Next.js / TypeScript | PWA direction | Needs decision |
| Mobile | React Native / cross-platform | PWA-capable mobile | Needs decision |
| Backend | Node.js / NestJS / services | API layer | Needs concretisation |
| Database | PostgreSQL / PostGIS | Generic persistent layer | Needs concretisation |
| Cache | Redis | Generic caching | Aligned, needs concretisation |
| Search | OpenSearch direction | Not explicit | Needs addition |
| Media | S3 + CDN + processing | Object storage + CDN | Aligned |
| Maps | Mapbox + OSM + other sources | Provider open | Needs decision |
| Auth | Auth0 / OIDC / JWT / RBAC | Provider open | Needs decision |
| Infrastructure | AWS / Docker / Kubernetes | Cloud layer open | Needs concretisation |
| Observability | Prometheus / Grafana / Sentry / Datadog | Generic | Needs rationalisation |
| Security | Multi-layered | Security baseline | Aligned |
| Privacy | Consent/minimisation | Privacy baseline | Aligned |
| 360° | Core immersive capability | Core capability | Aligned |

## 7. Gate before implementation

The architecture validation phase can be considered complete when the project has explicit decisions for:

1. First-client strategy: PWA/web first, with native mobile as a subsequent channel.
2. Backend deployment strategy for the first vertical slice.
3. PostgreSQL/PostGIS + Redis + search-index direction.
4. Initial mapping provider and provider abstraction boundary.
5. Authentication provider/model.
6. Initial cloud/deployment boundary.
7. Observability responsibilities and tool selection.
8. Initial 360° rendering approach.

Until these are resolved, the project remains in **Architecture Validation**, not implementation.
