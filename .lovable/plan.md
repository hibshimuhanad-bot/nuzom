## Remove Secondary Buttons (CRM + Nexdo)

All product pages should have a single unified primary CTA. Remove the hardcoded secondary buttons that currently appear only on Nexdo and CRM pages.

### Changes

**`src/pages/ProductPage.tsx`**

Delete the two hardcoded conditional secondary button blocks:

1.  **Nexdo secondary button** — `slug === "nexdo"` block that renders "جرّب الديمو" linking to the external demo.
2.  **CRM secondary button** — `slug === "crm"` block that renders "زيارة الموقع" linking to namaacrm.app.

After this change every product page will show only the primary CTA ("ابدأ مجاناً" / "Start Free").

### No other files affected.
