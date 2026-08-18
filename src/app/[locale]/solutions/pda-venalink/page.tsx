import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import { Badge, Button, SectionWrapper } from "@/components/ui";
import { createSeoMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/contact-intents";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  const p = t.venalink;
  return createSeoMetadata({
    locale: params.locale,
    path: "/solutions/pda-venalink",
    title: p.meta.title,
    description: p.meta.description,
    image: "/images/timedi.png",
  });
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-dark-text/70">
          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PdaVenalinkPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const p = t.venalink;

  return (
    <>
      <div className="hidden md:block">
        {/* Breadcrumb */}
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

        {/* Bloc 1 — Hero */}
        <SectionWrapper id="apercu">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge>{p.hero.badge}</Badge>
              <h1 className="mt-4 text-dark-text">{p.hero.product_name}</h1>
              <p className="product-value-title mt-4">{p.hero.title}</p>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-dark-text/70">
                {p.hero.paragraphs.slice(0, -1).map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
              <p className="mt-6 border-l-4 border-primary-teal pl-5 text-lg font-medium leading-relaxed text-dark-text">
                {p.hero.paragraphs[p.hero.paragraphs.length - 1]}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={contactHref(locale, "venalink-demo")}>{p.hero.cta_primary}</Button>
                <Button variant="secondary" href={contactHref(locale, "venalink-info")}>{p.hero.cta_secondary}</Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 rounded-full bg-light-teal/30 blur-3xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl bg-white">
                <Image
                  src="/images/studex-placehollder.jpeg"
                  alt={p.hero.image_alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Bloc 2 — Pourquoi PDA manuelle */}
        <SectionWrapper alternate id="pourquoi">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-dark-text">{p.why.title}</h2>
            <p className="mt-4 text-xl font-semibold text-primary-teal">{p.why.subtitle}</p>
            <div className="mt-7 space-y-4 leading-relaxed text-dark-text/70">
              {p.why.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-light-teal bg-white p-8 shadow-sm md:p-10">
              <CheckList items={p.why.items} />
            </div>
            <div className="mt-8 space-y-4 leading-relaxed text-dark-text/70">
              {p.why.conclusion.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Bloc 3 — Solution Venalink */}
        <SectionWrapper id="solution">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-dark-text">{p.solution.title}</h2>
            <p className="mt-4 text-xl font-semibold text-primary-teal">{p.solution.subtitle}</p>
            <div className="mt-7 space-y-4 leading-relaxed text-dark-text/70">
              {p.solution.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            {/* Formats table */}
            <div className="mt-10 overflow-hidden rounded-2xl border border-light-teal shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-primary-teal text-white">
                  <tr>
                    <th className="px-5 py-4 w-1/4">{p.solution.format_heading}</th>
                    <th className="px-5 py-4">{p.solution.usage_heading}</th>
                  </tr>
                </thead>
                <tbody>
                  {p.solution.formats.map((row, i) => (
                    <tr key={row.format} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                      <td className="px-5 py-4 font-semibold text-dark-text">{row.format}</td>
                      <td className="px-5 py-4 text-dark-text/70">{row.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* For patients */}
            <div className="mt-10">
              <h3 className="font-sans text-xl font-semibold text-dark-text">{p.solution.patients_title}</h3>
              <CheckList items={p.solution.patients_items} />
            </div>
          </div>
        </SectionWrapper>

        {/* Bloc 4 — Accessoires */}
        <SectionWrapper alternate id="accessoires">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-dark-text">{p.accessories.title}</h2>
            <p className="mt-4 text-xl font-semibold text-primary-teal">{p.accessories.subtitle}</p>
            <p className="mt-6 leading-relaxed text-dark-text/70">{p.accessories.description}</p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-light-teal shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-primary-teal text-white">
                  <tr>
                    <th className="px-5 py-4 w-1/3">{p.accessories.accessory_heading}</th>
                    <th className="px-5 py-4">{p.accessories.role_heading}</th>
                  </tr>
                </thead>
                <tbody>
                  {p.accessories.rows.map((row, i) => (
                    <tr key={row.accessory} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                      <td className="px-5 py-4 font-semibold text-dark-text">{row.accessory}</td>
                      <td className="px-5 py-4 text-dark-text/70">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionWrapper>

        {/* Bloc 5 — Starter CTA */}
        <section className="relative overflow-hidden bg-primary-teal" id="starter">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-container px-gutter py-20 text-center">
            <p className="font-bold uppercase tracking-wider text-cta-yellow">{p.starter.eyebrow}</p>
            <h2 className="mt-6 text-white">{p.starter.title}</h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-xl mx-auto">{p.starter.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={contactHref(locale, "venalink-starter")} className="bg-cta-yellow text-dark-text hover:brightness-95">
                {p.starter.cta_primary}
              </Button>
              <Button variant="secondary" href={contactHref(locale, "venalink-callback")} className="border-white text-white hover:bg-white hover:text-primary-teal">
                {p.starter.cta_secondary}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
