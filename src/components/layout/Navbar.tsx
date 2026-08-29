"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { Translations } from "@/i18n/useTranslations";
import { contactHref } from "@/lib/contact-intents";
import { getLocaleSwitchPath } from "@/lib/locale-path";

interface NavbarProps {
  locale: string;
  t: Translations;
}

const productsDropdownMeta: { href: string; subHref?: string }[] = [
  { href: "/solutions/pda-dual-blist" },
  { href: "/solutions/pda-rdc45" },
  { href: "/solutions/pda-automatique" },
  { href: "/solutions/pda-accessoires" },
  { href: "/solutions/studex-system75" },
  { href: "/solutions/pda-venalink" },
];

export default function Navbar({ locale, t }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();
  const pathname = usePathname();

  const openSolutions = useCallback(() => {
    clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  }, []);
  const closeSolutionsSoon = useCallback(() => {
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 200);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { label: t.nav.home, href: `/${locale}` },
    { label: t.nav.solutions, href: `/${locale}/solutions`, hasDropdown: true },
    { label: t.nav.about, href: `/${locale}/a-propos` },
    { label: t.nav.support, href: `/${locale}/support` },
    { label: t.nav.contact, href: contactHref(locale, "contact") },
  ];

  const isActive = (href: string) => {
    const path = href.split("?")[0];
    return pathname === path || (path !== `/${locale}` && pathname.startsWith(path));
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled
            ? "border-light-teal/80 shadow-md"
            : "border-light-teal"
        }`}
      >
        <nav className="mx-auto flex max-w-container items-center justify-between px-gutter h-[72px] lg:h-20">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="relative z-50 flex items-center gap-2"
          >
            <Image
              src="/images/logo.webp"
              alt="MediMesk"
              width={609}
              height={662}
              className="h-12 w-auto lg:h-14"
              priority
            />
            <span className="flex flex-col gap-0.5">
              <span className="relative block h-[22px] w-[140px] overflow-hidden lg:h-[28px] lg:w-[180px]">
                <Image
                  src="/images/text logo.webp"
                  alt=""
                  width={6250}
                  height={4018}
                  className="absolute -left-[19px] -top-[45px] h-auto w-[176px] max-w-none lg:-left-[24px] lg:-top-[58px] lg:w-[226px]"
                  priority
                />
              </span>
              <span className="relative block h-[9px] w-[140px] overflow-hidden lg:h-[11px] lg:w-[180px]">
                <Image
                  src="/images/Trust%20in%20every%20DOSE.webp"
                  alt="Trust in every dose"
                  width={1920}
                  height={1080}
                  className="absolute -left-[8px] -top-[39px] h-auto w-[156px] max-w-none lg:-left-[10px] lg:-top-[50px] lg:w-[198px]"
                  priority
                />
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && openSolutions()}
                onMouseLeave={() => link.hasDropdown && closeSolutionsSoon()}
              >
                <Link
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    isActive(link.href)
                      ? "text-primary-teal"
                      : "text-dark-text hover:text-primary-teal hover:bg-light-teal/50"
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      className={`inline-block ml-1 w-3.5 h-3.5 transition-transform duration-200 ${
                        solutionsOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary-teal rounded-full" />
                  )}
                </Link>

                {/* Solutions Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                      solutionsOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <ul className="w-[23rem] bg-white rounded-xl shadow-lg border border-light-teal py-2">
                      {t.products_dropdown.map((item, i) => {
                        const meta = productsDropdownMeta[i];
                        const href = `/${locale}${meta.href}`;
                        return (
                          <li key={meta.href}>
                            <Link
                              href={href}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                isActive(href)
                                  ? "text-primary-teal bg-light-teal/50"
                                  : "text-dark-text hover:bg-light-teal hover:text-primary-teal"
                              }`}
                            >
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-light-teal text-primary-teal">
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                              </span>
                              {item.label}
                            </Link>
                            {item.sub && meta.subHref && (
                              <Link
                                href={`/${locale}${meta.subHref}`}
                                className="flex items-center gap-2 pl-14 pr-4 py-1.5 text-xs text-dark-text/70 hover:text-primary-teal hover:bg-light-teal/60 transition-colors"
                              >
                                <span aria-hidden>&#8627;</span>
                                {item.sub}
                              </Link>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right side: Language toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-lg border border-light-teal overflow-hidden text-sm">
              <Link
                href={getLocaleSwitchPath(pathname, locale, "fr")}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  locale === "fr"
                    ? "bg-primary-teal text-white"
                    : "text-dark-text/60 hover:bg-light-teal hover:text-dark-text"
                }`}
              >
                {t.lang.fr}
              </Link>
              <Link
                href={getLocaleSwitchPath(pathname, locale, "en")}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  locale === "en"
                    ? "bg-primary-teal text-white"
                    : "text-dark-text/60 hover:bg-light-teal hover:text-dark-text"
                }`}
              >
                {t.lang.en}
              </Link>
            </div>

            {/* CTA Button */}
            <Link
              href={contactHref(locale, "project")}
              className="bg-cta-yellow text-dark-text font-semibold text-sm px-5 py-2.5 rounded-lg hover:shadow-md hover:brightness-95 active:scale-[0.98] transition-all"
            >
              {t.cta.pharmacy_support}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="relative z-50 lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                mobileOpen
                  ? "rotate-45 translate-y-[4px] bg-dark-text"
                  : "bg-dark-text"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-dark-text transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[4px] bg-dark-text"
                  : "bg-dark-text"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-dark-text/20 backdrop-blur-sm"
          onClick={closeMobile}
        />

        {/* Panel */}
        <div
          className={`absolute inset-x-0 top-0 bg-white pt-20 pb-8 px-gutter shadow-2xl transition-transform duration-300 max-h-screen overflow-y-auto ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center justify-between py-3.5 text-lg font-medium transition-colors border-b border-section-bg ${
                    isActive(link.href)
                      ? "text-primary-teal"
                      : "text-dark-text hover:text-primary-teal"
                  }`}
                  onClick={closeMobile}
                >
                  {link.label}
                  {!link.hasDropdown && (
                    <svg className="w-4 h-4 text-dark-text/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </Link>

                {/* Mobile Products sub-links */}
                {link.hasDropdown && (
                  <div className="border-b border-section-bg">
                    {t.products_dropdown.map((item, i) => {
                      const meta = productsDropdownMeta[i];
                      const href = `/${locale}${meta.href}`;
                      return (
                        <div key={meta.href}>
                          <Link
                            href={href}
                            className={`flex items-center gap-3 py-3 pl-4 text-base transition-colors ${
                              isActive(href)
                                ? "text-primary-teal"
                                : "text-dark-text/70 hover:text-primary-teal"
                            }`}
                            onClick={closeMobile}
                          >
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-light-teal text-primary-teal">
                              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                              </svg>
                            </span>
                            <span className="leading-snug">{item.label}</span>
                          </Link>
                          {item.sub && meta.subHref && (
                            <Link
                              href={`/${locale}${meta.subHref}`}
                              className="flex items-center gap-2 py-2 pl-[3.25rem] text-sm text-dark-text/50 hover:text-primary-teal transition-colors"
                              onClick={closeMobile}
                            >
                              <span className="text-primary-teal/60">&#8627;</span>
                              <span className="leading-snug">{item.sub}</span>
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile bottom actions */}
          <div className="mt-8 space-y-4">
            {/* Language Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-dark-text/50 mr-2">{t.lang.label}</span>
              <Link
                href={getLocaleSwitchPath(pathname, locale, "fr")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  locale === "fr"
                    ? "bg-primary-teal text-white"
                    : "bg-section-bg text-dark-text"
                }`}
              >
                {t.lang.fr}
              </Link>
              <Link
                href={getLocaleSwitchPath(pathname, locale, "en")}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  locale === "en"
                    ? "bg-primary-teal text-white"
                    : "bg-section-bg text-dark-text"
                }`}
              >
                {t.lang.en}
              </Link>
            </div>

            {/* CTA */}
            <Link
              href={contactHref(locale, "demo")}
              className="block w-full bg-cta-yellow text-dark-text font-semibold text-center py-3.5 rounded-lg hover:brightness-95 transition-all"
              onClick={closeMobile}
            >
              {t.cta.demo}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
