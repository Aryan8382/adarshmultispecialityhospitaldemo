import { Link, useRouterState } from "@tanstack/react-router";
import { CalendarDays, Images, MessageCircle, PhoneCall, Stethoscope } from "lucide-react";
import { HOSPITAL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const leftItems = [
  { label: "Doctors", to: "/doctors" as const, icon: Stethoscope },
  { label: "Book Appt.", to: "/appointment" as const, icon: CalendarDays },
];

const rightItems = [
  { label: "Gallery", to: "/gallery/photos" as const, icon: Images },
];

const whatsappHref = `https://wa.me/91${HOSPITAL.phone.replace(/[^0-9]/g, "").slice(-10)}`;

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const navLink = (
    item: { label: string; to: string; icon: typeof Stethoscope },
    activeOverride?: boolean,
  ) => {
    const Icon = item.icon;
    const active =
      activeOverride ??
      (pathname === item.to || (item.to.startsWith("/gallery") && pathname.startsWith("/gallery")));
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
  };

  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-3 bottom-3 z-[60] grid grid-cols-5 items-center rounded-2xl border border-border/70 bg-background/80 px-1.5 py-2 shadow-[var(--shadow-lift)] backdrop-blur-xl md:hidden"
    >
      {leftItems.map((item) => navLink(item))}

      {/* Center Call button — pops above the bar */}
      <a
        href={`tel:${HOSPITAL.phone.replace(/\s/g, "")}`}
        aria-label={`Call ${HOSPITAL.name}`}
        className="relative -mt-10 flex flex-col items-center"
      >
        <span className="absolute top-1 size-11 animate-ping rounded-full bg-red-500/30" />
        <span className="relative flex size-12 items-center justify-center rounded-full bg-red-600 text-white shadow-[0_10px_24px_-6px_rgba(220,38,38,0.65)] ring-4 ring-background/90 transition-transform active:scale-95">
          <PhoneCall className="size-6" strokeWidth={2.2} />
        </span>
        <span className="mt-2 text-[9px] font-bold text-red-600">Call Now</span>
      </a>

      {rightItems.map((item) => navLink(item))}

      {/* WhatsApp replaces Contact */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-muted-foreground transition-colors active:bg-secondary"
      >
        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
          <MessageCircle className="size-3.5 text-white" strokeWidth={2.4} fill="white" />
        </span>
        <span className="w-full truncate text-center text-[9px] font-semibold">WhatsApp</span>
      </a>
    </nav>
  );
}
