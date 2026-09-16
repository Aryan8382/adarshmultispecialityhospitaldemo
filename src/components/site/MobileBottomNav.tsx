import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, Images, PhoneCall, Stethoscope, UserRound } from "lucide-react";
import { HOSPITAL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const items = [
  { label: "Doctors", to: "/doctors" as const, icon: Stethoscope },
  { label: "Book Appt.", to: "/appointment" as const, icon: CalendarDays },
  { label: "Gallery", to: "/gallery/photos" as const, icon: Images },
  { label: "Contact", to: "/contact" as const, icon: UserRound },
];

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-3 bottom-3 z-[60] grid grid-cols-5 items-center rounded-2xl border border-border/70 bg-background/80 px-1.5 py-2 shadow-[var(--shadow-lift)] backdrop-blur-xl md:hidden"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.to || (item.to.startsWith("/gallery") && pathname.startsWith("/gallery"));
        return (
          <Link
            key={item.to}
            to={item.to}
            className={cn(
              "flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-muted-foreground transition-colors",
              active && "bg-secondary text-accent",
            )}
          >
            <Icon className="size-5 shrink-0" strokeWidth={active ? 2.5 : 1.8} />
            <span className="w-full truncate text-center text-[9px] font-semibold">{item.label}</span>
          </Link>
        );
      })}
      <a
        href={`tel:${HOSPITAL.phone.replace(/\s/g, "")}`}
        className="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-muted-foreground transition-colors active:bg-secondary active:text-accent"
      >
        <PhoneCall className="size-5 shrink-0" strokeWidth={1.8} />
        <span className="w-full truncate text-center text-[9px] font-semibold">Call Back</span>
      </a>
    </nav>
  );
}