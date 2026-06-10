import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

// La página de contacto es client component; el título de pestaña vive aquí.
export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Agenda un diagnóstico sin costo. WhatsApp, correo o formulario — te respondemos dentro de 24 horas hábiles.",
});

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
