import { TECH_STACK } from "@/lib/constants";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          eyebrow="Tecnología"
          title="Stack moderno, soporte de largo plazo"
          highlight="Stack moderno"
          description="Trabajamos con tecnologías probadas en producción, sin vendor lock-in y con documentación que tu equipo puede mantener."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_STACK.map((group) => (
            <div
              key={group.category}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-slate-700 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
