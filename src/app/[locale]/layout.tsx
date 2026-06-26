import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/hooks/useReveal";
import "./../globals.css";
import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, localizedSeoKeywords, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MediMesk — Solutions pour pharmacies",
  description:
    "MediMesk fournit des solutions innovantes d'automatisation et d'équipement médical pour les pharmacies au Maroc.",
  keywords: localizedSeoKeywords("fr"),
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "MediMesk — Solutions pour pharmacies",
    description:
      "MediMesk fournit des solutions innovantes d'automatisation et d'équipement médical pour les pharmacies au Maroc.",
    url: "/fr",
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediMesk — Solutions pour pharmacies",
    description:
      "MediMesk fournit des solutions innovantes d'automatisation et d'équipement médical pour les pharmacies au Maroc.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const t = getTranslations(params.locale);
  const htmlLang = params.locale === "fr" ? "fr-MA" : "en";
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MediMesk",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
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
      "https://www.facebook.com/share/17fRgssopR/",
    ],
  };

  return (
    <html lang={htmlLang}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar locale={params.locale} t={t} />
          <main className="flex-1">{children}</main>
          <Footer locale={params.locale} t={t} />
          <RevealObserver />
        </div>
      </body>
    </html>
  );
}
