

# إضافة لقطة شاشة نظام المهام في صفحة المنتج

## الخطة

### 1. نسخ الصورة للمشروع
- نسخ `user-uploads://image-4.png` إلى `src/assets/screenshots/tasks-dashboard.png`

### 2. تحديث `Product` interface في `src/data/products.ts`
- إضافة حقل `screenshots?: string[]` اختياري
- تعبئة المسار لمنتج `tasks`

### 3. إضافة قسم "معاينة النظام" في `src/pages/ProductPage.tsx`
- قسم جديد بين Hero و Problem/Solution
- الصورة داخل إطار browser mockup (شريط عنوان + أزرار traffic light + ظل + زوايا مستديرة)
- عنوان القسم: "معاينة النظام" / "System Preview"
- تأثير hover خفيف (scale) للتفاعل
- القسم يظهر فقط إذا كان `product.screenshots` موجود وغير فارغ

### 4. إضافة مفاتيح ترجمة في `LanguageContext.tsx`
- `"product.preview"`: "معاينة النظام" / "System Preview"

### 5. استخدام Product Shot Generator
- تحويل الصورة لـ product shot احترافي بإطار macOS وخلفية gradient قبل إضافتها

---

**النتيجة**: صفحة المهام ستعرض لقطة الـ dashboard الحقيقية بشكل احترافي. يمكنك لاحقاً إضافة صور للأنظمة الأخرى بنفس الطريقة.

