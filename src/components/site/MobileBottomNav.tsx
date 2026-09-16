import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Globe, Images, PhoneCall, Stethoscope } from "lucide-react";
import { HOSPITAL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const leftItems = [
  { label: "Doctors", to: "/doctors" as const, icon: Stethoscope },
];

const rightItems = [
  { label: "Gallery", to: "/gallery/photos" as const, icon: Images },
];

const whatsappHref = `https://wa.me/91${HOSPITAL.phone.replace(/[^0-9]/g, "").slice(-10)}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

/** WhatsApp SVG icon */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [lang, setLang] = useState<"en" | "gu">("en");
  const [langOpen, setLangOpen] = useState(false);

  const navLink = (item: { label: string; to: string; icon: typeof Stethoscope }) => {
    const Icon = item.icon;
    const active =
      pathname === item.to || (item.to.startsWith("/gallery") && pathname.startsWith("/gallery"));
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
    <>
      {/* Language popover above the nav bar */}
      {langOpen && (
        <div className="fixed inset-x-3 bottom-[4.5rem] z-[59] md:hidden">
          <div className="rounded-2xl border border-border bg-background/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-xl">
            <p className="mb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Select Language
            </p>
            {[
              { code: "en", label: "English" },
              { code: "gu", label: "ગુજરાતી" },
            ].map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => { setLang(l.code as "en" | "gu"); setLangOpen(false); }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors",
                  lang === l.code
                    ? "bg-secondary text-accent"
                    : "text-primary/80 hover:bg-secondary/60",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <nav
        aria-label="Mobile quick navigation"
        className="fixed inset-x-3 bottom-3 z-[60] grid grid-cols-5 items-center rounded-2xl border border-border/70 bg-background/80 px-1.5 py-2 shadow-[var(--shadow-lift)] backdrop-blur-xl md:hidden"
      >
        {/* Col 1 — Doctors */}
        {leftItems.map((item) => navLink(item))}

        {/* Col 2 — Language toggle */}
        <button
          type="button"
          aria-label="Select language"
          aria-expanded={langOpen}
          onClick={() => setLangOpen((v) => !v)}
          className={cn(
            "flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 transition-colors",
            langOpen ? "bg-secondary text-accent" : "text-muted-foreground",
          )}
        >
          <Globe className="size-5 shrink-0" strokeWidth={1.8} />
          <span className="w-full truncate text-center text-[9px] font-semibold">
            {lang === "en" ? "EN" : "ગુ"}
          </span>
        </button>

        {/* Col 3 — Center Call button (pops above bar) */}
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

        {/* Col 4 — Gallery */}
        {rightItems.map((item) => navLink(item))}

        {/* Col 5 — WhatsApp */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex min-w-0 flex-col items-center gap-1 rounded-xl px-1 py-1.5 text-muted-foreground transition-colors active:bg-secondary"
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
            <WhatsAppIcon className="size-3 text-white" />
          </span>
          <span className="w-full truncate text-center text-[9px] font-semibold">WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
