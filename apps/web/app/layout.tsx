import type { Metadata, Viewport } from "next";
import {
  Inter_Tight,
  JetBrains_Mono,
  Anton,
  Cormorant_Garamond,
} from "next/font/google";
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ntsagui.com";
const TITLE = "Ntsagui Digitale — Du logiciel qui transforme l'activité";
const DESCRIPTION =
  "Studio produit indépendant basé à Paris. 6 ans à concevoir, livrer et opérer des plateformes SaaS pour des équipes qui n'ont pas le droit à l'erreur. L'IA dans la boîte à outils — quand elle accélère vraiment.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Ntsagui Digitale",
  },
  description: DESCRIPTION,
  applicationName: "Ntsagui Digitale",
  keywords: [
    "studio produit",
    "SaaS",
    "IA appliquée",
    "transformation digitale",
    "plateformes métier",
    "RAG",
    "copilote",
    "Paris",
    "Next.js",
    "Convex",
  ],
  authors: [{ name: "Ntsagui Digitale" }],
  creator: "Ntsagui Digitale",
  publisher: "Ntsagui Digitale",
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Ntsagui Digitale",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ntsagui Digitale — Studio produit Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0A" },
  ],
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ntsagui Digitale",
  alternateName: "Ntsagui",
  url: SITE_URL,
  email: "admin@ntsagui.com",
  telephone: "+33661002616",
  description:
    "Studio produit indépendant basé à Paris. Plateformes SaaS, transformation digitale et IA appliquée.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "50 Avenue des Champs Élysées",
    postalCode: "75008",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  areaServed: "FR",
  knowsAbout: [
    "SaaS platforms",
    "Applied AI",
    "Digital transformation",
    "RAG",
    "Business copilots",
  ],
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
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
