# ADR-006 — Media & 360° Strategy

**Status:** Accepted / Reconciled
**Date:** 2026-08-18  
**Last reconciled:** 2026-09-03
**Decision owner:** Explore Luxembourg 360

## Context

Immersive media is a defining part of Explore Luxembourg 360, but capturing and hosting a complete 360° representation of Luxembourg would create unnecessary cost, operational complexity and duplication of existing coverage.

Google Street View already provides broad road and route coverage. Explore Luxembourg 360 should use that existing coverage where it adequately serves the exploration purpose, while selectively creating proprietary coverage where owned immersive content adds meaningful product differentiation.

## Decision

Explore Luxembourg 360 will adopt a **hybrid media and 360° strategy**:

1. **Google Street View for existing external coverage** where its coverage and interaction model are appropriate.
2. **Explore Luxembourg 360 proprietary 360° capture for selected trails/routes and locations**, using the approved capture and publication pipeline where applicable.
3. **Own photography and video** for editorial, storytelling and contextual content.
4. **Object Storage + CDN** for proprietary media assets.
5. **PostgreSQL** stores media metadata and relationships, not large media binaries.

## Google Street View role

Google Street View will be treated as an external immersive coverage layer, not as Explore Luxembourg 360-owned media.

The platform may retain appropriate references/identifiers and metadata needed to integrate Street View experiences, subject to Google's current terms and technical requirements.

Explore Luxembourg 360 will not copy Google Street View imagery into its own media storage or present third-party imagery as proprietary content.

All Google Maps Platform / Street View integration must be reviewed against the applicable current terms, attribution requirements, API quotas, caching/storage restrictions and commercial-use conditions before production launch.

## Explore Luxembourg 360 proprietary 360° capture

Explore Luxembourg 360 will selectively create its own 360° coverage using the approved capture workflow rather than attempting to cover every road or trail indiscriminately.

The trail/route capture model may use the project's Insta360 X6 equipment with GPS-linked capture, processing and publication through the approved Google Street View pipeline, subject to the applicable technical, legal and platform requirements.

Priority candidates include:

- viewpoints;
- castles and heritage sites where authorised;
- interiors where permission is obtained;
- museums and cultural locations where authorised;
- distinctive natural locations;
- trails/routes where continuous or strategically placed coverage creates genuine exploration value;
- locations insufficiently represented by existing coverage;
- special experiences where the immersive presentation itself is part of the product value.

The editorial principle is:

> **Do not capture simply because we can. Capture where ownership of the experience creates value that existing coverage cannot provide.**

## Coverage principle

The strategic model is:

**Google for existing coverage. Explore 360 for owned trail/route coverage and differentiation.**

Google Street View can provide existing road and covered-route coverage. Explore Luxembourg 360 proprietary media should concentrate on trails, routes, moments, places and stories that deserve dedicated project-created coverage.

## Media architecture

Proprietary assets will use an object-storage architecture:

```text
Explore Luxembourg 360
        │
    PostgreSQL
   media metadata
        │
        ↓
   Object Storage
   ├── Photos
   ├── 360° imagery
   └── Videos
        │
        ↓
       CDN
        │
        ↓
     Users
```

The database stores ownership, relationships, dimensions, processing state, versions, rights metadata and references. Large binary assets remain outside PostgreSQL.

## 360° capture and processing pipeline

The approved capture workflow is conceptually:

```text
X6 Capture
   ↓
GPS-linked source
   ↓
Ingest / validation
   ↓
Processing / optimisation
   ↓
Project-owned master + derivatives
   ↓
Publication / integration
   ├── Google Street View where appropriate
   └── Explore Luxembourg 360 proprietary experiences where appropriate
```

The exact capture cadence, route segmentation, metadata schema and publication automation are implementation details and must respect the applicable platform requirements.

## Media processing

The implementation should support a future media pipeline for:

- validation;
- metadata extraction;
- image resizing;
- thumbnail generation;
- 360° asset validation;
- video transcoding where required;
- responsive delivery;
- optimisation and compression;
- CDN publication.

Processing should be asynchronous where workload justifies it.

## Rights and permissions

Proprietary media must have explicit rights/permission records appropriate to the content and context.

The system should be capable of recording:

- source;
- creator/owner;
- licence or permission basis;
- publication status;
- usage restrictions;
- attribution requirements;
- capture date;
- relevant expiry/review date where applicable.

## Why this fits Explore Luxembourg 360

- Avoids duplicating large portions of existing Street View coverage.
- Dramatically reduces initial capture and storage investment.
- Focuses proprietary effort on experiences that differentiate the product.
- Preserves the ability to create a distinctive owned media library over time.
- Allows trail/route coverage to become a genuine Explore 360 asset rather than relying exclusively on existing road coverage.
- Scales storage independently from transactional application data.
- Supports professional media workflows as the platform grows.

## Consequences

### Positive

- Lower initial capital and operational cost.
- Faster geographic coverage through existing Street View.
- Strong differentiation through selective proprietary trail/route and location experiences.
- Clear separation between external and owned media.
- Scalable media infrastructure.

### Negative

- Dependence on third-party Street View availability and policies for part of the experience.
- Google integration introduces external API cost and policy considerations.
- Proprietary 360° capture still requires equipment, permissions, processing and storage.
- Media rights management becomes an explicit operational responsibility.

## Review trigger

Revisit this strategy if Street View coverage, API terms/costs, licensing conditions, user experience requirements, the proprietary 360° capture programme or the capture/publishing pipeline materially change.

**Reconciliation note:** This ADR preserves the original hybrid-media decision while incorporating the later R4.3 decision that project-created 360° trail/route coverage is an important proprietary use case.
