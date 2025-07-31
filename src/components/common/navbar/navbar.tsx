"use client";

import { Button } from "@/components/ui/button/Button";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps, useState } from "react";
import { FaDiscord, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "@/constants/navLinks";

interface NavbarProps extends ComponentProps<"nav"> {
  children?: React.ReactNode;
}

export default function Navbar({ className, children, ...props }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="max-w-7xl md:mt-4 xl:mt-8 mx-auto md:px-4 lg:px-6 "
      {...props}
    >
      <div className="border-b md:border border-6A6A6A bg-card md:rounded-2xl py-3.5 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src="/LFS.png"
              alt="Logo"
              className="w-12 h-12"
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

          <Link
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/caPTw4cSAr"
          >
            <FaDiscord className="text-white w-9 h-9 hover:text-primary/90 transition" />
          </Link>
          <Link
            href="https://linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-white w-9 h-9 hover:text-primary/90 transition" />
          </Link>
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 border-b border-6A6A6A bg-card w-full rounded-b-lg p-4 shadow-lg mt-12 flex flex-col space-y-4 z-50 md:hidden">
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
            <Link href="/">
              <Button>Ingresse Já</Button>
            </Link>
            <div className="flex space-x-3">
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
          </div>
        )}
      </div>
    </nav>
  );
}