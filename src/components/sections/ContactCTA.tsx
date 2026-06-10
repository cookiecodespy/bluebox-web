import Link from "next/link";
import { WHATSAPP_FULL_URL, CONTACT_EMAIL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

// Qué pasa después de escribir — quitar el miedo al "¿y ahora qué?"
const NEXT_STEPS = [
  {
    icon: "message",
    title: "Nos cuentas tu proceso",
    desc: "30 minutos, por WhatsApp o videollamada. Sin preparar nada.",
  },
  {
    icon: "map",
    title: "Te mostramos el plan",
    desc: "Cómo lo haríamos, en qué plazos y con una estimación clara.",
  },
  {
    icon: "handshake",
    title: "Tú decides",
    desc: "Y si no somos el partner correcto, te lo decimos a la primera.",
  },
];

export function ContactCTA() {
  return (
    <section className="ink-section relative overflow-hidden">
      <div className="bp-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(circle at center, rgba(27,54,255,0.22), transparent 62%)",
        }}
      />
      <div className="relative mx-auto max-w-[1240px] px-5 py-28 text-center sm:px-8 lg:px-10">
        <p className="kicker !text-paper/55 justify-center flex">Conversemos</p>
        <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.025em] text-paper">
          Cuéntanos tu proceso. Te mostramos{" "}
          <span className="text-cobalt">cómo lo haríamos</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-paper/65">
          La primera sesión de diagnóstico es sin costo y sin compromiso. Salimos
          con un plan concreto, no con promesas vacías.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={WHATSAPP_FULL_URL} external size="lg" className="!py-3.5 text-[15.5px]">
            Agenda un diagnóstico
            <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3.5 text-[15.5px] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Ver formas de contacto
          </Link>
        </div>
        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 text-left sm:grid-cols-3">
          {NEXT_STEPS.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/12 text-cobalt">
                <Icon name={s.icon} className="h-[18px] w-[18px]" />
              </span>
              <p className="mt-3.5 text-[14.5px] font-semibold text-paper">{s.title}</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-paper/55">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mono mt-10 text-[12px] tracking-[0.06em] text-paper/45">
          o escríbenos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-paper/70 underline underline-offset-4 hover:text-paper">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
