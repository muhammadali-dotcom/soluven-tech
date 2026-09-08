"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorLabel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client capability detection, not derived from render state
    setEnabled(
      window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!enabled) return;
    x.set(event.clientX + 16);
    y.set(event.clientY + 16);
  }

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerEnter={() => enabled && setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className="relative"
    >
      {children}
      {enabled && hovering && (
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{ x: springX, y: springY }}
          className="pointer-events-none fixed left-0 top-0 z-50 rounded-full bg-[var(--soluven-ink)] px-4 py-2 text-xs font-semibold text-[var(--soluven-cream)] shadow-lg"
        >
          {label}
        </motion.span>
      )}
    </div>
  );
}
