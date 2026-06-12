import Link from "next/link";
import Image from "next/image";
import type { Translations } from "@/i18n/useTranslations";

interface FooterProps {
  locale: string;
  t: Translations;
}

export default function Footer({ locale, t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { label: t.solutions_dropdown.pda, href: `/${locale}/solutions/pda-rdc45` },
    {
      label: t.solutions_dropdown.studex,
      href: `/${locale}/solutions/studex-system75`,
    },
    {
      label: t.solutions_dropdown.equipment,
      href: `/${locale}/solutions/equipement-medical`,
    },
  ];

  const companyLinks = [
    { label: t.nav.about, href: `/${locale}/a-propos` },
    { label: t.footer.faq, href: `/${locale}/support#faq` },
    { label: t.nav.contact, href: `/${locale}/contact` },
  ];

  const legalLinks = [
    { label: t.footer.legal, href: `/${locale}/mentions-legales` },
    { label: t.footer.privacy, href: `/${locale}/politique-confidentialite` },
    { label: t.footer.terms, href: `/${locale}/cgu` },
  ];

  return (
    <footer className="bg-dark-text text-white">
      {/* Main footer grid */}
      <div className="mx-auto max-w-container px-gutter py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/logo.webp"
                alt="MediMesk"
                width={609}
                height={662}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold font-playfair text-white">MediMesk</span>
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {t.footer.tagline}
            </p>
            {/* Social icons */}
            <div className="mt-5 flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/medimesk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-primary-teal transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/medimesk.ma"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-primary-teal transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/17fRgssopR/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 hover:bg-primary-teal transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t.footer.solutions_heading}
            </h4>
            <ul className="mt-4 space-y-3">
              {solutionsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t.footer.company_heading}
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              {t.footer.contact_heading}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>{t.footer.address}</li>
              <li>{t.footer.phone}</li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-primary-teal transition-colors"
                >
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-container px-gutter py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Legal links */}
          <div className="flex flex-wrap gap-4 text-xs text-white/40">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright + language toggle */}
          <div className="flex items-center gap-4 text-xs text-white/40">
            <span>
              © {currentYear} {t.footer.copyright}
            </span>
            <div className="flex items-center gap-1">
              <Link
                href={`/fr${typeof window !== "undefined" ? "" : ""}`}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  locale === "fr"
                    ? "text-primary-teal"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                FR
              </Link>
              <span className="text-white/20">|</span>
              <Link
                href={`/en`}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  locale === "en"
                    ? "text-primary-teal"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
