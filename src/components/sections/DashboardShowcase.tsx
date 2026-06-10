import Link from "next/link";
import { OpsDashboard } from "@/components/fx/OpsDashboard";
import { Parallax } from "@/components/fx/Parallax";
import { Tilt } from "@/components/fx/Tilt";

const POINTS = [
  "Métricas y alertas conectadas a tus datos reales",
  "Trazabilidad de cada operación, con evidencia",
  "Datos limpios y estructurados — listos para IA",
];

export function DashboardShowcase() {
  return (
    <section className="ink-section relative overflow-hidden py-24">
      <div className="bp-grid pointer-events-none absolute inset-0 opacity-50" />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[560px] w-[560px]"
        style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.18), transparent 62%)" }}
      />
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="kicker !text-paper/55 flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> Visibilidad total
          </p>
          <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.06] tracking-[-0.025em] text-paper">
            Tus operaciones, en <span className="text-cobalt">una sola pantalla</span>.
          </h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper/65">
            Construimos dashboards operacionales sobre tus datos reales. Decides con
            información viva, no con suposiciones — y dejamos esos datos confiables y
            listos para automatizar con IA.
          </p>
          <ul className="mt-7 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-paper/85">
                <span className="h-1 w-1 flex-shrink-0 bg-cobalt" />
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/servicios"
            className="mt-9 inline-flex items-center gap-2 border-b-[1.5px] border-paper/40 pb-0.5 font-semibold text-paper transition-colors hover:border-cobalt hover:text-cobalt"
          >
            Ver capacidades <span className="text-cobalt">→</span>
          </Link>
        </div>

        {/* Mockup compuesto: dashboard + chips satélite flotando alrededor */}
        <div className="relative">
          <Parallax amount={26}>
            <Tilt max={4}>
              <OpsDashboard />
            </Tilt>
          </Parallax>

          <div className="animate-floaty-slow pointer-events-none absolute -top-6 -left-5 z-10 hidden items-center gap-2.5 rounded-full border border-white/12 bg-ink/85 px-4 py-2 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cobalt" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-paper/75">
              WMS · ERP sincronizado
            </span>
          </div>

          <div className="animate-floaty pointer-events-none absolute -right-6 top-12 z-10 hidden rounded-xl border border-white/12 bg-ink/85 px-4 py-3 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md lg:block">
            <div className="flex items-center gap-2.5">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-cobalt/20 text-[12px] text-cobalt">
                ✓
              </span>
              <div>
                <p className="text-[12.5px] font-semibold text-paper">
                  Pedido #4812 conciliado
                </p>
                <p className="font-mono text-[10px] text-paper/45">hace 6 s · automático</p>
              </div>
            </div>
          </div>

          <div className="animate-floaty-slow pointer-events-none absolute -bottom-7 -right-3 z-10 hidden rounded-xl border border-white/12 bg-ink/85 px-5 py-3.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md lg:block">
            <p className="font-display text-2xl font-semibold tracking-tight text-cobalt">
              −67%
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-paper/50">
              tiempo de proceso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
