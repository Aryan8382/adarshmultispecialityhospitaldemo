import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Quote, Star } from "lucide-react";
import { useLang } from "@/lib/language-context";

const WHATSAPP_HREF = `https://wa.me/919824543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`;
const INSTAGRAM_HREF = "https://www.instagram.com/adarsh_multispecialityhospital";
const FACEBOOK_HREF = "https://www.facebook.com/share/1Cx7PmzabY/?mibextid=wwXIfr";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
import heroBgImg from "@/assets/hero-hospital-bg.jpg";
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
  const { t } = useLang();
  return (
    <>
      <MobileHome />
      <section
        className="relative hidden overflow-hidden bg-cover bg-center text-primary-foreground md:block"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" aria-hidden />
        <div className="shell relative py-20 lg:py-28">
          <div className="max-w-2xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-light">
              <Star className="size-3.5" /> {t("hero.badge")}
            </span>
            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t("hero.title1")} <span className="text-gradient-teal">{t("hero.title2")}</span>{" "}
              {t("hero.title3")}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              {t("hero.desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_-4px_rgba(37,211,102,0.65)] transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-4" /> {t("hero.bookWhatsapp")}
              </a>
              <a
                href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:border-teal-light hover:text-teal-light"
              >
                <Phone className="size-4" /> {t("topbar.emergency")} {HOSPITAL.emergency}
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
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow={t("dept.eyebrow")}
            title={t("dept.title")}
            description={t("dept.desc")}
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
              eyebrow={t("about.eyebrow")}
              title={t("about.title")}
              center={false}
            />
            <ul className="mt-6 grid gap-4">
              {(["about.b1","about.b2","about.b3","about.b4","about.b5"] as const).map((key) => (
                <li key={key} className="flex gap-3 text-sm text-primary">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />
                  {t(key)}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
            >
              {t("about.link")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow={t("doctors.eyebrow")}
            title={t("doctors.title")}
            description={t("doctors.desc")}
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
              {t("doctors.seeAll")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-muted">
        <div className="shell">
          <SectionHeading
            eyebrow={t("services.eyebrow")}
            title={t("services.title")}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <div
                  key={s.name}
                  className="group h-44 [perspective:900px]"
                  style={{ perspective: "900px" }}
                >
                  <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Front */}
                    <div className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] [backface-visibility:hidden]">
                      <span className="grid size-11 place-items-center rounded-xl gradient-teal text-primary-foreground">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 text-base font-bold text-primary">{s.name}</h3>
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

      <section className="section-pad gradient-navy text-primary-foreground">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-light">
              {t("testimonials.eyebrow")}
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              {t("testimonials.title")}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
              >
                <Quote className="size-7 text-teal-light" />
                <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                  {testimonial.text}
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold">
                  {testimonial.name}
                  <span className="block text-xs font-normal text-primary-foreground/60">
                    {testimonial.city}
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
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
            description={t("faq.desc")}
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
          <div className="gradient-navy flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center text-primary-foreground shadow-[var(--shadow-lift)] sm:px-12">
            <h2 className="max-w-2xl text-2xl font-bold sm:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="max-w-xl text-sm text-primary-foreground/85">
              {t("cta.desc")}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_-4px_rgba(37,211,102,0.55)] transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-4" /> {t("cta.whatsapp")}
              </a>
              {/* Instagram */}
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
              >
                <InstagramIcon className="size-4" /> {t("cta.instagram")}
              </a>
              {/* Facebook */}
              <a
                href={FACEBOOK_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
              >
                <FacebookIcon className="size-4" /> {t("cta.facebook")}
              </a>
              {/* Call */}
              <a
                href={`tel:${HOSPITAL.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
              >
                <Phone className="size-4" /> {t("cta.call")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
