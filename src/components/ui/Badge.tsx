import { type ReactNode } from "react";

type BadgeVariant = "blue" | "teal" | "green" | "slate" | "navy";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: "bg-blue-100 text-blue-800 border border-blue-200",
  teal: "bg-cyan-100 text-cyan-800 border border-cyan-200",
  green: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  slate: "bg-slate-100 text-slate-700 border border-slate-200",
  navy: "bg-blue-950 text-blue-200 border border-blue-800",
};

export function Badge({ children, variant = "blue", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
