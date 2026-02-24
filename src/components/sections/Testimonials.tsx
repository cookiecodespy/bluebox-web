import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

const TESTIMONIALS = [
  {
    quote:
      "Antes procesábamos las facturas a mano y teníamos errores todos los días. Ahora el sistema detecta cualquier discrepancia antes de que llegue a pago. Es como tener un auditor automático.",
    name: "Gerente de Operaciones",
    company: "Empresa de distribución, Santiago",
    initials: "GO",
  },
  {
    quote:
      "Intentamos integrar nuestro WMS con el ERP durante dos años sin éxito porque no había API. Blue Box lo resolvió con RPA en semanas y sin tocar los sistemas legados.",
    name: "CTO",
    company: "Retail nacional",
    initials: "CT",
  },
  {
    quote:
      "El agente de IA que nos construyeron maneja las aprobaciones de excepción por WhatsApp. Mis gerentes aprueban desde el celular y queda todo registrado. Simple y robusto.",
    name: "Director de Calidad",
    company: "Manufactura industrial",
    initials: "DQ",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen quienes ya automatizaron"
          highlight="quienes ya automatizaron"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
