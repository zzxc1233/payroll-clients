import type { HtmlHTMLAttributes, HTMLInputAutoCompleteAttribute, ReactNode } from "react";
import { cn } from "../../lib/utils";

const variants = {
  default:
    "bg-surface-variant text-muted",

  success:
    "bg-emerald-50 text-emerald-700",

  warning:
    "bg-amber-50 text-amber-700",

  danger:
    "bg-red-50 text-red-700",

  info:
    "bg-blue-50 text-blue-700",
};

interface BadgeProps extends HtmlHTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
}

export function Badge({
  children,
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        ["inline-flex items-center rounded-full px-2.5 py-1",
        "text-xs font-medium",
        variants[variant],
        className]
      )}
      {...props}
    >
      {children}
    </span>
  );
}