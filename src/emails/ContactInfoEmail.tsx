// /emails/ContactEmail.tsx
import { ContactFormInputsProps } from "@/sections/contactFormSection";
import { Html, Body, Heading, Text, Tailwind } from "@react-email/components";

interface ContactInfoEmailProps {
  data: ContactFormInputsProps
}

export default function ContactInfoEmail({ data }: ContactInfoEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Body className="font-sans py-2 px-4">
          <Heading>
            Novo contato recebido 🚀
          </Heading>
          <Text className="font-bold">Nome: {data?.name}</Text>
          <Text className="font-bold">Email: {data?.email}</Text>
          <Text className="font-bold">Instituição: {data?.institution}</Text>
          <Text className="font-bold">Área de interesse: {data?.interestArea}</Text>
          <Text className="font-bold">Sobre: {data?.about}</Text>
        </Body>
      </Tailwind>
    </Html>
  );
}
