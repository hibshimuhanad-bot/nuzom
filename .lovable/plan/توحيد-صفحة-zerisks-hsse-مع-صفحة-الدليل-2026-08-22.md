# توحيد صفحة Zerisks HSSE مع صفحة الدليل

## 1. إصلاح زر "ابدأ مجاناً"
حالياً زر Zerisks يشير إلى `/contact` بينما الدليل يفتح رابط تسجيل خارجي.

التعديل في `src/data/products.ts` (منتج `zerisks`):
```
primaryCTA: {
  label: { en: "Start Free", ar: "ابدأ مجاناً" },
  href: "https://zerisks.nzomlabs.com",
  external: true,
}
```
يصلح الزر في ثلاثة مواضع: الهيرو، وبانر CTA في آخر الصفحة، وأي زر تسعير متبقٍ.

## 2. إضافة شعار ZeRisk
- رفع الشعار المرفوع (ZeRisk بالـ N والدرع) إلى CDN عبر `lovable-assets` وحفظ المؤشر في `src/assets/zerisks-logo.png.asset.json`.
- تسجيله في `src/lib/productLogos.ts` تحت المفتاح `zerisks`.
- النتيجة: يظهر الشعار في هيرو صفحة المنتج، وقائمة الحلول في النافبار (سطح المكتب والموبايل)، وشبكة المنتجات بالصفحة الرئيسية، وصفحة "من نحن" — تماماً مثل الدليل.

## 3. حذف الأسعار
حذف مصفوفة `pricing` من جميع المنتجات في `src/data/products.ts` (Zerisks، الدليل، Nexdo، Booking، CRM، سمعة بلس)، بحيث يختفي قسم "أسعار بسيطة وواضحة" من كل صفحات المنتجات. قسم التسعير في `ProductPage.tsx` مشروط أصلاً بوجود بيانات، فلا حاجة لتعديله. تبقى الأسعار عبر التواصل المباشر / زر "ابدأ مجاناً".

## 4. إصلاح قسم "معاينة النظام"
`src/pages/ProductPage.tsx` يربط لقطات الشاشة بمفاتيح قديمة (`tasks`, `hsse`, `legal`) بينما المُعرّفات أصبحت `nexdo`, `zerisks`, `aldalyel` — لذلك المعاينة لا تظهر لأي منتج حالياً.

تصحيح مفاتيح `screenshotMap`:
- `zerisks` → `hsse-product-shot.png`
- `aldalyel` → `legal-product-shot.png`
- `nexdo` → `tasks-product-shot.png`

## 5. المقارنة بعد التنفيذ (Zerisks مقابل الدليل)

| العنصر | الحالة بعد التنفيذ |
|---|---|
| رابط CTA خارجي | ✅ zerisks.nzomlabs.com |
| شعار المنتج | ✅ مضاف |
| لقطة شاشة النظام | ✅ تظهر |
| problem / solution / imagine | ✅ موجود |
| 6 ميزات | ✅ موجود |
| workflow / RBAC / analytics / security | ✅ موجود |
| شارات الثقة (4) | ✅ موجود |
| رأي عميل | ✅ موجود |
| أسئلة شائعة (4) | ✅ موجود |
| الأسعار | ❌ محذوفة من كل المنتجات (مقصود) |

## تفاصيل تقنية
- الملفات: `src/data/products.ts`، `src/lib/productLogos.ts`، `src/pages/ProductPage.tsx`، وملف مؤشر أصل جديد في `src/assets/`.
- لا تغييرات في قاعدة البيانات أو الباك-إند.
