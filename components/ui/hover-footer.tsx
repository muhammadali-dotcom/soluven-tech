"use client";
import React from "react";
import { motion } from "motion/react";

/* ─── FooterFadeIn ────────────────────────────────────────────────────────── */
/**
 * Scroll-triggered fade + slide-up entrance for footer columns.
 * Stagger index controls the delay so each column animates in sequence.
 */
export const FooterFadeIn = ({
  children,
  index = 0,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
