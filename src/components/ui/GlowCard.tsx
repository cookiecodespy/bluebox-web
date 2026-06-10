"use client";

import { useRef, type ReactNode } from "react";

// Tarjeta para superficies oscuras con glow cobalto que sigue el cursor
// (hermana de Card, que vive en superficies claras).
export function GlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-cobalt/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(27,54,255,0.16), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
