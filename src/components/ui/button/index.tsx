import type { ComponentProps } from 'react';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<"button">{
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' ;
}

const variantClasses = {
     primary: 'bg-primary hover:bg-primary/70 text-[#252525]',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-black'
}

export function Button({children, variant = "primary", className, ...props}: ButtonProps) {
    const baseClasses = 'px-5 py-2 h-10 flex items-center rounded-md font-medium transition-colors duration-200 cursor-pointer';
    const classes = twMerge(baseClasses, variantClasses[variant], className );

    return (<button {...props} className={classes}>
        {children}

    </button>
    );
}