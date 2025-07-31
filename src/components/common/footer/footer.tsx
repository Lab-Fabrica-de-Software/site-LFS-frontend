import { twMerge } from "tailwind-merge";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { footerLinks } from "@/constants/footerLinks";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const containerStyle = twMerge(
    "bg-background text-foreground px-6 md:px-12 py-10 mt-10",
    className
  );

  return (
    <footer className={containerStyle}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src="/logoLFS.png"
            alt="Laboratório Fábrica de Software"
            className="w-28 mb-4"
          />
          <p className="text-sm text-muted-foreground max-w-xs">
            Espaço onde alunos desenvolvem projetos reais de tecnologia,
            unindo teoria e prática para se prepararem para o mercado de trabalho.
          </p>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-primary font-bold mb-3">{section.title}</h3>
            {section.links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          Copyright ©2025 LFC inc. Todos direitos reservados. Laboratório Fábrica
          de Software LTDA.
        </p>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-primary transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
