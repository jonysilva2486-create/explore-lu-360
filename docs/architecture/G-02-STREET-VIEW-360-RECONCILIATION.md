# Explore Luxembourg 360 — G-02 Street View / 360° Reconciliation

**Status:** Accepted — Final Pre-Codex reconciliation
**Date:** 2026-09-09
**Scope:** Reconciliation of R3 user-facing 360° experience priority with R4.3 continuous trail-distribution strategy.

## Decision

There is no contradiction between R3 and R4.3 when their scopes are preserved:

- **R3 defines the user-facing experience priority:** when Explore Luxembourg 360 has a suitable proprietary/project-created 360° experience, that experience is preferred in the product; Google Street View is an external experience fallback/distribution layer.
- **R4.3 defines the field/distribution strategy for continuous project-created outdoor trail coverage:** Google Street View can be used as a practical distribution layer for continuous trail capture, subject to the applicable Google policies, rights and technical constraints.

These are different decisions. Neither changes the project's ownership of its own territorial/domain data, Places, Routes, Experiences, Stories or media identity.

## Implementation rule

Codex must implement Street View behind the approved provider abstraction. Google panorama identifiers are external provider references and must never become permanent Explore Luxembourg 360 domain identifiers.

The domain/UI must not contain provider-specific assumptions such as a Google panorama being the definition of a Route, Place, Story or Experience.

## User-facing priority

The product should prefer project-owned/proprietary 360° experiences when an appropriate experience exists. If no suitable project-owned experience exists, the product may expose an appropriate external Street View experience where permitted and technically available.

## Trail capture / distribution

For continuous project-created outdoor trail coverage, the project may use Google Street View as a distribution channel. This does not imply that every user-facing 360° experience must be rendered from Google Street View, nor does it make Google the authoritative geographic provider.

## Development / testing

The application may use a temporary development provider while the Géoportail / ACT map decision remains pending. The map and 360° provider adapters must remain replaceable without changing the domain model or core UI contracts.

## Security and privacy

No Google API key, OAuth credential, service credential or private provider secret may be committed to GitHub or exposed in chat. API keys must be restricted according to the approved Google Maps Platform security configuration before production integration.

Location permission and privacy rules remain application-level responsibilities. Street View integration must not introduce background location tracking or additional personal-data collection without an approved product/privacy decision.

## Gate

**G-02 — CLOSED.**

This document is the implementation clarification for the R3/R4.3 wording. It does not reopen provider selection or the pending Géoportail / ACT map-type decision.
