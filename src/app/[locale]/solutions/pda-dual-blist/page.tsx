import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import ProductDetailTemplate, { type ProductData } from "@/components/sections/ProductDetailTemplate";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.products.pdaDualBlist.meta.title, description: t.products.pdaDualBlist.meta.description };
}

export default function PdaDualBlistPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);
  return (
    <ProductDetailTemplate
      locale={params.locale}
      slug="pda-dual-blist"
      product={t.products.pdaDualBlist as ProductData}
    />
  );
}
