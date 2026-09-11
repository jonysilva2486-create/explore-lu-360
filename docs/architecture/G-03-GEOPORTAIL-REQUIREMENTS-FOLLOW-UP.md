# G-03 — Géoportail / ACT Requirements Follow-up

**Status:** SENT — awaiting external technical guidance  
**Date sent:** 2026-09-11  
**External contact:** ACT — Service ILDG et Géoportail

## Purpose

Record the formal follow-up sent to Géoportail / ACT after its request for a clearer description of Explore Luxembourg 360's cartographic and geospatial needs.

This follow-up does not reopen the approved primary-provider direction in R4.1. It seeks service-level guidance needed to turn that architectural direction into a technically and legally sound production integration.

## Material sent

The project sent a four-page French requirements brief titled:

**Explore Luxembourg 360 — Description initiale des besoins cartographiques et géospatiaux**

The brief describes:

- the project's territory-first product vision;
- the intended separation between Géoportail / ACT services, project-owned data and the external 360° experience layer;
- three families of geographic objects: Points of Interest, Routes and territorial Areas;
- the relationship between geographic objects, Explore Luxembourg 360 editorial content and optional 360° content;
- map rendering, official layers, orthophotography and dynamic feature-access needs;
- internal content search versus geographic search/geocoding;
- filtering and bidirectional map-to-content navigation;
- the responsive public web application and the internal smartphone field tool;
- the limited initial pilot, currently unknown usage volumes and progressive scaling intent;
- future capabilities deliberately kept outside the MVP.

## Guidance requested

Géoportail / ACT was asked to advise on:

1. the recommended combination of Vector Tiles, WMTS, Public Map Layers and OGC API Features;
2. direct service consumption versus targeted use of the Géoportail JavaScript API;
3. official datasets and layers relevant to territory discovery, routes, nature, heritage and tourism;
4. the boundary between official data consumed from source and project-owned data stored in PostgreSQL/PostGIS;
5. stable or persistent identifiers for referencing official geographic objects without unnecessary duplication;
6. geographic search, locality/address lookup, object location and geocoding services;
7. coordinate reference systems, formats and interoperability practices for project-owned geometries;
8. attribution, licensing, caching, temporary storage, production use, authentication, quotas, client-side constraints and dataset-specific conditions;
9. scalability guidance for service endpoints, tile consumption, API calls, caching and data management.

## Current decision state

The following decisions remain unchanged:

- **Primary official geospatial provider:** Géoportail / ACT.
- **Project-owned geographic authority:** PostgreSQL/PostGIS.
- **Provider-independent integration:** mandatory.
- **External 360° experience direction:** Google Street View, kept separate from the geospatial-provider boundary.
- **Temporary development provider:** permitted behind the approved adapter until the production integration is validated.

## Open external dependency

The project is now awaiting Géoportail / ACT guidance on the service combination, datasets, integration mode, interoperability rules and usage conditions described above.

Until that response is assessed and recorded:

- no dataset-specific production reuse is approved;
- no blanket licensing, caching or attribution assumption may be made;
- no Géoportail-specific identifier may leak into the core domain model;
- implementation may continue behind the provider abstraction using the temporary development adapter;
- decisions that depend on the response must remain explicit and replaceable.

## Next action after response

When Géoportail / ACT replies, the project must:

1. evaluate the response against R4.1 and G-01;
2. record confirmed services, layers, identifiers and conditions;
3. identify any dataset-level legal or technical validation still required;
4. update the production-provider adapter plan without changing provider-neutral domain contracts;
5. close or narrow this external dependency only to the extent supported by the response.
