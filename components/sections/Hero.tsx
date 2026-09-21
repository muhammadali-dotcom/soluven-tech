import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { Typewriter } from "@/components/ui/Typewriter";
import { whatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section className="section-dark relative h-[100svh] w-full overflow-hidden bg-[var(--color-background)]">
      <AnimatedShaderHero
        headline={{
          line1: (
            <span>
              Building{" "}
              <Typewriter
                words={["websites", "apps", "software", "solutions"]}
              />
            </span>
          ),
          line2: "for the future you see.",
        }}
        subtitle="We turn ambitious ideas into websites, ecommerce experiences and custom software built to move your business forward."
        buttons={{
          primary: {
            text: "Tell us your idea",
            href: "/contact",
          },
          ...(whatsappLink
            ? {
              secondary: {
                text: "Chat on WhatsApp",
                href: whatsappLink,
              },
            }
            : {}),
        }}
      />
    </section>
  );
}