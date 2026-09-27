import { copyFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const dist = join(dirname(require.resolve("maplibre-gl/package.json")), "dist");
const destination = new URL("../public/maplibre/", import.meta.url);

mkdirSync(destination, { recursive: true });
// The ESM worker imports its shared sibling; both must match the installed SDK.
for (const file of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) {
  copyFileSync(join(dist, file), new URL(file, destination));
}
