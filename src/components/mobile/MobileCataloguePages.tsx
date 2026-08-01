import Image from "next/image";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";
import { MobileBackLink, MobileEyebrow, MobileSectionTitle, MobileStickyActions } from "./MobilePrimitives";

const accessoryImages: Record<string, string> = {
  "vizen-de": "/images/Accessoires/vizen DE.webp", "vizen-ex": "/images/Accessoires/VIZEN-EX_02.webp",
  "vizen-cam": "/images/Accessoires/VIZEN-CAM.webp", wizer: "/images/Accessoires/wizer.webp",
  autocanister: "/images/Accessoires/Autocanister.webp", sts: "/images/Accessoires/STS load station.webp",
  "i-rolly": "/images/Accessoires/i-rolly.webp", "wizer-de": "/images/Accessoires/WIZER DE.webp",
  "ez-cut": "/images/Accessoires/EZ-cut.webp", deblistering: "/images/Accessoires/Accessoires - deblistereuse modele automatique.webp",
};

export function MobileAccessoriesPage({ locale, t }: { locale: string; t: Translations }) {
  const p = t.accessories;
  return (
    <main className="overflow-hidden bg-[#f3f7f6] pb-24 md:hidden">
      <section className="bg-[#102c2b] px-5 pb-7 pt-5 text-white">
        <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
        <div className="mt-7"><MobileEyebrow light>{p.hero.badge}</MobileEyebrow></div>
        <h1 className="mt-3 font-sans text-[2.35rem] font-bold leading-none tracking-[-0.05em]">{p.hero.product_name}</h1>
        <p className="mt-3 text-[1.05rem] font-semibold text-[#83ddd4]">{p.hero.subtitle}</p>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.6rem]"><Image src="/images/Accessoires/accessoiress.webp" alt={p.hero.image_alt} fill priority className="object-cover" sizes="100vw" /></div>
        <p className="mt-5 text-sm leading-6 text-white/65">{p.hero.paragraphs[0]}</p>
      </section>
      <section className="px-5 py-12">
        <MobileSectionTitle title={p.key_points.title} />
        <div className="mt-6 grid grid-cols-2 gap-2.5">{p.key_points.items.map((item, i) => <div key={item} className="rounded-2xl bg-white p-4"><span className="text-xs font-black text-[#007f78]">0{i + 1}</span><p className="mt-2 text-[11px] font-semibold leading-4 text-[#5e7077]">{item}</p></div>)}</div>
      </section>
      <section className="bg-white px-5 py-12">
        <MobileSectionTitle title={p.range.title} subtitle={p.range.intro} />
        <div className="mt-6 grid grid-cols-2 gap-3">
          {p.range.rows.map((row) => <article key={row.slug} className="overflow-hidden rounded-2xl border border-[#dce9e7] bg-[#f3f7f6]"><div className="relative aspect-square bg-white"><Image src={accessoryImages[row.slug]} alt={row.equipment} fill className="object-contain p-3" sizes="50vw" /></div><div className="p-3.5"><h2 className="font-sans text-sm font-bold leading-tight text-[#15242d]">{row.equipment}</h2><p className="mt-1.5 line-clamp-2 text-[10px] leading-4 text-[#007f78]">{row.role}</p></div></article>)}
        </div>
      </section>
      <MobileStickyActions primaryHref={contactHref(locale, "accessories-range")} primaryLabel={p.hero.cta_primary} secondaryHref={contactHref(locale, "accessories-advice")} secondaryLabel={p.hero.cta_secondary} />
    </main>
  );
}

export function MobileStudexPage({ locale, t }: { locale: string; t: Translations }) {
  const p = t.advanced_piercing;
  return (
    <main className="overflow-hidden bg-[#f7f4f5] pb-24 md:hidden">
      <section className="bg-[#311f29] px-5 pb-7 pt-5 text-white">
        <MobileBackLink href={`/${locale}/solutions`} label={t.common.breadcrumb_solutions} />
        <div className="mt-7"><MobileEyebrow light>{p.hero.badge}</MobileEyebrow></div>
        <h1 className="mt-3 font-sans text-[2.45rem] font-bold leading-none tracking-[-0.05em]">{p.hero.product_name}</h1>
        <p className="mt-3 text-[1.05rem] font-semibold text-[#f2bdcf]">{p.hero.subtitle}</p>
        <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[1.65rem]"><Image src="/images/studex-system75.webp" alt={p.hero.image_alt} fill priority className="object-cover" sizes="100vw" /></div>
        <p className="mt-5 text-sm leading-6 text-white/65">{p.hero.paragraphs[0]}</p>
      </section>
      <section className="px-5 py-12">
        <MobileSectionTitle eyebrow="System75" title={p.system.title} subtitle={p.system.subtitle} />
        <div className="mt-6 space-y-2.5">{p.system.benefits.map((item, i) => <div key={item} className="flex gap-3 rounded-2xl bg-white p-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#311f29] text-xs font-black text-white">0{i + 1}</span><p className="text-xs font-semibold leading-5 text-[#64747a]">{item}</p></div>)}</div>
      </section>
      <section className="bg-white px-5 py-12">
        <MobileSectionTitle title={p.offer.title} subtitle={p.offer.subtitle} />
        <div className="mt-6 space-y-2.5">{p.offer.rows.map((row, i) => <article key={row.element} className="rounded-2xl border border-[#eadfe3] bg-[#faf7f8] p-4"><div className="flex items-center gap-3"><span className="text-xs font-black text-[#a04d6b]">0{i + 1}</span><h3 className="font-sans text-sm font-bold text-[#31252b]">{row.element}</h3></div><p className="mt-2 text-[11px] leading-4 text-[#75666d]">{row.role}</p></article>)}</div>
        <div className="mt-7 overflow-hidden rounded-[1.5rem] bg-[#311f29] p-4 text-white">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white"><Image src="/images/studex-catalogue/page-2.png" alt="Studex catalogue" fill className="object-contain" sizes="100vw" /></div>
          <a href="/Catalogue studex.pdf" target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-white text-xs font-black text-[#311f29]">{locale === "fr" ? "Télécharger le catalogue" : "Download catalogue"}</a>
        </div>
      </section>
      <MobileStickyActions primaryHref={contactHref(locale, "studex-presentation")} primaryLabel={p.hero.cta_primary} secondaryHref={contactHref(locale, "studex-callback")} secondaryLabel={p.hero.cta_secondary} />
    </main>
  );
}
