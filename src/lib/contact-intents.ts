import type { Locale } from "@/i18n/config";

export type ContactIntent =
  | "contact"
  | "project"
  | "demo"
  | "free-demo"
  | "quote"
  | "dual-blist-demo"
  | "dual-blist-sheet"
  | "rdc45-demo"
  | "rdc45-sheet"
  | "rdc45-spec"
  | "rdc45-potential"
  | "pda-auto-range"
  | "pda-auto-atdps"
  | "pda-auto-menith"
  | "pda-auto-vizen"
  | "pda-auto-wizer"
  | "accessories-range"
  | "accessories-advice"
  | "studex-presentation"
  | "studex-callback";

type ContactTemplate = {
  subject: string;
  message: string;
};

const subjects = {
  fr: {
    demo: "Demande de démo",
    quote: "Demande de devis",
    support: "Support",
    other: "Autre",
  },
  en: {
    demo: "Demo Request",
    quote: "Quote Request",
    support: "Support",
    other: "Other",
  },
} as const;

const templates: Record<Locale, Record<ContactIntent, ContactTemplate>> = {
  fr: {
    contact: {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite prendre contact avec l'équipe MediMesk.\n\nMerci de me recontacter afin d'échanger sur ma demande.\n\nCordialement,",
    },
    project: {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite échanger avec vous au sujet d'un projet pour ma pharmacie ou mon établissement.\n\nPouvez-vous me recontacter afin d'en discuter ?\n\nCordialement,",
    },
    demo: {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une démonstration d'une solution MediMesk.\n\nPouvez-vous me recontacter pour convenir d'un créneau ?\n\nCordialement,",
    },
    "free-demo": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une démonstration gratuite d'une solution MediMesk.\n\nPouvez-vous me recontacter pour organiser la présentation ?\n\nCordialement,",
    },
    quote: {
      subject: subjects.fr.quote,
      message: "Bonjour,\n\nJe souhaite obtenir un devis personnalisé pour une solution MediMesk.\n\nPouvez-vous me recontacter avec les informations nécessaires ?\n\nCordialement,",
    },
    "dual-blist-demo": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une démonstration de la solution Dual Blist pour la PDA.\n\nPouvez-vous me recontacter pour organiser une présentation ?\n\nCordialement,",
    },
    "dual-blist-sheet": {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite recevoir la fiche produit de la solution Dual Blist.\n\nPouvez-vous me l'envoyer et me recontacter si besoin ?\n\nCordialement,",
    },
    "rdc45-demo": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une démonstration du RDC 45.\n\nPouvez-vous me recontacter pour organiser une présentation ?\n\nCordialement,",
    },
    "rdc45-sheet": {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite recevoir la fiche produit du RDC 45.\n\nPouvez-vous me l'envoyer et me recontacter si besoin ?\n\nCordialement,",
    },
    "rdc45-spec": {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite recevoir la fiche technique du RDC 45.\n\nPouvez-vous me l'envoyer et me recontacter si besoin ?\n\nCordialement,",
    },
    "rdc45-potential": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite évaluer le potentiel PDA de ma pharmacie avec le RDC 45.\n\nPouvez-vous me recontacter pour analyser mon besoin ?\n\nCordialement,",
    },
    "pda-auto-range": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite recevoir une présentation des machines JVM pour la PDA automatisée en clinique ou hôpital.\n\nPouvez-vous me recontacter pour échanger sur mon établissement ?\n\nCordialement,",
    },
    "pda-auto-atdps": {
      subject: subjects.fr.quote,
      message: "Bonjour,\n\nJe souhaite obtenir un devis pour la machine ATDPS.\n\nPouvez-vous me recontacter afin d'évaluer les besoins de mon établissement ?\n\nCordialement,",
    },
    "pda-auto-menith": {
      subject: subjects.fr.quote,
      message: "Bonjour,\n\nJe souhaite obtenir un devis pour la solution MENITH.\n\nPouvez-vous me recontacter afin d'évaluer les besoins de mon établissement ?\n\nCordialement,",
    },
    "pda-auto-vizen": {
      subject: subjects.fr.quote,
      message: "Bonjour,\n\nJe souhaite obtenir un devis pour la solution VIZEN.\n\nPouvez-vous me recontacter afin d'évaluer les besoins de mon établissement ?\n\nCordialement,",
    },
    "pda-auto-wizer": {
      subject: subjects.fr.quote,
      message: "Bonjour,\n\nJe souhaite obtenir un devis pour la solution WIZER.\n\nPouvez-vous me recontacter afin d'évaluer les besoins de mon établissement ?\n\nCordialement,",
    },
    "accessories-range": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une présentation de la gamme d'appareils de contrôle et accessoires PDA.\n\nPouvez-vous me recontacter pour échanger sur mon installation ?\n\nCordialement,",
    },
    "accessories-advice": {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite être conseillé par MediMesk sur les appareils de contrôle et accessoires PDA adaptés à mon installation.\n\nPouvez-vous me recontacter ?\n\nCordialement,",
    },
    "studex-presentation": {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une présentation STUDEX pour mettre en place un service de perçage professionnel.\n\nPouvez-vous me recontacter ?\n\nCordialement,",
    },
    "studex-callback": {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite être rappelé par MediMesk au sujet de l'offre Advanced Piercing avec STUDEX.\n\nMerci de me recontacter.\n\nCordialement,",
    },
  },
  en: {
    contact: {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to get in touch with the MediMesk team.\n\nPlease contact me so we can discuss my request.\n\nBest regards,",
    },
    project: {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to discuss a project for my pharmacy or facility.\n\nCould you please contact me so we can talk about it?\n\nBest regards,",
    },
    demo: {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a demonstration of a MediMesk solution.\n\nCould you please contact me to schedule a time?\n\nBest regards,",
    },
    "free-demo": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a free demonstration of a MediMesk solution.\n\nCould you please contact me to arrange the presentation?\n\nBest regards,",
    },
    quote: {
      subject: subjects.en.quote,
      message: "Hello,\n\nI would like to receive a personalized quote for a MediMesk solution.\n\nCould you please contact me with the required information?\n\nBest regards,",
    },
    "dual-blist-demo": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a demonstration of the Dual Blist PDA solution.\n\nCould you please contact me to arrange a presentation?\n\nBest regards,",
    },
    "dual-blist-sheet": {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to receive the Dual Blist product sheet.\n\nCould you please send it to me and contact me if needed?\n\nBest regards,",
    },
    "rdc45-demo": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a demonstration of the RDC 45.\n\nCould you please contact me to arrange a presentation?\n\nBest regards,",
    },
    "rdc45-sheet": {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to receive the RDC 45 product sheet.\n\nCould you please send it to me and contact me if needed?\n\nBest regards,",
    },
    "rdc45-spec": {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to receive the RDC 45 technical data sheet.\n\nCould you please send it to me and contact me if needed?\n\nBest regards,",
    },
    "rdc45-potential": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to assess the PDA potential of my pharmacy with the RDC 45.\n\nCould you please contact me to review my needs?\n\nBest regards,",
    },
    "pda-auto-range": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to receive a presentation of the JVM machines for automated PDA in clinics or hospitals.\n\nCould you please contact me to discuss my facility?\n\nBest regards,",
    },
    "pda-auto-atdps": {
      subject: subjects.en.quote,
      message: "Hello,\n\nI would like to receive a quote for the ATDPS machine.\n\nCould you please contact me to assess my facility's needs?\n\nBest regards,",
    },
    "pda-auto-menith": {
      subject: subjects.en.quote,
      message: "Hello,\n\nI would like to receive a quote for the MENITH solution.\n\nCould you please contact me to assess my facility's needs?\n\nBest regards,",
    },
    "pda-auto-vizen": {
      subject: subjects.en.quote,
      message: "Hello,\n\nI would like to receive a quote for the VIZEN solution.\n\nCould you please contact me to assess my facility's needs?\n\nBest regards,",
    },
    "pda-auto-wizer": {
      subject: subjects.en.quote,
      message: "Hello,\n\nI would like to receive a quote for the WIZER solution.\n\nCould you please contact me to assess my facility's needs?\n\nBest regards,",
    },
    "accessories-range": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a presentation of the PDA control devices and accessories range.\n\nCould you please contact me to discuss my installation?\n\nBest regards,",
    },
    "accessories-advice": {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like advice from MediMesk on the PDA control devices and accessories best suited to my installation.\n\nCould you please contact me?\n\nBest regards,",
    },
    "studex-presentation": {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a STUDEX presentation for setting up a professional piercing service.\n\nCould you please contact me?\n\nBest regards,",
    },
    "studex-callback": {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to be called back by MediMesk about the Advanced Piercing offer with STUDEX.\n\nPlease contact me.\n\nBest regards,",
    },
  },
};

