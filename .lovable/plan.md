# Nzom Labs Company Profile Deck

Build a client-facing company profile presentation for Nzom Labs, same approach as the Alpha House profile: a generator script producing a polished PPTX plus a PDF, with Nzom Labs content, brand colors, and logo.

## Look and feel

- Cover slide and closing/contact slide use the dark brand background (#07060F) with the Nzom Labs logo and purple accents.
- All slides in between use a clean white/light background with dark text — easy to read and to present in front of clients or print.
- Accents throughout: primary purple #7C6BFF, indigo #4F46E5, dark ink #07060F for headings, gray #5B6172 for body text, light surface #F4F5F8 for cards.
- Product logos and the real dashboard preview screenshots already used on the website product pages.
- Footer on every slide: page number and nzomlabs.com.

## RTL reading direction (Arabic-first)

The whole deck reads right-to-left, so it is built that way from the start and needs no rework later:

- Every Arabic text box uses rtlMode with right alignment; all layouts are mirrored — titles, text columns, and bullets start from the right edge, images sit on the left.
- Reading order on every slide flows right to left (grid cards ordered RTL, steps numbered RTL, navigation flow RTL).
- Only pure Latin strings (URLs, page numbers, email) use left-aligned Latin font.
- Visual QA pass on the rendered pages confirms RTL correctness before delivery.

## Slides

1. Cover (dark) — logo, headline, "استوديو تقني سعودي"، Riyadh / Saudi Arabia.
2. من نحن — company story from the About page.
3. الرؤية والرسالة.
4. لماذا مختبرات الأنظمة — the four differentiators from the homepage.
5. أقسام الشركة — overview of the three divisions: أنظمة SaaS، توريد الأجهزة (Hardware)، خدمات تقنية (IT Services).
6. منظومة الأنظمة — grid of all seven products with logos and taglines.
7-13. One slide per product (Zerisks, Aldalyel, Nexdo, Meeadi, Namaa CRM, Sumaa Plus, Visitor Path) — logo, Arabic name and tagline, 4 key features, target audience, dashboard preview image, product URL.
14. قسم توريد الأجهزة — placeholder section slide with the right layout and headings (categories, why us, process) and clearly marked placeholder text for you to fill later.
15. قسم الخدمات التقنية — placeholder section slide listing service types (تصميم وتطوير مواقع، مراجعة الكود، استشارات تقنية، دعم وصيانة) with placeholder detail text to fill later.
16. القدرات المؤسسية — RBAC, ZATCA e-invoicing, workflows, bilingual/RTL, security and PDPL compliance.
17. كيف تبدأ — activation journey steps.
18. تواصل معنا (dark) — phone/WhatsApp, email, website, social handles (@nzomlabs), YouTube, Riyadh.

Placeholder text on slides 14 and 15 is visibly marked (e.g. "[نص يُستكمل لاحقًا]") so nothing invented is presented as fact.

## Content sources

All real text comes from existing project content — `src/data/products.ts`, About/Home copy, and footer contact details. Product preview images are the same asset files used on the website product pages.

## Technical notes

- New folder `scripts/pptx-profile/` with `generate.mjs` (pptxgenjs, 16:9) and `build.sh` that resolves images from `src/assets` (including CDN `.asset.json` pointers via the local dev server), installs Tajawal, builds the PPTX, converts to PDF with LibreOffice, and renders page images for a visual QA pass.
- Deliverables: `nzom-labs-company-profile.pptx` and `.pdf` in the documents folder, editable so you can fill the two placeholder sections later.
- No changes to the website itself.
