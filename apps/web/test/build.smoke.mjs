import { readFileSync } from "node:fs";
import { URL } from "node:url";
import { beforeAll, describe, expect, it } from "vitest";

describe("compiled web foundation", () => {
  let html;
  let css;

  beforeAll(() => {
    html = readFileSync(new URL("../.next/server/app/index.html", import.meta.url), "utf8");
    const styles = [...html.matchAll(/href="(\/_next\/static\/[^"]+\.css(?:\?[^"]*)?)"/g)];
    expect(styles.length, "the web shell must link its compiled styles").toBeGreaterThan(0);
    css = styles.map(([, href]) => {
      const path = href.split("?")[0].replace("/_next/", "../.next/");
      return readFileSync(new URL(path, import.meta.url), "utf8");
    }).join("\n");
  });

  it("builds the existing prototype shell and named map container", () => {
    expect(html.includes("<title>Explore Luxembourg 360</title>")).toBe(true);
    expect(html.includes("Prototype / temporary map")).toBe(true);
    expect(html.includes('aria-label="Interactive map of Luxembourg"')).toBe(true);
  });

  it("actually generates the Tailwind layout utilities used by the shell", () => {
    expect(/\.flex\s*\{[^}]*display:\s*flex/.test(css), "missing compiled flex utility").toBe(true);
    expect(/\.grid\s*\{[^}]*display:\s*grid/.test(css), "missing compiled grid utility").toBe(true);
    expect(/\.h-full\s*\{[^}]*height:\s*100%/.test(css), "missing map height utility").toBe(true);
  });

  it("retains the canonical token layer and the map SDK styles", () => {
    expect(/--color-copper:\s*#a46645/i.test(css)).toBe(true);
    expect(/--space-4:\s*16px/.test(css)).toBe(true);
    expect(css.includes(".maplibregl-map")).toBe(true);
  });
});
