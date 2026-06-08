# BlueBox — Brief de imágenes, herramientas y features a robar

Fecha: 2026-06-08. Para subir el sitio al nivel de CodersLab/Exadel.

---

## 1) Brief de imágenes para pedirle a GPT (o banco gratis)

**Estilo común (pídelo SIEMPRE para que sean coherentes):**
> "Fotografía realista, luz natural cálida, tonos neutros (marfil/arena) con acentos azul
> cobalto, gente real trabajando en tecnología, sin texto, sin logos, encuadre cinematográfico,
> profundidad de campo suave. Formato horizontal 16:10."

Guárdalas en `public/images/` con estos nombres. Dimensiones sugeridas entre paréntesis.

### Hero / about (3)
1. `team-santiago.jpg` — equipo chileno trabajando en una oficina luminosa (1600×1000)
2. `office-detail.jpg` — detalle de escritorio: laptop con código + café + libreta (1200×900)
3. `whiteboard.jpg` — dos personas frente a un pizarrón con diagramas de arquitectura (1400×1000)

### Timeline de proceso (4) — Diagnóstico/Piloto/Validación/Escala
4. `proc-diagnostico.jpg` — reunión de descubrimiento, post-its en una pared (1200×900)
5. `proc-piloto.jpg` — pair programming en dos monitores (1200×900)
6. `proc-validacion.jpg` — persona revisando un dashboard de métricas en pantalla (1200×900)
7. `proc-escala.jpg` — sala con varias pantallas / centro de operaciones (1200×900)

### Casos (3)
8. `caso-logistica.jpg` — centro de distribución / bodega con estanterías (1400×1000)
9. `caso-retail.jpg` — tienda / pantalla de e-commerce y caja (1400×1000)
10. `caso-manufactura.jpg` — planta industrial moderna, operario con tablet (1400×1000)

### Industrias (6) — verticales horizontales 4:3
11. `ind-logistica.jpg` · 12. `ind-retail.jpg` · 13. `ind-manufactura.jpg`
14. `ind-finanzas.jpg` · 15. `ind-salud.jpg` · 16. `ind-gobierno.jpg`
(cada una: ambiente real del sector, con un matiz tecnológico)

### Equipo / Nosotros (4)
17–20. `team-1..4.jpg` — retratos de equipo en oficina (cuadrado 1:1, 800×800), luz cálida

### Abstractas / tech (textura, no genéricas) (6)
21. `abstract-network.jpg` — fibra óptica / nodos de luz azul sobre fondo oscuro (1600×1000)
22. `abstract-data.jpg` — visualización de datos abstracta azul (1600×1000)
23. `abstract-code.jpg` — código desenfocado con bokeh azul (1600×1000)
24. `abstract-server.jpg` — rack de servidores con luces (1400×1000)
25. `abstract-ai.jpg` — render 3D de red neuronal cobalto sobre marfil (1600×1000)
26. `texture-paper.jpg` — textura sutil de papel/arena para fondos (2000×1200)

### Producto / mockups (4) — si GPT puede, o los hago yo en código
27–30. capturas ficticias de dashboards/flows (las puedo generar yo en código si prefieres).

> **Tip:** pide cada imagen en 2–3 variantes y elige; mantén la MISMA frase de estilo para
> coherencia. Alternativa gratis sin GPT: **Unsplash** y **Pexels** (busca "software team",
> "data center", "warehouse logistics", "chile office").

---

## 2) Herramientas gratis (o free tier) para hacer cosas enormes

**Ya en uso:** Next.js, Tailwind, Motion, Lenis, Supabase, lucide-react.

| Necesidad | Herramienta (gratis) | Para qué |
|-----------|----------------------|----------|
| Hosting | **Cloudflare Pages** / **Vercel** | deploy del sitio, gratis |
| Base de datos / auth / storage | **Supabase** | leads, blog, usuarios (ya integrado) |
| Imágenes gratis | **Unsplash**, **Pexels** | fotos reales sin costo |
| Optimizar imágenes | **Cloudinary** (free tier) / `next/image` | servir liviano |
| Íconos | **Lucide** (ya), **Phosphor**, **Iconify** | íconos pro |
| Animación | **Motion** (ya), **GSAP** (gratis), **Lottie** | micro-interacciones |
| 3D / hero | **Spline** (free) | objeto 3D interactivo para el hero |
| Emails del form | **Resend** (free tier) | avisarte cuando llega un lead |
| Analítica | **Umami** / **Plausible** (self-host gratis) | tráfico sin cookies |
| CMS / blog | **Sanity** (free) / MDX | sección Insights |
| Componentes | **shadcn/ui** | acelerar UI consistente |
| Diseño | **Figma** (free), **v0.dev** | mockear antes de codear |
| Reseñas B2B | **Clutch**, **TechBehemoths** | listarte y mostrar badges |

---

## 3) Features a robar de las 10 empresas chilenas (TechBehemoths)

Servicios que el mercado chileno ofrece y deberíamos mostrar/agregar:
- **Desarrollo web y móvil** (ya), **E-commerce** (agregar), **UX/UI** (agregar como línea),
  **IT Staff Augmentation / equipos dedicados** (CodersLab — agregar), **Cloud/DevOps** (ya),
  **Data/IA** (ya), **IoT** y **AR/VR** (opcional, como "labs").

Devices/ideas a incorporar:
- **"Cotiza en 1 hora, sin compromiso"** como gancho de lead (Exadel/TechBehemoths).
- **Badges de reseñas** (Clutch/TechBehemoths) → listarse y mostrar estrellas = prueba social real.
- **Timeline de proceso con fotos** + números gigantes de fondo (CodersLab). ← próximo
- **Carrusel de testimonios** (Swiper) cuando haya testimonios reales.
- **Nube de logos de clientes** (cuando tengas permisos).
- **Páginas por solución** (Exadel tiene una por cada una) + **Insights/blog** + **Careers**.

---

## Pendiente de implementación (orden sugerido)
1. Reemplazar marcos de imagen con fotos reales (este brief).
2. Timeline de proceso con fotos + números gigantes.
3. Sección equipo/nosotros con fotos.
4. Carrusel de testimonios + nube de logos (con material real).
5. Páginas por solución + Insights (Supabase).
6. Deploy a Cloudflare Pages.
