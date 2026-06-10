"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setV(Math.round((1 - Math.pow(1 - p, 3)) * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {prefix}
      {v}
      {suffix}
    </span>
  );
}

const STATS: { node: React.ReactNode; label: string }[] = [
  { node: <Counter to={40} suffix="+" />, label: "años de oficio del fundador" },
  { node: <span>2018</span>, label: "fundada en Santiago de Chile" },
  { node: <Counter to={24} suffix="h" />, label: "respuesta hábil" },
  { node: <span>Ley&nbsp;19.628</span>, label: "empresa chilena formal" },
];

export function StatsBand() {
  return (
    <section className="ink-section relative overflow-hidden py-20">
      <div className="bp-grid pointer-events-none absolute inset-0 opacity-50" />
      <Container>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`px-6 text-center ${i < STATS.length - 1 ? "lg:border-r lg:border-white/10" : ""}`}
            >
              <div className="font-display text-[clamp(2.4rem,4vw,3.2rem)] font-semibold tracking-[-0.03em] text-cobalt">
                {s.node}
              </div>
              <div className="kicker !text-paper/55 mt-3 normal-case">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
