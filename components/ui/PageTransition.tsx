"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.32 }}
    >
      {children}
    </motion.div>
  );
}
