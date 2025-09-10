
import { ContactFormInputsProps } from "@/sections/contactFormSection";
import { Html, Body, Text, Tailwind } from "@react-email/components";
import EmailTemplateEmail from "./EmailTemplate";

interface NewCandidatureEmailProps {
  data: ContactFormInputsProps;
}

export default function NewCandidatureEmail({ data }: NewCandidatureEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Body>
          <EmailTemplateEmail data={data}>
            <span>Nova inscrição recebida através do site do </span>
            <span className="text-[#56E873]">
              {" "}
              Laborátorio Fábrica de Software (LFS)
            </span>
            <span>. Segue abaixo os dados preenchidos pelo candidato:</span>
            <Text className="font-semibold text-[#56E873]">
              Nome: {data?.name}
            </Text>
            <Text className="font-semibold text-[#56E873]">
              Email: {data?.email}
            </Text>
            <Text className="font-semibold text-[#56E873]">
              Instituição: {data?.institution}
            </Text>
            <Text className="font-semibold text-[#56E873]">
              Área de interesse: {data?.interestArea}
            </Text>
            <Text className="font-semibold text-[#56E873]">
              Sobre: {data?.about}
            </Text>

            <Text className="mt-6">
              Por favor, acompanhem para darmos sequência ao procedimento nos
              próximos dias.
            </Text>
          </EmailTemplateEmail>
        </Body>
      </Tailwind>
    </Html>
  );
}
