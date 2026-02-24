import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conoce al equipo de Blue Box: ingenieros y automatizadores especializados en crear sistemas que funcionan en el mundo real.",
});

const VALUES = [
  {
    icon: "🎯",
    title: "Resultados medibles",
    description:
      "No vendemos proyectos, vendemos resultados. Cada entregable tiene una métrica de éxito definida antes de empezar.",
  },
  {
    icon: "🔍",
    title: "Transparencia total",
    description:
      "Documentamos todo: arquitectura, decisiones de diseño y limitaciones. Sin cajas negras ni dependencia de nosotros.",
  },
  {
    icon: "⚡",
    title: "Velocidad sin apresurar",
    description:
      "Mostramos valor rápido con pilotos acotados, pero construimos sobre bases sólidas que escalan.",
  },
  {
    icon: "🛡️",
    title: "Operabilidad",
    description:
      "Todo lo que construimos debe poder ser operado por personas no técnicas. Si es demasiado complejo para mantener, lo rediseñamos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Nosotros
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ingenieros que construyen{" "}
              <span className="gradient-text">cosas que funcionan</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Blue Box nació en Santiago de Chile con una convicción simple: la
              automatización empresarial debe ser confiable, trazable y operable
              sin depender de los que la construyeron.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                eyebrow="Nuestra misión"
                title="Automatización con control humano"
                highlight="control humano"
              />
              <p className="text-slate-600 leading-relaxed mb-6">
                Creemos que la automatización no debe eliminar el criterio humano, sino
                amplificarlo. Construimos sistemas donde la máquina ejecuta lo repetitivo
                y el humano aprueba lo importante, con evidencia de cada decisión.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Cada proyecto que entregamos tiene documentación clara, monitoreo
                incorporado y un plan de continuidad. Cuando termina el contrato, tu
                equipo puede operar y extender el sistema sin depender de nosotros.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { n: "100%", label: "proyectos con documentación entregada" },
                  { n: "4–8", label: "semanas para un piloto funcional" },
                  { n: "0", label: "vendor lock-in por diseño" },
                  { n: "🇨🇱", label: "Equipo 100% en Chile" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4">
                    <div className="text-3xl font-extrabold text-blue-700 mb-2">{s.n}</div>
                    <div className="text-xs text-slate-500 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="Valores"
            title="Cómo trabajamos"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <Card key={v.title} hover padding="lg">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
