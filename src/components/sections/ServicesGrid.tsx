import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesGrid() {
  return (
    <section className="bg-paper-2/40 py-24">
      <Container>
        <SectionTitle
          eyebrow="Servicios"
          title="Capacidades de extremo a extremo"
          highlight="extremo a extremo"
          description="Las piezas técnicas que combinamos para resolver cualquier frente — desde el código hasta la operación en producción."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 90}>
              <Card hover padding="lg" className="h-full">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                  <Icon name={service.icon} className="h-[22px] w-[22px]" />
                </div>
                <h3 className="font-display text-[19px] font-medium tracking-[-0.01em] text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-ink">
                      <span className="h-1 w-1 flex-shrink-0 bg-cobalt" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 border-b-[1.5px] border-ink pb-0.5 font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Ver detalle de servicios <span className="text-cobalt">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
