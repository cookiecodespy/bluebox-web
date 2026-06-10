// Constelación de tecnologías orbitando alrededor de BlueBox.
// Cada anillo gira a su ritmo; los chips contra-rotan para quedar legibles.
const RINGS: { r: number; dur: number; reverse?: boolean; items: string[] }[] = [
  { r: 85, dur: 34, items: ["Python", "Node.js", "React"] },
  { r: 145, dur: 50, reverse: true, items: ["Next.js", "PostgreSQL", "IA · LLM", "RPA"] },
  { r: 205, dur: 70, items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"] },
];

export function TechOrbit({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto h-[460px] w-[460px] ${className}`} aria-hidden="true">
      {/* anillos guía */}
      {RINGS.map(({ r }) => (
        <div
          key={`ring-${r}`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line"
          style={{ width: r * 2, height: r * 2 }}
        />
      ))}

      {/* chips en órbita */}
      {RINGS.map(({ r, dur, reverse, items }) => (
        <div
          key={`orbit-${r}`}
          className="absolute inset-0"
          style={{ animation: `${reverse ? "orbit-rev" : "orbit"} ${dur}s linear infinite` }}
        >
          {items.map((item, i) => {
            const angle = (360 / items.length) * i;
            return (
              <div
                key={item}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `rotate(${angle}deg) translateY(-${r}px)` }}
              >
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <div style={{ animation: `${reverse ? "orbit" : "orbit-rev"} ${dur}s linear infinite` }}>
                    <span className="block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-paper px-3 py-1.5 text-[12.5px] font-medium text-ink shadow-[0_8px_20px_-12px_rgba(23,20,16,0.4)]">
                      {item}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* núcleo BlueBox */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cobalt opacity-40" />
          <span className="relative inline-flex h-5 w-5 rounded-full bg-cobalt" />
        </span>
      </div>
      <span className="mono absolute left-1/2 top-[calc(50%+22px)] -translate-x-1/2 text-[11px] tracking-[0.14em] text-ink-mute">
        BLUEBOX
      </span>
    </div>
  );
}
