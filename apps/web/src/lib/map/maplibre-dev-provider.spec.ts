import { beforeEach, describe, expect, it, vi } from "vitest";
import type { MapPlace } from "./map-provider";

const sdk = vi.hoisted(() => ({
  map: { addControl: vi.fn(), remove: vi.fn() },
  Map: vi.fn(),
  Marker: vi.fn(),
  Popup: vi.fn(),
  AttributionControl: vi.fn(),
  NavigationControl: vi.fn(),
  setWorkerUrl: vi.fn(),
}));

vi.mock("maplibre-gl", () => sdk);

import { MapLibreDevProvider } from "./maplibre-dev-provider";

const places: MapPlace[] = [
  { id: "test-place", name: "<script>not HTML</script>", coordinates: [6.13, 49.61] },
  { id: "second-place", name: "Second place", coordinates: [6.2, 49.9] },
];

beforeEach(() => {
  vi.clearAllMocks();
  sdk.Map.mockImplementation(function () { return sdk.map; });
  sdk.Marker.mockImplementation(function () {
    const body = {};
    const element = Object.assign(new EventTarget(), {
      setAttribute: vi.fn(), focus: vi.fn(), isConnected: true,
      ownerDocument: { body, activeElement: body },
    });
    let popup: { isOpen: () => boolean };
    return {
      setLngLat: vi.fn().mockReturnThis(),
      setPopup: vi.fn(function (this: unknown, value) { popup = value; return this; }),
      addTo: vi.fn().mockReturnThis(),
      getElement: vi.fn().mockReturnValue(element),
      getPopup: vi.fn(() => popup),
      togglePopup: vi.fn(),
    };
  });
  sdk.Popup.mockImplementation(function () {
    const events = new EventTarget();
    const button = new EventTarget();
    vi.spyOn(button, "addEventListener");
    vi.spyOn(button, "removeEventListener");
    return {
      setText: vi.fn().mockReturnThis(), isOpen: vi.fn(() => false),
      getElement: vi.fn(() => ({ querySelector: vi.fn(() => button) })),
      on: vi.fn((type, listener) => events.addEventListener(type, listener)),
      off: vi.fn((type, listener) => events.removeEventListener(type, listener)),
      fire: (type: string) => events.dispatchEvent(new Event(type)),
    };
  });
});

