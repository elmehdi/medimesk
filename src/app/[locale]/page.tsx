import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import WhyMediMesk from "@/components/sections/WhyMediMesk";
import RDC45Spotlight from "@/components/sections/RDC45Spotlight";
import Testimonials from "@/components/sections/Testimonials";
import AboutTeaser from "@/components/sections/AboutTeaser";
import CTABanner from "@/components/sections/CTABanner";
import { Reveal } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import type { Metadata } from "next";
import { createSeoMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return createSeoMetadata({
    locale: params.locale,
    title: t.home.meta.title,
    description: t.home.meta.description,
    image: "/images/pda-sachet.webp",
  });
}

export default function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const t = getTranslations(params.locale);
  const locale = params.locale;

  return (
    <>
      <Hero locale={locale} t={t} />
      <Reveal><TrustBar t={t} /></Reveal>
      <SolutionsOverview locale={locale} t={t} />
      <WhyMediMesk t={t} />
      <RDC45Spotlight locale={locale} t={t} />
      <Testimonials t={t} />
      <AboutTeaser locale={locale} t={t} />
      <Reveal><CTABanner locale={locale} t={t} /></Reveal>
    </>
  );
}
