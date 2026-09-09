# D-02 — Design Token Source of Truth

**Status:** APPROVED / CLOSED
**Phase:** Final Pre-Codex audit
**Purpose:** Convert the approved P6.1 visual language into a single implementation contract so that the first application foundation uses one canonical design-token vocabulary instead of locally invented values.

## Authority

This document operationalises the approved visual decisions in `docs/design/P6-1-visual-language.md`.

It does **not** create a new visual direction. If a future design decision changes a token, this document must be updated before implementation adopts the change.

Codex must not invent competing colours, spacing scales, radii, elevation systems or semantic roles when an approved token exists.

---

## 1. Core palette — canonical values

| Token | Value | Primary intent |
|---|---|---|
| `ink` | `#171A19` | Primary text / strong UI |
| `paper` | `#F5F3EE` | Primary editorial background |
| `white` | `#FFFFFF` | Surfaces / content |
| `stone` | `#D9D6CE` | Dividers / neutral map elements |
| `slate` | `#68706C` | Secondary text |
| `forest` | `#263C32` | Nature / selected territorial elements |
| `moss` | `#52685A` | Secondary nature/context |
| `lichen` | `#879587` | Soft territorial information |
| `copper` | `#A46645` | Primary accent / key actions |

Copper is intentionally restrained. It is an accent, not a general decorative fill.

---

## 2. Semantic colour roles

Components must consume semantic roles rather than hard-coding palette values whenever practical.

### Light theme baseline

| Semantic role | Canonical token |
|---|---|
| `surface-page` | `paper` |
| `surface-content` | `white` |
| `surface-strong` | `ink` |
| `text-primary` | `ink` |
| `text-secondary` | `slate` |
| `text-on-strong` | `white` |
| `border-subtle` | `stone` |
| `territory-primary` | `forest` |
| `territory-secondary` | `moss` |
| `territory-soft` | `lichen` |
| `accent` | `copper` |

### Dark-theme mapping

Dark mode is a token mapping, not a second visual identity. The implementation must reuse the approved palette and preserve the same semantic hierarchy. No additional arbitrary colour palette may be introduced.

| Semantic role | Dark-mode mapping |
|---|---|
| `surface-page` | `ink` |
| `surface-content` | `forest` |
| `surface-strong` | `white` |
| `text-primary` | `white` |
| `text-secondary` | `lichen` |
| `text-on-strong` | `ink` |
| `border-subtle` | `stone` |
| `territory-primary` | `moss` |
| `territory-secondary` | `lichen` |
| `territory-soft` | `slate` |
| `accent` | `copper` |

Dark mode must be validated for WCAG 2.2 AA contrast before release. A mapping is not considered validated merely because the underlying token values exist.

---

## 3. Spacing scale

The approved base scale is based on 4 px increments:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px`

Implementation names should map directly to this scale, for example:

- `space-1` → 4 px
- `space-2` → 8 px
- `space-3` → 12 px
- `space-4` → 16 px
- `space-6` → 24 px
- `space-8` → 32 px
- `space-12` → 48 px
- `space-16` → 64 px
- `space-24` → 96 px
- `space-32` → 128 px

Components should prefer these values rather than arbitrary one-off spacing.

---

## 4. Radius scale

Only the approved restrained radius language is permitted:

| Role | Value |
|---|---:|
| Small controls | 4 px |
| Interactive components | 8 px |
| Visual/content surfaces | up to 12 px |
| Editorial landscape imagery | 0 px when intentionally edge-to-edge |

No global "rounded everywhere" treatment.

---

## 5. Elevation

The system uses four levels, with restraint as the default:

| Level | Meaning | Implementation intent |
|---|---|---|
| `0` | None | Flat content / editorial surfaces |
| `1` | Subtle separation | Light surface separation where borders are insufficient |
| `2` | Overlay / panel | Contextual panels and floating interface layers |
| `3` | Modal / dominant temporary layer | Dialogs and temporary layers requiring clear precedence |

Elevation must never become a decorative visual effect. Avoid stacking multiple heavy shadows.

---

## 6. Typography token ownership

Typography is defined by **D-01 — Typography Production Contract** and must not be duplicated with an independent font system here.

- Editorial/display → Cormorant Garamond
- Interface/utility → Inter

This token contract owns the semantic typography roles; D-01 owns font sourcing, loading, fallback, weights, multilingual coverage and validation requirements.

---

## 7. Component consumption rules

1. Components consume semantic tokens first.
2. Raw palette tokens are used only where the semantic role genuinely does not express the intent.
3. No component may introduce a new colour merely for visual preference.
4. No component may introduce a second spacing system.
5. Radius and elevation must remain within the approved scale.
6. Dark mode, if exposed by the product, must use the approved semantic mapping and pass accessibility validation.
7. Map-specific visual encodings may use provider/data-specific colours only when explicitly defined by the geospatial visual contract; they must not silently redefine the application brand palette.
8. Status colours (success, warning, error, informational) are **not yet part of the approved brand palette** and must receive an explicit accessibility/semantic decision before being introduced as design-system tokens. Codex must not improvise them as brand colours.

---

## 8. CSS / Tailwind implementation contract

When the application foundation is introduced, there must be one canonical token layer exposed to the UI system.

The implementation may use CSS custom properties, Tailwind theme tokens, or an equivalent typed token layer, but there must be one source of truth. Duplicating the same values across unrelated component files is prohibited.

Conceptually the implementation must expose:

```text
colors
spacing
radius
elevation
typography
```

Semantic component styles must reference these tokens rather than hard-coded values.

The exact framework syntax is an implementation detail; the values and semantic relationships are not.

---

## 9. Anti-generic-UI guardrail

The token system exists to preserve the approved Explore Luxembourg 360 identity during implementation.

Codex must not replace it with:

- default Tailwind/shadcn colour palettes;
- generic SaaS blue/purple accents;
- arbitrary gradients;
- excessive rounded cards;
- excessive shadows;
- decorative glassmorphism;
- arbitrary spacing values that create a second visual rhythm.

Premium quality must continue to come from restraint, hierarchy, composition, typography, cartography, photography and immersive media.

---

## 10. Validation gate

D-02 is considered implemented only when the foundation provides:

- one canonical token source;
- semantic colour roles;
- the approved spacing scale;
- the approved radius scale;
- the approved elevation scale;
- integration with the D-01 typography contract;
- no competing token definitions in component code;
- WCAG 2.2 AA validation for the active theme(s).

Visual validation remains required after implementation. This document defines the contract; it does not replace visual QA.

## Final decision

**D-02 is CLOSED.**

The design-token implementation contract is now explicit enough for Codex foundation work. Future changes require an explicit documented decision and update of this source of truth before implementation diverges.
