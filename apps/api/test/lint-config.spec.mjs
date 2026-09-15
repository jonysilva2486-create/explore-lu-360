import { globSync } from "node:fs";
import { sep } from "node:path";
import { fileURLToPath, URL } from "node:url";
import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

const cwd = fileURLToPath(new URL("../", import.meta.url));
const eslint = new ESLint({ cwd });

describe("API lint coverage", () => {
  it("applies TypeScript rules to every API source and unit test", async () => {
    const files = globSync("src/**/*.ts", { cwd }).map((file) => file.split(sep).join("/"));
    expect(files).toContain("src/app.controller.ts");
    expect(files).toContain("src/app.service.spec.ts");

    for (const file of files) {
      expect(await eslint.isPathIgnored(file), file).toBe(false);
      const config = await eslint.calculateConfigForFile(file);
      expect(config?.rules["@typescript-eslint/no-unused-vars"][0], file).toBe(2);
    }
  });

  it("rejects invalid TypeScript instead of silently skipping it", async () => {
    const [result] = await eslint.lintText("const unused: number = 1;", {
      filePath: "src/lint-regression.ts",
    });

    expect(result.errorCount).toBeGreaterThan(0);
    expect(result.messages).toEqual(expect.arrayContaining([
      expect.objectContaining({ ruleId: "@typescript-eslint/no-unused-vars", severity: 2 }),
    ]));
    expect(result.fatalErrorCount).toBe(0);
  });

  it("parses the actual decorated NestJS sources", async () => {
    const results = await eslint.lintFiles(["src/**/*.ts"]);
    expect(results.length).toBeGreaterThan(0);
    for (const result of results) {
      expect(result.errorCount, result.filePath).toBe(0);
      expect(result.warningCount, result.filePath).toBe(0);
    }
  });

  it("excludes generated output and installed dependencies", async () => {
    for (const file of ["dist/main.js", "coverage/report.js", "node_modules/example/index.js"]) {
      expect(await eslint.isPathIgnored(file), file).toBe(true);
    }
  });
});
