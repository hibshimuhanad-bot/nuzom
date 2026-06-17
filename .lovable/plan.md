## توحيد Hero لكل المنتجات

### 1. تحديد حجم أقصى للعنوان (H1)
في `src/pages/ProductPage.tsx` السطر 67:
- **الحالي:** `text-3xl md:text-5xl lg:text-6xl` — يطلع ضخم جداً للأسماء الإنجليزية الطويلة (Nexdo Task Managment).
- **الجديد:** `text-3xl md:text-4xl lg:text-5xl` + `max-w-2xl mx-auto` على H1 + `break-words` لضمان عدم الفيضان.

النتيجة: عنوان "الدليل" و"Nexdo Task Managment" يطلعون بنفس الحجم تقريباً.

### 2. توحيد الزر الأساسي على "ابدأ مجاناً"
كل المنتجات تحتاج `primaryCTA` بنفس النص. الروابط المقترحة (في `src/data/products.ts`):

| المنتج | الرابط الحالي | الزر |
|---|---|---|
| الدليل | `aldalyel.app/register` ✅ | ابدأ مجاناً |
| CRM | `namaacrm.app/register` ✅ | ابدأ مجاناً |
| Sumaa Plus | `sumaaplus.nzomlabs.com/login` ✅ | ابدأ مجاناً |
| Nexdo | (ديمو فقط) | **ابدأ مجاناً** → `/contact` |
| Booking | لا يوجد | **ابدأ مجاناً** → `/contact` |
| Zerisks | لا يوجد | **ابدأ مجاناً** → `/contact` |

للمنتجات بدون رابط تسجيل: نضيف `primaryCTA` يوجّه لصفحة `/contact` بنفس النص "ابدأ مجاناً" / "Start Free".

ملاحظة: زر "جرّب الديمو" لـ Nexdo يبقى ثانوي (موجود بالفعل في ProductPage.tsx).

### الملفات المتأثرة
- `src/pages/ProductPage.tsx` — تصغير حجم H1 + إضافة max-width.
- `src/data/products.ts` — إضافة `primaryCTA` لـ Nexdo / Booking / Zerisks يوجّه للتواصل بنص "ابدأ مجاناً".

### التحقق
بعد التنفيذ: مقارنة `/products/aldalyel` و `/products/nexdo` و `/products/booking` بصرياً — نفس حجم العنوان، نفس الزر الأساسي البنفسجي.
