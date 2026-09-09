"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="company" className="text-sm font-semibold">
          Company <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="projectType" className="text-sm font-semibold">
          Project type <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
        >
          <option value="">Select one</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
        />
      </div>

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send message"}
      </Button>

      {status === "success" && (
        <p role="status" className="text-sm font-semibold text-green-700">
          Thanks — we&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          Something went wrong. Please email us directly instead.
        </p>
      )}
    </form>
  );
}
