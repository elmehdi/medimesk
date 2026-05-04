import Image from "next/image";
import { SectionWrapper, Button, Badge } from "@/components/ui";
import type { Translations } from "@/i18n/useTranslations";

export default function RDC45Spotlight({ locale, t }: { locale: string; t: Translations }) {
  const s = t.home.rdc45_spotlight;
  return (
    <SectionWrapper alternate>
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left — Image */}
        <div className="flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/pda-robot.png"
              alt={s.video_label}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex-1">
          <Badge>{s.badge}</Badge>
          <h2 className="mt-4 text-dark-text">{s.title}</h2>
          <p className="mt-4 text-dark-text/70 leading-relaxed">{s.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
            {s.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-dark-text/40">{spec.label}</dt>
                <dd className="mt-1 text-sm font-medium text-dark-text">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={`/${locale}/solutions/pda-rdc45`}>{s.cta_demo}</Button>
            <Button variant="link" href={`/${locale}/contact`}>{t.cta.quote}</Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
