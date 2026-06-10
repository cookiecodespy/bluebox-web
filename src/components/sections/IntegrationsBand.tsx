import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const GROUPS = [
  { cat: "ERP & contabilidad", items: ["SAP", "Oracle", "Microsoft Dynamics", "Defontana", "Nubox", "Softland", "Bsale"] },
  { cat: "E-commerce", items: ["Shopify", "WooCommerce", "VTEX", "Jumpseller", "Magento"] },
  { cat: "Pagos & Estado (Chile)", items: ["Transbank / Webpay", "SII", "Khipu", "Flow", "Mercado Pago"] },
  { cat: "Cloud & datos", items: ["AWS", "Google Cloud", "Azure", "PostgreSQL", "SQL Server"] },
];

export function IntegrationsBand() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Integraciones"
          title="Nos conectamos con lo que ya usas"
          highlight="lo que ya usas"
          description="ERP, e-commerce, pagos, plataformas del Estado y la nube. Y si no hay API, igual lo integramos con RPA."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {GROUPS.map((g, i) => (
            <Reveal key={g.cat} delay={(i % 2) * 80}>
              <Card hover className="h-full">
                <h3 className="kicker mb-4">{g.cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13.5px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-cobalt/40 hover:text-cobalt"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
