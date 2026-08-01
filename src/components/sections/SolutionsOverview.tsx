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

      <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-8 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
        {t.home.solutions.cards.map((card, i) => (
          <div key={productCardMeta[i].href} className="w-[84vw] max-w-[21rem] shrink-0 snap-center sm:w-auto sm:max-w-none">
            <ProductCard
              imageSrc={productCardMeta[i].imageSrc}
              imageAlt={card.image_alt}
              title={card.title}
              benefits={card.benefits as [string, string, string]}
              href={`/${locale}${productCardMeta[i].href}`}
              imageFit={productCardMeta[i].imageFit}
              badge={productCardMeta[i].badge}
              comparison={productCardMeta[i].comparison}
              linkLabel={t.cta.product_details}
              beforeLabel={t.common.before}
              afterLabel={t.common.after}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
