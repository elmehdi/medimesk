"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleSwitchPath } from "@/lib/locale-path";

export default function FooterLocaleSwitch({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1">
      <Link
        href={getLocaleSwitchPath(pathname, locale, "fr")}
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
        href={getLocaleSwitchPath(pathname, locale, "en")}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
          locale === "en"
            ? "text-primary-teal"
            : "text-white/40 hover:text-white/70"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
