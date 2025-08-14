import { twMerge } from "tailwind-merge";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { footerLinks } from "@/constants/footerLinks";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const containerStyle = twMerge(
    "bg-card border-t-1 text-foreground px-6 md:px-12 py-10 mt-10",
    className
  );

  return (
    <footer className={containerStyle}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <Image
            src="/LogoLFS.png"
            alt="Laboratório Fábrica de Software"
            width={112} 
            height={112}
            className="mb-4"
            priority
          />
          <p className="text-sm text-muted-foreground max-w-xs">
            Espaço onde alunos desenvolvem projetos reais de tecnologia,
            unindo teoria e prática para se prepararem para o mercado de trabalho.
          </p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-primary font-bold mb-3">{section.title}</h3>
            {section.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t max-w-6xl mx-auto border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          Copyright ©2025 LFC inc. Todos direitos reservados. Laboratório
          Fábrica de Software LTDA.
        </p>
        <div className="flex gap-4 text-lg">
          <Link href="#" className="hover:text-primary transition-colors">
            <FaFacebookF />
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            <FaInstagram />
          </Link>
          <Link href="https://chat.whatsapp.com/HVRjmSdMzMjBAQj8DXPb30" className="hover:text-primary transition-colors">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
}
