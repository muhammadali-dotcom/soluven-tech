// Insights rotated in the welcome popup (components/layout/WelcomePopup.tsx).
// Every hook must be a real, published finding with its source; no invented
// or rounded-up numbers (see DESIGN.md: no fake stats).

export type PopupHook = {
  /** The big number shown first. */
  stat: string;
  /** Completes the sentence that starts with the stat. */
  statement: string;
  source: string;
  question: string;
  cta: { label: string; href: string };
};

export const popupHooks: PopupHook[] = [
  {
    stat: "53%",
    statement: "of mobile site visits are abandoned if a page takes longer than 3 seconds to load.",
    source: "Google / SOASTA research, 2016",
    question: "Is your website one of them?",
    cta: { label: "See how we build fast sites →", href: "/services/website-development" },
  },
  {
    stat: "0.05s",
    statement: "is all it takes for visitors to form an opinion of your website.",
    source: "Lindgaard et al., Behaviour & Information Technology, 2006",
    question: "What does yours say about you?",
    cta: { label: "See our logo & brand work →", href: "/services/logo-design" },
  },
  {
    stat: "75%",
    statement: "of people judge a company's credibility by its website design.",
    source: "Stanford Web Credibility Research",
    question: "Would they trust your checkout?",
    cta: { label: "See how we build online stores →", href: "/services/ecommerce" },
  },
];
