import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function MidCTA() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[20px] border border-line bg-ink px-8 py-14 text-center sm:px-12">
          <div className="bp-grid pointer-events-none absolute inset-0 opacity-30" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[520px] -translate-x-1/2"
            style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.25), transparent 65%)" }}
          />
          <div className="relative">
            <h2 className="mx-auto max-w-[22ch] font-display text-[clamp(1.8rem,3.4vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.025em] text-paper">
              ¿Tienes un proceso que te quita horas todos los días?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-paper/65">
              Cuéntanoslo en una llamada de 30 minutos. Salimos con un plan concreto — sin costo.
            </p>
            <Button href="/contacto" size="lg" className="mt-8 !px-7 !py-3.5 text-[15.5px]">
              Agenda tu diagnóstico
              <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <p className="mono mt-5 text-[11.5px] tracking-[0.04em] text-paper/45">
              30 minutos · sin costo · te llevas un plan, trabajemos juntos o no
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
