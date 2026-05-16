import { cn } from "../../lib/utils";
import type { ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <button
        type="button"
        aria-label="Close modal overlay"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          ["relative z-10 w-full max-w-lg rounded-xl border border-border bg-surface p-6 shadow-lg",
          className,]
        )}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            {title && (
              <h2 className="text-lg font-semibold text-text">{title}</h2>
            )}

            {description && (
              <p className="mt-1 text-sm text-muted">{description}</p>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-muted transition hover:bg-surface-muted hover:text-text"
          >
            <X size={18} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
