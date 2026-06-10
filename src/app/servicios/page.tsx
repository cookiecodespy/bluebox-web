import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/fx/Parallax";
import { Tilt } from "@/components/fx/Tilt";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { ServiceRail } from "@/components/sections/ServiceRail";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Servicios",
  description:
    "Desarrollo a medida, integraciones y RPA, ingeniería de IA, data engineering, dashboards y QA/DevSecOps. Ingeniería de software de extremo a extremo.",
});

// Entregables tangibles por servicio — "qué te llevas" convierte capacidades
// abstractas en resultados que el cliente puede imaginar recibiendo.
const SERVICE_EXTRA: Record<string, { deliverables: string[] }> = {
  desarrollo: {
    deliverables: [
      "Código fuente tuyo, documentado y sin vendor lock-in",
      "Aplicación en producción, con monitoreo desde el día uno",
      "Manual de operación para tu equipo",
    ],
  },
  integraciones: {
    deliverables: [
      "Sistemas sincronizados — se acabó la doble digitación",
      "Robots RPA operando con logs auditables",
      "Alertas automáticas cuando algo se desvía",
    ],
  },
  ia: {
    deliverables: [
      "Agentes corriendo sobre tu operación real, no demos",
      "Panel de aprobaciones humanas con evidencia de cada decisión",
      "Métricas claras de horas ahorradas",
    ],
  },
  data: {
    deliverables: [
      "Datos limpios, estructurados y con un modelo claro",
      "Pipelines automáticos y monitoreados",
      "Base confiable lista para IA y reporting",
    ],
  },
  observabilidad: {
    deliverables: [
      "Dashboard vivo con los KPIs de tu operación",
      "Alertas a WhatsApp o correo cuando algo importa",
      "Trazabilidad de cada operación, con evidencia",
    ],
  },
  calidad: {
    deliverables: [
      "Suite de pruebas automatizada que corre sola",
      "Despliegues continuos sin downtime",
      "Infraestructura cloud documentada y reproducible",
    ],
  },
};

// Dolor típico al contratar tecnología vs. cómo lo resuelve BlueBox.
const PAINS = [
  "La agencia culpa al de infraestructura, y el de infraestructura a la agencia.",
  "El freelance que lo construyó ya no contesta.",
  "Nadie firma por el resultado completo — solo por su pedazo.",
];

const ANSWERS = [
  {
    icon: "filecheck",
    title: "Un contrato",
    desc: "SLA, plazos y garantías por escrito. Una empresa formal que firma y responde.",
  },
  {
    icon: "users",
    title: "Un equipo",
    desc: "Los que diseñan la solución son los mismos que la construyen y la operan.",
  },
  {
    icon: "message",
    title: "Una línea directa",
    desc: "Hablas con el equipo por WhatsApp — no con una mesa de ayuda que abre tickets.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios · Capacidades"
        title="Las piezas técnicas que combinamos para resolver"
        accent="cualquier frente."
        sub="Cada capacidad resuelve un problema concreto, pero están pensadas para integrarse y cubrir el ciclo completo — del código a la operación en producción."
      />

      {/* Servicios en profundidad — riel sticky + filas alternadas con visual */}
      <section className="pb-10">
        <Container>
          <div className="grid gap-10 xl:grid-cols-[210px_1fr] xl:gap-14">
            <ServiceRail items={SERVICES.map((s) => ({ id: s.id, title: s.title }))} />
            <div className="space-y-24">
            {SERVICES.map((service, i) => {
              const extra = SERVICE_EXTRA[service.id];
              const reversed = i % 2 === 1;
              return (
                <Reveal key={service.id}>
                  <div
                    id={`serv-${service.id}`}
                    className={`relative grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* ícono gigante de fondo, profundidad editorial */}
                    <div
                      className={`pointer-events-none absolute -top-10 hidden rotate-[8deg] text-ink opacity-[0.04] lg:block ${
                        reversed ? "-left-8" : "-right-8"
                      }`}
                      aria-hidden="true"
                    >
                      <Icon name={service.icon} className="h-64 w-64" strokeWidth={0.9} />
                    </div>

                    <Parallax amount={18}>
                      <Tilt max={4}>
                        <MediaFrame
                          src={`/images/serv-${service.id}.jpg`}
                          alt={service.title}
                          icon={service.icon}
                          ratio="aspect-[4/3]"
                        />
                      </Tilt>
                    </Parallax>

                    <div>
                      <div className="flex items-center gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper-2 text-cobalt">
                          <Icon name={service.icon} className="h-[22px] w-[22px]" />
                        </span>
                        <h2 className="font-display text-[clamp(1.5rem,2.4vw,1.9rem)] font-medium leading-tight tracking-[-0.015em] text-ink">
                          {service.title}
                        </h2>
                      </div>
                      <p className="mt-5 max-w-[52ch] text-[16.5px] leading-relaxed text-ink-soft">
                        {service.description}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.features.map((f) => (
                          <li
                            key={f}
                            className="rounded-full border border-line bg-paper-2 px-3 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-cobalt/40 hover:text-cobalt"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>

                      <p className="kicker mt-8 mb-3">Qué te llevas</p>
                      <ul className="space-y-2.5">
                        {extra.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-[15px] text-ink">
                            <span className="mt-[7px] h-1 w-1 flex-shrink-0 bg-cobalt" />
                            <span className="text-ink-soft">{d}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contacto"
                        className="mt-8 inline-flex items-center gap-2 border-b-[1.5px] border-ink/30 pb-0.5 text-[15px] font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt"
                      >
                        Conversemos sobre esto <span className="text-cobalt">→</span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            </div>
          </div>
        </Container>
      </section>

      {/* Dolor → solución: un solo responsable de extremo a extremo */}
      <section className="ink-section relative my-24 overflow-hidden py-24">
        <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[480px] w-[480px]"
          style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.18), transparent 62%)" }}
        />
        <Container>
          <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div>
                <p className="kicker !text-paper/55 flex items-center gap-3">
                  <span className="inline-block h-px w-6 bg-cobalt" /> El problema de siempre
                </p>
                <h2 className="mt-6 max-w-[18ch] font-display text-[clamp(1.9rem,3.4vw,2.7rem)] font-medium leading-[1.07] tracking-[-0.025em] text-paper">
                  ¿Te suena coordinar <span className="text-cobalt">tres proveedores</span> que
                  se culpan entre sí?
                </h2>
                <ul className="mt-7 space-y-3.5">
                  {PAINS.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-paper/65">
                      <span className="mt-[9px] h-1 w-1 flex-shrink-0 bg-paper/40" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="kicker !text-paper/55">Con BlueBox</p>
                <div className="mt-5 space-y-4">
                  {ANSWERS.map((a) => (
                    <GlowCard key={a.title} className="p-5">
                      <div className="flex items-start gap-4">
                        <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/12 text-cobalt">
                          <Icon name={a.icon} className="h-[19px] w-[19px]" />
                        </span>
                        <div>
                          <p className="text-[15.5px] font-semibold text-paper">{a.title}</p>
                          <p className="mt-1 text-[14px] leading-relaxed text-paper/60">{a.desc}</p>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
                <Button href="/contacto" size="lg" className="mt-8 !py-3.5 text-[15.5px]">
                  Agenda un diagnóstico
                  <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Button>
                <p className="mono mt-4 text-[11.5px] tracking-[0.04em] text-paper/45">
                  Sin costo · te llevas un plan, trabajemos juntos o no
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQ />
      <ContactCTA />
    </>
  );
}
