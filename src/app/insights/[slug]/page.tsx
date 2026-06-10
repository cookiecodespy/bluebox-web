import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES, type Block } from "@/lib/insights";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLES.find((x) => x.slug === slug);
  return buildMetadata({ title: a ? a.title : "Insight", description: a?.excerpt });
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "h")
    return <h2 className="mt-12 font-display text-[1.6rem] font-medium tracking-[-0.02em] text-ink">{block.text}</h2>;
  if (block.type === "p")
    return <p className="mt-5 text-[17px] leading-[1.75] text-ink-soft">{block.text}</p>;
  if (block.type === "ul")
    return (
      <ul className="mt-5 space-y-3">
        {block.items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink-soft">
            <span className="mt-2.5 h-1 w-1 flex-shrink-0 bg-cobalt" />
            {it}
          </li>
        ))}
      </ul>
    );
  return (
    <blockquote className="mt-8 border-l-2 border-cobalt pl-6 font-display text-[1.4rem] font-medium leading-snug tracking-[-0.01em] text-ink">
      {block.text}
    </blockquote>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((x) => x.slug === slug);
  if (!article) notFound();
  const others = ARTICLES.filter((x) => x.slug !== article.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-36 pb-12">
          <div className="bp-grid-fade pointer-events-none absolute inset-0" />
          <Container size="md">
            <Link href="/insights" className="kicker inline-flex items-center gap-2 transition-colors hover:text-cobalt">
              <span className="text-cobalt">←</span> Insights
            </Link>
            <p className="kicker mt-6">{article.category} · {article.readMin} min de lectura</p>
            <h1 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.1rem)] font-medium leading-[1.07] tracking-[-0.025em] text-ink">
              {article.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{article.excerpt}</p>
          </Container>
        </header>

        <Container size="md">
          <MediaFrame src={article.img} alt={article.title} icon={article.icon} ratio="aspect-[16/9]" />
          <div className="mx-auto max-w-[68ch] pb-8 pt-4">
            {article.body.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>
          <div className="mx-auto max-w-[68ch] border-t border-line pt-8">
            <Button href="/contacto" size="lg" className="!py-3.5 text-[15.5px]">
              ¿Te pasa esto? Conversemos
              <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>
        </Container>
      </article>

      <section className="mt-24 bg-paper-2/40 py-24">
        <Container>
          <h2 className="mb-10 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-medium tracking-[-0.02em] text-ink">
            Más Insights
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/insights/${o.slug}`}
                  className="group flex h-full flex-col rounded-[14px] border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20"
                >
                  <span className="kicker">{o.category} · {o.readMin} min</span>
                  <h3 className="mt-3 font-display text-[17px] font-medium leading-snug tracking-[-0.01em] text-ink transition-colors group-hover:text-cobalt">
                    {o.title}
                  </h3>
                  <span className="mt-auto pt-5 text-[14px] font-semibold text-ink">
                    Leer <span className="text-cobalt">→</span>
                  </span>
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
