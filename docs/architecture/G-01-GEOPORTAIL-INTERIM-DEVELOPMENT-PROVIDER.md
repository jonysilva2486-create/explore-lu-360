# G-01 — Géoportail / ACT: Interim Development Provider

**Status:** CLOSED — external dependency remains open for production provider validation
**Phase:** Final Pre-Codex Gate

## Decision

Explore Luxembourg 360 will **not wait for the Géoportail / ACT response to begin application development or UI testing**.

The project is awaiting ACT/Géoportail feedback specifically on the most appropriate map type/style/service for the intended production experience. That external validation remains open.

For development and testing, the application must therefore use a **temporary provider implementation behind the approved map-provider abstraction**.

## Non-negotiable boundary

The temporary development provider is an implementation/testing aid only. It is **not** a production provider-selection decision and must not become an architectural dependency of the product.

The domain, API and UI must remain provider-neutral.

## Required architecture

```text
Explore Luxembourg 360 UI
        ↓
Map interface / application contract
        ↓
Map provider adapter
   ┌────┴───────────────┐
   │                    │
Temporary DEV       Production
provider             Géoportail / ACT
   │                    │
   └────── replaceable ┘
```

The map adapter must isolate provider-specific SDKs, configuration and identifiers from domain and UI contracts.

## Development/testing requirements

Before ACT/Géoportail validation is complete, development must be able to test:

- map rendering;
- pan and zoom;
- responsive behaviour;
- user-location presentation where permitted;
- Place markers;
- Route/Trail geometries;
- map ↔ content interaction;
- selection and detail states;
- loading/error/empty states;
- performance;
- graceful degradation when the map provider is unavailable.

Representative project-owned geometry should be served through the application's own API/PostGIS boundary rather than making the UI directly dependent on the external provider.

## Provider switch requirement

When ACT/Géoportail confirms the production map type/service, implementation should require only the corresponding provider adapter/configuration changes wherever the approved abstraction is sufficient.

A provider decision must not force a rewrite of:

- Place/Route domain models;
- API contracts;
- saved user state;
- editorial content;
- Explore navigation;
- 360° experience logic.

## Production gate

This decision does **not** approve any particular ACT/Géoportail dataset or licence for production reuse. Dataset/service-level licence, attribution, caching and technical conditions remain subject to the separate G-01 production validation described in the Final Pre-Codex Audit.

## Codex instruction

Codex may implement and test the map using the temporary development provider, but must:

1. keep provider-specific code behind the map-provider boundary;
2. avoid hard-coding provider identifiers into domain models;
3. avoid treating the temporary provider as the final production choice;
4. make provider configuration environment-driven;
5. leave the Géoportail/ACT production provider replaceable until the external decision is recorded.
