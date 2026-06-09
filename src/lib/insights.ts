// Artículos de Insights (blog). Contenido real, editable aquí.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMin: number;
  icon: string;
  img: string;
  body: Block[];
}

export const ARTICLES: Article[] = [
  {
    slug: "tu-ia-falla-son-los-datos",
    title: "Por qué tu IA falla: casi siempre son los datos",
    excerpt:
      "El modelo no es el problema. Si tus datos están sucios, dispersos o sin contexto, ninguna IA va a funcionar. Así lo abordamos.",
    category: "Datos & IA",
    readMin: 5,
    icon: "ia",
    img: "/images/insight-1.jpg",
    body: [
      { type: "p", text: "La mayoría de los proyectos de IA que fracasan no fracasan por el modelo. Fracasan porque los datos que lo alimentan están sucios, duplicados, dispersos en cinco sistemas o sin el contexto que el negocio sí tiene pero que nadie escribió en ninguna parte." },
      { type: "h", text: "El espejismo del modelo mágico" },
      { type: "p", text: "Es tentador pensar que basta con conectar un modelo potente y listo. Pero un modelo es tan bueno como lo que recibe. Si le das datos inconsistentes, te devolverá respuestas inconsistentes — con la peligrosa diferencia de que sonarán convincentes." },
      { type: "h", text: "Qué revisamos antes de hablar de IA" },
      { type: "ul", items: [
        "Calidad: ¿hay duplicados, vacíos, formatos mezclados?",
        "Integración: ¿los datos viven en islas o se hablan entre sí?",
        "Contexto: ¿el conocimiento del negocio está capturado o solo en la cabeza de la gente?",
        "Trazabilidad: ¿sabemos de dónde viene cada dato y cuándo cambió?",
      ] },
      { type: "p", text: "Recién cuando esa base está sólida, la IA deja de ser una demo y empieza a ser confiable. Por eso en BlueBox 'datos listos para IA' es un servicio antes que un eslogan." },
      { type: "quote", text: "La IA no arregla un proceso roto: lo automatiza más rápido. Primero ordenamos, después automatizamos." },
    ],
  },
  {
    slug: "rpa-cuando-no-hay-api",
    title: "RPA cuando no hay API: integrar un WMS legado sin reescribirlo",
    excerpt:
      "No todos los sistemas tienen API. Cuando los conectores estándar fallan, RPA conecta lo que parecía imposible — sin tocar el sistema original.",
    category: "Integración",
    readMin: 4,
    icon: "plug",
    img: "/images/insight-2.jpg",
    body: [
      { type: "p", text: "Un WMS de hace 15 años, un ERP cerrado, un portal del proveedor sin integración: tarde o temprano aparece el sistema que 'no se puede conectar'. La buena noticia es que casi siempre sí se puede." },
      { type: "h", text: "Si tiene pantalla, se puede automatizar" },
      { type: "p", text: "RPA (Robotic Process Automation) opera la interfaz como lo haría una persona: abre la pantalla, lee los datos, los extrae y los sincroniza con el otro sistema. No necesita API ni modificar el software original — lo que reduce el riesgo y el costo." },
      { type: "h", text: "Dónde brilla y dónde no" },
      { type: "ul", items: [
        "Brilla: sistemas legados sin API, procesos repetitivos y estables, integraciones puente mientras se moderniza.",
        "Cuidado: interfaces que cambian a diario sin aviso — ahí conviene una estrategia híbrida con monitoreo.",
      ] },
      { type: "p", text: "La clave es construirlo con manejo de excepciones y alertas: cuando algo cambia, el sistema avisa en vez de fallar en silencio." },
    ],
  },
  {
    slug: "automatizar-con-control",
    title: "Automatizar con control: aprobaciones humanas con evidencia",
    excerpt:
      "Automatizar no es quitarle el control al humano. Es que la máquina ejecute lo repetitivo y la persona apruebe lo importante — con registro de todo.",
    category: "Operaciones",
    readMin: 4,
    icon: "filecheck",
    img: "/images/insight-3.jpg",
    body: [
      { type: "p", text: "El miedo más común frente a la automatización es perder el control. Y es razonable: nadie quiere que un bot apruebe un pago millonario solo. La solución no es no automatizar — es automatizar con un humano en el punto crítico." },
      { type: "h", text: "El patrón: ejecutar → pausar → aprobar → registrar" },
      { type: "p", text: "El sistema hace todo el trabajo pesado, pero antes de la acción irreversible se detiene y pide aprobación a la persona correcta (por WhatsApp, email o panel). La persona aprueba o rechaza, y el sistema registra quién, cuándo y por qué." },
      { type: "h", text: "Por qué la evidencia importa" },
      { type: "ul", items: [
        "Auditoría: cada decisión queda trazada con fecha, hora y responsable.",
        "Confianza: el equipo adopta la automatización porque no pierde el control.",
        "Cumplimiento: ante una revisión, la evidencia ya está, no hay que reconstruirla.",
      ] },
      { type: "quote", text: "Automatización confiable = velocidad de máquina + criterio humano + evidencia de todo." },
    ],
  },
  {
    slug: "modernizar-sin-apagar-la-operacion",
    title: "Moderniza tu sistema legado sin apagar la operación",
    excerpt:
      "Reemplazar un sistema crítico de un día para otro es una receta para el desastre. La modernización buena es incremental e invisible para el usuario.",
    category: "Modernización",
    readMin: 5,
    icon: "moderniza",
    img: "/images/sol-moderniza.jpg",
    body: [
      { type: "p", text: "El sistema viejo funciona, pero cada cambio cuesta una eternidad, nadie quiere tocarlo y el proveedor original ya no existe. Suena familiar. El error sería reemplazarlo todo de golpe (un 'big bang') y rezar." },
      { type: "h", text: "Estrangulamiento, no demolición" },
      { type: "p", text: "Modernizamos por partes: rodeamos el sistema legado con piezas nuevas que van tomando funciones una a una, hasta que lo viejo queda vacío y se puede apagar sin que nadie lo note. El negocio nunca se detiene." },
      { type: "h", text: "El orden que seguimos" },
      { type: "ul", items: [
        "Mapear: entender qué hace el sistema y de qué depende.",
        "Aislar: ponerle una capa que permita reemplazar partes sin romper el resto.",
        "Migrar: trasladar función por función, midiendo en cada paso.",
        "Apagar: retirar lo legado cuando ya no carga peso.",
      ] },
      { type: "p", text: "Resultado: una plataforma moderna y mantenible, sin el trauma (ni el riesgo) de un apagón total." },
    ],
  },
];
