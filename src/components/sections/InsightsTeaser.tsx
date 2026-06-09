import Link from "next/link";
import { ARTICLES } from "@/lib/insights";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";

export function InsightsTeaser() {
  const posts = ARTICLES.slice(0, 3);
  return (
    <section className="bg-paper-2/40 py-24">
      <Container>
        <SectionTitle
          eyebrow="Insights"
          title="Ideas que aplicamos todos los días"
          highlight="Ideas"
          description="Lo que aprendemos integrando, automatizando y poniendo IA a trabajar de verdad."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link
                href={`/insights/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-paper transition-all hover:-translate-y-0.5 hover:border-ink/20"
              >
                <MediaFrame
                  src={p.img}
                  alt={p.title}
                  icon={p.icon}
                  ratio="aspect-[16/10]"
                  className="rounded-none border-0 border-b border-line"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="kicker">{p.category} · {p.readMin} min</span>
                  <h3 className="mt-3 font-display text-[18px] font-medium leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-cobalt">
                    {p.title}
                  </h3>
                  <span className="mt-auto pt-5 text-[14px] font-semibold text-ink">
                    Leer <span className="text-cobalt">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 border-b-[1.5px] border-ink pb-0.5 font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Ver todos los Insights <span className="text-cobalt">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
