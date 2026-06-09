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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-paper transition-all hover:-translate-y-0.5 hover:border-ink/20"
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
                      Leer <span className="text-cobalt">→</span>
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
