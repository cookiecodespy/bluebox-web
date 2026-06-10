import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { GlowCard } from "@/components/ui/GlowCard";
import { DrawLine } from "@/components/fx/DrawLine";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Blue Box: empresa chilena de ingeniería de software fundada en 2018 por Mauricio Sotz. Dos generaciones, soluciones a medida para logística, retail y transporte.",
});

// Historia real de la empresa — la continuidad es el argumento de confianza.
const TIMELINE = [
  {
    era: "El oficio",
    title: "Décadas en informática y logística",
    desc: "Antes de Blue Box, Mauricio Sotz construyó su carrera en el mercado informático y logístico: los sistemas que mueven bodegas, camiones y operaciones reales. Ese oficio es la base de todo lo que hacemos.",
  },
  {
    era: "2018",
    title: "Nace Blue Box",
    desc: "Se funda en Santiago con una convicción simple: soluciones 100% a la medida de cada operación, no plantillas. Los primeros clientes llegan de logística, retail y transporte — y se quedan.",
  },
  {
    era: "Hoy",
    title: "Software, integraciones e IA con control",
    desc: "El mismo oficio, con ingeniería moderna: sistemas a medida, integraciones donde no hay API, agentes de IA con aprobación humana y evidencia de cada decisión.",
    live: true,
  },
  {
    era: "La próxima década",
    title: "Segunda generación, mismo apellido",
    desc: "Blue Box tiene plan de continuidad: la segunda generación ya trabaja dentro de la empresa liderando la evolución hacia la IA. Construimos para décadas — tu sistema no quedará huérfano.",
  },
];

const TEAM = [
  {
    img: "/images/team-mauricio.jpg",
    icon: "users",
    name: "Mauricio Sotz",
    role: "Fundador & CEO",
    bio: "Ingeniero con más de 40 años de oficio en informática y logística. Fundó Blue Box en 2018 para hacer las cosas como deben hacerse: a la medida y respondiendo por el resultado.",
  },
  {
    img: "/images/team-tomas.jpg",
    icon: "ai",
    name: "Tomás Sotz",
    role: "Segunda generación · Ingeniería & IA",
    bio: "Representante legal y responsable de la línea de IA y automatización. La continuidad de Blue Box tiene nombre, apellido y plan.",
  },
  {
    img: "/images/team-dev.jpg",
    icon: "dev",
    name: "Equipo de desarrollo",
    role: "Ingeniería de software",
    bio: "Desarrolladores que construyen y mantienen los sistemas en producción — los mismos que diseñan son los que responden.",
  },
  {
    img: "/images/team-admin.jpg",
    icon: "filecheck",
    name: "Administración",
    role: "Contabilidad & contratos",
    bio: "Facturación formal, contratos claros y orden financiero. La parte aburrida, impecable.",
  },
];

const VALUES = [
  {
    icon: "data",
    title: "Resultados, no entregables",
    description:
      "Cada proyecto tiene una métrica de éxito definida antes de empezar. No vendemos horas, resolvemos problemas.",
  },
  {
    icon: "ai",
    title: "Transparencia total",
    description:
      "Documentamos arquitectura, decisiones y límites. Sin cajas negras ni dependencia de nosotros.",
  },
  {
    icon: "spark",
    title: "Velocidad sin apurar",
    description:
      "Mostramos valor rápido con pilotos acotados, pero construimos sobre bases sólidas que escalan.",
  },
  {
    icon: "shield",
    title: "Operabilidad",
    description:
      "Todo lo que construimos debe poder operarlo gente no técnica. Si es muy complejo de mantener, lo rediseñamos.",
  },
];

