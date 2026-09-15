import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { AppModule } from "../dist/app.module.js";

describe("compiled API foundation over HTTP", () => {
  let app;
  let origin;

  beforeAll(async () => {
    // Exercise the real compiled decorators and dependency injection, not mocks.
    app = await NestFactory.create(AppModule, { logger: false });
    await app.listen(0, "127.0.0.1");
    origin = await app.getUrl();
  });

  afterAll(async () => {
    await app?.close();
  });

  it("serves the versioned health contract without credentials", async () => {
    const response = await globalThis.fetch(`${origin}/api/v1/health`);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toContain("application/json");
    expect(await response.json()).toEqual({
      status: "ok",
      service: "explore-lu-360-api",
      version: "v1",
    });
  });

  it.each(["/health", "/api/v2/health", "/api/v1/not-a-resource"])(
    "returns 404 for the unimplemented route %s",
    async (path) => {
      const response = await globalThis.fetch(`${origin}${path}`);
      expect(response.status).toBe(404);
      expect(await response.json()).toMatchObject({ statusCode: 404 });
    },
  );
});
