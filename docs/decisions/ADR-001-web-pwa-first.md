# ADR-001 — Web/PWA First, Native Mobile Later

**Status:** Accepted
**Date:** 2026-08-18
**Decision:** Accepted

## Context

Explore Luxembourg 360 must provide an excellent experience on smartphones and desktop while maintaining one product, one domain model and one source of truth.

Volume II — Software Architecture identifies React/Next.js for the web platform and a future cross-platform mobile application direction. The product prompt also establishes Progressive Web App (PWA) as the preferred mobile approach unless technical constraints demonstrate that another approach is clearly superior.

The first development milestone must validate the core exploration experience without prematurely multiplying application clients and operational complexity.

## Decision

We will develop **Explore Luxembourg 360 as a responsive Web/PWA platform first**.

The architecture will nevertheless be designed so that a **future native/cross-platform mobile client can consume the same backend, domain model, authentication model and media services** without creating a separate mobile data silo.

The initial web platform will therefore be treated as a first-class product client, not as a temporary prototype.

## Initial direction

- Web: React + Next.js + TypeScript, subject to final stack validation before implementation.
- PWA: installable, responsive and capable of providing an offline-capable application shell where useful.
- Mobile web: intentional touch-first behaviours where appropriate, not merely a desktop layout compressed into a phone viewport.
- Desktop: richer map, media and exploration workflows using the same platform services.
- Future mobile: evaluate React Native when product usage, device capabilities or UX requirements justify a dedicated native/cross-platform client.

## Why this fits Explore Luxembourg 360

### 1. Faster validation of the core product

The first milestone can focus on the actual exploration experience:

**Explore → Map → Place → Story / Media → 360° Experience → Continue Exploring**

without simultaneously building and maintaining two application clients.

### 2. One source of truth

Web/PWA and any future mobile client will consume the same APIs and domain concepts. User state such as favourites, saved places, history and preferences remains server-backed and synchronized.

### 3. Lower early operational complexity

Starting with a web/PWA avoids introducing a second build, release, testing and store-distribution pipeline before there is evidence that a native client is necessary.

### 4. Strong accessibility and reach

The product can be accessed immediately through a modern browser, while still supporting installation as a PWA where the platform and browser permit it.

### 5. Reversible decision

This does not prohibit native mobile. The architecture explicitly protects the future option by keeping presentation channels separate from the domain and API contracts.

## What this decision does NOT mean

It does not mean:

- that mobile is secondary;
- that the application is desktop-first;
- that native mobile is permanently rejected;
- that device capabilities are ignored;
- that the PWA must reproduce every possible native capability.

Mobile UX remains a first-class product requirement from the beginning.

## Trigger for revisiting the decision

Re-evaluate a dedicated mobile client when one or more of the following becomes materially important:

- native device capabilities provide clear user value that the PWA cannot deliver adequately;
- immersive 360° interaction requires capabilities unavailable or unreliable on the web;
- offline navigation becomes a major use case;
- background location or other platform services become a legitimate product requirement;
- performance or battery constraints materially limit the web experience;
- product usage demonstrates enough mobile demand to justify the additional operational cost.

## Consequences

### Positive

- One initial client to build and validate.
- Lower development and maintenance overhead.
- Faster iteration.
- Immediate desktop and mobile-browser availability.
- Strong alignment with the product prompt.
- Preserves a clean path to future native clients.

### Negative

- Some advanced device capabilities may be less accessible than in native applications.
- A future native client will still require additional development and testing.
- PWA behaviour varies somewhat by operating system and browser.

## Related architecture requirements

The implementation must keep these boundaries explicit:

```text
Web / PWA
    │
    ├── API
    ├── Authentication
    ├── Media services
    └── Domain model
             ▲
             │
Future Mobile Client
```

Neither client should become the owner of the domain model or the authoritative source of synchronized user data.
