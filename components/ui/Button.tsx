import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "inverted";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-blue)] text-[var(--color-ink)] hover:bg-[var(--color-blue-hover)]",
  secondary:
    "border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)]",
  inverted:
    "border border-[var(--color-text)] bg-[var(--color-background)] text-[var(--color-text)] hover:bg-[var(--color-surface)]",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold transition-colors motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03] motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

export function LinkButton({
  variant = "primary",
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
