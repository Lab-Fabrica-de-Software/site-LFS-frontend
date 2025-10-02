import { fetchPortfolioProjects } from "@/lib/github/fetchPortfolioProjects";
import { HydrateProjects } from "@/lib/hydrateProjects";
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
  const { data: projects } = await fetchPortfolioProjects();

  const effectiveLimit = limit ?? (showViewAllButton ? 3 : projects.length);

  return (
    <HydrateProjects>
      <ProjectsSection
        limit={effectiveLimit}
        showViewAllButton={showViewAllButton}
      />
    </HydrateProjects>
  );
}
