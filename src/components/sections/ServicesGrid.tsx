import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

const serviceIcons: Record<string, React.ReactNode> = {
  tower: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
    </svg>
  ),
  integration: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  ai: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  ),
  dashboard: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
};

const colorClasses: Record<string, { icon: string; badge: string; bullet: string }> = {
  blue: { icon: "bg-blue-100 text-blue-700", badge: "blue", bullet: "bg-blue-500" },
  navy: { icon: "bg-slate-100 text-slate-700", badge: "slate", bullet: "bg-slate-500" },
  teal: { icon: "bg-cyan-100 text-cyan-700", badge: "teal", bullet: "bg-cyan-500" },
  green: { icon: "bg-cyan-100 text-cyan-700", badge: "teal", bullet: "bg-cyan-500" },
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Servicios"
          title="Todo lo que necesitas para automatizar con confianza"
          highlight="automatizar con confianza"
          description="Cuatro áreas de expertise que se combinan para cubrir el ciclo completo de la automatización empresarial."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const colors = colorClasses[service.color] ?? colorClasses.blue;
            return (
              <Card key={service.id} hover padding="lg">
                <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-5`}>
                  {serviceIcons[service.icon]}
                </div>
                <Badge variant={colors.badge as "blue" | "teal" | "green" | "slate"} className="mb-3">
                  {service.subtitle}
                </Badge>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.bullet}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/servicios"
            className="text-blue-700 font-semibold hover:text-blue-800 inline-flex items-center gap-1.5 transition-colors"
          >
            Ver detalle de servicios
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
