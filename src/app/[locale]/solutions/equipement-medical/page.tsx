import Link from "next/link";
import Image from "next/image";
import { Button, SectionWrapper, Badge } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.equipment.meta.title, description: t.equipment.meta.description };
}

/* ── Category icons ──────────────────────────────────── */
const categoryIcons = [
  <svg key="0" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="1" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
];

/* ── Differentiator icons ────────────────────────────── */
const diffIcons = [
  <svg key="0" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
  <svg key="1" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
];

/* ── Page ─────────────────────────────────────────────── */
export default function EquipmentPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const e = t.equipment;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: e.hero.title,
    description: e.hero.description,
    image: "https://medimesk.ma/images/equipment-medical.jpg",
    brand: { "@type": "Brand", name: "MediMesk" },
    url: `https://medimesk.ma/${locale}/solutions/equipement-medical`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      {/* ─── Breadcrumb ─────────────────────────────── */}
      <div className="bg-section-bg border-b border-light-teal">
        <nav className="mx-auto max-w-container px-gutter py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-dark-text/50">
            <li>
              <Link href={`/${locale}`} className="hover:text-primary-teal transition-colors">
                {t.common.breadcrumb_home}
              </Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li>
              <Link href={`/${locale}/solutions`} className="hover:text-primary-teal transition-colors">
                {t.common.breadcrumb_solutions}
              </Link>
            </li>
            <li><span className="mx-1">/</span></li>
            <li className="text-dark-text font-medium">{e.breadcrumb}</li>
          </ol>
        </nav>
      </div>

      {/* ─── Hero ───────────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge>{e.hero.badge}</Badge>
            <h1 className="mt-4 text-dark-text">{e.hero.title}</h1>
            <p className="mt-5 text-dark-text/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {e.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start">
              <Button href={`/${locale}/contact`}>{e.hero.cta_primary}</Button>
              <Button variant="secondary" href={`/${locale}/contact`}>{e.hero.cta_secondary}</Button>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-6 rounded-full bg-light-teal/20 blur-3xl pointer-events-none" />
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/equipment-medical.jpg"
                alt={e.hero.image_alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Product categories ─────────────────────── */}
      <SectionWrapper alternate>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{e.categories.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{e.categories.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {e.categories.items.map((cat, i) => (
            <div key={i} className="rounded-xl border border-light-teal bg-white p-6 transition-shadow hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-teal text-primary-teal">{categoryIcons[i]}</span>
              <h3 className="mt-5 text-base font-semibold text-dark-text font-sans">{cat.title}</h3>
              <p className="mt-2 text-sm text-dark-text/60 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Why choose us ──────────────────────────── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{e.differentiators.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{e.differentiators.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {e.differentiators.items.map((d, i) => (
            <div key={i} className="flex gap-4 rounded-xl border border-transparent p-5 transition-all hover:border-light-teal hover:bg-light-teal/30">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-light-teal text-primary-teal">{diffIcons[i]}</span>
              <div>
                <h3 className="text-base font-semibold text-dark-text font-sans">{d.title}</h3>
                <p className="mt-1.5 text-sm text-dark-text/60 leading-relaxed">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── How it works ───────────────────────────── */}
      <SectionWrapper alternate>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{e.process.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{e.process.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {e.process.steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-teal text-white text-xl font-bold font-playfair">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-base font-semibold text-dark-text font-sans">{step.title}</h3>
              <p className="mt-2 text-sm text-dark-text/60 leading-relaxed max-w-xs mx-auto">{step.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── CTA Banner ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-teal">
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-container px-gutter py-16 md:py-20 text-center">
          <h2 className="text-white">{e.cta_banner.title}</h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-lg mx-auto">{e.cta_banner.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={`/${locale}/contact`}>{t.cta.quote}</Button>
            <Button variant="secondary" href={`/${locale}/contact`} className="border-white text-white hover:bg-white hover:text-primary-teal">
              {t.cta.contact_us}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
