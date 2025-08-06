import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

interface UserButtonProps extends ComponentProps<typeof Link> {
    username: string;
    image: string;
}

export default function UserButton({username, image, className, href, ...props}: UserButtonProps) {
    const styles = twMerge('rounded-full border-2 w-8 h-8 border-primary hover:-translate-y-0.5 transition duration-300', className);

    return (
    <Link href={href} {...props}>
        <Image src={image || ""} alt={username} className={styles} width={40} height={40} loading='lazy' title={username} />
    </Link>
  )
}
    