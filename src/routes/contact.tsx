import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { HOSPITAL } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Aadarsh Multispeciality Hospital, Nagpur" },
      {
        name: "description",
        content:
          "Address, phone numbers, email and directions to Aadarsh Multispeciality Hospital, Civil Lines, Nagpur. Emergency helpline open 24x7.",
      },
      { property: "og:title", content: "Contact Aadarsh Multispeciality Hospital" },
      {
        property: "og:description",
        content: "Reach our Nagpur helpdesk, emergency line or send us a message.",
      },
    ],
  }),
  component: Contact,
});

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

function Contact() {
  const [values, setValues] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const set = (key: string, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 3) next["name"] = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim())) next["phone"] = "Enter a valid phone number.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next["email"] = "Enter a valid email address.";
    if (values.message.trim().length < 10) next["message"] = "Please add a few more details.";
    setErrors(next);
    if (Object.keys(next).length) {
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setValues({ name: "", phone: "", email: "", subject: "", message: "" });
      toast.success("Message sent", {
        description: "Our helpdesk replies within one working day.",
      });
    }, 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here, day and night"
        description="Call the helpdesk for appointments and reports, the emergency line for urgent help, or send a message and we'll get back within a working day."
        current="Contact"
      />

      <section className="section-pad">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MapPin, title: "Address", body: HOSPITAL.address },
            { icon: Phone, title: "Phone", body: `${HOSPITAL.phone} · Emergency ${HOSPITAL.emergency}` },
            { icon: Mail, title: "Email", body: HOSPITAL.email },
            { icon: Clock, title: "Timings", body: HOSPITAL.hours },
          ].map((c) => (
            <article key={c.title} className="surface-card p-6">
              <span className="grid size-11 place-items-center rounded-xl gradient-teal text-primary-foreground">
                <c.icon className="size-5" />
              </span>
              <h2 className="mt-4 text-base font-bold text-primary">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-4">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Send a message" title="Ask us anything" center={false} />
            <form onSubmit={submit} noValidate className="surface-card mt-8 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cname" className="mb-1.5 block text-sm font-semibold text-primary">
                    Full name *
                  </label>
                  <input
                    id="cname"
                    className={field}
                    placeholder="e.g. Ramesh Patil"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {errors["name"] && <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>}
                </div>
                <div>
                  <label htmlFor="cphone" className="mb-1.5 block text-sm font-semibold text-primary">
                    Phone *
                  </label>
                  <input
                    id="cphone"
                    className={field}
                    placeholder="+91 98765 43210"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                  {errors["phone"] && <p className="mt-1.5 text-xs text-destructive">{errors["phone"]}</p>}
                </div>
                <div>
                  <label htmlFor="cemail" className="mb-1.5 block text-sm font-semibold text-primary">
                    Email (optional)
                  </label>
                  <input
                    id="cemail"
                    className={field}
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  {errors["email"] && <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>}
                </div>
                <div>
                  <label
                    htmlFor="csubject"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    Subject
                  </label>
                  <input
                    id="csubject"
                    className={field}
                    placeholder="Appointment, reports, billing…"
                    value={values.subject}
                    onChange={(e) => set("subject", e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="cmessage"
                    className="mb-1.5 block text-sm font-semibold text-primary"
                  >
                    Message *
                  </label>
                  <textarea
                    id="cmessage"
                    rows={5}
                    className={field}
                    placeholder="How can we help you?"
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                  {errors["message"] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-teal-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
              >
                {sending ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
                {sending ? "Sending…" : "Send message"}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                This is a demonstration form — no message is stored or transmitted.
              </p>
            </form>
          </div>

          <div className="grid gap-6 self-start">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                title="Aadarsh Multispeciality Hospital location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.0500%2C21.1300%2C79.1200%2C21.1750&layer=mapnik"
                loading="lazy"
                className="h-80 w-full border-0"
              />
            </div>
            <div className="surface-card p-6">
              <h3 className="text-base font-bold text-primary">Getting here</h3>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                <li>5 minutes from Nagpur Junction railway station by road.</li>
                <li>Free two-wheeler and paid four-wheeler parking on campus.</li>
                <li>Wheelchair access and porter assistance at the main portico.</li>
              </ul>
              <Link
                to="/appointment"
                className="mt-6 inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20" />
    </>
  );
}
