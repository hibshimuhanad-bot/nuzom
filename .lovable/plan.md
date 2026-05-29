# خطة: ثيم داكن بنفسجي (Dark Purple Theme)

تحويل الموقع من الوضع الفاتح الحالي إلى **وضع داكن افتراضي** مستوحى من الصورة: خلفية سوداء عميقة + لمسات بنفسجية متوهجة + كروت زجاجية (glassmorphism).

## 1. اللوحة الجديدة (HSL Tokens)

**الوضع الافتراضي = Dark:**
- `--background`: `#07060F` (أسود مزرق عميق)
- `--card`: `#13102B` (بنفسجي داكن جداً للكروت)
- `--muted`: `#1A1438`
- `--foreground`: `#F5F3FF` (أبيض مائل للبنفسجي)
- `--muted-foreground`: `#A89FC9`
- `--border`: `#2A1F5C` (بنفسجي غامق للحدود)
- `--primary`: `#7C6BFF` (بنفسجي ساطع — لون الزر Choose Standard)
- `--primary-foreground`: `#FFFFFF`
- `--accent`: `#4F46E5`
- `--secondary`: `#1A1438`
- `--ring`: `#7C6BFF`

**Light Mode (اختياري — يبقى كـ fallback):**
- نفس قيم Navy/Purple/Blue الحالية (بيضاء بلمسات بنفسجية).

**State:** success `#10B981` · warning `#F59E0B` · error `#EF4444` · info `#0EA5E9`.

## 2. التدرّجات والتأثيرات البصرية

- `--gradient-primary`: `linear-gradient(135deg, #7C6BFF → #4F46E5)` (الزر الرئيسي بتوهج بنفسجي)
- `--gradient-hero`: radial blobs بنفسجية على خلفية سوداء (مطابق للستارات المتوهجة في الصورة)
- `--gradient-mesh`: 3 blobs بنفسجية ناعمة في زوايا الـ Hero
- `--shadow-accent-glow`: توهج بنفسجي قوي حول الأزرار الرئيسية (`0 0 40px hsl(243 75% 65% / 0.5)`)
- `--shadow-card-hover`: حدود بنفسجية متوهجة عند الـ hover على الكروت

## 3. الملفات المُعدَّلة

- **`src/index.css`**
  - تبديل قيم `:root` لتصبح Dark (بدل Light الحالي).
  - نقل قيم Light الحالية إلى `.light` class (للاستخدام اللاحق لو احتاج).
  - تحديث `.bento-card` لتأخذ خلفية شبه شفافة + `backdrop-blur` (نمط زجاجي مطابق للصورة).
  - تحديث `.ai-gradient-bg::before` لإضافة blobs بنفسجية متوهجة.
- **`index.html`** أو **`src/App.tsx`/`Layout.tsx`**
  - إضافة `className="dark"` على `<html>` لتفعيل الوضع الداكن افتراضياً (لو موجود حالياً يُتأكد منه).
- **`tailwind.config.ts`**
  - تحديث `brand` tokens لتعكس البنفسجي الجديد (`brand-purple: #7C6BFF`).
- **`src/pages/Index.tsx`** (Hero)
  - الـ floating orbs: تغيير ألوانها لـ purple glow.
  - الـ CTA الرئيسي: `bg-primary` مع `shadow-accent-glow` للتوهج.
- **`src/components/home/BentoGrid.tsx`, `CTABanner.tsx`, `WhyNuzom.tsx`, `Industries.tsx`, `HowToStart.tsx`, `Testimonials.tsx`**
  - مراجعة أي لون hardcoded واستبداله بـ tokens.
  - الكروت تأخذ المظهر الزجاجي تلقائياً عبر `.bento-card`.
- **`Navbar.tsx`, `Footer.tsx`**
  - تأكيد contrast على الخلفية السوداء.
  - زر Contact في Navbar يأخذ `bg-primary` مع توهج بنفسجي.

## 4. الذاكرة

تحديث `mem://index.md` Core و `mem://style/design-system`:
- الوضع الافتراضي: **Dark** (أسود `#07060F` + بنفسجي `#7C6BFF`).
- Primary = Purple `#7C6BFF`, Accent = Indigo `#4F46E5`.
- مظهر الكروت: glassmorphism بحدود بنفسجية ناعمة.
- ممنوع hardcoded colors، كل الـ tokens HSL.

## 5. ملاحظات

- **لا تغييرات في المنطق/البيانات/Backend.**
- RTL والـ logical CSS تبقى كما هي.
- فحص contrast (WCAG AA) للنصوص الثانوية على الخلفية الداكنة.
- الشعار قد يحتاج نسخة فاتحة لو كان داكناً.

## النتيجة المتوقّعة

موقع بمظهر داكن أنيق وفاخر: خلفية سوداء عميقة، كروت زجاجية بحدود بنفسجية، أزرار رئيسية متوهجة بالبنفسجي، وتأثيرات ضوئية ناعمة في الـ Hero — مطابق لروح الصورة المرفقة.
