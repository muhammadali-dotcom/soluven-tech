export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  featured?: boolean;
};

// TODO(open item, REQUIREMENTS.md): final portfolio project list not yet
// provided. These are structural placeholders — replace with real projects.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "placeholder-project-one",
    title: "Placeholder Project One",
    description:
      "Real project details pending — replace this entry once the portfolio list is finalized.",
    tech: ["Next.js", "TypeScript"],
    featured: true,
  },
  {
    slug: "placeholder-project-two",
    title: "Placeholder Project Two",
    description:
      "Real project details pending — replace this entry once the portfolio list is finalized.",
    tech: ["React Native"],
    featured: true,
  },
];
