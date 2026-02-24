"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-700/25 border border-blue-600",
  secondary:
    "bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
  ghost:
    "bg-transparent text-slate-700 hover:text-blue-700 hover:bg-blue-50 border border-transparent",
  whatsapp:
    "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 border border-emerald-400",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-2.5 text-base rounded-xl",
  lg: "px-8 py-3.5 text-lg rounded-xl",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer";
  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
