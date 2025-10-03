import ProjectsContainer from "@/containers/projectsContainer";
import { HydrateProjects } from "@/lib/hydrateProjects";

export default function Page() {
  return (
    <main className="pt-8">
      <HydrateProjects perPage={9} page={1}>
        <ProjectsContainer perPage={9} showViewAllButton={false} />
      </HydrateProjects>
    </main>
  );
}
