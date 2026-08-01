import Image from "next/image";
import Link from "next/link";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";
import { MobileArrow, MobileEyebrow } from "./MobilePrimitives";

export default function MobileAboutPage({ locale, t }: { locale: string; t: Translations }) {
  const a = t.about;
  return (
    <main className="overflow-hidden bg-[#f3f7f6] md:hidden">
      <section className="relative overflow-hidden bg-[#063f3c] px-5 pb-10 pt-9 text-white">
        <div className="absolute -right-24 -top-16 h-72 w-72 rounded-full bg-[#19b5a8]/15" />
        <div className="relative">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#8ce4dc]">{a.hero.badge}</span>
          <h1 className="mt-5 max-w-[21rem] font-sans text-[2.4rem] font-bold leading-[1.02] tracking-[-0.05em]">{a.hero.title_line1} {a.hero.title_line2}</h1>
          <p className="mt-4 text-sm leading-6 text-white/68">{a.hero.subtitle}</p>
          <div className="mt-7 flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2"><Image src="/images/logo.webp" alt="MediMesk" width={609} height={662} className="h-12 w-auto" /></div>
            <p className="text-sm font-semibold leading-5 text-white">{a.story.title}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-12">
        <MobileEyebrow>{a.story.label}</MobileEyebrow>
        <h2 className="mt-2 font-sans text-[1.75rem] font-bold leading-tight tracking-[-0.035em] text-[#15242d]">{a.story.title}</h2>
        <div className="mt-6 space-y-4 border-l-2 border-[#bfe5e1] pl-5 text-sm leading-6 text-[#607177]">
          <p>{a.story.p1_before}<strong className="text-[#15242d]">{a.story.p1_name}</strong>{a.story.p1_after}</p>
          <p>{a.story.p2}</p>
          <p>{a.story.p3}</p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="px-5"><h2 className="font-sans text-[1.75rem] font-bold leading-tight text-[#15242d]">{a.values.title}</h2><p className="mt-3 text-sm leading-6 text-[#64747a]">{a.values.subtitle}</p></div>
        <div className="mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {a.values.items.map((value, index) => (
            <article key={value.title} className="w-[76vw] max-w-[18rem] shrink-0 snap-center rounded-[1.5rem] bg-[#f3f7f6] p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#007f78] text-xs font-black text-white">0{index + 1}</span>
              <h3 className="mt-4 font-sans text-lg font-bold text-[#15242d]">{value.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#64747a]">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-12 text-center">
        <h2 className="font-sans text-[1.75rem] font-bold text-[#15242d]">{a.founder.title}</h2>
        <p className="mt-3 text-sm leading-6 text-[#64747a]">{a.founder.subtitle}</p>
        <div className="mt-7 rounded-[1.6rem] bg-white p-5 shadow-sm">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-[1.5rem] bg-[#e0f5f3]"><Image src="/images/founder/pdf.jpg" alt={a.founder.name} fill className="object-cover object-[center_10%]" sizes="112px" /></div>
          <h3 className="mt-4 font-sans text-lg font-bold text-[#15242d]">{a.founder.name}</h3>
          <p className="mt-1 text-xs font-bold text-[#007f78]">{a.founder.role}</p>
          <p className="mt-4 text-xs leading-5 text-[#64747a]">{a.founder.bio}</p>
        </div>
      </section>

      <section className="bg-[#102c2b] px-5 py-12 text-center text-white">
        <h2 className="font-sans text-[1.75rem] font-bold leading-tight">{a.cta_banner.title}</h2>
        <p className="mt-3 text-sm leading-6 text-white/60">{a.cta_banner.subtitle}</p>
        <Link href={contactHref(locale, "contact")} className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f5c518] text-sm font-black text-[#1a2332]">{t.cta.contact_us}<MobileArrow /></Link>
        <Link href={`/${locale}/solutions`} className="mt-3 inline-flex py-2 text-sm font-bold text-white">{t.cta.discover}</Link>
      </section>
    </main>
  );
}
