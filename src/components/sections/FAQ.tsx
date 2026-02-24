import { FAQ as FAQ_DATA } from "@/lib/constants";
import { Accordion } from "@/components/ui/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function FAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <Container size="lg">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber antes de empezar"
          highlight="Todo lo que necesitas saber"
          centered
        />
        <Accordion items={FAQ_DATA} />
      </Container>
    </section>
  );
}
