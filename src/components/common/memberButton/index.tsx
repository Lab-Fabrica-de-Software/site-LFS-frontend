import { Member } from '@/types/member';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface MemberButtonProps {
  member: Member,
  className?: string
}

export default function MemberButton({ member, className }: MemberButtonProps) {
  const styles = twMerge('rounded-full border-2 w-8 h-8 border-primary hover:-translate-y-0.5 transition duration-200', className);

  return (
    <Link href={member.githubUrl}>
      <Image src={member.image || ""} alt={member.name} className={styles} width={40} height={40} loading='lazy' title={member.name} />
    </Link>
  )
}
