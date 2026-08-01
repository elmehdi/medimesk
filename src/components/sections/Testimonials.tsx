import { SectionWrapper } from "@/components/ui";
import type { Translations } from "@/i18n/useTranslations";

export default function Testimonials({ t }: { t: Translations }) {
  const s = t.home.testimonials;
  return (
    <SectionWrapper>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-dark-text">{s.title}</h2>
        <p className="mt-4 text-dark-text/70 leading-relaxed">{s.subtitle}</p>
      </div>

      <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0">
        {s.items.map((item, i) => (
          <blockquote
            key={i}
            className="flex w-[82vw] max-w-[20rem] shrink-0 snap-center flex-col rounded-xl border border-light-teal bg-white p-5 md:w-auto md:max-w-none md:p-6 md:transition-shadow md:hover:shadow-lg"
          >
            {/* Quote icon */}
            <svg
              className="h-8 w-8 text-primary-teal/30 mb-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>

            <p className="flex-1 text-sm text-dark-text/80 leading-relaxed italic">
              &ldquo;{item.quote}&rdquo;
            </p>

            <footer className="mt-6 border-t border-light-teal pt-4">
              <p className="text-sm font-semibold text-dark-text">
                {item.author}
              </p>
              <p className="text-xs text-dark-text/50 mt-0.5">{item.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
