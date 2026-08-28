import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";
import { MobileArrow, MobileBackLink, MobileEyebrow, MobileSectionTitle, MobileStickyActions } from "./MobilePrimitives";

function CompactList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-muted-text">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal">
            <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m5 12 4 4L19 6" /></svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MobileDualBlistPage({ locale, t }: { locale: string; t: Translations }) {
  const p = t.products.pdaDualBlist;

  return (
    <div className="overflow-hidden bg-section-bg pb-24 md:hidden">
      <section className="relative overflow-hidden bg-deep-teal px-5 pb-7 pt-5 text-white">
        <div className="relative">
          <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
          <div className="mt-7"><MobileEyebrow light>{p.hero.badge}</MobileEyebrow></div>
          <h1 className="mt-3 font-sans text-[2.4rem] font-bold leading-none tracking-[-0.045em]">{p.hero.product_name}</h1>
          <p className="mt-3 max-w-[21rem] text-[1.08rem] font-semibold leading-6 text-mint">{p.hero.title}</p>

          <div className="relative mt-6 overflow-hidden rounded-[1.65rem] border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/25">
            <Image
              src="/images/Dualblist/2 DualBlist product.webp"
              alt={p.hero.image_alt}
              width={900}
              height={600}
              priority
              className="aspect-[3/2] w-full rounded-[1.25rem] object-cover"
              sizes="100vw"
            />
          </div>
          <p className="mt-5 text-sm leading-6 text-white/65">{p.hero.paragraphs[0]}</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.opportunity.title} subtitle={p.opportunity.subtitle} />
        <div className="mt-6 rounded-[1.5rem] border border-hairline bg-white p-5 shadow-sm">
          <p className="font-sans text-lg font-bold leading-tight text-dark-text">{p.opportunity.list_intro}</p>
          <CompactList items={p.opportunity.items} />
        </div>
        <p className="mt-5 border-l-4 border-primary-teal pl-4 text-sm font-semibold leading-6 text-muted-text">{p.opportunity.conclusion}</p>
      </section>

      <section className="bg-white px-5 py-12">
        <MobileSectionTitle title={p.concrete_benefits.title} />
        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {[p.concrete_benefits.patient, p.concrete_benefits.pharmacy].map((audience, index) => (
            <article key={audience.title} className="w-[82vw] max-w-[20rem] shrink-0 snap-center rounded-[1.5rem] bg-section-bg p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-teal text-sm font-black text-white">0{index + 1}</span>
              <h3 className="mt-4 font-sans text-xl font-bold text-dark-text">{audience.title}</h3>
              <p className="mt-2 text-xs leading-5 text-muted-text">{audience.description}</p>
              <CompactList items={audience.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.why.title} subtitle={p.why.subtitle} />
        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-hairline">
          <div className="bg-white p-5">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted-text">{p.comparison.manual_title}</p>
            <CompactList items={p.comparison.manual_items} />
          </div>
          <div className="bg-deep-teal p-5 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-mint">{p.comparison.dual_title}</p>
            <ul className="mt-4 space-y-2.5">
              {p.comparison.dual_items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-white/75">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cta-yellow text-ink-teal">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink-teal px-5 py-12 text-white">
        <h2 className="mt-2 font-sans text-[1.75rem] font-bold leading-tight">{p.features.title}</h2>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white/5">
          <Image src="/images/Dualblist/DualBlist 3 product.webp" alt={p.hero.image_alt} fill className="object-contain p-4" sizes="100vw" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {p.features.groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-sans text-sm font-bold leading-tight text-white">{group.title}</h3>
              <p className="mt-2 line-clamp-3 text-xs leading-4 text-white/55">{group.description || group.items[0]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <MobileSectionTitle title={p.workflow.title} subtitle={p.workflow.subtitle} />
        <div className="mt-6 overflow-hidden rounded-[1.4rem] bg-ink-teal p-1.5 shadow-lg">
          <div className="aspect-video overflow-hidden rounded-[1.1rem]">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/qIJ05MZyiBs?rel=0"
              title={p.workflow.video_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        <ol className="mt-7 space-y-3">
          {p.workflow.steps.map((step, index) => (
            <li key={step.title} className="flex gap-3 rounded-2xl bg-section-bg p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-teal text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-sans text-sm font-bold text-dark-text">{step.title}</h3>
                <p className="mt-1 text-xs leading-4 text-muted-text">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle eyebrow={p.support.eyebrow} title={p.support.title} subtitle={p.support.paragraphs[0]} />
        <div className="mt-6 rounded-[1.5rem] bg-white p-5 shadow-sm">
          <CompactList items={p.support.items} />
        </div>
        <Link href={contactHref(locale, "quote")} className="mt-4 flex min-h-12 items-center justify-between rounded-xl border border-hairline bg-white px-4 text-xs font-extrabold text-primary-teal">
          {p.support.cta_quote}
          <MobileArrow />
        </Link>
      </section>

      <MobileStickyActions
        primaryHref={contactHref(locale, "dual-blist-demo")}
        primaryLabel={p.hero.cta_primary}
        secondaryHref={contactHref(locale, "dual-blist-sheet")}
        secondaryLabel={p.hero.cta_secondary}
      />
    </div>
  );
}
