import type { ComponentPropsWithoutRef } from "react";

export function Card({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm ${className}`}
      {...props}
    />
  );
}
