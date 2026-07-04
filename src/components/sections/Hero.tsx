import Image from "next/image";
import { Button } from "@/components/ui";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";

function AnnotationLabel({
  text,
  side,
}: {
  text: string;
  side: "left" | "right";
}) {
  return (
    <div className={`flex items-center gap-1.5 ${side === "left" ? "flex-row-reverse" : "flex-row"}`}>
      <span
        className={`rounded-md bg-white/15 px-2 py-1 text-[10px] font-semibold leading-tight text-white backdrop-blur-sm shadow border border-white/20 whitespace-nowrap ${side === "left" ? "text-right" : "text-left"}`}
      >
        {text}
      </span>
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <div className="h-px w-5 border-t border-dashed border-white/50" />
        <div className="h-1.5 w-1.5 rounded-full bg-white/70 flex-shrink-0" />
      </div>
    </div>
  );
}

export default function Hero({ locale, t }: { locale: string; t: Translations }) {
  return (
    <section className="relative overflow-hidden bg-primary-teal">
      {/* Subtle radial glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-light-teal/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-container px-gutter py-16 md:py-20 lg:py-28">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left lg:gap-16">
          {/* Left — Copy */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            <h1 className="text-white">
              {t.home.hero.title_line1}
              <br className="hidden sm:block" /> {t.home.hero.title_line2}
            </h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t.home.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
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

          {/* Right — Annotated Image */}
          <div className="relative mt-12 lg:mt-0 flex-shrink-0">
            <div className="absolute inset-0 -m-8 rounded-full bg-light-teal/15 blur-2xl pointer-events-none" />

            {/* Annotation layout: left-labels | image | right-labels */}
            <div className="relative flex items-center gap-2 sm:gap-3">

              {/* Left annotations */}
              <div className="hidden sm:flex flex-col justify-around self-stretch py-10 gap-3">
                <AnnotationLabel text={"Heure et jour\nde la prise"} side="left" />
                <AnnotationLabel text="Nom du médicament" side="left" />
                <AnnotationLabel text="Quantité emballée" side="left" />
              </div>

              {/* Image + badge */}
              <div className="relative flex flex-col items-center">
                <Image
                  src="/images/heromedi.png"
                  alt={t.home.hero.image_alt}
                  width={600}
                  height={500}
                  className="relative w-[280px] sm:w-[380px] lg:w-[460px] h-auto rounded-2xl"
                  priority
                />
                {/* Trust in every dose badge */}
                <div className="mt-3 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 rounded-full bg-cta-yellow/95 px-5 py-2 text-xs font-bold text-dark-text shadow-md tracking-wide">
                    <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Trust in every dose
                  </span>
                </div>
              </div>

              {/* Right annotations */}
              <div className="hidden sm:flex flex-col justify-around self-stretch py-10 gap-3">
                <AnnotationLabel text="Date de la prise" side="right" />
                <AnnotationLabel text="Nom du patient" side="right" />
                <AnnotationLabel text="Moment de la prise" side="right" />
              </div>
            </div>

            {/* Mobile legend (shown only on small screens) */}
            <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden text-xs text-white/75">
              <div className="flex items-start gap-1.5">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                <span>Heure et jour de la prise</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                <span>Date de la prise</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                <span>Nom du médicament</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                <span>Nom du patient</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                <span>Quantité emballée</span>
              </div>
              <div className="flex items-start gap-1.5">
                <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-white/50" />
                <span>Moment de la prise</span>
              </div>
            </div>

            <details className="group relative mt-4 w-[280px] sm:w-[380px] lg:w-[460px] mx-auto rounded-xl border border-white/25 bg-white/10 text-left shadow-lg backdrop-blur-sm open:bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 group-open:text-primary-teal [&::-webkit-details-marker]:hidden">
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



