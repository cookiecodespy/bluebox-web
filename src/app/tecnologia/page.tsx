import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { TECH_STACK } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Tecnología",
  description:
    "Stack tecnológico de Blue Box: Python, Node.js, React, Next.js, n8n, OpenAI, LangChain, AWS y más. Sin vendor lock-in.",
});

const PRINCIPLES = [
  {
    title: "Sin vendor lock-in",
    description:
      "Cada tecnología que usamos tiene alternativas abiertas. Si una herramienta SaaS desaparece o sube su precio, el sistema puede migrar sin reescribirse.",
    icon: "🔓",
  },
  {
    title: "Código que puedes leer",
    description:
      "Entregamos el código fuente completo con documentación inline. Tu equipo técnico puede auditarlo, extenderlo o pasárselo a otra empresa.",
    icon: "📖",
  },
  {
    title: "Deploy en tu infraestructura",
    description:
      "Los sistemas se ejecutan en tu nube o on-premise. Nunca hay datos de producción en servidores de terceros sin tu consentimiento explícito.",
    icon: "🏗️",
  },
  {
    title: "Observabilidad por defecto",
    description:
      "Todo lo que construimos tiene logs, métricas y alertas desde el día 1. No descubres los problemas cuando el cliente llama.",
    icon: "📡",
  },
];

export default function TecnologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Tecnología
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Stack moderno.{" "}
              <span className="gradient-text">Sin cajas negras.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Usamos tecnologías probadas en producción, con comunidades activas
              y documentación sólida. Nada que no podamos explicar y que tu
              equipo no pueda mantener.
            </p>
          </div>
        </Container>
      </section>

      {/* Tech stack grid */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            eyebrow="Stack tecnológico"
            title="Herramientas que conocemos a fondo"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_STACK.map((group) => (
              <div
                key={group.category}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-5">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-800 font-medium text-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 bg-slate-50">
        <Container>
          <SectionTitle
            eyebrow="Principios de ingeniería"
            title="Construimos para el largo plazo"
            highlight="largo plazo"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
