import { TECH_STACK } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function TechStackSection() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Stack"
          title="Tecnología moderna, probada en producción"
          highlight="probada en producción"
          description="Herramientas con comunidad activa y soporte de largo plazo. Nada que no podamos explicar ni que tu equipo no pueda mantener."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 70}>
              <Card hover className="h-full">
                <h3 className="kicker mb-5">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt/40 hover:text-cobalt"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
