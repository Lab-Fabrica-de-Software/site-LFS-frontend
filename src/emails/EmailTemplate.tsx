import { ContactInfoEmailProps } from "../types/email";
import {
  Html,
  Head,
  Body,
  Tailwind,
  Container,
  Section,
  Text,
} from "@react-email/components";

export default function EmailTemplateEmail({ data }: ContactInfoEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="font-sans m-0 bg-[#0B150C]">


         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 99"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "80px",
              display: "block",
              transform: "rotate(180deg)",
            }}
          >
            <path
              d="M0 -6.10352e-05C52.5328 29.3329 598.626 99.5982 800 58.1892V76.8767V98.8611C487.385 78.1243 312.615 67.3138 0 98.8611V-6.10352e-05Z"
              fill="#56E873"
            />
          </svg>
          {/* conteúdo fica aqui ok? */}
          <Text className="text-left p-4 text-3xl">
            <strong className="text-[#FFFFFF]">Olá, </strong>
            <strong className="text-[#56E873]">{data?.name}</strong>
            </Text>



            <Text className="text-left p-4 ">
            <span className="text-[#FFFFFF]">Atenciosamente,</span>
            <br />
            <strong className="text-[#56E873]">Equipe LFS – Laboratório Fábrica de Software</strong>

            </Text>
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 99"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "80px", display: "block" }}
          >
            <path
              d="M0 -6.10352e-05C52.5328 29.3329 598.626 99.5982 800 58.1892V76.8767V98.8611C487.385 78.1243 312.615 67.3138 0 98.8611V-6.10352e-05Z"
              fill="#56E873"
            />
          </svg>

          <Section>
            <Container>
              <Text className="text-center">
                <strong className="text-[#FFFFFF]">Copyright ©2025 LFS inc.</strong>{" "}
                <span className="text-[#56E873]">
                  Todos direitos reservados Laboratório Fábrica de Software
                </span>
              </Text>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
}
