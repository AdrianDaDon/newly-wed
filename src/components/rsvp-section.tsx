"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { weddingConfig } from "@/config/wedding";
import { cn } from "@/lib/utils";

const { rsvp, couple } = weddingConfig;
const { fields } = rsvp;

type Attendance = (typeof fields.attendance.options)[number]["value"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  attendance: Attendance | "";
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  attendance: "",
  message: "",
};

function buildMailto(data: FormState) {
  const attendanceLabel =
    fields.attendance.options.find((o) => o.value === data.attendance)
      ?.label ?? data.attendance;

  const body = [
    `Full name: ${data.name}`,
    data.email ? `Email: ${data.email}` : null,
    data.phone ? `Phone: ${data.phone}` : null,
    data.attendance ? `Attending: ${attendanceLabel}` : null,
    data.message ? `Message: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const subject = encodeURIComponent(
    `RSVP — ${data.name} (${couple.groom} & ${couple.bride})`,
  );

  return `mailto:${rsvp.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
}

export function RsvpSection() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    window.location.href = buildMailto(form);
    setSubmitted(true);
  }

  return (
    <section
      id="rsvp"
      className="snap-section relative isolate flex scroll-mt-20 items-center overflow-x-hidden bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(233,201,176,0.22),transparent_50%),radial-gradient(ellipse_at_90%_80%,rgba(209,145,136,0.2),transparent_45%)]"
      />

      <div className="mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <div className="rsvp-intro mx-auto w-full max-w-md min-w-0 text-center text-primary-foreground lg:mx-0 lg:max-w-lg lg:text-left">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-primary-foreground/70 uppercase sm:text-xs sm:tracking-[0.28em]">
            {rsvp.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance break-words sm:text-5xl lg:text-6xl">
            {rsvp.title}
          </h2>
          <p className="mt-4 text-sm text-pretty text-primary-foreground/80 sm:mt-6 sm:text-base lg:text-lg">
            {rsvp.message}
          </p>

          <ul className="mt-6 space-y-3 sm:mt-8">
            {rsvp.notices.map((notice) => (
              <li
                key={notice.text}
                className={cn(
                  "rounded-2xl bg-secondary px-4 py-3.5 text-left text-sm font-semibold text-pretty shadow-sm ring-1 sm:px-5 sm:py-4 sm:text-base",
                  notice.accent === "red"
                    ? "text-red-600 ring-red-600/25"
                    : "text-secondary-foreground ring-secondary-foreground/10",
                  notice.uppercase && "uppercase tracking-wide",
                )}
              >
                {notice.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="rsvp-form mx-auto w-full max-w-xl min-w-0 lg:mx-0 lg:max-w-none">
          {submitted ? (
            <div
              className="flex flex-col items-center justify-center rounded-[1.75rem] bg-background px-6 py-12 text-center text-foreground shadow-[0_24px_60px_-28px_rgba(28,10,9,0.45)] sm:px-10 sm:py-16"
              role="status"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden="true" className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                {rsvp.successTitle}
              </h3>
              <p className="mt-3 max-w-sm text-sm text-pretty text-muted-foreground sm:text-base">
                {rsvp.successMessage}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialState);
                }}
                className="mt-8 inline-flex min-h-11 items-center justify-center text-sm font-semibold text-primary hover:text-primary/80"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[1.75rem] bg-background px-5 py-7 text-foreground shadow-[0_24px_60px_-28px_rgba(28,10,9,0.45)] sm:px-8 sm:py-9"
            >
              <div className="grid gap-5 sm:gap-6">
                <Field label={fields.name.label} htmlFor="rsvp-name" required>
                  <input
                    id="rsvp-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={fields.name.placeholder}
                    className={fieldControlClass}
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                  <Field label={fields.email.label} htmlFor="rsvp-email">
                    <input
                      id="rsvp-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder={fields.email.placeholder}
                      className={fieldControlClass}
                    />
                  </Field>

                  <Field label={fields.phone.label} htmlFor="rsvp-phone">
                    <input
                      id="rsvp-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder={fields.phone.placeholder}
                      className={fieldControlClass}
                    />
                  </Field>
                </div>

                <Field
                  label={fields.attendance.label}
                  htmlFor="rsvp-attendance"
                >
                  <div className="relative">
                    <select
                      id="rsvp-attendance"
                      name="attendance"
                      value={form.attendance}
                      onChange={(e) =>
                        update(
                          "attendance",
                          e.target.value as Attendance | "",
                        )
                      }
                      className={cn(
                        fieldControlClass,
                        "appearance-none pr-10",
                        !form.attendance && "text-muted-foreground",
                      )}
                    >
                      <option value="" disabled>
                        {fields.attendance.placeholder}
                      </option>
                      {fields.attendance.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-muted-foreground"
                    />
                  </div>
                </Field>

                <Field label={fields.message.label} htmlFor="rsvp-message">
                  <textarea
                    id="rsvp-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder={fields.message.placeholder}
                    className={cn(fieldControlClass, "min-h-28 resize-y py-3")}
                  />
                </Field>

                {error && (
                  <p className="text-sm text-destructive" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:self-start"
                >
                  {rsvp.submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const fieldControlClass =
  "min-h-11 w-full min-w-0 rounded-xl border border-border bg-muted/30 px-3.5 text-base text-foreground shadow-none outline-none transition-[color,box-shadow,background-color] placeholder:text-muted-foreground focus-visible:border-primary focus-visible:bg-background focus-visible:ring-3 focus-visible:ring-primary/20 sm:text-sm";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0 space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {required ? (
          <span className="text-primary" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
