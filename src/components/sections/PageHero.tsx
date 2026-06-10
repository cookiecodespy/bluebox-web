"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
}

// Encabezado consistente para páginas internas — mismo lenguaje "dossier",
// con entrada animada (Motion) para igualar el tono cinemático del home.
export function PageHero({ eyebrow, title, accent, sub }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16">
      <div className="bp-grid-fade pointer-events-none absolute inset-0" />
      <div className="accent-glow pointer-events-none absolute -right-40 -top-44 h-[640px] w-[640px]" />
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="kicker flex items-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="inline-block h-px w-6 origin-left bg-cobalt"
          />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="mt-6 max-w-[18ch] font-display text-[clamp(2.4rem,4.6vw,3.6rem)] font-medium leading-[1.04] tracking-[-0.025em] text-ink"
        >
          {title}
          {accent && (
            <span className="relative text-cobalt">
              {" "}
              {accent}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE }}
                className="absolute inset-x-0 -bottom-1 h-px origin-left bg-cobalt/60"
              />
            </span>
          )}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
          >
            {sub}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
