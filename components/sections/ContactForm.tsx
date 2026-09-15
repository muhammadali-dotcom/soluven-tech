"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";

type Status = "idle" | "submitting" | "success" | "error";

const projectTypes = ["Website", "E-commerce", "Mobile App", "Custom Software", "Marketing", "Other"];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState("");

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
      setProjectType("");
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

      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold">
          What do you need? <span className="font-normal text-[var(--color-muted)]">(optional)</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <Pill
              key={type}
              label={type}
              active={projectType === type}
              onClick={() => setProjectType(type)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-semibold">
          Tell us about your project
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
        {status === "submitting" ? "Sending..." : "Send Project →"}
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
