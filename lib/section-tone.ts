// Background tone for a full-width section. `.section-blue` / `.section-dark`
// (app/globals.css) flip the colour tokens so everything inside adapts.
export type SectionTone = "cream" | "blue" | "dark";

export const sectionToneClasses: Record<SectionTone, string> = {
  cream: "",
  blue: "section-blue bg-[var(--color-background)] text-[var(--color-ink)]",
  dark: "section-dark bg-[var(--color-background)] text-[var(--color-ink)]",
};
