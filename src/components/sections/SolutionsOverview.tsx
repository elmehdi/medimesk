import { SectionWrapper } from "@/components/ui";
import ProductCard from "@/components/ui/ProductCard";
import type { Translations } from "@/i18n/useTranslations";

const solutionMeta = [
  { imageSrc: "/images/pda-robot.png", href: "/solutions/pda-rdc45" },
  { imageSrc: "/images/studex-system75.png", href: "/solutions/studex-system75" },
  { imageSrc: "/images/equipment-medical.jpg", href: "/solutions/equipement-medical" },
];

export default function SolutionsOverview({ locale, t }: { locale: string; t: Translations }) {
  return (
    <SectionWrapper alternate>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-dark-text">{t.home.solutions.title}</h2>
        <p className="mt-4 text-dark-text/70 leading-relaxed">
          {t.home.solutions.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {t.home.solutions.cards.map((card, i) => (
          <ProductCard
            key={solutionMeta[i].href}
            imageSrc={solutionMeta[i].imageSrc}
            imageAlt={card.image_alt}
            title={card.title}
            benefits={card.benefits as [string, string, string]}
            href={`/${locale}${solutionMeta[i].href}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
