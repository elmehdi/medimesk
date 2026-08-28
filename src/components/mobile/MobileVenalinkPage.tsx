import Image from "next/image";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";
import { MobileBackLink, MobileEyebrow, MobileSectionTitle, MobileStickyActions } from "./MobilePrimitives";

function CompactList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-xs leading-5 text-muted-text">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal">
            <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m5 12 4 4L19 6" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function MobileVenalinkPage({ locale, t }: { locale: string; t: Translations }) {
  const p = t.venalink;

  return (
    <div className="overflow-hidden bg-section-bg pb-24 md:hidden">
      <section className="relative overflow-hidden bg-deep-teal px-5 pb-7 pt-5 text-white">
        <div className="absolute -right-20 top-4 h-64 w-64 rounded-full bg-accent-teal/15" />
        <div className="relative">
          <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
          <div className="mt-7"><MobileEyebrow light>{p.hero.badge}</MobileEyebrow></div>
          <h1 className="mt-3 font-sans text-[2.35rem] font-bold leading-none tracking-[-0.045em]">{p.hero.product_name}</h1>
          <p className="mt-3 text-[1.05rem] font-semibold leading-6 text-mint">{p.hero.title}</p>

          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.65rem] bg-white">
            <Image
              src="/images/studex-placehollder.webp"
              alt={p.hero.image_alt}
              fill
              priority
              className="object-contain p-5"
              sizes="100vw"
            />
          </div>
          <p className="mt-5 text-sm leading-6 text-white/65">{p.hero.paragraphs[0]}</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.why.title} subtitle={p.why.subtitle} />
        <div className="mt-6 rounded-[1.5rem] border border-hairline bg-white p-5 shadow-sm">
          <CompactList items={p.why.items} />
        </div>
        <p className="mt-5 border-l-4 border-primary-teal pl-4 text-sm font-semibold leading-6 text-muted-text">
          {p.why.conclusion[0]}
        </p>
      </section>

      <section className="bg-white px-5 py-12">
        <MobileSectionTitle title={p.solution.title} subtitle={p.solution.subtitle} />
        <div className="mt-6 grid grid-cols-2 gap-3">
          {p.solution.formats.map((row) => (
            <article key={row.format} className="rounded-2xl border border-hairline bg-section-bg p-4">
              <h3 className="font-sans text-lg font-black text-dark-text">{row.format}</h3>
              <p className="mt-2 text-[11px] leading-4 text-muted-text">{row.usage}</p>
            </article>
          ))}
        </div>
        <div className="mt-7">
          <h3 className="font-sans text-sm font-bold text-dark-text">{p.solution.patients_title}</h3>
          <CompactList items={p.solution.patients_items} />
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.accessories.title} subtitle={p.accessories.subtitle} />
        <p className="mt-3 text-sm leading-6 text-muted-text">{p.accessories.description}</p>
        <div className="mt-6 space-y-2.5">
          {p.accessories.rows.map((row, index) => (
            <article key={row.accessory} className="flex gap-3 rounded-2xl border border-hairline bg-white p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-light-teal text-[10px] font-black text-primary-teal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-sans text-sm font-bold text-dark-text">{row.accessory}</h3>
                <p className="mt-1 text-[11px] leading-4 text-muted-text">{row.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary-teal px-5 py-12 text-center text-white">
        <p className="font-bold uppercase tracking-wider text-cta-yellow">{p.starter.eyebrow}</p>
        <h2 className="mt-4 font-sans text-2xl font-bold leading-tight">{p.starter.title}</h2>
        <p className="mt-3 text-sm leading-6 text-white/80">{p.starter.subtitle}</p>
      </section>

      <MobileStickyActions
        primaryHref={contactHref(locale, "venalink-starter")}
        primaryLabel={p.starter.cta_primary}
        secondaryHref={contactHref(locale, "venalink-callback")}
        secondaryLabel={p.starter.cta_secondary}
      />
    </div>
  );
}
