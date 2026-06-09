export interface NavItem {
  label: string;
  href: string;
}

// Navegación principal (header)
export const NAV_ITEMS: NavItem[] = [
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Servicios", href: "/servicios" },
  { label: "Industrias", href: "/industrias" },
  { label: "Casos", href: "/casos" },
  { label: "Insights", href: "/insights" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

// Links adicionales solo en el footer
export const FOOTER_EXTRA: NavItem[] = [
  { label: "Tecnología", href: "/tecnologia" },
];
