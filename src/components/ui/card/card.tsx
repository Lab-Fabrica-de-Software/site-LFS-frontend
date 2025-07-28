import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardRootProps extends ComponentProps<"div"> {

}
export function Card({ className, ...props }: CardRootProps) {
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

interface CardHeaderProps extends ComponentProps<"div"> {

}
export function CardHeader({ className, ...props }: CardHeaderProps) {
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
interface CardTitleProps extends ComponentProps<"div"> {

}
export function CardTitle({ className, ...props }: CardTitleProps) {
    return (
        <div
            data-slot="card-title"
            {...props}
            className={twMerge("text-xl font-bold",
                className

            )}
        />
    );
}
interface CardSubtitleProps extends ComponentProps<"div"> {

}
export function CardSubtitle({ className, ...props }: CardSubtitleProps) {
    return (
        <div
            data-slot="card-subtitle"
            {...props}
            className={twMerge("text-md text-primary font-semibold",
                className
            )}
        />
    );
}

interface CardDescriptionProps extends ComponentProps<"div"> {

}
export function CardDescription({ className, ...props }: CardDescriptionProps) {
    return (
        <div
            data-slot="card-description"
            {...props}
            className={twMerge("text-sm font-medium",
                className
            )}
        />
    );
}

interface CardContentProps extends ComponentProps<"div"> { }

export function CardContent({ className, ...props }: CardContentProps) {
    return (
        <div data-slot="card-content"  {...props} className={twMerge("mt-2", className)} />
    )
}