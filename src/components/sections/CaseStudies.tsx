import { CASES, CASES_NOTE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";

const CASE_IMG: Record<string, { src: string; icon: string }> = {
  recepciones: { src: "/images/caso-logistica.jpg", icon: "logistica" },
  wms: { src: "/images/caso-retail.jpg", icon: "retail" },
  aprobaciones: { src: "/images/caso-manufactura.jpg", icon: "manufactura" },
};

export function CaseStudies() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Casos"
          title="El tipo de problemas que resolvemos"
          highlight="que resolvemos"
          description={CASES_NOTE}
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 90}>
              <Card hover padding="lg" className="flex h-full flex-col">
                <MediaFrame
                  src={CASE_IMG[c.id]?.src}
                  alt={c.title}
                  icon={CASE_IMG[c.id]?.icon ?? "data"}
                  ratio="aspect-[16/10]"
                  className="mb-6"
                />
                <div className="mb-5">
                  <Badge variant="accent">{c.industry}</Badge>
                </div>
                <h3 className="font-display text-[19px] font-medium leading-snug tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">
                  {c.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
