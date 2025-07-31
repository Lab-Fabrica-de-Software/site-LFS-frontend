"use client";

import React, { ComponentProps, useState } from 'react';
import { FaDiscord, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps extends ComponentProps<'nav'> {
  children?: React.ReactNode;
}

export default function Navbar({ className, children, ...props }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav
        className=
          "max-w-screen-xl mt-12 mr-10 ml-10 mx-auto px-6 py-3 border border-6A6A6A bg-black rounded-lg flex items-center justify-between"
        {...props}
      >
        <div className="flex items-center space-x-1">
          <a href='/'>
            <img src="/LFS.png" alt="Logo" className="w-12 h-12 ml-7" />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-white text-xl">
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-green-400 transition">Início</a></li>
            <li><a href="/" className="hover:text-green-400 transition">Sobre Nós</a></li>
            <li><a href="/" className="hover:text-green-400 transition">Projetos</a></li>
          </ul>

          <a
            href="/"
            className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-500  transition"
          >
            Ingresse Já
          </a>

          <a
            href="https://discord.com/invite/caPTw4cSAr"
          >
            <FaDiscord className="text-white w-9 h-9 hover:text-green-400 transition" />
          </a>
          <a
            href="https://linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
            className="pr-1"
          >
            <FaLinkedin className="text-white w-9 h-9 hover:text-green-400 transition" />
          </a>
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 border border-6A6A6A bg-black w-11/12 rounded-xl p-4 shadow-lg mt-12 flex flex-col space-y-4 z-50 md:hidden">
            <a href="/" className="text-white">Início</a>
            <a href="/" className="text-white">Sobre Nós</a>
            <a href="/" className="text-white">Projetos</a>
            <a
              href="/"
              className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold"
            >
              Ingresse Já
            </a>
            <div className="flex space-x-3">
              <a
                href="https://discord.com/invite/caPTw4cSAr"
              >
                <FaDiscord className="text-white w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/laborat%C3%B3rio-f%C3%A1brica-de-software/posts/?feedView=all"
              >
                <FaLinkedin className="text-white w-8 h-8" />
              </a>
            </div>
          </div>
        )}

      </nav>
  );
}