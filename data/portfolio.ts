export type PortfolioProject = {
  slug: string;
  title: string;
  category: "ecommerce" | "software";
  visual: "browser" | "ops" | "mobile";
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  isConcept: true;
  link?: string;
  image?: string;
  featured?: boolean;
  role?: string;
  relatedService?: string;
};

// Fictional concept projects illustrating what Soluven can build. These are
// not client case studies, and they avoid fake metrics, testimonials, or logos.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "evergreen-goods",
    title: "Evergreen Goods",
    category: "ecommerce",
    visual: "browser",
    description:
      "A fictional ecommerce storefront concept for an everyday-living brand.",
    problem:
      "An everyday-living brand needs a storefront that feels as considered as its products, without slowing down checkout.",
    approach:
      "A calm, editorial product presentation paired with a streamlined cart and checkout flow built for repeat purchases.",
    outcome:
      "A sample storefront direction that balances brand feel with the speed and clarity customers expect from checkout.",
    tech: ["Next.js", "Shopify"],
    isConcept: true,
    featured: true,
    relatedService: "ecommerce",
  },
  {
    slug: "clearflow",
    title: "Clearflow",
    category: "software",
    visual: "ops",
    description:
      "A fictional operations dashboard concept for teams managing complex work.",
    problem:
      "Teams running multi-step operations often lose track of status across scattered spreadsheets and tools.",
    approach:
      "A single operations dashboard that surfaces what needs attention now, with clear ownership at every stage.",
    outcome:
      "A sample platform direction that replaces status-chasing with a clear, always-current view of the work.",
    tech: ["Next.js", "TypeScript"],
    isConcept: true,
    featured: true,
    relatedService: "software-development",
  },
  {
    slug: "northline",
    title: "Northline",
    category: "software",
    visual: "mobile",
    description:
      "A fictional mobile subscription app concept built around account self-service.",
    problem:
      "Subscription businesses need onboarding, billing, and retention to feel like one connected experience, not three bolted-on tools.",
    approach:
      "A unified subscriber dashboard covering plan management, billing history, and lifecycle messaging in one place.",
    outcome:
      "A sample product direction designed so subscribers can manage their plan without contacting support.",
    tech: ["Next.js", "Stripe"],
    isConcept: true,
    featured: true,
    relatedService: "software-development",
  },
];
