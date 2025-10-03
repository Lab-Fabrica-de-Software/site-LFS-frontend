import LogoMarquee from "@/components/common/logoMarquee";
import { partners } from "@/constants/logoMarquee";
import ProjectsContainer from "@/containers/projectsContainer";
import { HydrateProjects } from "@/lib/hydrateProjects";
import { AboutSection } from "@/sections/aboutSection";
import { HeroSection } from "@/sections/heroSection";
import { HiringSection } from "@/sections/hiringSection";

export default function Page() {
  return (
    <main className="space-y-4">
      <HeroSection />
      <LogoMarquee items={partners} />
      <AboutSection />
      <HydrateProjects perPage={3} page={1}>
        <ProjectsContainer perPage={3} page={1} />
      </HydrateProjects>
      <HiringSection />
    </main>
  );
}
