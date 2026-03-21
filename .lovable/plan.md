

# إرسال إشعار بالبيانات إلى info@nzomlabs.com

## الوضع الحالي
- نموذج التواصل يرسل إيميل تأكيد للعميل فقط (`contact-confirmation`)
- لا يوجد إشعار يصل لك أنت كمدير عند استلام رسالة جديدة

## الخطة

### 1. إنشاء قالب إيميل إشعار جديد
**ملف جديد:** `supabase/functions/_shared/transactional-email-templates/contact-notification.tsx`
- إيميل يحتوي على كل بيانات النموذج (اسم الشركة، الإيميل، الهاتف، المنتج، الرسالة)
- يُرسل دائماً إلى `info@nzomlabs.com` باستخدام خاصية `to` في القالب
- العنوان: "رسالة جديدة من [اسم الشركة]"
- تصميم واضح يعرض كل البيانات بشكل منظم

### 2. تسجيل القالب في registry.ts
- إضافة `contact-notification` إلى خريطة `TEMPLATES`

### 3. تحديث صفحة التواصل (`Contact.tsx`)
- بعد إرسال إيميل التأكيد للعميل، إرسال إيميل إشعار ثاني:
  - `templateName: 'contact-notification'`
  - بدون `recipientEmail` (القالب يحدد المستلم تلقائياً)
  - `templateData` تحتوي على كل بيانات النموذج

### 4. إعادة نشر Edge Functions
- نشر `send-transactional-email` لتحديث القوالب

---

**النتيجة**: كل ما أحد يعبي نموذج التواصل، يوصلك إيميل على info@nzomlabs.com فيه كل البيانات.

