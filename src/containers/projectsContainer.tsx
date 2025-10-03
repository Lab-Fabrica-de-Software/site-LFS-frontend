"use client";

import ProjectsSection from "@/sections/projectsSection";
import { PortfolioProject } from "@/types/portfolioProject";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";

interface ProjectsPageContainerProps {
  perPage?: number;
  page?: number;
  showViewAllButton?: boolean;
}

export default function ProjectsContainer({ perPage = 3, page = 1, showViewAllButton }: ProjectsPageContainerProps) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["portfolio-projects", { perPage, page }],
    queryFn: async () => {
      const res = await fetch(`/api/projects?per_page=${perPage}&page=${page}`);
      if (!res.ok) throw new Error("Erro ao buscar projetos");
      return res.json() as Promise<{ data: PortfolioProject[]; error: boolean }>;
    },
    placeholderData: keepPreviousData,
  });

  return (
    <ProjectsSection
      projects={data?.data || []}
      error={!!error || data?.error || false}
      isLoading={isLoading}
      limit={perPage}
      showViewAllButton={showViewAllButton}
    />
  );
}
