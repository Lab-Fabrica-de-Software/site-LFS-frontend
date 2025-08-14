import ProjectCard from '@/components/common/projectCard';
import { PortfolioProject } from '@/types/portfolioProject';
import React from 'react';

interface ProjectsSection {
    projects: PortfolioProject[];
}

export default function ProjectsSection({ projects }: ProjectsSection) {
    return (
        <div>
            <div className=''>
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </div>
        
    );
}

