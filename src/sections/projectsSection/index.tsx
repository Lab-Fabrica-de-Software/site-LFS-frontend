import ProjectCard from '@/components/common/projectCard';
import { Button } from '@/components/ui/button';
import { PortfolioProject } from '@/types/portfolioProject';
import React from 'react';

interface ProjectsSectionProps {
    projects: PortfolioProject[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    return (
        <div>
            <div className='w-full flex flex-row justify-between'>
                <span className=''>Nossos projetos</span>
                <Button className='mb-3'>Ver Todos</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}
