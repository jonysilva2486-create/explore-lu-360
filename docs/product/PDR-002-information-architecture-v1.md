# PDR-002 — Product Information Architecture v1

**Status:** Accepted
**Date:** 2026-08-18
**Decision owner:** Explore Luxembourg 360

## Purpose

Define the first conceptual information architecture of Explore Luxembourg 360 before visual design or implementation begins.

This document follows PDR-001 and the architecture reconciliation checkpoint. It does not define final visual design, detailed database schema, or implementation code.

## Core principle

Explore Luxembourg 360 is organised around **exploration**, not administrative navigation.

The user should experience the platform as a connected territory of places, routes, stories, media and immersive experiences.

The conceptual hierarchy is:

> **Explore → Know → Contribute → Preserve**

## Primary product areas

### 1. Explore

The primary entry experience.

Purpose:
- discover Luxembourg through the map;
- discover nearby places;
- explore regions;
- find routes and experiences;
- surface relevant recommendations;
- move naturally from one place to another.

The map is an exploration surface, not merely a location utility.

### 2. Places

The core content entity representing a discoverable location or point of interest.

Examples include:
- natural sites;
- viewpoints;
- heritage and architecture;
- villages and localities;
- historical places;
- cultural sites;
- other verified or appropriately classified points of interest.

A place may connect to stories, photographs, 360° experiences, routes, regions and nearby places.

### 3. Trails & Routes

Dedicated experiences for walking, running, hiking, cultural routes and other geographic itineraries.

A route may contain or reference multiple places, media items, stories and immersive experiences.

### 4. Experiences

The immersive layer of the platform, with 360° experiences as a defining capability.

A 360° experience should be treated as an intentional exploration experience rather than simply another image in a gallery.

Future capabilities may include:
- orientation;
- contextual hotspots;
- linked places;
- transitions between viewpoints;
- related experiences;
- location metadata.

### 5. Search

Search is a cross-platform discovery capability rather than necessarily a permanent top-level destination.

It should support discovery across:
- places;
- routes;
- regions;
- experiences;
- stories;
- categories and themes.

The architecture must allow future semantic and natural-language search without requiring a different product structure.

### 6. My Explore

The personal area for authenticated users.

Potential capabilities:
- saved places;
- favourites;
- collections;
- saved routes;
- exploration history;
- preferences;
- personal contributions.

Account creation must not be required for basic exploration.

## Content relationships

Content must be modelled as a connected exploration network rather than isolated sections.

Example:

Region
→ Place
→ Story
→ Media
→ 360° Experience
→ Route
→ Nearby Place

A place can therefore act as a gateway to further exploration.

## Contribution model

Contribution is contextual to exploration.

Users may encounter actions such as:
- add a photograph;
- suggest information;
- add an observation;
- contribute local knowledge;
- report an issue.

Contribution must not dominate the first-use experience.

Community and institutional content requires appropriate provenance, rights, privacy, moderation and validation mechanisms as the platform evolves.

## Account model

Unauthenticated users can:
- browse;
- search;
- explore places;
- view supported media and 360° experiences;
- discover routes.

Authentication becomes relevant for:
- favourites;
- saved places;
- collections;
- history synchronisation;
- contributions;
- personalised features.

## Responsive behaviour

### Mobile

Prioritise:
- location-aware discovery;
- map interaction;
- nearby exploration;
- touch interaction;
- immersive media;
- quick access to saved content.

### Desktop

Prioritise:
- larger map surfaces;
- simultaneous map and content exploration;
- richer search and filtering;
- detailed place and route information;
- planning and comparison workflows.

Mobile and desktop use the same product model and data source, but interaction patterns may differ intentionally.

## Initial navigation hypothesis

The initial navigation model is conceptually:

- **Explore**
- **Search**
- **My Explore**

Places, Trails, Experiences and other content types are primarily discovered through Explore and Search rather than necessarily appearing as separate persistent navigation destinations.

This is an information-architecture hypothesis and will be refined during UX design and user-journey validation.

## Scope boundary

This document intentionally does not freeze:
- final screen layouts;
- visual design;
- final navigation placement;
- exact MVP feature list;
- detailed permissions;
- database tables;
- API contracts.

Those decisions belong to subsequent stages.

## Next required stage

Before implementation, the project must define and validate:

1. core user journeys;
2. MVP versus later capabilities;
3. detailed screen inventory;
4. responsive behaviour per journey;
5. design-system direction.

Only after those are validated should foundation implementation begin.
