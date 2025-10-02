"use client";

import { ProjectModal } from "@/components/common/projectModal";
import { RedirectButton } from "@/components/ui/button";
import { PortfolioProject } from "@/types/portfolioProject";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface ProjectsSectionProps {
  limit?: number;
  showViewAllButton?: boolean;
}

export default function ProjectsSection({
  limit = 4,
  showViewAllButton = true,
}: ProjectsSectionProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["portfolio-projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      if (!res.ok) throw new Error("Erro ao buscar projetos");
      return res.json() as Promise<{ data: PortfolioProject[], error: boolean }>;
    },
    staleTime: 1000 * 60 * 5,
  });

  const projects = data?.data || [];
  const displayedProjects = projects.slice(0, limit);

  if (isLoading) {
    return (
      <section className="container pt-14 md:pt-18 md:pb-15 mx-auto w-full flex justify-center">
        <span>Carregando projetos...</span>
      </section>
    );
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="container pt-14 md:pt-18 md:pb-15 mx-auto w-full"
    >
      <header className="w-full flex flex-row justify-between items-center">
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
        Veja uma prévia de alguns projetos produzidos pelo nosso time.
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
        <div className="flex w-full items-center justify-center flex-col py-20 mt-3 bg-card-background">
          <span className="opacity-70 font-semibold">
            {error || data?.error ? "Não foi possível carregar os projetos" : "Não há projetos disponíveis no momento."}
          </span>
          <span className="opacity-70">Volte mais tarde</span>
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
