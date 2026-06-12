import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import ProductDetailTemplate, { type ProductData } from "@/components/sections/ProductDetailTemplate";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.products.pdaAutomatique.meta.title, description: t.products.pdaAutomatique.meta.description };
}

export default function PdaAutomatiquePage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);
  return (
    <ProductDetailTemplate
      locale={params.locale}
      slug="pda-automatique"
      product={t.products.pdaAutomatique as ProductData}
    />
  );
}
