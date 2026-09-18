import { describe, expect, it } from "vitest";
import type { Coordinates, MapPlace } from "./map-provider";

describe("map provider contract", () => {
  it("represents Luxembourg coordinates as longitude/latitude pairs", () => {
    const vianden: MapPlace = {
      id: "vianden",
      name: "Vianden",
      coordinates: [6.2087, 49.9351],
    };

    const coordinates: Coordinates = vianden.coordinates;

    expect(coordinates).toHaveLength(2);
    expect(coordinates[0]).toBeCloseTo(6.2087);
    expect(coordinates[1]).toBeCloseTo(49.9351);
  });

  it("keeps place identity separate from the map provider implementation", () => {
    const place: MapPlace = {
      id: "mullerthal",
      name: "Mullerthal",
      coordinates: [6.3167, 49.7833],
    };

    expect(place.id).toBe("mullerthal");
    expect(place.name).toBe("Mullerthal");
  });
});
