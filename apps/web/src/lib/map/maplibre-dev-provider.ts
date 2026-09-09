import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapPlace, MapProvider } from "./map-provider";

export class MapLibreDevProvider implements MapProvider {
  mount(container: HTMLElement, places: MapPlace[]) {
    const map = new maplibregl.Map({
      container,
      center: [6.13, 49.78],
      zoom: 8.2,
      attributionControl: true,
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

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), "top-right");

    places.forEach((place) => {
      new maplibregl.Marker({ color: "#A46645" })
        .setLngLat([...place.coordinates])
        .setPopup(new maplibregl.Popup({ offset: 18 }).setText(place.name))
        .addTo(map);
    });

    return () => map.remove();
  }
}
