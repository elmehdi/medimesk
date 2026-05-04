import Link from "next/link";
import Image from "next/image";
import { Button, SectionWrapper, Badge } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return { title: t.studex.meta.title, description: t.studex.meta.description };
}

/* ── Benefit icons ───────────────────────────────────── */
const benefitIcons = [
  <svg key="0" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="1" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

/* ── Page ─────────────────────────────────────────────── */
export default function StudexPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const s = t.studex;

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: s.hero.title,
    description: s.hero.description,
    image: "https://medimesk.ma/images/studex-system75.png",
    brand: { "@type": "Brand", name: "Studex" },
    url: `https://medimesk.ma/${locale}/solutions/studex-system75`,
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
            <li className="text-dark-text font-medium">{s.breadcrumb}</li>
          </ol>
        </nav>
      </div>

      {/* ─── Hero ───────────────────────────────────── */}
      <SectionWrapper>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <Badge>{s.hero.badge}</Badge>
            <h1 className="mt-4 text-dark-text">{s.hero.title}</h1>
            <p className="mt-5 text-dark-text/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {s.hero.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 lg:justify-start">
              <Button href={`/${locale}/contact`}>{t.cta.demo}</Button>
              <Button variant="secondary" href="#">{t.cta.download_spec}</Button>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-full max-w-md lg:max-w-lg">
            <div className="absolute -inset-6 rounded-full bg-light-teal/20 blur-3xl pointer-events-none" />
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/studex-system75.png"
                alt={s.hero.image_alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 512px"
                priority
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Specifications ─────────────────────────── */}
      <SectionWrapper alternate>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-dark-text text-center">{s.specs.title}</h2>
          <p className="mt-4 text-dark-text/70 text-center leading-relaxed">{s.specs.subtitle}</p>

          <div className="mt-10 overflow-hidden rounded-xl border border-light-teal">
            <table className="w-full text-left">
              <tbody>
                {s.specs.items.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                    <td className="px-6 py-4 text-sm font-semibold text-dark-text w-2/5 align-top">{spec.label}</td>
                    <td className="px-6 py-4 text-sm text-dark-text/70">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Benefits ───────────────────────────────── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{s.benefits.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{s.benefits.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {s.benefits.items.map((b, i) => (
            <div key={i} className="rounded-xl border border-light-teal bg-white p-6 transition-shadow hover:shadow-lg">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-teal text-primary-teal">{benefitIcons[i]}</span>
              <h3 className="mt-5 text-base font-semibold text-dark-text font-sans">{b.title}</h3>
              <p className="mt-2 text-sm text-dark-text/60 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── How it works ───────────────────────────── */}
      <SectionWrapper alternate>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{s.how_it_works.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{s.how_it_works.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {s.how_it_works.steps.map((step, i) => (
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

      {/* ─── Video block ────────────────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-dark-text flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 to-transparent" />
            <div className="relative text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-sm transition-transform group-hover:scale-110">
                <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <p className="mt-4 text-sm font-medium text-white/70">{s.video_label}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── CTA Banner ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-teal">
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-container px-gutter py-16 md:py-20 text-center">
          <h2 className="text-white">{s.cta_banner.title}</h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-lg mx-auto">{s.cta_banner.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={`/${locale}/contact`}>{t.cta.demo_free}</Button>
            <Button variant="secondary" href={`/${locale}/contact`} className="border-white text-white hover:bg-white hover:text-primary-teal">
              {t.cta.contact_us}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
