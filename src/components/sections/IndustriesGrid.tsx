import { INDUSTRIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function IndustriesGrid() {
  return (
    <section className="bg-paper-2/40 py-24">
      <Container>
        <SectionTitle
          index="04"
          eyebrow="Industrias"
          title="Conocemos el terreno de tu sector"
          highlight="tu sector"
          description="Adaptamos cada solución a la realidad operacional de la industria — no al revés."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={(i % 3) * 80}>
              <div className="group h-full rounded-[14px] border border-line bg-paper p-6 transition-colors hover:border-ink/20">
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl border border-line text-cobalt transition-colors group-hover:border-cobalt/40 group-hover:bg-cobalt/[0.06]">
                  <Icon name={ind.id} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-[18px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-cobalt">
                  {ind.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  {ind.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
