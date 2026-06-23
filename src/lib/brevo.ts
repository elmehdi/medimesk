/**
 * Utilitaire Brevo — appels REST réutilisables dans tout le projet.
 *
 * Remplace le SDK `sib-api-v3-sdk` (Node.js uniquement) par des wrappers
 * fetch() compatibles avec Next.js Edge Runtime et Cloudflare Workers.
 */

const BREVO_BASE_URL = "https://api.brevo.com/v3";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BrevoSender {
  name: string;
  email: string;
}

export interface BrevoTransactionalEmailParams {
  sender: BrevoSender;
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
}

export interface BrevoCreateCampaignParams {
  /** Nom interne de la campagne */
  name: string;
  /** Objet de l'email */
  subject: string;
  /** Contenu HTML */
  htmlContent: string;
  /** Expéditeur */
  sender: BrevoSender;
  /** IDs des listes Brevo destinataires */
  listIds: number[];
  /**
   * Date de planification au format ISO 8601.
   * Si absent, la campagne est créée en brouillon (à envoyer manuellement).
   */
  scheduledAt?: string;
}

export interface BrevoAddContactParams {
  email: string;
  listIds: number[];
  attributes?: Record<string, string | number | boolean>;
  updateEnabled?: boolean;
}

// ─── Client Brevo ─────────────────────────────────────────────────────────────

export class BrevoClient {
  private readonly apiKey: string;

  constructor(apiKey: string) {
    if (!apiKey) throw new Error("BREVO_API_KEY manquant.");
    this.apiKey = apiKey;
  }

  private get headers() {
    return {
      "api-key": this.apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  // ── Emails transactionnels ──────────────────────────────────────────────────

  /**
   * Envoie un email transactionnel immédiatement.
   * Équivalent à : apiInstance.sendTransacEmail(emailData)
   */
  async sendTransactionalEmail(params: BrevoTransactionalEmailParams) {
    const res = await fetch(`${BREVO_BASE_URL}/smtp/email`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Brevo sendTransactionalEmail error ${res.status}: ${err}`);
    }

    return res.json() as Promise<{ messageId: string }>;
  }

  // ── Campagnes email ─────────────────────────────────────────────────────────

  /**
   * Crée une campagne email (brouillon ou planifiée).
   * Équivalent à : apiInstance.createEmailCampaign(emailCampaigns)
   */
  async createCampaign(params: BrevoCreateCampaignParams) {
    const payload: Record<string, unknown> = {
      name: params.name,
      subject: params.subject,
      sender: params.sender,
      type: "classic",
      htmlContent: params.htmlContent,
      recipients: { listIds: params.listIds },
    };

    if (params.scheduledAt) {
      payload.scheduledAt = params.scheduledAt;
    }

    const res = await fetch(`${BREVO_BASE_URL}/emailCampaigns`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Brevo createCampaign error ${res.status}: ${err}`);
    }

    return res.json() as Promise<{ id: number }>;
  }

  /**
   * Envoie immédiatement une campagne déjà créée.
   * Équivalent à : apiInstance.sendEmailCampaignNow(campaignId)
   */
  async sendCampaignNow(campaignId: number) {
    const res = await fetch(
      `${BREVO_BASE_URL}/emailCampaigns/${campaignId}/sendNow`,
      { method: "POST", headers: this.headers }
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Brevo sendCampaignNow error ${res.status}: ${err}`);
    }

    return true;
  }

  /**
   * Liste les campagnes existantes.
   */
  async listCampaigns(status?: "draft" | "sent" | "archive" | "queued" | "suspended" | "inProcess") {
    const url = new URL(`${BREVO_BASE_URL}/emailCampaigns`);
    if (status) url.searchParams.set("status", status);

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: this.headers,
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Brevo listCampaigns error ${res.status}: ${err}`);
    }

    return res.json();
  }

  // ── Contacts ────────────────────────────────────────────────────────────────

  /**
   * Ajoute ou met à jour un contact dans une liste.
   * Équivalent à : apiInstance.createContact(createContact)
   */
  async addContact(params: BrevoAddContactParams) {
    const res = await fetch(`${BREVO_BASE_URL}/contacts`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        email: params.email.trim().toLowerCase(),
        listIds: params.listIds,
        attributes: params.attributes,
        updateEnabled: params.updateEnabled ?? true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Brevo addContact error ${res.status}: ${err}`);
    }

    return res.json();
  }
}

// ─── Factory helper ──────────────────────────────────────────────────────────

/**
 * Crée une instance BrevoClient depuis une variable d'environnement.
 *
 * Usage dans une Route Handler Next.js :
 *   const brevo = createBrevoClient(process.env.BREVO_API_KEY!);
 *
 * Usage dans une Cloudflare Function :
 *   const brevo = createBrevoClient(env.BREVO_API_KEY);
 */
export function createBrevoClient(apiKey: string): BrevoClient {
  return new BrevoClient(apiKey);
}
