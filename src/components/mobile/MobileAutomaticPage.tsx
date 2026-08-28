import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref, type ContactIntent } from "@/lib/contact-intents";
import { MobileBackLink, MobileEyebrow, MobileSectionTitle, MobileStickyActions } from "./MobilePrimitives";

const media: Record<string, { src: string; contain?: boolean }> = {
  atdps: { src: "/images/Hospital clinic/atpds - reconnaissance des canisters.webp" },
  menith: { src: "/images/Hospital clinic/Menith.webp", contain: true },
  vizen: { src: "/images/Hospital clinic/VIZEN-EX-Front.webp", contain: true },
  wizer: { src: "/images/Hospital clinic/JVM_WIZER.webp", contain: true },
};

export default function MobileAutomaticPage({ locale, t }: { locale: string; t: Translations }) {
  const p = t.hospital;
  return (
    <div className="overflow-hidden bg-section-bg pb-24 md:hidden">
      <section className="relative overflow-hidden bg-deep-teal px-5 pb-7 pt-5 text-white">
        <div className="relative">
          <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
          <div className="mt-7"><MobileEyebrow light>{p.hero.badge}</MobileEyebrow></div>
          <h1 className="mt-3 max-w-[21rem] font-sans text-[2.35rem] font-bold leading-[1.02] tracking-[-0.05em]">{p.hero.product_name}</h1>
          <p className="mt-3 text-[1.05rem] font-semibold leading-6 text-mint">{p.hero.title}</p>
          <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.65rem] bg-white">
            <Image src="/images/Hospital clinic/Menith copy.webp" alt={p.hero.image_alt} fill priority className="object-contain p-5" sizes="100vw" />
          </div>
          <p className="mt-5 text-sm leading-6 text-white/65">{p.hero.description}</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle title={p.why.title} subtitle={p.why.subtitle} />
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          {p.why.limitations.slice(0, 4).map((item, index) => (
            <article key={item} className="rounded-2xl border border-hairline bg-white p-4">
              <span className="text-xs font-black text-primary-teal">0{index + 1}</span>
              <p className="mt-2 text-xs font-semibold leading-4 text-muted-text">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="px-5"><MobileSectionTitle eyebrow="JVM" title={p.range.title} subtitle={p.range.subtitle} /></div>
        <div className="mt-6 flex gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {p.range.rows.map((row, index) => (
            <a key={row.machine} href={`#mobile-machine-${p.machines[index]?.slug}`} className="w-[68vw] max-w-[16rem] shrink-0 rounded-[1.4rem] bg-section-bg p-5">
              <h3 className="mt-2 font-sans text-xl font-black text-dark-text">{row.machine}</h3>
              <p className="mt-3 text-xs leading-5 text-muted-text">{row.role}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-5 px-5 py-12">
        <MobileEyebrow>{p.range.title}</MobileEyebrow>
        {p.machines.map((machine, index) => {
          const image = media[machine.slug];
          return (
            <article id={`mobile-machine-${machine.slug}`} key={machine.slug} className="scroll-mt-24 overflow-hidden rounded-[1.6rem] border border-hairline bg-white shadow-sm">
              <div className="relative aspect-[16/11] bg-hairline">
                {image && <Image src={image.src} alt={machine.title} fill className={image.contain ? "object-contain p-5" : "object-cover"} sizes="100vw" />}
                <span className="absolute left-4 top-4 rounded-full bg-deep-teal/90 px-3 py-1 text-xs font-black text-white">{machine.name}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div><span className="text-xs font-black text-primary-teal">0{index + 1}</span><h2 className="mt-1 font-sans text-xl font-bold leading-tight text-dark-text">{machine.title}</h2></div>
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-primary-teal">{machine.subtitle}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[machine.features[0], machine.benefits[0]].map((item, i) => (
                    <p key={i} className="rounded-xl bg-section-bg p-3 text-xs leading-4 text-muted-text">{item}</p>
                  ))}
                </div>
                <Link href={contactHref(locale, `pda-auto-${machine.slug}` as ContactIntent)} className="mt-4 flex min-h-11 items-center justify-center rounded-xl bg-primary-teal text-xs font-black text-white">{machine.cta}</Link>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-ink-teal px-5 py-12 text-white">
        <MobileEyebrow light>{p.value.title}</MobileEyebrow>
        <h2 className="mt-2 font-sans text-[1.75rem] font-bold leading-tight">{p.value.title}</h2>
        <div className="mt-6 space-y-2.5">
          {p.value.audiences.map((audience, index) => (
            <article key={audience.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cta-yellow text-xs font-black text-ink-teal">0{index + 1}</span>
              <div><h3 className="font-sans text-sm font-bold">{audience.title}</h3><p className="mt-1 text-xs leading-4 text-white/55">{audience.items[0]}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle eyebrow={p.support.eyebrow} title={p.support.title} subtitle={p.support.subtitle} />
        <div className="mt-6 rounded-[1.5rem] bg-white p-5">
          <ul className="space-y-3">{p.support.items.map(item => <li key={item} className="flex gap-2.5 text-xs leading-5 text-muted-text"><span className="font-black text-primary-teal">✓</span>{item}</li>)}</ul>
        </div>
      </section>

      <MobileStickyActions primaryHref={contactHref(locale, "pda-auto-range")} primaryLabel={p.range.cta} secondaryHref={contactHref(locale, "quote")} secondaryLabel={t.cta.quote} />
    </div>
  );
}
