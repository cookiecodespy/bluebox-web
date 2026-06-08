"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// Reveal al entrar en viewport, con Motion. Soporta stagger vía `index`.
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 26,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// Contenedor que escalona a sus hijos <RevealItem>.
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};
