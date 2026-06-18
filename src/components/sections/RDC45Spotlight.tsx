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
              src="/images/pda-robot.webp"
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

          <h3 className="mt-7 text-lg font-semibold text-dark-text font-sans">
            {s.steps_intro}
          </h3>
          <ol className="mt-5 grid gap-4 sm:grid-cols-2">
            {s.steps.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-teal text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-dark-text">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-dark-text/60">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={`/${locale}/solutions/pda-rdc45#specifications`}>
              {s.cta_spec}
            </Button>
            <Button variant="secondary" href={`/${locale}/solutions/pda-rdc45#demonstration`}>
              {s.cta_demo}
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
