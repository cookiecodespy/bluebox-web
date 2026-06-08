import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const REASONS = [
  {
    icon: "layers",
    title: "Dominio real de operaciones",
    desc: "Logística, SII, supply chain, procesos documentales. Hablamos tu idioma operativo, no solo el técnico.",
  },
  {
    icon: "badge",
    title: "Empresa chilena formal",
    desc: "Contratos, facturación, SLA y Ley 19.628. Cuando firmamos, respondemos — no desaparecemos.",
  },
  {
    icon: "plug",
    title: "Integramos lo imposible",
    desc: "¿No hay API? Usamos RPA. Conectamos WMS, ERP y sistemas legados donde los conectores estándar fallan.",
  },
  {
    icon: "ia",
    title: "IA con control humano",
    desc: "Agentes que ejecutan, pero piden aprobación en los puntos críticos y registran evidencia de cada decisión.",
  },
  {
    icon: "dev",
    title: "Código que tu equipo mantiene",
    desc: "Entregamos fuente documentada, sin vendor lock-in. Auditable, extensible y operable sin depender de nosotros.",
  },
  {
    icon: "clock",
    title: "Cerca y a tiempo",
    desc: "Zona horaria compatible con EE.UU. y LATAM, misma cultura de trabajo y respuesta en horario hábil.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Por qué BlueBox"
          title="Ventajas que no se improvisan"
          highlight="no se improvisan"
          description="Lo que separa a un socio tecnológico real de un proveedor más — y de la IA cruda."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <Card padding="lg" className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                  <Icon name={r.icon} className="h-[22px] w-[22px]" />
                </div>
                <h3 className="font-display text-[19px] font-medium tracking-[-0.01em] text-ink">
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{r.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
