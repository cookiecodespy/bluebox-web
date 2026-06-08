// ============================================================
// BlueBox – Constantes globales (contenido centralizado)
// Para actualizar: edita este archivo y haz commit.
// ============================================================

export const SITE_NAME = "BlueBox";
export const SITE_TAGLINE = "Ingeniería de software de extremo a extremo.";
export const SITE_DESCRIPTION =
  "Desarrollo a medida, integraciones, automatización y datos listos para IA. Empresa chilena formal — SLA, contratos y trazabilidad — para Chile, LATAM y EE. UU.";
export const SITE_URL = "https://cookiecodespy.github.io/bluebox-web";

// Contacto  (TODO Tomás: verificar que estén activos)
export const WHATSAPP_NUMBER = "56990166224";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola BlueBox, me gustaría agendar un diagnóstico para conocer cómo trabajan."
);
export const WHATSAPP_FULL_URL = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;
export const CONTACT_EMAIL = "contacto@bluebox.cl";
export const CONTACT_PHONE = "+56 9 9016 6224";
export const LINKEDIN_URL = "https://www.linkedin.com/company/bluebox-cl";

// ------------------------------------------------------------
// HERO
// ------------------------------------------------------------
export const HERO = {
  kicker: "Empresa chilena de ingeniería de software · Santiago, Chile",
  titleLead: "Ingeniería de software en la que tu operación",
  titleAccent: "confía",
  sub: "Desarrollo a medida, integraciones, automatización y datos listos para IA — con la responsabilidad de una empresa formal: SLA, contratos y trazabilidad. Para Chile, LATAM y EE. UU.",
  // Cifras conservadoras y verificables (TODO Tomás: confirmar números).
  stats: [
    { v: "+10 años", l: "trayectoria formal" },
    { v: "Chile", l: "equipo · zona horaria EE.UU." },
    { v: "SLA", l: "contratos · Ley 19.628" },
  ],
};

// ------------------------------------------------------------
// SOLUCIONES (orientadas a resultado) — la firma indexada 01–06
// ------------------------------------------------------------
export const SOLUTIONS = [
  {
    id: "moderniza",
    title: "Moderniza sistemas legados",
    blurb: "Renueva plataformas antiguas sin frenar la operación.",
  },
  {
    id: "automatiza",
    title: "Automatiza procesos",
    blurb: "Elimina el trabajo manual repetitivo con flujos confiables.",
  },
  {
    id: "integra",
    title: "Integra sistemas (incl. sin API · RPA)",
    blurb: "Conecta lo que no se deja: WMS, ERP y sistemas legados.",
  },
  {
    id: "ia",
    title: "Adopta IA con control",
    blurb: "Agentes y modelos con aprobación humana y evidencia.",
  },
  {
    id: "productos",
    title: "Construye productos digitales",
    blurb: "Del prototipo al producto: web, móvil y cloud.",
  },
  {
    id: "datos",
    title: "Datos & analítica",
    blurb: "Datos limpios, integrados y listos para decidir (y para IA).",
  },
];

// ------------------------------------------------------------
// SERVICIOS (capacidades) — `icon` mapea a un ícono en ui/Icon.tsx
// ------------------------------------------------------------
export const SERVICES = [
  {
    id: "desarrollo",
    icon: "dev",
    title: "Desarrollo de software a medida",
    description:
      "Aplicaciones web, móviles y de escritorio diseñadas alrededor de tu operación — no plantillas genéricas.",
    features: ["Web · móvil · cloud", "APIs y back-ends", "Arquitectura escalable"],
  },
  {
    id: "integraciones",
    icon: "link",
    title: "Integraciones & RPA",
    description:
      "Conectamos tus sistemas aunque no tengan API: RPA que lee pantallas, extrae datos y sincroniza con tu WMS o ERP.",
    features: ["WMS / ERP", "RPA donde no hay API", "Sincronización confiable"],
  },
  {
    id: "ia",
    icon: "ai",
    title: "Ingeniería de IA & agentes",
    description:
      "Agentes y modelos LLM que ejecutan tareas complejas pidiendo aprobación humana en los puntos críticos, con evidencia.",
    features: ["Agentes con tools", "Aprobaciones + auditoría", "RAG sobre tus datos"],
  },
  {
    id: "data",
    icon: "data",
    title: "Data engineering & analítica",
    description:
      "Limpiamos, integramos y estructuramos tus datos para que sean confiables — base de toda decisión y de la IA.",
    features: ["Pipelines y ETL", "Datos listos para IA", "Modelado y calidad"],
  },
  {
    id: "observabilidad",
    icon: "dash",
    title: "Dashboards & observabilidad",
    description:
      "Tableros conectados a tus datos reales, con alertas y trazabilidad para decidir con información, no con suposiciones.",
    features: ["Tiempo real", "Alertas por umbral", "Trazabilidad por operación"],
  },
  {
    id: "calidad",
    icon: "shield",
    title: "QA, DevSecOps & cloud",
    description:
      "Pruebas, despliegue continuo y seguridad para que lo que construimos llegue a producción y se mantenga estable.",
    features: ["QA & testing", "CI/CD", "Cloud AWS · GCP · Azure"],
  },
];

