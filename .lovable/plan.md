

## Saudi Vision 2030 Design System Update

### Color Mapping (hex to HSL)

| Role | Hex | HSL |
|------|-----|-----|
| Primary (Vision Green) | #006C35 | 152 100% 21% |
| Secondary (Bright Green) | #1F8A4C | 148 63% 33% |
| Accent (Light Green) | #3BB273 | 148 51% 47% |
| Background (Dark Slate) | #0F172A | 222 47% 11% |
| Text | #FFFFFF | 0 0% 100% |

### Files to Update

**1. `src/index.css`** -- Core CSS variables
- Update `:root` to use the dark background as default (since the site uses a dark navbar/primary, switching to a dark-first approach matching the government-level dark theme)
- Remap all CSS variables:
  - `--background`: dark slate (#0F172A)
  - `--foreground`: white
  - `--primary`: Vision Green (#006C35)
  - `--secondary`: Bright Green (#1F8A4C)
  - `--accent`: Light Green (#3BB273)
  - Cards: slightly lighter dark slate
  - Muted/border: dark tones
  - Ring: accent green
- Update `.dark` class similarly
- Update `text-gradient` utility to use green gradient (`from-secondary to-accent`)
- Update `pulse-glow` keyframes to use green tones instead of blue

**2. `tailwind.config.ts`** -- Custom color tokens
- Update `navy` references to use dark slate HSL
- Update `electric` references to use accent green HSL
- Keep structural config unchanged

**3. `src/components/Navbar.tsx`** -- Navbar styling
- The navbar uses `bg-primary/95` and `border-secondary/20` which will automatically pick up new colors
- Logo box uses `bg-secondary` -- will become green automatically
- No structural changes needed, just color propagation

**4. Component pages** -- Mostly automatic
- All pages use semantic tokens (`bg-primary`, `text-secondary`, etc.) so they will update automatically
- A few hardcoded `blue-400` or `blue-*` references in gradients on Index.tsx and ProductPage.tsx need updating to green equivalents

**5. `src/pages/Index.tsx`** and **`src/pages/ProductPage.tsx`** -- Hardcoded blue references
- Replace any `blue-*` Tailwind classes with green equivalents (e.g., `green-400`, `emerald-400`)
- Update gradient directions to use the new green palette

**6. Memory update** -- Update design system memory to reflect Saudi Vision 2030 palette

### Design Philosophy
- Dark background with green accents conveys authority and professionalism aligned with Saudi government aesthetics
- The green palette directly references Saudi national identity and Vision 2030 branding
- Clean SaaS interface maintained through existing Inter typography and minimal component styling

