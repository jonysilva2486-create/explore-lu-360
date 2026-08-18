# PDR-006 — Explore Luxembourg 360 Visual Language v1 (Proposed)

**Status:** Proposed — not yet approved as final Design System
**Date:** 2026-08-18
**Phase:** Product Structure → Design System

## Purpose

Define the visual direction of Explore Luxembourg 360 before component implementation. This document establishes the product's visual character, principles and initial design-system direction. Exact production tokens may be refined during UX/UI design after the existing brand assets are reconciled.

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

## 3. Colour direction — proposed

The initial palette should be controlled and neutral-led:

- **Ivory / warm off-white** — primary light surface and editorial canvas.
- **Deep charcoal** — primary text and dark interface foundation; avoid absolute black as a default.
- **Stone / mineral neutrals** — secondary surfaces, borders and cartographic context.
- **Forest green family** — restrained nature/territory accent.
- **One distinctive interaction accent** — reserved for active states, primary actions and selected exploration elements.

The interface should generally use one dominant neutral family plus restrained accent colour. Colour should communicate hierarchy and state, not decorate every component.

Exact colour tokens remain proposed until reconciled with the existing Explore Luxembourg 360 logo/brand assets.

## 4. Typography direction — proposed

Use a two-family typographic system:

### Editorial / Display

A contemporary serif with strong character for:

- place names;
- regional titles;
- editorial stories;
- major discovery moments.

### Interface / Utility

A highly legible modern sans-serif for:

- navigation;
- metadata;
- controls;
- search;
- map labels where appropriate;
- distances and coordinates;
- system states.

The contrast between serif and sans-serif should express **heritage + technology** without becoming ornamental.

Production font selection remains a design-system decision to validate against licensing, performance, multilingual coverage and the existing brand identity.

## 5. Layout and composition

The product should use an editorial composition system rather than repetitive card grids.

Principles:

- generous but purposeful whitespace;
- strong visual hierarchy;
- asymmetric compositions where useful on desktop;
- large photographic surfaces;
- controlled alignment with a consistent grid;
- content-led page rhythm;
- minimal decorative containers.

Cards are permitted when they represent a genuine content unit. Not every piece of information should be placed inside a rounded rectangle.

## 6. Photography and media

Photography is structural product content, not decoration.

Use:

- large immersive imagery;
- carefully cropped responsive variants;
- strong focal composition;
- minimal overlays;
- editorial captions/metadata when useful;
- progressive loading and responsive delivery.

The visual system should allow a place to be recognisable from its image before the user reads the interface.

## 7. Map language

The map is a primary exploration surface and must feel integrated with the Explore Luxembourg 360 identity.

The future map style should establish its own hierarchy for:

- terrain and land cover;
- water;
- roads and paths;
- administrative context;
- places;
- routes;
- 360° experiences;
- selected/focused locations.

The map should not simply appear as an embedded third-party widget with unrelated visual language.

Potential future integration/collaboration with Luxembourg's Géoportail remains an institutional/data consideration and does not dictate the visual language at this stage.

## 8. 360° visual behaviour

The 360° experience should be visually dominant and interface-light.

Controls should be:

- discoverable;
- accessible;
- unobtrusive;
- consistent;
- designed for touch and mouse/keyboard contexts.

Transitions into and out of 360° should communicate continuity of place rather than feel like opening an unrelated media viewer.

## 9. Navigation philosophy

Navigation should be contextual and lightweight.

Avoid a large permanent menu containing every product capability.

The interface should communicate the primary loop:

**Explore → Discover → Explore → Continue**

The user should not need to understand the information architecture to use the product.

## 10. Motion

Motion is used primarily for orientation, continuity and feedback.

Appropriate uses include:

- map → place transitions;
- place → 360° transitions;
- contextual panels;
- state changes;
- save interactions;
- loading/progressive media states.

Avoid animation whose only purpose is visual novelty.

Respect reduced-motion preferences.

## 11. Shape, elevation and surfaces

The system should favour:

- restrained corner radii;
- thin, purposeful borders;
- subtle elevation only when it improves hierarchy;
- strong typography and spacing instead of heavy shadows;
- clean surfaces.

Glassmorphism, excessive blur and decorative shadows are not baseline styles.

## 12. Responsive design language

### Mobile

The visual system should emphasise:

- direct manipulation;
- thumb-reachable controls;
- focused content;
- immersive media;
- map/content transitions;
- clear hierarchy on constrained screens.

### Desktop

The same visual language expands into:

- broader map surfaces;
- richer editorial compositions;
- side/context panels;
- multi-column exploration;
- larger media experiences.

Desktop must not simply be a stretched mobile layout.

## 13. Accessibility

Accessibility is part of the visual system:

- sufficient contrast;
- visible focus;
- semantic hierarchy;
- touch targets appropriate to device context;
- keyboard operation;
- reduced motion;
- accessible labels;
- non-map alternatives for essential geographic information.

Premium design must remain inclusive design.

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

## 15. Design-system foundations to define next

The next detailed design-system step must convert this direction into production-ready decisions for:

1. colour tokens;
2. typography families, weights and scale;
3. spacing scale;
4. grid and breakpoints;
5. radii and elevation;
6. iconography;
7. buttons and controls;
8. navigation patterns;
9. map components;
10. place/content components;
11. 360° controls;
12. loading/error/empty/offline states;
13. light/dark behaviour;
14. motion tokens and transitions;
15. accessibility tokens and rules.

## 16. Brand asset reconciliation gate

The repository currently contains product and architecture documentation but no identifiable logo/brand asset file in the repository search. The existing official Explore Luxembourg 360 logo/brand materials must be reconciled with this visual direction before the colour and typography tokens become final.

Do not invent a replacement logo or silently redefine the existing identity.

## 17. Approval gate

This document is a **visual direction proposal**, not final approval of the production Design System.

The next decision should validate the concrete visual tokens and component rules against this direction and the existing brand identity.

## Traceability

This proposal is subordinate to:

- Product Vision;
- Architecture validation decisions;
- PDR-001 Product Experience Model;
- PDR-002 Product Information Architecture v1;
- PDR-003 Core User Journeys v1;
- PDR-004 MVP Scope & Future Roadmap;
- PDR-005 Screen Inventory + MVP User Flows.

It must not introduce functionality outside the approved product scope.
