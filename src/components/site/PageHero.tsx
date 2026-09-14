import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  current,
}: {
  eyebrow: string;
  title: string;
  description: string;
  current: string;
}) {
  return (
    <section className="relative overflow-hidden gradient-navy py-14 text-primary-foreground lg:py-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-10 size-64 rounded-full bg-teal-light/20 blur-3xl"
        aria-hidden
      />
      <div className="shell relative animate-rise">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-light">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          {description}
        </p>
        <nav className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary-foreground/70">
          <Link to="/" className="transition-colors hover:text-teal-light">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-teal-light">{current}</span>
        </nav>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
