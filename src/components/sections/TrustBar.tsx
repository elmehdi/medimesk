import Image from "next/image";
import type { Translations } from "@/i18n/useTranslations";

const trustIcons = [
  (
    <svg key="shield" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  (
    <svg key="star" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  (
    <svg key="badge" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
];

export default function TrustBar({ t }: { t: Translations }) {
  return (
    <section className="border-y border-light-teal bg-white">
      <div className="mx-auto max-w-container px-5 py-4 sm:px-gutter sm:py-5">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-0">
          {/* Partner logos */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <Image
              src="/images/timedi.png"
              alt="TI-Medi"
              width={267}
              height={189}
              className="w-[96px] h-auto object-contain"
            />
            <span className="w-px h-5 bg-light-teal" />
            <Image
              src="/images/jvm%20h.png"
              alt="JVM"
              width={280}
              height={180}
              className="w-[76px] h-auto object-contain"
            />
            <span className="w-px h-5 bg-light-teal" />
            <Image
              src="/images/studex.png"
              alt="Studex — Partenaire officiel"
              width={475}
              height={106}
              className="w-[100px] h-auto object-contain"
            />
          </div>

          {/* Trust items */}
          <div className="grid w-full grid-cols-3 gap-1 sm:contents">
          {t.home.trust.map((label, i) => (
            <div key={i} className="flex min-w-0 flex-col items-center gap-1.5 text-center sm:flex-row sm:gap-2.5 sm:text-left">
              <span className="hidden sm:block w-px h-5 bg-light-teal mx-6" />
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-light-teal text-primary-teal flex-shrink-0">
                {trustIcons[i]}
              </span>
              <span className="text-[11px] font-semibold leading-tight text-dark-text sm:text-sm sm:font-medium sm:whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
