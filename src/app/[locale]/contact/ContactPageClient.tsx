"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm, type UseFormGetValues, type UseFormSetValue, type UseFormWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { SectionWrapper } from "@/components/ui";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import {
  getContactIntentTemplate,
  getContactSubjectTemplate,
  isContactTemplateMessage,
} from "@/lib/contact-intents";

/* ── Contact info icons ──────────────────────────────── */
const contactInfoIcons = [
  <svg key="0" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  <svg key="1" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="2" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
];

/* ── Page ─────────────────────────────────────────────── */
export default function ContactPage({
  locale,
}: {
  locale: Locale;
}) {
  const t = getTranslations(locale);
  const c = t.contact;

  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactSchema(locale)),
    defaultValues: {
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Error");
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : c.form.error_unknown,
      );
    }
  };

  const contactInfoItems = [
    { label: c.info.phone_label, value: c.info.phone },
    { label: c.info.email_label, value: c.info.email },
    { label: c.info.address_label, value: c.info.address },
  ];

  return (
    <>
      {/* ─── Hero ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#063f3c]">
        <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-accent-teal/15 md:hidden" />
        <div className="relative mx-auto max-w-container px-5 py-10 text-left sm:px-gutter md:py-20 md:text-center">
          <h1 className="font-sans text-[2.35rem] leading-[1.03] tracking-[-0.045em] text-white md:font-playfair md:text-h1">{c.hero.title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 md:mx-auto md:text-base md:leading-relaxed">
            {c.hero.subtitle}
          </p>
        </div>
      </section>

      {/* ─── Content ────────────────────────────────── */}
      <SectionWrapper className="bg-[#f3f7f6] md:bg-white">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-5 lg:gap-16">
          {/* ── Left column: info + map ── */}
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-2 lg:space-y-8">
            <div>
              <h2 className="text-h3 text-dark-text">{c.info.title}</h2>
              <p className="mt-2 text-sm text-dark-text/60 leading-relaxed">
                {c.info.subtitle}
              </p>
            </div>

            <ul className="grid gap-2.5 sm:space-y-5">
              {contactInfoItems.map((item, i) => (
                <li key={item.label} className="flex items-start gap-3 rounded-2xl border border-light-teal bg-white p-4 sm:gap-4 sm:border-0 sm:p-0">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-light-teal text-primary-teal">
                    {contactInfoIcons[i]}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-dark-text">{item.label}</p>
                    <p className="text-sm text-dark-text/60">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Google Maps placeholder */}
            <div className="overflow-hidden rounded-2xl border border-light-teal bg-section-bg">
              <div className="flex h-40 items-center justify-center text-dark-text/30 md:h-56">
                <div className="text-center">
                  <svg className="mx-auto h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="mt-2 text-sm font-medium">{c.info.map_title}</p>
                  <p className="text-xs">{c.info.map_subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="rounded-[1.5rem] border border-light-teal bg-white p-5 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-light-teal text-primary-teal">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-dark-text font-sans">
                    {c.form.success_title}
                  </h3>
                  <p className="mt-2 text-sm text-dark-text/60 max-w-sm">
                    {c.form.success_message}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-primary-teal hover:underline"
                  >
                    {c.form.success_reset}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <Suspense fallback={null}>
                    <ContactPrefill
                      locale={locale}
                      getValues={getValues}
                      setValue={setValue}
                      watch={watch}
                    />
                  </Suspense>
                  <h2 className="text-h3 text-dark-text">{c.form.title}</h2>
                  <p className="mt-1 text-sm text-dark-text/50">{c.form.required_note}</p>

                  {serverError && (
                    <div className="mt-4 rounded-lg bg-error-red/10 p-3 text-sm text-error-red">
                      {serverError}
                    </div>
                  )}

                  <div className="mt-6 space-y-4 sm:space-y-5">
                    {/* Nom complet */}
                    <Field label={c.form.full_name} error={errors.fullName?.message}>
                      <input type="text" placeholder={c.form.full_name_placeholder} {...register("fullName")} className={inputClass(!!errors.fullName)} />
                    </Field>

                    {/* Pharmacie */}
                    <Field label={c.form.pharmacy_name} error={errors.pharmacyName?.message}>
                      <input type="text" placeholder={c.form.pharmacy_placeholder} {...register("pharmacyName")} className={inputClass(!!errors.pharmacyName)} />
                    </Field>

                    {/* Email + Téléphone */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field label={c.form.email} error={errors.email?.message}>
                        <input type="email" placeholder={c.form.email_placeholder} {...register("email")} className={inputClass(!!errors.email)} />
                      </Field>
                      <Field label={c.form.phone} error={errors.phone?.message}>
                        <input type="tel" placeholder={c.form.phone_placeholder} {...register("phone")} className={inputClass(!!errors.phone)} />
                      </Field>
                    </div>

                    {/* Sujet */}
                    <Field label={c.form.subject} error={errors.subject?.message}>
                      <select {...register("subject")} className={inputClass(!!errors.subject)}>
                        <option value="" disabled>{c.form.subject_placeholder}</option>
                        {c.form.subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                    {/* Message */}
                    <Field label={c.form.message} error={errors.message?.message}>
                      <textarea rows={4} placeholder={c.form.message_placeholder} {...register("message")} className={`${inputClass(!!errors.message)} resize-y`} />
                    </Field>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-7 min-h-12 w-full rounded-xl bg-cta-yellow px-6 py-3 text-sm font-bold text-dark-text transition-colors hover:bg-cta-yellow/90 disabled:opacity-50 disabled:cursor-not-allowed sm:mt-8 sm:rounded-lg"
                  >
                    {isSubmitting ? c.form.submitting : c.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function ContactPrefill({
  locale,
  getValues,
  setValue,
  watch,
}: {
  locale: Locale;
  getValues: UseFormGetValues<ContactFormData>;
  setValue: UseFormSetValue<ContactFormData>;
  watch: UseFormWatch<ContactFormData>;
}) {
  const searchParams = useSearchParams();
  const subject = watch("subject");
  const intentPrefillRef = useRef<ContactTemplateSnapshot | null>(null);

  useEffect(() => {
    const contactTemplate = getContactIntentTemplate(locale, searchParams.get("intent"));
    if (!contactTemplate) return;
    intentPrefillRef.current = contactTemplate;

    if (!getValues("subject")) {
      setValue("subject", contactTemplate.subject);
    }

    if (!getValues("message")) {
      setValue("message", contactTemplate.message);
    }
  }, [getValues, locale, searchParams, setValue]);

  useEffect(() => {
    const subjectTemplate = getContactSubjectTemplate(locale, subject);
    if (!subjectTemplate) return;

    const currentMessage = getValues("message");
    const intentPrefill = intentPrefillRef.current;
    if (
      intentPrefill &&
      subject === intentPrefill.subject &&
      currentMessage === intentPrefill.message
    ) {
      return;
    }

    if (!currentMessage || isContactTemplateMessage(locale, currentMessage)) {
      setValue("message", subjectTemplate.message);
    }
  }, [getValues, locale, setValue, subject]);

  return null;
}

type ContactTemplateSnapshot = {
  subject: string;
  message: string;
};

/* ── Field wrapper ───────────────────────────────────── */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark-text">
        {label} <span className="text-error-red">*</span>
      </label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-sm text-error-red">{error}</p>}
    </div>
  );
}

/* ── Input class helper ──────────────────────────────── */
function inputClass(hasError: boolean) {
  return `block w-full rounded-lg border px-3.5 py-2.5 text-sm text-dark-text placeholder:text-dark-text/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-teal/30 focus:border-primary-teal ${
    hasError
      ? "border-error-red focus:ring-error-red/30 focus:border-error-red"
      : "border-dark-text/20"
  }`;
}
