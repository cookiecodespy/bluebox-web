// ============================================================
// Blue Box – Constantes globales
// Para actualizar: edita este archivo y haz commit.
// ============================================================

export const SITE_NAME = "Blue Box";
export const SITE_TAGLINE = "Software a medida. Automatización real.";
export const SITE_DESCRIPTION =
  "Sistemas, integraciones y agentes de IA con control, aprobaciones y evidencia. Transformamos procesos complejos en flujos digitales confiables.";
export const SITE_URL = "https://cookiecodespy.github.io/bluebox-web";

// Contacto
export const WHATSAPP_NUMBER = "56990166224";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Blue Box, me interesa agendar una demo para conocer sus servicios."
);
export const WHATSAPP_FULL_URL = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE}`;
export const CONTACT_EMAIL = "contacto@bluebox.cl";
export const CONTACT_PHONE = "+56 9 9016 6224";

// Redes (agrega tus handles cuando los tengas)
export const LINKEDIN_URL = "https://www.linkedin.com/company/bluebox-cl";

// Servicios
export const SERVICES = [
  {
    id: "control-tower",
    icon: "tower",
    title: "Control Tower",
    subtitle: "PDF → Canon → Compare → Gate",
    description:
      "Centralizamos el flujo documental: capturamos PDFs, los canonizamos, comparamos contra la fuente y aplicamos una compuerta de aprobación antes de cualquier acción. Cero errores silenciosos.",
    features: [
      "Captura automática de documentos",
      "Normalización y canonización",
      "Comparación contra fuente de verdad",
      "Gate de aprobación con evidencia",
      "Auditoría trazable 100%",
    ],
    color: "blue",
  },
  {
    id: "integraciones",
    icon: "integration",
    title: "Integraciones WMS / ERP",
    subtitle: "RPA cuando no hay API",
    description:
      "Conectamos tus sistemas legados aunque no tengan API: usamos RPA para leer pantallas, extraer datos y sincronizar con tu WMS o ERP. Funciona donde los conectores estándar fallan.",
    features: [
      "Automatización RPA de interfaz",
      "Conectores WMS y ERP nativos",
      "Sincronización bidireccional",
      "Manejo de excepciones con alertas",
      "Dashboard de estado en tiempo real",
    ],
    color: "navy",
  },
  {
    id: "agentes-ia",
    icon: "ai",
    title: "Agentes IA con Aprobaciones",
    subtitle: "WhatsApp / Email como canal",
    description:
      "Agentes de inteligencia artificial que ejecutan tareas complejas pero piden aprobación humana en los puntos críticos. El aprobador responde por WhatsApp o Email; el sistema registra evidencia.",
    features: [
      "Agentes LLM con tools personalizados",
      "Flujo de aprobación multi-nivel",
      "Notificaciones por WhatsApp y Email",
      "Registro de decisiones con timestamp",
      "Rollback automático ante rechazo",
    ],
    color: "teal",
  },
  {
    id: "dashboards",
    icon: "dashboard",
    title: "Dashboards & Observabilidad",
    subtitle: "Visibilidad total de tus operaciones",
    description:
      "Construimos dashboards operacionales conectados a tus datos reales. Alertas, métricas de proceso y trazabilidad completa para que tu equipo tome decisiones con información, no con suposiciones.",
    features: [
      "Dashboards en tiempo real",
      "Alertas configurables por umbral",
      "Trazabilidad de cada operación",
      "Exportación a PDF / Excel",
      "Acceso por roles y permisos",
    ],
    color: "green",
  },
];

// Industrias
export const INDUSTRIES = [
  {
    id: "logistica",
    icon: "🏭",
    title: "Logística y Supply Chain",
    description:
      "Automatización de recepción, despacho y trazabilidad en centros de distribución.",
  },
  {
    id: "retail",
    icon: "🛍️",
    title: "Retail y Comercio",
    description:
      "Sincronización de inventarios, órdenes y precios entre sistemas heterogéneos.",
  },
  {
    id: "manufactura",
    icon: "⚙️",
    title: "Manufactura",
    description:
      "Control de producción, calidad y reporting automatizado para plantas industriales.",
  },
  {
    id: "finanzas",
    icon: "📊",
    title: "Servicios Financieros",
    description:
      "Automatización de conciliaciones, reportes regulatorios y flujos de aprobación.",
  },
  {
    id: "salud",
    icon: "🏥",
    title: "Salud y Farmacia",
    description:
      "Gestión documental, trazabilidad de lotes y alertas de cumplimiento normativo.",
  },
  {
    id: "gobierno",
    icon: "🏛️",
    title: "Gobierno y Sector Público",
    description:
      "Digitalización de procesos internos, integración con ChileAtiende y plataformas GDE.",
  },
];

// Casos de éxito
export const CASES = [
  {
    id: "validacion-documental",
    metric: "-70%",
    metricLabel: "errores documentales",
    title: "Validación automática de recepciones",
    industry: "Logística",
    description:
      "Una empresa de distribución procesaba facturas de proveedor manualmente. Implementamos un Control Tower que captura, compara y valida cada documento contra el ERP antes de aprobar el pago. Los errores de recepción cayeron un 70% en el primer mes.",
    tags: ["Control Tower", "RPA", "ERP"],
  },
  {
    id: "integracion-wms",
    metric: "+3x",
    metricLabel: "velocidad de despacho",
    title: "Integración WMS sin API disponible",
    industry: "Retail",
    description:
      "El WMS legado no tenía API REST. Construimos un conector RPA que lee la pantalla, extrae órdenes de despacho y las sincroniza con el sistema de courier en tiempo real. La capacidad de despacho se triplicó sin cambiar el WMS.",
    tags: ["RPA", "WMS", "Integración"],
  },
  {
    id: "agentes-aprobacion",
    metric: "100%",
    metricLabel: "trazabilidad de decisiones",
    title: "Sistema de aprobaciones con evidencia",
    industry: "Manufactura",
    description:
      "Los gerentes aprobaban excepciones de calidad por WhatsApp sin registro. Construimos un agente IA que gestiona el flujo, solicita aprobación, registra la respuesta con timestamp y genera un informe de auditoría automático.",
    tags: ["Agente IA", "WhatsApp", "Auditoría"],
  },
];

// FAQ
export const FAQ = [
  {
    q: "¿Trabajan con empresas pequeñas o solo con grandes corporaciones?",
    a: "Trabajamos con empresas desde 10 hasta miles de empleados. Lo que importa es que tengas un proceso repetitivo con fricción: ahí es donde generamos valor real, sin importar el tamaño.",
  },
  {
    q: "¿Cuánto demora un proyecto típico?",
    a: "Un piloto funcional generalmente está listo en 4 a 8 semanas. Primero mostramos resultados en un proceso acotado; luego escalamos. No hacemos promesas vacías ni proyectos de 18 meses sin entregables.",
  },
  {
    q: "¿Necesito tener un equipo técnico interno?",
    a: "No es requisito. Nos integramos con lo que tienes: desde un equipo de TI robusto hasta solo un encargado de operaciones. Documentamos todo y dejamos el sistema operable por personas no técnicas.",
  },
  {
    q: "¿Qué pasa si mi sistema no tiene API?",
    a: "Usamos RPA (automatización robótica de procesos) para interactuar con interfaces de usuario. Si tiene pantalla, podemos automatizarlo.",
  },
  {
    q: "¿Cómo manejan la seguridad de nuestros datos?",
    a: "Los sistemas se despliegan en la infraestructura del cliente o en nubes dedicadas (AWS/GCP/Azure). Nunca almacenamos datos de producción en nuestros servidores sin autorización explícita. Entregamos un documento de arquitectura de seguridad antes del inicio.",
  },
  {
    q: "¿Ofrecen soporte post-entrega?",
    a: "Sí. Incluimos 30 días de soporte gratuito post-lanzamiento. Luego ofrecemos planes de mantención mensual con SLA definido, monitoreo y mejoras iterativas.",
  },
];

// Tech Stack (agrupado)
export const TECH_STACK = [
  {
    category: "Backend & APIs",
    items: ["Python", "Node.js", "FastAPI", "Express", "REST / GraphQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "IA & LLM",
    items: ["OpenAI GPT-4o", "Anthropic Claude", "LangChain", "LlamaIndex"],
  },
  {
    category: "Automatización",
    items: ["n8n", "Make (Integromat)", "Power Automate", "UiPath RPA"],
  },
  {
    category: "Bases de Datos",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL Server"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions"],
  },
];
