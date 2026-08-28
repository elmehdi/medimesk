import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { productCardMeta } from "@/lib/products";
import { contactHref } from "@/lib/contact-intents";
import ProductComparisonMedia from "@/components/ui/ProductComparisonMedia";

const Arrow = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

const Check = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="m5 12 4 4L19 6" />
  </svg>
);

export default function MobileLanding({ locale, t }: { locale: string; t: Translations }) {
  const featured = t.home.rdc45_spotlight;

  return (
    <div className="mobile-landing overflow-hidden bg-section-bg md:hidden">
      <section className="relative overflow-hidden bg-deep-teal px-5 pb-6 pt-8 text-white">
        <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-accent-teal/20 blur-3xl" />

        <div className="relative">
          <h1 className="max-w-[20rem] font-sans text-[2.35rem] font-bold leading-[1.02] tracking-[-0.045em]">
            {t.home.hero.title_line1} {t.home.hero.title_line2}
          </h1>
          <p className="mt-4 max-w-[22rem] text-[15px] leading-6 text-white/70">
            {t.home.hero.subtitle}
          </p>

          <div className="mt-6">
            <Link
              href={contactHref(locale, "project")}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cta-yellow px-4 text-sm font-bold text-dark-text"
            >
              {t.home.hero.cta_project}
              <Arrow />
            </Link>
          </div>

          <div className="relative mt-7 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 p-2 shadow-2xl shadow-black/25">
            <Image
              src="/images/heromedi2.webp"
              alt={t.home.hero.image_alt}
              width={720}
              height={600}
              priority
              className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
              sizes="100vw"
            />
          </div>

          <details className="group mt-3 overflow-hidden rounded-2xl border border-white/15 bg-white/10 open:bg-white">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-bold text-white group-open:text-primary-teal [&::-webkit-details-marker]:hidden">
              {t.home.hero.pda_question}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-lg leading-none group-open:rotate-45 group-open:bg-light-teal">
                +
              </span>
            </summary>
            <p className="px-4 pb-4 text-xs leading-5 text-muted-text">
              {t.home.hero.pda_definition}
            </p>
          </details>

          <div className="mt-3 flex justify-end">
            <a
              href="https://www.youtube.com/watch?v=PmMIpPxUlUw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 w-fit items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-bold text-white"
            >
              {t.home.hero.watch_video}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-primary-teal">
                <svg className="ml-0.5 h-3 w-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-5">
        <div className="overflow-hidden rounded-2xl border border-hairline bg-white shadow-sm">
          <div className="flex items-center justify-center gap-3 px-4 py-4">
            <Image
              src="/images/timedi.webp"
              alt="TI-Medi"
              width={267}
              height={189}
              className="h-auto w-[78px] object-contain"
            />
            <span className="h-5 w-px bg-hairline" />
            <Image
              src="/images/jvm%20h.webp"
              alt="JVM"
              width={280}
              height={180}
              className="h-auto w-[62px] object-contain"
            />
            <span className="h-5 w-px bg-hairline" />
            <Image
              src="/images/studex.webp"
              alt="Studex"
              width={475}
              height={106}
              className="h-auto w-[82px] object-contain"
            />
          </div>
          <div className={`grid border-t border-hairline ${
            t.home.trust.length === 1 ? "grid-cols-1" : t.home.trust.length === 2 ? "grid-cols-2" : "grid-cols-3"
          }`}>
            {t.home.trust.map((label, index) => (
              <div key={label} className={`flex min-h-[5.5rem] flex-col items-center justify-center px-4 py-4 text-center ${index !== 0 ? "border-l border-hairline" : ""}`}>
                <span className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-light-teal text-primary-teal"><Check /></span>
                <p className="mt-1.5 max-w-[15rem] text-xs font-semibold leading-4 text-muted-text">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mobile-solutions" className="scroll-mt-24 pb-12 pt-5">
        <div className="flex items-end justify-between px-5">
          <div>
            <h2 className="mt-1.5 max-w-[17rem] font-sans text-[1.75rem] font-bold leading-tight tracking-[-0.035em] text-dark-text">
              {t.home.solutions.title}
            </h2>
          </div>
        </div>

        <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {t.home.solutions.cards.map((card, index) => {
            const meta = productCardMeta[index];
            return (
              <Link
                key={meta.href}
                href={`/${locale}${meta.href}`}
                className="w-[78vw] max-w-[19rem] shrink-0 snap-center overflow-hidden rounded-[1.4rem] bg-white shadow-[0_10px_35px_rgba(24,62,58,0.09)]"
              >
                <div className="relative aspect-[16/11] bg-section-bg">
                  {meta.comparison ? (
                    <ProductComparisonMedia
                      beforeSrc={meta.comparison.beforeSrc}
                      afterSrc={meta.comparison.afterSrc}
                      alt={card.image_alt}
                      beforeLabel={t.common.before}
                      afterLabel={t.common.after}
                      imageFit={meta.imageFit}
                      variant={meta.comparison.variant}
                    />
                  ) : meta.imageSrc ? (
                    <Image
                      src={meta.imageSrc}
                      alt={card.image_alt}
                      fill
                      className={meta.imageFit === "contain" ? "object-contain p-4" : "object-cover"}
                      sizes="78vw"
                    />
                  ) : null}
                  <span className="absolute left-3 top-3 rounded-full bg-primary-teal/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {meta.badge || `0${index + 1}`}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-sans text-lg font-bold leading-tight text-dark-text">{card.title}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-primary-teal">{t.cta.product_details}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-light-teal text-primary-teal">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-5 overflow-hidden rounded-[1.75rem] bg-ink-teal text-white shadow-xl shadow-primary-teal/15">
        <div className="relative aspect-[16/10]">
          <Image src="/images/DB2.webp" alt={featured.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-teal via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-cta-yellow px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-dark-text">
            {featured.badge}
          </span>
        </div>
        <div className="-mt-6 relative px-5 pb-6">
          <h2 className="font-sans text-2xl font-bold leading-tight tracking-[-0.025em]">{featured.title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/65">{featured.description}</p>
          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <Link href={`/${locale}/solutions/pda-dual-blist`} className="flex min-h-11 items-center justify-center rounded-xl bg-white px-3 text-center text-xs font-bold text-ink-teal">
              {featured.cta_discover}
            </Link>
            <Link href={contactHref(locale, "dual-blist-demo")} className="flex min-h-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-3 text-center text-xs font-bold text-white">
              {featured.cta_demo}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <h2 className="mt-2 font-sans text-[1.75rem] font-bold leading-tight tracking-[-0.035em] text-dark-text">
          {t.home.why.title}
        </h2>
        <div className="mt-6 space-y-2.5">
          {t.home.why.items.slice(0, 4).map((item, index) => (
            <div key={item.title} className="flex items-center gap-3.5 rounded-2xl border border-hairline bg-white p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-light-teal text-sm font-extrabold text-primary-teal">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-sans text-[15px] font-bold text-dark-text">{item.title}</h3>
                <p className="mt-0.5 line-clamp-2 text-xs leading-5 text-muted-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-light-teal">
          <Image src="/images/logo.webp" alt="MediMesk" width={609} height={662} className="h-12 w-auto" />
        </div>
        <h2 className="mx-auto mt-5 max-w-[19rem] font-sans text-[1.8rem] font-bold leading-tight tracking-[-0.035em] text-dark-text">
          {t.home.cta_banner.title}
        </h2>
        <p className="mx-auto mt-3 max-w-[21rem] text-sm leading-6 text-muted-text">{t.home.cta_banner.subtitle}</p>
        <Link
          href={contactHref(locale, "free-demo")}
          className="mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary-teal px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-teal/20"
        >
          {t.cta.demo_free}
          <Arrow />
        </Link>
        <Link href={contactHref(locale, "contact")} className="mt-3 inline-flex py-2 text-sm font-bold text-primary-teal">
          {t.cta.contact_us}
        </Link>
      </section>
    </div>
  );
}
