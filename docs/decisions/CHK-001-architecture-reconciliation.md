# CHK-001 — Architecture Reconciliation Checkpoint

**Status:** Accepted / Reconciled
**Date:** 2026-08-18  
**Last reconciled:** 2026-09-03
**Decision owner:** Explore Luxembourg 360

## Purpose

This checkpoint records the reconciliation of the current architectural decisions with Volume II — Software Architecture and the Master Product & Development Prompt.

## Approved baseline

The project distinguishes between the **target architecture** described by the architectural vision and the **initial implementation architecture** used to build and validate the product.

### Initial implementation

- Responsive Web/PWA client, with native-ready boundaries.
- Modular monolith backend.
- Versioned REST API (`/api/v1/`) documented with OpenAPI.
- PostgreSQL + PostGIS as the primary system of record for structured and geospatial data.
- Object storage for media assets.
- Redis introduced where justified for cache, rate limiting, sessions or suitable transient workloads.
- OpenSearch introduced when search scale or relevance requirements justify it rather than as a mandatory day-one dependency.

### Target/evolution architecture

The platform may progressively introduce:

- independently deployed services extracted from backend modules;
- dedicated search services such as OpenSearch;
- richer event-driven processing;
- dedicated media processing services;
- AI services;
- native Android/iOS clients;
- GraphQL or other interfaces for specific validated use cases.

These are evolution paths, not mandatory first-release components.

## Geospatial architecture

Explore Luxembourg 360 remains provider-independent at the architectural level.

The system must distinguish between:

1. official/external geospatial data sources;
2. map rendering technology;
3. Explore Luxembourg 360 proprietary/domain data.

**Géoportail / ACT** is the preferred primary official Luxembourg geospatial provider for applicable official geographic/topographic information and services, subject to the applicable technical, licensing, attribution, caching and institutional conditions.

**Mapbox and MapTiler** remain secondary/fallback rendering/infrastructure candidates behind the abstraction boundary. **OpenStreetMap** remains an important open/community source and ecosystem rather than direct production tile infrastructure. **Google Street View** remains the principal external 360° Experience provider.

The provider-independent architecture remains mandatory; the current provider direction does not constitute permanent exclusivity or institutional endorsement.

## Reconciliation decisions

### Microservices

Volume II's microservices architecture is treated as a target/evolution architecture. The first implementation will use a modular monolith with explicit internal boundaries.

### REST / GraphQL

REST is the initial primary application interface. GraphQL remains an option for a future, demonstrated need and is not prohibited.

### Mobile

The approved PWA-first, native-ready strategy remains in force. Native/cross-platform clients are a future channel, not a first-release requirement.

### Data infrastructure

The existence of PostgreSQL/PostGIS, object storage, Redis and OpenSearch in the target architecture does not imply that every component must be deployed or heavily used from the first milestone. Each dependency should earn its operational complexity through a real requirement.

### Offline

The MVP is **offline-aware, not offline-first**. R5.6 defines the essential offline boundary: locally available content, available local media/360, already available route/map resources, GPS/GNSS positioning and graceful degradation. Dedicated downloadable experiences, offline maps/navigation and offline synchronisation remain future evolution.

## Quality rule

No infrastructure component should be introduced merely because it appears in the target architecture. Initial implementation choices must balance product value, operational simplicity, scalability, security and reversibility.

## Consequence

The architectural vision remains ambitious and future-proof while the first implementation remains deliberately simple enough for a zero-code, early-stage product to be built, understood and validated without premature distributed-system complexity.

## Reconciliation record

This checkpoint is retained as the architectural reconciliation record. Later approved decisions, including the R4.1 provider-validation outcome, the R4.3 360° capture strategy and R5.6 MVP offline boundary, supersede only the earlier assumptions they explicitly replace; they do not invalidate the underlying provider-independent, modular and evolution-ready architecture.
