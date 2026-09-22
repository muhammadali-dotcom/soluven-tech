import type { ComponentType } from "react";

type PillIcon = ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;

export function Pill({
  label,
  icon: Icon,
  active,
  onClick,
}: {
  label: string;
  icon?: PillIcon;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold transition-colors ${
        active
          ? "border-[var(--soluven-blue)] bg-[var(--soluven-blue)] text-[var(--soluven-ink)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--soluven-blue)]"
      }`}
    >
      {Icon && <Icon aria-hidden size={16} />}
      {label}
    </button>
  );
}
