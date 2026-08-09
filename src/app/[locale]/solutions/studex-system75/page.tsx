import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import { Badge, Button, ProductSectionNav, SectionWrapper } from "@/components/ui";
import PdfCatalogueViewer from "@/components/ui/PdfCatalogueViewer";
import { createSeoMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/contact-intents";
import { MobileStudexPage } from "@/components/mobile/MobileCataloguePages";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const p = getTranslations(params.locale).advanced_piercing;
  return createSeoMetadata({
    locale: params.locale,
    path: "/solutions/studex-system75",
    title: p.meta.title,
    description: p.meta.description,
    image: "/images/studex-system75.webp",
    keywords: [
      "Piercing Maroc",
      "Piercing Morocco",
      "piercing au Maroc",
      "perçage Maroc",
      "perçage oreilles Maroc",
      "piercing oreilles Maroc",
      "Studex Maroc",
      "Studex Morocco",
      "Studex Africa",
      "Studex Afrique",
      "Studex pharmacie Rabat",
      "Studex pharmacie Casablanca",
      "Studex pharmacy Rabat",
      "Studex pharmacy Casablanca",
      "perçage pharmacie Maroc",
      "pharmacy ear piercing Morocco",
    ],
  });
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed text-dark-text/75">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function StudexPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const p = t.advanced_piercing;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.hero.product_name,
    description: p.hero.paragraphs.join(" "),
    image: "https://medimesk.ma/images/studex-system75.webp",
    brand: { "@type": "Brand", name: "STUDEX" },
    url: `https://medimesk.ma/${locale}/solutions/studex-system75`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <MobileStudexPage locale={locale} t={t} />
      <div className="hidden md:block">
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
          { id: "apercu", label: "Présentation" }, { id: "system75", label: "Solution System75" },
          { id: "offre", label: "Offre complète" },
        ] : [
          { id: "apercu", label: "Overview" }, { id: "system75", label: "System75 solution" },
          { id: "offre", label: "Complete offering" },
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
              <Button href={contactHref(locale, "studex-presentation")}>{p.hero.cta_primary}</Button>
              <Button variant="secondary" href={contactHref(locale, "studex-callback")}>{p.hero.cta_secondary}</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-full bg-light-teal/30 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/studex-system75.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 2 */}
      <SectionWrapper alternate id="system75">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.system.title}</h2>
          <p className="mt-4 text-xl font-semibold text-primary-teal">{p.system.subtitle}</p>
          <div className="mt-7 space-y-4 text-left leading-relaxed text-dark-text/70">
            {p.system.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-light-teal bg-white p-8 shadow-sm md:p-10">
          <p className="font-playfair text-2xl font-bold text-dark-text md:text-3xl">{p.system.benefits_intro}</p>
          <CheckList items={p.system.benefits} />
        </div>
        <p className="mx-auto mt-9 max-w-4xl border-l-4 border-primary-teal pl-5 text-lg leading-relaxed text-dark-text/75">{p.system.conclusion}</p>
      </SectionWrapper>

      {/* Complete offer */}
      <SectionWrapper id="offre">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.offer.title}</h2>
          <p className="mt-4 text-xl font-semibold text-primary-teal">{p.offer.subtitle}</p>
          <div className="mt-7 space-y-4 text-left leading-relaxed text-dark-text/70">
            {p.offer.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-light-teal shadow-sm">
          <table className="responsive-product-table w-full text-left">
            <thead className="bg-primary-teal text-white"><tr><th className="w-[34%] px-5 py-4">{p.offer.element_heading}</th><th className="px-5 py-4">{p.offer.role_heading}</th></tr></thead>
            <tbody>
              {p.offer.rows.map((row, i) => (
                <tr key={row.element} className={`border-b border-light-teal/70 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-section-bg"}`}>
                  <td data-label={p.offer.element_heading} className="px-5 py-4 font-semibold text-dark-text">{row.element}</td>
                  <td data-label={p.offer.role_heading} className="px-5 py-4 leading-relaxed text-dark-text/70">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-9 max-w-4xl text-lg leading-relaxed text-dark-text/75">{p.offer.conclusion}</p>

        {/* Catalogue Studex intégré */}
        <div className="mx-auto mt-14 max-w-5xl">
          <h3 className="mb-6 text-center font-sans text-xl font-semibold text-dark-text">
            {locale === "fr" ? "Catalogue Studex" : "Studex Catalogue"}
          </h3>
          <PdfCatalogueViewer
            pageImageBase="/images/studex-catalogue"
            title={locale === "fr" ? "Catalogue Studex" : "Studex Catalogue"}
            totalPages={6}
            initialPage={2}
            previousLabel={locale === "fr" ? "Page précédente" : "Previous page"}
            nextLabel={locale === "fr" ? "Page suivante" : "Next page"}
            fullscreenLabel={locale === "fr" ? "Plein écran" : "Fullscreen"}
            exitFullscreenLabel={locale === "fr" ? "Quitter le plein écran" : "Exit fullscreen"}
            pageLabel={locale === "fr" ? "Page" : "Page"}
          />
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/Catalogue studex.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-90 hover:shadow-md"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {locale === "fr" ? "Télécharger le catalogue" : "Download catalogue"}
            </a>
            <a
              href="https://www.instagram.com/medimesk_officiel?igsh=eGphdjZxZTc0NTZ1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-light-teal bg-white px-5 py-2.5 text-sm font-semibold text-dark-text transition-all hover:border-primary-teal/40 hover:shadow-md"
            >
              <svg className="h-4 w-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @medimesk_officiel
            </a>
          </div>
        </div>
      </SectionWrapper>
      </div>
    </>
  );
}
