

# تغيير اسم برنامج السلامة إلى Zerisks / زيريسكس

## التغييرات المطلوبة

### 1. `src/data/products.ts`
- تغيير `slug` من `"hsse"` إلى `"zerisks"`
- تغيير `name` من `"Nzom HSSE"` / `"نزوم السلامة"` إلى `"Zerisks"` / `"زيريسكس"`
- تحديث جميع النصوص الوصفية (`description`, `tagline`, `emotionalHook`, `problem`, `solution`, `imagineDay`, `features`) لتستخدم الاسم الجديد

### 2. `src/pages/BlogPost.tsx`
- تحديث `categoryToProduct.hsse` — تغيير `slug` إلى `"zerisks"` والاسم والـ CTA

### 3. `src/pages/FAQ.tsx`
- تغيير عنوان قسم HSSE والأسئلة والأجوبة لتستخدم "Zerisks" / "زيريسكس"

### 4. `src/components/home/Testimonials.tsx`
- تحديث اقتباس خالد الراشدي من "Nzom HSSE" إلى "Zerisks" و"نزوم HSSE" إلى "زيريسكس"

### 5. `src/components/SEOHead.tsx`
- تحديث أي إشارة للمنتج في بيانات SEO

### 6. `src/data/blog.ts`
- تحديث أي إشارة لـ "HSSE" أو "نزوم السلامة" في محتوى المقالات

### ملاحظة تقنية
- سيتم تغيير الـ slug في الرابط من `/products/hsse` إلى `/products/zerisks`

