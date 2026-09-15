import { FadeIn } from "@/components/motion/FadeIn";

const reasons = [
  {
    number: "01",
    title: "Business First",
    description:
      "We don't build technology just for the sake of technology. We start with your business goal.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "Fast, responsive and scalable solutions built using modern technologies.",
  },
  {
    number: "03",
    title: "Transparent Process",
    description:
      "Clear communication, milestones and pricing throughout the project.",
  },
  {
    number: "04",
    title: "Built to Scale",
    description:
      "We build with the future in mind, so your product can grow with your business.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Our relationship doesn't have to end when your website goes live.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-20 md:px-[85px] md:py-28">
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Why Soluven
        </p>
      </FadeIn>
      <FadeIn delay={0.05}>
        <h2 className="mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
          Why businesses choose Soluven.
        </h2>
      </FadeIn>

      <div className="mt-12 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {reasons.map((reason, index) => (
          <FadeIn key={reason.number} delay={index * 0.05}>
            <div className="flex flex-col gap-2 py-8 sm:flex-row sm:items-start sm:gap-10">
              <span className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--soluven-blue)] sm:w-16 sm:shrink-0">
                {reason.number}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-2 max-w-xl text-[var(--color-muted)]">
                  {reason.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
