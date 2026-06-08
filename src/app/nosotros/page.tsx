import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "BlueBox: empresa chilena de ingeniería de software. Sistemas confiables, trazables y operables — con la responsabilidad de una empresa formal.",
});

const VALUES = [
  {
    icon: "data",
    title: "Resultados, no entregables",
    description:
      "Cada proyecto tiene una métrica de éxito definida antes de empezar. No vendemos horas, resolvemos problemas.",
  },
  {
    icon: "ai",
    title: "Transparencia total",
    description:
      "Documentamos arquitectura, decisiones y límites. Sin cajas negras ni dependencia de nosotros.",
  },
  {
    icon: "spark",
    title: "Velocidad sin apurar",
    description:
      "Mostramos valor rápido con pilotos acotados, pero construimos sobre bases sólidas que escalan.",
  },
  {
    icon: "shield",
    title: "Operabilidad",
    description:
      "Todo lo que construimos debe poder operarlo gente no técnica. Si es muy complejo de mantener, lo rediseñamos.",
  },
];

const STATS = [
  { n: "+10", label: "años de trayectoria formal" },
  { n: "4–8", label: "semanas para un piloto" },
  { n: "0", label: "vendor lock-in por diseño" },
  { n: "Chile", label: "equipo · zona horaria EE.UU." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Ingenieros que construyen"
        accent="cosas que funcionan."
        sub="BlueBox es una empresa chilena formal con la convicción de que el software crítico debe ser confiable, trazable y operable sin depender de quien lo construyó."
      />

      {/* Misión */}
      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="kicker mb-5 flex items-center gap-3">
                <span className="inline-block h-px w-6 bg-cobalt" /> Nuestra misión
              </p>
              <h2 className="font-display text-[2rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.4rem]">
                Tecnología con <span className="text-cobalt">control humano</span>
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Creemos que la automatización no debe reemplazar el criterio humano, sino
                amplificarlo: la máquina ejecuta lo repetitivo y la persona aprueba lo
                importante, con evidencia de cada decisión.
              </p>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Cada proyecto se entrega con documentación clara, monitoreo incorporado y
                un plan de continuidad. Cuando termina el contrato, tu equipo opera y
                extiende el sistema sin depender de nosotros.
              </p>
            </div>
            <div className="rounded-[14px] border border-line bg-paper-2 p-8">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-paper-2 p-6 text-center">
                    <div className="font-display text-[2rem] font-semibold tracking-[-0.02em] text-cobalt">
                      {s.n}
                    </div>
                    <div className="kicker mt-2 normal-case leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="bg-paper-2/40 py-24">
        <Container>
          <p className="kicker mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> Cómo trabajamos
          </p>
          <h2 className="mb-12 font-display text-[2rem] font-medium tracking-[-0.02em] text-ink md:text-[2.4rem]">
            Cuatro principios, sin excepción
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 80}>
                <Card padding="lg" className="h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                    <Icon name={v.icon} className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="font-display text-[19px] font-medium text-ink">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{v.description}</p>
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
