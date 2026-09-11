"use client";

import { useEffect, useRef } from "react";
import { MapLibreDevProvider } from "@/lib/map/maplibre-dev-provider";
import type { MapPlace } from "@/lib/map/map-provider";

const places: MapPlace[] = [
  { id: "luxembourg-city", name: "Luxembourg City", coordinates: [6.13, 49.61] },
  { id: "vianden", name: "Vianden", coordinates: [6.09, 49.94] },
  { id: "mullerthal", name: "Mullerthal", coordinates: [6.29, 49.78] },
];

export function ExploreMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const provider = new MapLibreDevProvider();
    return provider.mount(containerRef.current, places);
  }, []);

  return <div ref={containerRef} className="h-full w-full" aria-label="Interactive map of Luxembourg" role="application" />;
}
