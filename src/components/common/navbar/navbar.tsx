"use client";

import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, useState } from "react";
import { FaDiscord, FaLinkedin } from "react-icons/fa";
import { navLinks } from "@/constants/navLinks";
import { Menu } from "lucide-react";

interface NavbarProps extends ComponentProps<"nav"> {
  isVisible?: boolean;
}

export function Navbar({ isVisible = false, ...props }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="max-w-7xl md:mt-4 xl:mt-8 mx-auto md:px-4 lg:px-6"
      {...props}
    >
      <div className="border-b md:border border-6A6A6A bg-card md:rounded-2xl py-3.5 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="/IconLFS.png"
              alt="IconLFS"
              className="md:w-12 md:h-12 w-9.5"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-white text-xl">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-primary/90 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/">
            <Button>Ingresse Já</Button>
          </Link>

          {!isVisible && (
            <>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/invite/caPTw4cSAr"
              >
                <FaDiscord className="text-white w-8 h-8 hover:text-primary/90 transition" />
              </Link>
              <Link
                href="https://linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-white w-8 h-8 hover:text-primary/90 transition" />
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Menu />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-transform duration-500 ease-in-out bg-card border-b border-6A6A6A shadow-lg rounded-b-lg ${
          isOpen ? "translate-y-15" : "-translate-y-full"
        }`}
      >
        <div className="p-4">
          <ul className="flex flex-col space-y-4 text-white text-lg">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-primary/90 text-sm transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <Link href="/">
              <Button className="py-1 h-8 text-sm">Ingresse Já</Button>
            </Link>
            {!isVisible && (
              <div className="flex space-x-3 pt-2">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.com/invite/caPTw4cSAr"
                >
                  <FaDiscord className="text-white w-8 h-8 hover:text-primary/90 transition" />
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
                >
                  <FaLinkedin className="text-white w-8 h-8 hover:text-primary/90 transition" />
                </Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
