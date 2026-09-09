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
    slug: "website-development",
    name: "Website development",
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
    slug: "software-development",
    name: "Software development",
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
  {
    slug: "logo-design",
    name: "Logo designing",
    heading: "A mark that carries the brand.",
    summary: "Distinctive logos built to work everywhere your brand shows up.",
    description:
      "A distinctive, versatile logo designed to hold up across your website, product, and print — not just a nice picture.",
    included: ["Logo concepts", "Brand colour & type pairing", "Usage guidelines"],
    ctaLabel: "Design your logo",
    variant: "blue",
    whoItsFor:
      "New businesses and rebrands that need a mark they can build a visual identity around.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile app development",
    heading: "Apps built for daily use.",
    summary: "iOS and Android apps designed around real user habits.",
    description:
      "Native and cross-platform mobile apps designed for daily use, not just a launch-day demo.",
    included: ["iOS & Android apps", "Cross-platform builds", "App store readiness"],
    ctaLabel: "Build your app",
    variant: "green",
    whoItsFor:
      "Teams taking a product mobile-first or extending an existing platform to iOS and Android.",
  },
  {
    slug: "digital-marketing",
    name: "Digital marketing",
    heading: "Marketing tied to real outcomes.",
    summary: "Campaigns and funnels built around measurable results.",
    description:
      "Digital marketing built around measurable outcomes — traffic, leads, and conversions tied to a clear funnel, not vanity metrics.",
    included: ["Campaign strategy", "Landing page funnels", "Performance tracking"],
    ctaLabel: "Plan your campaign",
    variant: "ink",
    whoItsFor:
      "Businesses that need marketing efforts connected to their actual website and conversion goals.",
  },
  {
    slug: "social-media-marketing",
    name: "Social media marketing",
    heading: "A presence that stays consistent.",
    summary: "Content and management built for steady, on-brand growth.",
    description:
      "Consistent, on-brand social content and account management built for steady growth rather than one-off posts.",
    included: ["Content planning", "Community management", "Platform strategy"],
    ctaLabel: "Grow your presence",
    variant: "blue",
    whoItsFor:
      "Brands that need a consistent social presence without managing it in-house.",
  },
  {
    slug: "seo",
    name: "Search engine optimization",
    heading: "Findable when it matters.",
    summary: "Technical and content SEO built into how the site is built.",
    description:
      "Technical and content SEO built into the site itself — structure, metadata, and performance — so it's found by the people looking for it.",
    included: ["Technical SEO audits", "On-page optimisation", "Structured data & metadata"],
    ctaLabel: "Improve your ranking",
    variant: "green",
    whoItsFor:
      "Businesses whose website should be doing more of the work to bring in traffic.",
  },
];
