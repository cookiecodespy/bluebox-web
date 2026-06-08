import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const ROLES = [
  { icon: "layers", role: "Solution Architect", note: "Diseña la arquitectura" },
  { icon: "badge", role: "Product Owner", note: "Traduce negocio a entregables" },
  { icon: "server", role: "Dev Backend", note: "APIs, datos e integraciones" },
  { icon: "dev", role: "Dev Frontend", note: "Interfaces que se usan" },
  { icon: "filecheck", role: "QA & Testing", note: "Calidad antes de producción" },
  { icon: "cloud", role: "Cloud & DevOps", note: "Despliegue y estabilidad" },
  { icon: "ia", role: "Data & IA", note: "Modelos, agentes y datos" },
  { icon: "lock", role: "Ciberseguridad", note: "Protección y cumplimiento" },
];

export function OrgRoles() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="El equipo que ponemos"
          title="Un equipo completo, no un freelance suelto"
          highlight="equipo completo"
          description="Cada proyecto recibe los perfiles que necesita — coordinados bajo un mismo responsable."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {ROLES.map((r, i) => (
            <Reveal key={r.role} delay={(i % 4) * 70}>
              <div className="group h-full rounded-[14px] border border-line bg-paper-2 p-6 text-center transition-colors hover:border-cobalt/30">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt transition-colors group-hover:bg-cobalt/[0.06]">
                  <Icon name={r.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-4 font-display text-[15.5px] font-medium text-ink">{r.role}</h3>
                <p className="mt-1.5 text-[13px] leading-snug text-ink-soft">{r.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
