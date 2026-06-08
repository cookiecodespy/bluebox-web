"use client";

import { useEffect, useRef } from "react";

// Red de "operaciones" viva: nodos (sistemas) + conexiones + pulsos de datos.
// On-brand cobalto sobre tinta. Parallax al puntero. Respeta reduced-motion.
export function HeroCanvas({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Aliases no-null para que TS los acepte dentro de los closures (build/draw).
    const cv: HTMLCanvasElement = canvas;
    const g: CanvasRenderingContext2D = ctx;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0,
      h = 0,
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0.5, y: 0.4, tx: 0.5, ty: 0.4 };

    type Node = { x: number; y: number; bx: number; by: number; ph: number; sp: number; amp: number; hub: boolean };
    let nodes: Node[] = [];
    let edges: [number, number][] = [];
    let pulses: { e: number; t: number; sp: number }[] = [];
    let D = 200;

    function build() {
      const rect = cv.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.max(5, Math.round(w / 155));
      const rows = Math.max(4, Math.round(h / 140));
      nodes = [];
      for (let i = 0; i < cols; i++)
        for (let j = 0; j < rows; j++) {
          const bx = ((i + 0.5) / cols) * w + (Math.random() * 2 - 1) * 36;
          const by = ((j + 0.5) / rows) * h + (Math.random() * 2 - 1) * 36;
          nodes.push({
            x: bx, y: by, bx, by,
            ph: Math.random() * Math.PI * 2,
            sp: 0.0004 + Math.random() * 0.0006,
            amp: 7 + Math.random() * 13,
            hub: Math.random() < 0.14,
          });
        }

      D = Math.min(w, h) * 0.22 + 70;
      edges = [];
      for (let a = 0; a < nodes.length; a++)
        for (let b = a + 1; b < nodes.length; b++) {
          if (Math.hypot(nodes[a].bx - nodes[b].bx, nodes[a].by - nodes[b].by) < D) edges.push([a, b]);
        }

      pulses = [];
      const count = Math.min(20, Math.floor(edges.length * 0.05));
      for (let k = 0; k < count; k++)
        pulses.push({ e: Math.floor(Math.random() * edges.length), t: Math.random(), sp: 0.003 + Math.random() * 0.004 });
    }

    function draw(time: number) {
      g.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const ox = (mouse.x - 0.5) * 20;
      const oy = (mouse.y - 0.5) * 20;

      for (const n of nodes) {
        if (reduced) { n.x = n.bx; n.y = n.by; }
        else { n.x = n.bx + Math.cos(n.ph + time * n.sp) * n.amp; n.y = n.by + Math.sin(n.ph + time * n.sp) * n.amp; }
      }

      for (const [a, b] of edges) {
        const na = nodes[a], nb = nodes[b];
        const dist = Math.hypot(na.x - nb.x, na.y - nb.y);
        const alpha = Math.max(0, 1 - dist / D) * 0.3;
        if (alpha <= 0.01) continue;
        g.strokeStyle = `rgba(74,104,255,${alpha})`;
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(na.x + ox, na.y + oy);
        g.lineTo(nb.x + ox, nb.y + oy);
        g.stroke();
      }

      if (!reduced)
        for (const p of pulses) {
          p.t += p.sp;
          if (p.t > 1) { p.t = 0; p.e = Math.floor(Math.random() * edges.length); }
          const edge = edges[p.e];
          if (!edge) continue;
          const na = nodes[edge[0]], nb = nodes[edge[1]];
          const x = na.x + (nb.x - na.x) * p.t + ox;
          const y = na.y + (nb.y - na.y) * p.t + oy;
          g.fillStyle = "rgba(125,155,255,0.9)";
          g.beginPath();
          g.arc(x, y, 1.8, 0, Math.PI * 2);
          g.fill();
        }

      const mx = mouse.x * w, my = mouse.y * h;
      for (const n of nodes) {
        const near = Math.max(0, 1 - Math.hypot(n.x - mx, n.y - my) / 220);
        if (n.hub) {
          g.fillStyle = `rgba(70,100,255,${0.12 + near * 0.22})`;
          g.beginPath();
          g.arc(n.x + ox, n.y + oy, 8 + near * 6, 0, Math.PI * 2);
          g.fill();
          g.fillStyle = `rgba(120,150,255,${0.75 + near * 0.25})`;
          g.beginPath();
          g.arc(n.x + ox, n.y + oy, 2.6, 0, Math.PI * 2);
          g.fill();
        } else {
          g.fillStyle = `rgba(150,165,215,${0.22 + near * 0.5})`;
          g.beginPath();
          g.arc(n.x + ox, n.y + oy, 1.4, 0, Math.PI * 2);
          g.fill();
        }
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    }

    let raf = 0;
    build();
    raf = requestAnimationFrame(draw);

    const onResize = () => { dpr = Math.min(window.devicePixelRatio || 1, 2); build(); };
    const onMove = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.tx = (e.clientX - r.left) / r.width;
      mouse.ty = (e.clientY - r.top) / r.height;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
