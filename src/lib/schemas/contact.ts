import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Le nom complet doit contenir au moins 2 caractères."),
  pharmacyName: z
    .string()
    .min(2, "Le nom de la pharmacie doit contenir au moins 2 caractères."),
  email: z
    .string()
    .email("Veuillez saisir une adresse email valide."),
  phone: z
    .string()
    .min(6, "Veuillez saisir un numéro de téléphone valide.")
    .regex(/^[+\d\s()-]+$/, "Le numéro de téléphone contient des caractères invalides."),
  subject: z.enum(
    ["Demande de démo", "Demande de devis", "Support", "Autre"],
    { message: "Veuillez sélectionner un sujet." },
  ),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères."),
  consent: z
    .literal(true, {
      message: "Vous devez accepter la politique de confidentialité.",
    }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