describe("temporary map adapter", () => {
  const keyEvent = (key: string, code = "", repeat = false) =>
    Object.assign(new Event("keydown", { cancelable: true, bubbles: true }), { key, code, repeat });

  const closeClick = (detail: number) => Object.assign(new Event("click"), { detail });
  const openPopup = (index = 0) => {
    const marker = sdk.Marker.mock.results[index].value;
    const element = marker.getElement();
    const popup = marker.getPopup();
    popup.fire("open");
    const button = popup.getElement().querySelector(".maplibregl-popup-close-button");
    element.ownerDocument.activeElement = button;
    return { element, popup, button };
  };

  it.each(["Enter", " "])("returns focus to the same marker after %j and non-pointer close", (key) => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    sdk.Marker.mock.results[1].value.getElement().dispatchEvent(keyEvent(key));
    const { element, popup, button } = openPopup(1);
    button.dispatchEvent(closeClick(0));
    element.ownerDocument.activeElement = element.ownerDocument.body;
    popup.fire("close");
    expect(element.focus).toHaveBeenCalledExactlyOnceWith({ preventScroll: true });
    expect(sdk.Marker.mock.results[0].value.getElement().focus).not.toHaveBeenCalled();
  });

  it("returns focus after pointer opening followed by non-pointer close", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const { element, popup, button } = openPopup();
    button.dispatchEvent(closeClick(0));
    element.ownerDocument.activeElement = element.ownerDocument.body;
    popup.fire("close");
    expect(element.focus).toHaveBeenCalledExactlyOnceWith({ preventScroll: true });
  });

  it.each(["pointer", "external/programmatic", "other focus", "disconnected", "unfocused button"])("does not steal focus: %s", (reason) => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const { element, popup, button } = openPopup();
    if (reason === "unfocused button") element.ownerDocument.activeElement = {};
    if (reason !== "external/programmatic") button.dispatchEvent(closeClick(reason === "pointer" ? 1 : 0));
    element.ownerDocument.activeElement = reason === "other focus" ? {} : element.ownerDocument.body;
    if (reason === "disconnected") element.isConnected = false;
    popup.fire("close");
    expect(element.focus).not.toHaveBeenCalled();
  });

  it("detaches on close and reattaches once per reopening, clearing return intent", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const { element, popup, button } = openPopup();
    button.dispatchEvent(closeClick(0));
    element.ownerDocument.activeElement = element.ownerDocument.body;
    popup.fire("close");
    expect(button.removeEventListener).toHaveBeenCalledWith("click", expect.any(Function), true);
    popup.fire("open");
    expect(button.addEventListener).toHaveBeenCalledTimes(2);
    popup.fire("close");
    expect(element.focus).toHaveBeenCalledTimes(1);
  });

  it("cleanup removes popup and button listeners without returning focus", () => {
    const dispose = new MapLibreDevProvider().mount({} as HTMLElement, places);
    const { element, popup, button } = openPopup();
    button.dispatchEvent(closeClick(0));
    dispose();
    expect(popup.off).toHaveBeenCalledWith("open", expect.any(Function));
    expect(popup.off).toHaveBeenCalledWith("close", expect.any(Function));
    expect(button.removeEventListener).toHaveBeenCalledWith("click", expect.any(Function), true);
    popup.fire("close");
    popup.fire("open");
    expect(button.addEventListener).toHaveBeenCalledTimes(1);
    expect(element.focus).not.toHaveBeenCalled();
  });

  it.each(["Enter", " "])("opens only the corresponding popup for key %j regardless of code", (key) => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const [first, second] = sdk.Marker.mock.results.map((result) => result.value);
    const event = keyEvent(key, "UnrelatedCode");
    const stop = vi.spyOn(event, "stopPropagation");
    expect(second.getElement().dispatchEvent(event)).toBe(false);
    expect(event.defaultPrevented).toBe(true);
    expect(stop).toHaveBeenCalledOnce();
    expect(second.togglePopup).toHaveBeenCalledOnce();
    expect(first.togglePopup).not.toHaveBeenCalled();
  });

  it("does not toggle an open popup or repeat activation, but still cancels default", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const marker = sdk.Marker.mock.results[0].value;
    marker.getElement().dispatchEvent(keyEvent("Enter"));
    expect(marker.togglePopup).toHaveBeenCalledOnce();
    const repeat = keyEvent(" ", "", true);
    marker.getElement().dispatchEvent(repeat);
    expect(repeat.defaultPrevented).toBe(true);
    marker.getPopup().isOpen.mockReturnValue(true);
    const open = keyEvent("Enter");
    marker.getElement().dispatchEvent(open);
    expect(open.defaultPrevented).toBe(true);
    expect(marker.togglePopup).toHaveBeenCalledOnce();
  });

  it("ignores other keys and events originating outside the marker", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const marker = sdk.Marker.mock.results[0].value;
    for (const key of ["Tab", "Escape", "ArrowRight", "a"]) {
      const event = keyEvent(key, "Enter");
      const stop = vi.spyOn(event, "stopPropagation");
      marker.getElement().dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
      expect(stop).not.toHaveBeenCalled();
    }
    const nested = keyEvent("Enter");
    Object.defineProperty(nested, "target", { value: new EventTarget() });
    marker.getElement().dispatchEvent(nested);
    expect(nested.defaultPrevented).toBe(false);
    expect(marker.togglePopup).not.toHaveBeenCalled();
  });

  it("does not add a click activation path", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, places);
    const marker = sdk.Marker.mock.results[0].value;
    const existingClick = vi.fn();
    marker.getElement().addEventListener("click", existingClick);
    marker.getElement().dispatchEvent(new Event("click"));
    expect(existingClick).toHaveBeenCalledOnce();
    expect(marker.togglePopup).not.toHaveBeenCalled();
  });

  it("removes every keyboard listener during cleanup", () => {
    const dispose = new MapLibreDevProvider().mount({} as HTMLElement, places);
    dispose();
    for (const { value: marker } of sdk.Marker.mock.results) {
      const event = keyEvent("Enter");
      marker.getElement().dispatchEvent(event);
      expect(event.defaultPrevented).toBe(false);
      expect(marker.togglePopup).not.toHaveBeenCalled();
    }
    expect(sdk.map.remove).toHaveBeenCalledOnce();
  });

  it("configures the same-origin worker before creating the map", () => {
    new MapLibreDevProvider().mount({} as HTMLElement, []);

    expect(sdk.setWorkerUrl).toHaveBeenCalledOnce();
    expect(sdk.setWorkerUrl).toHaveBeenCalledWith("/maplibre/maplibre-gl-worker.mjs");
    expect(sdk.setWorkerUrl.mock.invocationCallOrder[0]).toBeLessThan(
      sdk.Map.mock.invocationCallOrder[0],
    );
  });

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
      expect(marker.getElement().setAttribute).toHaveBeenCalledWith("aria-label", place.name);
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
