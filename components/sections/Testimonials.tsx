import { testimonials } from "@/data/testimonials";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-24">
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold md:text-4xl">
        What clients say
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.name}>
            <Card className="h-full">
              <p className="text-lg leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold">{testimonial.name}</p>
              <p className="text-sm text-[var(--color-text-muted)]">
                {testimonial.role}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
