import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
} from "react";

import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      clearable = false,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState("");

    const isControlled = value !== undefined;

    const inputValue = isControlled
      ? String(value ?? "")
      : internalValue;

    function handleChange(
      e: React.ChangeEvent<HTMLInputElement>
    ) {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }

      onChange?.(e);
    }

    function handleClear() {
      if (!isControlled) {
        setInternalValue("");
      }

      const event = {
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange?.(event);
    }

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          type={type}
          value={inputValue}
          onChange={handleChange}
          className={cn(
            ["h-10 w-full rounded-md border border-border bg-surface px-3",
            "text-sm text-text outline-none transition",
            "placeholder:text-muted",
            "focus:border-primary focus:ring-2 focus:ring-primary/10",
            "disabled:cursor-not-allowed disabled:opacity-50",
            clearable && "pr-10",
            className]
          )}
          {...props}
        />

        {clearable && inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition hover:text-text"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";