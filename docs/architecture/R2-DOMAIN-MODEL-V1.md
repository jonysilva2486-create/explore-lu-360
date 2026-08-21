# R2 — Domain & Data
## Domain Model v1 — Final

**Status:** CLOSED / APPROVED  
**Final audit:** PASS

## 1. Purpose

R2 defines the conceptual domain model for Explore Luxembourg 360 before it is translated into a physical database schema.

The model is **territory-first**. The database must represent the territory and the experience; it must not dictate them.

This document is intentionally conceptual. ORM selection, table-level schema, migrations, indexes and concrete PostgreSQL/PostGIS implementation details remain implementation decisions for the next stage.

## 2. Core domain

### Territory and geographic context
- `Territory` — overall territorial context of Explore Luxembourg 360.
- `Region` — administrative/geographic regional context where applicable.
- `Municipality` — administrative municipality.
- `Landscape` — geographic/natural/cultural landscape context; not treated as a child of Region or Municipality by definition.

`Region` and `Municipality` are administrative concepts. `Landscape` is a parallel geographic/contextual dimension and may spatially overlap administrative areas.

### Exploration
- `Place` — an identifiable, explorable element of the territory; not limited to conventional POIs.
- `Route` — an explorable geographic path such as a trail, walk, thematic or cultural route.
- `Experience` — a reusable exploration layer that can be associated with different domain elements rather than belonging exclusively to a Route or Place.
- `Media` — metadata and relationships for photographs, video, audio, panorama, 360 media and other media assets.
- `Story` — editorial content that can explain or contextualise Places, Routes, Landscapes, Experiences and other approved domain subjects.

### Organisation
- `Category` — controlled editorial classification.
- `Tag` — flexible descriptive classification.

### User state
- `User` — authenticated user account.
- `Save` — persistent user-owned saved state.
- `Collection` — user-created organisation of saved/explorable content.
- `History` — user exploration history, subject to privacy and retention rules.

## 3. Territory model

The model must not imply the following hierarchy:

`Region → Municipality → Landscape`

Instead, the conceptual relationship is:

`Territory`
- administrative context: `Region`, `Municipality`
- geographic/contextual dimension: `Landscape`
- explorable elements: `Place`, `Route`, `Experience`

A Place may belong to or be spatially related to administrative and landscape contexts. A Route may cross municipalities, regions and landscapes.

## 4. Place

A `Place` is a core territorial object that can represent natural, cultural, historical, architectural, recreational or other identifiable elements.

A Place may have Stories, Media, Experiences, Categories, Tags and geographic relationships.

A Place is not synonymous with POI.

## 5. Route

A `Route` represents an explorable geographic path.

A Route may pass through or relate to Places, cross Landscapes and administrative boundaries, contain or reference editorial content and media, and expose Experiences.

A Route is not itself an Experience. It is a territorial/exploration object that may expose experiences.

## 6. Experience

`Experience` is a cross-domain exploration layer.

An Experience may be associated with a Place, Route, Landscape, Story or another approved domain context. It is not conceptually owned exclusively by Place or Route.

Experience types may include `STREET_VIEW`, `PROPRIETARY_360`, `PHOTO`, `VIDEO`, `AUDIO`, `PANORAMA` and future types as justified.

The type mechanism is preferred over creating a separate domain entity for every experience technology.

## 7. Story and editorial relationships

`Story` is editorial content and is not limited to a Place description.

Conceptually, a Story may relate to Place, Route, Landscape, Experience or other explicitly approved editorial subjects.

The physical implementation may use a controlled relation model rather than creating separate Story foreign keys for every future subject type.

## 8. Media

`Media` represents the metadata and relationships of media assets.

The database is not the binary media store. Storage/CDN architecture is handled elsewhere.

Media may be associated with Places, Routes, Stories, Experiences and other approved content contexts.

Media metadata may include source, author, rights/licence, dates, technical metadata and storage references.

## 9. Multilingual content

Localised content must be modelled independently from the core entity structure.

Do not create fixed columns such as `name_en`, `name_fr`, `name_pt`, `name_nl`.

The model must support the current initial language set and allow additional languages without structural redesign.

## 10. User state

Exploration is available without an account.

Persistent cross-device saving requires an authenticated account.

Conceptually:

`Anonymous exploration → Save action → Account → persistent cloud Save → synchronisation across devices`

A Save is therefore user-owned persistent state, not merely a local browser/device flag.

## 11. Collections

A `Collection` belongs to a User and organises saved/explorable content.

Collection membership is a relationship/persistence concern rather than a major independent domain concept.

No separate `Favourite`, `Bookmark` and `SavedPlace` domain entities are introduced at this stage. `Save` is the base persistent user-saving concept.

## 12. History

`History` records relevant user exploration events where the feature is enabled.

Retention, deletion, privacy and access rules must be defined during implementation/privacy work. History is not assumed to be retained indefinitely.

## 13. Geographic representation

PostGIS is the geographic foundation.

Conceptual geometry types include:
- Point — Places and other point locations
- LineString/MultiLineString — Routes
- Polygon/MultiPolygon — geographic and administrative areas

Spatial relationships may include containment, intersection, crossing and proximity.

## 14. Core relationship map

The relationship map is conceptual and must not be read as a physical foreign-key prescription. Territory contains the administrative and geographic/contextual dimensions; Place and Route are explorable territorial objects; Experience and Story operate across domain contexts; User owns persistent user state.

## 15. Explicit non-goals

R2 does not model or decide payments, marketplace, reservations, public social network features, a full comments/reviews system, full gamification, loyalty programmes, AI editorial automation, complex offline synchronisation, native Android/iOS applications, cloud infrastructure, final storage/CDN provider, final mapping provider or ORM/data-access technology.

## 16. Final audit outcome

The final audit confirmed:
- territory-first architecture is preserved;
- administrative and landscape dimensions are correctly separated;
- Place remains a core territorial object rather than a generic POI;
- Route remains a territorial/exploration object and is not conflated with Experience;
- Experience is a cross-domain exploration layer;
- Story supports flexible editorial relationships;
- Media remains metadata/relationship data while binary storage is deferred to the infrastructure layer;
- multilingual content does not depend on fixed language columns;
- accountless exploration and account-based persistent saving remain aligned with the approved product decision;
- Collection and History remain user-state concepts with appropriate privacy boundaries;
- PostGIS remains the geographic foundation;
- physical schema concerns are explicitly deferred to the next stage.

**Audit result: PASS — R2 CLOSED / APPROVED.**

## 17. Next translation step

Only after approval of this conceptual model should it be translated into:

`Domain → entities → relationships → physical data model → PostgreSQL/PostGIS schema → migrations → indexes/constraints`

The physical model must preserve the territory-first and experience-first principles defined here.
