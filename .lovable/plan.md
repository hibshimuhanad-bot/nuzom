# Show Aldalyel Logo Everywhere

The Aldalyel logo (`src/assets/aldalyel-logo.png`) currently only shows in the hero on `/products/aldalyel`. Everywhere else (Navbar dropdown, Bento Grid on home, About page ecosystem cards) we still render the generic lucide `BookOpen` icon. We'll wire the logo into those locations using the same `logoMap` approach already used on `ProductPage`.

## Changes

1. **New helper `src/lib/productLogos.ts`**
   - Export a shared `logoMap: Record<string, string>` containing `aldalyel` and `crm` entries (moved out of `ProductPage.tsx` so all components can import the same map).

2. **`src/pages/ProductPage.tsx`**
   - Replace local `logoMap` with import from the helper. No visual change.

3. **`src/components/Navbar.tsx`** (desktop solutions dropdown + mobile sheet)
   - When `logoMap[product.slug]` exists, render a small `<img>` (w-4 h-4 rounded) instead of `<product.icon />`.

4. **`src/components/home/BentoGrid.tsx`**
   - In the product card icon tile (`w-12 h-12 ... bg-gradient-primary`), when a logo exists, render the logo image filling the tile (rounded, object-contain) on a neutral background instead of the gradient + lucide icon. Falls back to the current gradient tile for other products.

5. **`src/pages/About.tsx`** (ecosystem cards, line ~181)
   - Same pattern: render logo image when available, otherwise keep the current colored lucide icon.

Footer is text-only and doesn't render an icon, so no change there.

## Result

Aldalyel's real logo will appear in: Navbar dropdown (desktop + mobile), Home Bento Grid, About ecosystem section, and the product page hero (already working). The same path automatically picks up the CRM logo too, since it's already in `logoMap`.
