# Architecture Validation Roadmap

**Status:** ACTIVE ROADMAP
**Phase:** Architecture Validation / Implementation Readiness
**Created:** 2026-08-20

## Purpose

This document is the canonical execution order for the architecture-validation phase following completion of the product and design foundations.

The project must follow this sequence rather than inventing new architecture work ad hoc.

## Current position

### Completed foundations

- Product definition and MVP scope — COMPLETE
- P6.1 Visual Language — COMPLETE
- P6.2 Component Language — COMPLETE
- P6.3 Design System Foundations — COMPLETE

### Current phase

**Architecture Validation / Implementation Readiness**

The existing Architecture Validation document states that production code should not begin until the material architecture differences are resolved or explicitly accepted.

## Planned sequence

### A1 — First Client Strategy

**Objective:** Explicitly approve the first-client strategy: responsive Web/PWA first, while preserving domain/API/media contracts for a future native mobile client.

**Key question:** How do we build the first vertical slice without creating a second architecture for future mobile?

**Status:** NEXT

### A2 — Backend Deployment Strategy

**Objective:** Decide the first vertical-slice deployment shape while preserving the Volume II target service boundaries.

**Key question:** Modular monolith first vs independent microservices from day one.

**Status:** PLANNED

### A3 — Data Foundation

**Objective:** Formalise PostgreSQL + PostGIS as authoritative data store, Redis for cache/session/ephemeral concerns, and OpenSearch as a derived search index.

**Status:** PLANNED

### A4 — Mapping Architecture

**Objective:** Define provider abstraction and initial mapping strategy across Mapbox, OSM, MapTiler, IGN Luxembourg and curated project data.

**Status:** PLANNED

### A5 — Authentication

**Objective:** Approve the authentication/security model, including Auth0 evaluation, OIDC/OAuth 2.0, JWT, refresh-token behaviour and RBAC.

**Status:** PLANNED

### A6 — Cloud / Deployment

**Objective:** Define the initial cloud and deployment boundary, including AWS/container/CI-CD direction, without overbuilding the first slice.

**Status:** PLANNED

### A7 — Observability

**Objective:** Rationalise Prometheus, Grafana, Sentry and Datadog responsibilities and select the initial operational strategy.

**Status:** PLANNED

### A8 — 360° Rendering

**Objective:** Approve the initial 360° rendering/experience technology and its contract with the media layer.

**Status:** PLANNED

## Final gate

### Architecture Implementation Readiness Audit

After A1–A8 are individually completed, audited and recorded, perform one final cross-check covering:

1. First-client strategy
2. Backend deployment strategy
3. Data foundation
4. Mapping architecture
5. Authentication
6. Cloud/deployment
7. Observability
8. 360° rendering
9. Security/privacy implications
10. Compatibility with the first vertical slice
11. Compatibility with future native mobile
12. Compatibility with the actual initial content-production strategy

Only after this final gate should the project move into production implementation.

## Mandatory workflow rule

For every architecture item:

**Check plan → present proposal → visual/technical demonstration when useful → user approval → audit → refine if necessary → record in GitHub → re-check this roadmap → move to the next planned item.**

The next item must always be selected from this roadmap or from an explicitly approved update to it.

**Do not invent the next architecture item during execution.**

## Project principle

The architecture must support the initial reality of Explore Luxembourg 360 — routes, Google Street View, own exterior photography, viewpoints, exterior monument documentation and place information — while remaining prepared for future 360° capture, authorised interior mapping and richer experiences.
