import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, CheckCircle2, Phone, Quote, Star } from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import { SectionHeading } from "@/components/site/PageHero";
import { DoctorCard } from "@/components/site/DoctorCard";
import { MobileHome } from "@/components/site/MobileHome";
import { getIcon } from "@/components/site/icon-map";
import {
  DEPARTMENTS,
  DOCTORS,
  FAQS,
  HOSPITAL,
  PACKAGES,
  SERVICES,
  STATS,
  TESTIMONIALS,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aadarsh Multispeciality Hospital | 24x7 Care in Nagpur" },
      {
        name: "description",
        content:
          "Aadarsh Multispeciality Hospital, Nagpur: 40+ specialists, 24x7 emergency and ICU, cardiac, ortho, maternity and advanced diagnostics under one roof.",
      },
      { property: "og:title", content: "Aadarsh Multispeciality Hospital | 24x7 Care in Nagpur" },
      {
        property: "og:description",
        content: "Book an appointment with 40+ specialists across 9 departments in Nagpur.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <MobileHome />
      <section className="relative hidden overflow-hidden gradient-navy text-primary-foreground md:block">
        <div
          className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-accent/25 blur-3xl"
          aria-hidden
        />
        <div className="shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              <Star className="size-3.5" /> NABH-standard care since 2001
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Compassionate care, <span className="text-gradient-teal">advanced medicine</span> for
              every family in Nagpur
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              A 150-bed multispeciality hospital with 40+ specialists, intensivist-led ICUs, modular
              theatres and a 24×7 emergency room — all under one roof.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full gradient-teal px-6 py-3.5 text-sm font-semibold shadow-teal-glow transition-transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="size-4" /> Book an appointment
              </Link>
              <a
                href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-teal-light hover:text-teal-light"
              >
                <Phone className="size-4" /> Emergency {HOSPITAL.emergency}
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-teal-light">{s.value}</dt>
                  <dd className="mt-1 text-xs text-primary-foreground/70">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative animate-rise">
            <img
              src={heroImg}
              alt="Aadarsh Multispeciality Hospital main entrance"
              width={1600}
              height={1104}
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="animate-float absolute -bottom-6 left-4 rounded-2xl bg-card p-4 shadow-[var(--shadow-lift)] sm:left-8">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                Emergency & ICU
              </p>
              <p className="mt-1 text-sm font-semibold text-primary">Open 24×7, 365 days</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Centres of excellence"
            title="Specialist departments for every stage of care"
            description="From golden-hour stroke treatment to newborn intensive care, our teams work together across nine multispeciality departments."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.slice(0, 6).map((d) => {
              const Icon = getIcon(d.icon);
              return (
                <article key={d.slug} className="surface-card p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-accent">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/departments"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              View all departments <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad gradient-mint">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <img
            src={aboutTeam}
            alt="Aadarsh Hospital medical team"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div>
            <SectionHeading
              eyebrow="Why families choose us"
              title="Care that stays clear, kind and clinically excellent"
              center={false}
            />
            <ul className="mt-6 grid gap-4">
              {[
                "Transparent, itemised billing with no hidden charges",
                "Specialist opinion within 30 minutes in emergencies",
                "Cashless insurance desk for major TPAs and schemes",
                "Same-day diagnostic reports for most investigations",
                "Dedicated patient relations team for every admission",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-primary">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
            >
              About Aadarsh Hospital <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Our lifesavers"
            title="Meet the doctors behind every recovery"
            description="Senior consultants with decades of combined experience, available across OPD, ICU and operation theatres."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCTORS.slice(0, 3).map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              See all doctors <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="shell">
          <SectionHeading
            eyebrow="Hospital services"
            title="Everything a patient needs, in one campus"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <article key={s.name} className="surface-card p-5">
                  <span className="grid size-11 place-items-center rounded-xl gradient-teal text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-primary">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Health packages"
            title="Preventive check-ups at honest prices"
            description="Fasting morning visit, reports the same evening, and a consultation included with every package."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.slice(0, 3).map((p) => (
              <article key={p.slug} className="surface-card p-6">
                <h3 className="text-lg font-bold text-primary">{p.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.audience}
                </p>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-bold text-primary">{p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{p.original}</span>
                </p>
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                  {p.tests.slice(0, 4).map((t) => (
                    <li key={t} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/health-packages"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Compare all packages <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad gradient-navy text-primary-foreground">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-light">
              Patient voices
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Trusted by families across Vidarbha
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
              >
                <Quote className="size-7 text-teal-light" />
                <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                  {t.text}
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {t.name}
                  <span className="block text-xs font-normal text-primary-foreground/60">
                    {t.city}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            description="Still unsure about something? Our front desk answers calls round the clock."
            center={false}
          />
          <div className="grid gap-4">
            {FAQS.map((f) => (
              <details key={f.q} className="surface-card group p-5">
                <summary className="cursor-pointer list-none text-sm font-bold text-primary marker:hidden">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="gradient-teal flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center text-primary-foreground shadow-teal-glow sm:px-12">
            <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">
              Need a specialist opinion today?
            </h2>
            <p className="max-w-xl text-sm text-primary-foreground/85">
              Book an OPD slot online in under a minute, or call our helpdesk and we will guide you
              to the right department.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/appointment"
                className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary"
              >
                Book appointment
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
