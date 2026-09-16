import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Play, X } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { VIDEOS } from "@/lib/site-data";

export const Route = createFileRoute("/gallery/videos")({
  head: () => ({
    meta: [
      { title: "Video Gallery | Aadarsh Multispeciality Hospital" },
      {
        name: "description",
        content:
          "Watch a walkthrough of Aadarsh Multispeciality Hospital: our wards, critical care unit, imaging centre and emergency response team in action.",
      },
      { property: "og:title", content: "Video Gallery — Aadarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Hospital walkthrough, critical care, imaging and emergency response videos.",
      },
    ],
  }),
  component: VideoGallery,
});

function VideoGallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See our hospital in motion"
        description="Short films that show how our wards, critical care unit, imaging centre and emergency team work every day."
        current="Video Gallery"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Video gallery" title="Walkthroughs and patient guides" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VIDEOS.map((v, i) => (
              <button
                key={v.title}
                type="button"
                onClick={() => setActive(i)}
                className="surface-card group block overflow-hidden text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.poster}
                    alt={v.title}
                    width={1200}
                    height={675}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-navy-deep/35">
                    <span className="grid size-14 place-items-center rounded-full gradient-teal text-primary-foreground shadow-teal-glow">
                      <Play className="size-6" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-navy-deep/80 px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
                    {v.duration}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-primary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && VIDEOS[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={VIDEOS[active].title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/85 p-4 backdrop-blur-sm"
        >
          <div className="animate-rise w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="overflow-hidden rounded-3xl bg-card">
              <video
                src={VIDEOS[active].src}
                poster={VIDEOS[active].poster}
                controls
                autoPlay
                playsInline
                className="aspect-video w-full bg-navy-deep"
              />
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <h3 className="text-base font-bold text-primary">{VIDEOS[active].title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{VIDEOS[active].description}</p>
                </div>
                <button
                  type="button"
                  aria-label="Close video"
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
