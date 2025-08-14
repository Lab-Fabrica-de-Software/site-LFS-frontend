import LogoMarquee from "@/components/common/logoMarquee";
import { partners } from "@/constants/logoMarquee";
import { HeroSection } from "@/sections/heroSection";
import { HiringSection } from "@/sections/hiringSection";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <LogoMarquee items={partners} />
      <HiringSection />
    </>
  );
}
