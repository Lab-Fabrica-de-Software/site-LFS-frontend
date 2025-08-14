import { ProjectModal } from "@/components/common/projectModal";
import { fetchPortfolioProjects } from "@/lib/github/fetchPortfolioProjects";
import { PortfolioProject } from "@/types/portfolioProject";

export default async function Page() {
  const projects: PortfolioProject[] = await fetchPortfolioProjects();
  return (
    <div>
      <p className="text-3xl">Hello World</p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectModal key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
