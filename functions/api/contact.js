export async function onRequestPost(context) {
  const { env } = context;

  try {
    const body = await context.request.json();

    // Basic validation
    const { fullName, pharmacyName, email, phone, subject, message } = body;
    if (!fullName || !email || !subject || !message) {
      return Response.json(
        { error: "Validation échouée." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.EMAIL_FROM || "MediMesk <no-reply@medimesk.ma>",
        to: env.EMAIL_TO || "contact@medimesk.ma",
        reply_to: email,
        subject: `[Contact] ${subject} — ${fullName}`,
        html: `
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
      console.error("Resend error:", err);
      return Response.json(
        { error: "Une erreur est survenue lors de l'envoi du message." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (e) {
    console.error("Contact function error:", e);
    return Response.json(
      { error: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}

function esc(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
