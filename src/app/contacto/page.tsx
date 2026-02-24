"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_FULL_URL, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

// Note: Since this is a Client Component ("use client"), metadata must be
// defined in a parent Server Component or a separate metadata.ts file.
// For this page, the layout.tsx root metadata applies.

const CONTACT_REASONS = [
  "Agendar una demo",
  "Cotizar un proyecto",
  "Consulta técnica",
  "Alianza / partnership",
  "Otro",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto URL with form data
    const subject = encodeURIComponent(
      `[Blue Box] ${formData.reason || "Consulta"} – ${formData.company || formData.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nMotivo: ${formData.reason}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Contacto
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Hablemos de{" "}
              <span className="gradient-text">tu proceso</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Cuéntanos qué quieres automatizar. La primera sesión de diagnóstico
              es gratuita y sin compromiso.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  ¿Prefieres hablar directo?
                </h2>
                <Button href={WHATSAPP_FULL_URL} variant="whatsapp" size="lg" external fullWidth>
                  <WhatsAppIcon />
                  Agendar demo por WhatsApp
                </Button>
              </div>

              <div className="border-t border-slate-100 pt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <EmailIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-0.5">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:underline text-sm">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-0.5">WhatsApp / Teléfono</p>
                    <a href={WHATSAPP_FULL_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline text-sm">
                      {CONTACT_PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-0.5">Ubicación</p>
                    <p className="text-slate-600 text-sm">Santiago, Chile 🇨🇱</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                <p className="text-blue-900 font-semibold text-sm mb-1">
                  Tiempo de respuesta habitual
                </p>
                <p className="text-blue-700 text-sm">
                  Respondemos en menos de 24 horas hábiles. Para urgencias, WhatsApp es más rápido.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-slate-600">
                      Se abrió tu cliente de correo con el mensaje prellenado. Si no se abrió automáticamente, escríbenos directamente a{" "}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 underline">
                        {CONTACT_EMAIL}
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-slate-900 mb-6">
                      Envíanos un mensaje
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Nombre <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="tu@empresa.cl"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Empresa
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Nombre de tu empresa"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Motivo de contacto
                      </label>
                      <select
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                      >
                        <option value="">Selecciona una opción</option>
                        {CONTACT_REASONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Mensaje <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Cuéntanos qué proceso quieres automatizar o qué problema tienes..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" fullWidth>
                      Enviar mensaje
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </Button>

                    <p className="text-xs text-slate-400 text-center">
                      Al enviar, se abrirá tu cliente de correo con el mensaje prellenado.
                      Sin formularios de terceros ni tracking de datos.
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

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}
