// Wordmark de BlueBox: marca icónica de 4 corchetes (azul/verde/amarillo/rojo,
// del logo oficial) recreada en SVG escalable + "BLUE BOX". Funciona en claro y oscuro.

export function BrandMark({ className = "" }: { className?: string }) {
  // viewBox 36×36 · 4 esquinas en L, hueco al centro
  const t = 5.5; // grosor
  const a = 13.5; // largo del brazo
  const m = 2; // margen
  const S = 36;
  const r = 1.2;
  return (
    <svg viewBox={`0 0 ${S} ${S}`} className={className} aria-hidden="true" fill="none">
      {/* TL azul */}
      <rect x={m} y={m} width={a} height={t} rx={r} fill="#4F86D6" />
      <rect x={m} y={m} width={t} height={a} rx={r} fill="#4F86D6" />
      {/* TR verde */}
      <rect x={S - m - a} y={m} width={a} height={t} rx={r} fill="#1FA64E" />
      <rect x={S - m - t} y={m} width={t} height={a} rx={r} fill="#1FA64E" />
      {/* BL amarillo */}
      <rect x={m} y={S - m - t} width={a} height={t} rx={r} fill="#F4C400" />
      <rect x={m} y={S - m - a} width={t} height={a} rx={r} fill="#F4C400" />
      {/* BR rojo */}
      <rect x={S - m - a} y={S - m - t} width={a} height={t} rx={r} fill="#E4231B" />
      <rect x={S - m - t} y={S - m - a} width={t} height={a} rx={r} fill="#E4231B" />
    </svg>
  );
}

export function Wordmark({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const tone = dark ? "text-paper" : "text-ink";
  return (
    <span
      className={`inline-flex items-center gap-[11px] font-display text-[20px] font-bold tracking-[-0.01em] ${tone} ${className}`}
    >
      <BrandMark className="h-[26px] w-[26px]" />
      <span>
        <b className="font-bold">BLUE</b>
        <span className="font-medium">BOX</span>
      </span>
    </span>
  );
}
