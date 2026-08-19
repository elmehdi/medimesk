import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getTranslations } from "@/i18n/useTranslations";
import { Badge, Button, ProductSectionNav, SectionWrapper } from "@/components/ui";
import { createSeoMetadata } from "@/lib/seo";
import { contactHref, type ContactIntent } from "@/lib/contact-intents";
import MobileAutomaticPage from "@/components/mobile/MobileAutomaticPage";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const p = getTranslations(params.locale).hospital;
  return createSeoMetadata({
    locale: params.locale,
    path: "/solutions/pda-automatique",
    title: p.meta.title,
    description: p.meta.description,
    image: "/images/timedi.webp",
    keywords: [
      "PDA automatique Maroc",
      "automated PDA Morocco",
      "PDA automatique Afrique",
      "automated PDA Africa",
      "pharmacie hospitalière Rabat",
      "pharmacie hospitalière Casablanca",
      "hospital pharmacy Rabat",
      "hospital pharmacy Casablanca",
    ],
  });
}

function CheckList({ items, large = false }: { items: readonly string[]; large?: boolean }) {
  return (
    <ul className={large ? "mt-6 space-y-4" : "mt-5 space-y-3"}>
      {items.map((item) => (
        <li key={item} className={`flex items-start leading-relaxed text-dark-text/70 ${large ? "gap-4 text-base" : "gap-3 text-sm"}`}>
          <span className={`mt-0.5 flex flex-shrink-0 items-center justify-center rounded-full bg-light-teal text-primary-teal ${large ? "h-6 w-6" : "h-5 w-5"}`}>
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

type Machine = ReturnType<typeof getTranslations>["hospital"]["machines"][number];

const machineMedia: Record<string, { src: string; fit?: "cover" | "contain"; aspect?: string }> = {
  atdps: {
    src: "/images/Hospital clinic/atpds - reconnaissance des canisters.webp",
    fit: "cover",
    aspect: "aspect-[16/10]",
  },
  menith: {
    src: "/images/Hospital clinic/Menith.webp",
    fit: "contain",
    aspect: "aspect-[4/3]",
  },
  vizen: {
    src: "/images/Hospital clinic/VIZEN-EX-Front.webp",
    fit: "contain",
    aspect: "aspect-[4/3]",
  },
  wizer: {
    src: "/images/Hospital clinic/JVM_WIZER.webp",
    fit: "contain",
    aspect: "aspect-[3/4]",
  },
};

function MachineSection({ machine, locale, alternate }: { machine: Machine; locale: Locale; alternate: boolean }) {
  const media = machineMedia[machine.slug];

  return (
    <SectionWrapper alternate={alternate} id={machine.slug}>
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.36fr_0.64fr]">
        <div className={`relative overflow-hidden rounded-2xl bg-white shadow-lg ${media?.aspect ?? "aspect-[4/3]"}`}>
          {media ? (
            <Image
              src={media.src}
              alt={machine.title}
              fill
              className={media.fit === "contain" ? "object-contain p-5" : "object-cover"}
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
          ) : (
            <div className="grid h-full place-items-center bg-dark-text px-7 py-12 text-center">
              <svg className="h-12 w-12 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M4 7h16M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm2 8h3v6H8zm5 2h5m-5 4h5" /></svg>
            </div>
          )}
        </div>
        <div>
          <Badge>{machine.name}</Badge>
          <h2 className="mt-4 text-dark-text">{machine.title}</h2>
          <p className="mt-4 text-xl font-semibold text-primary-teal">{machine.subtitle}</p>
          <div className="mt-7 space-y-4 leading-relaxed text-dark-text/70">
            {machine.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-light-teal bg-white p-7 shadow-sm md:p-8">
          <h3 className="font-sans text-xl font-semibold text-dark-text">{machine.features_title}</h3>
          <CheckList items={machine.features} />
        </article>
        <article className="rounded-2xl border border-light-teal bg-light-teal/25 p-7 shadow-sm md:p-8">
          <h3 className="font-sans text-xl font-semibold text-dark-text">{machine.benefits_title}</h3>
          <CheckList items={machine.benefits} />
        </article>
      </div>
      <div className="mt-10 text-center"><Button href={contactHref(locale, `pda-auto-${machine.slug}` as ContactIntent)}>{machine.cta}</Button></div>
    </SectionWrapper>
  );
}

export default function PdaAutomatiquePage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const t = getTranslations(locale);
  const p = t.hospital;

  return (
    <>
      <MobileAutomaticPage locale={locale} t={t} />
      <div className="hidden md:block">
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
        items={[
          { id: "apercu", label: locale === "fr" ? "Présentation" : "Overview" },
          { id: "enjeux", label: locale === "fr" ? "Pourquoi automatiser" : "Why automate" },
          { id: "gamme-jvm", label: locale === "fr" ? "Gamme JVM" : "JVM range" },
          { id: "atdps", label: "ATDPS" }, { id: "menith", label: "MENITH" },
          { id: "vizen", label: "VIZEN" }, { id: "wizer", label: "WIZER" },
          { id: "valeur", label: locale === "fr" ? "Valeur ajoutée" : "Added value" },
          { id: "accompagnement", label: locale === "fr" ? "Accompagnement" : "Support" },
        ]}
      />

      {/* Block 1 */}
      <SectionWrapper id="apercu">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Badge>{p.hero.badge}</Badge>
            <h1 className="mt-4 text-dark-text">{p.hero.product_name}</h1>
            <p className="product-value-title mt-4">{p.hero.title}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-dark-text/70">{p.hero.description}</p>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-full bg-light-teal/30 blur-3xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/Hospital clinic/Menith copy.webp"
                alt={p.hero.image_alt}
                fill
                className="object-contain bg-white p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Block 2 */}
      <SectionWrapper alternate id="enjeux">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.why.title}</h2>
          <p className="mt-4 text-xl font-semibold text-primary-teal">{p.why.subtitle}</p>
          <div className="mt-7 space-y-4 text-left leading-relaxed text-dark-text/70">
            {p.why.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-light-teal bg-white p-8 shadow-sm md:p-10">
          <CheckList items={p.why.limitations} large />
        </div>
        <div className="mx-auto mt-8 max-w-4xl space-y-4 leading-relaxed text-dark-text/70">
          {p.why.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </SectionWrapper>

      {/* Block 3 */}
      <SectionWrapper id="gamme-jvm">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-dark-text">{p.range.title}</h2>
          <p className="mt-4 text-xl font-semibold text-primary-teal">{p.range.subtitle}</p>
          <p className="mt-6 text-left leading-relaxed text-dark-text/70">{p.range.description}</p>
        </div>
        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-2xl border border-light-teal shadow-sm">
          <table className="responsive-product-table w-full text-left">
            <thead className="bg-primary-teal text-white">
              <tr><th className="px-5 py-4 md:w-1/4">{p.range.machine_heading}</th><th className="px-5 py-4">{p.range.role_heading}</th></tr>
            </thead>
            <tbody>
              {p.range.rows.map((row, i) => (
                <tr key={row.machine} className={i % 2 === 0 ? "bg-white" : "bg-section-bg"}>
                  <td data-label={p.range.machine_heading} className="px-5 py-4 font-semibold text-dark-text">{row.machine}</td>
                  <td data-label={p.range.role_heading} className="px-5 py-4 text-dark-text/70">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-8 max-w-4xl leading-relaxed text-dark-text/70">{p.range.conclusion}</p>
        <div className="mt-9 text-center"><Button href={contactHref(locale, "pda-auto-range")}>{p.range.cta}</Button></div>
      </SectionWrapper>

      {p.machines.map((machine, i) => <MachineSection key={machine.slug} machine={machine} locale={locale} alternate={i % 2 === 0} />)}

      {/* Block 8 */}
      <SectionWrapper id="valeur">
        <div className="text-center"><h2 className="text-dark-text">{p.value.title}</h2></div>
        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {p.value.audiences.map((audience) => (
            <article key={audience.title} className="rounded-2xl border border-light-teal p-7 shadow-sm">
              <h3 className="font-sans text-xl font-semibold text-dark-text">{audience.title}</h3>
              <CheckList items={audience.items} />
            </article>
          ))}
        </div>
      </SectionWrapper>

      {/* Block 9 */}
      <SectionWrapper alternate id="accompagnement">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-wider text-primary-teal">{p.support.eyebrow}</p>
            <h2 className="mt-3 text-dark-text">{p.support.title}</h2>
            <p className="mt-4 text-xl font-semibold text-primary-teal">{p.support.subtitle}</p>
            <div className="mt-6 space-y-4 leading-relaxed text-dark-text/70">
              {p.support.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <div className="rounded-2xl border border-light-teal bg-white p-7 shadow-sm md:p-8">
            <CheckList items={p.support.items} />
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-5xl border-l-4 border-primary-teal pl-5 leading-relaxed text-dark-text/75">{p.support.disclaimer}</p>
      </SectionWrapper>
      </div>
    </>
  );
}
