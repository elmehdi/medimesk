import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediMesk — Solutions pour pharmacies",
  description:
    "MediMesk fournit des solutions innovantes d'automatisation et d'équipement médical pour les pharmacies au Maroc.",
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
    url: "https://medimesk.ma",
    logo: "https://medimesk.ma/images/logo.webp",
    description:
      "Solutions innovantes d'automatisation et d'équipement médical pour les pharmacies au Maroc.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Résidence Meskellil Imm. 3 N°1, Av. Assabir, Hay Riad",
      addressLocality: "Rabat",
      addressCountry: "MA",
    },
    telephone: "+212526272812",
    email: "contact@medimesk.ma",
    sameAs: [
      "https://www.linkedin.com/company/medimesk/",
      "https://www.instagram.com/medimesk.ma",
      "https://www.facebook.com/share/17fRgssopR/"
    ],
  };

  return (
    <html lang="fr">
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
