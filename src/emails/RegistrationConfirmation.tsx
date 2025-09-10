import { ContactFormInputsProps } from "@/sections/contactFormSection";
import { Html, Body, Heading, Text, Tailwind } from "@react-email/components";

interface ContactConfirmationProps {
  data: ContactFormInputsProps
}

export default function ContactConfirmationEmail({ data }: ContactConfirmationProps) {
  return (
    <Html>
      <Tailwind>
        <Body className="font-sans py-2 px-4">
          <Heading>
            
          </Heading>
          <Text className="text-justify">Agradecemos por se candidatar para participar do <span className="text-[#56e873]">Laborátorio Fábrica de Software (LFS)</span>. Ficamos muito felizes com seu interesse em fazer parte desta iniciativa!</Text>
          <Text className="text-justify">Recebemos sua inscrição com sucesso e em breve entraremos em contato com mais informações sobre as próximas etapas do processo.</Text>
          <Text className="text-justify">Enquanto isso, se tiver qualquer dúvida, fique à vontade para nos escrever.</Text>
          <Text className="text-justify">Até breve!</Text>
        </Body>
      </Tailwind>
    </Html>
  );
}
