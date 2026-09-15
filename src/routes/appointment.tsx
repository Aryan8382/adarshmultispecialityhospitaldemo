import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Phone, ShieldCheck, Stethoscope } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book an Appointment | Aadarsh Hospital, Nagpur" },
      {
        name: "description",
        content:
          "Request an OPD appointment at Aadarsh Multispeciality Hospital, Nagpur. Choose a department, doctor, date and time slot — confirmation by phone within 30 minutes.",
      },
      { property: "og:title", content: "Book an Appointment at Aadarsh Hospital" },
      {
        property: "og:description",
        content: "Pick your department, doctor and time slot online in under a minute.",
      },
    ],
  }),
  component: Appointment,
});

function Appointment() {
  return (
    <>
      <PageHero
        eyebrow="Appointment"
        title="Book your OPD slot in under a minute"
        description="Fill in your details and preferred time. Our front desk calls you back to confirm the slot and shares any preparation instructions."
        current="Appointment"
      />

      <section className="section-pad">
        <div className="shell grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <SectionHeading
              eyebrow="Appointment request"
              title="Tell us who you'd like to see"
              center={false}
            />
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>

          <aside className="grid gap-5 self-start">
            <div className="surface-card p-6">
              <CalendarClock className="size-7 text-accent" />
              <h3 className="mt-4 text-base font-bold text-primary">OPD hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">{HOSPITAL.hours}</p>
            </div>
            <div className="surface-card p-6">
              <Phone className="size-7 text-accent" />
              <h3 className="mt-4 text-base font-bold text-primary">Prefer to call?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Helpdesk{" "}
                <a
                  className="font-semibold text-accent"
                  href={`tel:${HOSPITAL.phone.replace(/\s/g, "")}`}
                >
                  {HOSPITAL.phone}
                </a>
                <br />
                Emergency{" "}
                <a
                  className="font-semibold text-accent"
                  href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
                >
                  {HOSPITAL.emergency}
                </a>
              </p>
            </div>
            <div className="surface-card p-6">
              <Stethoscope className="size-7 text-accent" />
              <h3 className="mt-4 text-base font-bold text-primary">What to bring</h3>
              <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
                <li>Photo ID and insurance card</li>
                <li>Previous prescriptions and reports</li>
                <li>List of medicines you take</li>
              </ul>
            </div>
            <div className="surface-card p-6">
              <ShieldCheck className="size-7 text-accent" />
              <h3 className="mt-4 text-base font-bold text-primary">Cashless insurance</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our ground-floor insurance desk handles pre-authorisation for major insurers, TPAs
                and government schemes.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
