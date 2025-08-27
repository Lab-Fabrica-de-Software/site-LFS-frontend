"use client";

import { motion } from "motion/react";
import { Button, RedirectButton } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, useState } from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { navLinks } from "@/constants/navLinks";
import { Menu } from "lucide-react";

interface NavbarProps extends ComponentProps<"nav"> {
  socialIconsVisible?: boolean;
}

export function Navbar({ socialIconsVisible = false, ...props }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.replace("#", ""));
    if (section) {
      const isMobile = window.innerWidth <= 768;
      section.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "start" : "center",
      });
      setIsOpen(false);
    }
  };

  return (
    <header
      className="max-w-7xl z-50 fixed top-0 w-full left-0 right-0 lg:top-4 mx-auto lg:px-6"
      {...props}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="border-b lg:border bg-card/95 md:bg-card/80 backdrop-blur-md lg:rounded-2xl py-3 px-4 lg:px-8 flex items-center justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex items-center space-x-1"
        >
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="/IconLFS.png"
              alt="IconLFS"
              className="md:w-10 md:h-10 w-9.5"
              priority
            />
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center space-x-4 text-white">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 + 0.5 * index }}
                key={index}
              >
                {link.href[0] === "#" ? (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary/90 text-lg transition cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    aria-label={`Navege para: ${link.label}`}
                    className="hover:text-primary/90 text-lg transition"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          <RedirectButton href="/" className="text-lg">
            Ingresse Já
          </RedirectButton>

          {!socialIconsVisible && (
            <>
              <Link
                target="_blank"
                rel="noreferrer"
                aria-label="Discord"
                href="https://discord.com/invite/caPTw4cSAr"
              >
                <FaDiscord className="text-white w-8 h-8 hover:text-primary/90 transition" />
              </Link>
              <Link
                href="https://linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
                target="_blank"
                aria-label="LinkedIn"
                rel="noreferrer"
              >
                <FaLinkedin className="text-white w-8 h-8 hover:text-primary/90 transition" />
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden"
          aria-label={
            isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
          }
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu />
        </button>
      </motion.nav>

      <div
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-transform duration-500 ease-in-out border-b bg-card/95 backdrop-blur-md shadow-lg rounded-b-lg ${
          isOpen ? "translate-y-15" : "-translate-y-full"
        }`}
      >
        <div className="p-4">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.href[0] === "#" ? (
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary/90 text-sm transition cursor-pointer"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    aria-label={`Navege para: ${link.label}`}
                    className="hover:text-primary/90 text-sm transition"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}

            <Link href="/">
              <Button className="py-1 h-8 text-sm">Ingresse Já</Button>
            </Link>

            {!socialIconsVisible && (
              <div className="flex space-x-3 pt-2">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Discord"
                  href="https://discord.com/invite/caPTw4cSAr"
                >
                  <FaDiscord className="text-white w-8 h-8 hover:text-primary/90 transition" />
                </Link>
                <Link
                  href="https://linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
                  target="_blank"
                  aria-label="LinkedIn"
                  rel="noreferrer"
                >
                  <FaLinkedin className="text-white w-8 h-8 hover:text-primary/90 transition" />
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
