"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export function ProgressLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={ref} className="h-px w-full bg-[var(--soluven-ink)]/20">
      <motion.div
        aria-hidden="true"
        className="h-px origin-left bg-[var(--soluven-ink)]"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
