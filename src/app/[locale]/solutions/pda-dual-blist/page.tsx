import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import { Badge, Button, ProductSectionNav, SectionWrapper } from "@/components/ui";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const p = getTranslations(params.locale).products.pdaDualBlist;
  return { title: p.meta.title, description: p.meta.description };
}

function CheckList({
  items,
  large = false,
}: {
  items: readonly string[];
  large?: boolean;
}) {
  return (
    <ul className={`${large ? "mt-6 space-y-4" : "mt-5 space-y-3"}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start ${large ? "gap-4 text-base md:text-lg" : "gap-3 text-sm"} leading-relaxed text-dark-text/70`}>
          <span className={`mt-0.5 flex flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal ${large ? "h-7 w-7" : "h-5 w-5"}`}>
            <svg className={large ? "h-4 w-4" : "h-3 w-3"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PdaDualBlistPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const p = t.products.pdaDualBlist;

  return (
    <>
      <div className="border-b border-light-teal bg-section-bg">
        <nav className="mx-auto max-w-container px-gutter py-3" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-dark-text/50">
            <li><Link href={`/${locale}`} className="hover:text-primary-teal">{t.common.breadcrumb_home}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href={`/${locale}/solutions`} className="hover:text-primary-teal">{t.common.breadcrumb_solutions}</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-dark-text">{p.breadcrumb}</li>
          </ol>
        </nav>
      </div>

      <ProductSectionNav
        label={locale === "fr" ? "Sommaire" : "On this page"}
        items={locale === "fr" ? [
          { id: "apercu", label: "Présentation" }, { id: "opportunite", label: "Opportunité PDA" },
          { id: "benefices", label: "Bénéfices" }, { id: "pourquoi-dual-blist", label: "Pourquoi Dual Blist" },
          { id: "fonctionnalites", label: "Fonctionnalités" }, { id: "fonctionnement", label: "Fonctionnement" },
          { id: "accompagnement", label: "Accompagnement" },
        ] : [
          { id: "apercu", label: "Overview" }, { id: "opportunite", label: "PDA opportunity" },
          { id: "benefices", label: "Benefits" }, { id: "pourquoi-dual-blist", label: "Why Dual Blist" },
          { id: "fonctionnalites", label: "Features" }, { id: "fonctionnement", label: "Workflow" },
          { id: "accompagnement", label: "Support" },
        ]}
      />

      {/* Block 1 — Hero */}
      <SectionWrapper id="apercu">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>{p.hero.badge}</Badge>
            <h1 className="mt-4 text-dark-text">{p.hero.title}</h1>
            <div className="mt-6 space-y-4 text-dark-text/70 leading-relaxed">
              {p.hero.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={`/${locale}/contact`}>{p.hero.cta_primary}</Button>
              <Button variant="secondary" href={`/${locale}/contact`}>{p.hero.cta_secondary}</Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-full bg-light-teal/30 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image src="/images/pda-robot.webp" alt={p.hero.image_alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 2 — Opportunity */}
      <SectionWrapper alternate id="opportunite">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-dark-text">{p.opportunity.title}</h2>
            <p className="mt-3 font-semibold text-primary-teal">{p.opportunity.subtitle}</p>
          </div>
          <div className="mt-8 space-y-4 leading-relaxed text-dark-text/70">
            {p.opportunity.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-10 rounded-2xl border border-light-teal bg-white p-7 shadow-sm md:p-10">
            <p className="font-playfair text-2xl font-bold text-dark-text md:text-3xl">{p.opportunity.list_intro}</p>
            <CheckList items={p.opportunity.items} large />
          </div>
          <p className="mt-8 border-l-4 border-primary-teal pl-5 text-lg font-medium leading-relaxed text-dark-text">
            {p.opportunity.conclusion}
          </p>
        </div>
      </SectionWrapper>

      {/* Block 3 — Concrete benefits */}
      <SectionWrapper id="benefices">
        <div className="text-center"><h2 className="text-dark-text">{p.concrete_benefits.title}</h2></div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[p.concrete_benefits.patient, p.concrete_benefits.pharmacy].map((audience) => (
            <article key={audience.title} className="rounded-2xl border border-light-teal bg-white p-7 shadow-sm md:p-9">
              <h3 className="text-dark-text">{audience.title}</h3>
              <p className="mt-4 leading-relaxed text-dark-text/70">{audience.description}</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary-teal">{audience.list_title}</p>
              <CheckList items={audience.items} />
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Block 4 — Why Dual Blist + comparison */}
      <SectionWrapper alternate id="pourquoi-dual-blist">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.why.title}</h2>
          <h3 className="mt-5 font-sans text-xl font-semibold text-primary-teal">{p.why.subtitle}</h3>
          <div className="mt-6 space-y-4 text-left leading-relaxed text-dark-text/70">
            {p.why.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-light-teal bg-white shadow-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h3 className="font-sans text-xl font-semibold text-dark-text">{p.comparison.manual_title}</h3>
              <CheckList items={p.comparison.manual_items} />
            </div>
            <div className="border-t border-light-teal bg-light-teal/35 p-6 md:border-l md:border-t-0 md:p-8">
              <h3 className="font-sans text-xl font-semibold text-primary-teal">{p.comparison.dual_title}</h3>
              <CheckList items={p.comparison.dual_items} />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 5 — Features */}
      <SectionWrapper id="fonctionnalites">
        <div className="mx-auto max-w-3xl text-center"><h2 className="text-dark-text">{p.features.title}</h2></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {p.features.groups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-light-teal p-6 transition-shadow hover:shadow-md">
              <h3 className="font-sans text-lg font-semibold text-dark-text">{group.title}</h3>
              {group.description && <p className="mt-3 text-sm leading-relaxed text-dark-text/65">{group.description}</p>}
              <CheckList items={group.items} />
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Block 6 — Workflow and video */}
      <SectionWrapper alternate id="fonctionnement">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-dark-text">{p.workflow.title}</h2>
          <p className="mt-4 text-lg text-dark-text/70">{p.workflow.subtitle}</p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-light-teal bg-dark-text p-2 shadow-xl">
          <div className="aspect-video overflow-hidden rounded-xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/qIJ05MZyiBs?rel=0"
              title={p.workflow.video_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <ol className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {p.workflow.steps.map((step, i) => (
            <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-teal font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 font-sans text-base font-semibold text-dark-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark-text/65">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Button href={`/${locale}/contact`}>{p.workflow.cta}</Button>
        </div>
      </SectionWrapper>

      {/* Block 7 — MediMesk support */}
      <SectionWrapper id="accompagnement">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-wider text-primary-teal">{p.support.eyebrow}</p>
            <h2 className="mt-3 text-dark-text">{p.support.title}</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-dark-text/70">
              {p.support.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={`/${locale}/contact`}>{p.support.cta_demo}</Button>
              <Button variant="secondary" href={`/${locale}/contact`}>{p.support.cta_quote}</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-light-teal bg-section-bg p-7 shadow-sm md:p-8">
            <CheckList items={p.support.items} />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
