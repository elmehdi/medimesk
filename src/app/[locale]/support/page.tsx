"use client";

import { FormEvent, useState } from "react";
import { SectionWrapper } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import { faqContent } from "@/lib/faq-content";

const newsletter = {
  fr: {
    eyebrow: "Newsletter MediMesk",
    title: "Recevez nos actualités et conseils professionnels",
    subtitle: "Suivez les innovations en PDA, les nouvelles solutions MediMesk et nos conseils pour développer vos services.",
    placeholder: "Votre adresse email professionnelle",
    consent: "J’accepte de recevoir la newsletter MediMesk et peux me désinscrire à tout moment.",
    submit: "S’inscrire à la newsletter",
    submitting: "Inscription…",
    success: "Merci ! Votre inscription à la newsletter est confirmée.",
    error: "L’inscription n’a pas pu être finalisée. Veuillez réessayer.",
  },
  en: {
    eyebrow: "MediMesk Newsletter",
    title: "Receive our professional news and insights",
    subtitle: "Follow PDA innovations, new MediMesk solutions, and advice for developing your services.",
    placeholder: "Your professional email address",
    consent: "I agree to receive the MediMesk newsletter and can unsubscribe at any time.",
    submit: "Subscribe to the newsletter",
    submitting: "Subscribing…",
    success: "Thank you! Your newsletter subscription is confirmed.",
    error: "Your subscription could not be completed. Please try again.",
  },
} as const;

function AccordionItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-2xl border border-light-teal bg-white px-4 shadow-sm sm:rounded-none sm:border-x-0 sm:border-t-0 sm:px-0 sm:shadow-none last:sm:border-b-0">
      <button type="button" onClick={onToggle} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-primary-teal sm:gap-5 sm:py-6">
        <span className="text-sm font-semibold leading-5 text-dark-text sm:text-lg">{question}</span>
        <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal transition-transform ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M12 5v14M5 12h14" /></svg>
        </span>
      </button>
      <div className={`grid transition-all duration-200 sm:duration-300 ${isOpen ? "grid-rows-[1fr] pb-4 sm:pb-6" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="whitespace-pre-line pr-2 text-sm leading-6 text-dark-text/70 sm:pr-10 sm:text-base sm:leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function SupportPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const copy = newsletter[locale];
  const items = faqContent[locale];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) return setStatus("error");
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, website: form.get("website") }),
      });
      if (!response.ok) throw new Error("Subscription failed");
      setStatus("success");
      setEmail("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col">
      {/* Block 1 — Brevo newsletter */}
      <SectionWrapper alternate className="order-2 md:order-1">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.6rem] bg-dark-text p-5 shadow-xl sm:p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-wider text-cta-yellow">{copy.eyebrow}</p>
              <h2 className="mt-3 text-white">{copy.title}</h2>
              <p className="mt-4 leading-relaxed text-white/70">{copy.subtitle}</p>
            </div>
            <form onSubmit={subscribe} className="rounded-2xl bg-white p-4 sm:rounded-xl sm:p-5" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">Email</label>
              <input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder={copy.placeholder} className="w-full rounded-lg border border-dark-text/20 px-4 py-3 text-sm outline-none focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20" />
              <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <label className="mt-4 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-dark-text/65">
                <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} className="mt-0.5 h-4 w-4 rounded border-dark-text/20 text-primary-teal focus:ring-primary-teal" />
                <span>{copy.consent}</span>
              </label>
              <button type="submit" disabled={status === "loading"} className="mt-5 w-full rounded-lg bg-cta-yellow px-5 py-3 text-sm font-bold text-dark-text transition hover:brightness-95 disabled:opacity-60">
                {status === "loading" ? copy.submitting : copy.submit}
              </button>
              {status === "success" && <p role="status" className="mt-3 text-sm font-medium text-primary-teal">{copy.success}</p>}
              {status === "error" && <p role="alert" className="mt-3 text-sm text-error-red">{copy.error}</p>}
            </form>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 2 — Questions and answers */}
      <SectionWrapper id="faq" className="order-1 bg-[#f3f7f6] md:order-2 md:bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-left font-sans text-[1.8rem] font-bold tracking-[-0.035em] text-dark-text sm:text-center sm:font-playfair sm:text-h2">{t.support.faq.title}</h2>
          <p className="mt-3 text-left text-sm leading-6 text-dark-text/60 sm:text-center sm:text-base">{t.support.faq.subtitle}</p>
          <div className="mt-7 space-y-2.5 sm:mt-10 sm:space-y-0 sm:rounded-2xl sm:border sm:border-light-teal sm:bg-white sm:px-8 sm:shadow-sm">
            {items.map((faq, i) => (
              <AccordionItem key={faq.q} question={faq.q} answer={faq.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
