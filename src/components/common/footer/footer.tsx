import { twMerge } from "tailwind-merge";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const containerStyle = twMerge(
    "bg-black text-white px-6 md:px-12 py-10 mt-10",
    className
  );

  const titleStyle = "text-green-500 font-bold mb-3";
  const linkStyle =
    "block text-sm text-gray-300 hover:text-green-500 transition-colors duration-200";

  return (
    <footer className={containerStyle}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img
            src="public/logoLFS.png"
            alt="Laboratório Fábrica de Software"
            className="w-28 mb-4"
          />
          <p className="text-sm text-gray-400 max-w-xs">
            Espaço onde alunos desenvolvem projetos reais de tecnologia,
            unindo teoria e prática para se prepararem para o mercado de trabalho.
          </p>
        </div>
        <div>
          <h3 className={titleStyle}>Empresa</h3>
          <a href="/sobre" className={linkStyle}>
            Sobre Nós
          </a>
          <a href="/projetos" className={linkStyle}>
            Projetos
          </a>
        </div>
        <div>
          <h3 className={titleStyle}>Suporte</h3>
          <a href="/contato" className={linkStyle}>
            Contato
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            Whatsapp
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          Copyright ©2025 LFC inc. Todos direitos reservados. Laboratório Fábrica de Software LTDA.
        </p>
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-green-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-green-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-green-500 transition-colors">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
