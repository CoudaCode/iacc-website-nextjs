import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jeko = localFont({
  src: [
    {
      path: "../../public/fonts/jeko/JekoDEMO-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/jeko/JekoDEMO-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/jeko/JekoDEMO-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/jeko/JekoDEMO-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/jeko/JekoDEMO-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/jeko/JekoDEMO-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "IACC - Ivoire Assurance de Conseil et Courtage",
    template: "%s | IACC",
  },
  description:
    "IACC, votre courtier en assurance de confiance en Côte d'Ivoire. Assurance auto, habitation, santé, vie et professionnelle. Conseil personnalisé et accompagnement complet.",
  keywords: [
    "assurance",
    "courtier",
    "Côte d'Ivoire",
    "IACC",
    "auto",
    "habitation",
    "santé",
    "vie",
    "professionnelle",
  ],
  authors: [{ name: "IACC" }],
  openGraph: {
    type: "website",
    locale: "fr_CI",
    url: "https://iacc.ci",
    siteName: "IACC - Ivoire Assurance de Conseil et Courtage",
    title: "IACC - Votre Courtier en Assurance",
    description:
      "Courtier en assurance agréé en Côte d'Ivoire. Solutions d'assurance personnalisées pour particuliers et professionnels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${jeko.className} antialiased overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
