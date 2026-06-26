import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import { Badge, Button, ProductSectionNav, SectionWrapper } from "@/components/ui";
import { createSeoMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/contact-intents";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const p = getTranslations(params.locale).accessories;
  return createSeoMetadata({
    locale: params.locale,
    path: "/solutions/pda-accessoires",
    title: p.meta.title,
    description: p.meta.description,
    image: "/images/Vizen.png",
    keywords: [
      "accessoires PDA Maroc",
      "PDA accessories Morocco",
      "accessoires PDA Afrique",
      "PDA accessories Africa",
      "PDA pharmacie Rabat",
      "PDA pharmacie Casablanca",
      "PDA pharmacy Rabat",
      "PDA pharmacy Casablanca",
    ],
  });
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-dark-text/75">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PdaAccessoriesPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const p = t.accessories;

  return (
    <>
      <div className="border-b border-light-teal bg-section-bg">
        <nav className="mx-auto max-w-container px-gutter py-3" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-dark-text/50">
            <li><Link href={`/${locale}`} className="hover:text-primary-teal">{t.common.breadcrumb_home}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/${locale}/solutions`} className="hover:text-primary-teal">{t.common.breadcrumb_solutions}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-dark-text">{p.breadcrumb}</li>
          </ol>
        </nav>
      </div>

      <ProductSectionNav
        label={locale === "fr" ? "Sommaire" : "On this page"}
        items={locale === "fr" ? [
          { id: "apercu", label: "Présentation" }, { id: "gamme", label: "Gamme complète" },
        ] : [
          { id: "apercu", label: "Overview" }, { id: "gamme", label: "Complete range" },
        ]}
      />

      {/* Block 1 */}
      <SectionWrapper id="apercu">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>{p.hero.badge}</Badge>
            <h1 className="mt-4 text-dark-text">{p.hero.product_name}</h1>
            <p className="mt-4 text-xl font-semibold text-primary-teal">{p.hero.subtitle}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-dark-text/70">
              {p.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={contactHref(locale, "accessories-range")}>{p.hero.cta_primary}</Button>
              <Button variant="secondary" href={contactHref(locale, "accessories-advice")}>{p.hero.cta_secondary}</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-full bg-light-teal/30 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image src="/images/Vizen.png" alt={p.hero.image_alt} fill className="object-contain p-6" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-2xl border border-light-teal bg-section-bg p-8 shadow-sm md:p-10">
            <h2 className="font-playfair text-2xl font-bold text-dark-text md:text-3xl">{p.key_points.title}</h2>
            <CheckList items={p.key_points.items} />
            <p className="mt-8 border-l-4 border-primary-teal pl-5 text-lg leading-relaxed text-dark-text/75">{p.key_points.conclusion}</p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-light-teal bg-white shadow-sm">
            <Image src="/images/VIZEN-EX-Features01.jpg" alt={p.hero.image_alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </SectionWrapper>

      {/* Equipment range */}
      <SectionWrapper alternate id="gamme">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.range.title}</h2>
          <p className="mt-5 leading-relaxed text-dark-text/70">{p.range.intro}</p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-2xl border border-light-teal bg-white shadow-sm">
          <table className="responsive-product-table w-full text-left">
            <thead className="bg-primary-teal text-white">
              <tr>
                <th className="w-[20%] px-5 py-4">{p.range.equipment_heading}</th>
                <th className="w-[27%] px-5 py-4">{p.range.role_heading}</th>
                <th className="px-5 py-4">{p.range.value_heading}</th>
              </tr>
            </thead>
            <tbody>
              {p.range.rows.map((row, i) => (
                <tr key={row.equipment} className={`border-b border-light-teal/70 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-section-bg"}`}>
                  <td data-label={p.range.equipment_heading} className="px-5 py-4 font-semibold text-dark-text">{row.equipment}</td>
                  <td data-label={p.range.role_heading} className="px-5 py-4 text-dark-text/75">{row.role}</td>
                  <td data-label={p.range.value_heading} className="px-5 py-4 leading-relaxed text-dark-text/70">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-9 max-w-4xl text-lg leading-relaxed text-dark-text/75">{p.range.conclusion}</p>
      </SectionWrapper>
    </>
  );
}
