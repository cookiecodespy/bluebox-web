import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";

// Banda de confianza con los sectores reales de Blue Box (logística, retail,
// transporte desde 2018). Cuando haya permisos para logos de clientes, esta
// banda vuelve a ser una nube de logos.
const SECTORS = [
  { icon: "logistica", label: "Logística" },
  { icon: "retail", label: "Retail" },
  { icon: "transporte", label: "Transporte" },
  { icon: "manufactura", label: "Manufactura" },
];

export function LogosBand() {
  return (
    <section className="border-b border-line py-14">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          <p className="max-w-md text-center font-display text-[19px] font-medium leading-snug tracking-[-0.01em] text-ink lg:text-left">
            Desde <span className="text-cobalt">2018</span>, operaciones de logística,
            retail y transporte confían su día a día a Blue Box.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {SECTORS.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-2.5 rounded-full border border-line bg-paper-2 px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt/40"
              >
                <Icon name={s.icon} className="h-[17px] w-[17px] text-cobalt" />
                <span className="text-[13.5px] font-semibold text-ink">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
