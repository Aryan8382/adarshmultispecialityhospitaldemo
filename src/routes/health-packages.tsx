import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Sparkles } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { PACKAGES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/health-packages")({
  head: () => ({
    meta: [
      { title: "Health Check-up Packages | Aadarsh Hospital, Nagpur" },
      {
        name: "description",
        content:
          "Preventive health packages from Rs 1,499: basic wellness, master health, cardiac, women's wellness, diabetes and senior citizen check-ups with same-day reports.",
      },
      { property: "og:title", content: "Health Check-up Packages at Aadarsh Hospital" },
      {
        property: "og:description",
        content: "Six preventive check-up packages with same-day reports and consultation included.",
      },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Health packages"
        title="Preventive check-ups that catch problems early"
        description="Every package includes a consultation, is completed in a single morning visit, and reports reach you the same evening."
        current="Health Packages"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Choose your package"
            title="Transparent pricing, no add-on surprises"
            description="Come fasting for 10 hours. Home sample collection is available within Nagpur city limits."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article
                key={p.slug}
                className={cn(
                  "surface-card relative flex flex-col p-6",
                  p.featured && "border-accent/60 ring-2 ring-accent/25",
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full gradient-teal px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                    <Sparkles className="size-3" /> Most chosen
                  </span>
                )}
                <h2 className="text-lg font-bold text-primary">{p.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.audience}
                </p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-primary">{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{p.original}</span>
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {p.tests.map((t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/appointment"
                  className="mt-7 inline-flex w-full items-center justify-center rounded-full gradient-teal px-5 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
                >
                  Book this package
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad gradient-mint">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "How to prepare",
              text: "Fast for 10 hours (water is allowed), carry a photo ID and previous reports, and wear comfortable clothing for the ECG and imaging tests.",
            },
            {
              title: "What happens on the day",
              text: "Report at the preventive health desk by 8 AM. Sampling, imaging and consultations are grouped so most people finish within 3–4 hours.",
            },
            {
              title: "After your check-up",
              text: "Reports reach you by email the same evening, and a physician explains findings plus a diet and lifestyle plan at your review visit.",
            },
          ].map((c) => (
            <article key={c.title} className="surface-card p-6">
              <h3 className="text-lg font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
