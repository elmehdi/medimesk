import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, pharmacyName, email, phone, subject, message } = body;

    if (
      !fullName ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !subject ||
      !message
    ) {
      return NextResponse.json({ error: "Validation échouée." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("Missing BREVO_API_KEY");
      return NextResponse.json(
        { error: "Service temporairement indisponible." },
        { status: 503 }
      );
    }

    const sender = parseSender(
      process.env.BREVO_SENDER || process.env.EMAIL_FROM
    );
    const senderEmail =
      process.env.BREVO_SENDER_EMAIL || sender.email || "no-reply@medimesk.ma";
    const senderName =
      process.env.BREVO_SENDER_NAME || sender.name || "MediMesk";
    const recipients = parseRecipients(
      process.env.EMAIL_TO || "contact@medimesk.ma"
    );

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: recipients.map((recipient) => ({ email: recipient })),
        replyTo: { email: email.trim().toLowerCase(), name: fullName },
        subject: `[Contact] ${subject} — ${fullName}`,
        htmlContent: `
          <h2>Nouveau message de contact</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;font-weight:bold">Nom complet</td><td style="padding:8px">${esc(fullName)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Pharmacie</td><td style="padding:8px">${esc(pharmacyName || "")}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${esc(email)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Téléphone</td><td style="padding:8px">${esc(phone || "")}</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Sujet</td><td style="padding:8px">${esc(subject)}</td></tr>
          </table>
          <h3>Message</h3>
          <p>${esc(message).replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      console.error("Brevo contact email error:", await res.text());
      return NextResponse.json(
        { error: "Une erreur est survenue lors de l'envoi du message." },
        { status: 500 }
      );
    }

    await addContactToBrevoLists({
      apiKey,
      listIds: [
        Number(process.env.BREVO_CONTACT_LIST_ID),
        Number(process.env.BREVO_LIST_ID),
      ],
      email,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Contact route error:", e);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}

async function addContactToBrevoLists({
  apiKey,
  listIds,
  email,
}: {
  apiKey: string;
  listIds: number[];
  email: string;
}) {
  const validListIds = Array.from(
    new Set(listIds.filter((id) => Number.isInteger(id)))
  );
  if (validListIds.length === 0) return;

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      listIds: validListIds,
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    console.error("Brevo contact list error:", await response.text());
  }
}

function parseRecipients(value = ""): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSender(value = ""): { name: string; email: string } {
  const match = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (match) return { name: match[1], email: match[2] };
  if (value.includes("@")) return { name: "", email: value.trim() };
  return { name: value.trim(), email: "" };
}

function esc(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
