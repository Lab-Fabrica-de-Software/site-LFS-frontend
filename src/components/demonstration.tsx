"use client";

import React from 'react'
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface DemonstrationProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' ;
}

const variantClasses = {
  primary: 'bg-lfs-primary hover:bg-lfs-primary/70',
  secondary: 'border-2 border-lfs-primary text-lfs-primary hover:bg-lfs-primary hover:text-black'
}

export default function Demonstration({ children, variant = "primary", className, ...props }: DemonstrationProps) {
  const baseClasses = 'px-4 py-2 rounded transition-colors duration-200 cursor-pointer';
  const classes = twMerge(baseClasses, variantClasses[variant], className);

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
}
