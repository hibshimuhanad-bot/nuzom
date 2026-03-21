

# تكبير الصورة عند الضغط عليها

## التغيير

### `src/pages/ProductPage.tsx`
- إضافة `Dialog` من shadcn/ui حول الصورة
- عند الضغط على الصورة → تفتح في dialog بحجم كبير (fullscreen تقريباً)
- زر إغلاق واضح
- تأثير `cursor-zoom-in` على الصورة الأصلية

### المكونات المستخدمة
- `Dialog`, `DialogContent`, `DialogTrigger` من `@/components/ui/dialog` (موجودة بالفعل)

