"use client";

import { useEffect, useState } from "react";

// Riel lateral sticky: sigue el scroll y resalta el servicio visible.
// Clic → scroll suave (SmoothScroll intercepta los #anclas).
export function ServiceRail({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id.replace("serv-", ""));
        }
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    for (const it of items) {
      const el = document.getElementById(`serv-${it.id}`);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="Servicios en esta página" className="sticky top-32 hidden self-start xl:block">
      <ul className="space-y-1 border-l border-line">
        {items.map((it) => {
          const isActive = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#serv-${it.id}`}
                className={`group flex items-center gap-3 py-2 pl-4 text-[13px] transition-colors ${
                  isActive ? "text-cobalt" : "text-ink-mute hover:text-ink"
                }`}
              >
                <span
                  className={`h-px bg-cobalt transition-all duration-300 ${
                    isActive ? "w-5" : "w-0 group-hover:w-3"
                  }`}
                />
                <span className={isActive ? "font-semibold" : "font-medium"}>{it.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
