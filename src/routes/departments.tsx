import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { getIcon } from "@/components/site/icon-map";
import { DEPARTMENTS, DOCTORS } from "@/lib/site-data";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments | Aadarsh Multispeciality Hospital, Nagpur" },
      {
        name: "description",
        content:
          "Nine multispeciality departments: cardiology, neurology, orthopaedics, obstetrics, paediatrics, surgery, nephrology, critical care and radiology.",
      },
      { property: "og:title", content: "Departments at Aadarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Explore our nine specialist departments and the consultants who lead them.",
      },
    ],
  }),
  component: Departments,
});

function Departments() {
  return (
    <>
      <PageHero
        eyebrow="Departments"
        title="Nine specialities working as one team"
        description="Each department runs its own OPD, ward protocols and follow-up clinics, backed by shared ICU, imaging and laboratory services."
        current="Departments"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Centres of excellence"
            title="What each department offers"
            description="Tap through the highlights to see the equipment, clinics and protocols available in every speciality."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((d) => {
              const Icon = getIcon(d.icon);
              const departmentKey = d.name.split(" ")[0] ?? d.name;
              const doctors = DOCTORS.filter((doc) => doc.department.includes(departmentKey));
              return (
                <article key={d.slug} className="surface-card flex flex-col p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-accent">
                    <Icon className="size-6" />
                  </span>
                  <h2 className="mt-5 text-lg font-bold text-primary">{d.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.summary}</p>
                  <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
                    {d.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {doctors.length > 0 && (
                    <p className="mt-4 text-xs font-semibold text-primary/70">
                      Consultants: {doctors.map((doc) => doc.name).join(", ")}
                    </p>
                  )}
                  <Link
                    to="/appointment"
                    className="mt-6 inline-flex w-fit rounded-full border border-border px-4 py-2 text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    Book in this department
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="gradient-navy flex flex-col items-center gap-4 rounded-3xl px-6 py-12 text-center text-primary-foreground sm:px-12">
            <h2 className="text-2xl font-bold sm:text-3xl">Second opinions welcome</h2>
            <p className="max-w-xl text-sm text-primary-foreground/80">
              Bring your previous reports and prescriptions — our consultants review them free of
              cost during your first visit.
            </p>
            <Link
              to="/contact"
              className="rounded-full gradient-teal px-6 py-3 text-sm font-semibold shadow-teal-glow"
            >
              Talk to our helpdesk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
