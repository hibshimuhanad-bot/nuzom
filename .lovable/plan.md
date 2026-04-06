

# إضافة زر ديمو في صفحة Nexdo

## التغييرات

### `src/pages/ProductPage.tsx`
- إضافة زر "جرّب الديمو" بجانب زر "طلب عرض" الموجود في Hero section (سطر 52-57)
- الزر يفتح رابط `https://ptmpillare.lovable.app/` في تبويب جديد
- يظهر فقط عندما يكون المنتج هو `nexdo` (باستخدام شرط `slug === "nexdo"`)
- تصميم الزر بنمط `outline` للتمييز عن الزر الأساسي

### التفاصيل التقنية
- استخدام `<a href="..." target="_blank" rel="noopener noreferrer">` داخل `Button asChild`
- إضافة أيقونة `Play` أو `ExternalLink` للزر
- النص: "جرّب الديمو" بالعربي / "Try Demo" بالإنجليزي
- الزرين يكونون بجانب بعض (`flex gap-4`)

