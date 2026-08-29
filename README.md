# MediMesk

MediMesk is the website for a Moroccan company that equips pharmacies, hospitals, and clinics with pharmacy-automation and medical equipment. It's a showcase and lead-generation site — there's no online store and no user accounts. Visitors learn about the products, then request a demo, a quote, or a callback, and the MediMesk team takes it from there.

The site is fully bilingual, French and English, since that's how the company's clients in Morocco operate day to day.

## What MediMesk does

MediMesk helps pharmacies move away from manual dose preparation and toward organized, traceable, professional-grade pharmaceutical automation — what the industry calls PDA (*Préparation des Doses à Administrer*, or "dose preparation for administration"). The company also supplies medical equipment more broadly, and runs a separate line of professional ear-piercing systems under the Studex brand.

## Services and products

The site presents six product lines, each with its own dedicated page:

- **Dual Blist** — a semi-automated blister-based dose preparation system with LED-guided packing, built for pharmacies ready to run two preparations at once with strong traceability.
- **RDC 45** — a compact, sachet-based dose preparation machine, aimed at pharmacies wanting a guided, organized service without a large footprint.
- **PDA — Hôpitaux et Cliniques** — large-scale automated packaging machines (the JVM range) for hospitals and clinics that need high-volume, tightly controlled production.
- **Accessoires PDA** — the supporting equipment around automation: optical sachet inspection, archiving and traceability tools, cutting and organizing machines.
- **Piluliers PDA Venalink** — manual pill organizers, positioned as the first, machine-free step into dose preparation for pharmacies not ready to invest in automation yet.
- **Advanced Piercing avec Studex** — single-use sterile piercing cartridges and a professional, trainable piercing service, sold and supported through MediMesk.

Every product page explains the offer, walks through how it works, and ends with a way to get in touch — request a demo, ask for a quote, or get a callback.

## Built for every screen

The site is designed and built twice for every product page: once for phones, once for desktop. Rather than one layout that just shrinks, mobile visitors get a purpose-built experience — its own hero, its own card layouts, its own navigation patterns — tuned for how people actually browse on a phone (thumb-reachable buttons, a persistent call-to-action within reach, content ordered for a narrow screen). Desktop keeps its own, more spacious layout. Both stay visually consistent with the same colors, type, and tone, and both are available in French and English.

## Performance and polish

A meaningful part of the ongoing work on this site is making sure it's fast and reliable, not just good-looking:

- **Image weight.** Product photography is compressed and sized to what's actually displayed rather than shipped at full camera resolution — some images went from several hundred kilobytes down to a fraction of that with no visible quality loss.
- **Loading behavior.** Images and interactive elements are tuned so they show up reliably the first time, across browsers, rather than depending on a visitor scrolling, hovering, or reloading to see the finished page.
- **Accessibility.** Motion-sensitive visitors (a real, common browser/OS setting) still see full content — animations turn off for them without hiding anything they need.
- **Consistency.** Colors, spacing, and type are drawn from one shared design system, so the same brand shows up the same way whether you're on the homepage, a product page, or the mobile version of either.

## How it's built

- **Next.js** — a web framework chosen for the combination of fast page loads and strong search-engine visibility a marketing site depends on; the whole site is pre-built into static pages rather than assembled on the fly for each visitor, which makes it quicker to load and cheaper to run.
- **Cloudflare** — the site is hosted on Cloudflare's global network, so a visitor in Morocco and a visitor anywhere else both get the site served from a location close to them, rather than a single distant server.
- **Tailwind CSS** — a styling system that keeps the visual design consistent across every page, in both languages and on both mobile and desktop, without design drift creeping in page by page.
- **Brevo** — the contact form and newsletter signup connect to Brevo, the email platform MediMesk uses to actually receive and follow up on leads.
