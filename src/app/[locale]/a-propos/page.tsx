import { Button, SectionWrapper, Badge } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import type { Metadata } from "next";
import Image from "next/image";
import { createSeoMetadata } from "@/lib/seo";
import { contactHref } from "@/lib/contact-intents";
import MobileAboutPage from "@/components/mobile/MobileAboutPage";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = getTranslations(params.locale);
  return createSeoMetadata({
    locale: params.locale,
    path: "/a-propos",
    title: t.about.meta.title,
    description: t.about.meta.description,
  });
}

/* ── Value icons ─────────────────────────────────────── */
const valueIcons = [
  <svg key="0" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5.002 5.002 0 01-1.414-3.536 5 5 0 1110 0 5.002 5.002 0 01-1.414 3.536l-.547.547A2 2 0 0014 17.657V18a2 2 0 01-2 2h0a2 2 0 01-2-2v-.343a2 2 0 00-.586-1.414l-.547-.547z" /></svg>,
  <svg key="1" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="2" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  <svg key="3" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  <svg key="4" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="5" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
];

/* ── Page ─────────────────────────────────────────────── */
export default function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const a = t.about;

  return (
    <>
      <MobileAboutPage locale={locale} t={t} />
      <div className="hidden md:block">
      {/* ─── Hero ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-teal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />
        <div className="relative mx-auto max-w-container px-gutter py-20 md:py-28 text-center">
          <Badge variant="light">{a.hero.badge}</Badge>
          <h1 className="mt-5 text-white">
            {a.hero.title_line1}
            <br className="hidden sm:block" /> {a.hero.title_line2}
          </h1>
          <p className="mt-5 text-white/80 leading-relaxed max-w-2xl mx-auto text-lg">
            {a.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── Founding story ─────────────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-primary-teal">{a.story.label}</p>
          <h2 className="mt-3 text-dark-text">{a.story.title}</h2>
          <div className="mt-6 space-y-5 text-dark-text/70 leading-relaxed">
            <p>
              {a.story.p1_before}
              <strong className="text-dark-text">{a.story.p1_name}</strong>
              {a.story.p1_after}
            </p>
            <p>{a.story.p2}</p>
            <p>{a.story.p3}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Values ─────────────────────────────────── */}
      <SectionWrapper alternate>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{a.values.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{a.values.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {a.values.items.map((v, i) => (
            <div key={i} className="rounded-xl border border-transparent p-6 transition-all hover:border-light-teal hover:bg-white hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-teal text-primary-teal">{valueIcons[i]}</span>
              <h3 className="mt-5 text-base font-semibold text-dark-text font-sans">{v.title}</h3>
              <p className="mt-2 text-sm text-dark-text/60 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ─── Team / Founder ─────────────────────────── */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-dark-text">{a.founder.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{a.founder.subtitle}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-light-teal bg-white p-8 text-center shadow-sm">
            <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-light-teal bg-light-teal shadow-sm">
              <Image
                src="/images/founder/pdf.webp"
                alt={a.founder.name}
                fill
                className="object-cover object-[center_10%]"
                sizes="160px"
              />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-dark-text font-sans">{a.founder.name}</h3>
            <p className="mt-1 text-sm text-primary-teal font-medium">{a.founder.role}</p>
            <p className="mt-4 text-sm text-dark-text/60 leading-relaxed">{a.founder.bio}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* ─── CTA Banner ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark-text">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-teal/10 blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cta-yellow/5 blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-container px-gutter py-16 md:py-20 text-center">
          <h2 className="text-white">{a.cta_banner.title}</h2>
          <p className="mt-4 text-white/60 leading-relaxed max-w-lg mx-auto">{a.cta_banner.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={contactHref(locale, "contact")}>{t.cta.contact_us}</Button>
            <Button variant="secondary" href={`/${locale}/solutions`} className="border-white text-white hover:bg-white hover:text-dark-text">
              {t.cta.discover}
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
