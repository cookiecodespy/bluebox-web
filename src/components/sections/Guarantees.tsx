import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const ITEMS = [
  { icon: "filecheck", title: "Diagnóstico sin costo", desc: "La primera sesión es gratis y sales con un plan concreto." },
  { icon: "dev", title: "El código es tuyo", desc: "Entregamos la fuente documentada, sin vendor lock-in." },
  { icon: "shield", title: "SLA por contrato", desc: "Tiempos de respuesta y soporte definidos por escrito." },
  { icon: "support", title: "Soporte post-entrega", desc: "Mantención, monitoreo y mejoras iterativas." },
];

export function Guarantees() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 70}>
              <div className="h-full bg-paper p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line text-cobalt">
                  <Icon name={it.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-medium text-ink">{it.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
