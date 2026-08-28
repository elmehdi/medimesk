import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";
import { MobileBackLink, MobileEyebrow, MobileSectionTitle, MobileStickyActions } from "./MobilePrimitives";

export default function MobileRdc45Page({ locale, t }: { locale: string; t: Translations }) {
  const p = t.pda;
  return (
    <div className="overflow-hidden bg-section-bg pb-24 md:hidden">
      <section className="relative bg-primary-teal px-5 pb-7 pt-5 text-white">
        <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
        <div className="mt-7 flex flex-wrap items-center justify-between gap-2">
          <MobileEyebrow light>{p.hero.badge}</MobileEyebrow>
          <span className="shrink-0 whitespace-nowrap rounded-full border border-mint/25 px-3 py-1 text-xs font-black text-mint">RDC 45</span>
        </div>
        <h1 className="mt-3 font-sans text-[2.45rem] font-bold leading-none tracking-[-0.05em]">{p.hero.product_name}</h1>
        <p className="mt-3 text-[1.05rem] font-semibold leading-6 text-mint">{p.hero.title}</p>
        <div className="relative mt-6 aspect-[4/4.3] overflow-hidden rounded-[1.65rem] bg-white">
          <Image src="/images/RDC/RDC 45-07.webp" alt={p.hero.image_alt} fill priority className="object-contain p-3" sizes="100vw" />
        </div>
        <p className="mt-5 text-sm leading-6 text-white/65">{p.hero.paragraphs[0]}</p>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.why_rdc45.title} subtitle={p.why_rdc45.subtitle} />
        <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-hairline">
          <div className="bg-white p-4">
            <p className="text-[11px] font-black uppercase tracking-wide text-muted-text">{p.why_rdc45.manual_title}</p>
            <ul className="mt-4 space-y-3">{p.why_rdc45.manual_items.slice(0, 3).map(x => <li key={x} className="text-xs leading-4 text-muted-text">• {x}</li>)}</ul>
          </div>
          <div className="bg-primary-teal p-4">
            <p className="text-[11px] font-black uppercase tracking-wide text-white">{p.why_rdc45.rdc_title}</p>
            <ul className="mt-4 space-y-3">{p.why_rdc45.rdc_items.slice(0, 3).map(x => <li key={x} className="text-xs leading-4 text-white/75">✓ {x}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <MobileSectionTitle title={p.workflow.title} subtitle={p.workflow.subtitle} />
        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-[1.5rem]">
          <Image src="/images/RDC/Alveoles a eclairage LED.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="100vw" />
        </div>
        <ol className="mt-6 space-y-2.5">
          {p.workflow.steps.map((step, index) => (
            <li key={step.title} className="flex gap-3 rounded-2xl bg-section-bg p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink-teal text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <div><h3 className="font-sans text-sm font-bold text-dark-text">{step.title}</h3><p className="mt-1 text-xs leading-4 text-muted-text">{step.description}</p></div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-primary-teal px-5 py-12 text-white">
        <h2 className="mt-2 font-sans text-[1.75rem] font-bold leading-tight">{p.features.title}</h2>
        <p className="mt-3 text-sm text-white/55">{p.features.subtitle}</p>
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {p.features.groups.map((group, index) => (
            <article key={group.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="text-xs font-black text-cta-yellow">0{index + 1}</span>
              <h3 className="mt-2 font-sans text-sm font-bold leading-tight">{group.title}</h3>
              <p className="mt-2 line-clamp-3 text-xs leading-4 text-white/50">{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.ideal_for.title} subtitle={p.ideal_for.subtitle} />
        <div className="mt-6 rounded-[1.5rem] bg-white p-5 shadow-sm">
          <p className="text-sm leading-6 text-muted-text">{p.ideal_for.description}</p>
          <ul className="mt-4 space-y-2.5">{p.ideal_for.items.map(item => <li key={item} className="flex gap-2 text-xs leading-5 text-muted-text"><span className="font-black text-primary-teal">✓</span>{item}</li>)}</ul>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <MobileSectionTitle eyebrow={p.support.eyebrow} title={p.support.title} subtitle={p.support.paragraphs[0]} />
        <div className="relative mt-6 aspect-video overflow-hidden rounded-[1.5rem]">
          <Image src="/images/RDC/Après encart rdc.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="mt-4 overflow-hidden rounded-[1.4rem] bg-ink-teal p-1.5">
          <div className="aspect-video overflow-hidden rounded-[1.05rem]">
            <iframe className="h-full w-full" src="https://www.youtube-nocookie.com/embed/Dfou_xl9Go0?rel=0" title={p.workflow.video_title} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" />
          </div>
        </div>
        <Link href={contactHref(locale, "rdc45-spec")} className="mt-4 flex min-h-12 items-center justify-center rounded-xl border border-hairline text-xs font-black text-primary-teal">{p.features.cta}</Link>
      </section>

      <MobileStickyActions primaryHref={contactHref(locale, "rdc45-demo")} primaryLabel={p.hero.cta_demo} secondaryHref={contactHref(locale, "rdc45-sheet")} secondaryLabel={p.hero.cta_product_sheet} />
    </div>
  );
}
