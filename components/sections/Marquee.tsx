const items = ["STRATEGY", "DESIGN", "DEVELOPMENT", "ECOMMERCE", "DIGITAL PRODUCTS"];

function TickerContent({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-8">
          <span className="font-[family-name:var(--font-heading)] text-base font-semibold uppercase tracking-wide text-[var(--color-ink)] sm:text-xl">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--soluven-green)]"
          />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <div
      aria-label="Our capabilities: strategy, design, development, ecommerce, digital products"
      className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-background)] py-6"
    >
      <div className="flex w-max animate-marquee">
        <TickerContent />
        <TickerContent hidden />
      </div>
    </div>
  );
}
