export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Industrias", href: "/industrias" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Casos", href: "/casos" },
  { label: "Contacto", href: "/contacto" },
];
