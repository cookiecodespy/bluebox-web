import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { VideoFrame } from "@/components/ui/VideoFrame";
import { Reveal } from "@/components/ui/Reveal";

const MODELS = [
  {
    icon: "boxes",
    video: "/videos/model-proyecto.mp4",
    title: "Proyecto cerrado",
    desc: "Nos hacemos cargo de punta a punta: alcance, equipo y entrega.",
    points: ["Alcance y precio definidos", "Entregables que puedes tocar", "Garantía post-lanzamiento"],
  },
  {
    icon: "users",
    video: "/videos/model-equipo.mp4",
    title: "Equipo dedicado (nearshore)",
    desc: "Un equipo BlueBox full-time, integrado a tu operación.",
    points: ["Dev · QA · PO a tu medida", "Zona horaria compatible", "Escala arriba o abajo"],
  },
  {
    icon: "handshake",
    video: "/videos/model-staff.mp4",
    title: "Staff Augmentation",
    desc: "Refuerza tu equipo con nuestros perfiles, sin fricción.",
    points: ["Integración en días", "Perfiles senior validados", "Reemplazo sin costo"],
  },
];

export function EngagementModels() {
  return (
    <section className="bg-paper-2/40 py-24">
      <Container>
        <SectionTitle
          eyebrow="Cómo trabajamos contigo"
          title="Tres formas de sumarnos a tu equipo"
          highlight="sumarnos a tu equipo"
          description="Elige el modelo que calza con tu momento — o combínalos a medida que creces."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {MODELS.map((m, i) => (
            <Reveal key={m.title} delay={(i % 3) * 90}>
              <div className="flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-paper">
                <VideoFrame
                  src={m.video}
                  icon={m.icon}
                  ratio="aspect-[16/10]"
                  className="rounded-none border-0 border-b border-line"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[20px] font-medium tracking-[-0.01em] text-ink">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{m.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-[14px] text-ink">
                        <span className="h-1 w-1 flex-shrink-0 bg-cobalt" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
