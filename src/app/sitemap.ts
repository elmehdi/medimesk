import type { MetadataRoute } from "next";

const BASE_URL = "https://medimesk.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"] as const;

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
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgu",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.startsWith("/solutions/") ? 0.8 : 0.6,
      });
    }
  }

  return entries;
}
