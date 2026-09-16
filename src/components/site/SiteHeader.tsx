import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Plus, X, Clock, Mail } from "lucide-react";
import { HOSPITAL } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type NavLeaf = { label: string; to: string };

const NAV: NavLeaf[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Lifesavers", to: "/doctors" },
  { label: "Departments", to: "/departments" },
  { label: "Services", to: "/services" },
  { label: "Health Packages", to: "/health-packages" },
];

const GALLERY: NavLeaf[] = [
  { label: "Photo Gallery", to: "/gallery/photos" },
  { label: "Video Gallery", to: "/gallery/videos" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGallery, setMobileGallery] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setGalleryOpen(false);
    setMobileGallery(false);
  };

  const linkClass =
    "relative whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-semibold text-primary/80 transition-colors hover:text-accent";
  const activeClass = "text-accent bg-secondary";

  return (
    <header className="sticky top-0 z-50">
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
            <Phone className="size-3.5" /> Emergency {HOSPITAL.emergency}
          </a>
        </div>
      </div>

      <div
        className={cn(
          "border-b border-border/70 bg-background/90 backdrop-blur-lg transition-shadow",
          scrolled && "shadow-[0_10px_30px_-24px_oklch(0.28_0.065_252/0.6)]",
        )}
      >
        <div className="shell flex flex-nowrap items-center justify-between gap-2 py-2.5 sm:gap-4 sm:py-3">
          <Link to="/" onClick={closeAll} className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl gradient-teal text-primary-foreground shadow-teal-glow sm:size-11 sm:rounded-2xl">
              <Plus className="size-6" strokeWidth={3} />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-sm font-bold text-primary sm:text-lg">
                Aadarsh
              </span>
              <span className="block truncate text-[8px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-[11px] sm:tracking-[0.18em]">
                Multispeciality Hospital
              </span>
            </span>
          </Link>

          <nav className="hidden flex-nowrap items-center gap-0 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className={linkClass}
                activeProps={{ className: activeClass }}
              >
                {item.label}
              </Link>
            ))}

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
                Gallery
                <ChevronDown
                  className={cn("size-4 shrink-0 transition-transform", galleryOpen && "rotate-180")}
                />
              </button>
              <div
                className={cn(
                  "absolute left-0 top-full w-52 origin-top pt-2 transition-all duration-200",
                  galleryOpen
                    ? "pointer-events-auto scale-100 opacity-100"
                    : "pointer-events-none scale-95 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-[var(--shadow-lift)]">
                  {GALLERY.map((g) => (
                    <Link
                      key={g.to}
                      to={g.to}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-primary/80 transition-colors hover:bg-secondary hover:text-accent"
                      activeProps={{ className: "bg-secondary text-accent" }}
                    >
                      {g.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={linkClass} activeProps={{ className: activeClass }}>
              Contact
            </Link>

            <Link
              to="/appointment"
              className="ml-2 shrink-0 whitespace-nowrap rounded-full gradient-teal px-4 py-2 text-sm font-semibold text-primary-foreground shadow-teal-glow transition-transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            <Link
              to="/contact"
              onClick={closeAll}
              className="flex w-11 flex-col items-center gap-0.5 text-[8px] font-semibold text-muted-foreground sm:hidden"
            >
              <Phone className="size-4 text-primary" />
              Contact
            </Link>
            <a
              href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
              className="flex w-12 flex-col items-center gap-0.5 text-[8px] font-semibold text-destructive sm:hidden"
            >
              <span className="grid size-5 place-items-center rounded-full bg-destructive text-destructive-foreground">
                <Plus className="size-3" strokeWidth={3} />
              </span>
              Emergency
            </a>
            <Link
              to="/appointment"
              className="hidden rounded-full gradient-teal px-4 py-2 text-sm font-semibold text-primary-foreground shadow-teal-glow transition-transform hover:-translate-y-0.5 sm:inline-flex lg:hidden"
            >
              Book Appointment
            </Link>
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

      <div
        className={cn(
          "overflow-hidden border-b border-border bg-background lg:hidden",
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0",
        )}
        style={{ transition: "max-height 0.35s ease" }}
      >
        <nav className="shell flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={closeAll}
              className="rounded-xl px-4 py-3 text-base font-semibold text-primary/85"
              activeProps={{ className: "bg-secondary text-accent" }}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setMobileGallery((v) => !v)}
            className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-primary/85"
          >
            Gallery
            <ChevronDown className={cn("size-5 transition-transform", mobileGallery && "rotate-180")} />
          </button>
          {mobileGallery && (
            <div className="ml-3 flex flex-col gap-1 border-l-2 border-accent/40 pl-3">
              {GALLERY.map((g) => (
                <Link
                  key={g.to}
                  to={g.to}
                  onClick={closeAll}
                  className="rounded-xl px-4 py-2.5 text-sm font-semibold text-primary/75"
                  activeProps={{ className: "bg-secondary text-accent" }}
                >
                  {g.label}
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
            Contact
          </Link>
          <Link
            to="/appointment"
            onClick={closeAll}
            className="mt-2 rounded-full gradient-teal px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Book Appointment
          </Link>
          <a
            href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
            className="rounded-full border border-border px-5 py-3 text-center text-sm font-semibold text-primary"
          >
            Emergency {HOSPITAL.emergency}
          </a>
        </nav>
      </div>
    </header>
  );
}
