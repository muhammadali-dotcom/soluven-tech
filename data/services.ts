export type ServiceVariant = "blue" | "green" | "ink";

export type Service = {
  slug: string;
  name: string;
  heading: string;
  summary: string;
  description: string;
  included: string[];
  ctaLabel: string;
  variant: ServiceVariant;
  whoItsFor?: string;
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Websites",
    heading: "Websites that earn attention.",
    summary: "Strategic, responsive websites built to convert.",
    description:
      "Strategic, responsive websites that explain your value quickly and turn interest into action.",
    included: ["Brand websites", "Web applications", "CMS development"],
    ctaLabel: "Build your website",
    variant: "blue",
    whoItsFor:
      "Businesses that need a fast, credible web presence built to perform, not a templated site.",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    heading: "Commerce built for momentum.",
    summary: "Storefronts designed around conversion and growth.",
    description:
      "Fast, intuitive storefronts designed around customer confidence, conversion and repeat growth.",
    included: ["Shopify stores", "Custom ecommerce", "Conversion optimisation"],
    ctaLabel: "Grow your store",
    variant: "green",
    whoItsFor:
      "Brands launching or migrating an online store that need it done right the first time.",
  },
  {
    slug: "custom-software",
    name: "Custom software",
    heading: "Software shaped around your work.",
    summary: "Purpose-built products and internal systems.",
    description:
      "Purpose-built products and internal systems that solve the problems generic tools cannot.",
    included: ["Custom platforms", "Process automation", "Product engineering"],
    ctaLabel: "Discuss your product",
    variant: "ink",
    whoItsFor:
      "Founders and teams who need a product or internal tool built around how they actually work.",
  },
];
