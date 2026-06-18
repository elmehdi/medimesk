import Link from "next/link";
import Image from "next/image";
import { Button, ProductSectionNav, SectionWrapper, Badge } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.pda.meta.title, description: t.pda.meta.description };
}

function CheckList({ items, large = false }: { items: readonly string[]; large?: boolean }) {
  return (
    <ul className={large ? "mt-6 space-y-4" : "mt-5 space-y-3"}>
      {items.map((item) => (
        <li key={item} className={`flex items-start leading-relaxed text-dark-text/70 ${large ? "gap-4 text-base md:text-lg" : "gap-3 text-sm"}`}>
          <span className={`mt-0.5 flex flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal ${large ? "h-7 w-7" : "h-5 w-5"}`}>
            <svg className={large ? "h-4 w-4" : "h-3 w-3"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PdaRdc45Page({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const p = t.pda;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.hero.title,
    description: p.hero.paragraphs.join(" "),
    image: "https://medimesk.ma/images/pda-robot.webp",
    brand: { "@type": "Brand", name: "MediMesk" },
    url: `https://medimesk.ma/${locale}/solutions/pda-rdc45`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />

      <div className="border-b border-light-teal bg-section-bg">
        <nav className="mx-auto max-w-container px-gutter py-3" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-dark-text/50">
            <li><Link href={`/${locale}`} className="transition-colors hover:text-primary-teal">{t.common.breadcrumb_home}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/${locale}/solutions`} className="transition-colors hover:text-primary-teal">{t.common.breadcrumb_solutions}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-dark-text">{p.breadcrumb}</li>
          </ol>
        </nav>
      </div>

      <ProductSectionNav
        label={locale === "fr" ? "Sommaire" : "On this page"}
        items={locale === "fr" ? [
          { id: "apercu", label: "Présentation" }, { id: "pourquoi-rdc45", label: "Pourquoi RDC 45" },
          { id: "fonctionnement", label: "Fonctionnement" }, { id: "fonctionnalites", label: "Fonctionnalités" },
          { id: "pharmacies", label: "Pour quelles pharmacies" }, { id: "accompagnement", label: "Accompagnement" },
        ] : [
          { id: "apercu", label: "Overview" }, { id: "pourquoi-rdc45", label: "Why RDC 45" },
          { id: "fonctionnement", label: "Workflow" }, { id: "fonctionnalites", label: "Features" },
          { id: "pharmacies", label: "Who it is for" }, { id: "accompagnement", label: "Support" },
        ]}
      />

      {/* Block 1 — Hero */}
      <SectionWrapper id="apercu">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge>{p.hero.badge}</Badge>
            <h1 className="mt-4 text-dark-text">{p.hero.title}</h1>
            <div className="mx-auto mt-5 max-w-xl space-y-4 leading-relaxed text-dark-text/70 lg:mx-0">
              {p.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button href={`/${locale}/contact`}>{p.hero.cta_demo}</Button>
              <Button variant="secondary" href={`/${locale}/contact`}>{p.hero.cta_product_sheet}</Button>
            </div>
          </div>
          <div className="relative w-full max-w-md flex-shrink-0 lg:max-w-lg">
            <div className="pointer-events-none absolute -inset-6 rounded-full bg-light-teal/20 blur-3xl" />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image src="/images/pda-robot.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 512px" priority />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 2 — Why RDC 45 */}
      <SectionWrapper alternate id="pourquoi-rdc45">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.why_rdc45.title}</h2>
          <h3 className="mt-5 font-sans text-xl font-semibold text-primary-teal">{p.why_rdc45.subtitle}</h3>
          <div className="mt-6 space-y-4 text-left leading-relaxed text-dark-text/70">
            {p.why_rdc45.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-light-teal bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-7 md:p-9">
              <h3 className="font-sans text-xl font-semibold text-dark-text">{p.why_rdc45.manual_title}</h3>
              <ul className="mt-6 space-y-4">
                {p.why_rdc45.manual_items.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-dark-text/70">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-dark-text/30" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-light-teal bg-light-teal/35 p-7 md:border-l md:border-t-0 md:p-9">
              <h3 className="font-sans text-xl font-semibold text-primary-teal">{p.why_rdc45.rdc_title}</h3>
              <ul className="mt-6 space-y-4">
                {p.why_rdc45.rdc_items.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-dark-text/75">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-teal text-white">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 3 — Workflow */}
      <SectionWrapper id="fonctionnement">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-dark-text">{p.workflow.title}</h2>
          <p className="mt-4 text-lg font-semibold text-primary-teal">{p.workflow.subtitle}</p>
        </div>
        <ol className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {p.workflow.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-light-teal bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-teal font-playfair text-xl font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-sans text-base font-semibold text-dark-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dark-text/65">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-light-teal bg-dark-text p-2 shadow-xl">
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/Dfou_xl9Go0?rel=0"
              title={p.workflow.video_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Block 4 — Key features */}
      <SectionWrapper alternate id="fonctionnalites">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-dark-text">{p.features.title}</h2>
          <p className="mt-4 text-lg font-semibold text-primary-teal">{p.features.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {p.features.groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-light-teal bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="font-sans text-lg font-semibold text-dark-text">{group.title}</h3>
              <CheckList items={group.items} />
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href={`/${locale}/contact`}>{p.features.cta}</Button>
        </div>
      </SectionWrapper>

      {/* Block 5 — Pharmacy fit */}
      <SectionWrapper id="pharmacies">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.ideal_for.title}</h2>
          <p className="mt-4 text-xl font-semibold text-primary-teal">{p.ideal_for.subtitle}</p>
          <p className="mt-6 text-left leading-relaxed text-dark-text/70">{p.ideal_for.description}</p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-light-teal bg-section-bg p-8 shadow-sm md:p-12">
          <h3 className="font-playfair text-2xl font-bold text-dark-text md:text-3xl">{p.ideal_for.list_intro}</h3>
          <CheckList items={p.ideal_for.items} large />
        </div>
        <div className="mt-10 text-center">
          <Button href={`/${locale}/contact`}>{p.ideal_for.cta}</Button>
        </div>
      </SectionWrapper>

      {/* Block 6 — MediMesk support */}
      <SectionWrapper alternate id="accompagnement">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-wider text-primary-teal">{p.support.eyebrow}</p>
            <h2 className="mt-3 text-dark-text">{p.support.title}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-dark-text/70">
              {p.support.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={`/${locale}/contact`}>{p.support.cta_demo}</Button>
              <Button variant="secondary" href={`/${locale}/contact`}>{p.support.cta_quote}</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-light-teal bg-white p-7 shadow-sm md:p-8">
            <CheckList items={p.support.items} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
