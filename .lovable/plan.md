# Nzom Labs Company Profile Deck

Build a company profile presentation for Nzom Labs using the same approach as the Alpha House profile: a generator script that produces a polished PPTX plus a PDF, but with Nzom Labs content, brand colors, and logo.

## Look and feel

- Dark brand theme matching the website: background #07060F, card/surface #13102B, borders #2A1F5C, primary purple #7C6BFF, accent indigo #4F46E5, soft white text #FAFAFA, gray body text #CBD5E1.
- Arabic-first RTL layout, Tajawal / Noto Kufi Arabic for Arabic, Arial for Latin lines.
- Nzom Labs logo on the cover and a footer with page numbers and nzomlabs.com.
- Product logos (Zerisks, Aldalyel, Nexdo, Meeadi, Namaa CRM, Sumaa Plus, Visitor Path) and the dashboard preview screenshots already used on the product pages.

## Slides

1. Cover — logo, headline, "استوديو تقني سعودي", Riyadh / Saudi Arabia line.
2. من نحن — company story pulled from the About page content.
3. الرؤية والرسالة — vision and mission cards.
4. لماذا مختبرات الأنظمة — the four differentiators from the homepage (enterprise-ready, compliance, modular, cloud).
5. منظومة الأنظمة — overview grid of all seven products with logos and taglines.
6-12. One slide per product — logo, Arabic name/tagline, 4 key features, target audience, dashboard preview image, product URL.
13. القدرات المؤسسية — RBAC, ZATCA e-invoicing, workflows, bilingual/RTL, security and PDPL compliance.
14. كيف تبدأ — the activation journey steps from the homepage.
15. تواصل معنا — phone/WhatsApp, email, website, social handles (@nzomlabs), YouTube, Riyadh location.

## Content sources

All text comes from existing project content — `src/data/products.ts`, the About/Home page copy, and the footer contact details — so nothing is invented and nothing is placeholder.

## Technical notes

- New script folder `scripts/pptx-profile/` with `generate.mjs` (pptxgenjs, 16:9 wide layout) and `build.sh` that resolves images from `src/assets`, installs Tajawal, builds the PPTX, converts to PDF via LibreOffice, and renders page images for visual QA.
- CDN `.asset.json` images are downloaded from the local dev server the same way Alpha House does it.
- Output delivered as both `nzom-labs-company-profile.pptx` and `.pdf` in the documents folder, plus a QA pass on the rendered pages before handing it over.
- No changes to the website itself.
