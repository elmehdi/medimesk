export async function onRequestPost(context) {
  const { env } = context;

  try {
    const body = await context.request.json();

    // Basic validation
    const { fullName, pharmacyName, email, phone, subject, message } = body;
    if (
      !fullName ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !subject ||
      !message
    ) {
      return Response.json(
        { error: "Validation échouée." },
        { status: 400 }
      );
    }

    const apiKey = env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("Missing BREVO_API_KEY");
      return Response.json(
        { error: "Service temporairement indisponible." },
        { status: 503 }
      );
    }

    const sender = parseSender(env.BREVO_SENDER || env.EMAIL_FROM);
    const senderEmail = env.BREVO_SENDER_EMAIL || sender.email || "no-reply@medimesk.ma";
    const senderName = env.BREVO_SENDER_NAME || sender.name || "MediMesk";
    const recipients = parseRecipients(env.EMAIL_TO || "contact@medimesk.ma");

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
      const err = await res.text();
      console.error("Brevo contact email error:", err);
      return Response.json(
        { error: "Une erreur est survenue lors de l'envoi du message." },
        { status: 500 }
      );
    }

    await addContactToBrevoLists({
      apiKey,
      listIds: [
        Number(env.BREVO_CONTACT_LIST_ID),
        Number(env.BREVO_LIST_ID),
      ],
      email,
    });

    return Response.json({ success: true });
  } catch (e) {
    console.error("Contact function error:", e);
    return Response.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}

async function addContactToBrevoLists({ apiKey, listIds, email }) {
  const validListIds = Array.from(
    new Set(listIds.filter((listId) => Number.isInteger(listId)))
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

function parseRecipients(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseSender(value = "") {
  const match = value.match(/^\s*(.*?)\s*<([^>]+)>\s*$/);
  if (match) return { name: match[1], email: match[2] };
  if (value.includes("@")) return { name: "", email: value.trim() };
  return { name: value.trim(), email: "" };
}

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
