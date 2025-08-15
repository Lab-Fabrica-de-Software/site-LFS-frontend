import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="lg:min-h-[90dvh] flex justify-center items-center bg-[url('/hero-background.png')] bg-cover bg-center overflow-hidden">
      <div className="container mx-auto px-4 pt-30 pb-32 relative z-10">
        <div className="max-w-4xl mx-auto md:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white  leading-11 md:leading-none">
            O primeiro passo para novos{" "}
            <span className="block md:mt-2">desenvolvedores se tornarem</span>
            <span className="text-primary block md:mt-2">profissionais</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-4 md:mt-8 max-w-2xl mx-auto leading-7 md:leading-6">
            Participe de projetos e acelere seu desenvolvimento.
            <span className="block mt-1">
              Construa sua experiência conosco!
            </span>
          </p>

          <div className="flex md:justify-center mt-4">
            <Button aria-label="Estou interessado">Estou interessado</Button>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:block top-115 bottom-0 left-0 right-0 z-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-30"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="#22c55e"
            className="opacity-90"
          />
        </svg>

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full hidden md:block h-24 md:h-32 transform rotate-180"
        >
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="#22c55e"
            className="opacity-90"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 z-10 right-10 w-full h-32 bg-white/10 rounded-full blur-3xl"></div>
    </div>
  );
}
