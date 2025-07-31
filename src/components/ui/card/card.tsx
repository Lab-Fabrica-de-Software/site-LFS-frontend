import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="card"
            {...props}
            className={twMerge("bg-card-background px-6 py-6",
                className
            )}
        />

    );
}

export function CardHeader({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            {...props}
            className={twMerge("grid items-start",
                className
            )}
        />
    );

}

export function CardTitle({ className, ...props }: ComponentProps<"h1">) {
    return (
        <h1
            data-slot="card-title"
            {...props}
            className={twMerge("text-xl font-bold",
                className

            )}
        />
    );
}

export function CardSubtitle({ className, ...props }: ComponentProps<"h2">) {
    return (
        <h2
            data-slot="card-subtitle"
            {...props}
            className={twMerge("text-md text-primary font-semibold",
                className
            )}
        />
    );
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
    return (
        <p
            data-slot="card-description"
            {...props}
            className={twMerge("text-sm font-medium",
                className
            )}
        />
    );
}


export function CardContent({ className, ...props }: ComponentProps<"div">) {
    return (
        <div data-slot="card-content"  {...props} className={twMerge("mt-2", className)} />
    )
}