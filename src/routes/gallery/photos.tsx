import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { PHOTOS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery/photos")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Aadarsh Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Photographs of our reception, modular operation theatres, ICU, 3T MRI suite, private rooms, ambulance bay and pathology laboratory in Nagpur.",
      },
      { property: "og:title", content: "Photo Gallery — Aadarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "See our theatres, ICU, imaging suites and patient rooms.",
      },
    ],
  }),
  component: PhotoGallery,
});

const CATEGORIES = ["All", "Facilities", "Care", "Diagnostics"] as const;

function PhotoGallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [active, setActive] = useState<number | null>(null);
  const list = filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside Aadarsh Hospital"
        description="A look at the spaces where our teams work — theatres, intensive care, imaging suites and patient rooms."
        current="Photo Gallery"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Photo gallery" title="Our facilities in pictures" />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                  filter === c
                    ? "gradient-teal text-primary-foreground shadow-teal-glow"
                    : "border border-border bg-card text-primary/75 hover:border-accent hover:text-accent",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <button
                key={`${p.title}-${i}`}
                type="button"
                onClick={() => setActive(i)}
                className="surface-card group block overflow-hidden text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    {p.category}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-primary">{p.title}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && list[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={list[active].title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/80 p-4 backdrop-blur-sm"
        >
          <div className="animate-rise w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-3xl bg-card">
              <img
                src={list[active].src}
                alt={list[active].title}
                width={1600}
                height={1200}
                className="w-full object-cover"
              />
              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    {list[active].category}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-primary">{list[active].title}</h3>
                </div>
                <button
                  type="button"
                  aria-label="Close image"
                  onClick={() => setActive(null)}
                  className="grid size-10 shrink-0 place-items-center rounded-xl border border-border text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
