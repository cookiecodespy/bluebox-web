import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SOLUTIONS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.id === slug);
  return buildMetadata({
    title: sol ? sol.title : "Solución",
    description: sol?.intro,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sol = SOLUTIONS.find((s) => s.id === slug);
  if (!sol) notFound();
  const others = SOLUTIONS.filter((s) => s.id !== sol.id);

  return (
    <>
      <PageHero eyebrow="Solución" title={sol.title} sub={sol.intro} />

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="kicker mb-6 flex items-center gap-3">
                <span className="inline-block h-px w-6 bg-cobalt" /> Qué incluye
              </p>
              <ul className="space-y-5">
                {sol.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg border border-line bg-paper text-cobalt">
                      <Icon name="badge" className="h-[15px] w-[15px]" />
                    </span>
                    <span className="text-[16px] leading-relaxed text-ink">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto"
                className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-cobalt px-6 py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-cobalt-deep"
              >
                Conversemos sobre esto
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <MediaFrame
              src={`/images/sol-${sol.id}.jpg`}
              alt={sol.title}
              icon={sol.id}
              ratio="aspect-[4/3]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper-2/40 py-24">
        <Container>
          <h2 className="mb-10 font-display text-[clamp(1.7rem,3vw,2.4rem)] font-medium tracking-[-0.02em] text-ink">
            Otras soluciones
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.id} delay={(i % 3) * 80}>
                <Link
                  href={`/soluciones/${o.id}`}
                  className="group flex h-full flex-col rounded-[14px] border border-line bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-cobalt">
                    <Icon name={o.id} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-[18px] font-medium tracking-[-0.01em] text-ink transition-colors group-hover:text-cobalt">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{o.blurb}</p>
                  <span className="mt-auto pt-5 text-[14px] font-semibold text-ink">
                    Ver solución <span className="text-cobalt">→</span>
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
