import { ProjectModal } from "@/components/common/projectModal";
import { RedirectButton } from "@/components/ui/button";
import { PortfolioProject } from "@/types/portfolioProject";
import React from "react";

interface ProjectsSectionProps {
  projects: PortfolioProject[];
  limit?: number;
  showViewAllButton?: boolean;
}

export default function ProjectsSection({
  projects,
  limit = 4,
  showViewAllButton = true,
}: ProjectsSectionProps) {
  const displayedProjects = projects.slice(0, limit);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="container pt-14 md:pt-18 md:pb-15 mx-auto w-full"
    >
      <header className="w-full">
        <h2 id="projects-title" className="text-3xl md:text-4xl font-semibold">
          Veja alguns dos nossos projetos
        </h2>

        {showViewAllButton && projects.length > limit && (
          <RedirectButton href="/projects" className="hidden md:block">
            Ver mais
          </RedirectButton>
        )}
      </header>

      <p className="mt-2 mb-6 opacity-70">
        Veja uma prévia de alguns projetos produzido pelo nosso time.
      </p>

      {projects.length > 0 ? (
        <div className="grid gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {displayedProjects.map((project) => (
              <ProjectModal project={project} key={project.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center mt-3">
          <span className="opacity-70">Erro ao localizar projetos</span>
        </div>
      )}
      {showViewAllButton && projects.length > limit && (
        <RedirectButton className="mt-4 md:hidden w-full" href="/projects">
          Ver mais
        </RedirectButton>
      )}
    </section>
  );
}
