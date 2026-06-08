import { type ReactNode } from "react";

// Variantes legacy se mapean al estilo único del sistema; "accent" resalta en cobalto.
type BadgeVariant = "default" | "accent" | "blue" | "teal" | "green" | "slate" | "navy";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const style =
    variant === "accent"
      ? "border-cobalt/30 text-cobalt bg-cobalt/[0.06]"
      : "border-line text-ink-soft bg-paper/50";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide ${style} ${className}`}
    >
      {children}
    </span>
  );
}
