import { fetchPortfolioProjects } from '@/lib/github/fetchPortfolioProjects'
import ProjectsSection from '@/sections/projectsSection';
import React from 'react'

export async function ProjectContainer() {
    const { data: projects, error } = await fetchPortfolioProjects();

    return (
    <ProjectsSection projects={projects} error={error} /> 
  )
}
