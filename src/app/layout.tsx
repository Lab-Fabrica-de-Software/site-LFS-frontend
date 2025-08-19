import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Acelere sua jornada como desenvolvedor",
  description: "A melhor forma de aprender é praticando. Construa sua experiência com a gente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
