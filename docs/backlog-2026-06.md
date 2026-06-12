# BlueBox Web — Backlog maestro (consolidado de TODAS las sesiones 5–12 jun 2026)

> Fuente: minería de 14 sesiones de Claude Code (5→12 jun) + auditoría del 12 jun.
> Meta: sitio listo el **miércoles 17 jun** (⚠️ mismo día deadline CENIA — cerrar BlueBox el lunes).
> Regla acordada (10-jun): **no más zips de cPanel hasta el final**; dominio real se publica al último.

## A. Bugs — atacar ya
| # | Item | Estado |
|---|------|--------|
| A1 | **Animación del hero se buggea en móvil al deslizar** — causa raíz: `onResize` del HeroCanvas re-aleatorizaba toda la red cuando la barra del navegador se colapsa + `94vh` recalculaba + Lenis en touch | ✅ corregido 12-jun (guard de ancho en canvas, `svh`, Lenis solo desktop) |
| A2 | FAB de WhatsApp tapaba "Volver arriba" y línea legal del footer en móvil | ✅ corregido 12-jun (`pb-16` móvil en fila legal) |
| A3 | 14 requests 404 en el home (11 imágenes brief + 3 videos `model-*.mp4`) — degradan a placeholder elegante pero ensucian consola; se resuelven con C1/C3 o recortando referencias | ⏳ abierto |

## B. WIP por cerrar
| # | Item | Estado |
|---|------|--------|
| B1 | **⌘K Command Palette** (aprobado 10-jun "Pongale nomas") — 265 líneas, integrado en layout/Header, compila | ⏳ commitear tras verificar en navegador |

## C. Assets — necesitan a Tomás (o plan B mío)
| # | Item | Detalle |
|---|------|---------|
| C1 | **36 imágenes del brief** (`docs/recursos-y-brief.md`, grupos 1–7 + H) | Tomás genera con GPT Image usando los prompts ya escritos; plan B: Unsplash/Pexels con estilo coherente |
| C2 | **Fotos reales del equipo** (`team-mauricio/tomas/dev/admin.jpg`) | IA-generadas NO sirven aquí (acordado 10-jun); llenan /nosotros y home |
| C3 | **~8 videos loop mudos estilo CodersLab** (`model-staff/proyecto/equipo.mp4` + timeline) | Plan B aprobable: animaciones en código (canvas/CSS) que matan los 404 y suman motion |
| C4 | **Logos de clientes reales + 1–2 testimonios con nombre** | Pedir permisos vía papá — la prueba social real convierte más que cualquier efecto (anotado 10-jun) |
| C5 | **Casos reales con cifras** | Datos del papá; hoy son honestos/anónimos con nota NDA |

## D. Config / infraestructura
| # | Item | Detalle |
|---|------|---------|
| D1 | **Supabase** — crear proyecto + 2 env vars (`NEXT_PUBLIC_SUPABASE_URL/ANON_KEY`) en GitHub Actions | Hoy el form cae a mailto = leads que se pierden; schema y código listos |
| D2 | **Dominio propio** — pedido explícito del papá (10-jun) | Cloudflare Pages (recomendado) o cPanel; conseguir acceso HOY (papá / Rodrigo Jaque) — única dependencia externa |
| D3 | Zip cPanel | SOLO al final (regla 10-jun); el de `deploy/` está 4 commits atrás |
| D4 | Analytics sin cookies (Umami / Plausible / Cloudflare) | Saber si el sitio trabaja |
| D5 | Resend (free) — aviso por email cuando entra un lead | Opcional, post-Supabase |

## E. Contenido / estrategia — ruta Anthropic/OpenAI (validada 10-jun)
| # | Item | Detalle |
|---|------|---------|
| E1 | **Página "Seguridad & Gobernanza de IA"** (defensiva) | El pendiente real detrás de "que Anthropic/OpenAI nos vean": Ley 21.663 como gancho comercial; revisión segura de código, auditoría de integraciones, evidencia para cumplimiento. **SIN claims de partner/certificación que no existen** |
| E2 | **Insights como vehículo de contenido IA** | Ya hay 4 artículos reales. Opcional: sección curada tipo "Radar IA" (noticias/papers comentados) — solo si va a mantenerse con cadencia; un blog muerto resta más de lo que suma |
| E3 | Ruta partner (fases, NO web todavía) | 1) Seguridad defensiva → 2) certificaciones equipo → 3) Claude Partner Network / OpenAI partner intake → 4) Mythos/Trusted Access. Nada de esto se publica hasta que exista |
| E4 | Honestidad del stack — confirmar con papá: ¿usamos de verdad Power Automate, n8n, Make? | Inventario 6-jun lo dejó pendiente |
| E5 | Verificar WhatsApp +56 9 9016 6224 activo + página LinkedIn company | Datos de contacto en vivo |

## F. Pulido continuo
| # | Item | Detalle |
|---|------|---------|
| F1 | QA visual completo de las 24 páginas (desktop + móvil) antes del miércoles | Mobile estructural OK (12-jun: 0 overflow); falta pasada visual fina |
| F2 | Home móvil mide ~36.300px (~43 pantallas) | Considerar condensar 2–3 secciones en pantallas chicas |
| F3 | "Siempre hay algo que mejorar" (regla de Tomás, 10-jun) | Micro-detalles, texto, bugs — pasada continua |

## Hecho (para no repetir trabajo)
Hero cinemático + canvas · 27 secciones home · 6 páginas /soluciones · Insights (4 artículos)
· /servicios /tecnologia /casos /nosotros a nivel home (terminal deploy, órbita tech, riel sticky,
historia real + sucesión) · capa psicológica de conversión (3 miedos, pasos post-envío, nudge
WhatsApp) · purga de números 01/02 genéricos · logo real grande + favicon · robots/sitemap/
security.txt/headers · /privacidad Ley 19.628 · accesibilidad base · asset() para basePath ·
placeholder blueprint on-brand · honestidad "Desde 2018 / +40 años de oficio" · Button único CTA.
