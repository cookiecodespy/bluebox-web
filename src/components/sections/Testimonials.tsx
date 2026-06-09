"use client";

import { useRef } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

const QUOTES = [
  {
    quote:
      "Antes procesábamos las facturas a mano y teníamos errores todos los días. Ahora el sistema detecta cualquier discrepancia antes de que llegue a pago.",
    role: "Gerente de Operaciones",
    sector: "Distribución",
  },
  {
    quote:
      "Intentamos integrar el WMS con el ERP por años porque no había API. Lo resolvieron con RPA en semanas, sin tocar los sistemas legados.",
    role: "CTO",
    sector: "Retail",
  },
  {
    quote:
      "El agente maneja las aprobaciones de excepción por WhatsApp. Mis gerentes aprueban desde el celular y queda todo registrado. Simple y robusto.",
    role: "Director de Calidad",
    sector: "Manufactura",
  },
  {
    quote:
      "Lo que más valoro es que el código es nuestro y está documentado. Cuando creció el equipo interno, pudieron tomarlo sin depender de nadie.",
    role: "Gerente de TI",
    sector: "Servicios financieros",
  },
  {
    quote:
      "Trabajan como una empresa formal de verdad: contrato, SLA y respuestas en horario. Eso nos dio la confianza para escalar el proyecto.",
    role: "Subgerente de Operaciones",
    sector: "Logística",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="py-24">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionTitle
            eyebrow="Testimonios"
            title="Lo que cambia cuando el sistema responde"
            highlight="el sistema responde"
            description="Testimonios representativos del impacto que entregamos. Casos con cliente y cifras verificadas, bajo NDA."
          />
          <div className="mb-14 hidden flex-shrink-0 gap-3 sm:flex">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-cobalt hover:text-cobalt"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-cobalt hover:text-cobalt"
            >
              →
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:px-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] [&::-webkit-scrollbar]:hidden"
      >
        {QUOTES.map((t) => (
          <figure
            key={t.role}
            className="flex w-[88%] flex-shrink-0 snap-start flex-col rounded-[14px] border border-line bg-paper-2 p-8 sm:w-[420px]"
          >
            <div className="mb-5 flex gap-1 text-cobalt">
              {Array.from({ length: 5 }).map((_, k) => (
                <svg key={k} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.83-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12L2.83 9.42c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z" />
                </svg>
              ))}
            </div>
            <blockquote className="flex-1 text-[16px] leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <div className="font-display text-[15px] font-medium text-ink">{t.role}</div>
              <div className="kicker mt-1 normal-case">{t.sector}</div>
            </figcaption>
          </figure>
        ))}
        <div className="w-1 flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
