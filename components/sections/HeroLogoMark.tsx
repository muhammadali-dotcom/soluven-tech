type HeroLogoMarkProps = {
  strokeA?: string;
  strokeB?: string;
  opacityClass?: string;
};

export function HeroLogoMark({
  strokeA = "var(--soluven-blue)",
  strokeB = "var(--soluven-green)",
  opacityClass = "opacity-[0.12]",
}: HeroLogoMarkProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 48 48"
        className={`h-[140vw] w-[140vw] max-h-[900px] max-w-[900px] animate-logo-drift sm:h-[900px] sm:w-[900px] ${opacityClass}`}
      >
        <path
          d="M35 10H18a8 8 0 0 0 0 16h5"
          stroke={strokeA}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 38h17a8 8 0 0 0 0-16h-5"
          stroke={strokeB}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
