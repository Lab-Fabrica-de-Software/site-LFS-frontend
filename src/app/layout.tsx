import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/footer";
import { Roboto } from "next/font/google";
import { QueryProvider } from "@/lib/queryProvider";
import { Navbar } from "@/components/common/navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://labfabricadesoftware.com"),
  title:
    "Acelere sua jornada como desenvolvedor | Laboratório Fábrica de Software",
  description:
    "A melhor forma de aprender é praticando. E aqui no Laboratório Fábrica de Software, você poderá construir sua experiência conosco e se preparar para o mercado de trabalho. #somosfabrica",
  keywords: [
    "Fatec Itu",
    "Fatec Sorocaba",
    "Estágio Fatec Itu",
    "Itu Estágio",
    "Senai Sorocaba",
    "Sorocaba",
    "Itu",
    "Estágios",
    "Desenvolvimento",
    "Programação",
  ],
  robots: "index, follow",
  verification: {
    google: "google69a8f8419b06cd31.html",
  },
  openGraph: {
    title:
      "Acelere sua jornada como desenvolvedor | Laboratório Fábrica de Software",
    description:
      "A melhor forma de aprender é praticando. E aqui no Laboratório Fábrica de Software, você poderá construir sua experiência conosco e se preparar para o mercado de trabalho. #somosfabrica",
    url: "https://labfabricadesoftware.com",
    siteName: "Laboratório Fábrica de Software",
    images: [
      {
        url: "/logoLFS.png",
        width: 1200,
        height: 630,
        alt: "Laboratório Fábrica de Software",
      },
    ],
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} antialiased`}>
      <body>
        <Navbar />
        <QueryProvider>
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
