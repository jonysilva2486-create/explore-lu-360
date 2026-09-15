import { ExploreMap } from "@/components/explore-map";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--surface-page)]">
      <header className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[var(--surface-content)] px-[var(--space-4)] py-[var(--space-4)] md:px-[var(--space-12)]">
        <div>
          <p className="font-[var(--font-ui)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Explore Luxembourg 360
          </p>
          <h1 className="mt-[var(--space-1)] font-[var(--font-display)] text-3xl font-semibold leading-none md:text-4xl">
            The territory, experienced.
          </h1>
        </div>
        <button
          className="rounded-[var(--radius-interactive)] border border-[var(--border-subtle)] px-[var(--space-4)] py-[var(--space-2)] text-sm font-medium transition-colors hover:bg-[var(--surface-page)]"
          type="button"
        >
          Explore
        </button>
      </header>

      <section className="grid min-h-[calc(100vh-89px)] lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="relative min-h-[58vh] overflow-hidden bg-[var(--color-stone)] lg:min-h-0">
          <ExploreMap />
          <div className="pointer-events-none absolute left-[var(--space-4)] top-[var(--space-4)] max-w-sm rounded-[var(--radius-surface)] bg-[var(--surface-content)]/95 p-[var(--space-6)] shadow-[var(--elevation-1)] md:left-[var(--space-8)] md:top-[var(--space-8)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Prototype / temporary map</p>
            <p className="mt-[var(--space-2)] font-[var(--font-display)] text-2xl leading-tight">Start anywhere in Luxembourg.</p>
            <p className="mt-[var(--space-2)] text-sm leading-6 text-[var(--text-secondary)]">
              This map is intentionally replaceable. It lets us test the exploration experience before the Géoportail / ACT service is selected for production.
            </p>
          </div>
        </div>

        <aside className="border-t border-[var(--border-subtle)] bg-[var(--surface-content)] p-[var(--space-6)] md:p-[var(--space-8)] lg:border-l lg:border-t-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">Discover</p>
          <h2 className="mt-[var(--space-2)] font-[var(--font-display)] text-4xl leading-tight">Places worth taking the long way to.</h2>
          <div className="mt-[var(--space-8)] space-y-[var(--space-6)]">
            {placesForPreview.map((place) => (
              <article key={place.name} className="border-t border-[var(--border-subtle)] pt-[var(--space-4)]">
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)]">{place.type}</p>
                <h3 className="mt-[var(--space-1)] font-[var(--font-display)] text-2xl">{place.name}</h3>
                <p className="mt-[var(--space-1)] text-sm leading-6 text-[var(--text-secondary)]">{place.description}</p>
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
