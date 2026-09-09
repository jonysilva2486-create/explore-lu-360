import { describe, expect, it } from "vitest";
import { AppService } from "./app.service";

describe("AppService", () => {
  it("returns the API health contract", () => {
    expect(new AppService().health()).toEqual({
      status: "ok",
      service: "explore-lu-360-api",
      version: "v1",
    });
  });
});
