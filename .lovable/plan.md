

# تحسينات متبقية

بعد مراجعة شاملة لكل الملفات، هذه المشاكل المتبقية:

---

## 1. أخطاء نصية

| المشكلة | الملف | السطر |
|---------|-------|-------|
| "Nzom Laps" في القائمة الجانبية (موبايل) | `Navbar.tsx` | 108 |
| `meta author = "Nzom Laps"` | `index.html` | 9 |
| keywords تذكر "HR, fleet management" (محذوفة) | `index.html` | 10 |

## 2. تحسينات SEO و metadata

| المشكلة | الملف |
|---------|-------|
| `hero.stats` يذكر "5 Sectors" بالإنجليزي لكن 4 أنظمة فقط | `LanguageContext.tsx` |
| `og:description` لا تزال تذكر "governance" بدون ذكر المنتجات الفعلية | `index.html` |

## 3. تحسينات UX صغيرة

| المشكلة | الملف |
|---------|-------|
| خريطة فارغة في صفحة التواصل (مربع فارغ بأيقونة فقط) | `Contact.tsx` سطر 188 |
| `AdminLogin` خلفية `bg-primary` مصمتة — لا تتوافق مع الثيم | `AdminLogin.tsx` سطر 65 |

---

## التغييرات المطلوبة

### `index.html`
- سطر 9: `"Nzom Laps"` → `"Nzom Labs"`
- سطر 10: تحديث keywords لتعكس المنتجات الحالية (safety, legal, tasks, booking)

### `src/components/Navbar.tsx`
- سطر 108: `"Nzom Laps"` → `"Nzom Labs"`

### `src/contexts/LanguageContext.tsx`
- `hero.stats` EN: `"Ready Systems · 5 Sectors"` → `"Ready Systems · 4 Sectors"`

### `src/pages/Contact.tsx`
- سطر 188-190: استبدال المربع الفارغ بمعلومات ساعات العمل أو رسالة مناسبة

### `src/pages/AdminLogin.tsx`
- سطر 65: `bg-primary` → `ai-gradient-bg` لتوحيد التصميم

