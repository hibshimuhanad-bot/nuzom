

# إصلاح مشاكل الأداء (Performance)

## المشاكل المكتشفة من Lighthouse

### 1. صورة اللوقو ضخمة جداً (339 KB, 1024x1024 PNG)
- تُعرض بحجم 32x32 أو 56x56 بكسل لكن الملف الأصلي 1024x1024
- **الحل**: تحويل `logo.png` إلى WebP بحجم مناسب (128x128 كافي لكل الاستخدامات مع Retina). سأنشئ نسخة WebP مُحسّنة وأحدّث الاستيرادات في Navbar و Footer و AdminDashboard.

### 2. ParticleField يسبب Forced Reflow (~60ms)
- استخدام `canvas.offsetWidth` و `canvas.offsetHeight` داخل حلقة الرسم يجبر المتصفح على إعادة حساب التخطيط كل إطار
- **الحل**: تخزين الأبعاد في `useRef` وتحديثها فقط عند `resize`، بدلاً من قراءتها كل frame.

### 3. CSS غير مستخدم (~77%)
- ملف CSS واحد يحتوي كل الأنماط لكن معظمها لا يُستخدم في الصفحة الرئيسية
- **الحل محدود**: هذا طبيعي في تطبيق SPA بملف CSS واحد. يمكن تقليل بعض الأنماط غير المستخدمة من `index.css`.

### 4. JavaScript غير مستخدم (~54 KB من الحزمة الرئيسية)
- الحزمة الرئيسية تحتوي مكتبات لا تُستخدم فوراً
- **الحل**: مراجعة الاستيرادات وتطبيق lazy loading أكثر عدوانية.

### 5. Redirect من lovable.app → nzomlabs.com (780ms)
- هذا على مستوى المنصة ولا يمكن إصلاحه من الكود.

### 6. Cache headers
- على مستوى المنصة ولا يمكن إصلاحه من الكود.

---

## التغييرات التقنية

### `src/components/ParticleField.tsx`
- تخزين `width` و `height` في `useRef` وتحديثها فقط في `resize` handler
- إزالة استدعاءات `canvas.offsetWidth/offsetHeight` من داخل `draw()`
- تقليل عدد الجسيمات الافتراضي من 60 إلى 40 وتقليل مسافة الاتصال

### `src/components/Navbar.tsx`, `Footer.tsx`, `AdminDashboard.tsx`
- تحويل اللوقو لـ WebP محسّن أو استخدام أبعاد صغيرة مع `width`/`height` attributes

### `src/pages/Index.tsx`
- تقليل عدد جسيمات الـ Hero من 70 إلى 40

### `index.html`
- إضافة `fetchpriority="high"` للموارد المهمة
- تحسين تحميل الخطوط

---

**النتيجة المتوقعة**: تحسين ملحوظ في FCP و LCP وتقليل Forced Reflow، مع العلم أن مشاكل الـ redirect و cache هي على مستوى المنصة ولا يمكن التحكم بها.

