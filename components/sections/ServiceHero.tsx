import type { ServiceHeroContent } from "@/data/services";
import { PageHero } from "@/components/sections/PageHero";

type ServiceHeroProps = ServiceHeroContent & {
  ctaLabel: string;
};

export function ServiceHero({ eyebrow, headline, description, facts, ctaLabel }: ServiceHeroProps) {
  return (
    <PageHero
      theme="dark"
      backLink={{ label: "All services", href: "/services" }}
      eyebrow={eyebrow}
      headline={headline}
      description={description}
      primaryCta={{ label: ctaLabel, href: "/contact" }}
      secondaryCta={{ label: "See how we work", href: "/why-soluven" }}
      items={facts}
    />
  );
}
