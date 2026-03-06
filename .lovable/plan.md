

## Design System Update: Blue + Cyan Palette

Switching from Saudi Vision 2030 greens to a modern blue/cyan SaaS palette.

### Color Mapping (hex → HSL)

| Token | Hex | HSL |
|-------|-----|-----|
| background | #0B1220 | 218 52% 8% |
| card/surface | #111B2E | 219 47% 12% |
| primary | #2563EB | 217 91% 53% |
| accent | #22D3EE | 187 82% 53% |
| foreground/text | #F8FAFC | 210 40% 98% |
| muted text | #B6C2D1 | 213 24% 77% |
| border | rgba(255,255,255,0.10) → 0 0% 100% / 10% |

### Files to Change

**1. `src/index.css`** — Remap all CSS variables in `:root` and `.dark`:
- `--background`: 218 52% 8%
- `--foreground`: 210 40% 98%
- `--card`: 219 47% 12%
- `--primary`: 217 91% 53%, `--primary-foreground`: white
- `--secondary`: 217 91% 45% (darker blue for secondary)
- `--accent`: 187 82% 53% (cyan)
- `--muted`: 219 47% 15%, `--muted-foreground`: 213 24% 77%
- `--border`/`--input`: 0 0% 100% / 10% approach → 219 30% 18%
- `--ring`: 187 82% 53% (cyan)
- `--navy`/`--electric`: update to match new bg/accent
- Sidebar tokens: align with new palette
- Update `pulse-glow` keyframes from green HSL to blue `hsl(217 91% 53%)`
- Update `.text-gradient` to `from-primary to-accent` (blue→cyan)

**2. `src/data/products.ts`** — Replace `from-emerald-500 to-teal-600` gradient classes with `from-blue-500 to-cyan-600` (and `from-teal-500 to-emerald-600` → `from-cyan-500 to-blue-600`).

**3. `src/pages/ProductPage.tsx`** — Change `bg-green-400/60` (line 97) to `bg-emerald-400/60` or `bg-cyan-400/60`.

**4. `tailwind.config.ts`** — Update `navy` and `electric` custom color HSL values to match new tokens.

No structural or layout changes needed — all pages use semantic tokens and will update automatically.

