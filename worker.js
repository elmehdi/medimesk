import { onRequestPost as contactPost } from "./functions/api/contact.js";
import { onRequestPost as newsletterPost } from "./functions/api/newsletter.js";

const apiRoutes = {
  "/api/contact": contactPost,
  "/api/newsletter": newsletterPost,
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const handler = apiRoutes[url.pathname];

    if (handler) {
      if (request.method !== "POST") {
        return Response.json({ error: "Method not allowed." }, { status: 405 });
      }

      return handler({ request, env, ctx });
    }

    return env.ASSETS.fetch(request);
  },
};
