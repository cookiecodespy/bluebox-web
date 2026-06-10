import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CASES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Parallax } from "@/components/fx/Parallax";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Casos",
  description:
    "Ejemplos representativos del trabajo de BlueBox en logística, retail y manufactura. Casos con cliente y resultados verificados, disponibles bajo NDA.",
});

// Estructura problema → solución → resultado (cualitativa y honesta;
// los números con nombre se muestran bajo NDA).
const CASE_DETAIL: Record<
  string,
  { img: string; icon: string; problema: string; solucion: string; resultado: string }
> = {
  recepciones: {
    img: "/images/caso-logistica.jpg",
    icon: "logistica",
    problema:
      "Las recepciones se validaban a mano contra el ERP: lento, propenso a errores y sin registro de quién aprobó qué.",
    solucion:
      "Captura y normalización automática de documentos, comparación contra el ERP y una compuerta de aprobación humana antes de cada pago.",
    resultado:
      "Errores silenciosos eliminados del flujo y trazabilidad completa de cada recepción, con evidencia por operación.",
  },
  wms: {
    img: "/images/caso-retail.jpg",
    icon: "retail",
    problema:
      "Un WMS legado sin API obligaba a digitar dos veces cada orden de despacho — y cada error llegaba directo al cliente final.",
    solucion:
      "Conector RPA que lee la interfaz del WMS, extrae las órdenes y las sincroniza con el sistema de courier, sin reemplazar el WMS.",
    resultado:
      "Se acabó la doble digitación: las órdenes fluyen solas y el equipo se dedica a las excepciones, no a copiar datos.",
  },
  aprobaciones: {
    img: "/images/caso-manufactura.jpg",
    icon: "manufactura",
    problema:
      "Las excepciones de calidad se aprobaban por teléfono o pasillo: sin registro, sin hora y sin responsable claro al auditar.",
    solucion:
      "Un agente gestiona el flujo por WhatsApp: solicita la aprobación, registra la respuesta con fecha y hora, y arma el informe de auditoría solo.",
    resultado:
      "Cada decisión queda con evidencia y la auditoría pasa de días reconstruyendo papeles a minutos revisando un informe.",
  },
};

const PROCESS = [
  { title: "Diagnóstico", desc: "Mapeamos el proceso, identificamos la fricción y definimos la métrica de éxito." },
  { title: "Piloto", desc: "Construimos la solución más pequeña que demuestre valor. 4–8 semanas." },
  { title: "Validación", desc: "Medimos contra el baseline y ajustamos hasta que los números confirman el impacto." },
  { title: "Escala", desc: "Extendemos a más procesos, usuarios y volumen, sobre una base ya probada." },
];

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="El tipo de problemas"
        accent="que resolvemos."
        sub="Ejemplos representativos de proyectos reales. Los nombres y los números completos se comparten bajo NDA — pídelos en una llamada."
      />

      <section className="pb-10">
        <Container>
          <div className="space-y-24">
            {CASES.map((c, i) => {
              const d = CASE_DETAIL[c.id];
              const reversed = i % 2 === 1;
              return (
                <Reveal key={c.id}>
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <Parallax amount={18}>
                      <MediaFrame src={d.img} alt={c.title} icon={d.icon} ratio="aspect-[4/3]" />
                    </Parallax>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="accent">{c.industry}</Badge>
                        {c.tags.map((tag) => (
                          <Badge key={tag}>{tag}</Badge>
                        ))}
                      </div>
                      <h2 className="mt-5 font-display text-[clamp(1.45rem,2.3vw,1.85rem)] font-medium leading-snug tracking-[-0.015em] text-ink">
                        {c.title}
                      </h2>

                      <dl className="mt-6 space-y-4">
                        {(
                          [
                            ["El problema", d.problema],
                            ["Lo que construimos", d.solucion],
                            ["El resultado", d.resultado],
                          ] as const
                        ).map(([label, text]) => (
                          <div key={label} className="border-l-2 border-line pl-4 transition-colors hover:border-cobalt">
                            <dt className="kicker !text-[11px]">{label}</dt>
                            <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{text}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* NDA como fortaleza: pide referencias */}
      <section className="ink-section relative my-24 overflow-hidden py-20">
        <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[560px] -translate-x-1/2"
          style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.2), transparent 62%)" }}
        />
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="kicker !text-paper/55 flex items-center justify-center gap-3">
                <span className="inline-block h-px w-6 bg-cobalt" /> Confidencialidad
              </p>
              <h2 className="mt-6 font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.025em] text-paper">
                Los nombres importan. <span className="text-cobalt">Por eso los cuidamos.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-relaxed text-paper/65">
                Trabajamos bajo NDA: la operación de nuestros clientes no es material de
                marketing. En una llamada te mostramos los casos con nombre, números
                y referencias que puedes contactar directamente.
              </p>
              <Button href="/contacto" size="lg" className="mt-9 !py-3.5 text-[15.5px]">
                Pide referencias
                <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <p className="mono mt-4 text-[11.5px] tracking-[0.04em] text-paper/45">
                La misma confidencialidad protegerá tu operación
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Proceso */}
      <section className="pb-24">
        <Container>
          <p className="kicker mb-4 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> Cómo lo hacemos
          </p>
          <h2 className="mb-12 max-w-[20ch] font-display text-[2rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink md:text-[2.4rem]">
            De problema a solución en <span className="text-cobalt">cuatro pasos</span>
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <div
                key={step.title}
                className="group bg-paper p-7 transition-colors duration-300 hover:bg-paper-2"
              >
                <span className="inline-block h-px w-6 bg-cobalt transition-all duration-300 group-hover:w-10" />
                <h3 className="mt-4 flex items-center gap-2 font-display text-lg font-medium text-ink">
                  {step.title}
                  {i < PROCESS.length - 1 && (
                    <span className="text-cobalt/50 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  )}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
