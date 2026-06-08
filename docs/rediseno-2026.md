# Rediseño BlueBox 2026 — Spec del sistema

Fecha: 2026-06-08 · Base: `bluebox-web` (Next.js 16 · React 19 · Tailwind 4)
Origen: análisis de competencia (Exadel, CodersLab, TechBehemoths-Chile) + decisiones de Tomás.

## Estrategia
- **Posicionamiento: amplio tipo Exadel.** Casa de ingeniería de software que cubre todo el
  espectro, presentada como **amplitud organizada** (Soluciones = resultados · Servicios =
  capacidades · Industrias), con la credibilidad de una **empresa chilena formal** (SLA,
  contratos, Ley 19.628) para Chile, LATAM y EE. UU.
- **Honestidad:** fuera "Control Tower" como servicio; fuera métricas inventadas (-70%/+3x/100%).
  Los casos se reescriben honestos/anonimizados o se marcan como representativos.

## Dirección visual — "Dossier de ingeniería"
Marfil cálido + tinta cálida casi negra, mucho aire, retícula de blueprint punteada con grano
sutil (atmósfera, no color plano), numeración indexada tipo expediente, un solo acento.

### Tokens (definidos en `globals.css` vía `@theme`)
- `--color-paper #F2ECE0` · `--color-paper-2 #EAE2D2` · `--color-paper-3 #E4DAC8`
- `--color-ink #171410` · `--color-ink-soft #6B6458` · `--color-ink-mute #9A9282`
- `--color-cobalt #1B36FF` (acento) · `--color-cobalt-deep #1126C2`
- `--color-line` (~17% tinta) · `--color-line-soft` (~8%)

### Tipografía (NO Geist/Inter)
- Display/títulos: **Schibsted Grotesk** (peso 500 medio).
- Texto: **Hanken Grotesk**.
- Etiquetas/índices técnicos: **IBM Plex Mono**.

### Componentes del sistema
- `bp-grid` (retícula punteada) · `grain` (overlay) · hairlines (`border-line`).
- Ícono punteado 3×3 (componente `DotIcon`) en vez de íconos de librería.
- Botón pill (primario = cobalto, secundario = ghost con underline).
- Panel/fila "dossier" indexada (01–06) — firma del hero y de Soluciones.
- Kicker mono + tira de credibilidad mono.

### Motion (sobrio)
- Scroll suave (Lenis) + reveals al scroll (IntersectionObserver/CSS). Stagger en el load del hero.

## Arquitectura de contenido (`constants.ts`)
- **SOLUTIONS (6, outcome-led):** Moderniza legados · Automatiza procesos · Integra sistemas
  (incl. sin API/RPA) · Adopta IA con control · Construye productos digitales · Datos & analítica.
- **SERVICES (capacidades):** Desarrollo a medida · Integraciones & RPA · Ingeniería de IA/agentes ·
  Data engineering · Dashboards & observabilidad · QA/DevSecOps · Equipos dedicados.
- **INDUSTRIES:** Logística · Retail · Manufactura · Finanzas · Salud · Gobierno · Tech.
- **CASES:** honestos/anonimizados, sin métricas inventadas.
- **FAQ / TECH_STACK:** revisados para honestidad.

## Plan por fases
1. **Fundación:** fuentes (layout), tokens y utilidades (globals). ✅
2. **Contenido:** `constants.ts`, `nav.ts`, `metadata.ts` (broad + honesto).
3. **Primitivas UI:** Button, Card, SectionTitle, Badge → sistema dossier.
4. **Chrome:** Header (wordmark), Footer, CTASticky.
5. **Home:** Hero (port del mockup), Soluciones, Servicios, Industrias, Casos, FAQ, Contacto.
6. **Páginas internas:** nosotros, servicios, industrias, tecnología, casos, contacto.
7. **Motion + pulido** y verificación (typecheck/lint/build con dev server detenido).

## Verificación
- Render en vivo (`:3001`) + screenshot en cada hito (preferencia: mirar la UI renderizada).
- Cierre: detener dev server → `build` → reiniciar (nunca `build` con el server sobre el mismo `.next`).
