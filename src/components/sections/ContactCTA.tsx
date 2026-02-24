import { Button } from "@/components/ui/Button";
import { WHATSAPP_FULL_URL, CONTACT_EMAIL } from "@/lib/constants";
import { Container } from "@/components/layout/Container";

export function ContactCTA() {
  return (
    <section className="py-24 mesh-bg relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <Container size="lg">
        <div className="relative z-10 text-center">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            ¿Listo para empezar?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Hablemos de tu proceso.
            <br />
            <span className="gradient-text">Sin compromiso.</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Cuéntanos qué proceso quieres automatizar y te mostramos cómo lo haríamos.
            La primera sesión es gratuita.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={WHATSAPP_FULL_URL} variant="whatsapp" size="lg" external>
              <WhatsAppIcon />
              Agendar demo por WhatsApp
            </Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="lg" external>
              <EmailIcon />
              Enviar email
            </Button>
          </div>
          <p className="text-slate-500 text-sm mt-8">
            También puedes escribirnos a{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-slate-400 hover:text-white underline underline-offset-2 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}
