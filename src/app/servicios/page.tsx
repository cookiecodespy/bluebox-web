import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Servicios",
  description:
    "Desarrollo a medida, integraciones y RPA, ingeniería de IA, data engineering, dashboards y QA/DevSecOps. Ingeniería de software de extremo a extremo.",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios · Capacidades"
        title="Las piezas técnicas que combinamos para resolver"
        accent="cualquier frente."
        sub="Cada capacidad resuelve un problema concreto, pero están pensadas para integrarse y cubrir el ciclo completo — del código a la operación en producción."
      />

      <section className="pb-24">
        <Container>
          <div className="border-t border-line">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id}>
                <div className="grid gap-7 border-b border-line py-12 lg:grid-cols-[auto_1fr] lg:gap-16">
                  <div className="flex items-start gap-5">
                    <span className="mono pt-2 text-[13px] font-medium text-cobalt">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="grid h-14 w-14 place-items-center rounded-xl border border-line bg-paper-2 text-cobalt">
                      <Icon name={service.icon} className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-medium tracking-[-0.01em] text-ink">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink">
                          <span className="h-1 w-1 flex-shrink-0 bg-cobalt" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FAQ />
      <ContactCTA />
    </>
  );
}
