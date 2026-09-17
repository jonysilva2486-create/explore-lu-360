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

## Foundation checks

`pnpm test` covers the map contract and the temporary adapter's construction, controls/attribution, coordinates, text-only popups and disposal using a mocked SDK.

After `pnpm build`, run `pnpm test:smoke` to verify the generated prototype HTML and its linked CSS. The test checks that Tailwind actually emits layout utilities, not merely that Next.js exits successfully. Tailwind uses the official PostCSS integration in `postcss.config.mjs`.

The unit and smoke tests do not load external tiles or by themselves claim browser-level visual/accessibility acceptance. During the MapLibre 6.4.1 migration in [`da7d72f`](https://github.com/jonysilva2486-create/explore-lu-360/commit/da7d72f1e1ce496ecdc02f643b1e285d216b6541), a real browser execution of this temporary MapLibre/OSM adapter was completed: MapLibre 6.4.1 ran with WebGL2, tiles loaded, three markers were displayed, the `Luxembourg City` popup worked, zoom in/out worked, the console had no errors or warnings, and both `maplibre-gl-worker.mjs` and `maplibre-gl-shared.mjs` returned HTTP 200. Browser, browser-version, operating-system and device details were not documented. This validates the temporary foundation adapter only; it does not validate the production provider planned for R4 or cross-browser/device behaviour. Official branding/font files and their associated validation remain outstanding; see the inventories in `public/brand/README.md` and `public/fonts/README.md`.
