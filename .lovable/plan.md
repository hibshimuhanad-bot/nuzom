

# خطة شاملة: تحسين واجهة المستخدم وتجربة المستخدم واللغة

## المشاكل المكتشفة (مرتبة حسب الأولوية)

---

### A. محتوى يشير لمنتجات محذوفة (خطير)

1. **Testimonials.tsx سطر 23**: شهادة د. نورا الزهراني تذكر "Nzom Fleet" — منتج محذوف
2. **Testimonials.tsx سطر 18**: شهادة محمد الحربي تذكر "HR modules" — منتج محذوف
3. **blog.ts مقال #3** (`future-enterprise-fleet-management`): مقال كامل عن Fleet Management — منتج محذوف
4. **blog.ts مقال #5** (`hr-tech-trends-gcc-region`): مقال كامل عن HR Tech — منتج محذوف

### B. نصوص غير مترجمة (يكسر التجربة للمستخدم العربي)

5. **NotFound.tsx**: الصفحة كاملة بالإنجليزي فقط ("404", "Oops! Page not found", "Return to Home") + بدون Layout + تصميم لا يتوافق مع الثيم الداكن (`bg-muted`)
6. **ProductPage.tsx سطر 19**: `"Product not found"` و `"Go Home"` بالإنجليزي فقط
7. **Testimonials.tsx سطر 66**: `"Trusted by enterprises across Saudi Arabia & the Gulf"` — إنجليزي ثابت
8. **Footer.tsx سطر 66**: `"Nzom Laps"` في حقوق النشر — لا يتغير بالعربي
9. **AdminLogin.tsx**: الصفحة كاملة بالإنجليزي ("Admin Dashboard", "Sign in", "Email", "Password", إلخ)
10. **AdminDashboard.tsx**: كل النصوص بالإنجليزي ("Total Submissions", "Contact Submissions", "Logout", إلخ)

### C. مشاكل RTL

11. **Navbar.tsx سطر 63**: `mr-2` بدل `me-2` في أيقونة dropdown المنتجات — يكسر الاتجاه في RTL
12. **BlogPost.tsx سطر 36**: Hero يستخدم `bg-primary` (لون مصمت أزرق) بدل `ai-gradient-bg` المستخدم في كل الصفحات الأخرى

### D. بيانات وهمية / placeholder

13. **Contact.tsx سطر 61**: رقم الهاتف `"+966 11 XXX XXXX"` — placeholder واضح يظهر للمستخدم
14. **Footer.tsx**: لا يعرض رقم هاتف — غير متسق مع صفحة التواصل

### E. تحسينات تجربة المستخدم

15. **HowToStart.tsx سطر 6**: أرقام الخطوات `١ ٢ ٣` ثابتة بالعربي — لا تتغير للإنجليزي
16. **BlogPost.tsx**: Hero يستخدم `bg-primary` بلون مصمت — غير متسق مع بقية الصفحات التي تستخدم `ai-gradient-bg`
17. **Industries.tsx**: لا يوجد subtitle تحت العنوان مثل بقية الأقسام — يكسر الإيقاع البصري

---

## التغييرات المطلوبة (16 ملف)

### 1. `src/components/home/Testimonials.tsx`
- استبدال شهادة Fleet (د. نورا) بشهادة عن نظام الحجوزات
- تعديل شهادة محمد الحربي لتشير لنظام المهام بدل HR
- ترجمة جملة الثقة في الأسفل باستخدام `t()` مع مفتاح جديد

### 2. `src/data/blog.ts`
- تحويل مقال Fleet (#3) إلى مقال عن الحجوزات الرقمية وأتمتة المواعيد
- تحويل مقال HR (#5) إلى مقال عن أتمتة إدارة المهام في المؤسسات
- تحديث slugs و categories إذا لزم

### 3. `src/pages/NotFound.tsx`
- إضافة `Layout` wrapper
- دعم ثنائي اللغة (عربي/إنجليزي) باستخدام `useLanguage()`
- تطبيق الثيم الداكن (`ai-gradient-bg`) مع تصميم متوافق

### 4. `src/pages/ProductPage.tsx`
- ترجمة حالة "Product not found" و "Go Home" للعربي

### 5. `src/components/Navbar.tsx`
- تغيير `mr-2` → `me-2` (سطر 63)

### 6. `src/components/Footer.tsx`
- ترجمة اسم الشركة في سطر حقوق النشر حسب اللغة
- إزالة أو عدم عرض رقم هاتف وهمي

### 7. `src/pages/Contact.tsx`
- إزالة رقم الهاتف الوهمي أو استبداله بنص مناسب مثل "تواصل عبر البريد"

### 8. `src/components/home/HowToStart.tsx`
- جعل الأرقام ديناميكية: `١ ٢ ٣` للعربي و `1 2 3` للإنجليزي

### 9. `src/pages/BlogPost.tsx`
- تغيير Hero من `bg-primary` إلى `ai-gradient-bg dot-pattern` ليتوافق مع بقية الصفحات

### 10. `src/components/home/Industries.tsx`
- إضافة subtitle تحت العنوان لتوحيد الإيقاع مع بقية الأقسام

### 11. `src/contexts/LanguageContext.tsx`
- إضافة مفاتيح ترجمة جديدة:
  - `"notfound.title"`, `"notfound.desc"`, `"notfound.home"`
  - `"testimonials.trust"`
  - `"industries.subtitle"`
  - `"product.notfound"`, `"product.gohome"`

### 12. `src/pages/AdminLogin.tsx`
- ترجمة جميع النصوص (العنوان، الأزرار، Labels، Placeholders) باستخدام `language` context

### 13. `src/pages/AdminDashboard.tsx`
- ترجمة جميع نصوص الداشبورد (العناوين، الأعمدة، الأزرار) باستخدام `language` context

---

## ملخص التأثير

| الفئة | عدد المشاكل | الملفات المتأثرة |
|-------|-------------|-----------------|
| محتوى منتجات محذوفة | 4 | Testimonials, blog.ts |
| نصوص غير مترجمة | 6 | NotFound, ProductPage, Testimonials, Footer, AdminLogin, AdminDashboard |
| مشاكل RTL | 1 | Navbar |
| بيانات وهمية | 2 | Contact, Footer |
| تحسينات بصرية | 3 | BlogPost, HowToStart, Industries |
| **المجموع** | **16** | **13 ملف** |

