# Plan: New Navy/Purple/Blue Palette

تطبيق نظام الألوان الجديد المُرسل، مع **وضع فاتح افتراضي** و**وضع داكن** متناسق. كل القيم HSL ومن خلال tokens فقط.

## 1. اللوحة (Mapping)

**Light Mode (افتراضي):**
- `--background`: `#FFFFFF`
- `--card` / surface: `#F8FAFC` (softGray) — `--muted`: `#EEF4FF` (softBlue)
- `--foreground`: `#111827` — `--muted-foreground`: `#6B7280`
- `--border` / `--input`: `#E5E7EB`
- `--primary`: `#2563EB` (blue) — `--primary-foreground`: `#FFFFFF`
- `--secondary`: `#F3F0FF` (softPurple) — `--secondary-foreground`: `#101B46` (navy)
- `--accent`: `#4F46E5` (purple) — `--accent-foreground`: `#FFFFFF`
- `--ring`: `#2563EB`

**Dark Mode (`.dark`):**
- `--background`: `#0B102F` — `--card`: `#121A3F` — `--muted`: `#101B46` (navy)
- `--foreground`: `#F9FAFB` — `--muted-foreground`: `#CBD5E1`
- `--border` / `--input`: `#243056`
- `--primary`: `#4F46E5` (purple) — `--primary-foreground`: `#F9FAFB`
- `--secondary`: `#101B46` — `--secondary-foreground`: `#F9FAFB`
- `--accent`: `#2563EB` — `--accent-foreground`: `#F9FAFB`

**State (موحّد):** success `#10B981` · warning `#F59E0B` · error/destructive `#EF4444` · info `#0EA5E9`.

**Brand constants** (إضافية للاستخدام المباشر في tailwind):
- `brand-navy` `#101B46` · `brand-purple` `#4F46E5` · `brand-blue` `#2563EB`

## 2. الملفات المتأثرة

- `src/index.css`
  - إعادة بناء `:root` بقيم **Light Mode** أعلاه (تحويل لكل التوكنز إلى HSL).
  - إعادة بناء `.dark` بقيم **Dark Mode** أعلاه.
  - تحديث التدرّجات:
    - `--gradient-primary`: `linear-gradient(135deg, #2563EB → #4F46E5)`
    - `--gradient-accent`: `linear-gradient(135deg, #4F46E5 → #2563EB)`
    - `--gradient-surface` (light): `#FFFFFF → #F8FAFC` / (dark): `#0B102F → #121A3F`
    - `--gradient-hero`: radial من purple+blue على خلفية soft
    - `--gradient-mesh`: radial blobs (blue/purple/navy)
  - تحديث الظلال: `--shadow-elegant`, `--shadow-card-hover`, `--shadow-accent-glow` لاستخدام `#2563EB`/`#4F46E5` بدلاً من cyan/navy الحالية.
  - تحديث `.ai-gradient-bg::before` و `.dot-pattern` و `.grid-pattern` لتعمل صح في Light + Dark (تستخدم `var(--foreground)` بالفعل، فقط فحص opacity).
  - تحديث `.bento-card` hover border إلى `--primary` بدل foreground.
- `tailwind.config.ts`
  - إضافة `brand: { navy, purple, blue }` و `state: { success, warning, error, info }` تحت `extend.colors`.
- **Default theme switch:** الموقع حاليا داكن افتراضي (الـ root tokens داكنة). نحوّله إلى **Light افتراضي**:
  - فحص `index.html` / `App.tsx` / `Layout.tsx` لإزالة أي `className="dark"` ثابت على `<html>` أو `<body>`، وإبقاء `.dark` متاحاً للتفعيل لاحقاً.
- `src/components/home/CTABanner.tsx`
  - الخلفية `bg-gradient-primary` تبقى (الآن blue→purple). الزر يبقى `bg-background text-foreground` لكن سيظهر أبيض على تدرّج blue/purple — جيد بصرياً.
- `src/pages/Index.tsx` (Hero)
  - الخلفية الحالية تعتمد على navy/cyan؛ مراجعة الـ floating orbs وتغيير ألوانها من cyan إلى `primary`/`accent` (blue+purple) مع opacity منخفض.
  - زر primary CTA: `bg-primary text-primary-foreground shadow-accent-glow` (يصبح blue glow purple).
  - زر outline: `border-border` يبقى — سيظهر صح في الوضعين.
- `src/components/home/BentoGrid.tsx`, `WhyNuzom.tsx`, `Industries.tsx`, `HowToStart.tsx`, `Testimonials.tsx`
  - فحص أي ألوان hardcoded أو `text-cyan-*`/`bg-cyan-*` واستبدالها بـ tokens (`text-accent`, `bg-primary/10`, ...).
- `src/components/Navbar.tsx`, `Footer.tsx`
  - فحص contrast على Light Mode (الـ navbar غالباً سيحتاج `bg-background/80 backdrop-blur` مع `border-border`).
- صفحات أخرى (`About`, `Blog`, `BlogPost`, `Contact`, `FAQ`, `ProductPage`, `PrivacyPolicy`, `TermsConditions`)
  - فحص سريع لاستخدامات `text-white`, `bg-[#...]`, أو tokens مفقودة. استبدال بـ semantic tokens فقط.

## 3. Status Tokens

تحديث `--success` `#10B981`, `--warning` `#F59E0B`, `--destructive` `#EF4444`, إضافة `--info` `#0EA5E9` و mapping في tailwind.

## 4. الذاكرة

تحديث `mem://style/design-system` و `mem://index.md` Core:
- الوضع الافتراضي: **Light** بخلفية بيضاء + softGray + softBlue/Purple.
- Primary = Blue `#2563EB`, Accent = Purple `#4F46E5`, Navy `#101B46` للـ headings/dark surfaces.
- Dark mode: `#0B102F` خلفية مع navy surfaces.
- ممنوع hardcoded colors. كل الـ tokens HSL.

## 5. ملاحظات تقنية

- جميع الألوان تُكتب HSL داخل `index.css` (مثال: `#2563EB` → `221 83% 53%`، `#4F46E5` → `243 75% 59%`، `#101B46` → `230 64% 17%`، `#0B102F` → `230 62% 11%`).
- لا تغييرات في المنطق/البيانات/Backend.
- التحقّق من contrast (WCAG AA) خاصة لـ `muted-foreground` على `softBlue`/`softPurple`.
- RTL والـ logical CSS تبقى كما هي.

## نتيجة متوقّعة

- موقع بمظهر فاتح أنيق (أبيض + لمسات blue/purple soft) كافتراضي.
- وضع داكن غني (navy عميق) عند تفعيل `.dark`.
- نظام ألوان موحّد قابل للصيانة عبر tokens فقط.
