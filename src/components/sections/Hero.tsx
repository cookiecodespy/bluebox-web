"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { HERO, SOLUTIONS } from "@/lib/constants";
import { HeroCanvas } from "@/components/fx/HeroCanvas";
import { Icon } from "@/components/ui/Icon";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};
const up: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const words = HERO.titleLead.split(" ");
  return (
    <section className="relative isolate flex min-h-[94vh] items-center overflow-hidden bg-[#100d09] pt-28 pb-16 text-paper">
      {/* red de operaciones animada */}
      <HeroCanvas className="absolute inset-0 h-full w-full opacity-90" />
      {/* atmósfera: vignette + glow + grano */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(120% 120% at 50% 30%, transparent 35%, #100d09 92%)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 -top-44 h-[680px] w-[680px]"
        style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.22), transparent 62%)" }}
      />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:px-10">
        {/* izquierda */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={up} className="kicker !text-paper/55 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" />
            <span className="text-paper/85">{HERO.kicker}</span>
          </motion.p>

          <h1 className="mt-7 max-w-[15ch] font-display text-[clamp(2.7rem,5.4vw,4.3rem)] font-medium leading-[1.01] tracking-[-0.025em]">
            {words.map((wd, i) => (
              <motion.span key={i} variants={up} className="mr-[0.26em] inline-block">
                {wd}
              </motion.span>
            ))}
            <motion.span variants={up} className="relative inline-block whitespace-nowrap text-cobalt">
              {HERO.titleAccent}
              <span className="absolute inset-x-0 -bottom-1 h-px bg-cobalt/60" />
            </motion.span>
            <motion.span variants={up} className="inline-block">.</motion.span>
          </h1>

          <motion.p variants={up} className="mt-7 max-w-[46ch] text-[18px] leading-relaxed text-paper/70">
            {HERO.sub}
          </motion.p>

          <motion.div variants={up} className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2.5 rounded-full bg-cobalt px-6 py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-cobalt-deep"
            >
              Agenda un diagnóstico
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/#soluciones"
              className="inline-flex items-center gap-2 border-b-[1.5px] border-paper/40 pb-0.5 text-[15.5px] font-semibold text-paper transition-colors hover:border-cobalt hover:text-cobalt"
            >
              Ver lo que hacemos <span className="text-cobalt">↓</span>
            </Link>
          </motion.div>

          <motion.div variants={up} className="mt-14 flex flex-wrap gap-0 border-t border-white/12 pt-6">
            {HERO.stats.map((s, i) => (
              <div key={s.l} className={`pr-8 ${i < HERO.stats.length - 1 ? "mr-8 border-r border-white/10" : ""}`}>
                <div className="font-display text-[23px] font-semibold tracking-[-0.02em] text-paper">{s.v}</div>
                <div className="kicker !text-paper/45 mt-1.5 normal-case">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* panel "vivo" */}
        <motion.aside
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          className="relative rounded-2xl border border-white/12 bg-white/[0.035] px-6 pb-3 pt-5 backdrop-blur-md"
          style={{ boxShadow: "0 30px 80px -40px rgba(0,0,0,0.8)" }}
        >
          <div className="mb-1.5 flex items-center justify-between border-b border-white/10 pb-3.5">
            <span className="kicker !text-paper/55 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cobalt" />
              </span>
              Qué hacemos
            </span>
            <span className="mono text-[11px] text-paper/40">06 / SOLUCIONES</span>
          </div>
          {SOLUTIONS.map((s, i) => (
            <Link
              key={s.id}
              href="/#soluciones"
              className="group flex items-center gap-4 border-b border-white/[0.07] py-3.5 last:border-none"
            >
              <span className="mono w-6 text-[12.5px] font-medium text-[#6d8bff]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[15.5px] font-medium text-paper/90">{s.title}</span>
              <Icon name={s.id} className="h-[18px] w-[18px] text-[#6d8bff]" />
              <span className="text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:text-cobalt">→</span>
            </Link>
          ))}
        </motion.aside>
      </div>

      {/* cue de scroll */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <span className="mono text-[10.5px] tracking-[0.18em] text-paper/40">SCROLL</span>
        <span className="h-8 w-px bg-gradient-to-b from-paper/40 to-transparent" />
      </div>
    </section>
  );
}
