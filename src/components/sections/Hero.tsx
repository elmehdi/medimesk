import { Button } from "@/components/ui";
import HeroImageLightbox from "@/components/sections/HeroImageLightbox";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";

export default function Hero({ locale, t }: { locale: string; t: Translations }) {
  return (
    <section className="relative overflow-hidden bg-primary-teal">
      {/* Subtle radial glow */}
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-light-teal/20 blur-3xl pointer-events-none md:block" />

      <div className="relative mx-auto max-w-container px-5 pb-7 pt-10 sm:px-gutter sm:py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-16">
          {/* Left — Copy */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            <h1 className="text-white">
              {t.home.hero.title_line1}
              <br className="hidden sm:block" /> {t.home.hero.title_line2}
            </h1>
            <p className="mt-4 text-[1.02rem] text-white/80 leading-relaxed max-w-lg mx-auto sm:mt-5 sm:text-lg lg:mx-0">
              {t.home.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 max-w-md mx-auto sm:mt-8 sm:gap-3 lg:mx-0">
              <Button href="#produits" className="w-full">
                {t.home.hero.cta_solutions}
              </Button>
              <Button
                variant="secondary"
                href={contactHref(locale, "project")}
                className="w-full border-white text-white hover:bg-white hover:text-primary-teal"
              >
                {t.home.hero.cta_project}
              </Button>
            </div>
          </div>

          {/* Right — Image */}
          <div className="relative mt-7 w-full lg:mt-0 lg:w-auto flex-shrink-0">
            <div className="absolute inset-0 -m-8 hidden rounded-full bg-light-teal/15 blur-2xl pointer-events-none md:block" />

            <div className="relative flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <HeroImageLightbox alt={t.home.hero.image_alt} />
              </div>
            </div>

            <details className="group relative mt-3 w-full sm:mt-4 sm:w-[460px] lg:w-[560px] mx-auto rounded-xl border border-white/25 bg-white/10 text-left shadow-lg md:backdrop-blur-sm open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 group-open:text-primary-teal sm:px-5 sm:py-3.5 sm:text-base [&::-webkit-details-marker]:hidden">
                {t.home.hero.pda_question}
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-xl leading-none transition-transform group-open:rotate-45 group-open:bg-light-teal">
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-dark-text/75">
                {t.home.hero.pda_definition}
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
