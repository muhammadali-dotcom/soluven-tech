export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  featured?: boolean;
  outcome?: string;
  role?: string;
};

// TODO(open item, REQUIREMENTS.md): final portfolio project list not yet
// provided. These are structural placeholders — replace with real projects.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "web-platform-project",
    title: "Web Platform Project",
    description:
      "A custom web platform build — full case study coming once the project is finalized for publication.",
    tech: ["Next.js", "TypeScript"],
    featured: true,
  },
  {
    slug: "mobile-app-project",
    title: "Mobile App Project",
    description:
      "A cross-platform mobile app build — full case study coming once the project is finalized for publication.",
    tech: ["React Native"],
    featured: true,
  },
];
