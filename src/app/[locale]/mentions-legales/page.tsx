import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { createSeoMetadata } from "@/lib/seo";

const copy = {
  fr: {
    title: "Mentions légales",
    description: "Consultez les mentions légales de MediMesk.",
  },
  en: {
    title: "Legal Notice",
    description: "Read the MediMesk legal notice.",
  },
} as const;

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const page = copy[params.locale];

  return createSeoMetadata({
    locale: params.locale,
    path: "/mentions-legales",
    title: `${page.title} — MediMesk`,
    description: page.description,
    noIndex: true,
  });
}

export default function LegalNoticePage({ params }: { params: { locale: Locale } }) {
  const page = copy[params.locale];

  return (
    <div className="flex items-center justify-center py-32 px-gutter">
      <h1 className="text-primary-teal text-center">{page.title}</h1>
    </div>
  );
}
