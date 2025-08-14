import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="min-h-[85dvh] flex justify-center relative bg-[url('/hero-background.png')] bg-cover bg-center">
      <div className="container flex flex-col items-center md:text-center py-24 z-10 relative">
        <h1 className="text-4xl md:text-6xl text-white font-bold">
          O primeiro passo para novos{" "}
          <span className="block my-2">desenvolvedores se tornarem </span>
          <span className="text-primary block">profissionais</span>
        </h1>
        <p className="text-foreground/80 roboto font-medium md:text-lg mt-5">
          Participe de projetos e acelere seu desenvolvimento.
          <span className="block">Construa sua experiência conosco!</span>
        </p>
        <Button className="mt-5 text-lg px-6" aria-label="Estou interessado">
          Estou interessado
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-100 bg-gradient-to-t from-[#A5DAAF]/20 via-transparent to-transparent backdrop-blur-3xl z-0"></div>
    </div>
  );
}
