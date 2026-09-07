export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your goals, users, and constraints — no code until we know what we're building and why.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes and UI design get validated with you early, so build time is spent on something you've already approved.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Iterative development with regular check-ins, so you always know exactly where the project stands.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We ship, monitor, and stay on for support — the relationship doesn't end at deployment.",
  },
];
