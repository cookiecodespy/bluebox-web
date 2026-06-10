import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Reveal } from "@/components/ui/Reveal";

const PHOTOS = [
  { src: "/images/team-mauricio.jpg", icon: "users" },
  { src: "/images/team-tomas.jpg", icon: "ai" },
  { src: "/images/team-dev.jpg", icon: "dev" },
  { src: "/images/team-admin.jpg", icon: "filecheck" },
];

const POINTS = [
  "Fundada en 2018, con décadas de oficio detrás",
  "Dos generaciones trabajando en la misma empresa",
  "Contratos, SLA y responsabilidad real (Ley 19.628)",
];

export function TeamTeaser() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* fotos */}
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {PHOTOS.map((p, i) => (
                <MediaFrame
                  key={p.src}
                  src={p.src}
                  alt={`Equipo BlueBox ${i + 1}`}
                  icon={p.icon}
                  ratio="aspect-square"
                  className={i % 2 === 1 ? "mt-6" : ""}
                />
              ))}
            </div>
          </Reveal>

          {/* texto */}
          <div className="order-1 lg:order-2">
            <p className="kicker flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-cobalt" /> Quiénes somos
            </p>
            <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(2rem,3.6vw,2.9rem)] font-medium leading-[1.07] tracking-[-0.025em] text-ink">
              Personas reales, <span className="text-cobalt">responsabilidad real</span>.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-ink-soft">
              No somos una plataforma anónima ni un freelance que desaparece. Somos una
              empresa chilena formal: cuando firmamos, respondemos — con contrato, SLA y
              continuidad para tu operación.
            </p>
            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[15px] text-ink">
                  <span className="h-1 w-1 flex-shrink-0 bg-cobalt" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/nosotros"
              className="mt-9 inline-flex items-center gap-2 border-b-[1.5px] border-ink pb-0.5 font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt"
            >
              Conoce al equipo <span className="text-cobalt">→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
