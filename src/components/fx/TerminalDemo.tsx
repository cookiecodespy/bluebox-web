"use client";

import { useEffect, useRef, useState } from "react";

const LINES = [
  { text: "$ git push origin main", cls: "text-paper/85" },
  { text: "✓ 128 pruebas pasaron en 41 s", cls: "text-emerald-400/90" },
  { text: "✓ build de producción listo", cls: "text-emerald-400/90" },
  { text: "→ desplegando a tu nube…", cls: "text-[#7d9bff]" },
  { text: "✓ en producción — sin downtime", cls: "text-emerald-400/90" },
  { text: "$ estado: estable · alertas: 0", cls: "text-paper/60" },
];

const TYPE_MS = 26;
const LINE_PAUSE_MS = 650;
const LOOP_PAUSE_MS = 3800;

// Terminal que "tipea" un ciclo de deploy en loop. Si el usuario prefiere
// menos movimiento, se muestra completa y estática.
export function TerminalDemo({ className = "" }: { className?: string }) {
  const [progress, setProgress] = useState<{ line: number; chars: number }>({ line: 0, chars: 0 });
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;
    let running = false;

    const tick = (line: number, chars: number) => {
      setProgress({ line, chars });
      if (chars < LINES[line].text.length) {
        timer = setTimeout(() => tick(line, chars + 1), TYPE_MS);
      } else if (line < LINES.length - 1) {
        timer = setTimeout(() => tick(line + 1, 0), LINE_PAUSE_MS);
      } else {
        timer = setTimeout(() => tick(0, 0), LOOP_PAUSE_MS);
      }
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !running) {
          running = true;
          tick(0, 0);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-2xl border border-white/12 bg-[#0d0b08] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-cobalt/70" />
        <span className="mono ml-3 text-[11px] tracking-wide text-paper/35">
          bluebox · deploy
        </span>
      </div>
      <div className="min-h-[210px] px-5 py-5 font-mono text-[13px] leading-[1.9]">
        {LINES.map((l, i) => {
          if (!reduced && i > progress.line) return null;
          const text =
            reduced || i < progress.line ? l.text : l.text.slice(0, progress.chars);
          const isCurrent = !reduced && i === progress.line;
          return (
            <p key={i} className={l.cls}>
              {text}
              {isCurrent && (
                <span className="ml-0.5 inline-block h-[14px] w-[7px] translate-y-[2px] animate-pulse bg-paper/70" />
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
