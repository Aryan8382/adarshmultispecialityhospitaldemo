import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarClock, GraduationCap, Languages, X } from "lucide-react";
import type { Doctor } from "@/lib/site-data";

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="surface-card group overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden bg-mint">
          <img
            src={doctor.image}
            alt={`${doctor.name}, ${doctor.specialty}`}
            width={800}
            height={912}
            loading="lazy"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">
            {doctor.department}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-primary">{doctor.name}</h3>
          <p className="mt-1 text-sm font-semibold text-accent">{doctor.specialty}</p>
          <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{doctor.qualifications}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              View profile
            </button>
            <Link
              to="/appointment"
              className="rounded-full gradient-teal px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              Book now
            </Link>
          </div>
        </div>
      </article>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${doctor.name} profile`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-deep/70 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="animate-rise max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-6 shadow-[var(--shadow-lift)] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  width={800}
                  height={912}
                  loading="lazy"
                  className="size-20 rounded-2xl object-cover object-top"
                />
                <div>
                  <h3 className="text-xl font-bold text-primary">{doctor.name}</h3>
                  <p className="text-sm font-semibold text-accent">{doctor.specialty}</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close profile"
                onClick={() => setOpen(false)}
                className="grid size-10 shrink-0 place-items-center rounded-xl border border-border text-primary transition-colors hover:border-accent hover:text-accent"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{doctor.bio}</p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary p-4">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  <GraduationCap className="size-4" /> Qualifications
                </dt>
                <dd className="mt-1.5 text-sm text-primary">{doctor.qualifications}</dd>
              </div>
              <div className="rounded-2xl bg-secondary p-4">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  <CalendarClock className="size-4" /> OPD timings
                </dt>
                <dd className="mt-1.5 text-sm text-primary">{doctor.opd}</dd>
              </div>
              <div className="rounded-2xl bg-secondary p-4">
                <dt className="text-xs font-bold uppercase tracking-wider text-accent">
                  Experience
                </dt>
                <dd className="mt-1.5 text-sm text-primary">{doctor.experience}</dd>
              </div>
              <div className="rounded-2xl bg-secondary p-4">
                <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                  <Languages className="size-4" /> Languages
                </dt>
                <dd className="mt-1.5 text-sm text-primary">{doctor.languages}</dd>
              </div>
            </dl>

            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
