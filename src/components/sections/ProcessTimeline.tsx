import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Mapeamos el proceso, la fricción y la métrica de éxito. Sin esto, no empezamos: primero entendemos tu operación de verdad.",
    img: "/images/proc-diagnostico.jpg",
    icon: "data",
  },
  {
    n: "02",
    title: "Piloto",
    desc: "Construimos la solución más pequeña que demuestre valor real. 4–8 semanas, no 18 meses. Entregables que puedes tocar.",
    img: "/images/proc-piloto.jpg",
    icon: "dev",
  },
  {
    n: "03",
    title: "Validación",
    desc: "Medimos contra el baseline y ajustamos hasta que los números confirman el impacto. Decisiones con datos, no con fe.",
    img: "/images/proc-validacion.jpg",
    icon: "dash",
  },
  {
    n: "04",
    title: "Escala & soporte",
    desc: "Extendemos a más procesos, usuarios y volumen, sobre una base ya probada. Y lo mantenemos con SLA definido.",
    img: "/images/proc-escala.jpg",
    icon: "shield",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-28">
      <Container>
        <SectionTitle
          index="—"
          eyebrow="Cómo trabajamos"
          title="De problema a solución, sin humo"
          highlight="sin humo"
          description="Un proceso acotado y medible. Primero mostramos resultados en algo pequeño; luego escalamos."
        />
        <div className="space-y-6">
          {STEPS.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.n}>
                <div className="relative grid items-center gap-8 py-8 lg:grid-cols-2 lg:gap-16">
                  <span className="pointer-events-none absolute -top-4 left-0 select-none font-display text-[7rem] font-bold leading-none text-cobalt/[0.07] lg:text-[9rem]">
                    {s.n}
                  </span>
                  <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                    <div className="mono mb-3 text-[13px] text-cobalt">PASO {s.n}</div>
                    <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] font-medium tracking-[-0.02em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-[44ch] text-[16px] leading-relaxed text-ink-soft">
                      {s.desc}
                    </p>
                  </div>
                  <div className={flip ? "lg:order-1" : ""}>
                    <MediaFrame src={s.img} alt={s.title} icon={s.icon} ratio="aspect-[16/11]" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
