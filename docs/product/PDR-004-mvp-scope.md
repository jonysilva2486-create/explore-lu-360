# PDR-004 — MVP Scope

**Status:** Accepted
**Date:** 2026-08-18

## Decision

The first Explore Luxembourg 360 product release will focus on validating the core exploration experience rather than attempting to implement the complete long-term platform.

The MVP must allow a user to:

**Explore → discover a place → understand it → experience available 360° content → discover related places → save something worth returning to.**

## MVP capabilities

| Capability | MVP | Notes |
|---|:---:|---|
| Explore / Map | ✅ | Core exploration surface; map is a primary product interface. |
| Places | ✅ | Core place entity and place experience. |
| Photography / Media | ✅ | Initial media support, architected for future scale. |
| 360° | ✅ | First immersive experience; advanced hotspot/navigation systems can follow later. |
| Search | ✅ | Useful conventional search first; advanced semantic/AI search later. |
| Save | ✅ | Save places initially; broader collections can evolve later. |
| Account / Authentication | ✅ | Minimal foundation for identity and cross-device synchronization. |
| Trails / Routes | ✅ basic | View route, geometry, distance, information, related places and save; advanced tracking later. |

## Phase 2 backlog

These capabilities are explicitly recorded for a future update rather than being forgotten or implicitly removed from the product vision.

| Capability | Phase 2 | Intended evolution |
|---|:---:|---|
| Community contributions | 🔵 | User photographs, observations and information submissions with moderation. |
| Advanced GPS | 🔵 | Tracking, navigation and longer-running field use. |
| Advanced offline | 🔵 | Downloadable regions, offline maps/experiences and stronger synchronization queues. |
| Notifications | 🔵 | Contextual notifications such as nearby saved places. |
| Recommendations | 🔵 | Personalised discovery based on user behaviour and interests. |

## Future backlog

These remain part of the long-term product direction but are deliberately deferred until product evidence and requirements justify them.

| Capability | Future | Intended evolution |
|---|:---:|---|
| Advanced AI | 🔵 | Natural-language discovery, intelligent guide functions, content enrichment and advanced recommendations. |
| Advanced community | 🔵 | Public profiles, reputation, shared collections and richer community mechanisms. |
| Native mobile applications | 🔵 | Android/iOS clients if validated device capabilities or product requirements justify them; architecture remains native-ready. |
| Advanced device/sensor capabilities | 🔵 | Background tracking and deeper hardware-specific experiences when justified. |
| Gamification | 🔵 | Only if it demonstrably improves exploration rather than distracting from it. |

## Deliberately excluded from the initial MVP

The following are not part of the first implementation unless a strong product requirement emerges:

- Large administrative dashboards
- Social-network features
- Gamification systems
- AI added merely for novelty
- Marketplace or booking systems
- Advertising systems
- Excessive filtering systems
- Separate Android and iOS products
- Immediate microservice decomposition
- Complex search infrastructure before content volume justifies it
- Full offline operation
- Permanent/background GPS tracking

These exclusions are not permanent prohibitions. They are scope controls intended to protect the core product experience.

## MVP quality bar

The MVP is not considered successful merely because these features exist. The resulting experience must be:

- fast;
- clear;
- mobile-first in field usability while also strong on desktop;
- visually distinctive to Explore Luxembourg 360;
- immersive where 360° content is available;
- accessible;
- secure;
- architecturally maintainable;
- based on real data contracts rather than fake production data.

## Future-update rule

The Phase 2 and Future matrices above are part of the product planning record. They should be revisited during later roadmap reviews rather than reconstructed from memory. A capability may move between phases only after an explicit product/architecture decision and with the rationale documented.

## Relationship to previous decisions

This scope directly implements the approved Product Experience Model, Product Information Architecture and Core User Journeys. It also respects the PWA-first/native-ready strategy and the initial modular-monolith architecture.
