# G-03 — Géoportail / ACT Requirements Follow-up

**Status:** CLOSED — conceptual compatibility confirmed; concrete service/dataset validation moves to implementation  
**Date sent:** 2026-09-11  
**Response received:** 2026-09-15  
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

## Response received on 2026-09-15

Géoportail / ACT confirmed that:

- the described needs are globally coherent with combining multiple Géoportail services and project-owned business data;
- no element identified at this stage appears incompatible with using Géoportail services;
- the exact choice between Vector Tiles, WMTS Open Data, OGC API Features, public layers and other services depends on the concrete functionality implemented;
- official-layer metadata in the Géocatalogue must be consulted for licence, producer and dataset-specific reuse conditions;
- the project may return with exact dataset, layer or API references when implementation raises a concrete question.

The response validates the conceptual direction but deliberately does not select services, datasets, identifiers, quotas, caching rules or production conditions on the project's behalf.

## Closed broad dependency / open implementation gates

The broad external consultation is now closed. It is replaced by concrete implementation and production gates:

- identify the exact service, layer, dataset or API required by a user-facing capability;
- consult its Géocatalogue metadata and official documentation;
- record licence, producer, attribution, caching, authentication, quota and reuse conditions;
- test technical compatibility through the provider adapter;
- return to Géoportail / ACT only when a precise reference requires clarification.

Until each concrete item passes those checks:

- no dataset-specific production reuse is approved;
- no blanket licensing, caching or attribution assumption may be made;
- no Géoportail-specific identifier may leak into the core domain model;
- development may continue behind the provider abstraction using the temporary development adapter.

## Next decision sequence

The first service-level choice should be driven by the first vertical slice:

1. define the minimum basemap and official-layer capability required by the slice;
2. compare the relevant Géoportail service options against that capability;
3. validate metadata, licence and technical integration for the exact references;
4. implement the selected option behind the existing MapLibre/provider boundary;
5. repeat the process only when another concrete capability requires an additional service or dataset.
