"use client";

import React, { useState } from "react";
import {
  ModalOverlay,
  ModalRoot,
  ModalHeader,
} from "@/components/ui/modal/modal";
import ProjectCard from "../projectCard/projectCard";
import { PortfolioProject } from "@/types/portfolioProject";

interface ProjectModalProps {
  project: PortfolioProject;
}

export function ProjectModal({ project }: ProjectModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ProjectCard
        key={project.id}
        project={project}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <ModalOverlay onDimiss={() => setIsOpen(false)}>
          <ModalRoot className="max-w-xl">
            <ModalHeader
              className="pt-4.5 px-5"
              onDimiss={() => setIsOpen(false)}
            >
              Visualizar Projeto
            </ModalHeader>

            <ProjectCard
              key={project.id}
              project={project}
              noBorder
              internalPadding
              contentPadding
              roundedImage
            />
          </ModalRoot>
        </ModalOverlay>
      )}
    </>
  );
}
