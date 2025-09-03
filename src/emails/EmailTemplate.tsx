import { Html, Body, Tailwind, Text } from "@react-email/components";

export default function EmailTemplateEmail() {
  return (
    <Html
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      <Tailwind>
        <Body
          className="font-sans"
          style={{
            backgroundColor: '#0B150C',
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          {/* --- Conteúdo centralizado --- */}
          <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '8px',
              }}
            >
              Atenciosamente,
            </Text>
            <Text
              style={{
                color: '#56E873',
                fontSize: '16px',
                fontWeight: 'bold',
              }}
            >
              Equipe LFS – Laboratório Fábrica de Software
            </Text>
          </div>

          {/* --- SVG curva preenchendo toda a largura --- */}
          <div
            style={{
              width: '100%',
              lineHeight: 0,
              margin: 0,
              padding: 0,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 99"
              preserveAspectRatio="none"
              style={{
                width: '100%',
                height: '80px',
                display: 'block',
              }}
            >
              <path
                d="M0 -6.10352e-05C52.5328 29.3329 598.626 99.5982 800 58.1892V76.8767V98.8611C487.385 78.1243 312.615 67.3138 0 98.8611V-6.10352e-05Z"
                fill="#56E873"
              />
            </svg>
          </div>

          {/* --- Footer abaixo da curva --- */}
          <div style={{ padding: '20px 20px 40px', textAlign: 'center' }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: '12px',
                lineHeight: '1.4',
              }}
            >
              <strong>Copyright ©2025 LFS inc.</strong>{' '}
              <span style={{ color: '#56E873' }}>
                Todos direitos reservados Laboratório Fábrica de Software
              </span>
            </Text>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}
