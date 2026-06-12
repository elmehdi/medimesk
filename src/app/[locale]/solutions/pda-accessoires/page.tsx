import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import ProductDetailTemplate, { type ProductData } from "@/components/sections/ProductDetailTemplate";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.products.pdaAccessoires.meta.title, description: t.products.pdaAccessoires.meta.description };
}

export default function PdaAccessoiresPage({ params }: { params: { locale: Locale } }) {
  const t = getTranslations(params.locale);
  return (
    <ProductDetailTemplate
      locale={params.locale}
      slug="pda-accessoires"
      product={t.products.pdaAccessoires as ProductData}
    />
  );
}
