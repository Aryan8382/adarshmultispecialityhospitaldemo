import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Plus, Youtube } from "lucide-react";
import { DEPARTMENTS, HOSPITAL } from "@/lib/site-data";

const quickLinks = [
  { label: "About Us", to: "/about" as const },
  { label: "Our Lifesavers", to: "/doctors" as const },
  { label: "Departments", to: "/departments" as const },
  { label: "Services", to: "/services" as const },
  { label: "Health Packages", to: "/health-packages" as const },
  { label: "Photo Gallery", to: "/gallery/photos" as const },
  { label: "Video Gallery", to: "/gallery/videos" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteFooter() {
  return (
    <footer className="gradient-navy text-primary-foreground">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-2xl gradient-teal">
              <Plus className="size-5" strokeWidth={3} />
            </span>
            <span className="font-display text-lg font-bold">Aadarsh Hospital</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            A 150-bed multispeciality hospital in Nagpur delivering emergency, surgical and
            preventive care with warmth, transparency and modern technology.
          </p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Social media"
                className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-light">
            Quick Links
          </h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-teal-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-light">
            Departments
          </h3>
          <ul className="mt-4 grid gap-2.5 text-sm text-primary-foreground/80">
            {DEPARTMENTS.slice(0, 7).map((d) => (
              <li key={d.slug}>
                <Link to="/departments" className="transition-colors hover:text-teal-light">
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-teal-light">
            Reach Us
          </h3>
          <ul className="mt-4 grid gap-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-teal-light" />
              <span>{HOSPITAL.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-teal-light" />
              <span>
                <a className="hover:text-teal-light" href={`tel:${HOSPITAL.phone.replace(/\s/g, "")}`}>
                  {HOSPITAL.phone}
                </a>
                <br />
                <a
                  className="hover:text-teal-light"
                  href={`tel:${HOSPITAL.emergency.replace(/\s/g, "")}`}
                >
                  {HOSPITAL.emergency} (emergency)
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-teal-light" />
              <a className="hover:text-teal-light" href={`mailto:${HOSPITAL.email}`}>
                {HOSPITAL.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-teal-light" />
              <span>{HOSPITAL.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="shell flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/65 sm:flex-row">
          <p>© {new Date().getFullYear()} Aadarsh Multispeciality Hospital. All rights reserved.</p>
          <p>Sample content shown for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
