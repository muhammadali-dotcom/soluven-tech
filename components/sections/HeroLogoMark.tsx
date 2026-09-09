export function HeroLogoMark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <svg
        viewBox="0 0 48 48"
        className="h-[140vw] w-[140vw] max-h-[900px] max-w-[900px] animate-logo-drift opacity-[0.12] sm:h-[900px] sm:w-[900px]"
      >
        <path
          d="M35 10H18a8 8 0 0 0 0 16h5"
          stroke="var(--soluven-blue)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M13 38h17a8 8 0 0 0 0-16h-5"
          stroke="var(--soluven-green)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
