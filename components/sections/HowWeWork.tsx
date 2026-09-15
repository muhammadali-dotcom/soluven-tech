import { FadeIn } from "@/components/motion/FadeIn";
import { VerticalProgressLine } from "@/components/motion/VerticalProgressLine";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business, users and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We define the scope, technology and roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "We create the user experience and visual direction.",
  },
  {
    number: "04",
    title: "Build",
    description: "Our developers turn the concept into a working product.",
  },
  {
    number: "05",
    title: "Test",
    description: "We test functionality, responsiveness and usability.",
  },
  {
    number: "06",
    title: "Launch",
    description: "We deploy your product and help you move forward.",
  },
];

export function HowWeWork() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          From idea to launch
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          How we work.
        </h2>
      </FadeIn>

      <div className="relative mt-16 max-w-2xl pl-10 sm:pl-14">
        <VerticalProgressLine />
        <div className="flex flex-col gap-12">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.05}>
              <div className="relative">
                <span
                  className="absolute -left-10 top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--soluven-blue)] bg-[var(--color-background)] font-[family-name:var(--font-heading)] text-xs font-bold text-[var(--soluven-blue)] sm:-left-14"
                >
                  {step.number}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-[var(--color-muted)]">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
