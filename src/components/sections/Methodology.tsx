import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const PRACTICES = [
  { icon: "filecheck", title: "Pruebas automatizadas", desc: "Tests que corren en cada cambio: lo que entregamos no se rompe en silencio." },
  { icon: "branch", title: "CI/CD", desc: "Integración y despliegue continuos. Cada versión es trazable y reversible." },
  { icon: "message", title: "Revisión de código", desc: "Nada llega a producción sin que otro par de ojos lo revise." },
  { icon: "dash", title: "Observabilidad", desc: "Logs, métricas y alertas desde el día 1. Detectamos antes de que llame el cliente." },
];

export function Methodology() {
  return (
    <section className="bg-paper-2/40 py-24">
      <Container>
        <SectionTitle
          eyebrow="Metodología"
          title="Calidad que se nota en producción"
          highlight="en producción"
          description="No improvisamos: prácticas de ingeniería que mantienen tu sistema estable y mantenible."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 70}>
              <Card padding="lg" className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                  <Icon name={p.icon} className="h-[22px] w-[22px]" />
                </div>
                <h3 className="font-display text-[17px] font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{p.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
