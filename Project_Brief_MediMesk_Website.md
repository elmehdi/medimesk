# Project Brief: MediMesk Website

## 1. Project Overview & Vision

MediMesk is a B2B healthcare solutions company serving pharmacists and healthcare professionals in Morocco. The goal of this website is to establish a professional, trustworthy, and modern online presence that clearly communicates our offerings to pharmacy professionals and healthcare institutions.

The site is a **showcase website** — no e-commerce, no client portal, no complex backend. It exists to inform, build trust, and generate leads (demo requests, quote requests, contact enquiries). Every design and technical decision should serve that purpose.

The website must eliminate any suggestion of a direct-to-consumer health app. MediMesk sells to pharmacists, not patients.

---

## 2. Target Audience

**Primary:** Pharmacists and pharmacy owners in Morocco seeking reliable, innovative equipment to improve dispensing accuracy and operational efficiency.

**Secondary:** Healthcare institutions, potential distribution partners, and investors in the Moroccan healthcare technology space.

---

## 3. Core Offerings

### 3.1 Automated Medication Management (PDA — Préparation des Doses à Administrer)

MediMesk provides automated medication dispensing systems for pharmacies. These systems improve patient adherence, reduce human error, and increase dispensing efficiency.

#### RDC 45 — Semi-Automatic MDS Solution

The RDC 45 is MediMesk's entry-level automated dispensing system, designed for pharmacies beginning their transition to automated medication management.

| Specification | Detail |
|---|---|
| Patient capacity | 0 to 120 patients |
| Loading system | LED-guided cell loading (minimises dosing errors) |
| Sealing | Automatic pouch sealing |
| Software | Integrates with MDS pharmacy software |
| Dispensing mode | Semi-automatic pouch dispensing |
| Pouch design | Customisable patient-labelled pouches |

**Value proposition for pharmacists:** Cost-effective entry into automation, reduced medication errors, improved workflow efficiency, and a clear upgrade path to fully automated systems due to shared software architecture.

**Page content needs:** Technical spec sheet, pharmacist-focused benefit summary, high-resolution product images, video demonstration of operation.

---

### 3.2 Professional Piercing Solutions — Studex SYSTEM 75

MediMesk is an official partner of Studex for the distribution of the SYSTEM 75 professional piercing system in Morocco. This product line enables pharmacies to offer a premium, hygienic ear-piercing service as an additional revenue stream.

Key points to communicate: professional-grade hygiene standards, ease of use for pharmacy staff, training and support provided by MediMesk, and the quality backing of the Studex brand.

---

### 3.3 Medical Equipment & Technologies

A dedicated section for additional reliable medical technologies that MediMesk sources and distributes from recognised manufacturers. This section is designed to expand over time as the product portfolio grows. The page architecture must allow new products to be added without structural changes.

---

## 4. Website Structure

### Navigation (primary)

| Page | URL | Purpose |
|---|---|---|
| Accueil | `/` | Homepage — entry point, solutions overview, CTAs |
| À propos | `/a-propos` | Company story, team, founding expertise |
| Solutions | `/solutions` | Hub page linking to all product lines |
| — PDA / RDC 45 | `/solutions/pda-rdc45` | Automated dispensing product page |
| — Studex SYSTEM 75 | `/solutions/studex-system75` | Piercing solutions product page |
| — Équipement médical | `/solutions/equipement-medical` | Other medical technologies |
| Services | `/services` | Training, installation, after-sales support |
| Ressources | `/ressources` | Blog, industry articles, case studies |
| Support | `/support` | FAQs, user guides, technical assistance |
| Contact | `/contact` | Contact form, address, phone, map |

### Footer links (no primary nav)

- Mentions légales — `/mentions-legales`
- Politique de confidentialité — `/politique-confidentialite`
- Conditions générales d'utilisation — `/cgu`

---

## 5. Homepage Layout

The homepage is the most important page. Sections run top to bottom in this order:

1. **Hero** — Full-width, teal background, headline stating the B2B value proposition in French, two CTAs side by side: primary ("Demander une démo") and secondary ("Découvrir nos solutions"), product visual of the RDC 45 on the right.

2. **Trust bar** — Slim strip with partner logos (Studex, manufacturers), key credential ("Fondé par Dr. Hassan El Youssfi"), and a stat or two (e.g. number of pharmacies equipped).

3. **Solutions overview** — Three-column card grid, one card per product line. Each card: product image, short headline, three key benefits, link to full product page.

4. **Why MediMesk** — Six-item icon grid highlighting core differentiators: error reduction, local partner, training & support, proven technology, software integration, reactive after-sales.

5. **RDC 45 spotlight** — Full-width alternating layout: product image or embedded video on one side, key specifications and feature list on the other. CTA: "Voir la démonstration".

6. **Testimonials / Case studies** — Two or three quotes from pharmacist clients, or a case study card with measurable outcomes.

7. **About teaser** — Half-and-half block: short paragraph about Dr. Hassan El Youssfi and MediMesk's founding mission, paired with a team or founder photo. Links to the full About page.

8. **CTA banner** — Full-width dark block (dark teal or near-black) with a closing statement and two action buttons: "Demander une démo gratuite" and "Nous contacter".

9. **Footer** — Four columns: (1) logo, tagline, social links; (2) Solutions links; (3) Company links; (4) contact details and address. Bottom bar with legal links and FR | EN language toggle.

---

## 6. Design & Visual Identity

### Colour palette

