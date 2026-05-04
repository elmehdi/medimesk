import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.support.meta.title, description: t.support.meta.description };
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
