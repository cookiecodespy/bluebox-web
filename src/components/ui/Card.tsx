import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[14px] border border-line bg-paper-2",
        hover
          ? "transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[0_22px_50px_-30px_rgba(23,20,16,0.55)]"
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
