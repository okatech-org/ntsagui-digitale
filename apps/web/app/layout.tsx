import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, Anton, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Okatech — Du logiciel qui transforme l'activité",
  description:
    "Studio produit indépendant basé à Paris. 6 ans à concevoir, livrer et opérer des plateformes SaaS pour des équipes qui n'ont pas le droit à l'erreur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${anton.variable} ${cormorant.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
