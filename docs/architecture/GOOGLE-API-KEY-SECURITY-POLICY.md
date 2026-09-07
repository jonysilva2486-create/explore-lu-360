# Explore Luxembourg 360 — Google Maps Platform API Key Security Policy

**Status:** Accepted — Pre-integration security contract
**Date:** 2026-09-07

## Objective

Protect Google Maps Platform credentials while allowing the web application to use only the APIs required by the approved Explore Luxembourg 360 experience.

## Rules

1. **No API key, secret or credential may be committed to GitHub.**
2. No server credential may be exposed in browser bundles, public configuration or client-side logs.
3. Use separate credentials when different application restriction types or trust boundaries require them.
4. Each key must use an appropriate **application restriction**.
5. Each key must use an **API restriction** allowing only the APIs actually required by that key.
6. Review key usage before tightening restrictions so that legitimate functionality is not accidentally broken.
7. Production keys must be distinct from development/staging credentials where practical.
8. If a server-side Google API is required, use a server-side credential stored only in the server/runtime secret mechanism.
9. Never paste credential values into issue trackers, documentation or chat.
10. Rotate compromised or unnecessarily exposed credentials immediately.

## Web application

The browser-facing key must be restricted to the controlled production/staging web origins once those origins exist. API restrictions must be limited to the Google Maps Platform APIs actually used by the application.

The exact allowlist cannot be finalised until the application's real domains and API usage are known. This is intentional; do not use a permanent broad allowlist merely to make early development convenient.

## Implementation gate

Before the first real Google integration:

- verify the project/billing configuration;
- create or select the dedicated web credential;
- configure application restrictions;
- configure API restrictions;
- document the non-secret credential name and intended environment;
- store the actual key only in the appropriate secret/configuration mechanism;
- test the integration;
- review usage and tighten restrictions if necessary.

## Source

This policy follows Google's current Maps Platform API security guidance, which recommends application restrictions and API restrictions and limiting keys to the APIs they actually use.
