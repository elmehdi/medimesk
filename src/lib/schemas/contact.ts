import { z } from "zod";
import type { Locale } from "@/i18n/config";

export function createContactSchema(locale: Locale) {
  const en = locale === "en";
  return z.object({
  fullName: z
    .string()
    .min(2, en ? "Full name must contain at least 2 characters." : "Le nom complet doit contenir au moins 2 caractères."),
  pharmacyName: z
    .string()
    .min(2, en ? "Organization name must contain at least 2 characters." : "Le nom de la pharmacie doit contenir au moins 2 caractères."),
  email: z
    .string()
    .email(en ? "Please enter a valid email address." : "Veuillez saisir une adresse email valide."),
  phone: z
    .string()
    .min(6, en ? "Please enter a valid phone number." : "Veuillez saisir un numéro de téléphone valide.")
    .regex(/^[+\d\s()-]+$/, en ? "The phone number contains invalid characters." : "Le numéro de téléphone contient des caractères invalides."),
  subject: z.string().min(1, en ? "Please select a subject." : "Veuillez sélectionner un sujet."),
  message: z
    .string()
    .min(10, en ? "Message must contain at least 10 characters." : "Le message doit contenir au moins 10 caractères."),
});
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
