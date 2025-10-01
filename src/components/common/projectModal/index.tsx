"use client";

import React, { useState } from "react";
import ProjectCard from "../projectCard";
import { PortfolioProject } from "@/types/portfolioProject";
import { FaGithub } from "react-icons/fa";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  LinkIcon,
} from "lucide-react";
import Link from "next/link";
import { ModalHeader, ModalOverlay, ModalRoot } from "@/components/ui/modal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Tag from "@/components/ui/tag";
import MemberButton from "../memberButton";
import Image from "next/image";

interface ProjectModalProps {
  project: PortfolioProject;
}

export function ProjectModal({ project }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =
    project.images && project.images.length > 0
      ? project.images
      : ["/LogoLFSDark.png"];

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const renderIcons = () => {
    return (
      <>
        {project.repository && project.visibility === "public" && (
          <Link href={project.repository} target="_blank">
            <FaGithub className="size-6 cursor-pointer hover:text-primary transition-all" />
          </Link>
        )}
        {project.homepage && (
          <Link href={project.homepage} title="Deploy" target="_blank">
            <ExternalLink className="size-6 cursor-pointer hover:text-primary transition-all" />
          </Link>
        )}
        {project.links &&
          project.links.map((link, index) => (
            <Link key={index} href={link.url} title={link.name} target="_blank">
              <LinkIcon className="size-6 cursor-pointer hover:text-primary transition-all" />
            </Link>
          ))}
      </>
    );
  };

  return (
    <>
      <ProjectCard
        key={project.id}
        project={project}
        onClick={() => {
          setIsOpen(true);
          setCurrentIndex(0);
        }}
      />

      {isOpen && (
        <ModalOverlay onDimiss={() => setIsOpen(false)}>
          <ModalRoot className="max-w-xl px-6">
            <ModalHeader onDimiss={() => setIsOpen(false)}>
              Visualizar Projeto
            </ModalHeader>

            <div className="relative rounded-md overflow-hidden aspect-[16/9] bg-background/80 flex items-center justify-center">
              <div className="relative w-full h-full">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                    style={{
                      opacity: currentIndex === index ? 1 : 0,
                      pointerEvents: currentIndex === index ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Imagem ${index + 1}`}
                      className="object-cover"
                      fill
                    />
                  </div>
                ))}
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="size-4.5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 transition"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="size-4.5" />
                  </button>
                </>
              )}

              <Tag
                className="absolute top-2 right-2 py-1 px-4"
                type={
                  project.status === "not-started"
                    ? "disabled"
                    : project.status === "in-progress"
                      ? "inProgress"
                      : undefined
                }
              >
                <span>
                  {project.status === "completed"
                    ? "Concluído"
                    : project.status === "in-progress"
                      ? "Em andamento"
                      : "Não iniciado"}
                </span>
              </Tag>
            </div>

            <Card
              contentPadding={true}
              className="border-none pb-3 w-full"
              aria-label={`Status do projeto: ${project.status}`}
            >
              <CardHeader className="flex justify-between items-center mb-2">
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <div className="flex flex-row-reverse gap-2">
                  {renderIcons()}
                </div>
              </CardHeader>

              <CardContent className="mt-1">
                <CardDescription>
                  {project.description || "Sem descrição disponível."}
                </CardDescription>

                {project.collaborators && project.collaborators.length > 0 && (
                  <div className="flex flex-col gap-2 mt-3 mb-2">
                    <span className="font-medium text-sm">
                      Participantes do projeto
                    </span>

                    <div className="flex flex-row -space-x-1.5">
                      {project.collaborators.map((member, index) => (
                        <MemberButton member={member} key={index} />
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid gap-2 mt-3">
                  <h2 className="font-semibold">Tecnologias utilizadas</h2>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {project.stacks?.map((stack, index) => (
                      <Tag
                        className="capitalize font-semibold py-1.5 px-3"
                        key={index}
                      >
                        {stack}
                      </Tag>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ModalRoot>
        </ModalOverlay>
      )}
    </>
  );
}
