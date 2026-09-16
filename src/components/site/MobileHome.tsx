import { Link } from "@tanstack/react-router";
import {
  CalendarCheck,
  HeartPulse,
  House,
  Images,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import doctorImg from "@/assets/doctor-1.jpg";

const actions = [
  { label: "Find a Doctor", to: "/doctors" as const, icon: Stethoscope, primary: true },
  { label: "Book Appointment", to: "/appointment" as const, icon: CalendarCheck },
  { label: "Health Checkup", to: "/health-packages" as const, icon: HeartPulse },
  { label: "Second Opinion", to: "/contact" as const, icon: ShieldCheck },
  { label: "Hospital Services", to: "/services" as const, icon: House },
  { label: "Photo Gallery", to: "/gallery/photos" as const, icon: Images },
];

export function MobileHome() {
  return (
    <section className="bg-muted/55 px-4 pb-8 pt-3 md:hidden">
      <div className="relative min-h-52 overflow-hidden rounded-3xl gradient-navy text-primary-foreground shadow-[var(--shadow-soft)]">
        <div className="relative z-10 w-[64%] p-5">
          <p className="font-display text-lg font-bold leading-snug">Advanced care. A human touch.</p>
          <p className="mt-2 text-xs leading-relaxed text-primary-foreground/75">
            Specialists working together for safer, faster recovery.
          </p>
          <p className="mt-5 text-xs font-bold text-teal-light">Dr. Arun Deshmukh</p>
          <p className="mt-0.5 text-[9px] font-semibold uppercase text-primary-foreground/55">
            Senior Cardiologist
          </p>
        </div>
        <img
          src={doctorImg}
          alt="Dr. Arun Deshmukh"
          className="absolute bottom-0 right-0 h-full w-[46%] object-cover object-top [mask-image:linear-gradient(to_left,black_70%,transparent)]"
        />
      </div>

      <Link
        to="/departments"
        className="relative z-10 mx-3 -mt-6 grid min-h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border/70 bg-background/95 p-2 shadow-[var(--shadow-lift)] backdrop-blur-xl"
      >
        <span className="grid size-10 shrink-0 place-items-center rounded-xl gradient-teal text-primary-foreground">
          <Search className="size-5" strokeWidth={2.5} />
        </span>
        <span className="truncate text-sm font-medium text-muted-foreground">Search specialties</span>
        <span className="pr-2 text-xs font-bold text-accent">View</span>
      </Link>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              to={action.to}
              className={action.primary
                ? "flex h-32 flex-col justify-between rounded-2xl gradient-teal p-4 text-primary-foreground shadow-teal-glow"
                : "flex h-32 flex-col justify-between rounded-2xl border border-border bg-card p-4 text-primary shadow-[var(--shadow-soft)]"
              }
            >
              <span className="max-w-24 text-sm font-bold leading-snug">{action.label}</span>
              <span className={action.primary
                ? "ml-auto grid size-10 place-items-center rounded-full bg-primary-foreground/15"
                : "ml-auto grid size-10 place-items-center rounded-full bg-secondary text-accent"
              }>
                <Icon className="size-5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}