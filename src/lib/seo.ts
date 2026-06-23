import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export const SITE_URL = "https://medimesk.ma";
export const SITE_NAME = "MediMesk";
export const DEFAULT_OG_IMAGE = "/images/logo.webp";

type SeoMetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
};

function normalizePath(path = "") {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${normalizePath(path)}`;
}

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function alternateLanguages(path = "") {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localizedPath(locale, path)])
  );

  return {
    ...languages,
    "x-default": localizedPath(defaultLocale, path),
  };
}

export function createSeoMetadata({
  locale,
  path = "",
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SeoMetadataInput): Metadata {
  const pathname = localizedPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_MA" : "en_US",
      alternateLocale: locale === "fr" ? ["en_US"] : ["fr_MA"],
      siteName: SITE_NAME,
      title,
      description,
      url: pathname,
      images: [
        {
          url: image,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}
