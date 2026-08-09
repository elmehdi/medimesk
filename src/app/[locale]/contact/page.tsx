import type { Locale } from "@/i18n/config";
import ContactPageClient from "./ContactPageClient";

export default function ContactPage({
  params,
}: {
  params: { locale: Locale };
}) {
  return <ContactPageClient locale={params.locale} />;
}
