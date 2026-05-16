import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        ["rounded-xl border border-border bg-surface p-6",
        className]
      )}
      {...props}
    >
      {children}
    </div>
  );
}