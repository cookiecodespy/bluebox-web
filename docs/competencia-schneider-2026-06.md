# Reverse engineering — Schneider Electric Chile (se.com/cl/es)

Fecha: 2026-06-12 · Método: navegación real + inspect-source (DOM, shadow DOM, tokens,
consola, red) con Playwright. Capturas en `~/Pictures/capturas/bluebox-web/schneider-*.png`.

## Veredicto en una línea
**No son competencia directa en software a medida** — venden *productos* de software
empaquetado (EcoStruxure, ETAP, DCIM) dentro de un catálogo industrial. Lo que hay que
robarles es la **disciplina de soporte/post-venta y arquitectura de información**, no el
posicionamiento. Y tienen suficientes errores como para no idolatrarlos.

## 1) Qué tiene (fingerprint técnico real)
- **Design system propio "Quartz" (qds-\*)**: Stencil web components servidos como
  UI-as-a-service desde `uiaas.myschneider.se.com` — megamenú (225 items / 33 paneles / 54
  grupos / 26 banners), cards, tabs, carousels, chips, accordion. El nav ES el sitio.
- **Tipografía de marca propia**: "Arial Rounded MT for SE" + Satoshi + icon font propia.
- **Tokens**: `--se-primary: #3dcd58` (verde firma), link `#0087cd`, escala de neutros
  `--quartz-color-background-shade-0..3`. Monomarca + 1 acento (mismo patrón que nosotros).
- **IA por tareas** (de 355 links extraídos): `work/support` (28 links — ¡el área más
  linkeada, más que productos!), `work/solutions` (26), `work/campaign` (22),
  `work/services` (20), `about-us/{events,sustainability,legal,university}`, `/download/`.
- **Catálogo software**: página categoría con h1 correcto, breadcrumbs, filtros y **221
  cards** (EcoStruxure Power Design/Ecodial, ETAP, PowerLogic ION…).
- **Stack marketing/ops**: CMS **Builder.io** (og:image lo delata), GTM, OneTrust,
  **Dynatrace RUM + Akamai mPulse** (observabilidad seria), Salesforce embedded chat,
  widget select-and-config propio.
- **Mobile**: sin overflow; home móvil **7.945px** (vs nuestros 36.300px) — brevedad +
  profundidad de navegación en vez de una página infinita.
- Home desktop corto: **5.178px** — modelo catálogo, no narrativa.

## 2) Errores y bugs encontrados (sí, a los gigantes también)
1. **37–41 errores de consola** en el home: spam de CSP report-uri con 429 (rate-limited),
   tracker propio con DNS muerto (`intstatcheck…` ERR_NAME_NOT_RESOLVED).
2. **Design system en BETA en producción**: `@quartzds/websites@1.0.0-beta.78` con
   TypeError real (`Cannot set properties of undefined (setting 'src')` en qds-web-media).
3. **8 embeds de YouTube rotos** ("player element ID required").
4. **Chat de Salesforce lanzando excepciones** (isCommunityOrSite undefined).
5. "Invalid URL format" ×6 en chunks propios.
6. **Sin `<h1>` en el home** (SEO básico fallado).
7. **Sin JSON-LD** (ni siquiera Organization) → oportunidad nuestra de ganarles en SEO
   técnico siendo 1000× más chicos.
8. **og:description truncada a mitad de palabra** ("…en más de ").
9. **IDs duplicados** en el megamenú (`mega-menu-l4-2` repetido N veces) — HTML inválido.
10. Labels del nav enterrados en shadow DOM (`role="presentation"`, sin texto en light
    DOM) — accesibilidad frágil.
11. Cookie-wall OneTrust que bloquea TODO el contenido al entrar (UX agresiva).

## 3) Qué le robamos a BlueBox (priorizado, a nuestra escala)
1. **"Todo el soporte en un solo lugar"** → sección hub en /contacto u home: WhatsApp +
   email + agenda + "qué pasa después" + buscador ⌘K destacado. Su lección: **la
   post-venta vende** (28 links a soporte no es casualidad — el B2B compra confianza).
2. **Quick-links hub al final del home** (su "Enlaces destacados" con íconos): atajos
   "Agenda un diagnóstico / Casos / Insights / Descarga el brochure" para quien llegó al
   fondo scrolleando.
3. **Brochure corporativo descargable (PDF)** (su `/download/`): UNA página A4 linda para
   que el papá la mande por WhatsApp a clientes. Barato y muy chileno-B2B.
4. **Breadcrumbs + JSON-LD** en internas (Organization, BreadcrumbList, Article en
   /insights) — nos pone por delante de Schneider en SEO técnico.
5. **⌘K visible en móvil**: hoy el botón vive en el nav desktop; exponerlo en el menú
   hamburguesa.
6. **Disciplina de brevedad móvil**: condensar el home en pantallas chicas (ya en backlog
   F2; ahora con benchmark: ellos 7.9k px).
7. (Validar con papá) chip "Sistemas industriales (SCADA/PLC)" en IntegrationsBand — si
   BlueBox de verdad puede integrar contra esos sistemas, es un puente directo al mundo
   Schneider sin mentir.
8. (Fase 2+, post-Supabase) **portal de clientes** tipo mySchneider: estado de proyecto,
   documentos, tickets. Diferenciador brutal para una empresa de nuestro tamaño.

## 4) Qué NO copiarles
- El **modelo catálogo** (somos servicios, no 221 SKUs) y el home corto sin narrativa —
  nuestra venta necesita historia + prueba, no grilla de productos.
- El **cookie-wall** full-screen (nosotros: analytics sin cookies y listo).
- Correr **beta en producción** y la consola sucia.
- Su menú de 225 items — a nuestra escala sería ridículo; el ⌘K ya cumple ese rol.

## 5) Dónde ya les ganamos (sitio vs sitio, no empresa vs empresa)
- Motion e identidad: su sitio es estático corporativo; el nuestro tiene hero canvas,
  pipeline SVG, órbita, terminal, micro-interacciones.
- Narrativa de conversión (miedos, pasos post-envío, reversión de riesgo).
- SEO técnico potencial (h1 correctos, sitemap, security.txt; con JSON-LD quedamos arriba).
- Consola: nuestros 14 son slots de contenido esperando assets; los suyos son bugs reales.
