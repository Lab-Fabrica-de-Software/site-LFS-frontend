import Image from 'next/image';
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

interface UserButtonProps extends ComponentProps<'button'> {
    username: string;
    image: string;
}

export default function UserButton({username, image, className, onClick, ...props}: UserButtonProps) {
    const styles = twMerge('rounded-full border-2 border-primary', className);

    return (
    <button className={onClick && 'hover:scale-[1.04] cursor-pointer'} {...props}>
        <Image src={image || ""} alt={username} className={styles} width={40} height={40} loading='lazy' />
    </button>
  )
}
 