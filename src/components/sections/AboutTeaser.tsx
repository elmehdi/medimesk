import Image from "next/image";
import { SectionWrapper, Button } from "@/components/ui";
import type { Translations } from "@/i18n/useTranslations";

export default function AboutTeaser({ locale, t }: { locale: string; t: Translations }) {
  const s = t.home.about_teaser;
  return (
    <SectionWrapper alternate>
      <div className="flex flex-col items-center gap-7 sm:gap-12 lg:flex-row lg:gap-16">
        {/* Left — Logo */}
        <div className="flex-shrink-0 w-full max-w-[13rem] sm:max-w-sm lg:max-w-md">
          <div className="flex items-center justify-center aspect-square w-full rounded-2xl bg-white p-7 sm:p-12">
            <Image
              src="/images/logo.webp"
              alt={s.photo_label}
              width={609}
              height={662}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-teal">{s.label}</p>
          <h2 className="mt-3 text-dark-text">{s.title}</h2>
          <p className="mt-5 text-dark-text/70 leading-relaxed">{s.p1}</p>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{s.p2}</p>
          <div className="mt-8">
            <Button variant="link" href={`/${locale}/a-propos`}>{t.cta.learn_more}</Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
