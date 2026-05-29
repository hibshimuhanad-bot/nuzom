## New Color System: Navy + Warm Gold

Replace the current emerald palette with a navy/gold enterprise palette across the design tokens.

### Token mapping (HSL)

| Token | Hex | HSL |
|---|---|---|
| `--primary` (Deep Navy) | #0A1628 | `215 60% 10%` |
| `--secondary` (Corporate Blue) | #1E3A5F | `213 52% 25%` |
| `--accent` (Warm Gold) | #C8A96E | `38 46% 60%` |
| `--accent-glow` | lighter gold | `38 55% 70%` |
| `--background` (Warm White) | #F7F5F0 | `42 30% 96%` |
| `--card` / surface alt (Warm Gray) | #EDEAE3 | `42 18% 91%` |
| `--foreground` (Text) | #0A1628 | `215 60% 10%` |
| `--muted-foreground` | #6B7280 | `220 9% 46%` |
| `--destructive` (Error) | #DC2626 | `0 72% 51%` |
| Success | #16A34A | `142 76% 36%` |
| Warning | #D97706 | `27 96% 44%` |
| `--border` / `--input` | warm gray | `42 15% 85%` |
| `--ring` | gold | `38 46% 60%` |

### Changes

1. **`src/index.css`** — rewrite `:root` and `.dark` token blocks with the new HSL values. Update:
   - `--primary`, `--primary-foreground`, `--primary-glow` → navy
   - `--secondary` → corporate blue
   - `--accent`, `--accent-glow` → warm gold
   - `--background`, `--card`, `--popover`, `--muted`, `--secondary` → warm white/gray
   - `--foreground`, `--muted-foreground` → navy/slate
   - `--border`, `--input`, `--ring`
   - Sidebar tokens to match
   - Status colors: keep lifecycle palette but re-tune (`--status-active` → success green, `--status-hearing` → gold, `--status-execution` → corporate blue, `--status-judgment` stays purple-ish or shifts to navy)
   - Gradients: `--gradient-primary` navy→corporate blue, `--gradient-gold` unchanged hue but new gold, `--gradient-surface` warm white→warm gray
   - Shadow/glow alpha values switched to gold + navy
   - `.ai-gradient-bg::before` radial gradients re-tinted with navy + gold
   - Shimmer/pulse keyframes recolored to gold + navy
   - Dark mode: deep navy background, lighter navy surfaces, gold accent unchanged

2. **`tailwind.config.ts`** — no semantic changes needed (already references CSS vars). Remove dead `navy`/`electric`/`light-gray` token references that don't exist in CSS to avoid runtime warnings.

3. No component files touched — everything consumes semantic tokens.

### Out of scope
- Adding new success/warning tokens beyond what's already used (can add `--success` / `--warning` CSS vars if you want them available as Tailwind classes — confirm).
