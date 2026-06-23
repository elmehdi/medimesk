import { Button } from "@/components/ui";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";

export default function CTABanner({ locale, t }: { locale: string; t: Translations }) {
  const s = t.home.cta_banner;
  return (
    <section className="relative overflow-hidden bg-dark-text">
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary-teal/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-primary-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-container px-gutter py-16 md:py-20 text-center">
        <h2 className="text-white max-w-2xl mx-auto">{s.title}</h2>
        <p className="mt-5 text-white/60 leading-relaxed max-w-lg mx-auto">{s.subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={contactHref(locale, "free-demo")}>{t.cta.demo_free}</Button>
          <Button
            variant="secondary"
            href={contactHref(locale, "contact")}
            className="border-white/30 text-white hover:bg-white hover:text-dark-text"
          >
            {t.cta.contact_us}
          </Button>
        </div>
      </div>
    </section>
  );
}
