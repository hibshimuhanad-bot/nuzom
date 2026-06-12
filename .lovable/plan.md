## Plan: Anonymize All Testimonials

### Goal
Remove all real-sounding names and company roles from every testimonial across the site to eliminate any risk of being construed as impersonation or false endorsement, while keeping the testimonial quotes themselves.

### Changes

1. **`src/data/products.ts`** — Update the two product-page testimonials:
   - **Aldalyel testimonial** (lines 168-175): Replace `author` and `role` with generic bilingual placeholders (e.g., "One of our clients" / "أحد عملائنا" and "Saudi company" / "شركة سعودية").
   - **Samaa Plus testimonial** (lines 486-493): Same replacement.

2. **`src/components/home/Testimonials.tsx`** — Update the four homepage testimonials (lines 4-25):
   - Replace every `name` and `role` field with the same generic bilingual placeholders.
   - The `name[language].charAt(0)` avatar initializer will simply show the first letter of the generic label, which is acceptable.

### No structural changes
- The `Testimonial` interface in `src/data/products.ts` stays unchanged.
- `ProductPage.tsx` and `Testimonials.tsx` rendering logic stays unchanged — only the data values are swapped.

### Verification
- Build passes.
- Product pages and homepage render testimonials with quotes visible but names/roles replaced by generic text.