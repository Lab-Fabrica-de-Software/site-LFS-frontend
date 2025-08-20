import Link from "next/link";
import type { ComponentProps } from "react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

const variantClasses = {
  primary: "bg-primary hover:bg-primary/90 text-[#252525]",
  secondary:
    "border-2 border-primary text-primary hover:bg-primary hover:text-black",
};

const baseClasses = "px-5 py-2 h-10 flex items-center rounded-md font-medium transition-colors duration-200 cursor-pointer";

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = twMerge(baseClasses, variantClasses[variant], className);

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}

interface RedirectButtonProps extends ComponentProps<"a"> {
  variant?: "primary" | "secondary";
  href: string;
}

export function RedirectButton({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: RedirectButtonProps) {
  const classes = twMerge(baseClasses, variantClasses[variant], className);

  return (
    <Link href={href} {...props} className={classes}>
      {children}
    </Link>
  );
}
