# P6.1 — Visual Language & Design Tokens

**Status:** APPROVED / CLOSED  
**Phase:** 4 — Design System  
**Decision:** Approved after visual validation P6.1-A and P6.1-B

## Purpose

Define the visual foundation of Explore Luxembourg 360 before component implementation.

## Approved visual direction

Explore Luxembourg 360 combines:

- Digital Atlas
- Editorial travel experience
- Immersive technology
- Luxembourg territory, nature, architecture and cartography
- Premium restraint rather than decorative effects

### Core principle

> **Content is the destination. Interface is the guide.**

### Premium principle

> **Premium comes from restraint.**

## Visual tokens — v1

### Core palette

| Token | Value | Role |
|---|---|---|
| Ink | #171A19 | Primary text / strong UI |
| Paper | #F5F3EE | Primary editorial background |
| White | #FFFFFF | Surfaces / content |
| Stone | #D9D6CE | Dividers / neutral map elements |
| Slate | #68706C | Secondary text |
| Forest | #263C32 | Nature / selected territorial elements |
| Moss | #52685A | Secondary nature/context |
| Lichen | #879587 | Soft territorial information |
| Copper | #A46645 | Primary accent / key actions |

Copper is deliberately restrained and must not become a dominant decorative colour.

### Typography

- **Cormorant Garamond** — editorial/display typography, place names, major storytelling.
- **Inter** — interface, metadata, navigation, controls and technical information.

### Spacing

Base scale: 4 px increments: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

### Radius

- Small controls: 4 px
- Interactive components: 8 px
- Visual/content surfaces: up to 12 px
- Editorial landscape imagery may intentionally use no radius.

### Elevation

Three restrained levels only:

- Level 0 — none
- Level 1 — subtle separation
- Level 2 — overlays/panels
- Level 3 — modal/temporary dominant layer

## P6.1-A visual validation

Validated against four contexts:

1. Explore / Map
2. Place Detail
3. 360° Experience
4. Mobile Explore

Result: visual direction approved. The identity remains coherent across contexts while changing behaviour appropriately for the device and experience.

## P6.1-B — Final interaction decisions

### Desktop navigation

Approved: **contextual navigation + discreet header + experience-specific controls**.

A permanent sidebar is not the primary navigation model. The territory and content must retain visual priority.

### Place Detail

Approved philosophy: **exploration, not tourism fact sheet**.

Primary hierarchy:

**Image → Story → Exploration → Information**

Technical information remains available but appears at the appropriate point in the exploration journey.

### Mobile exploration

Approved model: **map-first + contextual bottom sheet**.

The map remains the exploration base. A bottom sheet provides progressively deeper context when the user selects a place. Bottom sheets are not a universal container for all mobile content.

## Responsive principle

Responsive design changes behaviour, not merely dimensions.

Desktop can use larger maps, editorial compositions and contextual panels. Mobile prioritises one-handed exploration, map interaction and progressive disclosure.

## Explicit non-goals

The visual system must avoid:

- generic SaaS/dashboard aesthetics
- excessive cards
- decorative gradients
- meaningless glassmorphism
- excessive shadows
- oversized UI controls
- unnecessary badges
- template-like navigation
- decorative animation without functional purpose

## Status

**P6.1 is closed and approved.**

The next step is P6.2 — Component Language.