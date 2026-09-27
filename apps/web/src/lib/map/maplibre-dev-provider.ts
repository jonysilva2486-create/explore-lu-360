import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapPlace, MapProvider } from "./map-provider";

export class MapLibreDevProvider implements MapProvider {
  mount(container: HTMLElement, places: MapPlace[]) {
    maplibregl.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
    const map = new maplibregl.Map({
      container,
      center: [6.13, 49.78],
      zoom: 8.2,
      attributionControl: false,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
          },
        },
        layers: [{ id: "osm", type: "raster", source: "osm" }],
      },
    });

    map.addControl(new maplibregl.AttributionControl(), "bottom-right");
    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), "top-right");

    const removeListeners: Array<() => void> = [];
    places.forEach((place) => {
      const marker = new maplibregl.Marker({ color: "#A46645" })
        .setLngLat([...place.coordinates])
        .setPopup(new maplibregl.Popup({ offset: 18 }).setText(place.name))
        .addTo(map);
      const element = marker.getElement();
      element.setAttribute("aria-label", place.name);
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.target !== element || (event.key !== "Enter" && event.key !== " ")) return;
        // Cancel scroll and the legacy keypress activation before opening the popup.
        event.preventDefault();
        event.stopPropagation();
        if (!event.repeat && !marker.getPopup().isOpen()) marker.togglePopup();
      };
      element.addEventListener("keydown", onKeyDown);
      const popup = marker.getPopup();
      let closeButton: HTMLButtonElement | null = null;
      let returnFocus = false;
      const onCloseClick = (event: MouseEvent) => {
        returnFocus = event.detail === 0 && element.ownerDocument.activeElement === closeButton;
      };
      const detachCloseButton = () => {
        closeButton?.removeEventListener("click", onCloseClick, true);
        closeButton = null;
      };
      const onOpen = () => {
        detachCloseButton();
        returnFocus = false;
        closeButton = popup.getElement().querySelector<HTMLButtonElement>(".maplibregl-popup-close-button");
        closeButton?.addEventListener("click", onCloseClick, true);
      };
      const onClose = () => {
        const document = element.ownerDocument;
        const active = document.activeElement;
        const shouldReturn = returnFocus && element.isConnected &&
          (!active || active === document.body || active === closeButton);
        returnFocus = false;
        detachCloseButton();
        if (shouldReturn) element.focus({ preventScroll: true });
      };
      popup.on("open", onOpen);
      popup.on("close", onClose);
      removeListeners.push(() => {
        element.removeEventListener("keydown", onKeyDown);
        popup.off("open", onOpen);
        popup.off("close", onClose);
        returnFocus = false;
        detachCloseButton();
      });
    });

    return () => {
      removeListeners.forEach((remove) => remove());
      map.remove();
    };
  }
}
