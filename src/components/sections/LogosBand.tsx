import { Container } from "@/components/layout/Container";
import { MediaFrame } from "@/components/ui/MediaFrame";

const SLOTS = Array.from({ length: 6 }, (_, i) => `/images/logo-cliente-${i + 1}.png`);

export function LogosBand() {
  return (
    <section className="border-b border-line py-14">
      <Container>
        <p className="kicker mb-8 text-center">Confían en BlueBox</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {SLOTS.map((src, i) => (
            <MediaFrame
              key={src}
              src={src}
              alt={`Logo cliente ${i + 1}`}
              icon="badge"
              ratio="aspect-[3/2]"
              className="opacity-80"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
