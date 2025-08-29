import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Acelere sua jornada como desenvolvedor",
  description:
    "A melhor forma de aprender é praticando. Construa sua experiência com a gente.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
