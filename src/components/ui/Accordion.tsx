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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border border-slate-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors duration-150"
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <svg
              className={`w-5 h-5 text-blue-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                open === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
