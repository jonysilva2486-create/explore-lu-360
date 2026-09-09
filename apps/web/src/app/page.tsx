import { ExploreMap } from "@/components/explore-map";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-background)]">
      <header className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-5 py-4 md:px-10">
        <div>
          <p className="font-[var(--font-sans)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--secondary-text)]">
            Explore Luxembourg 360
          </p>
          <h1 className="mt-1 font-[var(--font-display)] text-3xl font-semibold leading-none md:text-4xl">
            The territory, experienced.
          </h1>
        </div>
        <button className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium hover:bg-[var(--paper)]" type="button">
          Explore
        </button>
      </header>

      <section className="grid min-h-[calc(100vh-89px)] lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="relative min-h-[58vh] overflow-hidden bg-[var(--stone)] lg:min-h-0">
          <ExploreMap />
          <div className="pointer-events-none absolute left-5 top-5 max-w-sm rounded-2xl bg-[var(--surface)]/95 p-5 shadow-sm md:left-8 md:top-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--copper)]">Prototype / temporary map</p>
            <p className="mt-2 font-[var(--font-display)] text-2xl leading-tight">Start anywhere in Luxembourg.</p>
            <p className="mt-2 text-sm leading-6 text-[var(--secondary-text)]">This map is intentionally replaceable. It lets us test the real exploration experience before the Géoportail / ACT service is selected for production.</p>
          </div>
        </div>

        <aside className="border-t border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 lg:border-l lg:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--secondary-text)]">Discover</p>
          <h2 className="mt-2 font-[var(--font-display)] text-4xl leading-tight">Places worth taking the long way to.</h2>
          <div className="mt-8 space-y-5">
            {placesForPreview.map((place) => (
              <article key={place.name} className="border-t border-[var(--border)] pt-5">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--secondary-text)]">{place.type}</p>
                <h3 className="mt-1 font-[var(--font-display)] text-2xl">{place.name}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--secondary-text)]">{place.description}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

const placesForPreview = [
  { name: "Vianden", type: "Heritage · North", description: "A first prototype place, used to test map-to-story exploration." },
  { name: "Mullerthal", type: "Landscape · East", description: "A natural context for testing routes, viewpoints and immersive experiences." },
  { name: "Luxembourg City", type: "Place · Centre", description: "A familiar anchor for testing discovery and continuation across the territory." },
];
