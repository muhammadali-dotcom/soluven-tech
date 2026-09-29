export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A focused website usually takes a few weeks, while a custom software build or ecommerce migration can run longer. We'll give you a realistic timeline once we understand what you're building.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Most projects are a fixed fee agreed before work starts, based on what you need built. As a guide, websites start from $500, ecommerce stores from $1,200 and custom software from $2,500. Supporting services: mobile apps from $3,000, branding and logo design from $150, and SEO and marketing monthly from $300. Ongoing support can be set up as a monthly retainer. You'll get an exact quote once we understand the scope.",
  },
  {
    question: "What technology do you build with?",
    answer:
      "Modern, maintainable tools suited to the job, typically Next.js and TypeScript for websites and software, and Shopify or a custom stack for ecommerce, chosen based on what will serve your business long-term rather than what's trendy.",
  },
  {
    question: "How does an engagement start?",
    answer:
      "Tell us what you're working on. We'll ask a few questions to understand the goal, then come back with a clear direction and scope before any commitment is made.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Soluven works with businesses locally and internationally, and we're set up to collaborate remotely across time zones.",
  },
];
