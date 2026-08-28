# إضافة منتج جديد: Visitor Path — نظام إدارة الزوار

## الهدف
إضافة **Visitor Path** كمنتج جديد في موقع Nzom Labs بنفس نمط صفحة الدليل (Aldalyel) الموحّد مع باقي الأنظمة.

## الخطوات

1. **الشعار**
   - نسخ `visitorpath-logo.png` من مشروع Visitor Path ورفعه كأصل CDN (`src/assets/visitorpath-logo.png.asset.json`).
   - تسجيله في `src/lib/productLogos.ts` ليظهر في كل مكان (Navbar، BentoGrid، About، صفحة المنتج).

2. **بيانات المنتج** في `src/data/products.ts` (الـ slug: `visitor-path`):
   - الاسم: Visitor Path / مسار الزائر
   - Tagline: نظام إدارة الزوار
   - محتوى ثنائي اللغة (AR/EN): emotionalHook, description, problem, solution, imagineDay
   - 6 مميزات من واقع النظام: الدعوات والزيارات، استقبال QR، قائمة الموافقات، قائمة المراقبة والتنبيهات الأمنية، الإشغال المباشر، التقارير وسجل التدقيق
   - الأقسام الموحدة: workflow, RBAC, analytics, security
   - Trust badges + شهادة عميل مجهولة الاسم ("أحد عملائنا")
   - CTA رئيسي واحد: https://visitorpath.nzomlabs.com
   - أسئلة شائعة FAQ خاصة بالمنتج
   - بدون أسعار (تمت إزالة الأسعار من كل المنتجات سابقاً)

3. **SEO**
   - تحديث `public/sitemap.xml` بإضافة `/products/visitor-path`
   - تحديث `public/llms.txt` إن كان يحتوي قائمة المنتجات

4. **صورة المعاينة**
   - رفع لقطة لوحة معلومات Visitor Path المرفوعة (`user-uploads://image-23.png`) كأصل CDN باسم `visitorpath-preview.png.asset.json`
   - إضافتها إلى `screenshotMap` في `src/pages/ProductPage.tsx` (تظهر فوق الأسئلة الشائعة)

## التقنية
- الملفات: `src/data/products.ts`, `src/lib/productLogos.ts`, `public/sitemap.xml`, `public/llms.txt`
- الشعار يُرفع عبر `lovable-assets` CLI من النسخة المقروءة للمشروع في `/tmp/cross-project/...`
- لا تعديلات على قالب الصفحة — التصميم موحّد مسبقاً في `src/pages/ProductPage.tsx`
