import Image from 'next/image';
import type { ComponentProps } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends ComponentProps<"button"> {
    className?: string;
    image?: string;
    imageContent?: React.ReactNode;
}

export function Card({ className, image, imageContent, children, onClick, ...props }: CardProps) {
    const onClickStyle = {
        card: "cursor-pointer hover:border-primary/70 hover:-translate-y-0.5 transition-shadow transition duration-300",
        image: "group-hover:scale-105 transition-transform duration-500",
        overlay: "group-hover:opacity-100 transition-opacity duration-300"
    }

    return (
        <button
            data-slot="card"
            {...props}
            className={twMerge("group bg-card-background appearance-none w-full text-left overflow-hidden flex flex-col",
                onClick ? onClickStyle.card : "",
                className
            )}
            disabled={!onClick}
        >
            {image && (
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt="Card Image"
                        className={`object-cover     ${onClick ? onClickStyle.image : ""}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        priority
                    />

                    <div className={`absolute inset-0 bg-linear-35 from-black/60 to-tramsparent opacity-0 ${onClick ? onClickStyle.overlay : ""}`}/>

                    {imageContent && (
                        <div className="absolute inset-0">
                            {imageContent}
                        </div>
                    )}
                </div>
            )}


            <div className={image ? "pt-2 px-4 pb-4 flex-1" : "p-4"}>
                {children}
            </div>
        </button>

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
            className={twMerge("text-sm",
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