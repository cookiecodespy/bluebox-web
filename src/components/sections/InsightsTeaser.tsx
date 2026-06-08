import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";

const POSTS = [
  {
    cat: "Datos & IA",
    title: "Por qué tu IA falla: el problema casi siempre son los datos",
    img: "/images/insight-1.jpg",
    icon: "ia",
  },
  {
    cat: "Integración",
    title: "RPA cuando no hay API: cómo conectar un WMS legado sin reescribirlo",
    img: "/images/insight-2.jpg",
    icon: "plug",
  },
  {
    cat: "Operaciones",
    title: "Automatizar con control: aprobaciones humanas con evidencia",
    img: "/images/insight-3.jpg",
    icon: "filecheck",
  },
];

export function InsightsTeaser() {
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
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <Link
                href="/contacto"
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
                  <span className="kicker">{p.cat}</span>
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
      </Container>
    </section>
  );
}
