import { PortfolioProject } from "@/types/portfolioProject";
import Tag from "@/components/ui/tag";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MemberButton from "../memberButton";

interface ProjectCardProps extends React.ComponentProps<typeof Card> {
  project: PortfolioProject;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const characterLimit = 100;
  return (
    <Card
      onClick={onClick}
      image={project.images?.[0] || "/LogoLFSDark.png"}
      imageContent={
        <Tag
          aria-label={`Status do projeto: ${project.status}`}
          className="absolute top-2 right-2 py-1 px-4 shadow"
          type={
            project.status === "not-started"
              ? "disabled"
              : project.status === "in-progress"
              ? "inProgress"
              : undefined
          }
        >
          <span>
            {project.status === "completed"
              ? "Concluído"
              : project.status === "in-progress"
              ? "Em andamento"
              : "Não iniciado"}
          </span>
        </Tag>
      }
    >
      <CardHeader className="mt-2">
        <CardTitle className="text-primary">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="mt-0.5">
        <CardDescription className="opacity-80">
          {project.description
            ? project.description.length > characterLimit
              ? project.description.slice(0, characterLimit) + "..."
              : project.description
            : "Sem descrição disponível."}
        </CardDescription>

        {project.collaborators && project.collaborators.length > 0 && (
          <div className="flex flex-col gap-2 mt-3 mb-2">
            <span className="font-medium text-sm">
              Participantes do projeto
            </span>

            <div className="flex flex-row -space-x-1.5">
              {project.collaborators.map((member, index) => (
                <MemberButton member={member} key={index} />
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
