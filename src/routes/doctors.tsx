import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { DoctorCard } from "@/components/site/DoctorCard";
import { DOCTORS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Our Lifesavers | Doctors at Aadarsh Hospital, Nagpur" },
      {
        name: "description",
        content:
          "Meet the senior consultants at Aadarsh Multispeciality Hospital — cardiology, neurology, orthopaedics, paediatrics, gynaecology and radiology, with OPD timings.",
      },
      { property: "og:title", content: "Our Lifesavers — Doctors at Aadarsh Hospital" },
      {
        property: "og:description",
        content: "Senior specialists with OPD timings, qualifications and areas of expertise.",
      },
    ],
  }),
  component: Doctors,
});

function Doctors() {
  const departments = ["All", ...Array.from(new Set(DOCTORS.map((d) => d.department)))];
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? DOCTORS : DOCTORS.filter((d) => d.department === filter);

  return (
    <>
      <PageHero
        eyebrow="Our lifesavers"
        title="The specialists who make recovery possible"
        description="Full-time consultants, not visiting doctors — so the person who plans your treatment is the person who follows it through."
        current="Our Lifesavers"
      />

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Consultants"
            title="Find a doctor by department"
            description="Select a department to see the consultants available, their qualifications and OPD hours."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {departments.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setFilter(d)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                  filter === d
                    ? "gradient-teal text-primary-foreground shadow-teal-glow"
                    : "border border-border bg-card text-primary/75 hover:border-accent hover:text-accent",
                )}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell">
          <div className="gradient-mint flex flex-col items-center gap-4 rounded-3xl border border-border px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              Not sure which specialist you need?
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Share your symptoms in the appointment form and our front desk will route you to the
              right department.
            </p>
            <Link
              to="/appointment"
              className="rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
            >
              Book appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
