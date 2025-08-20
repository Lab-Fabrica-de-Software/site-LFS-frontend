import Image from "next/image";

export function AboutSection() {
  return (
    <div className="flex container items-center pt-20 flex-col space-y-4">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold">
          <span className="text-primary">Quem</span> somos nós?
        </h2>
        <p className="text-foreground/70">
          Um pouco sobre quem somos nós, integrantes do Laboratório Fábrica de
          Software e o que é essa iniciativa.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center py-10 justify-between  gap-8">
        <div className="flex order-2 flex-col space-y-4">
          <h2 className="text-4xl md:text-5xl md:mb-8 font-semibold">
            Fabricando seu <span className="text-primary">Futuro!</span>
          </h2>
          <p className="text-md lg:text-lg">
            O Laboratório Fábrica de Software é onde alunos de diferentes
            instituições vivem a prática do desenvolvimento.
          </p>
          <p className="text-md lg:text-lg">
            Mais do que aprender, aqui se ganha experiência real com projetos
            que impactam e preparam para o mercado.
          </p>
          <p className="text-md lg:text-lg">
            Nascido da visão do professor Glauco Todesco, o laboratório começou
            atendendo demandas internas da FATEC e hoje é um espaço
            de aprendizado, colaboração e inovação.
          </p>
        </div>
        <Image
          src="/about.png"
          alt="hiring-photo"
          width={0}
          height={0}
          sizes="100vw"
          className="lg:h-140 w-full order-1"
        />
      </div>
    </div>
  );
}
