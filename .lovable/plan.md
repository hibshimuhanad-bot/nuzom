## توحيد تصميم كل المنتجات على نفس ستايل "الدليل"

كل المنتجات تستخدم نفس القالب `ProductPage.tsx` أصلاً، لكن الاختلافات البصرية تأتي من بيانات المنتج في `src/data/products.ts`. التوحيد يتطلب:

### 1. توحيد ألوان الأيقونات (Hero fallback)
حالياً كل منتج له `color` مختلف:
- tasks/hsse: `from-blue-500 to-cyan-600`
- legal: `from-violet-500 to-purple-600`
- nexdo: `from-pink-500 to-rose-600`
- booking: `from-fuchsia-500 to-purple-600`
- crm: `from-teal-500 to-emerald-600`
- samaa: (تحقق)

**التوحيد:** كلها → `from-primary to-accent` (بنفسجي البراند).
ملاحظة: المنتجات اللي عندها logo (الدليل/Zerisks/Legal) يظهر اللوجو بدل الأيقونة، فالتأثير محدود — لكن نوحد الـ fallback للاتساق.

### 2. توحيد وجود نفس الأقسام لكل منتج
نفس قالب الدليل = Hero → Screenshot → Problem/Solution → Imagine → Features → Workflow/RBAC/Analytics/Security → Testimonial → Pricing → FAQ → CTA.

نتأكد كل منتج عنده:
- `pricing` ✅ (أُضيف لكل المنتجات سابقاً)
- `faq` — نتحقق ونضيف أسئلة موحّدة (4-5) للمنتجات الناقصة
- `testimonial` — نتحقق ونضيف للمنتجات الناقصة
- `trustBadges` — نوحّد على شارات متشابهة (PDPL، بيانات في السعودية، ZATCA حيث ينطبق)
- `imagineDay`, `workflowDesc`, `rbacDesc`, `analyticsDesc`, `securityDesc` — نتحقق من وجودها

### 3. توحيد الـ Screenshot
حالياً 3 منتجات فقط لها screenshot (tasks/hsse/legal). الباقي (nexdo/booking/crm/samaa/zerisks) ما يظهر لهم قسم المعاينة.

**خيارات:**
- (أ) إخفاء قسم Screenshot للمنتجات اللي ما عندها صورة (الوضع الحالي — تلقائياً).
- (ب) إضافة placeholder موحّد (mockup عام).

أقترح (أ) — أنظف، ولاحقاً نضيف صور حقيقية.

### 4. الملف المتأثر
- `src/data/products.ts` فقط — تعديل قيم `color` + إضافة `faq`/`testimonial`/`trustBadges` الناقصة.
- بدون تغيير على `ProductPage.tsx` (القالب موحّد أصلاً).

### تأكيد قبل البناء
- هل أوحّد ألوان `color` كلها على البنفسجي؟ (نعم/لا)
- هل أضيف FAQ + Testimonial للمنتجات الناقصة بمحتوى مقترح بنفس أسلوب الدليل؟ (نعم/لا)
- شارات الثقة الموحدة: **PDPL متوافق + بيانات في السعودية + دعم عربي/إنجليزي** (+ ZATCA لـ booking/samaa/crm). موافق؟
