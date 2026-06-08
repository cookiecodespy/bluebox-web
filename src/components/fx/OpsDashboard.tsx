"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const LABELS = ["L", "M", "M", "J", "V", "S", "D", "L", "M", "M", "J", "V"];

function rndBars() {
  return Array.from({ length: 12 }, (_, i) => 28 + Math.round(Math.abs(Math.sin(i * 1.3 + Math.random())) * 64));
}

// Mock de dashboard de operaciones "en vivo": barras que respiran + contador.
export function OpsDashboard() {
  const [bars, setBars] = useState<number[]>(() => rndBars());
  const [docs, setDocs] = useState(1284);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setBars((b) => b.map((v) => Math.max(24, Math.min(96, v + (Math.random() * 22 - 11)))));
      setDocs((d) => d + Math.floor(Math.random() * 4));
    }, 1700);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-full rounded-2xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-md"
      style={{ boxShadow: "0 40px 90px -50px rgba(0,0,0,0.85)" }}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
        <span className="kicker !text-paper/55 flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cobalt" />
          </span>
          Operaciones · live
        </span>
        <span className="mono text-[11px] text-paper/40">99.9% uptime</span>
      </div>

      {/* métricas */}
      <div className="grid grid-cols-3 gap-3 py-4">
        {[
          { v: docs.toLocaleString("es-CL"), l: "validados hoy" },
          { v: "3", l: "excepciones" },
          { v: "1.8s", l: "tiempo medio" },
        ].map((m) => (
          <div key={m.l} className="rounded-lg border border-white/8 bg-black/20 px-3 py-2.5">
            <div className="font-display text-[20px] font-semibold tracking-[-0.02em] text-paper">{m.v}</div>
            <div className="kicker !text-paper/40 mt-0.5 normal-case text-[10px]">{m.l}</div>
          </div>
        ))}
      </div>

      {/* barras */}
      <div className="border-b border-white/10 pb-3">
        <div className="flex h-32 items-end gap-2">
          {bars.map((hgt, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <motion.div
                className="w-full rounded-t-[3px]"
                style={{ background: "linear-gradient(180deg, #5a78ff, #1b36ff)" }}
                initial={{ height: 0 }}
                animate={{ height: `${hgt}%` }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex gap-2">
          {LABELS.map((l, i) => (
            <span key={i} className="mono flex-1 text-center text-[9px] text-paper/30">
              {l}
            </span>
          ))}
        </div>
      </div>

      {/* feed */}
      <div className="space-y-2.5 pt-3.5">
        {[
          "Recepción validada contra ERP",
          "Excepción aprobada · evidencia registrada",
          "Sync WMS → courier completado",
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-2.5 text-[13px] text-paper/70">
            <svg className="h-3.5 w-3.5 flex-shrink-0 text-cobalt" viewBox="0 0 20 20" fill="none">
              <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="flex-1">{t}</span>
            <span className="mono text-[10px] text-paper/30">{i === 0 ? "ahora" : `${i * 3 + 2}s`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
