import Link from "next/link";
import { SOLUTIONS } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function SolutionsList() {
  return (
    <section id="soluciones" className="scroll-mt-24 py-24">
      <Container>
        <SectionTitle
          index="01"
          eyebrow="Soluciones"
          title="Soluciones orientadas a resultado"
          highlight="resultado"
          description="No hacemos 'un poco de todo': cada frente está acotado, es medible y queda bajo un mismo responsable. Amplitud, pero organizada."
        />

        <div className="grid border-t border-line md:grid-cols-2 md:gap-x-14">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 80}>
              <Link
                href={`/soluciones/${s.id}`}
                className="group flex items-start gap-5 border-b border-line py-7"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-line bg-paper text-cobalt transition-colors group-hover:border-cobalt/40 group-hover:bg-cobalt/[0.06]">
                  <Icon name={s.id} className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-cobalt">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {s.blurb}
                  </p>
                </div>
                <span className="mt-1 text-ink-mute transition-all group-hover:translate-x-0.5 group-hover:text-cobalt">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
