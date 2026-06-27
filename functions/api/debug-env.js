export async function onRequestGet(context) {
  const { env } = context;
  const bindingNames = Object.keys(env).filter((name) => name !== "ASSETS").sort();

  return Response.json({
    brevoApiKey: Boolean(env.BREVO_API_KEY),
    brevoListId: Boolean(env.BREVO_LIST_ID),
    brevoContactListId: Boolean(env.BREVO_CONTACT_LIST_ID),
    brevoSenderEmail: Boolean(env.BREVO_SENDER_EMAIL),
    emailTo: Boolean(env.EMAIL_TO),
    bindingNames,
  });
}
