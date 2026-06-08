import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

type Cell = true | false | "p";

const COLS = ["BlueBox", "Software factory típica", "Solo IA / commodity"];

const ROWS: { criteria: string; values: [Cell, Cell, Cell] }[] = [
  { criteria: "Dominio en operaciones, logística y SII", values: [true, "p", false] },
  { criteria: "Empresa chilena formal · SLA · Ley 19.628", values: [true, "p", false] },
  { criteria: "Integra sistemas legados sin API (RPA)", values: [true, "p", false] },
  { criteria: "Automatización con aprobación humana + evidencia", values: [true, false, "p"] },
  { criteria: "Código que tu equipo puede mantener", values: [true, "p", false] },
  { criteria: "Responsabilidad y continuidad post-entrega", values: [true, "p", false] },
];

function Mark({ v }: { v: Cell }) {
  if (v === true)
    return (
      <svg className="mx-auto h-[18px] w-[18px] text-cobalt" viewBox="0 0 20 20" fill="none">
        <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (v === "p") return <span className="mono text-[11px] uppercase tracking-wide text-ink-mute">parcial</span>;
  return <span className="mx-auto block h-px w-3.5 bg-ink-mute/60" />;
}

export function Comparison() {
  return (
    <section className="bg-paper-2/40 py-24">
      <Container>
        <SectionTitle
          eyebrow="Por qué BlueBox"
          title="No somos una software factory más"
          highlight="software factory"
          description="La IA es commodity; el dominio, la integración y la responsabilidad de una empresa formal, no. Ahí está la diferencia."
        />
        <Reveal>
          <div className="overflow-hidden rounded-[14px] border border-line bg-paper">
            {/* header */}
            <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr] border-b border-line">
              <div className="p-5" />
              {COLS.map((c, i) => (
                <div
                  key={c}
                  className={`p-5 text-center ${
                    i === 0 ? "relative bg-cobalt/[0.06]" : ""
                  }`}
                >
                  {i === 0 && <span className="absolute inset-x-0 top-0 h-0.5 bg-cobalt" />}
                  <span
                    className={`font-display text-[14px] font-semibold leading-tight ${
                      i === 0 ? "text-cobalt" : "text-ink-soft"
                    }`}
                  >
                    {c}
                  </span>
                </div>
              ))}
            </div>
            {/* rows */}
            {ROWS.map((row, ri) => (
              <div
                key={row.criteria}
                className={`grid grid-cols-[1.7fr_1fr_1fr_1fr] items-center ${
                  ri < ROWS.length - 1 ? "border-b border-line-soft" : ""
                }`}
              >
                <div className="p-5 text-[14.5px] text-ink">{row.criteria}</div>
                {row.values.map((v, ci) => (
                  <div key={ci} className={`flex items-center justify-center p-5 ${ci === 0 ? "h-full bg-cobalt/[0.04]" : ""}`}>
                    <Mark v={v} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
