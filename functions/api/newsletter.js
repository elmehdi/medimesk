export async function onRequestPost(context) {
  try {
    const { email, consent, website } = await context.request.json();

    // Honeypot field: silently accept bot submissions.
    if (website) return Response.json({ success: true });

    if (!consent || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const apiKey = context.env.BREVO_API_KEY;
    const listId = Number(context.env.BREVO_LIST_ID);
    if (!apiKey || !Number.isInteger(listId)) {
      console.error("Missing BREVO_API_KEY or BREVO_LIST_ID");
      return Response.json({ error: "Service temporairement indisponible." }, { status: 503 });
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      console.error("Brevo newsletter error:", await response.text());
      return Response.json({ error: "L’inscription n’a pas pu être finalisée." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Newsletter function error:", error);
    return Response.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}
