export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  included: string[];
  whoItsFor?: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    summary: "Fast, modern, SEO-ready websites and web apps.",
    description:
      "We design and build custom websites and web applications that load fast, rank well, and are built to grow with your business.",
    included: [
      "Custom design & development",
      "SEO-ready architecture",
      "Responsive, accessible builds",
      "Ongoing support & maintenance",
    ],
    whoItsFor:
      "Businesses that need a fast, credible web presence or a custom web app, not a templated site.",
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    summary: "Native and cross-platform apps for iOS and Android.",
    description:
      "From concept to launch, we build mobile apps that feel native, perform well, and are ready to ship to the App Store and Play Store.",
    included: [
      "iOS & Android delivery",
      "UI/UX design",
      "API & backend integration",
      "App Store / Play Store launch support",
    ],
    whoItsFor:
      "Startups and businesses that need a dedicated mobile app rather than a mobile-web workaround.",
  },
  {
    slug: "ecommerce-setup",
    name: "Ecommerce Setup",
    summary: "Online stores built to convert.",
    description:
      "We set up and customize ecommerce storefronts with secure payments, product catalogs, and checkout flows tuned for conversion.",
    included: [
      "Storefront setup & customization",
      "Payment gateway integration",
      "Product catalog & inventory setup",
      "Checkout optimization",
    ],
    whoItsFor:
      "Brands launching or migrating an online store that need it done right the first time.",
  },
  {
    slug: "consulting",
    name: "Consulting",
    summary: "Technical strategy for teams building software.",
    description:
      "We advise on architecture, tech stack choices, and engineering process for teams that need experienced technical guidance.",
    included: [
      "Technical architecture review",
      "Tech stack recommendations",
      "Engineering process advice",
      "Ongoing technical advisory",
    ],
    whoItsFor:
      "Founders and engineering teams who need an experienced outside perspective before committing to a direction.",
  },
];
