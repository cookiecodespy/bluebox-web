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
  primary: "bg-cobalt text-white hover:bg-cobalt-deep",
  secondary: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-cobalt",
  whatsapp: "bg-ink text-paper hover:opacity-90",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-6 py-3 text-base",
};

// Magnetismo sutil: el botón se inclina hacia el cursor (máx. ±7px / ±4px).
const clamp = (v: number, max: number) => Math.max(-max, Math.min(max, v));

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
  const magnetic = !fullWidth && !disabled;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!magnetic) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = clamp((e.clientX - (r.left + r.width / 2)) * 0.22, 7);
    const dy = clamp((e.clientY - (r.top + r.height / 2)) * 0.32, 4);
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0, 0)";
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-paper cursor-pointer";
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
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onMouseMove={onMove} onMouseLeave={onLeave}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
}
