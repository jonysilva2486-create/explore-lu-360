# Web foundation

This package is the first responsive Web/PWA surface for Explore Luxembourg 360.

The map currently uses a temporary MapLibre/OpenStreetMap development surface. It exists only to validate layout and interaction while the Géoportail / ACT production map service decision is pending.

## Environment

Copy `.env.example` to `.env.local` for local development. Never commit real credentials.

If Google Maps Platform is integrated, the browser-facing key must be configured as a dedicated web key with:

- website/application restrictions for the controlled application origins;
- API restrictions limited to the Google Maps APIs actually used;
- separate credentials for server-side trust boundaries when required.

The real key belongs only in the local/runtime secret configuration, never in GitHub, documentation or chat.
