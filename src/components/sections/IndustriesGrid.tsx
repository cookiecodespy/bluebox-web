import { INDUSTRIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function IndustriesGrid() {
  return (
    <section className="py-24 bg-slate-950">
      <Container>
        <SectionTitle
          eyebrow="Industrias"
          title="Automatización que entiende tu sector"
          highlight="entiende tu sector"
          description="Trabajamos con empresas de distintas industrias, adaptando cada solución a la realidad operacional de cada sector."
          centered
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="glass-dark rounded-2xl p-6 hover:bg-blue-900/20 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-4">{ind.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                {ind.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{ind.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
