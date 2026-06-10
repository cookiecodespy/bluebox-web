import { Container } from "@/components/layout/Container";
import { ScrollWords } from "@/components/fx/ScrollWords";

export function Manifesto() {
  return (
    <section className="ink-section relative overflow-hidden py-32">
      <div className="bp-grid pointer-events-none absolute inset-0 opacity-40" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2"
        style={{ background: "radial-gradient(circle at center, rgba(27,54,255,0.16), transparent 60%)" }}
      />
      <Container>
        <p className="kicker !text-paper/55 flex items-center gap-3">
          <span className="inline-block h-px w-6 bg-cobalt" /> Por qué existimos
        </p>
        <h2 className="mt-8 max-w-[20ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.03em] text-paper">
          La IA es un <span className="text-paper/40">commodity</span>. La{" "}
          <span className="text-cobalt">confianza</span>, no.
        </h2>
        <ScrollWords
          className="mt-10 max-w-2xl text-[19px] leading-relaxed text-paper/85"
          text="Cualquiera puede pedirle código a un modelo. Lo difícil —y lo que de verdad mueve un negocio— es entender la operación, integrar lo que nadie quiere tocar, y responder por el resultado con la cara y el nombre de una empresa formal. Eso es lo que hacemos."
        />
      </Container>
    </section>
  );
}
