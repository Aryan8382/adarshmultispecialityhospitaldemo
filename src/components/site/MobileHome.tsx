import { Link } from "@tanstack/react-router";
import {
  Briefcase,
  House,
  Images,
  Search,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import doctorImg from "@/assets/doctor-1.jpg";
import { useLang } from "@/lib/language-context";

const ACTION_KEYS = [
  { labelKey: "mobile.findDoc",  to: "/doctors" as const,         icon: Stethoscope, primary: true },
  { labelKey: "mobile.careers",  to: "/careers" as const,         icon: Briefcase },
  { labelKey: "mobile.bookAppt", to: "/appointment" as const,     icon: UserRound },
  { labelKey: "mobile.opinion",  to: "/contact" as const,         icon: ShieldCheck },
  { labelKey: "mobile.services", to: "/services" as const,        icon: House },
  { labelKey: "mobile.gallery",  to: "/gallery/photos" as const,  icon: Images },
];

export function MobileHome() {
  const { t } = useLang();

  return (
    <section className="bg-muted/55 px-4 pb-8 pt-3 md:hidden">
      <div className="relative min-h-52 overflow-hidden rounded-3xl gradient-navy text-primary-foreground shadow-[var(--shadow-soft)]">
        <div className="relative z-10 w-[64%] p-5">
          <p className="font-display text-lg font-bold leading-snug">{t("mobile.tagline")}</p>
          <p className="mt-2 text-xs leading-relaxed text-primary-foreground/75">
            {t("mobile.sub")}
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
        <span className="truncate text-sm font-medium text-muted-foreground">{t("mobile.search")}</span>
        <span className="pr-2 text-xs font-bold text-accent">{t("mobile.view")}</span>
      </Link>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {ACTION_KEYS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.labelKey}
              to={action.to}
              className={action.primary
                ? "flex h-32 flex-col justify-between rounded-2xl gradient-teal p-4 text-primary-foreground shadow-teal-glow"
                : "flex h-32 flex-col justify-between rounded-2xl border border-border bg-card p-4 text-primary shadow-[var(--shadow-soft)]"
              }
            >
              <span className="max-w-24 text-sm font-bold leading-snug">{t(action.labelKey)}</span>
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
