import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/lib/insights";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Insights",
  description:
    "Ideas sobre datos, IA, integración y automatización — lo que aprendemos poniendo tecnología a trabajar de verdad.",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas que aplicamos"
        accent="todos los días."
        sub="Lo que aprendemos integrando, automatizando y poniendo IA a trabajar en operaciones reales. Sin humo."
      />
      <section className="pb-24">
        <Container>
          {/* Destacado editorial */}
          {ARTICLES[0] && (
            <Reveal>
              <Link
                href={`/insights/${ARTICLES[0].slug}`}
                className="group mb-6 grid overflow-hidden rounded-[14px] border border-line bg-paper transition-all hover:-translate-y-0.5 hover:border-cobalt/30 hover:shadow-[0_22px_50px_-30px_rgba(23,20,16,0.55)] md:grid-cols-2"
              >
                <MediaFrame
                  src={ARTICLES[0].img}
                  alt={ARTICLES[0].title}
                  icon={ARTICLES[0].icon}
                  ratio="aspect-[16/10] md:aspect-auto md:h-full"
                  className="rounded-none border-0 border-b border-line md:border-b-0 md:border-r"
                />
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <span className="kicker flex items-center gap-2.5">
                    <span className="rounded-full bg-cobalt/10 px-2.5 py-1 !text-cobalt">Destacado</span>
                    {ARTICLES[0].category} · {ARTICLES[0].readMin} min
                  </span>
                  <h2 className="mt-4 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-medium leading-snug tracking-[-0.015em] text-ink transition-colors group-hover:text-cobalt">
                    {ARTICLES[0].title}
                  </h2>
                  <p className="mt-3 max-w-[52ch] text-[15.5px] leading-relaxed text-ink-soft">
                    {ARTICLES[0].excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-ink">
                    Leer artículo
                    <span className="text-cobalt transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTICLES.slice(1).map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-paper transition-all hover:-translate-y-0.5 hover:border-cobalt/30"
                >
                  <MediaFrame
                    src={a.img}
                    alt={a.title}
                    icon={a.icon}
                    ratio="aspect-[16/10]"
                    className="rounded-none border-0 border-b border-line"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="kicker">{a.category} · {a.readMin} min</span>
                    <h2 className="mt-3 font-display text-[18px] font-medium leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-cobalt">
                      {a.title}
                    </h2>
                    <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{a.excerpt}</p>
                    <span className="mt-auto pt-5 text-[14px] font-semibold text-ink">
                      Leer <span className="text-cobalt transition-transform group-hover:translate-x-1 inline-block">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
