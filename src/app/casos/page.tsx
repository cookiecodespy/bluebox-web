import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CASES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Casos de éxito",
  description:
    "Resultados medibles en proyectos reales: -70% errores, +3x velocidad, 100% trazabilidad. Blue Box en acción.",
});

export default function CasosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Casos de éxito
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Resultados que se{" "}
              <span className="gradient-text">pueden medir</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Cada caso muestra el problema real, la solución implementada y el
              impacto medido. Sin revelar información confidencial de clientes.
            </p>
          </div>
        </Container>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-12">
            {CASES.map((c, idx) => (
              <div
                key={c.id}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch ${
                  idx < CASES.length - 1 ? "pb-12 border-b border-slate-100" : ""
                }`}
              >
                {/* Metric */}
                <div className="mesh-bg rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-7xl font-extrabold gradient-text mb-2">{c.metric}</div>
                  <div className="text-slate-300 text-sm">{c.metricLabel}</div>
                  <Badge variant="navy" className="mt-4">{c.industry}</Badge>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
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

      {/* Process teaser */}
      <section className="py-16 bg-slate-50">
        <Container size="lg">
          <SectionTitle
            eyebrow="¿Cómo lo hacemos?"
            title="De problema a solución en 4 pasos"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "01", title: "Diagnóstico", desc: "Mapeamos el proceso, identificamos la fricción y definimos la métrica de éxito." },
              { n: "02", title: "Piloto", desc: "Construimos la solución más pequeña que demuestre valor. 4–8 semanas." },
              { n: "03", title: "Validación", desc: "Medimos contra el baseline. Ajustamos hasta que los números confirman el impacto." },
              { n: "04", title: "Escala", desc: "Extendemos a más procesos, más usuarios, más volumen. Con la base ya probada." },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="text-4xl font-extrabold text-blue-100 mb-3">{step.n}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
