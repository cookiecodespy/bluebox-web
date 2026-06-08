# Inventario de estado — bluebox-web (auditoría HU-1)

Fecha: 2026-06-06 · Rama: `feat/rework-sitio-2026` · Corre en local: http://localhost:3001

## Stack (sano y moderno)
- Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind. Levanta sin errores.
- **Contenido centralizado en `src/lib/constants.ts`** → cambiar textos/servicios es fácil y limpio.
- Navegación en `src/lib/nav.ts`: Inicio, Nosotros, Servicios, Industrias, Tecnología, Casos, Contacto.
- Componentes ordenados: `sections/` (Hero, ServicesGrid, IndustriesGrid, CaseStudies, TechStack,
  Testimonials, FAQ, ContactCTA) + `ui/` (Button, Card, Modal, Accordion, etc.).

## Qué SIRVE (conservar)
- La arquitectura y separación de componentes.
- El tagline base "Software a medida. Automatización real." (revisar en HU-2).
- Estructura de 7 páginas ya creada.

## Qué SOBRA / hay que QUITAR
- **"Control Tower"** aparece en 3 lugares (a eliminar/reemplazar):
  - `constants.ts:28-46` → servicio completo `control-tower`.
  - `constants.ts:144-150` → caso de éxito que lo usa + tag.
  - `src/app/servicios/page.tsx:13` → metadata que lo menciona.

## 🚩 RIESGOS de credibilidad (decidir en HU-2)
- **Casos de éxito probablemente inventados** (`CASES`): números "-70%", "+3x", "100%" sin cliente
  real detrás. Riesgo de credibilidad e incluso legal. → Reescribir honestos o quitar hasta tener
  casos reales documentados.
- **Tech stack** (`TECH_STACK`) lista herramientas (UiPath, Power Automate, n8n, Make…): confirmar
  cuáles usamos de verdad y cuáles sacar.
- **Datos de contacto a verificar:** WhatsApp `+56 9 9016 6224`, email `contacto@bluebox.cl`,
  LinkedIn `linkedin.com/company/bluebox-cl`. ¿Están activos?

## Qué FALTA
- **Logo real** (HU-3): hoy no hay identidad visual definida.
- Industrias: revisar que reflejen donde de verdad podemos entregar (hoy lista 6 genéricas).
- Formulario de contacto funcional (HU-6) — hoy es CTA a WhatsApp/email.

## Conclusión
Base técnica sólida y fácil de editar. El trabajo real es de **contenido honesto + identidad +
diseño senior**, no de reescribir la arquitectura. Listo para pasar a HU-2 (estrategia/mensaje).
