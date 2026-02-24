import { CASES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <SectionTitle
          eyebrow="Casos de éxito"
          title="Resultados reales, procesos reales"
          highlight="Resultados reales"
          description="Ejemplos de impacto medible en empresas que automatizaron con Blue Box. Sin revelar datos confidenciales."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Metric header */}
              <div className="mesh-bg px-8 py-10 text-center">
                <div className="text-6xl font-extrabold gradient-text mb-2">
                  {c.metric}
                </div>
                <div className="text-slate-300 text-sm">{c.metricLabel}</div>
              </div>
              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <Badge variant="blue" className="mb-3 self-start">{c.industry}</Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{c.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {c.tags.map((tag) => (
                    <Badge key={tag} variant="slate">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
