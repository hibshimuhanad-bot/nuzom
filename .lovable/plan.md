

## Problem

After updating the design system to Saudi Vision 2030 colors, the site has a severe contrast issue. The `--primary` token changed from dark navy to green (#006C35), but `bg-primary` is still used as the background for the navbar, hero sections, footer, and CTA banners across every page. This creates a monotone green-on-green appearance with poor readability.

## Solution

Use the dark slate background (`--navy` / `--background`) for large section backgrounds, and reserve the green palette for interactive elements (buttons, accents, icons). This creates proper contrast: dark backgrounds with green highlights.

### Changes

**1. `src/components/Navbar.tsx`**
- Change `bg-primary/95` to `bg-background/95`
- Change `border-secondary/20` to `border-border`
- Update text references from `text-primary-foreground` to `text-foreground`

**2. `src/pages/Index.tsx`**
- Hero: `bg-primary` to `bg-background` with a subtle green gradient overlay
- CTA Banner: `bg-primary` to `bg-muted` or a dark section with green accents
- Update text classes from `text-primary-foreground` to `text-foreground`

**3. `src/pages/About.tsx`**
- Hero section: `bg-primary` to `bg-background`
- Update text references accordingly

**4. `src/pages/Contact.tsx`**
- Hero section: `bg-primary` to `bg-background`
- Update text references accordingly

**5. `src/pages/ProductPage.tsx`**
- Hero section (line 31): `bg-primary` to `bg-background`
- CTA section (line 204): `bg-primary` to `bg-muted`
- Update text references from `text-primary-foreground` to `text-foreground`

**6. `src/components/Footer.tsx`**
- `bg-primary` to `bg-background` with `border-t border-border`
- Update `text-primary-foreground` references to `text-foreground`

**7. `src/pages/Blog.tsx`** (hero section)
- Same pattern: `bg-primary` to `bg-background`

### Design Result
- Dark slate (#0F172A) backgrounds for all major sections -- professional, government-level look
- Green (#006C35, #1F8A4C, #3BB273) reserved for buttons, icons, accents, and interactive elements
- White text on dark backgrounds for strong contrast
- Cards remain slightly lighter dark tones for visual hierarchy

