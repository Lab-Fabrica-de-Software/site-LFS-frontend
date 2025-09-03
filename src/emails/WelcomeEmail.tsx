// /emails/WelcomeEmail.tsx
import { ContactFormInputsProps } from "@/sections/contactFormSection";
import { Html, Body, Heading, Text, Tailwind } from "@react-email/components";

interface WelcomeEmailProps {
  data: WelcomeEmailProps
}

export default function WelcomeEmail({ data }: WelcomeEmailProps) {
  return (
    <Html>
      <Tailwind>
        <Body className="font-sans py-2 px-4">
          <Heading>
            
          </Heading>
          <Text>É com grande satisfação que damos as boas-vindas ao <span className="text-[#56E873]">Laborátorio Fábrica de Software!</span> Estamos muito felizes por contar com você.</Text>
          <Text className="font-medium">Seu processo de onboarding já está agendado:</Text>
          <div>
                <div className="flex flex-row gap-1">
                    <Text className="m-0 font-medium text-[#56E873]">Data do onboarding: </Text>
                    <Text className="m-0 font-normal">{data?.onboardingDate};</Text>
                </div>
                <div className="flex flex-row gap-1">
                    <Text className="m-0 font-medium text-[#56E873]">Horário: </Text>
                    <Text className="m-0 font-normal">{data?.onboardingTime};</Text>
                </div>
                <div className="flex flex-row gap-1">
                    <Text className="m-0 font-medium text-[#56E873]">Local: </Text>
                    <Text className="m-0 font-normal">{data?.onboardingPlace}.</Text>
                </div>
            </div>
        <div className="mt-3">
          <Text className="m-0">Durante o onboarding, apresentaremos nossa cultura, valores, ferramentas de trabalho e as pessoas com quem você estará colaborando.</Text>
          <Text className="m-0 text-[#56E873] ">Se tiver alguma dúvida ou necessidade específica antes do dia marcado, basta responder a este e-mail.</Text>
        </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
