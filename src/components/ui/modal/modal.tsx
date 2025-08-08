import { X } from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ModalOverlayProps {
  onDimiss: () => void;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

export function ModalOverlay({
  onDimiss,
  className,
  children,
  ...props
}: ModalOverlayProps) {
  const handleCloseBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onDimiss) {
      onDimiss();
    }
  };

  const overlayClasses = twMerge(
    "fixed fade-in-zoom-in inset-0 z-50 bg-black/50",
    className
  );

  return (
    <div
      data-slot="modal-overlay"
      onClick={handleCloseBackdrop}
      {...props}
      className={overlayClasses}
    >
      {children}
    </div>
  );
}

interface ModalRootProps {
  children: React.ReactNode;
  className?: string;
}

export function ModalRoot({ children, className, ...props }: ModalRootProps) {
  return (
    <div
      className={twMerge(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border shadow-lg duration-200 sm:max-w-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface ModalHeaderProps {
  children: React.ReactNode;
  hideCloseButton?: boolean;
  onDimiss: () => void;
  className?: string;
}

export function ModalHeader({
  children,
  onDimiss,
  hideCloseButton,
  className,
  ...props
}: ModalHeaderProps) {
  const handleCloseModal = (e: React.MouseEvent) => {
    onDimiss();
  };

  return (
    <div
      data-slot="modal-header"
      {...props}
      className={twMerge("flex w-full justify-between", className)}
    >
      {children}
      {!hideCloseButton && (
        <button
          type="button"
          aria-label="fechar-menu"
          onClick={handleCloseModal}
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}
