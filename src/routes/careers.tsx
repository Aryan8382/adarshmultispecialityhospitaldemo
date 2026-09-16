import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from "lucide-react";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Adarsh Multispeciality Hospital, Kalol" },
      {
        name: "description",
        content:
          "Join the team at Adarsh Multispeciality Hospital, Kalol. Explore open positions for doctors, nurses, technicians and administrative staff.",
      },
      { property: "og:title", content: "Careers at Adarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Build a meaningful career in healthcare. View current openings at our Kalol campus.",
      },
    ],
  }),
  component: Careers,
});

const OPENINGS = [
  {
    title: "Resident Medical Officer (RMO)",
    department: "Emergency & ICU",
    type: "Full-time",
    experience: "1–3 years",
    qualification: "MBBS",
  },
  {
    title: "Staff Nurse",
    department: "General Ward / ICU",
    type: "Full-time",
    experience: "0–5 years",
    qualification: "B.Sc. / GNM Nursing",
  },
  {
    title: "Radiographer / MRI Technician",
    department: "Diagnostics & Imaging",
    type: "Full-time",
    experience: "1–4 years",
    qualification: "B.Sc. Radiology / DMRT",
  },
  {
    title: "Lab Technician",
    department: "Pathology",
    type: "Full-time",
    experience: "1–3 years",
    qualification: "B.Sc. MLT / DMLT",
  },
  {
    title: "Physiotherapist",
    department: "Rehabilitation",
    type: "Full-time",
    experience: "0–3 years",
    qualification: "BPT / MPT",
  },
  {
    title: "Receptionist / Patient Coordinator",
    department: "Front Desk",
    type: "Full-time",
    experience: "0–2 years",
    qualification: "Any Graduate",
  },
  {
    title: "Pharmacist",
    department: "In-house Pharmacy",
    type: "Full-time",
    experience: "1–3 years",
    qualification: "B.Pharm / D.Pharm",
  },
  {
    title: "Medical Records Executive",
    department: "Administration",
    type: "Full-time",
    experience: "0–2 years",
    qualification: "Any Graduate with computer skills",
  },
];

const WHY_US = [
  {
    icon: HeartHandshake,
    title: "Compassionate culture",
    text: "We put patients first — and that extends to how we treat every team member. Supportive leadership and open-door policies at every level.",
  },
  {
    icon: GraduationCap,
    title: "Continuous learning",
    text: "Regular CMEs, skill workshops, and sponsorship for higher qualifications help you grow without leaving campus.",
  },
  {
    icon: Users,
    title: "Strong team",
    text: "Work alongside senior consultants, experienced nurses and a driven support team in a well-equipped multispeciality environment.",
  },
  {
    icon: Star,
    title: "Competitive benefits",
    text: "Market-aligned salaries, ESI / PF, subsidised canteen, and staff health cover for you and your immediate family.",
  },
];

function Careers() {
  const whatsappHref = `https://wa.me/91${HOSPITAL.phone.replace(/[^0-9]/g, "").slice(-10)}?text=Hi%2C%20I%20am%20interested%20in%20a%20career%20opportunity%20at%20Adarsh%20Hospital.`;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow with a team that cares"
        description="Adarsh Multispeciality Hospital, Kalol is always looking for dedicated healthcare professionals who share our commitment to compassionate, high-quality care."
        current="Careers"
      />

      {/* Why join us */}
      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="Why join us"
            title="A place where your work truly matters"
            description="Every role at Adarsh Hospital — clinical or non-clinical — directly impacts the care our patients receive."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <article key={w.title} className="surface-card p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-accent">
                  <w.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-primary">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="section-pad bg-muted">
        <div className="shell">
          <SectionHeading
            eyebrow="Current openings"
            title="Open positions at our Kalol campus"
            description="Don't see your role? Send us your CV anyway — we keep applications on file for future needs."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {OPENINGS.map((job) => (
              <article
                key={job.title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                    <Briefcase className="size-5" />
                  </div>
                  <span className="ml-auto rounded-full border border-border px-3 py-0.5 text-[11px] font-semibold text-muted-foreground">
                    {job.type}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary">{job.title}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-accent">{job.department}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="size-3.5" /> {job.qualification}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="size-3.5" /> {job.experience} experience
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="section-pad">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <div className="surface-card p-8">
            <h2 className="text-xl font-bold text-primary">Send your CV</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Email your updated CV with the position name in the subject line. Our HR team reviews
              all applications within 5 working days.
            </p>
            <a
              href={`mailto:${HOSPITAL.email}?subject=Job Application`}
              className="mt-6 inline-flex items-center gap-2 rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" /> {HOSPITAL.email}
            </a>
          </div>
          <div className="surface-card p-8">
            <h2 className="text-xl font-bold text-primary">Walk in or call us</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Visit our HR desk at the hospital Monday to Saturday between 10 AM and 4 PM, or reach
              out on WhatsApp for a quick conversation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_-4px_rgba(37,211,102,0.55)] transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4" /> WhatsApp
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground">
                <MapPin className="size-4 shrink-0 text-accent" /> KIRC Campus, Kalol
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="shell">
          <div className="gradient-navy flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center text-primary-foreground shadow-[var(--shadow-lift)] sm:px-12">
            <h2 className="max-w-xl text-2xl font-bold sm:text-3xl">
              Ready to make a difference?
            </h2>
            <p className="max-w-lg text-sm text-primary-foreground/85">
              Join a team that believes excellent care starts with empowered, respected staff. We'd
              love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${HOSPITAL.email}?subject=Job Application`}
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
              >
                <Mail className="size-4" /> Apply by Email
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
              >
                Contact HR <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
