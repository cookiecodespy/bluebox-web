import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Industrias",
  description:
    "Software, integraciones y automatización para logística, retail, manufactura, finanzas, salud, educación, energía, agroindustria y sector público en Chile y LATAM.",
});

const INDUSTRY_DETAIL = [
  {
    id: "logistica",
    title: "Logística & Supply Chain",
    description:
      "Automatizamos recepción de mercancías, validación de documentos de transporte y sincronización entre WMS y ERP. Menos errores de recepción, flujo de despacho más rápido.",
    cases: [
      "Validación automática de facturas de proveedor contra órdenes de compra",
      "Sincronización de stock entre WMS legado y ERP sin API disponible",
      "Dashboard de estado de shipments en tiempo real con alertas por excepción",
    ],
  },
  {
    id: "retail",
    title: "Retail & Comercio",
    description:
      "Sincronización de inventarios, precios y órdenes entre tienda física, ecommerce y marketplace. Sin carga manual ni descuadres de stock.",
    cases: [
      "Integración de inventario entre ERP y plataformas de ecommerce",
      "Automatización de reabastecimiento basada en reglas de negocio",
      "Conciliación automática de ventas multicanal",
    ],
  },
  {
    id: "manufactura",
    title: "Manufactura",
    description:
      "Control de producción, calidad y OEE con dashboards conectados a datos reales. Agentes que gestionan excepciones de calidad con aprobación humana registrada.",
    cases: [
      "Aprobación de excepciones de calidad por WhatsApp con evidencia",
      "Reporting automático de OEE y tiempos de parada",
      "Alertas de desviación de proceso con escalamiento configurado",
    ],
  },
  {
    id: "finanzas",
    title: "Servicios Financieros",
    description:
      "Automatización de conciliaciones, reportes regulatorios y flujos de aprobación de crédito o inversión, con trazabilidad completa de cada decisión.",
    cases: [
      "Conciliación automática de carteras y posiciones",
      "Generación y envío de reportes regulatorios automatizados",
      "Flujos de aprobación de crédito con registro de evidencia",
    ],
  },
  {
    id: "salud",
    title: "Salud & Farmacia",
    description:
      "Gestión documental, trazabilidad de lotes y cumplimiento normativo. Integración entre sistemas clínicos y administrativos sin interrumpir la operación.",
    cases: [
      "Trazabilidad de lotes de medicamentos desde ingreso a dispensación",
      "Alertas de vencimiento y rotación de stock de farmacia",
      "Automatización de informes de cumplimiento normativo",
    ],
  },
  {
    id: "gobierno",
    title: "Gobierno & Sector Público",
    description:
      "Digitalización de procesos internos, integración con plataformas del Estado y automatización de flujos de aprobación con trazabilidad para auditorías.",
    cases: [
      "Integración de sistemas internos con plataformas transversales del Estado",
      "Automatización de flujos de aprobación de resoluciones internas",
      "Dashboards de gestión con KPIs operacionales para directivos",
    ],
  },
  {
    id: "educacion",
    title: "Educación & Universidades",
    description:
      "Integración entre sistemas académicos y administrativos, y automatización de los procesos que hoy consumen horas de secretaría y coordinación.",
    cases: [
      "Integración entre sistema académico, finanzas y plataformas de aprendizaje",
      "Automatización de certificados, constancias y procesos de matrícula",
      "Dashboards de avance académico y asistencia para coordinación",
    ],
  },
  {
    id: "energia",
    title: "Energía & Utilities",
    description:
      "Telemetría, facturación y mantenimiento sobre datos confiables. Integramos medidores, sistemas comerciales y de terreno en una sola operación.",
    cases: [
      "Consolidación de lecturas y telemetría para facturación sin descuadres",
      "Órdenes de trabajo de mantenimiento con trazabilidad de cuadrillas",
      "Alertas de consumo anómalo y pérdidas con escalamiento automático",
    ],
  },
  {
    id: "agro",
    title: "Agroindustria & Alimentos",
    description:
      "Trazabilidad desde el campo al despacho: lotes, cadena de frío y documentación de exportación generada de forma automática y auditable.",
    cases: [
      "Trazabilidad de lotes desde cosecha o producción hasta el cliente final",
      "Monitoreo de cadena de frío con alertas y registro para auditorías",
      "Generación automática de documentación de exportación y certificados",
    ],
  },
];

export default function IndustriasPage() {
  return (
    <>
      <PageHero
        eyebrow="Industrias"
        title="Conocemos el terreno"
        accent="de tu sector."
        sub="Cada industria tiene sus sistemas, formatos y regulaciones — y cada organización su escala. Trabajamos con esa realidad, no contra ella."
      />

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {INDUSTRY_DETAIL.map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 3) * 80}>
                <Card hover padding="lg" className="h-full">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-paper text-cobalt">
                    <Icon name={ind.id} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-display text-[22px] font-medium tracking-[-0.01em] text-ink">
                    {ind.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-soft">{ind.description}</p>
                  <p className="kicker mt-7 mb-3">Casos habituales</p>
                  <ul className="space-y-2.5">
                    {ind.cases.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[14px] text-ink">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 bg-cobalt" />
                        <span className="text-ink-soft">{c}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
