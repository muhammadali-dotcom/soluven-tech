"use client";

import { cn } from "@/lib/utils";

const LINE_WRAPPER_TOPS = ["top-[10%]", "top-[30%]", "top-[50%]", "top-[70%]", "top-[90%]"];

interface AnimatedGridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AnimatedGridBackground({
  children,
  className,
}: AnimatedGridBackgroundProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-[var(--color-background)]", className)}>
      {/* Grid background */}
      <div
        className="motion-safe:animate-[cta-grid-move_20s_linear_infinite] absolute inset-0 z-0 h-full w-full bg-[length:50px_50px]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--soluven-blue) 7%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--soluven-blue) 7%, transparent) 1px, transparent 1px)",
        }}
      />

      {/* Animated line sweeps */}
      <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden">
        {LINE_WRAPPER_TOPS.map((topClass, index) => (
          <div key={topClass} className={cn("absolute h-[100px] w-full", topClass)}>
            <div className="relative h-0.5 w-full overflow-hidden">
              <div
                className={cn(
                  "motion-safe:animate-[cta-line-move_4s_linear_infinite] absolute top-0 h-full w-full",
                  index % 2 !== 0 && "[animation-direction:reverse] [animation-delay:2s]",
                )}
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, var(--soluven-blue) 20%, var(--soluven-green) 50%, var(--soluven-blue) 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Corner traces */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-[5] hidden h-[100px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:block">
        <svg
          className="motion-safe:animate-[cta-corner-trace_6s_linear_infinite] absolute top-1/2 left-[-150px] h-[60px] w-[120px] -translate-y-1/2"
          viewBox="0 0 120 60"
          stroke="var(--soluven-blue)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
        <svg
          className="motion-safe:animate-[cta-corner-trace_6s_linear_infinite] absolute top-1/2 right-[-150px] h-[60px] w-[120px] -translate-y-1/2 scale-x-[-1] [animation-delay:3s]"
          viewBox="0 0 120 60"
          stroke="var(--soluven-blue)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
      </div>

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
