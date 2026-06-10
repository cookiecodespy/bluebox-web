"use client";

import { motion } from "motion/react";

// Línea cobalto que se dibuja al entrar en viewport.
export function DrawLine({ className = "" }: { className?: string }) {
  return (
    <motion.span
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`block h-px origin-left bg-cobalt ${className}`}
      aria-hidden="true"
    />
  );
}
