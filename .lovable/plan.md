

## Redesign: Dark Tech UI + Bento Grid + AI Gradient + Motion Animation

Complete rebuild of the Index page with a cutting-edge dark tech aesthetic.

### Design Direction

- **Dark Tech UI**: Deep dark backgrounds with glowing borders, glassmorphism cards, subtle grid/dot patterns
- **Bento Grid**: Products displayed in an asymmetric bento grid layout (mixed sizes -- some cards span 2 cols or 2 rows)
- **AI Gradient**: Animated purple-blue-cyan gradient meshes, glowing orbs, gradient text for headings
- **Motion Animation**: Enhanced ScrollReveal usage + new CSS animations (shimmer borders, gradient rotation, floating particles, glow pulses)

### Files to Change

**1. `src/index.css`** -- New animations and utilities
- Add `@keyframes gradient-rotate` (rotating mesh gradient background)
- Add `@keyframes shimmer` (border shimmer effect for cards)
- Add `@keyframes glow` (pulsing glow on elements)
- Add `@keyframes grid-fade` (background grid pattern animation)
- Add `.ai-gradient-bg` class -- animated radial gradient mesh (purple/blue/cyan blobs)
- Add `.bento-card` class -- glassmorphism card with `backdrop-blur`, semi-transparent bg, glowing border on hover
- Add `.shimmer-border` class -- animated gradient border
- Add `.dot-pattern` class -- subtle repeating dot grid background
- Update `--primary` to lean slightly more vibrant for the AI look
- Add `--glow` custom property for glow effects

**2. `src/pages/Index.tsx`** -- Complete redesign of all sections

**Hero section:**
- Full-viewport with animated AI gradient mesh background (multiple overlapping gradient orbs with `animate-float` at different speeds)
- Large gradient text heading (purple → blue → cyan) using `text-gradient` 
- Subtitle with `text-muted-foreground`
- Floating geometric shapes (circles, rounded rects) with blur and gradient fills
- Animated dot grid pattern overlay
- Two CTA buttons: primary with shimmer glow, secondary outline

**Ecosystem → Bento Grid section:**
- Replace uniform 3-col grid with asymmetric bento layout using CSS grid:
  - First product: `col-span-2 row-span-2` (large featured card)
  - Others: mix of `col-span-1` standard cards
- Each card: glassmorphism style (`bg-card/50 backdrop-blur-xl border border-white/10`)
- Hover effect: border glows with product accent color, slight scale
- Product icon with gradient background
- Subtle inner gradient overlay

**Why Nuzom section:**
- 4-column grid with glowing icon boxes
- Each item gets a subtle radial gradient glow behind the icon
- Glass card treatment

**Industries section:**
- Horizontal scrolling or a clean bento-style row
- Each industry in a glass card with hover glow

**CTA Banner:**
- Full-width with animated AI gradient mesh background
- Large gradient text
- Glowing CTA button with shimmer animation

**3. `src/components/Navbar.tsx`** -- Minor glass effect update
- Add `backdrop-blur-xl` (already has `backdrop-blur-md`, upgrade)
- Make border more subtle: `border-white/5`

**4. `src/components/Footer.tsx`** -- Subtle dot pattern background
- Add dot pattern class to footer background

### Bento Grid Layout (desktop)

```text
┌──────────────┬───────┬───────┐
│              │       │       │
│   Product 1  │  P2   │  P3   │
│  (2x2 big)   │       │       │
│              ├───────┼───────┤
│              │       │       │
│              │  P4   │  P5   │
│              │       │       │
└──────────────┴───────┴───────┘
```

Using `grid-cols-4 grid-rows-2` with first item `col-span-2 row-span-2`.

### New CSS Animations

- `gradient-rotate`: 15s infinite -- rotates hue on gradient mesh blobs
- `shimmer`: 3s infinite -- moves a light streak across card borders
- `glow-pulse`: 4s infinite -- pulses opacity on glow effects
- Enhanced `float` with multiple variants at different speeds

### Key Technical Details

- All existing i18n (`t()`, `language`) preserved
- All product links and routing unchanged
- ScrollReveal component reused with varied delays for staggered entrance
- No new dependencies -- pure CSS + Tailwind
- Mobile responsive: bento grid collapses to single column on mobile, 2 cols on tablet

