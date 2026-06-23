import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medimesk.com"),
  title: {
    default: "MediMesk — Équipement Pharmaceutique & Automatisation au Maroc",
    template: "%s | MediMesk",
  },
  description:
    "MediMesk est le leader de la robotique, du matériel et de l'automatisation de pharmacie au Maroc. Nous proposons des robots de dispensation, des ensacheuses de PDA/UDD et des équipements pour produits pharmaceutiques.",
  keywords: [
    "pharmacie",
    "produit pharmaceutique Maroc",
    "matériel pharmaceutique Maroc",
    "équipement pharmaceutique Maroc",
    "automatisation pharmacie",
    "robotique pharmaceutique",
    "production pharmaceutique",
    "PDA",
    "UDD",
    "préparation des doses à administrer",
    "Maroc",
    "Rabat",
    "Casablanca",
    "Studex",
    "RDC 45",
    "Dual Blist",
  ],
  alternates: {
    canonical: "./",
    languages: {
      fr: "/fr",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://medimesk.com",
    siteName: "MediMesk",
    images: [
      {
        url: "/images/pda-robot.webp",
        width: 1200,
        height: 630,
        alt: "MediMesk — Équipement et Automatisation de Pharmacie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediMesk — Équipement Pharmaceutique & Automatisation de Pharmacie au Maroc",
    description: "Solutions d'automatisation, matériel et équipement pour produits pharmaceutiques au Maroc.",
    images: ["/images/pda-robot.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MediMesk",
    url: "https://medimesk.com",
    logo: "https://medimesk.com/images/logo.webp",
    description:
      "Solutions innovantes d'automatisation, de matériel et d'équipement pour produits pharmaceutiques au Maroc.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Résidence Meskellil Imm. 3 N°1, Av. Assabir, Hay Riad",
      addressLocality: "Rabat",
      addressCountry: "MA",
    },
    telephone: "+212526272812",
    email: "contact@medimesk.ma",
    areaServed: "MA",
    foundingDate: "2023",
    knowsAbout: [
      "Preparation of Doses for Administration",
      "Unit Dose Dispensing",
      "Pharmacy Automation",
      "Medical Equipment",
      "Ear Piercing Systems"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        "telephone": "+212526272812",
        "contactType": "sales",
        "areaServed": "MA",
        "availableLanguage": ["French", "Arabic", "English"]
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/medimesk/",
      "https://www.instagram.com/medimesk.ma",
      "https://www.facebook.com/share/17fRgssopR/"
    ],
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
      </body>
    </html>
  );
}
