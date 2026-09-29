"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  CaretDown,
  ChartBar,
  Check,
  Code,
  DeviceMobile,
  DotsThree,
  LockKey,
  Monitor,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { FieldError } from "@/components/ui/FieldError";
import { FormSubmitError } from "@/components/ui/FormSubmitError";
import { validateContact, type ContactField } from "@/lib/contact-validation";

type Status = "idle" | "submitting" | "success" | "error" | "rate-limited";
type FieldErrors = Partial<Record<ContactField, string>>;

const projectTypes: { label: string; value: string; Icon: Icon }[] = [
  { label: "Website", value: "Website", Icon: Monitor },
  { label: "E-commerce", value: "E-commerce", Icon: ShoppingCartSimple },
  { label: "Mobile app", value: "Mobile App", Icon: DeviceMobile },
  { label: "Custom software", value: "Custom Software", Icon: Code },
  { label: "Marketing", value: "Marketing", Icon: ChartBar },
  { label: "Other", value: "Other", Icon: DotsThree },
];

const budgetOptions = [
  "Select a budget range",
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $7,500",
  "$7,500+",
];

const timelineOptions = [
  "Select a timeline",
  "As soon as possible",
  "2 - 4 weeks",
  "1 - 3 months",
  "Flexible",
];

const fieldClasses =
  "min-h-[52px] w-full rounded-sm border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-[var(--color-ink)] transition-colors placeholder:text-[var(--color-muted)] hover:border-[var(--color-muted)] focus:border-[var(--soluven-blue)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)] aria-[invalid=true]:border-red-700";
const labelClasses = "text-sm font-bold text-[var(--color-ink)]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState<string[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});

  function showErrors(form: HTMLFormElement, fieldErrors: FieldErrors) {
    setErrors(fieldErrors);
    const first = (["name", "email", "message"] as const).find((f) => fieldErrors[f]);
    if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
  }

  function clearError(field: string) {
    if (!(field in errors)) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field as ContactField];
      return next;
    });
  }

  function toggleProjectType(type: string) {
    setProjectType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // currentTarget is null once we await, so hold on to the form.
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = { ...Object.fromEntries(formData.entries()), projectType };

    const result = validateContact(payload);
    if (!result.ok) {
      showErrors(form, result.errors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 429) {
        setStatus("rate-limited");
        return;
      }
      if (res.status === 400) {
        const data = (await res.json().catch(() => null)) as { fields?: FieldErrors } | null;
        if (data?.fields && Object.keys(data.fields).length > 0) {
          showErrors(form, data.fields);
          setStatus("idle");
          return;
        }
      }
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setProjectType([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onInput={(event) => clearError((event.target as HTMLInputElement).name)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it. */}
      <div aria-hidden="true" className="sr-only">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <input
            id="name"
            name="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            type="text"
            required
            placeholder="Your name"
            maxLength={100}
            className={fieldClasses}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            type="email"
            required
            placeholder="you@company.com"
            maxLength={254}
            className={fieldClasses}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className={labelClasses}>
          Company <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company or organization"
          className={fieldClasses}
        />
      </div>

      <div className="flex flex-col gap-3">
        <span className={labelClasses}>
          What do you need? <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </span>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {projectTypes.map(({ label, value, Icon }) => {
            const selected = projectType.includes(value);

            return (
            <label
              key={value}
              className={`flex min-h-[52px] cursor-pointer items-center justify-between gap-3 rounded-sm border px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[var(--color-ink)] ${
                selected
                  ? "border-[var(--soluven-blue)] bg-[var(--soluven-blue)]/15"
                  : "border-[var(--color-border)] bg-[var(--color-background)] hover:border-[var(--color-muted)]"
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleProjectType(value)}
                  className="sr-only"
                />
                <Icon aria-hidden="true" size={22} className="text-[var(--color-ink)]" />
                <span>{label}</span>
              </span>
              {selected && (
                <span className="flex h-5 w-5 items-center justify-center bg-[var(--soluven-blue)] text-[var(--soluven-ink)]">
                  <Check aria-hidden="true" size={13} weight="bold" />
                  <span className="sr-only">Selected</span>
                </span>
              )}
            </label>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClasses}>
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={5}
          required
          placeholder="What are you building, improving or trying to fix?"
          maxLength={5000}
          className={`${fieldClasses} resize-y`}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className={labelClasses}>
            Budget range <span className="font-normal text-[var(--color-muted)]">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={`${fieldClasses} appearance-none pr-10`}
            >
              <option value="" disabled>
                {budgetOptions[0]}
              </option>
              {budgetOptions.slice(1).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <CaretDown
              aria-hidden="true"
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className={labelClasses}>
            Ideal timeline <span className="font-normal text-[var(--color-muted)]">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className={`${fieldClasses} appearance-none pr-10`}
            >
              <option value="" disabled>
                {timelineOptions[0]}
              </option>
              {timelineOptions.slice(1).map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <CaretDown
              aria-hidden="true"
              size={16}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
          </div>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full min-h-[56px] px-5 py-3 text-base font-bold disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send my project brief →"}
        </Button>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-text-muted)]">
          <LockKey aria-hidden="true" size={16} />
          <span>
            Your details stay private. No spam. See our{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              privacy policy
            </Link>
            .
          </span>
        </p>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-sm border border-[var(--color-green)] bg-[var(--color-green)]/20 px-3 py-2.5 text-sm font-semibold"
        >
          Thanks. We&apos;ll get back to you soon.
        </p>
      )}
      {(status === "error" || status === "rate-limited") && (
        <FormSubmitError
          rateLimited={status === "rate-limited"}
          className="rounded-sm border border-red-700/30 bg-red-700/10 px-3 py-2.5 text-sm font-semibold text-red-700"
        />
      )}
    </form>
  );
}
