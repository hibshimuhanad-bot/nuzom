

# إصلاح زر "تصفح الأنظمة"

## المشكلة
زر "تصفح الأنظمة" في الـ Hero يوجّه إلى `/products` لكن لا يوجد route معرّف لهذا المسار في `App.tsx`، مما يؤدي لصفحة 404.

## الحل
بما أن المنتجات الأربعة معروضة في الصفحة الرئيسية (BentoGrid)، الأفضل تغيير رابط الزر ليمرر المستخدم للأسفل إلى قسم المنتجات في نفس الصفحة، أو توجيهه لأول منتج.

### التغييرات:
1. **`src/components/home/BentoGrid.tsx`**: إضافة `id="products"` للـ section
2. **`src/pages/Index.tsx`**: تغيير `Link to="/products"` إلى anchor link `href="#products"` مع smooth scroll، أو استخدام `scrollIntoView`

