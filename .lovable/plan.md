

# تحديث اللوقو واسم البراند

## الوضع الحالي
- اللوقو حالياً عبارة عن مربع أخضر بحرف "N" — ليس لوقو حقيقي
- اسم البراند مكتوب "Nzom Laps" في كل مكان — لكن اللوقو الرسمي يقول **"NZOM LABS"**

## التغييرات

### 1. نسخ صورة اللوقو للمشروع
- نسخ الصورة إلى `src/assets/logo.png`

### 2. استبدال اللوقو في 3 ملفات
- **`src/components/Navbar.tsx`**: استبدال المربع الأخضر بصورة اللوقو (`<img>`)
- **`src/components/Footer.tsx`**: نفس الشيء
- **`src/pages/AdminDashboard.tsx`**: نفس الشيء

### 3. تصحيح اسم البراند من "Laps" إلى "Labs"
- **`src/components/Navbar.tsx`**: "Nzom Laps" → "Nzom Labs"
- **`src/components/Footer.tsx`**: "Nzom Laps" → "Nzom Labs"  
- **`src/contexts/LanguageContext.tsx`**: كل ذكر لـ "Nzom Laps"
- **`src/components/SEOHead.tsx`**: كل العناوين والأوصاف
- **`index.html`**: العنوان، meta tags، Schema.org
- **`src/pages/NotFound.tsx`**: إذا وُجد
- **`src/pages/AdminLogin.tsx`**: إذا وُجد
- **`src/data/blog.ts`**: إذا وُجد في المقالات

### 4. تحديث favicon
- إضافة اللوقو كـ favicon في `public/` و `index.html`

