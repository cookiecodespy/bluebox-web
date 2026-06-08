"use client";

import { useState } from "react";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <div key={i} className="border-b border-line">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-cobalt"
            aria-expanded={open === i}
          >
            <span className="flex items-center gap-4">
              <span className="mono text-xs text-cobalt">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-medium text-ink">
                {item.q}
              </span>
            </span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-cobalt transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden pl-[42px] pr-8 leading-relaxed text-ink-soft">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
