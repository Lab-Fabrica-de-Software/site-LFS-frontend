import LogoMarquee from "@/components/common/logoMarquee";
import { partners } from "@/constants/logoMarquee";
import { ProjectContainer } from "@/containers/projectContainer";
import { AboutSection } from "@/sections/aboutSection";
import { HeroSection } from "@/sections/heroSection";
import { HiringSection } from "@/sections/hiringSection";

export default function Page() {
  return (
    <main className="space-y-4">
      <HeroSection />
      <LogoMarquee items={partners} />
      <AboutSection />
      <ProjectContainer />
      <HiringSection />
    </main>
  );
}
