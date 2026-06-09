import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidad",
  description:
    "Cómo BlueBox trata tus datos personales conforme a la Ley 19.628 de Chile: qué recopilamos, para qué, cookies y tus derechos.",
});

const SECTIONS: { h: string; p?: string; ul?: string[] }[] = [
  {
    h: "1. Quién es el responsable",
    p: "BlueBox es una empresa chilena de ingeniería de software. Esta política explica cómo tratamos los datos personales que nos entregas al usar este sitio, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada.",
  },
  {
    h: "2. Qué datos recopilamos",
    ul: [
      "Datos que nos entregas en el formulario de contacto: nombre, correo, empresa, motivo y mensaje.",
      "Datos técnicos básicos de navegación (de forma agregada y anónima) para mejorar el sitio.",
    ],
  },
  {
    h: "3. Para qué los usamos",
    ul: [
      "Responder tu consulta y, si corresponde, preparar una propuesta.",
      "Mejorar el contenido y la experiencia del sitio.",
      "No vendemos ni cedemos tus datos a terceros con fines comerciales.",
    ],
  },
  {
    h: "4. Cookies",
    p: "Usamos un mínimo de cookies técnicas necesarias para el funcionamiento del sitio. No usamos cookies de publicidad ni de rastreo invasivo. Puedes bloquear las cookies desde tu navegador sin afectar el contenido principal.",
  },
  {
    h: "5. Dónde se guardan",
    p: "Los datos del formulario se procesan en infraestructura segura. Si usamos un proveedor externo (por ejemplo, una base de datos en la nube), exigimos resguardos de seguridad y confidencialidad adecuados.",
  },
  {
    h: "6. Tus derechos",
    p: "Conforme a la Ley 19.628, tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos. Para ejercerlos, escríbenos y atenderemos tu solicitud en un plazo razonable.",
  },
  {
    h: "7. Seguridad",
    p: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos frente a accesos no autorizados, pérdida o alteración. Operamos sobre HTTPS y aplicamos buenas prácticas de seguridad.",
  },
  {
    h: "8. Cambios",
    p: "Podemos actualizar esta política. La versión vigente siempre estará publicada en esta página.",
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de Privacidad"
        sub="Tratamos tus datos con la seriedad de una empresa formal, conforme a la Ley 19.628 de Chile."
      />
      <section className="pb-24">
        <Container size="md">
          <div className="mx-auto max-w-[68ch]">
            {SECTIONS.map((s) => (
              <div key={s.h} className="mt-10 first:mt-0">
                <h2 className="font-display text-[1.4rem] font-medium tracking-[-0.01em] text-ink">
                  {s.h}
                </h2>
                {s.p && <p className="mt-4 text-[16px] leading-[1.75] text-ink-soft">{s.p}</p>}
                {s.ul && (
                  <ul className="mt-4 space-y-3">
                    {s.ul.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-[16px] leading-relaxed text-ink-soft">
                        <span className="mt-2.5 h-1 w-1 flex-shrink-0 bg-cobalt" />
                        {it}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-12 border-t border-line pt-8 text-[15px] text-ink-soft">
              ¿Dudas sobre tus datos? Escríbenos a{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-cobalt underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
              .
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
