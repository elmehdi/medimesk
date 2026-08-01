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
    <main className="bg-[#f3f7f6] px-5 py-10 sm:px-gutter md:flex md:min-h-[28rem] md:items-center md:justify-center md:bg-white md:py-32">
      <div className="overflow-hidden rounded-[1.6rem] border border-light-teal bg-white shadow-sm md:border-0 md:shadow-none">
        <div className="h-2 bg-primary-teal md:hidden" />
        <div className="p-6 text-left md:p-0 md:text-center">
          <h1 className="font-sans text-[2rem] font-bold leading-tight tracking-[-0.04em] text-primary-teal md:font-playfair md:text-h1">{page.title}</h1>
          <p className="mt-4 text-sm leading-6 text-dark-text/60 md:hidden">{page.description}</p>
        </div>
      </div>
    </main>
  );
}