const subjectTemplates: Record<Locale, Record<string, ContactTemplate>> = {
  fr: {
    [subjects.fr.demo]: {
      subject: subjects.fr.demo,
      message: "Bonjour,\n\nJe souhaite demander une démonstration d'une solution MediMesk.\n\nPouvez-vous me recontacter pour convenir d'un créneau ?\n\nCordialement,",
    },
    [subjects.fr.quote]: {
      subject: subjects.fr.quote,
      message: "Bonjour,\n\nJe souhaite obtenir un devis personnalisé pour une solution MediMesk.\n\nPouvez-vous me recontacter avec les informations nécessaires ?\n\nCordialement,",
    },
    [subjects.fr.support]: {
      subject: subjects.fr.support,
      message: "Bonjour,\n\nJe souhaite contacter le support MediMesk au sujet d'une question ou d'un besoin d'assistance.\n\nPouvez-vous me recontacter ?\n\nCordialement,",
    },
    [subjects.fr.other]: {
      subject: subjects.fr.other,
      message: "Bonjour,\n\nJe souhaite prendre contact avec l'équipe MediMesk.\n\nMerci de me recontacter afin d'échanger sur ma demande.\n\nCordialement,",
    },
  },
  en: {
    [subjects.en.demo]: {
      subject: subjects.en.demo,
      message: "Hello,\n\nI would like to request a demonstration of a MediMesk solution.\n\nCould you please contact me to schedule a time?\n\nBest regards,",
    },
    [subjects.en.quote]: {
      subject: subjects.en.quote,
      message: "Hello,\n\nI would like to receive a personalized quote for a MediMesk solution.\n\nCould you please contact me with the required information?\n\nBest regards,",
    },
    [subjects.en.support]: {
      subject: subjects.en.support,
      message: "Hello,\n\nI would like to contact MediMesk support about a question or assistance request.\n\nCould you please contact me?\n\nBest regards,",
    },
    [subjects.en.other]: {
      subject: subjects.en.other,
      message: "Hello,\n\nI would like to get in touch with the MediMesk team.\n\nPlease contact me so we can discuss my request.\n\nBest regards,",
    },
  },
};

const knownMessages: Record<Locale, Set<string>> = {
  fr: new Set([
    ...Object.values(templates.fr).map((template) => template.message),
    ...Object.values(subjectTemplates.fr).map((template) => template.message),
  ]),
  en: new Set([
    ...Object.values(templates.en).map((template) => template.message),
    ...Object.values(subjectTemplates.en).map((template) => template.message),
  ]),
};

export function contactHref(locale: Locale | string, intent: ContactIntent) {
  return `/${locale}/contact?intent=${intent}`;
}

export function getContactIntentTemplate(locale: Locale, intent: string | null) {
  if (!intent || !(intent in templates[locale])) return null;
  return templates[locale][intent as ContactIntent];
}

export function getContactSubjectTemplate(locale: Locale, subject: string | null) {
  if (!subject) return null;
  return subjectTemplates[locale][subject] ?? null;
}

export function isContactTemplateMessage(locale: Locale, message: string) {
  return knownMessages[locale].has(message);
}
