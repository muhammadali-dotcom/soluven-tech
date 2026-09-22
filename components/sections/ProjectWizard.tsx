"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  DeviceMobile,
  Code,
  PenNib,
  Megaphone,
  DotsThree,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { FadeIn } from "@/components/motion/FadeIn";

type Status = "idle" | "submitting" | "success" | "error";

const categories = [
  { value: "Website", icon: Globe, label: "Website" },
  { value: "Online Store", icon: ShoppingCart, label: "Online Store" },
  { value: "Mobile App", icon: DeviceMobile, label: "Mobile App" },
  { value: "Custom Software", icon: Code, label: "Custom Software" },
  { value: "Branding", icon: PenNib, label: "Branding" },
  { value: "Digital Marketing", icon: Megaphone, label: "Digital Marketing" },
  { value: "Something else", icon: DotsThree, label: "Something else" },
];

const subtypesByCategory: Record<string, string[]> = {
  Website: ["Business", "Portfolio", "Landing Page", "Corporate", "Web Application"],
  "Online Store": ["Shopify", "Custom store", "Product catalog", "Marketplace"],
  "Mobile App": ["iOS", "Android", "Cross-platform"],
  "Custom Software": ["CRM", "Dashboard", "Internal tool", "Automation"],
  Branding: ["Logo", "Full brand identity"],
  "Digital Marketing": ["SEO", "Social media", "Paid campaigns"],
};

const budgets = [
  "Under $1,000",
  "$1,000–$5,000",
  "$5,000–$15,000",
  "$15,000+",
  "Not sure yet",
];

type Answers = {
  category: string;
  subtype: string;
  budget: string;
  description: string;
  name: string;
  email: string;
};

const initialAnswers: Answers = {
  category: "",
  subtype: "",
  budget: "",
  description: "",
  name: "",
  email: "",
};

export function ProjectWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [status, setStatus] = useState<Status>("idle");

  const hasSubtype = Boolean(subtypesByCategory[answers.category]);
  const steps = hasSubtype
    ? ["category", "subtype", "budget", "description", "details"]
    : ["category", "budget", "description", "details"];
  const currentKey = steps[step];

  function goNext() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function goBack() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const projectType = [answers.category, answers.subtype].filter(Boolean).join(" / ");
    const message = `Budget: ${answers.budget}\n\n${answers.description}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          email: answers.email,
          message,
          projectType,
          category: answers.category,
          budget: answers.budget,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Start your project
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          What are you looking to build?
        </h2>
      </FadeIn>

      <div className="mt-12 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12">
        {status === "success" ? (
          <p role="status" className="text-lg font-semibold text-green-700">
            Thanks, {answers.name || "there"}. We&apos;ll get back to you soon.
          </p>
        ) : (
          <>
            {steps.length > 1 && (
              <div className="mb-8 flex items-center gap-2">
                {steps.map((key, index) => (
                  <span
                    key={key}
                    aria-hidden="true"
                    className={`h-1.5 flex-1 rounded-full ${
                      index <= step ? "bg-[var(--soluven-blue)]" : "bg-[var(--color-border)]"
                    }`}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentKey}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {currentKey === "category" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                      What are you looking to build?
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {categories.map((option) => (
                        <Pill
                          key={option.value}
                          label={option.label}
                          icon={option.icon}
                          active={answers.category === option.value}
                          onClick={() => {
                            setAnswers((a) => ({ ...a, category: option.value, subtype: "" }));
                            goNext();
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "subtype" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                      What type of {answers.category.toLowerCase()}?
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {subtypesByCategory[answers.category]?.map((option) => (
                        <Pill
                          key={option}
                          label={option}
                          active={answers.subtype === option}
                          onClick={() => {
                            setAnswers((a) => ({ ...a, subtype: option }));
                            goNext();
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "budget" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                      What&apos;s your approximate budget?
                    </h3>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {budgets.map((option) => (
                        <Pill
                          key={option}
                          label={option}
                          active={answers.budget === option}
                          onClick={() => {
                            setAnswers((a) => ({ ...a, budget: option }));
                            goNext();
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentKey === "description" && (
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                      Tell us about your project.
                    </h3>
                    <textarea
                      value={answers.description}
                      onChange={(e) =>
                        setAnswers((a) => ({ ...a, description: e.target.value }))
                      }
                      rows={5}
                      className="mt-6 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
                      placeholder="What are you trying to achieve?"
                    />
                    <Button
                      type="button"
                      className="mt-6"
                      disabled={!answers.description.trim()}
                      onClick={goNext}
                    >
                      Continue
                    </Button>
                  </div>
                )}

                {currentKey === "details" && (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                      Your details
                    </h3>
                    <div className="mt-6 flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="wizard-name" className="text-sm font-semibold">
                          Name
                        </label>
                        <input
                          id="wizard-name"
                          type="text"
                          required
                          value={answers.name}
                          onChange={(e) =>
                            setAnswers((a) => ({ ...a, name: e.target.value }))
                          }
                          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="wizard-email" className="text-sm font-semibold">
                          Email
                        </label>
                        <input
                          id="wizard-email"
                          type="email"
                          required
                          value={answers.email}
                          onChange={(e) =>
                            setAnswers((a) => ({ ...a, email: e.target.value }))
                          }
                          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3"
                        />
                      </div>
                      <Button type="submit" disabled={status === "submitting"}>
                        {status === "submitting" ? "Sending..." : "Send Project Request →"}
                      </Button>
                      {status === "error" && (
                        <p role="alert" className="text-sm font-semibold text-red-700">
                          Something went wrong. Please email us directly instead.
                        </p>
                      )}
                    </div>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            {step > 0 && (
              <button
                type="button"
                onClick={goBack}
                className="mt-8 text-sm font-semibold underline decoration-transparent underline-offset-4 hover:decoration-current"
              >
                ← Back
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
