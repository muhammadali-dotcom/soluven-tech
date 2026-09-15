"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export function VerticalProgressLine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute left-0 top-0 h-full w-px bg-[var(--color-border)]"
    >
      <motion.div
        className="w-px origin-top bg-[var(--soluven-blue)]"
        style={{ scaleY: scrollYProgress, height: "100%" }}
      />
    </div>
  );
}
