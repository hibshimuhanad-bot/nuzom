

# خطة سحب Landing Pages من جميع المشاريع إلى Nuzom Lab

## ملاحظة مهمة حول الربط بين المشاريع

المشاريع في Lovable مستقلة عن بعض -- لا توجد طريقة لعمل "sync" تلقائي بينها. التعديلات في مشروع Nuzom Lab لن تنتقل تلقائياً للمشاريع الأخرى والعكس. الحل: نسحب المحتوى مرة واحدة إلى `products.ts` وأي تحديث مستقبلي يتم يدوياً في الملف المناسب.

---

## المنتجات النهائية (11 منتج)

| # | Slug | الاسم EN | المصدر | النوع |
|---|------|----------|--------|-------|
| 1 | `hsse` | Nuzom HSSE | File Glimpse | تحديث (Permits, Incidents, Risks, LOTO, MOC, ISO, Training, Audits) |
| 2 | `legal` | Nuzom Legal | Legal Compass KSA | تحديث (Cases, Sessions, AI Assistant, SLA, Knowledge Base) |
| 3 | `tasks` | Nuzom Tasks | PTMP/Taskgen | تحديث (Pillars, Workflows, Reports) |
| 4 | `hr` | Nuzom HR | emdad360 | تحديث (Attendance, Payroll, Leave, Departments, Learning Hub) |
| 5 | `fleet` | Nuzom Fleet | emdad360 | تحديث (Fuel, Maintenance, Documents, Safety Inspections) |
| 6 | `analytics` | Nuzom Analytics | Insight Weaver | جديد - منصة تحليلات وذكاء أعمال |
| 7 | `booking` | Nuzom Booking | Pixel Perfect/Bookly | جديد - نظام حجوزات ومواعيد واشتراكات |
| 8 | `esign` | Nuzom Sign | secure-sig-vault | جديد - توقيع إلكتروني مؤسسي |
| 9 | `tickets` | Nuzom Tickets | tkt-system | جديد - نظام تذاكر ITSM (80+ صفحة: Changes, Problems, CMDB, Releases, Contracts, Vendors, Knowledge Base) |
| 10 | `budget` | Nuzom Budget | Budget Tracker | جديد - إدارة ميزانيات ومشتريات (Budgets, Purchase Orders, Vendors, Cost Centers, Audit Logs) |
| 11 | `fitai` | Nuzom FitAI | creditguard-codex | جديد - ذكاء اصطناعي للقياسات والتوصيات |

## الملفات المتأثرة

### 1. `src/data/products.ts`
- إثراء الـ 5 منتجات الحالية بميزات مستخرجة من المشاريع الأصلية (أسماء الصفحات والموديولات الفعلية)
- إضافة 6 منتجات جديدة بنفس `Product` interface
- إضافة أيقونات جديدة: `PenTool` (Sign), `Ticket` (Tickets), `Wallet` (Budget), `CalendarDays` (Booking), `PieChart` (Analytics), `Cpu` (FitAI)
- كل منتج يشمل: name, tagline, description, problem, solution, 6 features, workflowDesc, rbacDesc, analyticsDesc, securityDesc -- بالعربي والإنجليزي
- المحتوى يُستخرج مباشرة من الصفحات والموديولات الموجودة في كل مشروع

### 2. `src/pages/Index.tsx`
- تحديث Hero Stats Bar: `"11 Products · 8 Industries · 1 Platform"`
- تعديل BentoGrid: توسيع الـ `bentoClasses` array لـ 11 عنصر مع تخطيط مناسب
- HSSE يبقى "Available Now"، الباقي "Coming Soon"

### 3. `src/contexts/LanguageContext.tsx`
- لا تغيير مطلوب (الترجمات في `products.ts` مباشرة)

### 4. لا تغيير على:
- `ProductPage.tsx` -- يعمل dynamically
- `Navbar.tsx` / `Footer.tsx` -- يقرأون من `products` array تلقائياً

## مصادر المحتوى لكل منتج جديد

- **Nuzom Analytics**: من Insight Weaver - dashboards تفاعلية وتقارير ذكاء أعمال
- **Nuzom Booking**: من Bookly - حجوزات، مواعيد، اشتراكات، باقات، فواتير ZATCA، إدارة فروع
- **Nuzom Sign**: من secure-sig-vault - تشفير بنكي، توقيع فوري، امتثال عالمي (eIDAS/UETA)، MFA، audit trail، team collaboration
- **Nuzom Tickets**: من tkt-system (80+ صفحة) - تذاكر، تغييرات، مشاكل، CMDB، إصدارات، عقود، موردين، قاعدة معرفة، AI Automation Hub، workflow builder
- **Nuzom Budget**: من Budget Tracker - ميزانيات، فترات، طلبات شراء، أوامر شراء، موردين، مراكز تكلفة، تقارير، audit logs
- **Nuzom FitAI**: من creditguard-codex - تحليل قياسات بالذكاء الاصطناعي، توصيات ذكية، خصوصية أولاً

