import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, IndianRupee, ShieldCheck } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { getIcon } from "@/components/site/icon-map";
import { SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Hospital Services | Aadarsh Multispeciality Hospital" },
      {
        name: "description",
        content:
          "24x7 emergency, ICU, modular theatres, advanced diagnostics, ambulance, pharmacy, physiotherapy and a cashless insurance desk in Nagpur.",
      },
      { property: "og:title", content: "Services at Aadarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Emergency, diagnostics, surgery, ICU, ambulance and insurance support in one campus.",
      },
    ],
  }),
  component: Services,
});

const SUPPORT = [
  {
    icon: Clock,
    title: "Round-the-clock availability",
    text: "Emergency, ICU, pharmacy, laboratory and imaging stay open every hour of every day.",
  },
  {
    icon: ShieldCheck,
    title: "Cashless insurance desk",
    text: "Empanelled with major insurers, TPAs and government schemes; pre-authorisation handled in-house.",
  },
  {
    icon: IndianRupee,
    title: "Written estimates",
    text: "Planned surgeries and admissions get a written cost estimate before you say yes.",
  },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete hospital support, start to finish"
        description="Diagnostics, surgery, intensive care, rehabilitation and billing support designed so families never have to run between facilities."
        current="Services"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Clinical services" title="What we provide on campus" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <div
                  key={s.name}
                  className="group h-44 [perspective:900px]"
                >
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] [backface-visibility:hidden]">
                      <span className="grid size-12 place-items-center rounded-2xl gradient-teal text-primary-foreground">
                        <Icon className="size-6" />
                      </span>
                      <h2 className="mt-4 text-base font-bold text-primary">{s.name}</h2>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-primary p-5 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <span className="mb-3 grid size-10 place-items-center rounded-full bg-primary-foreground/10">
                        <Icon className="size-5 text-primary-foreground" />
                      </span>
                      <p className="text-sm leading-relaxed text-primary-foreground/90">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad gradient-mint">
        <div className="shell">
          <SectionHeading eyebrow="Patient support" title="The practical things that matter" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {SUPPORT.map((s) => (
              <article key={s.title} className="surface-card p-6">
                <s.icon className="size-8 text-accent" />
                <h3 className="mt-4 text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-8">
            <h2 className="text-xl font-bold text-primary">Emergency in progress?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Call our emergency line and an advanced life support ambulance is dispatched with a
              paramedic team while the trauma bay prepares for arrival.
            </p>
            <a
              href="tel:+919876500108"
              className="mt-6 inline-flex rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
            >
              Call +91 98765 00108
            </a>
          </div>
          <div className="surface-card p-8">
            <h2 className="text-xl font-bold text-primary">Planning a procedure?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Book a consultation, get your pre-operative workup done the same day, and receive a
              written estimate along with insurance guidance.
            </p>
            <Link
              to="/appointment"
              className="mt-6 inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
