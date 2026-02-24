import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = buildMetadata({
  title: "Servicios",
  description:
    "Control Tower, Integraciones WMS/ERP, Agentes IA con aprobaciones y Dashboards de observabilidad. Software a medida para empresas chilenas.",
});

const iconMap: Record<string, React.ReactNode> = {
  tower: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  integration: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  ai: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  dashboard: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
};

const colorBg: Record<string, string> = {
  blue: "bg-blue-700",
  navy: "bg-slate-800",
  teal: "bg-cyan-600",
  green: "bg-emerald-600",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Servicios
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Cuatro áreas.{" "}
              <span className="gradient-text">Un ecosistema.</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Cada servicio resuelve un problema específico, pero están diseñados
              para integrarse entre sí y cubrir el ciclo completo de la
              automatización empresarial.
            </p>
          </div>
        </Container>
      </section>

      {/* Services detail */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-16">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <Badge variant={service.color as "blue" | "teal" | "green" | "slate"} className="mb-4">
                    {service.subtitle}
                  </Badge>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-slate-700">
                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Visual */}
                <div className={`${colorBg[service.color]} rounded-3xl p-10 flex items-center justify-center min-h-48 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="text-white opacity-80">
                    {iconMap[service.icon]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ />
      <ContactCTA />
    </>
  );
}
