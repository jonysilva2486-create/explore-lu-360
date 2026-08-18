# ADR-003 — PostgreSQL + PostGIS + Redis + OpenSearch

**Status:** Accepted
**Date:** 2026-08-18
**Decision owner:** Explore Luxembourg 360

## Context

Explore Luxembourg 360 is fundamentally geographic and discovery-oriented. The platform needs an authoritative store for places, users, experiences, stories, routes and other domain data; strong spatial capabilities; fast access to frequently requested information; and a dedicated search capability as the content catalogue grows.

Volume II establishes PostgreSQL/PostGIS as the principal data direction and identifies Redis and OpenSearch as complementary platform components.

## Decision

The initial data architecture will use four complementary roles:

### PostgreSQL + PostGIS — system of record

PostgreSQL will be the authoritative database for core platform data. PostGIS will provide geographic capabilities for coordinates, distances, spatial relationships, geographic filtering and future spatial analysis.

### Redis — fast temporary state

Redis will be used where low-latency temporary data provides value, including caching, selected session-related state and rate-limiting/ephemeral workloads where appropriate.

Redis is not an authoritative source for core domain data.

### OpenSearch — search index

OpenSearch will provide a dedicated search and discovery index for content that benefits from fast text, filtering and relevance-oriented search.

OpenSearch is a derived index, not the authoritative source of truth for core domain records.

## Data ownership principle

The authoritative relationship is:

**PostgreSQL/PostGIS → source of truth**

**Redis → temporary acceleration**

**OpenSearch → derived search representation**

If Redis or OpenSearch is lost, the platform must be able to reconstruct their state from authoritative data and normal processing pipelines.

## Why this fits Explore Luxembourg 360

- Strong geographic capabilities are essential to the product.
- The platform needs reliable relational relationships between places, experiences, stories, media and users.
- Search should be optimised independently from transactional data storage.
- Frequently requested information can be accelerated without weakening data integrity.
- The architecture supports future scale without prematurely distributing the system of record.
- The separation keeps vendor-specific search and caching behaviour from defining the core domain model.

## Initial responsibilities

| Technology | Primary role | Source of truth? |
|---|---|---|
| PostgreSQL | Core domain data | Yes |
| PostGIS | Spatial data and operations within PostgreSQL | Yes, for authoritative geographic data |
| Redis | Cache / ephemeral workloads | No |
| OpenSearch | Search and discovery index | No |

## Consequences

### Positive

- Clear ownership of data.
- Excellent foundation for map-first and location-aware experiences.
- Search can evolve independently from transactional storage.
- Caching can improve performance without duplicating authority.
- Strong path toward future scale.

### Negative

- More than one data technology must eventually be operated.
- Synchronisation between authoritative data and derived search indexes must be monitored.
- Search indexing and cache invalidation become explicit engineering responsibilities.

## Review trigger

Revisit this decision if actual scale, search requirements, analytics workloads or future product capabilities demonstrate a concrete need for additional specialised data stores.
