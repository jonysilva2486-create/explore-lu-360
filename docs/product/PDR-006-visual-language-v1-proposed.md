# PDR-006 — Explore Luxembourg 360 Visual Language v1

**Status:** APPROVED / RECONCILED
**Date:** 2026-08-18
**Phase:** Product Structure → Design System

> This document began as the PDR-006 visual-direction proposal. The proposal has now been reconciled with the completed P6.1, P6.2 and P6.3 work. The filename is retained for repository continuity; its status is no longer proposed.

## Purpose

Define the visual direction of Explore Luxembourg 360 before and through component implementation. This document establishes the product's visual character, principles and design-system direction. Detailed production decisions are recorded through the P6 design-system documents and their audit trail.

## 1. Core visual proposition

Explore Luxembourg 360 should feel like a **contemporary digital atlas transformed into an immersive exploration experience**.

The visual language combines:

- Luxembourgian landscape and heritage;
- cartographic precision;
- editorial travel publishing;
- immersive photography and 360° media;
- modern digital technology;
- restraint and premium craft.

The intended impression is **premium, calm, intelligent and exploratory**, rather than flashy or corporate.

## 2. Brand principles

### Content is the destination. Interface is the guide.

UI should support discovery without competing with the place, image, map or story.

### Premium comes from restraint.

Premium quality should come from typography, composition, photography, cartography, spacing, motion and consistency — not from excessive gradients, shadows, glassmorphism or decoration.

### Luxembourg should be evoked, not stereotyped.

Avoid overusing national flag colours or tourism clichés. Luxembourg should appear through landscape, architecture, topography, materials, heritage and cartographic language.

### Technology should disappear behind the experience.

Controls, transitions and immersive technology should feel intentional and unobtrusive.

## 3. Colour and theme direction

The visual language is neutral-led and controlled:

- ivory / warm off-white for light editorial surfaces;
- deep charcoal for primary text;
- stone / mineral neutrals for secondary surfaces and cartographic context;
- restrained forest-green family accents;
- one distinctive interaction accent reserved for active states and primary exploration actions.

Dark Mode is a **soft / near-black environment**, not absolute black by default. Light and Dark are two expressions of the same identity.

Exact production tokens remain implementation-level decisions subject to contrast validation and existing brand-asset reconciliation.

## 4. Typography

The system uses an editorial/display serif direction alongside a highly legible modern sans-serif for interface and utility content.

Typography and content hierarchy were subsequently refined under **P6.1** and are not duplicated as a P6.3 subsystem.

Production font selection remains subject to licensing, performance, multilingual coverage and brand validation.

## 5. Layout and composition

The product uses an editorial composition system rather than repetitive card grids:

- generous but purposeful whitespace;
- strong visual hierarchy;
- asymmetric compositions where useful on desktop;
- large photographic surfaces;
- controlled alignment with a consistent grid;
- content-led page rhythm;
- minimal decorative containers.

Cards represent genuine content units rather than serving as a default container for every element.

## 6. Photography and media

Photography is structural product content, not decoration.

Use large immersive imagery, responsive crops, strong focal composition, minimal overlays and progressive loading.

The visual system supports both the initial production reality and future richer media.

## 7. Map language

The map is a primary exploration surface and must feel integrated with the Explore Luxembourg 360 identity.

The map language establishes hierarchy for terrain, land cover, water, roads and paths, places, routes, 360° experiences and selected locations.

It should not appear as an unrelated embedded third-party widget.

## 8. 360° visual behaviour

The 360° experience is visually dominant and interface-light.

Controls are discoverable, accessible, unobtrusive and consistent across touch, mouse and keyboard contexts.

The system is prepared for future own 360° production without requiring a different visual identity.

## 9. Navigation philosophy

Navigation is contextual and lightweight.

The primary loop remains:

**Explore → Discover → Explore → Continue**

The user should not need to understand the information architecture to use the product.

## 10. Motion

Motion supports orientation, continuity and feedback, including map → place transitions, place → 360° transitions, contextual panels, state changes, save interactions and progressive media loading.

Motion is restrained and respects Reduced Motion.

Detailed motion rules are recorded under **P6.3.5**.

## 11. Shape, elevation and surfaces

The system favours restrained corner radii, purposeful borders, subtle elevation and strong typography/spacing instead of heavy shadows.

Glassmorphism, excessive blur and decorative shadows are not baseline styles.

## 12. Responsive design language

### Mobile

Direct manipulation, thumb-reachable controls, focused content, immersive media, map/content transitions and clear hierarchy are prioritised.

### Desktop

The same language expands into broader map surfaces, richer editorial compositions, side/context panels, multi-column exploration and larger media experiences.

Desktop is not treated as a stretched mobile layout.

## 13. Accessibility

Accessibility is part of the visual system: sufficient contrast, visible focus, semantic hierarchy, appropriate touch targets, keyboard operation, reduced motion, accessible labels and non-map alternatives for essential geographic information.

**WCAG 2.2 AA** remains the product target. Technical conformance is validated during implementation.

Detailed accessibility rules are recorded under **P6.3.6**.

## 14. Explicit visual anti-patterns

Do not use as default product language:

- generic SaaS dashboard aesthetics;
- excessive rounded cards;
- random gradients;
- generic glassmorphism;
- oversized hero sections unrelated to exploration;
- heavy drop shadows;
- excessive badges;
- repetitive three-column card grids;
- flag-colour decoration throughout the UI;
- template-like navigation;
- animation for novelty alone.

## 15. Reconciled design-system structure

The visual direction is now operationalised through:

### P6.1 — Visual Language

Visual principles, colour direction, typography, spacing, composition, responsive behaviour and content/media language.

### P6.2 — Component Language

Navigation, Map, Place, Search & Discovery, 360° Experience, and Social / Sharing / Save.

### P6.3 — Design System Foundations

Iconography, Buttons & Controls, System States, Light / Dark Behaviour, Motion, Accessibility.

All three blocks are now closed at the design-definition/audit level.

## 16. Brand asset reconciliation

The existing official Explore Luxembourg 360 logo and brand materials remain authoritative. The design system must not invent a replacement logo or silently redefine the identity.

Production token freezing remains subject to reconciliation with the approved brand assets and implementation validation.

## 17. Content reality constraint

The design system must remain compatible with what can actually be produced initially:

- routes using Google Street View where appropriate;
- own photography of viewpoints, landscapes and places;
- exterior monument content initially;
- future own 360° production and interior mapping through permissions and collaborations.

The platform must be prepared for the complete future experience without assuming that advanced content exists at launch.

## 18. Approval

**PDR-006 — Visual Language v1: APPROVED / RECONCILED.**

Detailed design decisions and audit evidence are subordinate records under P6.1, P6.2 and P6.3.

## Traceability

This document remains subordinate to:

- Product Vision;
- Architecture validation decisions;
- PDR-001 Product Experience Model;
- PDR-002 Product Information Architecture v1;
- PDR-003 Core User Journeys v1;
- PDR-004 MVP Scope & Future Roadmap;
- PDR-005 Screen Inventory + MVP User Flows.

It must not introduce functionality outside the approved product scope.
