import type { Locale } from "./config";
import fr from "@/locales/fr.json";
import en from "@/locales/en.json";

const dictionaries = { fr, en } as const;

export function getTranslations(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.fr;
}

export type Translations = ReturnType<typeof getTranslations>;
