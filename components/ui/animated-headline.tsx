import React from "react";
import Text3DFlip from "@/components/ui/text-3d-flip";
import { cn } from "@/lib/utils";

interface AnimatedHeadlineProps {
  children: React.ReactNode;
  className?: string;
  /**
   * The background color class (e.g. "bg-[var(--soluven-cream)]").
   * This is critical to hide the backface of the letters during rotation.
   */
  bgClass: string;
  /**
   * The text color class (e.g. "text-[var(--color-ink)]").
   */
  textClass?: string;
}

/**
 * A reusable wrapper for the Text3DFlip effect that standardizes
 * the animation settings and handles the background face hiding.
 */
export function AnimatedHeadline({
  children,
  className,
  bgClass,
  textClass = "",
}: AnimatedHeadlineProps) {
  return (
    <Text3DFlip
      as="span"
      className={cn("inline-flex flex-wrap", className)}
      textClassName={cn(bgClass, textClass)}
      flipTextClassName={cn(bgClass, textClass)}
      rotateDirection="top"
      staggerDuration={0.03}
      staggerFrom="first"
      transition={{ type: "spring", damping: 25, stiffness: 160 }}
    >
      {children}
    </Text3DFlip>
  );
}
