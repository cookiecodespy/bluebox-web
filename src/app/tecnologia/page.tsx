import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { TECH_STACK } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { TerminalDemo } from "@/components/fx/TerminalDemo";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Tecnología",
  description:
    "Stack tecnológico de BlueBox: Python, Node.js, React, Next.js, IA/LLM, RPA, datos y cloud. Sin vendor lock-in, código que tu equipo puede mantener.",
});

const PRINCIPLES = [
  {
    icon: "link",
    title: "Sin vendor lock-in",
    description:
      "Cada tecnología tiene alternativas abiertas. Si una herramienta SaaS sube su precio o desaparece, el sistema migra sin reescribirse.",
  },
  {
    icon: "dev",
    title: "Código que puedes leer",
    description:
      "Entregamos el código fuente con documentación inline. Tu equipo puede auditarlo, extenderlo o pasárselo a otra empresa.",
  },
  {
    icon: "dash",
    title: "Deploy en tu infraestructura",
    description:
      "Los sistemas corren en tu nube u on-premise. Nunca hay datos de producción en terceros sin tu consentimiento explícito.",
  },
  {
    icon: "data",
    title: "Observabilidad por defecto",
    description:
      "Todo lo que construimos tiene logs, métricas y alertas desde el día 1. No descubres los problemas cuando llama el cliente.",
  },
];

export default function TecnologiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Tecnología"
        title="Stack moderno,"
        accent="sin cajas negras."
        sub="Tecnologías probadas en producción, con comunidades activas y documentación sólida. Nada que no podamos explicar y tu equipo no pueda mantener."
      />

      {/* Stack */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((group, i) => (
              <Reveal key={group.category} delay={(i % 3) * 80}>
                <Card hover padding="lg" className="h-full">
                  <h3 className="kicker mb-5">{group.category}</h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="group/it flex items-center gap-2.5 text-[14.5px] text-ink transition-transform duration-200 hover:translate-x-1"
                      >
                        <span className="h-1 w-1 flex-shrink-0 bg-cobalt transition-transform duration-200 group-hover/it:scale-[1.8]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Del commit a producción — demostración de competencia */}
      <section className="ink-section relative overflow-hidden py-24">
        <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-[480px] w-[480px]"
          style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.16), transparent 62%)" }}
        />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <p className="kicker !text-paper/55 flex items-center gap-3">
                  <span className="inline-block h-px w-6 bg-cobalt" /> Así trabajamos
                </p>
                <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(1.9rem,3.4vw,2.8rem)] font-medium leading-[1.07] tracking-[-0.025em] text-paper">
                  Del commit a producción, <span className="text-cobalt">sin drama</span>.
                </h2>
                <p className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-paper/65">
                  Cada cambio pasa por pruebas automáticas y se despliega de forma
                  continua. Si algo falla, vuelve atrás solo — tu operación nunca
                  se entera.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Pruebas automáticas en cada cambio",
                    "Despliegue continuo, sin ventanas de corte",
                    "Rollback automático si algo se desvía",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[15px] text-paper/85">
                      <span className="h-1 w-1 flex-shrink-0 bg-cobalt" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <TerminalDemo />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principios */}
      <section className="bg-paper-2/40 py-24">
        <Container>
          <p className="kicker mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> Principios de ingeniería
          </p>
          <h2 className="mb-12 max-w-[20ch] font-display text-[2rem] font-medium tracking-[-0.02em] text-ink md:text-[2.4rem]">
            Construimos para el largo plazo
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <Card hover padding="lg" className="h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                    <Icon name={p.icon} className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="font-display text-[19px] font-medium text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
