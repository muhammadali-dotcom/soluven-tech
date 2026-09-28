"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export function ProgressLine({
  trackClassName = "bg-[var(--soluven-ink)]/20",
  fillClassName = "bg-[var(--soluven-ink)]",
}: {
  trackClassName?: string;
  fillClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className={`h-px w-full ${trackClassName}`}>
      <motion.div
        aria-hidden="true"
        className={`h-px origin-left ${fillClassName}`}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
