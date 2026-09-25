export type ServiceVariant = "blue" | "green" | "ink";
export type ServiceTier = "build" | "grow";

export type ServiceBuild = {
  /** The client's problem, in their own words. */
  problem: string;
  name: string;
  how: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceHeroFact = {
  title: string;
  label: string;
};

export type ServiceHeroContent = {
  eyebrow: string;
  /** Three display lines; the last one is set in the accent color. */
  headline: [string, string, string];
  description: string;
  facts: ServiceHeroFact[];
};

export type Service = {
  slug: string;
  name: string;
  heading: string;
  summary: string;
  description: string;
  included: string[];
  builds: ServiceBuild[];
  process: ServiceStep[];
  ctaLabel: string;
  variant: ServiceVariant;
  whoItsFor?: string;
  image?: string;
  featured?: boolean;
  tier: ServiceTier;
  hero: ServiceHeroContent;
};

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website development",
    heading: "Websites that earn attention.",
    summary: "Websites that turn visitors into customers.",
    description:
      "Strategic, responsive websites that explain your value quickly and turn interest into action.",
    included: [
      "Business websites",
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "Web applications",
    ],
    builds: [
      {
        problem: "People visit, but nobody calls.",
        name: "Business websites",
        how: "Clear pages that answer the big questions and make getting in touch the obvious next step.",
      },
      {
        problem: "My ads send people to my homepage and they get lost.",
        name: "Landing pages",
        how: "One page, one offer, built to turn the traffic you already pay for into enquiries.",
      },
      {
        problem: "Bigger clients don't take us seriously yet.",
        name: "Corporate websites",
        how: "A polished, structured site that shows your team, your process and your track record.",
      },
      {
        problem: "My best work is buried in my phone's gallery.",
        name: "Portfolio websites",
        how: "A clean showcase that lets your work do the selling, organised so clients find what they want.",
      },
      {
        problem: "Our customers need to log in and get things done online.",
        name: "Web applications",
        how: "Browser-based tools with accounts, dashboards and workflows, built to grow with you.",
      },
    ],
    process: [
      {
        title: "Talk it through",
        description:
          "A short call about your business, your customers and what the site needs to achieve. You bring what you know; we ask the questions.",
      },
      {
        title: "See it first",
        description:
          "We map the pages and design the key screens, so you can approve the direction before anything is built.",
      },
      {
        title: "Build and review",
        description:
          "We build the site and share a working preview. You click through it and tell us what to change.",
      },
      {
        title: "Go live",
        description:
          "We launch, connect your domain and analytics, and show you how to update the basics yourself.",
      },
    ],
    ctaLabel: "Build your website",
    variant: "blue",
    whoItsFor:
      "Businesses that need a fast, credible web presence built to perform, not a templated site.",
    featured: true,
    tier: "build",
    hero: {
      eyebrow: "Website development",
      headline: ["A website you're", "proud to share", "with every customer"],
      description:
        "Send your link without a second thought. We build fast, clear websites that explain what you do in seconds and give every visitor an obvious next step.",
      facts: [
        { title: "Mobile-first", label: "Designed for phones first" },
        { title: "SEO-ready", label: "Clean structure and metadata" },
        { title: "Built for speed", label: "Lean pages, quick loads" },
        { title: "Clear next steps", label: "Every page leads somewhere" },
      ],
    },
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    heading: "Your online store should make buying feel easy.",
    summary: "Online stores designed to sell.",
    description:
      "From first click to checkout, we build thoughtful e-commerce experiences that earn trust, remove friction and help your brand grow.",
    included: [
      "Shopify",
      "Custom stores",
      "Product catalogs",
      "Payment integration",
      "Order management",
    ],
    builds: [
      {
        problem: "I want to sell online without reinventing the wheel.",
        name: "Shopify stores",
        how: "A Shopify store set up around your brand and products, ready to take orders fast.",
      },
      {
        problem: "Off-the-shelf themes can't do what my business needs.",
        name: "Custom stores",
        how: "A store built around how you sell, with no template limits.",
      },
      {
        problem: "Customers can't find the product they came for.",
        name: "Product catalogs",
        how: "Clear categories, filters and search so browsing turns into buying.",
      },
      {
        problem: "People leave right at checkout.",
        name: "Payment integration",
        how: "A short, trusted checkout with the payment methods your customers already use.",
      },
      {
        problem: "Orders live in WhatsApp chats and notebooks.",
        name: "Order management",
        how: "One place to track orders, stock and deliveries, so nothing slips.",
      },
    ],
    process: [
      {
        title: "Understand your products",
        description:
          "We learn what you sell, who buys it and how orders reach you today.",
      },
      {
        title: "Shape the store",
        description:
          "Categories, product pages and checkout, planned and designed for you to approve.",
      },
      {
        title: "Build and test",
        description:
          "We build the store, connect payments, help get your products in, then run real test orders end to end.",
      },
      {
        title: "Open the doors",
        description:
          "We launch, then walk your team through managing products and orders with confidence.",
      },
    ],
    ctaLabel: "Grow your store",
    variant: "green",
    whoItsFor: "Because every lost click can become a lost customer.",
    featured: true,
    tier: "build",
    hero: {
      eyebrow: "E-commerce",
      headline: ["Your products", "deserve a store", "that sells them"],
      description:
        "You put real care into what you sell. We build stores that show it off, keep checkout short and earn trust from the first product page, on Shopify or custom.",
      facts: [
        { title: "Shopify or custom", label: "The right platform for you" },
        { title: "Product catalogs", label: "Easy to browse and search" },
        { title: "Payment integration", label: "Checkout customers trust" },
        { title: "Order management", label: "Simple for your team" },
      ],
    },
  },
  {
    slug: "mobile-app-development",
    name: "Mobile app development",
    heading: "Apps built for daily use.",
    summary: "Apps your customers actually want to use.",
    description:
      "Native and cross-platform mobile apps designed for daily use, not just a launch-day demo.",
    included: ["Android", "iOS", "Cross-platform", "Customer apps", "Business apps"],
    builds: [
      {
        problem: "Our customers live on their phones. We don't.",
        name: "iOS and Android apps",
        how: "Native apps that feel at home on each platform, fast and familiar.",
      },
      {
        problem: "We need both platforms but can't fund two builds.",
        name: "Cross-platform apps",
        how: "One codebase for iOS and Android, so you launch on both together.",
      },
      {
        problem: "Customers use us once and forget us.",
        name: "Customer apps",
        how: "Apps for booking, ordering or loyalty that give people a reason to come back.",
      },
      {
        problem: "My team runs everything through calls and messages.",
        name: "Business apps",
        how: "Mobile tools for your staff in the field, on the shop floor or on the move.",
      },
    ],
    process: [
      {
        title: "Pin down the idea",
        description:
          "We turn your idea into the core screens and the one job the app must do really well.",
      },
      {
        title: "Tap through it",
        description:
          "You get a clickable prototype to try on your own phone before development starts.",
      },
      {
        title: "Build in rounds",
        description:
          "We build in stages and share test versions, so you see progress and give feedback early.",
      },
      {
        title: "Launch to the stores",
        description:
          "We prepare the listings and take the App Store and Google Play submission off your plate.",
      },
    ],
    ctaLabel: "Build your app",
    variant: "green",
    whoItsFor:
      "Teams taking a product mobile-first or extending an existing platform to iOS and Android.",
    featured: true,
    tier: "build",
    hero: {
      eyebrow: "Mobile app development",
      headline: ["Put your business", "in their pocket,", "every day"],
      description:
        "Apps your customers open without thinking twice, with fast screens and flows that feel obvious. Built for your customers, your team, or both.",
      facts: [
        { title: "iOS and Android", label: "Both major platforms" },
        { title: "Native or cross-platform", label: "Chosen per project" },
        { title: "Customer apps", label: "Built for repeat use" },
        { title: "Business apps", label: "Tools your team relies on" },
      ],
    },
  },
  {
    slug: "software-development",
    name: "Software development",
    heading: "Software shaped around your work.",
    summary: "Software designed around your business.",
    description:
      "Purpose-built products and internal systems that solve the problems generic tools cannot.",
    included: ["CRM", "Dashboards", "Management systems", "Internal tools", "Automation"],
    builds: [
      {
        problem: "Leads fall through the cracks between calls and spreadsheets.",
        name: "CRM",
        how: "A customer system shaped around your pipeline, so every lead has an owner and a next step.",
      },
      {
        problem: "I only find out how the month went once it's over.",
        name: "Dashboards",
        how: "Live numbers from your tools on one screen you'll actually check.",
      },
      {
        problem: "Every branch keeps records its own way.",
        name: "Management systems",
        how: "One system for stock, staff, bookings or operations, shared across the business.",
      },
      {
        problem: "My team loses hours to work a tool should do.",
        name: "Internal tools",
        how: "Simple software built for one job your team does every day.",
      },
      {
        problem: "We type the same data into three places.",
        name: "Automation",
        how: "Connections between your systems that handle repetitive steps for you.",
      },
    ],
    process: [
      {
        title: "Map how you work",
        description:
          "We sit with the people who will use it and map the steps, data and daily frustrations.",
      },
      {
        title: "Agree the first version",
        description:
          "Together we decide what the first release must do, so you get value quickly.",
      },
      {
        title: "Build in stages",
        description:
          "Working pieces you can try along the way, shaped by your team's feedback.",
      },
      {
        title: "Roll it out",
        description:
          "We move your data across, launch, and help your team get comfortable with it.",
      },
    ],
    ctaLabel: "Discuss your product",
    variant: "ink",
    whoItsFor:
      "Founders and teams who need a product or internal tool built around how they actually work.",
    featured: true,
    tier: "build",
    hero: {
      eyebrow: "Software development",
      headline: ["Stop running", "your business on", "copy and paste"],
      description:
        "Custom products and internal tools that replace spreadsheets and manual workarounds with systems built around the way your team actually works.",
      facts: [
        { title: "Custom CRMs", label: "Your pipeline, your fields" },
        { title: "Dashboards", label: "The numbers you need" },
        { title: "Internal tools", label: "Less manual work" },
        { title: "Automation", label: "Repetitive tasks handled" },
      ],
    },
  },
  {
    slug: "logo-design",
    name: "Logo designing",
    heading: "A mark that carries the brand.",
    summary: "Distinctive logos built to work everywhere your brand shows up.",
    description:
      "A distinctive, versatile logo designed to hold up across your website, product, and print, not just a nice picture.",
    included: ["Logo concepts", "Brand colour & type pairing", "Usage guidelines"],
    builds: [
      {
        problem: "Our logo was made in an afternoon, and it shows.",
        name: "Logo concepts",
        how: "Several original directions explored and refined until one feels unmistakably yours.",
      },
      {
        problem: "Our colours and fonts change every time we post.",
        name: "Brand colour and type pairing",
        how: "A palette and type pairing that make everything you publish look related.",
      },
      {
        problem: "Everyone uses our logo a little differently.",
        name: "Usage guidelines",
        how: "Simple rules for sizing, spacing and backgrounds, so your mark always looks right.",
      },
    ],
    process: [
      {
        title: "Share your story",
        description:
          "A short brief about your business, your customers and the feeling you want your brand to give.",
      },
      {
        title: "Explore directions",
        description:
          "We present several concepts, each with the thinking behind it, so you react to real options.",
      },
      {
        title: "Refine one",
        description:
          "We develop your chosen direction together, adjusting details until it feels right.",
      },
      {
        title: "Take it everywhere",
        description:
          "You get the final files, colours, type pairing and usage guidelines, ready to use anywhere.",
      },
    ],
    ctaLabel: "Design your logo",
    variant: "blue",
    whoItsFor:
      "New businesses and rebrands that need a mark they can build a visual identity around.",
    tier: "grow",
    hero: {
      eyebrow: "Logo design",
      headline: ["Finally look like", "the business you've", "worked so hard to build"],
      description:
        "You've put years into your business. We design a distinctive mark that shows it, and holds up everywhere from a favicon to a storefront sign.",
      facts: [
        { title: "Logo concepts", label: "Several directions explored" },
        { title: "Colour and type", label: "A pairing that fits" },
        { title: "Usage guidelines", label: "Consistent from day one" },
        { title: "Built to scale", label: "Web, product and print" },
      ],
    },
  },
  {
    slug: "digital-marketing",
    name: "Digital marketing",
    heading: "Marketing tied to real outcomes.",
    summary: "Campaigns and funnels built around measurable results.",
    description:
      "Digital marketing built around measurable outcomes: traffic, leads, and conversions tied to a clear funnel, not vanity metrics.",
    included: ["Campaign strategy", "Landing page funnels", "Performance tracking"],
    builds: [
      {
        problem: "We boost posts and hope for the best.",
        name: "Campaign strategy",
        how: "A plan built from your goals, audience and budget before anything goes live.",
      },
      {
        problem: "Clicks come in, but enquiries don't.",
        name: "Landing page funnels",
        how: "Pages built for each campaign, so paid traffic lands somewhere designed to convert.",
      },
      {
        problem: "I can't tell which ads are actually working.",
        name: "Performance tracking",
        how: "Tracking and plain-language reports that show what each channel brings in.",
      },
    ],
    process: [
      {
        title: "Set the goal",
        description:
          "We agree what success looks like (leads, sales or bookings) and what you are comfortable spending.",
      },
      {
        title: "Build the funnel",
        description:
          "Campaign plan, audiences and landing pages, prepared for you to approve.",
      },
      {
        title: "Launch and watch",
        description:
          "Campaigns go live, and we watch early results closely and adjust what underperforms.",
      },
      {
        title: "Report and improve",
        description:
          "Plain-language reports on what each channel brought in, and what we change next.",
      },
    ],
    ctaLabel: "Plan your campaign",
    variant: "ink",
    whoItsFor:
      "Businesses that need marketing efforts connected to their actual website and conversion goals.",
    tier: "grow",
    hero: {
      eyebrow: "Digital marketing",
      headline: ["Stop guessing", "where your", "ad money goes"],
      description:
        "Campaigns planned around a clear funnel, with landing pages built to convert and tracking that shows exactly what each channel brings in.",
      facts: [
        { title: "Campaign strategy", label: "Goals before spend" },
        { title: "Landing page funnels", label: "Traffic with a destination" },
        { title: "Performance tracking", label: "Results you can read" },
        { title: "Tied to conversions", label: "Leads over vanity metrics" },
      ],
    },
  },
  {
    slug: "seo",
    name: "Search engine optimization",
    heading: "Findable when it matters.",
    summary: "Technical and content SEO built into how the site is built.",
    description:
      "Technical and content SEO built into the site itself (structure, metadata, and performance) so it's found by the people looking for it.",
    included: ["Technical SEO audits", "On-page optimisation", "Structured data & metadata"],
    builds: [
      {
        problem: "Our site looks fine, but Google barely notices it.",
        name: "Technical SEO audits",
        how: "A full check of speed, structure and indexing, with issues fixed in priority order.",
      },
      {
        problem: "Competitors with worse service rank above us.",
        name: "On-page optimisation",
        how: "Pages structured and written around what your customers actually search for.",
      },
      {
        problem: "Search results and AI tools describe us wrong, or not at all.",
        name: "Structured data and metadata",
        how: "Clear signals that help search engines and AI answers understand who you are.",
      },
    ],
    process: [
      {
        title: "Audit",
        description:
          "We check your site's speed, structure and indexing, and see where competitors are ahead of you.",
      },
      {
        title: "Prioritise",
        description:
          "You get a clear list of fixes, ordered by the difference each one will make.",
      },
      {
        title: "Fix and optimise",
        description:
          "Technical fixes, page improvements and structured data put in place.",
      },
      {
        title: "Track and grow",
        description:
          "We monitor your search visibility and keep improving from there.",
      },
    ],
    ctaLabel: "Improve your ranking",
    variant: "green",
    whoItsFor:
      "Businesses whose website should be doing more of the work to bring in traffic.",
    tier: "grow",
    hero: {
      eyebrow: "Search engine optimization",
      headline: ["Get found by", "the people already", "searching for you"],
      description:
        "Technical and content SEO built into the site itself, so search engines and AI answers understand what you offer and who it is for.",
      facts: [
        { title: "Technical audits", label: "Issues found and fixed" },
        { title: "On-page optimisation", label: "Pages written to rank" },
        { title: "Structured data", label: "Clear signals for search" },
        { title: "Performance", label: "Speed that search rewards" },
      ],
    },
  },
  {
    slug: "social-media-marketing",
    name: "Social media marketing",
    heading: "A presence that stays consistent.",
    summary: "Content and management built for steady, on-brand growth.",
    description:
      "Consistent, on-brand social content and account management built for steady growth rather than one-off posts.",
    included: ["Content planning", "Community management", "Platform strategy"],
    builds: [
      {
        problem: "We post when we remember, which isn't often.",
        name: "Content planning",
        how: "A monthly calendar of on-brand posts, planned ahead and ready to go.",
      },
      {
        problem: "Comments and messages sit unanswered for days.",
        name: "Community management",
        how: "Replies in your voice, so people feel heard and keep coming back.",
      },
      {
        problem: "We're on every platform and winning on none.",
        name: "Platform strategy",
        how: "A focus on the channels your customers actually use, done properly.",
      },
    ],
    process: [
      {
        title: "Find your voice",
        description:
          "We learn your brand, audience and goals, and agree which platforms deserve your focus.",
      },
      {
        title: "Plan the month",
        description:
          "A content calendar you review and approve before anything is posted.",
      },
      {
        title: "Post and reply",
        description:
          "We publish on schedule and handle comments and messages in your voice.",
      },
      {
        title: "Review and adjust",
        description:
          "Monthly insights on what worked, feeding straight into next month's plan.",
      },
    ],
    ctaLabel: "Grow your presence",
    variant: "blue",
    whoItsFor: "Brands that need a consistent social presence without managing it in-house.",
    tier: "grow",
    hero: {
      eyebrow: "Social media marketing",
      headline: ["Show up every day", "without it taking", "over your day"],
      description:
        "We plan, create and manage on-brand content across the platforms your customers use, so you stay visible while you focus on running the business.",
      facts: [
        { title: "Content planning", label: "A calendar you can see" },
        { title: "Community management", label: "Replies that sound like you" },
        { title: "Platform strategy", label: "The right channels only" },
        { title: "On-brand", label: "Consistent in every post" },
      ],
    },
  },
];
