import { onRequestPost as contactPost } from "./functions/api/contact.js";
import { onRequestGet as debugEnvGet } from "./functions/api/debug-env.js";
import { onRequestPost as newsletterPost } from "./functions/api/newsletter.js";

const apiRoutes = {
  "/api/contact": { method: "POST", handler: contactPost },
  "/api/debug-env": { method: "GET", handler: debugEnvGet },
  "/api/newsletter": { method: "POST", handler: newsletterPost },
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const route = apiRoutes[url.pathname];

    if (route) {
      if (request.method !== route.method) {
        return Response.json({ error: "Method not allowed." }, { status: 405 });
      }

      return route.handler({ request, env, ctx });
    }

    // Check if ASSETS binding exists
    if (!env.ASSETS) {
      console.error("ASSETS binding is not configured");
      return new Response("Not Found", { status: 404 });
    }

    return env.ASSETS.fetch(request);
  },
};
