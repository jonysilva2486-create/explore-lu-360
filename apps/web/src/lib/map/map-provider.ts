export type Coordinates = readonly [longitude: number, latitude: number];

export interface MapPlace {
  id: string;
  name: string;
  coordinates: Coordinates;
}

export interface MapProvider {
  mount(container: HTMLElement, places: MapPlace[]): () => void;
}