// ------------------------------------------------------------
// INDUSTRIAS
// ------------------------------------------------------------
export const INDUSTRIES = [
  {
    id: "logistica",
    title: "Logística & Supply Chain",
    description:
      "Recepción, despacho y trazabilidad en centros de distribución.",
  },
  {
    id: "retail",
    title: "Retail & Comercio",
    description:
      "Sincronización de inventarios, órdenes y precios entre sistemas heterogéneos.",
  },
  {
    id: "manufactura",
    title: "Manufactura",
    description:
      "Control de producción, calidad y reporting automatizado para plantas.",
  },
  {
    id: "finanzas",
    title: "Servicios Financieros",
    description:
      "Conciliaciones, reportes regulatorios y flujos de aprobación.",
  },
  {
    id: "salud",
    title: "Salud & Farmacia",
    description:
      "Gestión documental, trazabilidad de lotes y cumplimiento normativo.",
  },
  {
    id: "gobierno",
    title: "Gobierno & Sector Público",
    description:
      "Digitalización de procesos e integración con plataformas estatales.",
  },
];

// ------------------------------------------------------------
// CASOS — representativos y honestos (sin métricas inventadas)
// ------------------------------------------------------------
export const CASES_NOTE =
  "Ejemplos representativos del tipo de proyectos que ejecutamos. Casos con cliente y resultados verificados, disponibles bajo NDA.";

export const CASES = [
  {
    id: "recepciones",
    title: "Validación automática de recepciones documentales",
    industry: "Logística",
    summary:
      "Captura de documentos, normalización y comparación contra el ERP, con una compuerta de aprobación antes de cada pago. Menos errores silenciosos y trazabilidad completa.",
    tags: ["Automatización", "RPA", "ERP"],
  },
  {
    id: "wms",
    title: "Integración con un WMS sin API disponible",
    industry: "Retail",
    summary:
      "Conector RPA que lee la interfaz del WMS legado, extrae órdenes de despacho y las sincroniza con el sistema de courier — sin reemplazar el WMS.",
    tags: ["Integración", "RPA", "WMS"],
  },
  {
    id: "aprobaciones",
    title: "Aprobaciones con evidencia por WhatsApp",
    industry: "Manufactura",
    summary:
      "Un agente gestiona el flujo de excepciones: solicita aprobación, registra la respuesta con fecha y hora, y genera un informe de auditoría automático.",
    tags: ["Agentes IA", "Aprobaciones", "Auditoría"],
  },
];

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------
export const FAQ = [
  {
    q: "¿Trabajan con empresas pequeñas o solo con grandes corporaciones?",
    a: "Con ambas. Lo que importa es que tengas un proceso con fricción o un sistema que construir: ahí generamos valor real, sin importar el tamaño.",
  },
  {
    q: "¿Cuánto demora un proyecto típico?",
    a: "Un piloto funcional suele estar listo en 4 a 8 semanas. Primero mostramos resultados en un alcance acotado; luego escalamos. Sin proyectos de 18 meses sin entregables.",
  },
  {
    q: "¿Necesito un equipo técnico interno?",
    a: "No es requisito. Nos integramos con lo que tengas, documentamos todo y dejamos el sistema operable por personas no técnicas.",
  },
  {
    q: "¿Qué pasa si mi sistema no tiene API?",
    a: "Usamos RPA para interactuar con la interfaz de usuario. Si tiene pantalla, podemos automatizarlo e integrarlo.",
  },
  {
    q: "¿Cómo manejan la seguridad de nuestros datos?",
    a: "Desplegamos en tu infraestructura o en nubes dedicadas (AWS/GCP/Azure). No almacenamos datos de producción sin autorización explícita y entregamos un documento de arquitectura de seguridad antes de iniciar.",
  },
  {
    q: "¿Ofrecen soporte post-entrega?",
    a: "Sí. Incluimos soporte post-lanzamiento y ofrecemos planes de mantención con SLA definido, monitoreo y mejoras iterativas.",
  },
];

// ------------------------------------------------------------
// TECH STACK
// ------------------------------------------------------------
export const TECH_STACK = [
  {
    category: "Backend & APIs",
    items: ["Python", "Node.js", "FastAPI", "REST / GraphQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "IA & LLM",
    items: ["Anthropic Claude", "OpenAI", "RAG", "Agentes con tools"],
  },
  {
    category: "Automatización & RPA",
    items: ["RPA de interfaz", "n8n", "Make", "Power Automate"],
  },
  {
    category: "Datos",
    items: ["PostgreSQL", "SQL Server", "Pipelines / ETL", "Analytics"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "CI/CD"],
  },
];
