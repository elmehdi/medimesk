import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref, type ContactIntent } from "@/lib/contact-intents";
import { MobileBackLink, MobileEyebrow, MobileSectionTitle, MobileStickyActions } from "./MobilePrimitives";

const media: Record<string, { src: string; contain?: boolean }> = {
  atdps: { src: "/images/Hospital clinic/atpds - reconnaissance des canisters.png" },
  menith: { src: "/images/Hospital clinic/Menith.webp", contain: true },
  vizen: { src: "/images/Hospital clinic/VIZEN-EX-Front.png", contain: true },
  wizer: { src: "/images/Hospital clinic/JVM_WIZER.jpg", contain: true },
};

export default function MobileAutomaticPage({ locale, t }: { locale: string; t: Translations }) {
  const p = t.hospital;
  return (
    <main className="overflow-hidden bg-[#f3f7f6] pb-24 md:hidden">
      <section className="relative overflow-hidden bg-[#081f2d] px-5 pb-7 pt-5 text-white">
        <div className="absolute -right-20 top-12 h-64 w-64 rounded-full bg-[#007f78]/20" />
        <div className="relative">
          <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
          <div className="mt-7"><MobileEyebrow light>{p.hero.badge}</MobileEyebrow></div>
          <h1 className="mt-3 max-w-[21rem] font-sans text-[2.35rem] font-bold leading-[1.02] tracking-[-0.05em]">{p.hero.product_name}</h1>
          <p className="mt-3 text-[1.05rem] font-semibold leading-6 text-[#83ddd4]">{p.hero.title}</p>
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
            <article key={item} className="rounded-2xl border border-[#dce9e7] bg-white p-4">
              <span className="text-xs font-black text-[#007f78]">0{index + 1}</span>
              <p className="mt-2 text-[11px] font-semibold leading-4 text-[#52656c]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="px-5"><MobileSectionTitle eyebrow="JVM" title={p.range.title} subtitle={p.range.subtitle} /></div>
        <div className="mt-6 flex gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {p.range.rows.map((row, index) => (
            <a key={row.machine} href={`#mobile-machine-${p.machines[index]?.slug}`} className="w-[68vw] max-w-[16rem] shrink-0 rounded-[1.4rem] bg-[#eef5f4] p-5">
              <h3 className="mt-2 font-sans text-xl font-black text-[#15242d]">{row.machine}</h3>
              <p className="mt-3 text-xs leading-5 text-[#64747a]">{row.role}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-5 px-5 py-12">
        <MobileEyebrow>{p.range.title}</MobileEyebrow>
        {p.machines.map((machine, index) => {
          const image = media[machine.slug];
          return (
            <article id={`mobile-machine-${machine.slug}`} key={machine.slug} className="scroll-mt-24 overflow-hidden rounded-[1.6rem] border border-[#dce9e7] bg-white shadow-sm">
              <div className="relative aspect-[16/11] bg-[#e9f2f0]">
                {image && <Image src={image.src} alt={machine.title} fill className={image.contain ? "object-contain p-5" : "object-cover"} sizes="100vw" />}
                <span className="absolute left-4 top-4 rounded-full bg-[#081f2d]/90 px-3 py-1 text-[10px] font-black text-white">{machine.name}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div><span className="text-[10px] font-black text-[#007f78]">0{index + 1}</span><h2 className="mt-1 font-sans text-xl font-bold leading-tight text-[#15242d]">{machine.title}</h2></div>
                </div>
                <p className="mt-2 text-xs font-semibold leading-5 text-[#007f78]">{machine.subtitle}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[machine.features[0], machine.benefits[0]].map((item, i) => (
                    <p key={i} className="rounded-xl bg-[#f3f7f6] p-3 text-[10px] leading-4 text-[#627278]">{item}</p>
                  ))}
                </div>
                <Link href={contactHref(locale, `pda-auto-${machine.slug}` as ContactIntent)} className="mt-4 flex min-h-11 items-center justify-center rounded-xl bg-[#007f78] text-xs font-black text-white">{machine.cta}</Link>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-[#102c2b] px-5 py-12 text-white">
        <MobileEyebrow light>{p.value.title}</MobileEyebrow>
        <h2 className="mt-2 font-sans text-[1.75rem] font-bold leading-tight">{p.value.title}</h2>
        <div className="mt-6 space-y-2.5">
          {p.value.audiences.map((audience, index) => (
            <article key={audience.title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f5c518] text-xs font-black text-[#102c2b]">0{index + 1}</span>
              <div><h3 className="font-sans text-sm font-bold">{audience.title}</h3><p className="mt-1 text-[11px] leading-4 text-white/55">{audience.items[0]}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileSectionTitle eyebrow={p.support.eyebrow} title={p.support.title} subtitle={p.support.subtitle} />
        <div className="mt-6 rounded-[1.5rem] bg-white p-5">
          <ul className="space-y-3">{p.support.items.map(item => <li key={item} className="flex gap-2.5 text-xs leading-5 text-[#64747a]"><span className="font-black text-[#007f78]">✓</span>{item}</li>)}</ul>
        </div>
      </section>

      <MobileStickyActions primaryHref={contactHref(locale, "pda-auto-range")} primaryLabel={p.range.cta} secondaryHref={contactHref(locale, "quote")} secondaryLabel={t.cta.quote} />
    </main>
  );
}
