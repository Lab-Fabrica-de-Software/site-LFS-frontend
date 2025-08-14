import Image from "next/image";

export function HiringSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between container gap-8">
      <div className="flex flex-col space-y-2.5">
        <h2 className="text-5xl font-semibold">Estamos <span className="text-primary">Recrutando</span></h2>
        <p className="text-md lg:text-lg">
          Aproveite essa oportunidade única para entrar no Laboratório Fábrica
          de Software para ter experiências únicas que irão te preparar ao
          mercado de trabalho! Fabrique projetos, aprenda sobre trabalho
          coletivo, lideranças e ache sua área com mais facilidade!
        </p>
        <p className="text-md lg:text-lg">
          Descubra novas habilidades na prática e desenvolva soluções reais
          junto com seus colegas. Mais do que aprender, aqui você trabalha firme
          desde o primeiro dia!
        </p>
      </div>
      <Image
        src="/hiring.svg"
        alt="hiring-photo"
        width={0}
        height={0}
        sizes="100vw"
        className="lg:h-110 w-full"
      />
    </div>
  );
}
