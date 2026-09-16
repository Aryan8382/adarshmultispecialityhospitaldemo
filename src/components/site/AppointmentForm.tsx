import { useState } from "react";
import { CalendarCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { DEPARTMENTS, DOCTORS } from "@/lib/site-data";

type Values = {
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message: string;
};

const EMPTY: Values = {
  name: "",
  phone: "",
  email: "",
  department: "",
  doctor: "",
  date: "",
  time: "",
  message: "",
};

const SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

const field =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

export function AppointmentForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<Values | null>(null);

  const today = new Date().toISOString().slice(0, 10);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value, ...(key === "department" ? { doctor: "" } : {}) }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const doctorOptions = values.department
    ? DOCTORS.filter((d) => d.department === values.department)
    : DOCTORS;

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 3) next.name = "Please enter your full name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim()))
      next.phone = "Enter a valid contact number.";
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = "Enter a valid email address.";
    if (!values.department) next.department = "Select a department.";
    if (!values.date) next.date = "Choose a preferred date.";
    else if (values.date < today) next.date = "Please choose today or a later date.";
    if (!values.time) next.time = "Choose a preferred time slot.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please correct the highlighted fields.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setConfirmed(values);
      setValues(EMPTY);
      toast.success("Appointment request received", {
        description: "Our front desk will call you shortly to confirm your slot.",
      });
    }, 900);
  };

  if (confirmed) {
    return (
      <div className="surface-card p-8 text-center">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl gradient-teal text-primary-foreground">
          <CalendarCheck className="size-7" />
        </span>
        <h3 className="mt-5 text-xl font-bold text-primary">Request received, {confirmed.name}!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We have noted your preference for{" "}
          <strong className="text-primary">{confirmed.department}</strong>
          {confirmed.doctor ? ` with ${confirmed.doctor}` : ""} on{" "}
          <strong className="text-primary">{confirmed.date}</strong> at{" "}
          <strong className="text-primary">{confirmed.time}</strong>. Our team will call{" "}
          {confirmed.phone} within 30 minutes to confirm.
        </p>
        <button
          type="button"
          onClick={() => setConfirmed(null)}
          className="mt-6 rounded-full gradient-teal px-6 py-3 text-sm font-semibold text-primary-foreground shadow-teal-glow"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="surface-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary">
            Full name *
          </label>
          <input
            id="name"
            className={field}
            placeholder="e.g. Ramesh Patil"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-primary">
            Mobile number *
          </label>
          <input
            id="phone"
            className={field}
            placeholder="+91 98765 43210"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-primary">
            Email (optional)
          </label>
          <input
            id="email"
            className={field}
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
          />
          {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="department" className="mb-1.5 block text-sm font-semibold text-primary">
            Department *
          </label>
          <select
            id="department"
            className={field}
            value={values.department}
            onChange={(e) => set("department", e.target.value)}
          >
            <option value="">Select a department</option>
            {DEPARTMENTS.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name}
              </option>
            ))}
            {["Cardiology", "Neurology", "Orthopaedics", "Paediatrics", "Radiology & Imaging", "Obstetrics & Gynaecology"].map(
              (d) => (
                <option key={d} value={d}>
                  {d} (consultation)
                </option>
              ),
            )}
          </select>
          {errors.department && (
            <p className="mt-1.5 text-xs text-destructive">{errors.department}</p>
          )}
        </div>
        <div>
          <label htmlFor="doctor" className="mb-1.5 block text-sm font-semibold text-primary">
            Preferred doctor
          </label>
          <select
            id="doctor"
            className={field}
            value={values.doctor}
            onChange={(e) => set("doctor", e.target.value)}
          >
            <option value="">Any available doctor</option>
            {doctorOptions.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name} — {d.department}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-primary">
            Preferred date *
          </label>
          <input
            id="date"
            type="date"
            min={today}
            className={field}
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
          />
          {errors.date && <p className="mt-1.5 text-xs text-destructive">{errors.date}</p>}
        </div>
        <div className="sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-primary">Preferred time *</span>
          <div className="flex flex-wrap gap-2">
            {SLOTS.map((slot) => {
              const active = values.time === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => set("time", slot)}
                  className={
                    active
                      ? "rounded-full gradient-teal px-4 py-2 text-xs font-semibold text-primary-foreground shadow-teal-glow"
                      : "rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-primary/75 transition-colors hover:border-accent hover:text-accent"
                  }
                >
                  {slot}
                </button>
              );
            })}
          </div>
          {errors.time && <p className="mt-1.5 text-xs text-destructive">{errors.time}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-primary">
            Describe your concern (optional)
          </label>
          <textarea
            id="message"
            rows={4}
            className={field}
            placeholder="Symptoms, previous reports, or anything we should know."
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-teal px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-teal-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
      >
        {submitting ? <Loader2 className="size-4 animate-spin" /> : <CalendarCheck className="size-4" />}
        {submitting ? "Sending request..." : "Request appointment"}
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        This is a demonstration form — requests are confirmed by phone and no data is stored.
      </p>
    </form>
  );
}
