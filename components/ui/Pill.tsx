export function Pill({
  label,
  emoji,
  active,
  onClick,
}: {
  label: string;
  emoji?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
        active
          ? "border-[var(--soluven-blue)] bg-[var(--soluven-blue)] text-[var(--soluven-ink)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--soluven-blue)]"
      }`}
    >
      {emoji && <span aria-hidden="true">{emoji}</span>}
      {label}
    </button>
  );
}
