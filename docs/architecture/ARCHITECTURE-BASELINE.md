# Explore Luxembourg 360 — Architecture Baseline

**Status:** Proposed
**Phase:** Foundation / Architecture validation
**Last reviewed:** 2026-08-18

## 1. Purpose

This document establishes the initial technical baseline for Explore Luxembourg 360. It is a living document and must be validated against Volume II — Software Architecture before production implementation begins.

It records principles and boundaries without silently turning unresolved architectural choices into final decisions.

## 2. Product architecture principles

- One product, one shared data model.
- Mobile and desktop are two responsive experiences of the same platform.
- The core product is an exploration experience, not an administration dashboard.
- Mapping, place discovery, media and immersive 360° experiences are first-class capabilities.
- Security and privacy are designed from the beginning.
- Performance is treated as a product requirement.
- Accessibility is part of the foundation.
- Production data contracts must remain independent from mock/demo data.
- Architectural decisions should be reversible where practical.
- Technology should disappear behind the experience.

## 3. Initial platform shape

The platform is expected to consist of:

1. **Web application / PWA** — responsive exploration experience for smartphones, tablets and desktop browsers.
2. **Application/API layer** — business logic, validation, authorization and integration boundaries.
3. **Persistent data layer** — users, places, geographic entities, experiences, media metadata, collections and user state.
4. **Media/storage layer** — photographs, 360° assets, video and derived media representations.
5. **Mapping layer** — map rendering, geographic data and exploration interactions.
6. **Authentication and identity layer** — secure account and session management.
7. **Observability and operational layer** — logging, monitoring, error reporting and deployment infrastructure.

The exact technologies remain subject to validation against Volume II.

## 4. Domain direction

The initial domain is expected to include concepts such as:

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
- Favourite
- Bookmark / Saved Place
- Exploration History

These are **domain candidates**, not yet a final database schema.

## 5. Core experience boundary

The first vertical slice should validate the following complete journey:

**Explore → Map → Place → Story / Media → 360° Experience → Continue Exploring**

Secondary features should not be allowed to dominate the first milestone.

## 6. Synchronization principles

Synchronization is a first-class concern.

The architecture should support:

- authenticated cloud state;
- local persistence where useful;
- optimistic interactions where safe;
- retry after transient failures;
- timestamps/versioning for mutable user state;
- conflict handling appropriate to each data type;
- graceful reconnection after offline periods.

Advanced offline functionality should be introduced only where it creates meaningful user value.

## 7. Security baseline

The implementation must follow least-privilege principles and must not expose secrets in client-side code.

Required baseline areas include:

- secure authentication and session management;
- authorization and role boundaries where applicable;
- server-side validation;
- rate limiting where appropriate;
- output/input sanitization;
- secure media upload handling;
- HTTPS in deployed environments;
- protected secrets/configuration;
- secure storage of personal data;
- auditability for sensitive administrative operations.

Exact authentication and authorization mechanisms remain subject to Volume II validation.

## 8. Privacy baseline

The platform should collect the minimum data necessary for the feature being used.

Location access must be contextual and permission-based. Continuous location tracking is not part of the baseline unless a future product requirement explicitly justifies it.

User-generated photographs, location data, favourites, history and other personal data require explicit ownership, retention and access rules before production launch.

## 9. Media principles

Media architecture must support progressive delivery and avoid forcing large original assets onto clients unnecessarily.

The platform should be designed for:

- responsive image variants;
- thumbnails and previews;
- lazy loading;
- caching/CDN delivery;
- 360° media delivery suitable for immersive viewing;
- metadata separation from binary assets;
- controlled upload and processing pipelines.

## 10. Performance principles

Performance targets will be defined before the first production release. The architecture should favour:

- code splitting;
- lazy loading;
- efficient API requests;
- pagination;
- caching;
- CDN delivery;
- optimized media;
- minimal unnecessary client-side work.

Mobile networks are a primary performance constraint.

## 11. Accessibility baseline

Semantic HTML, keyboard navigation, visible focus, meaningful labels, sufficient contrast, reduced-motion support and accessible alternatives for map-dependent information are baseline requirements.

## 12. Responsive product model

Responsive behaviour must be intentional rather than a desktop layout simply collapsing onto mobile.

Desktop may use richer map surfaces, side panels and multi-column exploration. Mobile may prioritize touch interaction, immersive media and focused navigation.

Both experiences consume the same underlying platform and data model.

## 13. Development boundaries

The initial implementation should avoid prematurely building:

- advanced AI features;
- complex social features;
- sophisticated gamification;
- large administration systems;
- advanced recommendation engines;
- unnecessary offline infrastructure;
- speculative integrations.

The first objective is to prove the core exploration experience end to end.

## 14. Open architectural decisions

The following must be explicitly validated before the corresponding implementation is locked:

1. Frontend framework and PWA strategy.
2. Backend/API architecture.
3. Database technology and geographic data strategy.
4. Mapping provider/engine and licensing constraints.
5. Authentication provider and session model.
6. Object storage, media processing and CDN strategy.
7. Hosting/deployment platform.
8. Observability stack.
9. Initial 360° rendering technology.
10. Offline scope for the first release.

## 15. Validation rule

A decision is not considered final merely because it appears in this baseline. Architectural decisions become **Approved** only after comparison with Volume II, technical constraints and the needs of the first vertical slice.

## 16. Next milestone

Before production application code is written:

1. Validate this baseline against Volume II.
2. Resolve the open architectural decisions that affect the foundation.
3. Define the initial domain model.
4. Define the first vertical slice in sufficient UX and technical detail.
5. Select the implementation stack.
6. Create the application foundation.
