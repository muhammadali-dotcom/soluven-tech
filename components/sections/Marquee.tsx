const items = ["STRATEGY", "DESIGN", "DEVELOPMENT", "ECOMMERCE", "DIGITAL PRODUCTS"];

function TickerContent({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-8">
          <span className="font-[family-name:var(--font-heading)] text-base font-semibold uppercase tracking-wide text-[var(--soluven-ink)] sm:text-xl">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 bg-[var(--soluven-ink)]"
          />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      className="overflow-hidden bg-[var(--soluven-blue)] py-6"
    >
      <div className="flex w-max animate-marquee">
        <TickerContent />
        <TickerContent hidden />
      </div>
    </div>
  );
}