| Name | Hex | Usage |
|---|---|---|
| Primary Teal | `#00A99D` | Navigation, primary buttons, headings, active states |
| Dark Text | `#1A2332` | All body text and headings |
| White | `#FFFFFF` | Page backgrounds, card surfaces |
| Section background | `#F7F9FA` | Alternating section backgrounds |
| CTA Yellow | `#F5C518` | Primary call-to-action buttons only — used sparingly |
| Light Teal | `#E0F5F3` | Highlight boxes, feature card backgrounds |
| Error Red | `#E63946` | Form validation errors only |

### Typography

| Typeface | Role |
|---|---|
| Playfair Display | Display headlines (H1, H2) — conveys authority and trust |
| DM Sans | Body text, UI labels, navigation, specifications |

Font sizes: H1 48–56px / H2 32–36px / H3 24px / Body 16px / Small 13px. Body line-height minimum 1.7.

### Imagery

- Professional photography of the RDC 45 in a real pharmacy environment
- Studex SYSTEM 75 in use by pharmacy staff
- Team and founder portrait of Dr. Hassan El Youssfi
- Custom stroke-based iconography in teal for features and services
- No generic stock healthcare imagery — all visuals must reflect the Moroccan pharmacy context

### Layout principles

- 12-column CSS grid, max-width 1280px, 24px gutters
- Generous white space — no cluttered sections
- Glassmorphism effects limited to the hero section overlay only
- Scroll-triggered fade-in and slide-up animations (CSS only)
- Fully responsive: desktop-first, optimised for mobile and tablet
- WCAG 2.1 AA accessibility compliance

---

## 7. Technical Stack

### Framework: Next.js 14+

Next.js is the chosen framework. It handles routing, page rendering, image optimisation, and internationalisation out of the box.

- **Static Site Generation (SSG)** for all content pages — pre-rendered HTML for maximum speed and SEO indexing
- **App Router** — file-based routing with nested layouts
- **next/image** — automatic WebP conversion, lazy loading, responsive image sizing
- **Built-in i18n routing** — `/fr/` and `/en/` path prefixes, locale detection, language-aware content

### Content Management: Sanity CMS

Sanity is a headless CMS. The team manages all website content (products, blog posts, team members, FAQs, testimonials) through a browser-based editor — no developer involvement needed for routine updates.

- Structured content schemas for each content type
- French and English fields on every content type for bilingual support
- Real-time content preview before publishing
- Asset management: product images, PDFs, video links
- Revision history on all content

### Styling: Tailwind CSS

- All colours, spacing, and typography defined centrally in `tailwind.config.js`
- Responsive utility classes built in (`sm:`, `md:`, `lg:`)
- Final production CSS bundle under 10KB after purging unused styles

### Hosting: Cloudflare Pages

- Automatic deployments on every push to the main Git branch
- Preview deployments for every pull request
- Global CDN — assets served from the closest edge location
- Unlimited bandwidth on free tier
- SSL/TLS automatically provisioned and renewed
- Built-in Web Analytics available

### Forms & Lead Generation

- React Hook Form + Zod for client-side form validation
- Next.js API Routes for server-side form processing
- Email delivery via Resend or similar transactional email API
- All enquiries (demo requests, quote requests, contact) sent directly to the MediMesk team by email
- GDPR-compliant: consent checkbox on all forms

### SEO

- Clean human-readable URLs on all pages, no query strings
- Dynamic metadata (title, description, og:image) per page via Next.js Metadata API
- Structured data (JSON-LD): Organisation, Product, FAQPage, BreadcrumbList
- Auto-generated XML sitemap submitted to Google Search Console
- `hreflang` tags for French and English versions
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, FID < 100ms

### Security

- HTTPS enforced on all pages (Cloudflare handles this automatically)
- Content Security Policy headers
- Rate limiting on form submission API routes
- All API keys stored as environment variables, never in client-side code

---

## 8. Multilingual Strategy

- **Primary language:** French (`fr`) — all content written in French first
- **Secondary language:** English (`en`) — added progressively after launch
- URL structure: `mediamesk.ma/fr/...` and `mediamesk.ma/en/...`
- Language toggle visible in the navigation header on all pages
- Default: French, with automatic detection for English-language browsers
- Sanity CMS supports both languages on every field — translation is a content task, not a development task

---

## 9. Call to Action Strategy

Every page has a clear primary action. The site guides visitors through a simple funnel:

1. **Awareness** — SEO-optimised pages, blog articles, and clear B2B messaging bring pharmacists to the site
2. **Engagement** — Product pages, video demos, technical specifications, and case studies hold attention
3. **Conversion** — "Demander une démo", "Obtenir un devis", and "Nous contacter" CTAs are placed at every natural decision point

Primary CTAs (yellow button): "Demander une démo gratuite", "Obtenir un devis"
Secondary CTAs (ghost button): "En savoir plus", "Découvrir nos solutions", "Télécharger la fiche technique"

---

## 10. Delivery Phases

| Phase | Scope |
|---|---|
| 1 — Foundation | Design system, Sanity schemas, component library, Cloudflare Pages + GitHub pipeline |
| 2 — Core pages | Homepage, 3 product pages, About, Contact — French content, fully responsive |
| 3 — Content pages | Blog, Resources, Support/FAQ, legal pages |
| 4 — Launch | SEO audit, performance pass, analytics setup, go-live |
| 5 — English | Full EN translation, additional product pages as portfolio grows |

---

## 11. Out of Scope

The following are explicitly **not** part of this project:

- E-commerce or online purchasing
- Client login portal or authenticated areas
- Custom pharmacy software integration
- Mobile application
- Live chat or chatbot

These may be considered for future phases once the core showcase site is established.


