import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TagProps extends ComponentProps<"div"> {
    className?: string,
    type?: 'disabled' | 'inProgress'
}

const variantClasses = {
    disabled: 'bg-gray-500 text-white',
    inProgress: 'bg-blue-600 text-white'
}

export default function Tag({ className, type, ...props }: TagProps) {
    const style = twMerge(
        "bg-primary px-5 py-2 rounded-md text-sm text-black",
        type ? variantClasses[type] : "",
        className
    );

    return (
        <div className={style} {...props} />
    );
}
