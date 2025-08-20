import { fetchPortfolioProjects } from '@/lib/github/fetchPortfolioProjects'
import ProjectsSection from '@/sections/projectsSection';
import { PortfolioProject } from '@/types/portfolioProject'
import React from 'react'

export async function ProjectContainer() {
    const projects: PortfolioProject[] = await fetchPortfolioProjects();

    return (
    <ProjectsSection projects={projects} /> 
  )
}
