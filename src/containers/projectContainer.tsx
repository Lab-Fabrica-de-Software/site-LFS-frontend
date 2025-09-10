import { fetchPortfolioProjects } from "@/lib/github/fetchPortfolioProjects";
import ProjectsSection from "@/sections/projectsSection";
import React from "react";

interface ProjectContainerProps {
  showViewAllButton?: boolean;
  limit?: number;
}

export async function ProjectContainer({
  showViewAllButton = true,
  limit,
}: ProjectContainerProps) {
  const { data: projects, error } = await fetchPortfolioProjects();

  const effectiveLimit = limit ?? (showViewAllButton ? 3 : projects.length);

  return (
    <ProjectsSection
      limit={effectiveLimit}
      showViewAllButton={showViewAllButton}
      projects={projects}
      error={error}
    />
  );
}
