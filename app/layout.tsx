import type { Metadata } from "next";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./contexts/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frozy — Feito em Moçambique",
  description:
    "Frozy — a marca de refrigerantes moçambicana. Mais de 15 anos de qualidade certificada, fabricada em Moçambique.",
  keywords: "Frozy,refrigerantes,Moçambique,soft drinks,Mozambique",
  openGraph: {
    title: "Frozy — Feito em Moçambique",
    description:
      "Frozy — a marca de refrigerantes moçambicana. Mais de 15 anos de qualidade certificada, fabricada em Moçambique.",
    siteName: "Frozy",
    locale: "pt_MZ",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Frozy — Feito em Moçambique",
    description:
      "Frozy — a marca de refrigerantes moçambicana. Mais de 15 anos de qualidade certificada, fabricada em Moçambique.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
