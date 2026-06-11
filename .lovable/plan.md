# Apply Landing-Page Enhancements to Namaa CRM

The CRM entry in `src/data/products.ts` is missing the same landing-page sections we added for Aldalyel: primary CTA, trust badges, testimonial, pricing, and FAQ. ProductPage already renders these sections when present, so we only need to extend the data.

## Changes

**File:** `src/data/products.ts` — CRM object (lines 327–369)

Add the following fields (placed after `securityDesc`):

1. **primaryCTA** → `"ابدأ مجاناً" / "Start Free"` → `https://namaacrm.app/register` (external).
2. **trustBadges** (4 items, EN/AR):
  - PDPL Compliant / متوافق مع نظام حماية البيانات
  - Data Hosted in Saudi Arabia / بياناتك مستضافة في السعودية
  - Native Arabic Support / دعم عربي أصيل
  - No Credit Card · 14-Day Trial / بدون بطاقة ائتمان · تجربة 14 يوم
  &nbsp;
3. **pricing** (2 plans, mirroring Aldalyel's structure but CRM-focused):
  - **Starter** — 199 SAR/mo: up to 3 sales reps, unlimited contacts & deals, visual pipeline, tasks & follow-ups, basic reports.
  - **Growth** — 399 SAR/mo (highlighted): up to 10 reps, everything in Starter, lead scoring, advanced reports & dashboards, automations, priority support.
4. **faq** (4 items):
  - Free-trial credit card requirement
  - Data hosting location (PDPL)
  - What happens after trial ends (90-day data retention)
  - Integration with other Nzom products (Nexdo, Aldalyel)

No component changes are needed — `ProductPage.tsx` already conditionally renders these blocks. The CTA "ابدأ مجاناً" will surface in the hero, pricing cards, and final CTA on `/products/crm`.

## Notes

- Domain confirmed from the existing "Visit Site" link on ProductPage: `namaacrm.app`.
- Logos for CRM already render everywhere thanks to the previous change (no extra work).
- All copy in both EN and AR following project tone (emotional, direct, Saudi voice).