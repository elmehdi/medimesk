import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/hooks/useReveal";

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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale={params.locale} t={t} />
      <main className="flex-1">{children}</main>
      <Footer locale={params.locale} t={t} />
      <RevealObserver />
    </div>
  );
}
