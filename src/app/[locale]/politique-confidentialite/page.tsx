import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { createSeoMetadata } from "@/lib/seo";

const copy = {
  fr: {
    title: "Politique de confidentialité",
    description: "Consultez la politique de confidentialité de MediMesk.",
  },
  en: {
    title: "Privacy Policy",
    description: "Read the MediMesk privacy policy.",
  },
} as const;

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const page = copy[params.locale];

  return createSeoMetadata({
    locale: params.locale,
    path: "/politique-confidentialite",
    title: `${page.title} — MediMesk`,
    description: page.description,
    noIndex: true,
  });
}

export default function PrivacyPolicyPage({ params }: { params: { locale: Locale } }) {
  const page = copy[params.locale];

  return (
    <div className="flex items-center justify-center py-32 px-gutter">
      <h1 className="text-primary-teal text-center">{page.title}</h1>
    </div>
  );
}
