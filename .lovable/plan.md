# Plan: Tier A Monochrome Color System

تطبيق نظام ألوان **أحادي اللون فاخر** على غرار Vercel / Linear، مع لون واحد برّاق (أزرق `#0070F3`) كلمسة تمييز فقط. يستبدل الكحلي/الذهبي الحالي بالكامل.

## 1. لوحة الألوان (Tier A)

**فاتح (Light Mode — افتراضي):**
- Background: `#FFFFFF` / Surface: `#FAFAFA` / Muted: `#F5F5F5`
- Border: `#E5E5E5` (subtle) / `#D4D4D4` (emphasis)
- Text: `#0A0A0A` primary / `#525252` secondary / `#A3A3A3` muted
- Accent (one only): `#0070F3` (Vercel Blue)

**غامق (Dark Mode):**
- Background: `#0A0A0A` / Surface: `#111111` → `#1A1A1A` → `#262626`
- Border: `#2E2E2E` / `#404040`
- Text: `#FAFAFA` / `#A0A0A0` / `#666666`
- Accent: `#0070F3` (نفس اللون)

**حالات:** Success `#16A34A` · Warning `#D97706` · Error `#DC2626`

## 2. الملفات المتأثرة

- `src/index.css` — إعادة بناء كل `--background, --foreground, --primary, --secondary, --accent, --muted, --border, --ring, --card, --popover, --sidebar-*, --primary-glow, --accent-glow` بـ HSL للقيم أعلاه. تحديث جميع المتغيّرات في `:root` و `.dark`.
- `src/index.css` (التدرّجات/الظلال) — إزالة كل تدرّجات/توهّجات الذهب (`--gradient-gold`, `--gradient-gold-shine`, `--shadow-gold-glow`, `--shadow-premium`, `.glass-gold`, `.hairline-gold`, `@keyframes gold-shine`, `.shimmer-border` بألوانه الذهبية). استبدالها بـ:
  - `--gradient-primary` — تدرّج رمادي عميق
  - `--gradient-accent` — تدرّج خفيف من `#0070F3` للتأكيد فقط على CTAs
  - `--shadow-elegant` — ظل رمادي خالص (بدون توهّج ذهبي)
  - `--shadow-accent-glow` — حلقة زرقاء خفيفة للأزرار الرئيسية
- `tailwind.config.ts` — إزالة المفاتيح الميتة (`navy`, `electric`, `light-gray`) وقد تُسبّب تحذيرات.
- `src/pages/Index.tsx` (Hero) — استبدال:
  - `bg-gradient-gold text-primary` على CTA → `bg-foreground text-background` (زر أسود بنص أبيض، أسلوب Vercel)
  - `shadow-gold-glow` → `shadow-elegant`
  - `glass-gold` → `glass-panel` (بدون لون ذهبي)
  - الكرات الذهبية العائمة → كرات رمادية/زرقاء خفيفة
  - `text-gradient` على H1 → نص أسود خالص (`text-foreground`)
  - `border-accent/40` على زر الـ outline → `border-border hover:border-foreground`
- `src/components/home/CTABanner.tsx` — نفس المعالجة: زر `bg-background text-foreground`، إزالة `shadow-gold-glow` و `hairline-gold`.
- `src/components/home/BentoGrid.tsx` — إزالة `bg-gradient-gold` overlay، استبدال أيقونات المنتج بخلفية `bg-foreground text-background`.
- `src/components/Navbar.tsx`, `src/components/Footer.tsx`, `src/components/home/{WhyNuzom,HowToStart,Industries,Testimonials}.tsx`, `src/pages/{About,Blog,BlogPost,Contact,FAQ,ProductPage,PrivacyPolicy,TermsConditions}.tsx` — فحص سريع واستبدال أي `text-accent`, `bg-accent`, `border-accent` المستخدمة بنيّة "ذهبية" بـ `text-foreground` أو `border-border` حسب السياق. الاحتفاظ بـ `accent` فقط على عناصر التأكيد الحقيقية (روابط نشطة، CTA رئيسي، badges حالة).

## 3. مبدأ الاستخدام (Vercel-style restraint)

- الأزرار الرئيسية: أسود/أبيض عاكس (`bg-foreground text-background`) — وليس Accent.
- الأزرق `#0070F3` مخصّص للـ: روابط، حالات focus/ring، تأكيد مرّة واحدة لكل صفحة كحد أقصى.
- لا تدرّجات على النصوص (`text-gradient`, `text-gradient-gold` → تُحذف).
- لا توهّجات ملوّنة كبيرة في الـ Hero.
- اعتماد المساحات البيضاء والـ Borders الرفيعة كعنصر تصميمي رئيسي.

## 4. الذاكرة

- تحديث `mem://style/design-system` و `mem://index.md` Core: استبدال "Dark Tech UI / Navy & Gold" بـ **"Tier A Monochrome — Vercel/Linear style: BG `#FFFFFF`/`#0A0A0A`, Accent `#0070F3` فقط"**.

## ملاحظات تقنية

- كل الألوان HSL في `index.css`.
- التوافق مع RTL والـ logical CSS يبقى كما هو.
- لا تغييرات على المنطق أو البيانات أو الـ Backend.
- بعد التطبيق، فحص بصري سريع للـ Hero و BentoGrid و CTABanner للتأكد من اتساق الـ contrast (WCAG AA).
