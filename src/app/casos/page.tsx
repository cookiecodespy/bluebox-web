import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CASES, CASES_NOTE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Casos",
  description:
    "Ejemplos representativos del trabajo de BlueBox en logística, retail y manufactura. Casos con cliente y resultados verificados, disponibles bajo NDA.",
});

const PROCESS = [
  { n: "01", title: "Diagnóstico", desc: "Mapeamos el proceso, identificamos la fricción y definimos la métrica de éxito." },
  { n: "02", title: "Piloto", desc: "Construimos la solución más pequeña que demuestre valor. 4–8 semanas." },
  { n: "03", title: "Validación", desc: "Medimos contra el baseline y ajustamos hasta que los números confirman el impacto." },
  { n: "04", title: "Escala", desc: "Extendemos a más procesos, usuarios y volumen, sobre una base ya probada." },
];

export default function CasosPage() {
  return (
    <>
      <PageHero
        eyebrow="Casos"
        title="El tipo de problemas"
        accent="que resolvemos."
        sub={CASES_NOTE}
      />

      <section className="pb-8">
        <Container>
          <div className="border-t border-line">
            {CASES.map((c, i) => (
              <Reveal key={c.id}>
                <div className="grid gap-6 border-b border-line py-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
                  <div className="flex items-start justify-between lg:flex-col lg:gap-5">
                    <div className="flex items-center gap-3">
                      <span className="mono text-[13px] text-ink-mute">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Badge variant="accent">{c.industry}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:mt-auto">
                      {c.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-medium leading-snug tracking-[-0.01em] text-ink">
                      {c.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
                      {c.summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Proceso */}
      <section className="bg-paper-2/40 py-24">
        <Container>
          <p className="kicker mb-4 flex items-center gap-3">
            <span className="text-cobalt">→</span> Cómo lo hacemos
          </p>
          <h2 className="mb-12 max-w-[20ch] font-display text-[2rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink md:text-[2.4rem]">
            De problema a solución en cuatro pasos
          </h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step) => (
              <div key={step.n} className="bg-paper p-7">
                <div className="mono text-[13px] text-cobalt">{step.n}</div>
                <h3 className="mt-4 font-display text-lg font-medium text-ink">{step.title}</h3>
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
