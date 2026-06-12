"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";

/* ── Accordion item ──────────────────────────────────── */
function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-dark-text/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary-teal"
      >
        <span className="text-sm font-semibold text-dark-text sm:text-base">
          {question}
        </span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-primary-teal transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ${
          isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-dark-text/60">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function SupportPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const s = t.support;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* ─── Hero + Search ──────────────────────────── */}
      <section className="bg-primary-teal">
        <div className="mx-auto max-w-container px-gutter py-16 md:py-20 text-center">
          <h1 className="text-white">{s.hero.title}</h1>
          <p className="mt-4 text-white/80 leading-relaxed max-w-xl mx-auto">
            {s.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── FAQ accordion ──────────────────────────── */}
      <SectionWrapper id="faq">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-dark-text">{s.faq.title}</h2>
          <p className="mt-3 text-center text-dark-text/60 text-sm">{s.faq.subtitle}</p>

          <div className="mt-10 rounded-xl border border-light-teal bg-white p-2 sm:p-4 shadow-sm">
            {s.faq.items.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ─── Contact support card ───────────────────── */}
      <SectionWrapper alternate>
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-light-teal bg-white p-8 sm:p-10 text-center shadow-sm">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-light-teal text-primary-teal">
              <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>

            <h2 className="mt-5 text-h3 text-dark-text">{s.contact_card.title}</h2>
            <p className="mt-2 text-sm text-dark-text/60 leading-relaxed max-w-md mx-auto">
              {s.contact_card.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-teal text-primary-teal">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="text-left">
                  <p className="text-xs text-dark-text/50">{s.contact_card.email_label}</p>
                  <p className="text-sm font-medium text-dark-text">{s.contact_card.email}</p>
                </div>
              </div>

              <div className="hidden sm:block h-10 w-px bg-dark-text/10" />

              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-teal text-primary-teal">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div className="text-left">
                  <p className="text-xs text-dark-text/50">{s.contact_card.phone_label}</p>
                  <p className="text-sm font-medium text-dark-text">{s.contact_card.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 rounded-lg bg-cta-yellow px-6 py-3 text-sm font-bold text-dark-text transition-colors hover:bg-cta-yellow/90"
              >
                {s.contact_card.cta}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
