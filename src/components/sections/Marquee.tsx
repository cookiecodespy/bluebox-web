const ITEMS = [
  "Software a medida",
  "Integraciones & RPA",
  "Agentes de IA",
  "Data engineering",
  "Dashboards",
  "DevSecOps",
  "WMS / ERP",
  "Cloud AWS · GCP · Azure",
  "Logística",
  "Retail",
  "Manufactura",
  "Finanzas",
  "Salud",
  "Gobierno",
  "Educación",
  "Energía",
  "Agroindustria",
];

export function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <section className="border-y border-line bg-paper-2/40 py-9">
      <p className="kicker mb-6 text-center">Capacidades y dominios</p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center">
          {row.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-7 font-display text-[18px] font-medium tracking-[-0.01em] text-ink/75">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
