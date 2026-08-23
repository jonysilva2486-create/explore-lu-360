# R3 — Experience Contract / First Vertical Slice
## First Vertical Slice Implementation Specification — Final

**Status:** CLOSED / APPROVED  
**Final audit:** PASS  
**Scope:** First end-to-end Explore Luxembourg 360 experience before production implementation

## 1. Purpose

R3 defines the first complete product slice that proves the core Explore Luxembourg 360 experience across the Web/PWA, API, domain, data, geography and experience layers.

The slice is intentionally small but genuinely vertical. It must prove:

> **Explore → Discover → Place → Story/Media → Experience → Continue Exploring**

The slice is territory-first, not trail-first.

## 2. Core journey

1. **Explore** — enter the territory and discover content.
2. **Discover** — select a Place from the map or discovery cards.
3. **Place** — understand what the place is, where it is and why it matters.
4. **Story / Media** — consume contextual editorial content and media.
5. **Experience** — open the best available immersive/visual experience.
6. **Continue Exploring** — discover related Places, Routes, Landscapes, Stories or Experiences.
7. **Save (optional)** — authenticated users can persist a Place; anonymous users are prompted to create/sign into an account when persistent saving is requested.

## 3. First-slice screens

### 3.1 Explore

The entry experience exposes the territory through a map and curated discovery content.

Required:
- map/territory context;
- representative Places;
- discovery cards;
- nearby/contextual discovery where location is available;
- graceful operation when location permission is denied.

Search is **not a mandatory dependency** for the first slice. It may be present as a secondary UI element only if it does not expand the implementation scope.

### 3.2 Place

Required content:
- Place identity/name;
- geographic context;
- hero/representative media;
- short introduction;
- Story/context entry;
- available Media;
- available Experience;
- basic actions such as map/directions/nearby where already supported by the approved UI system;
- Save action.

### 3.3 Story / Media

Story is contextual editorial content, not merely a generic Place description.

Media is presented according to the approved content and rights model. Binary assets remain outside the database.

### 3.4 Experience

The Experience layer is cross-domain and must not be coupled exclusively to Place or Route.

The first slice supports a capability hierarchy:

1. proprietary Explore 360 360° where available;
2. Google Street View where available;
3. panoramic/photo experience;
4. editorial media fallback.

The user must receive a meaningful experience even when a higher-level immersive provider is unavailable.

### 3.5 Continue Exploring

Every completed Place/Experience journey should expose a meaningful next step rather than a dead end.

Candidates include:
- nearby Places;
- related Routes;
- Landscapes;
- related Stories;
- related Experiences.

The recommendation logic can be simple and curated in the first slice; it does not require an advanced recommendation engine.

## 4. Accountless and account behaviour

### Anonymous user

May:
- Explore;
- view map content;
- open Places;
- read Stories;
- view Media;
- use available Experiences;
- continue exploring.

No account is required for discovery.

### Authenticated user

Additionally may:
- Save Places/content;
- view saved content/Collections at the minimum scope required by the slice;
- retain saved state across devices.

### Save action while anonymous

The user is asked to create an account or sign in. The persistent Save is created only after authentication.

## 5. My Explore scope

The first slice must not grow into a second application.

Required minimum:
- proof that a Save can be created;
- proof that the saved item can be retrieved;
- minimal Collection behaviour where needed to demonstrate persistent organisation.

History, Settings and broader account-management experiences are outside the mandatory first-slice path.

## 6. System states

The slice must explicitly cover:
- loading;
- empty content;
- API/content error;
- unavailable Experience;
- permission denied for location;
- limited connectivity/network interruption.

Limited connectivity is a runtime state in R3. A complete offline caching/synchronisation architecture is **not** part of R3 and remains under R5.

The product must remain explorable when location permission is denied.

## 7. Representative content pack

The first slice should use a small real/curated content pack rather than artificial placeholder-only data.

Target: approximately 5–10 Places, selected to exercise different capabilities, for example:

- Place + Story;
- Place + Street View;
- Place + Route relationship;
- Place + proprietary/editorial media;
- Place + multiple Experiences/relationships.

The content pack is a validation instrument, not a claim that the whole Luxembourg territory is already populated.

## 8. Full-stack boundary

The slice must cross the approved application layers:

