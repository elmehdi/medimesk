import Link from "next/link";
import { SectionWrapper, ProductCard, Button } from "@/components/ui";
import { productCardMeta } from "@/lib/products";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/contact-intents";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return createSeoMetadata({
    locale: params.locale,
    path: "/solutions",
    title: t.products_page.meta.title,
    description: t.products_page.meta.description,
    image: "/images/pda-robot.webp",
    keywords: [
      "PDA Maroc",
      "PDA Morocco",
      "Piercing Maroc",
      "Piercing Morocco",
      "Dual Blist Maroc",
      "Dual Blist Morocco",
      "RDC 45 Maroc",
      "RDC 45 Morocco",
      "Studex Maroc",
      "Studex Morocco",
      "PDA pharmacie Rabat",
      "PDA pharmacie Casablanca",
      "pharmacy automation Africa",
      "automatisation pharmacie Afrique",
    ],
  });
}

export default function ProductsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);

  return (
    <>
      {/* ─── Breadcrumb ─────────────────────────────── */}
      <div className="bg-section-bg border-b border-light-teal">
        <nav className="mx-auto max-w-container px-gutter py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-dark-text/50">
            <li>
              <Link href={`/${locale}`} className="hover:text-primary-teal transition-colors">
                {t.common.breadcrumb_home}
              </Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li className="text-dark-text font-medium">{t.common.breadcrumb_solutions}</li>
          </ol>
        </nav>
      </div>

      {/* ─── Products grid ──────────────────────────── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-dark-text">{t.home.solutions.title}</h1>
          <p className="mt-4 text-dark-text/70 leading-relaxed">
            {t.home.solutions.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.solutions.cards.map((card, i) => (
            <ProductCard
              key={productCardMeta[i].href}
              imageSrc={productCardMeta[i].imageSrc}
              imageAlt={card.image_alt}
              title={card.title}
              benefits={card.benefits as [string, string, string]}
              href={`/${locale}${productCardMeta[i].href}`}
              imageFit={productCardMeta[i].imageFit}
              linkLabel={t.cta.product_details}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* ─── CTA Banner ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-teal">
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-container px-gutter py-16 md:py-20 text-center">
          <h2 className="text-white">{t.home.cta_banner.title}</h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-lg mx-auto">
            {t.home.cta_banner.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={contactHref(locale, "free-demo")}>{t.cta.demo_free}</Button>
            <Button
              variant="secondary"
              href={contactHref(locale, "quote")}
              className="border-white text-white hover:bg-white hover:text-primary-teal"
            >
              {t.cta.quote}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
