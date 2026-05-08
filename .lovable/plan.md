# إضافة منتج Harmony CRM إلى الأنظمة

## نظرة عامة

إضافة Harmony CRM كمنتج خامس في المنظومة، يظهر في:

- Bento Grid في الصفحة الرئيسية
- Dropdown "Solutions" في الـ Navbar
- صفحة منتج مخصصة على `/products/harmony`
- قائمة المنتجات في الـ Footer (تلقائياً عبر `products`)

## التغييرات

### `src/data/products.ts`

إضافة منتج جديد بنفس بنية المنتجات الحالية:

- **slug**: `crm`
- **name**: Customers Relation Managments (بالعربي والإنجليزي)
- **tagline.ar**: نظام إدارة علاقات العملاء
- **tagline.en**: Your customers, perfectly in tune.
- **emotionalHook**: كل عميل في مكانه، وكل صفقة تحت السيطرة.
- **icon**: `Users` أو `Building2` من lucide-react
- **color**: تدرج جديد مميز عن باقي المنتجات (مثلاً `from-pink-500 to-rose-600`)
- **problem / solution / imagineDay**: محتوى عاطفي عربي/إنجليزي على نمط بقية المنتجات (متابعة العملاء، ضياع الفرص، فوضى الـ Excel)
- **features** (6 عناصر): 
  1. إدارة العملاء والشركات (Contacts & Companies)
  2. إدارة الصفقات والـ Pipeline (Deals)
  3. إدارة الفرص المحتملة (Leads)
  4. المهام والمتابعات (Tasks)
  5. التقارير ولوحات التحكم (Reports & Analytics)
  6. الإشعارات الذكية (Smart Notifications)
- **workflowDesc / rbacDesc / analyticsDesc / securityDesc**: بنفس النمط

## النتيجة

سيظهر المنتج تلقائياً في:

- `BentoGrid` (الصفحة الرئيسية)
- `Navbar` dropdown
- صفحة `/products/harmony`
- قائمة Footer

لا حاجة لتعديل أي ملف آخر — البنية موحّدة عبر `products.ts`.

## ملاحظة

لا يوجد screenshot لـ Harmony CRM حالياً، فلن يظهر قسم "Preview" في صفحته (الكود يتحقق من `screenshotMap[slug]`). إذا أردت إضافة سكرين شوت لاحقاً، أرفقه وسأضيفه.