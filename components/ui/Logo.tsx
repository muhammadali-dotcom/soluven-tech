type LogoProps = {
  className?: string;
  size?: number;
  withWordmark?: boolean;
};

export function Logo({ className = "", size = 32, withWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M35 10H18a8 8 0 0 0 0 16h5"
          stroke="var(--soluven-blue)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 38h17a8 8 0 0 0 0-16h-5"
          stroke="var(--soluven-green)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {withWordmark && (
        <span className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-tight">
          <span style={{ color: "var(--soluven-blue)" }}>SOLU</span>
          <span style={{ color: "var(--soluven-green)" }}>VEN</span>
        </span>
      )}
    </span>
  );
}
