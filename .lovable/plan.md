

# تحديث اسم العلامة التجارية: Nuzom Lab → Nzom Laps (مختبرات الأنظمة)

## التغييرات المطلوبة

استبدال شامل في 7 ملفات:

| القيمة القديمة | القيمة الجديدة |
|---|---|
| `Nuzom Lab` | `Nzom Laps` |
| `نُظُم لاب` | `مختبرات الأنظمة` |
| `nuzomlab.com` | `nzomlaps.com` |
| `info@nuzomlab.com` | `info@nzomlaps.com` |
| `admin@nuzomlab.com` | `admin@nzomlaps.com` |
| الحرف `N` في اللوجو | `NL` أو يبقى `N` |

### الملفات المتأثرة:

1. **`index.html`** — عنوان الصفحة، meta tags، Open Graph، JSON-LD schema، canonical URL
2. **`src/components/Navbar.tsx`** — اسم العلامة في الشعار والقائمة الجانبية
3. **`src/components/Footer.tsx`** — اسم العلامة والبريد الإلكتروني
4. **`src/components/SEOHead.tsx`** — عناوين وأوصاف جميع الصفحات + الدومين في og:url
5. **`src/contexts/LanguageContext.tsx`** — ترجمات hero.subtitle, why.title, cta.subtitle, about.story.text
6. **`src/pages/About.tsx`** — عنوان صفحة "من نحن"
7. **`src/pages/Contact.tsx`** — البريد الإلكتروني
8. **`src/pages/AdminLogin.tsx`** — placeholder البريد
9. **`public/sitemap.xml`** — جميع الروابط (nuzomlab.com → nzomlaps.com)
10. **`src/data/products.ts`** — أسماء المنتجات تبقى "Nuzom HSSE" إلخ (اسم المنتج مختلف عن اسم الشركة) أو تتغير إلى "Nzom HSSE"

### ملاحظة على أسماء المنتجات
المنتجات حالياً مسماة "Nuzom HSSE", "Nuzom Legal" إلخ — سيتم تحديثها إلى "Nzom HSSE", "Nzom Legal" وهكذا، مع تحديث الأسماء العربية (نُظُم السلامة → نزوم السلامة أو تبقى كما هي لأنها أسماء منتجات).

