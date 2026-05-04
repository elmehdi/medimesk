import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body: unknown = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation échouée.", details: result.error.flatten() },
        { status: 400 },
      );
    }

    const { fullName, pharmacyName, email, phone, subject, message } =
      result.data;

    await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "MediMesk <no-reply@medimesk.ma>",
      to: process.env.EMAIL_TO ?? "contact@medimesk.ma",
      replyTo: email,
      subject: `[Contact] ${subject} — ${fullName}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold">Nom complet</td><td style="padding:8px">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Pharmacie</td><td style="padding:8px">${escapeHtml(pharmacyName)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Sujet</td><td style="padding:8px">${escapeHtml(subject)}</td></tr>
        </table>
        <h3>Message</h3>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 },
    );
  }
}

/** Escape HTML to prevent XSS in the email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
