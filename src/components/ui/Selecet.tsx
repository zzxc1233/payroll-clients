import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        className={cn([
          "h-10 w-full rounded-md border border-border bg-surface px-3",
          "text-sm text-text outline-none transition",
          "focus:border-primary focus:ring-2 focus:ring-primary/10",
          "disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer",
          className,
        ])}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted" />
    </div>
  );
}