const STATS = [
  { n: "2018", label: "fundada en Santiago" },
  { n: "+40", label: "años de oficio del fundador" },
  { n: "2", label: "generaciones trabajando" },
  { n: "0", label: "vendor lock-in por diseño" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Una empresa con historia"
        accent="y con futuro."
        sub="Blue Box nació en 2018 del oficio de un ingeniero con décadas en informática y logística. Hoy somos dos generaciones construyendo software que las empresas chilenas pueden operar y confiar."
      />

      {/* Historia — timeline de dos generaciones */}
      <section className="pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="kicker mb-5 flex items-center gap-3">
                <span className="inline-block h-px w-6 bg-cobalt" /> La historia
              </p>
              <h2 className="font-display text-[2rem] font-medium leading-[1.08] tracking-[-0.02em] text-ink md:text-[2.4rem]">
                El oficio no se improvisa: <span className="text-cobalt">se hereda</span>.
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Muchas empresas de software nacen de una idea. Blue Box nació de décadas
                viendo cómo se mueven de verdad las bodegas, los camiones y los sistemas
                que el resto no quiere tocar.
              </p>
              <div className="mt-8 rounded-[14px] border border-line bg-paper-2 p-7">
                <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-line">
                  {STATS.map((s) => (
                    <div key={s.label} className="bg-paper-2 p-5 text-center">
                      <div className="font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-cobalt">
                        {s.n}
                      </div>
                      <div className="kicker mt-1.5 normal-case leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ol className="relative space-y-10 border-l border-line pl-8">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.era} delay={i * 90}>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1.5 flex h-[18px] w-[18px] items-center justify-center">
                      {t.live ? (
                        <>
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt opacity-40" />
                          <span className="relative inline-flex h-[10px] w-[10px] rounded-full bg-cobalt" />
                        </>
                      ) : (
                        <span className="inline-flex h-[10px] w-[10px] rounded-full border-2 border-cobalt bg-paper" />
                      )}
                    </span>
                    <p className="kicker !text-cobalt">{t.era}</p>
                    <h3 className="mt-2 font-display text-[20px] font-medium tracking-[-0.01em] text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-2.5 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft">
                      {t.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Misión y visión oficiales */}
      <section className="ink-section relative overflow-hidden py-24">
        <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2"
          style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.18), transparent 62%)" }}
        />
        <Container>
          <Reveal>
            <p className="kicker !text-paper/55 flex items-center justify-center gap-3 text-center">
              <span className="inline-block h-px w-6 bg-cobalt" /> Lo que nos mueve
            </p>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <Reveal>
              <GlowCard className="h-full p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 text-cobalt">
                  <Icon name="rocket" className="h-[20px] w-[20px]" />
                </span>
                <h2 className="mt-5 font-display text-[22px] font-medium text-paper">Misión</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                  Proporcionar servicios integrales de la más alta calidad, superando las
                  expectativas de nuestros clientes a través de soluciones innovadoras,
                  eficientes y confiables que impulsen el crecimiento y éxito de sus
                  organizaciones.
                </p>
              </GlowCard>
            </Reveal>
            <Reveal delay={100}>
              <GlowCard className="h-full p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/12 text-cobalt">
                  <Icon name="globe" className="h-[20px] w-[20px]" />
                </span>
                <h2 className="mt-5 font-display text-[22px] font-medium text-paper">Visión</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                  Ser la empresa líder en servicios integrales, reconocida por nuestra
                  excelencia operacional, el compromiso con la innovación y la capacidad de
                  generar valor agregado sostenible para nuestros clientes y la comunidad.
                </p>
              </GlowCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Equipo */}
      <section className="py-24">
        <Container>
          <p className="kicker mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> Quiénes responden
          </p>
          <h2 className="mb-4 max-w-[22ch] font-display text-[2rem] font-medium leading-[1.06] tracking-[-0.02em] text-ink md:text-[2.4rem]">
            Cuando firmamos, hay <span className="text-cobalt">nombres detrás</span>
          </h2>
          <DrawLine className="mb-10 max-w-[120px]" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 70}>
                <Card hover className="h-full">
                  <MediaFrame src={m.img} alt={m.name} icon={m.icon} ratio="aspect-square" />
                  <h3 className="mt-5 font-display text-[18px] font-medium text-ink">{m.name}</h3>
                  <p className="kicker !text-cobalt mt-1 normal-case">{m.role}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{m.bio}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="bg-paper-2/40 py-24">
        <Container>
          <p className="kicker mb-5 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> Cómo trabajamos
          </p>
          <h2 className="mb-12 font-display text-[2rem] font-medium tracking-[-0.02em] text-ink md:text-[2.4rem]">
            Cuatro principios, sin excepción
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 80}>
                <Card hover padding="lg" className="h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                    <Icon name={v.icon} className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="font-display text-[19px] font-medium text-ink">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{v.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
