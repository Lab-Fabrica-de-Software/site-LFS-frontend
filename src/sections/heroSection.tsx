import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative xl:min-h-[92dvh lg:min-h-[95dvh]] md:min-h-[100dvh] min-h-[70dvh] flex justify-center items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/hero-background.png')] bg-cover bg-center filter saturate-0 brightness-70"
      />

      <div className="container mx-auto pt-30 pb-20 md:p-0 relative z-10">
        <div className="max-w-5xl mx-auto md:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-11 md:leading-none">
            O primeiro passo para novos{" "}
            <span className="block md:mt-2">desenvolvedores se tornarem</span>
            <span className="text-primary block md:mt-2">profissionais</span>
          </h1>

          <p className="opacity-70 text-md md:text-xl mt-4 md:mt-8 max-w-2xl mx-auto leading-7 md:leading-6">
            Participe de projetos e acelere seu desenvolvimento.
            <span className="block mt-1">
              Construa sua experiência conosco!
            </span>
          </p>

          <div className="flex md:justify-center mt-8">
            <Button
              aria-label="Estou interessado"
              className="h-11 md:h-12 inline-flex gap-3 text-lg md:text-xl group"
            >
              Estou interessado
              <ArrowDown
                size={20}
                className="transition-all group-hover:-translate-y-[1.4px]"
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:block bottom-0 w-full overflow-hidden leading-none">
        <svg
          role="img"
          aria-hidden="true"
          className="w-full h-24 md:h-32 lg:h-40 text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,192L48,181.3C96,171,192,149,288,144C384,139,480,149,576,176C672,203,768,245,864,256C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="absolute hidden sm:block bottom-0 z-10 right-10 w-full h-32 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
}
