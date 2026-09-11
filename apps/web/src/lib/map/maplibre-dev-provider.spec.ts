import { beforeEach, describe, expect, it, vi } from "vitest";
import type { MapPlace } from "./map-provider";

const sdk = vi.hoisted(() => ({
  map: { addControl: vi.fn(), remove: vi.fn() },
  Map: vi.fn(),
  Marker: vi.fn(),
  Popup: vi.fn(),
  AttributionControl: vi.fn(),
  NavigationControl: vi.fn(),
}));

vi.mock("maplibre-gl", () => ({ default: sdk }));

import { MapLibreDevProvider } from "./maplibre-dev-provider";

const places: MapPlace[] = [
  { id: "test-place", name: "<script>not HTML</script>", coordinates: [6.13, 49.61] },
  { id: "second-place", name: "Second place", coordinates: [6.2, 49.9] },
];

beforeEach(() => {
  vi.clearAllMocks();
  sdk.Map.mockImplementation(function () { return sdk.map; });
  sdk.Marker.mockImplementation(function () {
    return {
      setLngLat: vi.fn().mockReturnThis(),
      setPopup: vi.fn().mockReturnThis(),
      addTo: vi.fn().mockReturnThis(),
    };
  });
  sdk.Popup.mockImplementation(function () {
    return { setText: vi.fn().mockReturnThis() };
  });
});

describe("temporary map adapter", () => {
  it("mounts the supplied container with attribution and navigation controls", () => {
    const container = {} as HTMLElement;
    new MapLibreDevProvider().mount(container, []);

    expect(sdk.Map).toHaveBeenCalledWith(expect.objectContaining({
      container,
      center: [6.13, 49.78],
      style: expect.objectContaining({
        sources: expect.objectContaining({
          osm: expect.objectContaining({ attribution: "© OpenStreetMap contributors" }),
        }),
      }),
    }));
    expect(sdk.AttributionControl).toHaveBeenCalledOnce();
    expect(sdk.NavigationControl).toHaveBeenCalledWith({ showCompass: true });
    expect(sdk.map.addControl.mock.calls.map((call) => call[1])).toEqual([
      "bottom-right", "top-right",
    ]);
  });

  it("maps coordinates without mutation and renders names as text", () => {
    const original = structuredClone(places);
    new MapLibreDevProvider().mount({} as HTMLElement, places);

    expect(sdk.Marker).toHaveBeenCalledTimes(places.length);
    places.forEach((place, index) => {
      const marker = sdk.Marker.mock.results[index].value;
      const popup = sdk.Popup.mock.results[index].value;
      expect(marker.setLngLat).toHaveBeenCalledWith([...place.coordinates]);
      expect(popup.setText).toHaveBeenCalledWith(place.name);
      expect(marker.setPopup).toHaveBeenCalledWith(popup);
      expect(marker.addTo).toHaveBeenCalledWith(sdk.map);
    });
    expect(places).toEqual(original);
  });

  it("accepts an empty prototype list without creating markers", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, []);
    expect(sdk.Marker).not.toHaveBeenCalled();
    expect(sdk.Popup).not.toHaveBeenCalled();
  });

  it("removes the map when the caller disposes it", () => {
    const dispose = new MapLibreDevProvider().mount({} as HTMLElement, places);
    expect(sdk.map.remove).not.toHaveBeenCalled();
    dispose();
    expect(sdk.map.remove).toHaveBeenCalledOnce();
  });
});
