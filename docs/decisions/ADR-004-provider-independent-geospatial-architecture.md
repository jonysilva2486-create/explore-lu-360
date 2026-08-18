# ADR-004 — Provider-Independent Geospatial Architecture

**Status:** Accepted
**Date:** 2026-08-18
**Decision owner:** Explore Luxembourg 360

## Context

Mapping and geospatial information are foundational to Explore Luxembourg 360. The platform must support interactive maps, geographic discovery, places, routes, proximity, 360° experiences and official Luxembourg geographic information.

Volume II identifies Mapbox, OpenStreetMap, MapTiler, official Luxembourg geographic/topographic sources and custom platform data as relevant components.

The project also identifies Géoportail / the Luxembourg Administration du cadastre et de la topographie as a strategically important potential source and future institutional collaboration partner.

## Decision

Explore Luxembourg 360 will use a **provider-independent geospatial architecture**.

The product domain and application code must not be tightly coupled to a single commercial mapping provider.

A dedicated geospatial integration boundary will allow the platform to combine different sources according to purpose.

## Roles of the main sources/providers

### Géoportail / official Luxembourg sources

Treat Géoportail as a strategic official geospatial source and potential institutional collaboration partner.

Where licensing, technical access and collaboration agreements permit, official Luxembourg datasets and services should be integrated through defined geographic data interfaces.

Géoportail is not required to be the sole map-rendering engine. Its greatest strategic value may be as an authoritative source of Luxembourg-specific geographic information and official services.

### OpenStreetMap

Use OpenStreetMap as an important open/community geographic data source, subject to its licensing and attribution requirements.

### Mapbox

Evaluate Mapbox as a potential initial map-rendering and interaction provider, including cost, licensing, performance, coverage and integration with the platform's 360° experience.

### MapTiler

Evaluate MapTiler as a rendering/tile and geographic infrastructure alternative or complement, particularly where it provides useful independence or cost/technical advantages.

### Explore Luxembourg 360 data

The platform will maintain its own authoritative domain data for places, experiences, stories, routes, curated content and other product-specific information.

## Architectural boundary

The application should interact through a platform geospatial layer rather than embedding provider-specific assumptions throughout the product.

Conceptually:

**Explore Luxembourg 360 → Geospatial Integration Layer → Providers / Sources → PostGIS**

The exact direction of data flow depends on the dataset and licensing model. Not every external dataset should automatically be copied into PostGIS.

## Important distinction

The following are separate architectural concerns:

1. **Map rendering** — what the user sees and interacts with.
2. **Geospatial source data** — geographic facts and datasets.
3. **Geospatial computation** — distance, proximity, spatial relationships and routing.
4. **Explore 360 content** — proprietary/curated places, stories, media and experiences.

A single vendor does not need to perform all four roles.

## Provider selection process

Before permanently selecting the initial map-rendering provider, the project will evaluate:

- licensing and attribution;
- commercial usage conditions;
- pricing and expected growth costs;
- Luxembourg coverage and data quality;
- rendering quality;
- performance on mobile networks;
- vector-tile capabilities;
- offline possibilities;
- geocoding/routing capabilities;
- PostGIS integration;
- 360° experience integration;
- API and usage limits;
- resilience and vendor lock-in;
- operational complexity.

## Institutional collaboration

The project should explore a professional relationship with the relevant Luxembourg public geospatial authorities before production dependence is established.

Potential objectives include:

- understanding official data licensing;
- identifying appropriate APIs and services;
- validating permitted technical usage;
- discussing attribution and caching requirements;
- exploring integration or collaboration opportunities;
- ensuring the platform complements rather than misrepresents official geographic information.

No assumption of partnership, endorsement or special access is made until formally confirmed.

## Consequences

### Positive

- Reduced dependence on one map vendor.
- Stronger alignment with Luxembourg's official geographic ecosystem.
- Greater flexibility as the product evolves.
- Ability to combine official, open and proprietary data appropriately.
- Better long-term control over the platform's geographic domain model.

### Negative

- More integration work than selecting a single provider.
- Licensing must be evaluated dataset by dataset.
- Multiple providers may create operational complexity if boundaries are poorly defined.
- A provider abstraction must be designed carefully to avoid becoming unnecessary infrastructure.

## Review trigger

Revisit the provider selection after the geospatial evaluation and prototype phase, before production map infrastructure is locked.
