import { Shield, Scale, CheckSquare, Users, Truck, LayoutDashboard, Lock, Workflow, ClipboardCheck, BarChart3, Globe } from "lucide-react";

export interface Product {
  slug: string;
  name: { en: string; ar: string };
  tagline: { en: string; ar: string };
  description: { en: string; ar: string };
  icon: any;
  color: string;
  problem: { en: string; ar: string };
  solution: { en: string; ar: string };
  features: { title: { en: string; ar: string }; description: { en: string; ar: string }; icon: any }[];
  workflowDesc: { en: string; ar: string };
  rbacDesc: { en: string; ar: string };
  analyticsDesc: { en: string; ar: string };
  securityDesc: { en: string; ar: string };
}

export const products: Product[] = [
  {
    slug: "hsse",
    name: { en: "Nuzom HSSE", ar: "نُظُم السلامة" },
    tagline: { en: "Safety & Compliance Management System", ar: "نظام إدارة السلامة والامتثال" },
    description: { en: "A comprehensive platform for managing health, safety, security, and environmental compliance across your organization.", ar: "منصة شاملة لإدارة الصحة والسلامة والأمن والامتثال البيئي عبر مؤسستك." },
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    problem: { en: "Organizations struggle with fragmented safety management, manual incident reporting, and difficulty maintaining compliance across multiple sites and regulations.", ar: "تواجه المنظمات صعوبة في إدارة السلامة المجزأة والإبلاغ اليدوي عن الحوادث وصعوبة الحفاظ على الامتثال عبر مواقع ولوائح متعددة." },
    solution: { en: "Nuzom HSSE centralizes all safety operations into one platform with real-time monitoring, automated reporting, and proactive compliance tracking.", ar: "يجمع نُظُم السلامة جميع عمليات السلامة في منصة واحدة مع المراقبة الفورية والتقارير الآلية وتتبع الامتثال الاستباقي." },
    features: [
      { title: { en: "Real-time Dashboard", ar: "لوحة تحكم فورية" }, description: { en: "Monitor safety metrics across all sites in real-time.", ar: "مراقبة مقاييس السلامة عبر جميع المواقع في الوقت الفعلي." }, icon: LayoutDashboard },
      { title: { en: "Role-Based Access", ar: "وصول حسب الأدوار" }, description: { en: "Control who sees what based on their role.", ar: "التحكم في من يرى ماذا بناءً على دوره." }, icon: Lock },
      { title: { en: "Workflow Automation", ar: "أتمتة سير العمل" }, description: { en: "Automate incident reporting and investigation workflows.", ar: "أتمتة سير عمل الإبلاغ عن الحوادث والتحقيق." }, icon: Workflow },
      { title: { en: "Compliance Tracking", ar: "تتبع الامتثال" }, description: { en: "Track regulatory compliance across all operations.", ar: "تتبع الامتثال التنظيمي عبر جميع العمليات." }, icon: ClipboardCheck },
      { title: { en: "Reports & Analytics", ar: "التقارير والتحليلات" }, description: { en: "Generate detailed safety reports and trend analysis.", ar: "إنشاء تقارير سلامة مفصلة وتحليل الاتجاهات." }, icon: BarChart3 },
      { title: { en: "Multi-language", ar: "متعدد اللغات" }, description: { en: "Full Arabic and English language support.", ar: "دعم كامل للغة العربية والإنجليزية." }, icon: Globe },
    ],
    workflowDesc: { en: "Automate the entire incident lifecycle from reporting to investigation to corrective actions. Set up approval chains, escalation rules, and automated notifications.", ar: "أتمتة دورة حياة الحادث بالكامل من الإبلاغ إلى التحقيق إلى الإجراءات التصحيحية." },
    rbacDesc: { en: "Define granular access levels for safety officers, site managers, executives, and workers. Each role sees only what's relevant to their responsibilities.", ar: "تحديد مستويات وصول دقيقة لمسؤولي السلامة ومديري المواقع والمسؤولين التنفيذيين والعمال." },
    analyticsDesc: { en: "Visualize safety trends, incident rates, near-miss ratios, and compliance scores with interactive dashboards and exportable reports.", ar: "عرض اتجاهات السلامة ومعدلات الحوادث ونسب الحوادث الوشيكة ودرجات الامتثال." },
    securityDesc: { en: "Enterprise-grade encryption, audit trails, and data residency compliance. Built to meet Saudi regulatory requirements for data security.", ar: "تشفير على مستوى المؤسسات ومسارات التدقيق والامتثال لإقامة البيانات." },
  },
  {
    slug: "legal",
    name: { en: "Nuzom Legal", ar: "نُظُم القانونية" },
    tagline: { en: "Legal Workflow & Case Management", ar: "إدارة سير العمل القانوني والقضايا" },
    description: { en: "Streamline legal operations with case management, document automation, and compliance tracking built for legal professionals.", ar: "تبسيط العمليات القانونية مع إدارة القضايا وأتمتة المستندات وتتبع الامتثال." },
    icon: Scale,
    color: "from-blue-500 to-cyan-600",
    problem: { en: "Legal teams spend excessive time on manual document management, case tracking across spreadsheets, and struggle with deadline compliance and cross-team collaboration.", ar: "تقضي الفرق القانونية وقتًا مفرطًا في إدارة المستندات يدويًا وتتبع القضايا عبر جداول البيانات." },
    solution: { en: "Nuzom Legal digitizes the entire legal workflow from case intake to resolution, with smart document management and deadline tracking.", ar: "يرقمن نُظُم القانونية سير العمل القانوني بالكامل من استلام القضية إلى الحل." },
    features: [
      { title: { en: "Case Dashboard", ar: "لوحة تحكم القضايا" }, description: { en: "Overview of all active cases and their status.", ar: "نظرة عامة على جميع القضايا النشطة وحالتها." }, icon: LayoutDashboard },
      { title: { en: "Access Control", ar: "التحكم بالوصول" }, description: { en: "Secure case access based on attorney assignment.", ar: "وصول آمن للقضايا بناءً على تعيين المحامي." }, icon: Lock },
      { title: { en: "Document Workflow", ar: "سير عمل المستندات" }, description: { en: "Automate document creation and approval flows.", ar: "أتمتة إنشاء المستندات وتدفقات الموافقة." }, icon: Workflow },
      { title: { en: "Compliance Tracking", ar: "تتبع الامتثال" }, description: { en: "Track deadlines and regulatory requirements.", ar: "تتبع المواعيد النهائية والمتطلبات التنظيمية." }, icon: ClipboardCheck },
      { title: { en: "Legal Analytics", ar: "التحليلات القانونية" }, description: { en: "Case outcome analysis and team performance metrics.", ar: "تحليل نتائج القضايا ومقاييس أداء الفريق." }, icon: BarChart3 },
      { title: { en: "Bilingual Support", ar: "دعم ثنائي اللغة" }, description: { en: "Full Arabic and English interface.", ar: "واجهة كاملة بالعربية والإنجليزية." }, icon: Globe },
    ],
    workflowDesc: { en: "Automate case assignment, document review cycles, approval chains, and deadline notifications. Reduce manual handoffs and ensure nothing falls through the cracks.", ar: "أتمتة تعيين القضايا ودورات مراجعة المستندات وسلاسل الموافقة وإشعارات المواعيد النهائية." },
    rbacDesc: { en: "Partners, associates, paralegals, and clients each get tailored views. Sensitive case data stays protected with granular permissions.", ar: "الشركاء والمحامون والمساعدون القانونيون والعملاء يحصل كل منهم على عروض مخصصة." },
    analyticsDesc: { en: "Track case resolution times, win rates, workload distribution, and billing metrics. Export comprehensive reports for management review.", ar: "تتبع أوقات حل القضايا ومعدلات الفوز وتوزيع عبء العمل ومقاييس الفوترة." },
    securityDesc: { en: "Attorney-client privilege protection, encrypted storage, comprehensive audit logs, and compliance with Saudi legal data requirements.", ar: "حماية امتياز المحامي والعميل والتخزين المشفر وسجلات التدقيق الشاملة." },
  },
  {
    slug: "tasks",
    name: { en: "Nuzom Tasks", ar: "نُظُم المهام" },
    tagline: { en: "Task & Project Operations Management", ar: "إدارة المهام والعمليات" },
    description: { en: "A powerful task and project management system designed for enterprise operations with real-time collaboration and workflow automation.", ar: "نظام إدارة مهام ومشاريع قوي مصمم لعمليات المؤسسات مع التعاون الفوري وأتمتة سير العمل." },
    icon: CheckSquare,
    color: "from-violet-500 to-purple-600",
    problem: { en: "Enterprise teams lose productivity with disconnected task tools, lack visibility into project progress, and struggle with cross-department coordination.", ar: "تفقد فرق المؤسسات الإنتاجية مع أدوات المهام المنفصلة وتفتقر إلى الرؤية في تقدم المشاريع." },
    solution: { en: "Nuzom Tasks provides a unified operations management platform with real-time visibility, automated workflows, and cross-team collaboration tools.", ar: "يوفر نُظُم المهام منصة إدارة عمليات موحدة مع رؤية فورية وسير عمل آلي." },
    features: [
      { title: { en: "Operations Dashboard", ar: "لوحة تحكم العمليات" }, description: { en: "Real-time view of all tasks and projects.", ar: "عرض فوري لجميع المهام والمشاريع." }, icon: LayoutDashboard },
      { title: { en: "Team Access Control", ar: "التحكم بوصول الفريق" }, description: { en: "Manage team and project-level permissions.", ar: "إدارة أذونات الفريق ومستوى المشروع." }, icon: Lock },
      { title: { en: "Task Automation", ar: "أتمتة المهام" }, description: { en: "Auto-assign, escalate, and notify based on rules.", ar: "تعيين تلقائي وتصعيد وإخطار بناءً على القواعد." }, icon: Workflow },
      { title: { en: "Progress Tracking", ar: "تتبع التقدم" }, description: { en: "Track milestones, deadlines, and deliverables.", ar: "تتبع المعالم والمواعيد النهائية والتسليمات." }, icon: ClipboardCheck },
      { title: { en: "Performance Reports", ar: "تقارير الأداء" }, description: { en: "Team productivity and project analytics.", ar: "تحليلات إنتاجية الفريق والمشروع." }, icon: BarChart3 },
      { title: { en: "Multi-language", ar: "متعدد اللغات" }, description: { en: "Full Arabic and English support.", ar: "دعم كامل بالعربية والإنجليزية." }, icon: Globe },
    ],
    workflowDesc: { en: "Define custom workflows for different project types. Automate task routing, approval gates, and status transitions based on your operational rules.", ar: "تحديد سير عمل مخصص لأنواع المشاريع المختلفة." },
    rbacDesc: { en: "Project managers, team leads, and members each have appropriate access levels. Sensitive projects can be restricted to authorized personnel only.", ar: "مديرو المشاريع وقادة الفرق والأعضاء لكل منهم مستويات وصول مناسبة." },
    analyticsDesc: { en: "Measure team velocity, track bottlenecks, monitor deadline adherence, and generate executive summaries for stakeholder reporting.", ar: "قياس سرعة الفريق وتتبع الاختناقات ومراقبة الالتزام بالمواعيد النهائية." },
    securityDesc: { en: "Enterprise security with SSO integration, data encryption at rest and in transit, and comprehensive access audit trails.", ar: "أمان المؤسسات مع تكامل SSO وتشفير البيانات." },
  },
  {
    slug: "hr",
    name: { en: "Nuzom HR", ar: "نُظُم الموارد البشرية" },
    tagline: { en: "HR & Workforce Management Platform", ar: "منصة إدارة الموارد البشرية والقوى العاملة" },
    description: { en: "End-to-end HR management platform covering recruitment, onboarding, payroll, performance, and employee lifecycle management.", ar: "منصة إدارة موارد بشرية شاملة تغطي التوظيف والتأهيل والرواتب والأداء وإدارة دورة حياة الموظف." },
    icon: Users,
    color: "from-amber-500 to-orange-600",
    problem: { en: "HR departments juggle multiple disconnected systems for recruitment, payroll, and performance management, leading to data silos and compliance risks.", ar: "تتعامل أقسام الموارد البشرية مع أنظمة متعددة منفصلة للتوظيف والرواتب وإدارة الأداء." },
    solution: { en: "Nuzom HR unifies the entire employee lifecycle in one platform with Saudi labor law compliance, automated workflows, and self-service portals.", ar: "يوحد نُظُم الموارد البشرية دورة حياة الموظف بالكامل في منصة واحدة مع الامتثال لنظام العمل السعودي." },
    features: [
      { title: { en: "HR Dashboard", ar: "لوحة تحكم الموارد البشرية" }, description: { en: "Complete workforce overview and metrics.", ar: "نظرة شاملة على القوى العاملة والمقاييس." }, icon: LayoutDashboard },
      { title: { en: "Access Levels", ar: "مستويات الوصول" }, description: { en: "HR, managers, and employees see relevant data.", ar: "الموارد البشرية والمديرون والموظفون يرون البيانات ذات الصلة." }, icon: Lock },
      { title: { en: "HR Workflows", ar: "سير عمل الموارد البشرية" }, description: { en: "Automate leave, recruitment, and onboarding.", ar: "أتمتة الإجازات والتوظيف والتأهيل." }, icon: Workflow },
      { title: { en: "Labor Compliance", ar: "الامتثال العمالي" }, description: { en: "Saudi labor law and GOSI compliance tracking.", ar: "تتبع الامتثال لنظام العمل السعودي والتأمينات الاجتماعية." }, icon: ClipboardCheck },
      { title: { en: "People Analytics", ar: "تحليلات الموظفين" }, description: { en: "Turnover, performance, and engagement metrics.", ar: "مقاييس الدوران والأداء والمشاركة." }, icon: BarChart3 },
      { title: { en: "Bilingual Interface", ar: "واجهة ثنائية اللغة" }, description: { en: "Full Arabic and English support.", ar: "دعم كامل بالعربية والإنجليزية." }, icon: Globe },
    ],
    workflowDesc: { en: "Automate the entire employee journey from recruitment to exit. Configure approval hierarchies, automated notifications, and document generation.", ar: "أتمتة رحلة الموظف بالكامل من التوظيف إلى الخروج." },
    rbacDesc: { en: "HR managers, department heads, direct supervisors, and employees each have tailored access to relevant data and actions.", ar: "مديرو الموارد البشرية ورؤساء الأقسام والمشرفون المباشرون والموظفون لكل منهم وصول مخصص." },
    analyticsDesc: { en: "Track headcount trends, compensation analysis, performance distributions, and generate Saudi regulatory reports automatically.", ar: "تتبع اتجاهات عدد الموظفين وتحليل التعويضات وتوزيعات الأداء." },
    securityDesc: { en: "Employee data protection with encryption, access logging, and full compliance with Saudi data privacy regulations.", ar: "حماية بيانات الموظفين بالتشفير وتسجيل الوصول والامتثال الكامل لأنظمة خصوصية البيانات السعودية." },
  },
  {
    slug: "fleet",
    name: { en: "Nuzom Fleet", ar: "نُظُم الأسطول" },
    tagline: { en: "Fleet & Vehicle Management System", ar: "نظام إدارة الأسطول والمركبات" },
    description: { en: "Complete fleet management solution with vehicle tracking, maintenance scheduling, driver management, and fuel analytics.", ar: "حل إدارة أسطول كامل مع تتبع المركبات وجدولة الصيانة وإدارة السائقين وتحليلات الوقود." },
    icon: Truck,
    color: "from-cyan-500 to-blue-600",
    problem: { en: "Fleet operators face challenges with vehicle tracking, maintenance scheduling, fuel cost management, and ensuring driver compliance with safety regulations.", ar: "يواجه مشغلو الأساطيل تحديات في تتبع المركبات وجدولة الصيانة وإدارة تكاليف الوقود." },
    solution: { en: "Nuzom Fleet provides real-time fleet visibility, predictive maintenance, automated fuel tracking, and comprehensive driver management in one platform.", ar: "يوفر نُظُم الأسطول رؤية فورية للأسطول والصيانة التنبؤية وتتبع الوقود الآلي." },
    features: [
      { title: { en: "Fleet Dashboard", ar: "لوحة تحكم الأسطول" }, description: { en: "Real-time fleet location and status overview.", ar: "نظرة عامة فورية على موقع وحالة الأسطول." }, icon: LayoutDashboard },
      { title: { en: "Access Management", ar: "إدارة الوصول" }, description: { en: "Fleet managers, drivers, and mechanics roles.", ar: "أدوار مديري الأسطول والسائقين والميكانيكيين." }, icon: Lock },
      { title: { en: "Maintenance Automation", ar: "أتمتة الصيانة" }, description: { en: "Scheduled and predictive maintenance workflows.", ar: "سير عمل الصيانة المجدولة والتنبؤية." }, icon: Workflow },
      { title: { en: "Regulatory Compliance", ar: "الامتثال التنظيمي" }, description: { en: "Vehicle inspection and licensing compliance.", ar: "الامتثال لفحص المركبات والترخيص." }, icon: ClipboardCheck },
      { title: { en: "Fleet Analytics", ar: "تحليلات الأسطول" }, description: { en: "Fuel efficiency, utilization, and cost reports.", ar: "تقارير كفاءة الوقود والاستخدام والتكلفة." }, icon: BarChart3 },
      { title: { en: "Multi-language", ar: "متعدد اللغات" }, description: { en: "Full Arabic and English support.", ar: "دعم كامل بالعربية والإنجليزية." }, icon: Globe },
    ],
    workflowDesc: { en: "Automate maintenance scheduling based on mileage and time triggers. Set up fuel approval workflows, driver assignment rules, and incident reporting processes.", ar: "أتمتة جدولة الصيانة بناءً على المسافة المقطوعة ومحفزات الوقت." },
    rbacDesc: { en: "Fleet managers oversee all operations, drivers access their assignments and vehicle info, mechanics manage maintenance tasks.", ar: "يشرف مديرو الأسطول على جميع العمليات ويصل السائقون إلى مهامهم ومعلومات المركبات." },
    analyticsDesc: { en: "Monitor fuel consumption patterns, vehicle utilization rates, maintenance costs, and driver performance scores with detailed analytics.", ar: "مراقبة أنماط استهلاك الوقود ومعدلات استخدام المركبات وتكاليف الصيانة." },
    securityDesc: { en: "GPS data encryption, secure communication channels, and compliance with Saudi transport authority regulations.", ar: "تشفير بيانات GPS وقنوات اتصال آمنة والامتثال لأنظمة هيئة النقل السعودية." },
  },
];
