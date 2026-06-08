"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { WHATSAPP_FULL_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import { submitLead } from "@/lib/supabase";

const CONTACT_REASONS = [
  "Agendar un diagnóstico",
  "Cotizar un proyecto",
  "Consulta técnica",
  "Alianza / partnership",
  "Otro",
];

const inputCls =
  "w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-[15px] text-ink placeholder:text-ink-mute transition focus:border-cobalt focus:outline-none focus:ring-2 focus:ring-cobalt/30";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // 1) intenta guardar el lead en Supabase
    const res = await submitLead(formData);
    // 2) si no hay backend configurado o falla, cae a mailto
    if (!res.ok) {
      const subject = encodeURIComponent(
        `[BlueBox] ${formData.reason || "Consulta"} – ${formData.company || formData.name}`
      );
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nMotivo: ${formData.reason}\n\nMensaje:\n${formData.message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }
    setSending(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cuéntanos"
        accent="tu proceso."
        sub="La primera sesión de diagnóstico es sin costo y sin compromiso. Respondemos en menos de 24 horas hábiles."
      />

      <section className="pb-24">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Info */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <p className="kicker mb-4">¿Prefieres hablar directo?</p>
                <a
                  href={WHATSAPP_FULL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-3.5 font-semibold text-paper transition-opacity hover:opacity-90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                  Escríbenos por WhatsApp
                </a>
              </div>

              <div className="space-y-5 border-t border-line pt-8">
                <ContactRow label="Email" value={CONTACT_EMAIL} href={`mailto:${CONTACT_EMAIL}`} />
                <ContactRow
                  label="WhatsApp / Teléfono"
                  value={CONTACT_PHONE}
                  href={WHATSAPP_FULL_URL}
                  external
                />
                <ContactRow label="Ubicación" value="Santiago, Chile" />
              </div>

              <div className="rounded-[14px] border border-cobalt/25 bg-cobalt/[0.05] p-5">
                <p className="font-display text-[15px] font-medium text-ink">
                  Tiempo de respuesta
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  Menos de 24 horas hábiles. Para urgencias, WhatsApp es más rápido.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-[14px] border border-line bg-paper-2 p-8">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-cobalt text-white">
                      ✓
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                      Mensaje recibido
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-ink-soft">
                      Gracias{formData.name ? `, ${formData.name.split(" ")[0]}` : ""}. Te
                      respondemos en menos de 24 horas hábiles. También puedes escribirnos a{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-cobalt underline underline-offset-4">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="mb-6 font-display text-xl font-medium text-ink">
                      Envíanos un mensaje
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field label="Nombre" required>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre"
                          className={inputCls}
                        />
                      </Field>
                      <Field label="Email" required>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@empresa.cl"
                          className={inputCls}
                        />
                      </Field>
                    </div>
                    <Field label="Empresa">
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nombre de tu empresa"
                        className={inputCls}
                      />
                    </Field>
                    <Field label="Motivo de contacto">
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className={inputCls}
                      >
                        <option value="">Selecciona una opción</option>
                        {CONTACT_REASONS.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Mensaje" required>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos qué quieres construir o automatizar…"
                        className={`${inputCls} resize-none`}
                      />
                    </Field>
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-cobalt px-6 py-3.5 font-semibold text-white transition-colors hover:bg-cobalt-deep disabled:opacity-60"
                    >
                      {sending ? "Enviando…" : "Enviar mensaje"}
                      {!sending && (
                        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h9M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                    <p className="text-center text-xs text-ink-mute">
                      Se abrirá tu cliente de correo con el mensaje prellenado. Sin formularios de
                      terceros ni tracking.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-cobalt">*</span>}
      </label>
      {children}
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div>
      <p className="kicker mb-1">{label}</p>
      {href ? (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-[15px] text-ink transition-colors hover:text-cobalt"
        >
          {value}
        </a>
      ) : (
        <p className="text-[15px] text-ink-soft">{value}</p>
      )}
    </div>
  );
}
