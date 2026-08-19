import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/config";
import { alternateLanguages, localizedPath, SITE_URL } from "@/lib/seo";

const LAST_MODIFIED = "2026-08-19";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/a-propos",
    "/contact",
    "/support",
    "/solutions",
    "/solutions/pda-dual-blist",
    "/solutions/pda-rdc45",
    "/solutions/pda-automatique",
    "/solutions/pda-accessoires",
    "/solutions/studex-system75",
    "/solutions/pda-venalink",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${SITE_URL}${localizedPath(locale as Locale, route)}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.startsWith("/solutions/") ? 0.8 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(alternateLanguages(route)).map(([language, path]) => [
              language,
              `${SITE_URL}${path}`,
            ])
          ),
        },
      });
    }
  }

  return entries;
}
