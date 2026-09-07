# Explore Luxembourg 360 — Pre-Codex Design Implementation Contract

**Status:** Accepted — Final Pre-Codex design freeze
**Date:** 2026-09-07

This document converts the approved visual direction into implementation rules. It exists to prevent framework defaults or implementation convenience from redefining the Explore Luxembourg 360 identity.

## 1. Visual identity

The product language is a contemporary digital atlas combining editorial travel, cartography, photography and immersive exploration.

The interface must feel calm, intelligent, spacious and premium. It must not resemble a generic SaaS dashboard, template marketplace, AI-generated app or default Tailwind/shadcn application.

## 2. Canonical typography

### Display / editorial

**Cormorant Garamond**

Use for:
- major place names;
- editorial headlines;
- storytelling titles;
- selected large display moments.

### Interface / utility

**Inter**

Use for:
- navigation;
- controls;
- metadata;
- labels;
- search;
- technical/system information;
- supporting body interface text.

### Fallback policy

The implementation must define explicit fallback stacks that preserve the intended serif editorial / sans-serif utility contrast. Codex must not silently replace either family with a generic system font.

Fallbacks must be validated for:
- French accents and diacritics;
- German characters;
- Luxembourgish characters;
- Portuguese characters;
- English;
- the full approved six-language content plan;
- special punctuation and typographic characters used by editorial content.

## 3. Loading and performance

Fonts must be self-contained in the project or loaded from an approved source with licensing documented. Only required weights/styles should be shipped. Font loading must not create avoidable layout shift or block meaningful content rendering.

The final implementation must verify desktop and mobile readability and performance before visual sign-off.

## 4. Canonical colour tokens

| Token | Value |
|---|---|
| Ink | `#171A19` |
| Paper | `#F5F3EE` |
| White | `#FFFFFF` |
| Stone | `#D9D6CE` |
| Slate | `#68706C` |
| Forest | `#263C32` |
| Moss | `#52685A` |
| Lichen | `#879587` |
| Copper | `#A46645` |

Copper is an accent, not a dominant decorative colour.

## 5. Semantic token rule

The raw colour values above must be mapped to semantic roles rather than scattered throughout components. At minimum the implementation must distinguish:

- page background;
- surface/background elevation;
- primary text;
- secondary text;
- borders/dividers;
- primary action;
- secondary action;
- map/context surfaces;
- success/warning/error states;
- focus indication.

State colours must remain accessible and must not require colour alone to communicate meaning.

## 6. Geometry / spacing / elevation

The design system must use a coherent spacing scale, restrained corner radii and restrained elevation. Codex must not apply excessive rounding, large floating cards or heavy shadows merely because a component library defaults to them.

Exact numerical values may be implementation decisions only when they remain visually consistent with the approved design language and are captured in the token source of truth.

## 7. Composition rules

Prefer:
- strong typographic hierarchy;
- deliberate whitespace;
- editorial composition;
- photography with purpose;
- cartographic context;
- layered but restrained information;
- progressive disclosure;
- content-led layouts.

Avoid:
- repetitive card grids;
- dashboard-like density;
- decorative gradients;
- gratuitous glassmorphism;
- heavy shadows;
- excessive badges;
- oversized controls;
- animation for novelty;
- framework-default component appearance.

## 8. Map and 360° surfaces

The map is a primary product surface, not a generic embedded widget. Controls must remain subordinate to territory and content.

The 360° experience is immersive and must avoid UI clutter. Controls should appear when useful and recede when immersion is the priority.

## 9. Responsive behaviour

Desktop and mobile are intentionally different compositions of the same product language.

Mobile prioritises:
- map interaction;
- touch targets;
- bottom sheets;
- progressive disclosure;
- field usability.

Desktop can use:
- broader map context;
- richer editorial compositions;
- larger information panels;
- comparison/planning workflows.

Desktop must not simply be a stretched mobile layout.

## 10. Accessibility

Target: **WCAG 2.2 AA**.

The implementation must provide semantic HTML, keyboard operation, visible focus, sufficient contrast, meaningful labels, reduced-motion behaviour and accessible alternatives for map-dependent information.

## 11. Brand assets

The official Explore Luxembourg 360 logo and approved brand assets are authoritative. Codex must not invent, redraw or substitute the logo.

A controlled asset location must be created during repository foundation work, with source/licensing information recorded.

## 12. Visual quality gate

A feature is not visually complete merely because it functions.

The implementation must answer **yes** to:

> Would this interface still look recognisably like Explore Luxembourg 360 if the project logo were removed and the framework/vendor names were hidden?

If not, the feature fails visual sign-off.

## 13. Design authority

When implementation convenience conflicts with this contract, the contract wins. If the contract itself conflicts with an approved Product/Architecture decision, Codex must stop and request a human decision rather than silently changing either side.
