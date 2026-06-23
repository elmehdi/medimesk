import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { createSeoMetadata } from "@/lib/seo";

const copy = {
  fr: {
    title: "Conditions générales d'utilisation",
    description: "Consultez les conditions générales d'utilisation de MediMesk.",
  },
  en: {
    title: "Terms of Use",
    description: "Read the MediMesk terms of use.",
  },
} as const;

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const page = copy[params.locale];

  return createSeoMetadata({
    locale: params.locale,
    path: "/cgu",
    title: `${page.title} — MediMesk`,
    description: page.description,
    noIndex: true,
  });
}

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const page = copy[params.locale];

  return (
    <div className="flex items-center justify-center py-32 px-gutter">
      <h1 className="text-primary-teal text-center">{page.title}</h1>
    </div>
  );
}
