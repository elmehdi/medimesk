import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.contact.meta.title, description: t.contact.meta.description };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
