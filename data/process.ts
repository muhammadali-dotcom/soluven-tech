export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn what you are building, who it is for and what success needs to look like.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "We turn the opportunity into a clear direction, structure and visual system.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test and refine every detail until the experience is ready to perform.",
  },
  {
    number: "04",
    title: "Move forward",
    description:
      "We launch with confidence and stay close as your product and business evolve.",
  },
];
