import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PartnerCardProps {
  name: string;
  logo: string;
  city?: string;
  subtitle?: string;
}

export default function PartnerCard({ name, logo, city, subtitle }: PartnerCardProps) {
  return (
    <div className="text-white text-center bg-[#111] p-4 rounded-lg shadow-md">
      <img src={logo} alt={name} className="h-16 mx-auto mb-4" />
      <h2 className="text-2xl font-bold">{name}</h2>
      {city && <p className="text-sm text-white/80">{city}</p>}
      {subtitle && <p className="text-xs text-white/60">{subtitle}</p>}
    </div>
  );
}
