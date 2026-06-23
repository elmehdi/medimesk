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

    const brevoApiKey = env.BREVO_API_KEY;

    // 1. Synchroniser le contact dans la base Brevo
    if (brevoApiKey) {
      const listId = Number(env.BREVO_CONTACT_LIST_ID || env.BREVO_LIST_ID);
      const nameParts = fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";

      if (!isNaN(listId)) {
        try {
          const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
            method: "POST",
            headers: {
              "api-key": brevoApiKey,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: email.trim().toLowerCase(),
              listIds: [listId],
              attributes: {
                PRENOM: firstName,
                NOM: lastName,
                FIRSTNAME: firstName,
                LASTNAME: lastName,
                SMS: phone,
                TELEPHONE: phone,
                PHONE: phone,
                PHARMACIE: pharmacyName || "",
                COMPANY: pharmacyName || "",
                ENTREPRISE: pharmacyName || "",
                STATUS: "Contact",
                STATUT: "Contact",
                CONTACT_STATUS: "Contact",
                LEAD_STATUS: "Contact",
              },
              updateEnabled: true,
            }),
          });
          if (!contactRes.ok) {
            console.warn("Failed to add/update contact in Brevo:", await contactRes.text());
          }
        } catch (err) {
          console.error("Brevo contact sync error:", err);
        }
      }
    }

    // 2. Envoyer l'email de notification
    const emailHtml = `
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
    `;

    if (brevoApiKey) {
      // Envoi via Brevo Transactional Email (SMTP API)
      let senderName = "MediMesk";
      let senderEmail = "no-reply@medimesk.ma";

      if (env.EMAIL_FROM) {
        const match = env.EMAIL_FROM.match(/^(.*?)\s*<(.*?)>$/);
        if (match) {
          senderName = match[1].trim();
          senderEmail = match[2].trim();
        } else {
          senderEmail = env.EMAIL_FROM.trim();
        }
      }

      const recipientEmail = env.EMAIL_TO || "contact@medimesk.ma";

      const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: senderName,
            email: senderEmail,
          },
          to: [
            {
              email: recipientEmail,
              name: "MediMesk Admin",
            },
          ],
          replyTo: {
            email: email,
            name: fullName,
          },
          subject: `[Contact] ${subject} — ${fullName}`,
          htmlContent: emailHtml,
        }),
      });

      if (!emailRes.ok) {
        const err = await emailRes.text();
        console.error("Brevo transactional email error:", err);
        return Response.json(
          { error: "Une erreur est survenue lors de l'envoi du message." },
          { status: 500 }
        );
      }
    } else {
      // Fallback à Resend
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
          html: emailHtml,
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
