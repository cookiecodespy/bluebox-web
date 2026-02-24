import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { INDUSTRIES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = buildMetadata({
  title: "Industrias",
  description:
    "Automatización para logística, retail, manufactura, servicios financieros, salud y sector público en Chile.",
});

const INDUSTRY_DETAIL = [
  {
    id: "logistica",
    icon: "🏭",
    title: "Logística y Supply Chain",
    description:
      "Automatizamos la recepción de mercancías, la validación de documentos de transporte y la sincronización entre WMS y ERP. Reducimos los errores de recepción y aceleramos el flujo de despacho.",
    cases: [
      "Validación automática de facturas de proveedor contra órdenes de compra",
      "Sincronización de stock entre WMS legado y ERP sin API disponible",
      "Dashboard de estado de shipments en tiempo real con alertas por excepción",
    ],
  },
  {
    id: "retail",
    icon: "🛍️",
    title: "Retail y Comercio",
    description:
      "Sincronización de inventarios, precios y órdenes entre múltiples canales (tienda física, ecommerce, marketplace). Eliminamos la carga manual y los descuadres de stock.",
    cases: [
      "Integración de inventario entre ERP y plataformas de ecommerce",
      "Automatización de reabastecimiento basada en reglas de negocio",
      "Conciliación automática de ventas multicanal",
    ],
  },
  {
    id: "manufactura",
    icon: "⚙️",
    title: "Manufactura",
    description:
      "Control de producción, calidad y OEE con dashboards conectados a datos reales. Agentes de IA que gestionan excepciones de calidad con aprobación humana registrada.",
    cases: [
      "Sistema de aprobación de excepciones de calidad por WhatsApp con evidencia",
      "Reporting automático de OEE y tiempos de parada",
      "Alertas de desviación de proceso con escalamiento configurado",
    ],
  },
  {
    id: "finanzas",
    icon: "📊",
    title: "Servicios Financieros",
    description:
      "Automatización de conciliaciones, generación de reportes regulatorios y flujos de aprobación de crédito o inversión. Trazabilidad completa de cada decisión.",
    cases: [
      "Conciliación automática de carteras y posiciones",
      "Generación y envío de reportes regulatorios automatizados",
      "Flujos de aprobación de crédito con auditores IA",
    ],
  },
  {
    id: "salud",
    icon: "🏥",
    title: "Salud y Farmacia",
    description:
      "Gestión documental, trazabilidad de lotes y cumplimiento normativo. Integración entre sistemas clínicos y administrativos sin interrumpir la operación.",
    cases: [
      "Trazabilidad de lotes de medicamentos desde ingreso hasta dispensación",
      "Alertas de vencimiento y rotación de stock de farmacia",
      "Automatización de informes de cumplimiento normativo",
    ],
  },
  {
    id: "gobierno",
    icon: "🏛️",
    title: "Gobierno y Sector Público",
    description:
      "Digitalización de procesos internos, integración con plataformas como ChileAtiende y GDE, y automatización de flujos de aprobación con trazabilidad para auditorías.",
    cases: [
      "Integración de sistemas internos con plataformas transversales del Estado",
      "Automatización de flujos de aprobación de resoluciones internas",
      "Dashboards de gestión con KPIs operacionales para directivos",
    ],
  },
];

export default function IndustriasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Industrias
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Soluciones adaptadas{" "}
              <span className="gradient-text">a tu sector</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Cada industria tiene sus sistemas, sus formatos y sus regulaciones.
              Trabajamos con esa realidad, no contra ella.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries detail */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INDUSTRY_DETAIL.map((ind) => (
              <div
                key={ind.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{ind.icon}</div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{ind.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">{ind.description}</p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">
                    Casos habituales
                  </p>
                  <ul className="space-y-2">
                    {ind.cases.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
