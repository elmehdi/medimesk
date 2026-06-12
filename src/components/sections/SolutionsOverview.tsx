import { SectionWrapper } from "@/components/ui";
import ProductCard from "@/components/ui/ProductCard";
import { productCardMeta } from "@/lib/products";
import type { Translations } from "@/i18n/useTranslations";

export default function SolutionsOverview({ locale, t }: { locale: string; t: Translations }) {
  return (
    <SectionWrapper alternate id="produits">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-dark-text">{t.home.solutions.title}</h2>
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
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
