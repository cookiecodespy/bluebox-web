# Blue Box – Sitio Web

Sitio web corporativo de **Blue Box** (Chile): software a medida, automatización e IA.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · GitHub Pages

---

## Instalación y desarrollo

```bash
# 1. Clonar el repositorio
git clone https://github.com/cookiecodespy/bluebox-web.git
cd bluebox-web

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno locales
cp .env.example .env.local
# Edita .env.local si necesitas sobreescribir algo

# 4. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Build y export estático

```bash
# Build de producción (genera carpeta /out)
npm run build

# Vista previa del export estático (requiere un servidor HTTP estático)
npx serve out
```

---

## Deploy en GitHub Pages

El deploy es **automático**: cada push a `main` dispara el workflow `.github/workflows/deploy.yml`.

### Primer deploy (setup inicial)

1. Ve a tu repo en GitHub → **Settings → Pages**
2. En **Source**, selecciona **GitHub Actions**
3. Haz push a `main` → el workflow construye y publica automáticamente

### URL del sitio

```
https://cookiecodespy.github.io/bluebox-web/
```

### Con dominio personalizado (e.g. bluebox.cl)

1. En **Settings → Pages → Custom domain**, agrega tu dominio
2. En `.github/workflows/deploy.yml`, cambia (o elimina) la línea:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: /bluebox-web
   ```
   Déjala vacía o elimínala si el sitio vive en la raíz del dominio.
3. En tu proveedor DNS, apunta el dominio a GitHub Pages (CNAME → `cookiecodespy.github.io`).

---

## Cómo personalizar

### Cambiar número de WhatsApp

Edita `src/lib/constants.ts`:

```ts
export const WHATSAPP_NUMBER = "56990166224"; // ← cambia aquí
```

### Cambiar email de contacto

En el mismo archivo:

```ts
export const CONTACT_EMAIL = "contacto@bluebox.cl"; // ← cambia aquí
```

### Cambiar el copy (textos, servicios, casos, FAQ)

Todo el contenido editable está en `src/lib/constants.ts`:
- `SERVICES` → cards de servicios
- `CASES` → casos de éxito con métricas
- `INDUSTRIES` → industrias
- `TECH_STACK` → stack tecnológico
- `FAQ` → preguntas frecuentes

### Cambiar el logo

Reemplaza los archivos:
- `public/images/logo.svg` → logo para fondo claro (header)
- `public/images/logo-white.svg` → logo para fondo oscuro (footer)
- `public/favicon.svg` → favicon

Formatos soportados: SVG (recomendado), PNG. Para PNG, actualiza las rutas en:
- `src/components/layout/Header.tsx` (`<Image src=...`)
- `src/components/layout/Footer.tsx` (`<Image src=...`)

### Agregar un formulario backend (Formspree, Resend, etc.)

Por defecto el formulario usa `mailto:`. Para usar un proveedor:

1. Crea una cuenta en [Formspree](https://formspree.io) (gratis hasta 50 envíos/mes)
2. Agrega tu endpoint en `.env.local`:
   ```
   FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXX
   ```
3. Modifica `src/app/contacto/page.tsx`: reemplaza el `handleSubmit` de mailto por un `fetch` a tu endpoint

### Agregar nuevas páginas

```bash
# Crea el directorio y archivo
mkdir src/app/nueva-pagina
touch src/app/nueva-pagina/page.tsx
```

Agrega la ruta al nav en `src/lib/nav.ts`.

---

## Estructura del proyecto

```
bluebox-web/
├── src/
│   ├── app/                    # App Router: páginas y layout
│   │   ├── layout.tsx          # Layout raíz (Header, Footer, CTASticky)
│   │   ├── page.tsx            # Inicio (/)
│   │   ├── nosotros/           # /nosotros
│   │   ├── servicios/          # /servicios
│   │   ├── industrias/         # /industrias
│   │   ├── tecnologia/         # /tecnologia
│   │   ├── casos/              # /casos
│   │   └── contacto/           # /contacto
│   ├── components/
│   │   ├── layout/             # Header, Footer, CTASticky, Container
│   │   ├── ui/                 # Button, Card, Badge, Accordion, Modal, SectionTitle
│   │   └── sections/           # Hero, ServicesGrid, CaseStudies, etc.
│   └── lib/
│       ├── constants.ts        # ← EDITA AQUÍ: copy, servicios, contacto
│       ├── nav.ts              # Navegación
│       └── metadata.ts         # Helper de SEO/OG
├── public/
│   ├── images/logo.svg         # Logo claro
│   ├── images/logo-white.svg   # Logo oscuro
│   └── favicon.svg             # Favicon
├── .github/workflows/
│   └── deploy.yml              # CI/CD → GitHub Pages
├── .env.example                # Variables de entorno documentadas
└── next.config.ts              # Config Next.js (output: export, basePath)
```

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo (localhost:3000) |
| `npm run build` | Build de producción + export estático |
| `npm run lint` | Linter ESLint |

---

## Tecnologías

- [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Geist Font](https://vercel.com/font)
- GitHub Pages + GitHub Actions

---

Hecho en Chile 🇨🇱 por Blue Box
