import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X, Clock, Mail, Globe, Check } from "lucide-react";
import { HOSPITAL } from "@/lib/site-data";
import { useLang } from "@/lib/language-context";
import { cn } from "@/lib/utils";
// import logoSvg from "@/assets/logo.svg";
import logo from "@/assets/logo.png";
type NavLeaf = { label: string; to: string };

const NAV_KEYS = [
  { key: "nav.home",        to: "/" },
  { key: "nav.about",       to: "/about" },
  { key: "nav.doctors",     to: "/doctors" },
  { key: "nav.departments", to: "/departments" },
  { key: "nav.services",    to: "/services" },
  { key: "nav.careers",     to: "/careers" },
] as const;

const GALLERY_KEYS = [
  { key: "nav.photoGallery", to: "/gallery/photos" },
  { key: "nav.videoGallery", to: "/gallery/videos" },
] as const;

const LANG_OPTIONS = [
  { code: "gu" as const, label: "ગુજરાતી", sublabel: "Gujarati", flag: "🇮🇳" },
  { code: "en" as const, label: "English",  sublabel: "English",  flag: "🇬🇧" },
];

const whatsappHref = `https://wa.me/91${HOSPITAL.phone.replace(/[^0-9]/g, "").slice(-10)}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

/** Square-tile language panel, shared across breakpoints */
function LangPanel({
  lang,
  setLang,
  onClose,
}: {
  lang: "gu" | "en";
  setLang: (l: "gu" | "en") => void;
  onClose: () => void;
}) {
  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-56 origin-top-right animate-[fadeIn_0.15s_ease] rounded-2xl border border-border bg-popover shadow-[var(--shadow-lift)]">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <Globe className="size-4 text-accent" />
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Language / ભાષા
        </span>
      </div>
      {/* Tiles */}
      <div className="grid grid-cols-2 gap-2 p-2">
        {LANG_OPTIONS.map((l) => {
          const active = lang === l.code;
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => { setLang(l.code); onClose(); }}
              className={cn(
                "relative flex flex-col items-center gap-1.5 rounded-xl border-2 px-3 py-4 text-center transition-all",
                active
                  ? "border-accent bg-secondary text-accent"
                  : "border-border bg-card text-primary/70 hover:border-accent/50 hover:bg-secondary/60",
              )}
            >
              {active && (
                <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
              )}
              <span className="text-xl leading-none">{l.flag}</span>
              <span className="text-sm font-bold leading-tight">{l.label}</span>
              <span className="text-[10px] font-medium text-muted-foreground">{l.sublabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGallery, setMobileGallery] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close lang panel on outside click
  useEffect(() => {
    if (!langOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-lang-panel]")) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [langOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setGalleryOpen(false);
    setMobileGallery(false);
    setLangOpen(false);
  };

  const linkClass =
    "relative whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold text-primary/80 transition-colors hover:text-accent";
  const activeClass = "text-accent bg-secondary";

  const currentLangOption = LANG_OPTIONS.find((l) => l.code === lang)!;

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar — desktop only */}
      <div className="hidden gradient-navy text-primary-foreground md:block">
        <div className="shell flex items-center justify-between gap-6 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5 text-teal-light" /> {HOSPITAL.hours}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="size-3.5 text-teal-light" /> {HOSPITAL.email}
            </span>
          </div>
          <a
            href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-3 py-1 font-semibold transition-colors hover:bg-accent"
          >
            <Phone className="size-3.5" /> {t("topbar.emergency")} {HOSPITAL.emergency}
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={cn(
          "border-b border-border/70 bg-background/90 backdrop-blur-lg transition-shadow",
          scrolled && "shadow-[0_10px_30px_-24px_oklch(0.26_0.090_264/0.6)]",
        )}
      >
        <div className="shell flex flex-nowrap items-center justify-between gap-2 py-2 sm:gap-4 sm:py-2.5">
          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
            <img src={logo} alt="Adarsh Multispeciality Hospital Logo" className="size-10 shrink-0 sm:size-12" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-bold text-primary sm:text-base">
                {lang === "gu" ? "આદર્શ" : "Adarsh"}
              </span>
              <span className="block truncate text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[10px]">
                {lang === "gu" ? "મલ્ટિસ્પૅશ્યૉલિટી હૉસ્પિટલ" : "Multispeciality Hospital"}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-nowrap items-center gap-0 lg:flex">
            {NAV_KEYS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={linkClass}
                activeProps={{ className: activeClass }}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Gallery dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button
                type="button"
                aria-expanded={galleryOpen}
                onClick={() => setGalleryOpen((v) => !v)}
                className={cn(linkClass, "inline-flex items-center gap-1")}
              >
                {t("nav.gallery")}
                <ChevronDown className={cn("size-4 shrink-0 transition-transform", galleryOpen && "rotate-180")} />
              </button>
              <div
                className={cn(
                  "absolute left-0 top-full w-52 origin-top pt-2 transition-all duration-200",
                  galleryOpen ? "pointer-events-auto scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-[var(--shadow-lift)]">
                  {GALLERY_KEYS.map((g) => (
                    <Link
                      key={g.to}
                      to={g.to}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-primary/80 transition-colors hover:bg-secondary hover:text-accent"
                      activeProps={{ className: "bg-secondary text-accent" }}
                    >
                      {t(g.key)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={linkClass} activeProps={{ className: activeClass }}>
              {t("nav.contact")}
            </Link>

            {/* Language switcher — desktop */}
            <div className="relative ml-1" data-lang-panel>
              <button
                type="button"
                aria-label="Select language"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl border-2 px-3 py-1.5 text-xs font-bold transition-all",
                  langOpen
                    ? "border-accent bg-secondary text-accent"
                    : "border-border text-primary/70 hover:border-accent hover:text-accent",
                )}
              >
                <span className="text-base leading-none">{currentLangOption.flag}</span>
                <span>{currentLangOption.label}</span>
                <ChevronDown className={cn("size-3.5 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <LangPanel lang={lang} setLang={setLang} onClose={() => setLangOpen(false)} />
              )}
            </div>

            {/* WhatsApp CTA — desktop */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_-4px_rgba(37,211,102,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" />
              {t("nav.whatsapp")}
            </a>
          </nav>

          {/* Tablet / mobile right side */}
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            {/* Language switcher — tablet */}
            <div className="relative hidden sm:block lg:hidden" data-lang-panel>
              <button
                type="button"
                aria-label="Select language"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-xl border-2 px-2.5 py-1.5 text-xs font-bold transition-all",
                  langOpen
                    ? "border-accent bg-secondary text-accent"
                    : "border-border text-primary/70 hover:border-accent hover:text-accent",
                )}
              >
                <span className="text-sm leading-none">{currentLangOption.flag}</span>
                <ChevronDown className={cn("size-3 transition-transform", langOpen && "rotate-180")} />
              </button>
              {langOpen && (
                <LangPanel lang={lang} setLang={setLang} onClose={() => setLangOpen(false)} />
              )}
            </div>

            {/* WhatsApp — tablet */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_-4px_rgba(37,211,102,0.55)] transition-transform hover:-translate-y-0.5 sm:inline-flex lg:hidden"
            >
              <WhatsAppIcon className="size-4" />
              {t("nav.whatsapp")}
            </a>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-border bg-card text-primary lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background lg:hidden",
          mobileOpen ? "max-h-[90vh] overflow-y-auto" : "max-h-0",
        )}
        style={{ transition: "max-height 0.35s ease" }}
      >
        <nav className="shell flex flex-col gap-1 py-4">
          {NAV_KEYS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={closeAll}
              className="rounded-xl px-4 py-3 text-base font-semibold text-primary/85"
              activeProps={{ className: "bg-secondary text-accent" }}
            >
              {t(item.key)}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setMobileGallery((v) => !v)}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-primary/85"
          >
            {t("nav.gallery")}
            <ChevronDown className={cn("size-5 transition-transform", mobileGallery && "rotate-180")} />
          </button>
          {mobileGallery && (
            <div className="ml-3 flex flex-col gap-1 border-l-2 border-accent/40 pl-3">
              {GALLERY_KEYS.map((g) => (
                <Link
                  key={g.to}
                  to={g.to}
                  onClick={closeAll}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-primary/75"
                  activeProps={{ className: "bg-secondary text-accent" }}
                >
                  {t(g.key)}
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/contact"
            onClick={closeAll}
            className="rounded-xl px-4 py-3 text-base font-semibold text-primary/85"
            activeProps={{ className: "bg-secondary text-accent" }}
          >
            {t("nav.contact")}
          </Link>

          {/* Language selector — mobile drawer (square tiles) */}
          <div className="mt-2 rounded-2xl border border-border p-3">
            <div className="mb-2 flex items-center gap-2 px-1">
              <Globe className="size-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Language / ભાષા
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {LANG_OPTIONS.map((l) => {
                const active = lang === l.code;
                return (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLang(l.code)}
                    className={cn(
                      "relative flex flex-col items-center gap-1 rounded-xl border-2 px-3 py-3 text-center transition-all",
                      active
                        ? "border-accent bg-secondary text-accent"
                        : "border-border bg-card text-primary/70 hover:border-accent/50",
                    )}
                  >
                    {active && (
                      <span className="absolute right-1.5 top-1.5 flex size-4 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                    )}
                    <span className="text-xl leading-none">{l.flag}</span>
                    <span className="text-sm font-bold">{l.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* WhatsApp CTA — mobile drawer */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeAll}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="size-4" />
            {t("nav.chatWhatsapp")}
          </a>
          <a
            href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
            className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-primary"
          >
            {t("nav.emergency")} {HOSPITAL.emergency}
          </a>
        </nav>
      </div>
    </header>
  );
}