```text
User
 ↓
Web / PWA
 ↓
Versioned REST API
 ↓
Domain / application modules
 ↓
PostgreSQL + PostGIS
 ↓
Media / Experience provider boundary
 ↓
API response
 ↓
Web / PWA
```

Clients must not access the database directly.

The implementation remains compatible with the approved Modular Monolith and R1 stack.

## 9. API expectations

R3 defines behaviour before locking detailed endpoint design.

The implementation must provide API contracts sufficient for:
- Explore/Place discovery;
- Place detail;
- Story/Media retrieval;
- Experience retrieval/launch metadata;
- related-content discovery;
- authenticated Save creation/retrieval.

Concrete endpoint names, DTOs and OpenAPI schemas are implementation details to be finalised without changing the approved experience contract.

## 10. Acceptance criteria

The first slice is successful when:

### Anonymous journey
- a visitor opens Explore;
- discovers/selects a Place;
- opens Place detail;
- understands the Place context;
- reads Story/Media;
- launches an available Experience or appropriate fallback;
- continues to another relevant discovery;
- remains functional if location permission is denied.

### Authenticated journey
- a user can Save a Place;
- authentication is requested when necessary;
- the Save persists to the user's account;
- the saved item can be retrieved through the minimum My Explore/Collection scope.

### Technical journey
- Web communicates through the API;
- API accesses domain/data layers;
- geographic data is served through PostGIS-backed structures where relevant;
- Experience/media metadata is served correctly;
- loading/empty/error/unavailable states are handled;
- the main journey is covered by automated tests at appropriate levels.

## 11. MUST HAVE vs FUTURE boundary

### MUST HAVE — First Slice
- Explore;
- Place discovery;
- Place detail;
- Story/context;
- Media;
- Experience layer;
- Experience fallback hierarchy;
- Continue Exploring;
- accountless exploration;
- Save with authentication when required;
- minimal saved-state/Collection proof;
- required system states;
- representative real/curated content;
- API/domain/data path;
- acceptance/E2E coverage of the core journey.

### FUTURE / OUT OF SCOPE FOR THIS SLICE
- advanced search and ranking;
- full recommendation engine;
- complete History experience;
- broad Settings/account centre;
- social features, comments and reviews;
- gamification;
- payments/reservations/marketplace;
- full offline maps;
- downloadable regions;
- complex offline synchronisation;
- native Android/iOS applications;
- complete CMS/editorial platform;
- advanced analytics;
- full Luxembourg-wide content population.

Any addition to the MUST HAVE scope requires explicit review rather than silent expansion during implementation.

## 12. Non-goals and boundaries

R3 does not select or finalise:
- mapping provider;
- authentication provider;
- 360 renderer;
- storage/CDN provider;
- ORM/data-access technology;
- cloud/deployment strategy;
- complete offline architecture.

Those remain in the later roadmap blocks defined by the Master Roadmap.

## 13. Visual documentation

A nine-panel visual presentation was approved as the visual companion to this specification. The panels cover:

1. Overview & Vision
2. First Vertical Slice Journey
3. Explore — Discover the Territory
4. Place — Learn About the Place
5. Story — Context & Meaning
6. Experience — Immersive Exploration
7. Continue Exploring
8. Save, Account & Collections
9. Behind the Scenes — Full Stack Flow

The visual material is explanatory and must not override the written product/architecture contract.

## 14. Final audit outcome

The final audit confirms:
- the slice is genuinely vertical rather than a collection of isolated screens;
- territory-first exploration is preserved;
- Place remains the central territorial discovery object without becoming a trail-first model;
- Experience remains a cross-domain layer;
- accountless exploration is preserved;
- persistent saving requires authentication and remains synchronisable;
- offline scope is explicitly deferred to R5;
- Search is not a mandatory first-slice dependency;
- My Explore is intentionally minimal;
- MUST HAVE versus FUTURE is explicit and protects the implementation scope;
- system states are covered;
- representative content is required;
- the slice crosses UI, API, domain, data, geography and Experience/media boundaries;
- no later infrastructure/provider decision is prematurely reopened.

**Audit result: PASS — R3 CLOSED / APPROVED.**

## 15. Next step

R3 is complete. The next planned block is **R4 — External Infrastructure & Providers**, starting with provider validation while preserving all approved architecture decisions.
