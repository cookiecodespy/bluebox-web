import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

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
];

export function Testimonials() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que cambia cuando el sistema responde"
          highlight="el sistema responde"
          description="Testimonios representativos del tipo de impacto que entregamos. Casos con cliente y cifras verificadas, disponibles bajo NDA."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <Reveal key={t.role} delay={(i % 3) * 90}>
              <figure className="flex h-full flex-col rounded-[14px] border border-line bg-paper-2 p-7">
                <div className="mb-5 flex gap-1 text-cobalt">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <svg key={k} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.07 3.29a1 1 0 00.95.69h3.46c.97 0 1.37 1.24.59 1.81l-2.8 2.03a1 1 0 00-.36 1.12l1.07 3.29c.3.92-.76 1.69-1.54 1.12l-2.8-2.03a1 1 0 00-1.18 0l-2.8 2.03c-.78.57-1.83-.2-1.54-1.12l1.07-3.29a1 1 0 00-.36-1.12L2.83 9.42c-.78-.57-.38-1.81.59-1.81h3.46a1 1 0 00.95-.69l1.07-3.29z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-[15.5px] leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <div className="font-display text-[15px] font-medium text-ink">{t.role}</div>
                  <div className="kicker mt-1 normal-case">{t.sector}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
