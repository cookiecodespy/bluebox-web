import { Container } from "@/components/layout/Container";

const HUB = { x: 360, y: 190 };
const LEFT = [
  { y: 100, l: "PDFs · Docs" },
  { y: 190, l: "WMS · ERP" },
  { y: 280, l: "Sistemas legados" },
];
const RIGHT = [
  { y: 100, l: "Dashboards" },
  { y: 190, l: "IA confiable" },
  { y: 280, l: "Automatización" },
];
const LX = 140;
const RX = 580;

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

export function PipelineSection() {
  return (
    <section className="ink-section relative overflow-hidden py-28">
      <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.16), transparent 60%)" }}
      />
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker !text-paper/55 flex items-center justify-center gap-3">
            <span className="inline-block h-px w-6 bg-cobalt" /> El puente
          </p>
          <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.06] tracking-[-0.025em] text-paper">
            De operaciones caóticas a <span className="text-cobalt">resultados confiables</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-paper/65">
            Tomamos lo desordenado —documentos, sistemas legados, datos sueltos— y lo
            convertimos en operación limpia, automatizada y lista para decidir.
          </p>
        </div>

        <div className="mt-14">
          <svg viewBox="0 0 720 380" className="w-full" role="img" aria-label="Pipeline: entradas caóticas hacia resultados confiables vía BlueBox">
            {/* entradas → hub */}
            {LEFT.map((n, i) => {
              const d = curve(LX, n.y, HUB.x, HUB.y);
              return (
                <g key={`l-${i}`}>
                  <path d={d} fill="none" stroke="rgba(160,170,200,0.22)" strokeWidth="1.4" strokeDasharray="4 5" />
                  <circle r="2.4" fill="rgba(170,180,210,0.85)">
                    <animateMotion dur={`${3 + i * 0.5}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              );
            })}
            {/* hub → resultados */}
            {RIGHT.map((n, i) => {
              const d = curve(HUB.x, HUB.y, RX, n.y);
              return (
                <g key={`r-${i}`}>
                  <path d={d} fill="none" stroke="rgba(90,120,255,0.4)" strokeWidth="1.6" />
                  <circle r="2.6" fill="#7d9bff">
                    <animateMotion dur={`${2.4 + i * 0.5}s`} repeatCount="indefinite" path={d} />
                  </circle>
                </g>
              );
            })}

            {/* nodos entrada */}
            {LEFT.map((n, i) => (
              <g key={`ln-${i}`}>
                <circle cx={LX} cy={n.y} r="5" fill="rgba(150,160,190,0.5)" />
                <text x={LX - 16} y={n.y + 4} textAnchor="end" fontSize="12" fontFamily="monospace" fill="rgba(230,235,255,0.5)">
                  {n.l}
                </text>
              </g>
            ))}
            {/* nodos resultado */}
            {RIGHT.map((n, i) => (
              <g key={`rn-${i}`}>
                <circle cx={RX} cy={n.y} r="5" fill="#5a78ff" />
                <text x={RX + 16} y={n.y + 4} textAnchor="start" fontSize="12" fontFamily="monospace" fill="rgba(230,235,255,0.7)">
                  {n.l}
                </text>
              </g>
            ))}

            {/* hub BlueBox */}
            <circle cx={HUB.x} cy={HUB.y} r="34" fill="rgba(27,54,255,0.10)" />
            <circle cx={HUB.x} cy={HUB.y} r="20" fill="rgba(27,54,255,0.18)">
              <animate attributeName="r" values="20;28;20" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0.08;0.5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={HUB.x} cy={HUB.y} r="9" fill="#1b36ff" />
            <text x={HUB.x} y={HUB.y + 52} textAnchor="middle" fontSize="13" fontWeight="600" fontFamily="var(--font-display)" fill="#fff">
              BlueBox
            </text>
          </svg>
        </div>
      </Container>
    </section>
  );
}
