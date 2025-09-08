import { Html, Body, Text, Tailwind } from "@react-email/components";



export default function RefusingEmail() {
  return (
    <Html>
      <Tailwind>
        <Body className="font-sans py-2 px-4">
          <Text className="text-xs">Agradecemos muito por sua inscrição e pelo interesse em participar do <span className="text-[#56E873]">Laborátoria Fábrica de Software (LFS).</span></Text>
          <Text className="text-xs">Recebemos diversas candidaturas incríveis e, após uma análise criteriosa, infelizmente, neste momento, você não foi selecionado(a) para as próximas etapas do processo.</Text>
          <Text className="text-xs"><span className="text-[#56E873]">Essa decisão não diminui o valor do seu perfil nem o potencial que você demonstrou.</span> Reforçamos nosso agradecimento por ter dedicado seu tempo para se inscrever e compartilhar sua história conosco.</Text>
          <Text className="text-xs -mt-4">Esperamos ter novas oportunidades no futuro, e seria um prazer contar com sua participação novamente.</Text>
          <Text className="text-xs">Desejamos sucesso em seus próximos passos!</Text>
        </Body>
      </Tailwind>
    </Html>
  );
}
