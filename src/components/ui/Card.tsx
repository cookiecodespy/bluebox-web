import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  glass = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border",
        glass
          ? "glass"
          : "bg-white border-slate-200 shadow-sm",
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200"
          : "",
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
