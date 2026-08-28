import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { productCardMeta } from "@/lib/products";
import { contactHref } from "@/lib/contact-intents";
import { MobileArrow, MobileBackLink } from "./MobilePrimitives";

export default function MobileSolutionsPage({ locale, t }: { locale: string; t: Translations }) {
  return (
    <div className="overflow-hidden bg-section-bg pb-8 md:hidden">
      <section className="relative overflow-hidden bg-deep-teal px-5 pb-10 pt-5 text-white">
        <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-accent-teal/20 blur-3xl" />
        <div className="relative">
          <MobileBackLink href={`/${locale}`} label={t.common.breadcrumb_home} />
          <div className="mt-8">
            <h1 className="mt-3 max-w-[20rem] font-sans text-[2.35rem] font-bold leading-[1.02] tracking-[-0.045em]">
              {t.home.solutions.title}
            </h1>
            <p className="mt-4 max-w-[22rem] text-[15px] leading-6 text-white/70">{t.home.solutions.subtitle}</p>
          </div>
          <div className="mt-7 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {t.home.solutions.cards.map((_, index) => (
              <a key={index} href={`#solution-${index}`} className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-white/90">
                {productCardMeta[index].badge || t.home.solutions.cards[index].title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="space-y-5 px-5 pt-10">
        {t.home.solutions.cards.map((card, index) => {
          const meta = productCardMeta[index];
          const source = meta.comparison?.afterSrc || meta.imageSrc;
          return (
            <article
              id={`solution-${index}`}
              key={meta.href}
              className="scroll-mt-24 overflow-hidden rounded-[1.65rem] border border-hairline bg-white shadow-[0_10px_35px_rgba(24,62,58,0.07)]"
            >
              <Link href={`/${locale}${meta.href}`} className="block">
                <div className="relative aspect-[16/10] bg-hairline">
                  {source && (
                    <Image
                      src={source}
                      alt={card.image_alt}
                      fill
                      className={meta.imageFit === "contain" ? "object-contain p-5" : "object-cover"}
                      sizes="100vw"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-primary-teal/90 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white">
                    {meta.badge || card.title}
                  </span>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-primary-teal shadow">
                    0{index + 1}
                  </span>
                </div>
              </Link>
              <div className="p-5">
                <h2 className="font-sans text-xl font-bold leading-tight tracking-[-0.02em] text-dark-text">{card.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {card.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-xs leading-5 text-muted-text">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal">
                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m5 12 4 4L19 6" />
                        </svg>
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}${meta.href}`} className="mt-5 flex min-h-11 items-center justify-between rounded-xl bg-section-bg px-4 text-xs font-extrabold text-primary-teal">
                  {t.cta.product_details}
                  <MobileArrow />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mx-5 mb-8 mt-12 rounded-[1.75rem] bg-ink-teal px-5 py-7 text-white">
        <h2 className="mt-2 font-sans text-2xl font-bold leading-tight">{t.home.cta_banner.title}</h2>
        <p className="mt-3 text-sm leading-6 text-white/65">{t.home.cta_banner.subtitle}</p>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Link href={contactHref(locale, "free-demo")} className="flex min-h-12 items-center justify-center rounded-xl bg-cta-yellow px-3 text-center text-xs font-extrabold text-dark-text">
            {t.cta.demo_free}
          </Link>
          <Link href={contactHref(locale, "quote")} className="flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-3 text-center text-xs font-bold text-white">
            {t.cta.quote}
          </Link>
        </div>
      </section>
    </div>
  );
}
