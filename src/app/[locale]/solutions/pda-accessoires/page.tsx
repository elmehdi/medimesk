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
    image: "/images/Accessoires/accessoiress.webp",
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

type EquipmentMedia = {
  src: string;
  fit?: "cover" | "contain";
};

const equipmentMedia: Record<string, readonly EquipmentMedia[]> = {
  "vizen-de": [{ src: "/images/Accessoires/vizen DE.webp" }],
  "vizen-ex": [{ src: "/images/Accessoires/VIZEN-EX_02.webp" }],
  "vizen-cam": [{ src: "/images/Accessoires/VIZEN-CAM.webp" }],
  wizer: [{ src: "/images/Accessoires/wizer.webp" }],
  autocanister: [{ src: "/images/Accessoires/Autocanister.webp" }],
  sts: [
    { src: "/images/Accessoires/STS load station.webp" },
    { src: "/images/Accessoires/STS Load Station_02 (3)(1).webp", fit: "cover" },
  ],
  "i-rolly": [{ src: "/images/Accessoires/i-rolly.webp" }],
  "wizer-de": [{ src: "/images/Accessoires/WIZER DE.webp" }],
  "ez-cut": [{ src: "/images/Accessoires/EZ-cut.webp" }],
  deblistering: [
    { src: "/images/Accessoires/Accessoires - deblistereuse modele automatique.webp" },
    { src: "/images/Accessoires/Accessoires - deblistereuse modele petit.webp", fit: "cover" },
  ],
};

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
              <Image src="/images/Accessoires/accessoiress.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
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
            <Image src="/images/VIZEN-EX-Features01.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </SectionWrapper>

      {/* Equipment range */}
      <SectionWrapper alternate id="gamme">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.range.title}</h2>
          <p className="mt-5 leading-relaxed text-dark-text/70">{p.range.intro}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-7 md:grid-cols-2">
          {p.range.rows.map((row) => {
            const media = equipmentMedia[row.slug];
            const hasFeaturedMediaLayout = row.slug === "deblistering" || row.slug === "sts";
            const primaryMediaLabel = row.slug === "sts"
              ? p.range.sts_station_label
              : p.range.automatic_model_label;
            const secondaryMediaLabel = row.slug === "sts"
              ? p.range.sts_loading_label
              : p.range.compact_model_label;

            return (
              <article key={row.slug} className="overflow-hidden rounded-2xl border border-light-teal bg-white shadow-sm transition-shadow hover:shadow-md">
                {hasFeaturedMediaLayout && media ? (
                  <div className="relative bg-gradient-to-br from-white to-section-bg px-5 pb-24 pt-5 sm:px-7 sm:pb-28 sm:pt-7">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white">
                      <Image
                        src={media[0].src}
                        alt={`${row.equipment} — ${primaryMediaLabel}`}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-primary-teal px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                        {primaryMediaLabel}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-5 w-[42%] overflow-hidden rounded-xl border-4 border-white bg-white shadow-xl sm:bottom-5 sm:right-7">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={media[1].src}
                          alt={`${row.equipment} — ${secondaryMediaLabel}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 42vw, 21vw"
                        />
                      </div>
                      <p className="px-2 py-2 text-center text-[11px] font-semibold text-dark-text sm:text-xs">
                        {secondaryMediaLabel}
                      </p>
                    </div>
                  </div>
                ) : media ? (
                  <div className={`grid ${media.length > 1 ? "grid-cols-2" : ""}`}>
                    {media.map((item) => (
                      <div key={item.src} className="relative aspect-[4/3] overflow-hidden bg-white">
                        <Image
                          src={item.src}
                          alt={`${row.equipment} — ${row.role}`}
                          fill
                          className={item.fit === "cover" ? "object-cover" : "object-contain p-5"}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="p-7 md:p-8">
                  <h3 className="font-sans text-xl font-semibold text-dark-text">{row.equipment}</h3>
                  <p className="mt-3 font-semibold text-primary-teal">{row.role}</p>
                  <p className="mt-4 leading-relaxed text-dark-text/70">{row.value}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-9 max-w-4xl text-lg leading-relaxed text-dark-text/75">{p.range.conclusion}</p>
      </SectionWrapper>
    </>
  );
}
