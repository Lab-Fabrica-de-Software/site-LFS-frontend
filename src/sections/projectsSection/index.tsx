import ProjectCard from '@/components/common/projectCard';
import { ProjectModal } from '@/components/common/projectModal';
import { Button } from '@/components/ui/button';
import { PortfolioProject } from '@/types/portfolioProject';
import Link from 'next/link';
import React from 'react';

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
        <div>
            <div className="w-full flex flex-row justify-between items-center mb-4">
                <span className="text-lg font-semibold">Veja alguns dos nossos projetos</span>

                {showViewAllButton && projects.length > limit && (
                    <div className="hidden md:block">
                        <Link href="/projects" className="button">Ver mais</Link>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {displayedProjects.map((project) => (
                    <ProjectModal project={project} key={project.id} />
                ))}
            </div>

            {showViewAllButton && projects.length > limit && (
                <div className="flex justify-center mt-4 md:hidden">
                    <Link className="button flex justify-center mt-4 md:hidden w-full" href="/projects">Ver mais</Link>
                </div>
            )}
        </div>
    );
}
