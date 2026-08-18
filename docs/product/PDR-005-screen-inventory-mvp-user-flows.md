# PDR-005 — Screen Inventory + MVP User Flows

**Status:** Accepted — reconciled with P6.2 component decisions
**Date:** 2026-08-18

## Decision

The MVP will be organised around a small set of functional screens and states that support the approved core user journeys without turning the product into a page-heavy administrative interface.

## MVP screen inventory

### Core

- **S01 — Explore / Map**: primary territory exploration surface.
- **S02 — Search**: universal discovery entry point.
- **S03 — Search Results**: structured results for places, trails and related content.
- **S04 — Place**: principal content experience for a location.
- **S05 — 360° Experience**: immersive panorama experience, initially focused on orientation, navigation and contextual information.
- **S06 — Trail / Route**: route information, map/trace, associated places and save action.
- **S07 — My Explore**: personal exploration area.
- **S08 — Saved Places**: saved locations.
- **S09 — Saved Trails**: saved routes.

### Account

- **S10 — Sign In**
- **S11 — Create Account**
- **S12 — Password Recovery**
- **S13 — Account / Settings**

## Required system states

Loading, empty, error, offline, permission denied, no search results, content without 360°, content without photographs, unauthenticated state and slow-network behaviour must be designed as first-class states. They are not optional polish.

## Core flows

### A — Discover a place

Explore → Map → Place → Story / Media / 360° → Related place → Continue exploration.

### B — Explore around me

Explore → Location permission when genuinely required → Map centred on user → Nearby places → Place.

If permission is denied, the user continues to use Explore without location.

### C — Discover a trail

Explore / Search → Trail → Route information / Map → Associated places → Place.

### D — Enter a 360° experience

Place → 360° Experience → Explore → Contextual hotspot/information → Related place → Place.

The immersive experience must not become a dead end.

### E — Save and continue

Place or Trail → Save → Sign In / Create Account when unauthenticated → authenticated saved state → My Explore → Saved content.

**Save requires an account.** Exploration itself does not.

### F — Account

Explore → Save / synchronisation need → Sign In or Create Account → My Explore.

Account creation must not be required merely to begin exploring.

### G — Share

Place / Trail / 360° Experience → Share → platform share target or copied deep link.

Sharing does not require an account.

## Account principle

> **Accountless exploration. Account-based memory.**

Users can explore, search, view Places, routes, maps and 360° experiences and share content without an account. Saving Places or Routes, creating Collections, using My Explore and synchronising saved content require an account.

## Navigation principle

The product should feel like a continuous exploration flow rather than a collection of administrative pages. The conceptual loop is:

**Explore → Discover → Explore → Continue**

## Responsive behaviour

The journeys are shared across devices, but interaction patterns adapt to context.

- **Mobile:** prioritise map interaction, location-aware discovery, quick access to places, media/360° and field exploration.
- **Desktop:** prioritise broader map context, search, comparison, detailed stories, planning and richer exploration workflows.

## Explicit exclusions from MVP screen inventory

The following remain outside the MVP in accordance with PDR-004: full administration dashboard, advanced community profiles, contribution studio, AI assistant, notification centre, advanced route tracking, advanced offline region management, social feed and gamification.

## Traceability

This decision implements and remains subordinate to:

- Product Vision and PDR-001
- P2 Mobile Strategy
- Architecture Reconciliation Checkpoint
- PDR-002 Product Information Architecture v1
- PDR-003 Core User Journeys v1
- PDR-004 MVP Scope & Future Roadmap
- P6.2 Component Language decisions

No new screen or major flow should be added without a clear relationship to an approved product journey or a documented architectural/product decision.
