export type Stat = {
  value: string;
  label: string;
};

// TODO(open item): real numbers not yet confirmed — replace before launch.
export const stats: Stat[] = [
  { value: "10+", label: "Projects shipped" },
  { value: "4", label: "Core service lines" },
  { value: "2", label: "Markets served (PK + international)" },
];
