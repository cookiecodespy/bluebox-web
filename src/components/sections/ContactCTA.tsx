import Link from "next/link";
import { WHATSAPP_FULL_URL, CONTACT_EMAIL } from "@/lib/constants";

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
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-cobalt px-6 py-3.5 text-[15.5px] font-semibold text-white transition-colors hover:bg-cobalt-deep"
          >
            Agenda un diagnóstico
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3.5 text-[15.5px] font-semibold text-paper transition-colors hover:bg-paper hover:text-ink"
          >
            Ver formas de contacto
          </Link>
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
