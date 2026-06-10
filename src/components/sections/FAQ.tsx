import { FAQ as FAQ_DATA } from "@/lib/constants";
import { Accordion } from "@/components/ui/Accordion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Container } from "@/components/layout/Container";

export function FAQ() {
  return (
    <section className="py-24">
      <Container size="lg">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Lo que conviene saber antes de empezar"
          highlight="antes de empezar"
        />
        <Accordion items={FAQ_DATA} />
      </Container>
    </section>
  );
}
