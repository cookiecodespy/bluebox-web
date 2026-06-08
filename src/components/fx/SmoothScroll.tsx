"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Scroll suave global (estilo Exadel). Respeta prefers-reduced-motion.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // anclas internas (#soluciones, etc.)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="/#"], a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!.split("#")[1];
      const el = id && document.getElementById(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -90 });
      }
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
