"use client";

import { useState, type FormEvent } from "react";
import {
  Buildings,
  ChartBar,
  Check,
  Clock,
  Code,
  CurrencyDollar,
  DeviceMobile,
  DotsThree,
  EnvelopeSimple,
  LockKey,
  Monitor,
  PencilSimpleLine,
  ShoppingCartSimple,
  User,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

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
  "min-h-[52px] w-full rounded-xl border border-[var(--color-border)] bg-[#FFFFFF] px-12 py-3 text-sm text-[#14272B] transition-colors placeholder:text-[var(--color-muted)] hover:border-[var(--color-muted)] focus:border-[#63CBF8] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14272B]";
const labelClasses = "text-sm font-bold text-[#14272B]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState<string[]>([]);

  function toggleProjectType(type: string) {
    setProjectType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = { ...Object.fromEntries(formData.entries()), projectType };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
      setProjectType([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            Name
          </label>
          <div className="relative">
            <User
              aria-hidden="true"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={fieldClasses}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <div className="relative">
            <EnvelopeSimple
              aria-hidden="true"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={fieldClasses}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className={labelClasses}>
          Company <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <div className="relative">
          <Buildings
            aria-hidden="true"
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
          />
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company or organization"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className={labelClasses}>
          What do you need? <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </span>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {projectTypes.map(({ label, value, Icon }) => {
            const selected = projectType.includes(value);

            return (
            <label
              key={value}
              className={`flex min-h-[52px] cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#14272B] ${
                selected
                  ? "border-[#63CBF8] bg-[#DDF5FF]"
                  : "border-[var(--color-border)] bg-[#FFFFFF] hover:border-[var(--color-muted)]"
              }`}
            >
              <span className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleProjectType(value)}
                  className="sr-only"
                />
                <Icon aria-hidden="true" size={22} className="text-[#14272B]" />
                <span>{label}</span>
              </span>
              {selected && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#63CBF8] text-[#14272B]">
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
        <div className="relative">
          <PencilSimpleLine
            aria-hidden="true"
            size={20}
            className="absolute left-4 top-4 text-[var(--color-muted)]"
          />
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="What are you building, improving or trying to fix?"
            className={`${fieldClasses} resize-y pl-12`}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className={labelClasses}>
            Budget range <span className="font-normal text-[var(--color-muted)]">(optional)</span>
          </label>
          <div className="relative">
            <CurrencyDollar
              aria-hidden="true"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={`${fieldClasses} appearance-none`}
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
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="timeline" className={labelClasses}>
            Ideal timeline <span className="font-normal text-[var(--color-muted)]">(optional)</span>
          </label>
          <div className="relative">
            <Clock
              aria-hidden="true"
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
            />
            <select
              id="timeline"
              name="timeline"
              defaultValue=""
              className={`${fieldClasses} appearance-none`}
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
          </div>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full min-h-[56px] bg-[#63CBF8] px-5 py-3 text-base font-bold text-[#14272B] shadow-[0_10px_22px_rgba(20,39,43,0.12)] transition-all hover:-translate-y-0.5 hover:bg-[#4ABFEF] hover:shadow-[0_14px_28px_rgba(20,39,43,0.16)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === "submitting" ? "Sending..." : "Send my project brief →"}
        </Button>
        <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-text-muted)]">
          <LockKey aria-hidden="true" size={16} />
          Your details stay private. No spam.
        </p>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-md border border-[var(--color-green)] bg-[var(--color-green)]/20 px-3 py-2.5 text-sm font-semibold"
        >
          Thanks. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-red-700/30 bg-red-700/10 px-3 py-2.5 text-sm font-semibold text-red-700"
        >
          Something went wrong. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
