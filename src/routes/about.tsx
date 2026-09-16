import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Building2, HeartHandshake, ShieldCheck, Target, Users } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { STATS } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Aadarsh Multispeciality Hospital, Nagpur" },
      {
        name: "description",
        content:
          "Our story, mission and milestones: 25+ years of multispeciality care, 150 beds, 40+ specialists and NABH-standard clinical protocols in Nagpur.",
      },
      { property: "og:title", content: "About Aadarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "25 years of multispeciality care in Nagpur — our mission, values and milestones.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Patient first, always",
    text: "Every protocol is written around comfort, dignity and clear communication with families.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical safety",
    text: "Infection-control audits, surgical checklists and pharmacy double-checks on every floor.",
  },
  {
    icon: Target,
    title: "Honest pricing",
    text: "Estimates before admission and itemised bills with no hidden or surprise charges.",
  },
  {
    icon: Users,
    title: "Team medicine",
    text: "Multidisciplinary tumour, stroke and trauma boards decide complex cases together.",
  },
];

const MILESTONES = [
  { year: "2001", text: "Opened as a 30-bed nursing home in Civil Lines, Nagpur." },
  { year: "2008", text: "Added modular operation theatres and a 12-bed intensive care unit." },
  { year: "2013", text: "Commissioned the 24×7 cardiac cath lab and stroke-ready pathway." },
  { year: "2018", text: "Level-III NICU and dedicated mother-and-child block launched." },
  { year: "2022", text: "3T MRI, 128-slice CT and NABL-standard laboratory installed." },
  { year: "2026", text: "150 beds, 9 departments and 3.5 lakh+ patients cared for." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Twenty-five years of standing beside Nagpur's families"
        description="Aadarsh Multispeciality Hospital grew from a 30-bed nursing home into a 150-bed tertiary care centre — without losing the personal touch we started with."
        current="About Us"
      />

      <section className="section-pad">
        <div className="shell grid items-center gap-12 lg:grid-cols-2">
          <img
            src={aboutTeam}
            alt="Doctors and nurses of Aadarsh Hospital"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
          <div>
            <SectionHeading eyebrow="Our story" title="Built by clinicians, run for patients" center={false} />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Founded in 2001 by a group of Nagpur physicians, Aadarsh began with a simple promise:
              serious medicine delivered with warmth. Today our campus houses nine multispeciality
              departments, four modular theatres, 30 intensive care beds and a diagnostic centre
              that reports most investigations the same day.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              More than 40 full-time consultants and 260 nurses and paramedics work in shifts so
              that a specialist is always minutes away — whether it is 11 in the morning or 3 at
              night. Our emergency team follows golden-hour protocols for heart attack, stroke and
              trauma, and our patient relations desk stays with each family from admission to
              discharge.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-secondary p-4">
                  <dt className="font-display text-2xl font-bold text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs font-semibold text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad gradient-mint">
        <div className="shell">
          <SectionHeading
            eyebrow="Mission & values"
            title="The four principles we never compromise on"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <article key={v.title} className="surface-card p-6">
                <span className="grid size-12 place-items-center rounded-2xl gradient-teal text-primary-foreground">
                  <v.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading eyebrow="Milestones" title="How the hospital has grown" />
          <ol className="mx-auto mt-12 grid max-w-3xl gap-5">
            {MILESTONES.map((m) => (
              <li key={m.year} className="surface-card flex items-start gap-5 p-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary font-display text-sm font-bold text-accent">
                  {m.year}
                </span>
                <p className="pt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="shell grid gap-8 lg:grid-cols-3">
          {[
            {
              icon: Award,
              title: "Accreditation & quality",
              text: "NABH-standard clinical governance, NABL-standard pathology and periodic external quality audits.",
            },
            {
              icon: Building2,
              title: "Infrastructure",
              text: "150 beds, 30 ICU beds, four modular theatres, dialysis unit, blood-bank tie-up and 24×7 pharmacy.",
            },
            {
              icon: Users,
              title: "People",
              text: "40+ consultants, 260 nurses and paramedics, and a dedicated insurance and patient-relations team.",
            },
          ].map((c) => (
            <article key={c.title} className="surface-card p-6">
              <c.icon className="size-8 text-accent" />
              <h3 className="mt-4 text-lg font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="gradient-navy flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Come meet our team</h2>
            <p className="max-w-xl text-sm text-primary-foreground/80">
              Walk in for an OPD consultation between 8 AM and 9 PM, or book a slot online and skip
              the queue.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/appointment"
                className="rounded-full gradient-teal px-6 py-3 text-sm font-semibold shadow-teal-glow"
              >
                Book appointment
              </Link>
              <Link
                to="/doctors"
                className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold"
              >
                Our lifesavers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
