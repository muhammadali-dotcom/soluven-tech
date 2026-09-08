"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

export function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("soluven-loaded");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyShown || reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- corrects stale `visible` state left by a prior effect invocation (Strict Mode/fast refresh)
      setVisible(false);
      return;
    }

    sessionStorage.setItem("soluven-loaded", "1");
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-[var(--soluven-ink)]"
        >
          <Logo size={56} withWordmark={false} />
          <p className="font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-[0.3em] text-[var(--soluven-cream)]">
            Building What&apos;s Next
          </p>
          <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--soluven-blue), var(--soluven-green))",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
