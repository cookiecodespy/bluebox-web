import {
  RefreshCw,
  Workflow,
  Cable,
  BrainCircuit,
  Boxes,
  BarChart3,
  Code2,
  Database,
  Gauge,
  ShieldCheck,
  Truck,
  ShoppingCart,
  Factory,
  Landmark,
  HeartPulse,
  Building2,
  type LucideIcon,
} from "lucide-react";

// Íconos con significado (reemplazan los antiguos "cuadrados de puntos").
const MAP: Record<string, LucideIcon> = {
  // soluciones (por id)
  moderniza: RefreshCw,
  automatiza: Workflow,
  integra: Cable,
  ia: BrainCircuit,
  productos: Boxes,
  datos: BarChart3,
  // servicios (por icon key)
  dev: Code2,
  link: Cable,
  ai: BrainCircuit,
  data: Database,
  dash: Gauge,
  shield: ShieldCheck,
  spark: Workflow,
  // industrias (por id)
  logistica: Truck,
  retail: ShoppingCart,
  manufactura: Factory,
  finanzas: Landmark,
  salud: HeartPulse,
  gobierno: Building2,
};

export function Icon({
  name,
  className = "",
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Boxes;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
