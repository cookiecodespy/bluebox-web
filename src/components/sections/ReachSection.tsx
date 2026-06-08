import { Container } from "@/components/layout/Container";

const HUB = { x: 300, y: 300, label: "Santiago" };
const CITIES = [
  { x: 255, y: 255, label: "Lima" },
  { x: 365, y: 260, label: "São Paulo" },
  { x: 322, y: 330, label: "Buenos Aires" },
  { x: 250, y: 180, label: "Bogotá" },
  { x: 205, y: 120, label: "CDMX" },
  { x: 318, y: 110, label: "Miami" },
  { x: 372, y: 78, label: "Nueva York" },
  { x: 168, y: 92, label: "San Francisco" },
];

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.35 - 28;
  return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`;
}

export function ReachSection() {
  return (
    <section className="ink-section relative overflow-hidden py-24">
      <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[560px] w-[560px]"
        style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.16), transparent 62%)" }}
      />
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="kicker !text-paper/55 flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-cobalt" /> Cobertura
            </p>
            <h2 className="mt-6 max-w-[16ch] font-display text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.06] tracking-[-0.025em] text-paper">
              Construido en Chile. <span className="text-cobalt">Listo para el continente.</span>
            </h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-paper/65">
              Operamos desde Santiago con ventaja de zona horaria para EE.&nbsp;UU. y toda
              LATAM. Misma cultura de trabajo, contratos formales y respuesta en horario
              compatible — sin la distancia de un proveedor offshore.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {[
                { v: "Chile", l: "base operativa" },
                { v: "LATAM", l: "misma zona horaria" },
                { v: "EE.UU.", l: "horario compatible" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-[20px] font-semibold text-paper">{s.v}</div>
                  <div className="kicker !text-paper/45 mt-1 normal-case">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* mapa-constelación animado (SVG + SMIL, sin JS) */}
          <div className="relative">
            <svg viewBox="0 0 560 380" className="w-full" role="img" aria-label="Cobertura BlueBox en LATAM y EE.UU.">
              {/* conexiones + pulsos */}
              {CITIES.map((c, i) => {
                const d = arc(HUB.x, HUB.y, c.x, c.y);
                return (
                  <g key={c.label}>
                    <path d={d} fill="none" stroke="rgba(120,150,255,0.28)" strokeWidth="1" />
                    <circle r="2.4" fill="#9db3ff">
                      <animateMotion dur={`${2.6 + i * 0.45}s`} repeatCount="indefinite" path={d} />
                    </circle>
                  </g>
                );
              })}
              {/* ciudades */}
              {CITIES.map((c) => (
                <g key={`n-${c.label}`}>
                  <circle cx={c.x} cy={c.y} r="3" fill="rgba(180,195,240,0.9)" />
                  <text x={c.x + 8} y={c.y + 3.5} fill="rgba(230,235,255,0.55)" fontSize="10" fontFamily="monospace">
                    {c.label}
                  </text>
                </g>
              ))}
              {/* hub Santiago */}
              <circle cx={HUB.x} cy={HUB.y} r="22" fill="rgba(27,54,255,0.12)" />
              <circle cx={HUB.x} cy={HUB.y} r="11" fill="rgba(27,54,255,0.22)">
                <animate attributeName="r" values="11;18;11" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0.05;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx={HUB.x} cy={HUB.y} r="5" fill="#1b36ff" />
              <text x={HUB.x + 12} y={HUB.y + 4} fill="#ffffff" fontSize="12" fontWeight="600" fontFamily="var(--font-display)">
                {HUB.label}
              </text>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
