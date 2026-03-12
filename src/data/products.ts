import {
  Shield, Scale, CheckSquare, Users, Truck,
  LayoutDashboard, Lock, Workflow, ClipboardCheck, BarChart3, Globe,
  PenTool, Ticket, Wallet, CalendarDays, PieChart, Cpu,
  FileText, AlertTriangle, Flame, Cog, BookOpen, Megaphone,
  Briefcase, Calendar, Gavel, Brain, Headphones,
  Target, Layers, KanbanSquare, Clock,
  UserCheck, CreditCard, GraduationCap, Building2,
  Fuel, Wrench, FileCheck, ShieldAlert,
  TrendingUp, Database, Filter, Share2,
  Receipt, Package, Store, DollarSign,
  Zap, Sparkles, Eye, Shirt,
  GitBranch, Server, FolderTree, Handshake
} from "lucide-react";

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
  // ═══════════════════════════════════════════
  // 1. HSSE — enriched from File Glimpse
  // ═══════════════════════════════════════════
  {
    slug: "hsse",
    name: { en: "Nuzom HSSE", ar: "نُظُم السلامة" },
    tagline: { en: "Safety & Compliance Management System", ar: "نظام إدارة السلامة والامتثال" },
    description: { en: "A comprehensive platform for managing health, safety, security, and environmental compliance — including permits, incidents, risk assessments, LOTO, MOC, ISO compliance, training, and audits.", ar: "منصة شاملة لإدارة الصحة والسلامة والأمن والامتثال البيئي — تشمل التصاريح والحوادث وتقييم المخاطر وعزل الطاقة وإدارة التغيير والامتثال لمعايير الآيزو والتدريب والتدقيق." },
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    problem: { en: "Organizations struggle with fragmented safety management, manual incident reporting, and difficulty maintaining compliance across multiple sites — permits tracked in spreadsheets, LOTO procedures on paper, and no unified view of risks.", ar: "تواجه المنظمات صعوبة في إدارة السلامة المجزأة والإبلاغ اليدوي عن الحوادث وصعوبة الحفاظ على الامتثال — التصاريح في جداول بيانات وإجراءات LOTO على الورق وعدم وجود رؤية موحدة للمخاطر." },
    solution: { en: "Nuzom HSSE centralizes all safety operations — permits, incidents, risks, LOTO, MOC, ISO compliance, training, and audits — into one platform with real-time monitoring and automated reporting.", ar: "يجمع نُظُم السلامة جميع عمليات السلامة — التصاريح والحوادث والمخاطر وعزل الطاقة وإدارة التغيير والآيزو والتدريب والتدقيق — في منصة واحدة مع المراقبة الفورية." },
    features: [
      { title: { en: "Permit to Work", ar: "تصاريح العمل" }, description: { en: "Digital permit issuance, approval workflows, and real-time tracking for all permit types.", ar: "إصدار التصاريح الرقمية وسير عمل الموافقة والتتبع الفوري لجميع أنواع التصاريح." }, icon: ClipboardCheck },
      { title: { en: "Incident Management", ar: "إدارة الحوادث" }, description: { en: "Report, investigate, and track incidents with root cause analysis and corrective actions.", ar: "الإبلاغ عن الحوادث والتحقيق فيها وتتبعها مع تحليل الأسباب الجذرية والإجراءات التصحيحية." }, icon: AlertTriangle },
      { title: { en: "Risk Assessment", ar: "تقييم المخاطر" }, description: { en: "Identify, evaluate, and mitigate risks with heat maps and risk registers.", ar: "تحديد المخاطر وتقييمها والتخفيف منها مع خرائط الحرارة وسجلات المخاطر." }, icon: Flame },
      { title: { en: "LOTO & MOC", ar: "عزل الطاقة وإدارة التغيير" }, description: { en: "Lockout/Tagout procedures and Management of Change workflows with full audit trails.", ar: "إجراءات عزل الطاقة وسير عمل إدارة التغيير مع مسارات تدقيق كاملة." }, icon: Lock },
      { title: { en: "ISO Compliance & Audits", ar: "امتثال الآيزو والتدقيق" }, description: { en: "Track ISO standards compliance, schedule audits, manage findings and corrective actions.", ar: "تتبع الامتثال لمعايير الآيزو وجدولة عمليات التدقيق وإدارة النتائج والإجراءات التصحيحية." }, icon: FileCheck },
      { title: { en: "Training & Lessons Learned", ar: "التدريب والدروس المستفادة" }, description: { en: "Manage safety training programs, certifications, and capture lessons learned from incidents.", ar: "إدارة برامج التدريب على السلامة والشهادات والتقاط الدروس المستفادة من الحوادث." }, icon: BookOpen },
    ],
    workflowDesc: { en: "Automate the entire incident lifecycle from reporting to investigation to corrective actions. Set up permit approval chains, LOTO isolation procedures, MOC review gates, and audit scheduling — all with automated notifications and escalation rules.", ar: "أتمتة دورة حياة الحادث بالكامل من الإبلاغ إلى التحقيق إلى الإجراءات التصحيحية. إعداد سلاسل موافقة التصاريح وإجراءات عزل الطاقة وبوابات مراجعة التغيير وجدولة التدقيق." },
    rbacDesc: { en: "Define granular access levels for safety officers, site managers, permit issuers, LOTO authorized personnel, auditors, and workers. Each role sees only what's relevant to their responsibilities.", ar: "تحديد مستويات وصول دقيقة لمسؤولي السلامة ومديري المواقع ومصدري التصاريح والأشخاص المخولين بعزل الطاقة والمدققين والعمال." },
    analyticsDesc: { en: "Visualize safety trends, incident rates, near-miss ratios, permit status, risk heat maps, training completion rates, and ISO compliance scores with interactive dashboards.", ar: "عرض اتجاهات السلامة ومعدلات الحوادث ونسب الحوادث الوشيكة وحالة التصاريح وخرائط حرارة المخاطر ومعدلات إتمام التدريب ودرجات امتثال الآيزو." },
    securityDesc: { en: "Enterprise-grade encryption, comprehensive audit trails, and data residency compliance. Built to meet Saudi regulatory requirements including OSHA and Aramco standards.", ar: "تشفير على مستوى المؤسسات ومسارات تدقيق شاملة والامتثال لإقامة البيانات. مبني لتلبية المتطلبات التنظيمية السعودية بما في ذلك معايير أرامكو." },
  },

  // ═══════════════════════════════════════════
  // 2. LEGAL — enriched from Legal Compass KSA
  // ═══════════════════════════════════════════
  {
    slug: "legal",
    name: { en: "Nuzom Legal", ar: "نُظُم القانونية" },
    tagline: { en: "Legal Workflow & Case Management", ar: "إدارة سير العمل القانوني والقضايا" },
    description: { en: "Streamline legal operations with case management, court session tracking, AI-powered legal assistant, document automation, SLA monitoring, and a comprehensive knowledge base.", ar: "تبسيط العمليات القانونية مع إدارة القضايا وتتبع الجلسات والمساعد القانوني بالذكاء الاصطناعي وأتمتة المستندات ومراقبة اتفاقيات مستوى الخدمة وقاعدة المعرفة الشاملة." },
    icon: Scale,
    color: "from-blue-500 to-cyan-600",
    problem: { en: "Legal teams spend excessive time on manual document management, case tracking across spreadsheets, and struggle with court session scheduling, SLA compliance, and cross-team collaboration.", ar: "تقضي الفرق القانونية وقتًا مفرطًا في إدارة المستندات يدويًا وتتبع القضايا عبر جداول البيانات وتعاني من جدولة الجلسات والامتثال لاتفاقيات مستوى الخدمة." },
    solution: { en: "Nuzom Legal digitizes the entire legal workflow — cases, sessions, documents, billing, and client communication — with AI-powered tools and a knowledge base for Saudi legal precedents.", ar: "يرقمن نُظُم القانونية سير العمل القانوني بالكامل — القضايا والجلسات والمستندات والفوترة والتواصل مع العملاء — مع أدوات ذكاء اصطناعي وقاعدة معرفة للسوابق القانونية السعودية." },
    features: [
      { title: { en: "Case Management", ar: "إدارة القضايا" }, description: { en: "Track cases from filing to judgment with comprehensive status workflows and document attachments.", ar: "تتبع القضايا من التقديم حتى الحكم مع سير عمل شامل للحالات والمرفقات." }, icon: Briefcase },
      { title: { en: "Court Sessions", ar: "الجلسات القضائية" }, description: { en: "Schedule and track court sessions, hearings, and deadlines with calendar integration.", ar: "جدولة وتتبع الجلسات القضائية والمرافعات والمواعيد النهائية مع تكامل التقويم." }, icon: Calendar },
      { title: { en: "AI Legal Assistant", ar: "المساعد القانوني الذكي" }, description: { en: "AI-powered legal research, document drafting, and case analysis for Saudi legal context.", ar: "بحث قانوني بالذكاء الاصطناعي وصياغة المستندات وتحليل القضايا للسياق القانوني السعودي." }, icon: Brain },
      { title: { en: "Document Management", ar: "إدارة المستندات" }, description: { en: "Secure document storage with version control, templates, and automated generation.", ar: "تخزين آمن للمستندات مع التحكم في الإصدارات والقوالب والإنشاء التلقائي." }, icon: FileText },
      { title: { en: "Knowledge Base", ar: "قاعدة المعرفة" }, description: { en: "Searchable repository of legal precedents, articles, and firm-specific know-how.", ar: "مستودع قابل للبحث للسوابق القانونية والمقالات والمعرفة الخاصة بالمكتب." }, icon: BookOpen },
      { title: { en: "Client Portal", ar: "بوابة العملاء" }, description: { en: "Self-service portal for clients to track cases, submit requests, and communicate securely.", ar: "بوابة خدمة ذاتية للعملاء لتتبع القضايا وتقديم الطلبات والتواصل بأمان." }, icon: Globe },
    ],
    workflowDesc: { en: "Automate case assignment, session scheduling, document review cycles, approval chains, deadline notifications, and SLA monitoring. Reduce manual handoffs and ensure nothing falls through the cracks.", ar: "أتمتة تعيين القضايا وجدولة الجلسات ودورات مراجعة المستندات وسلاسل الموافقة وإشعارات المواعيد النهائية ومراقبة اتفاقيات مستوى الخدمة." },
    rbacDesc: { en: "Partners, associates, paralegals, consultants, and clients each get tailored views. Sensitive case data stays protected with granular permissions and conflict-of-interest checks.", ar: "الشركاء والمحامون والمساعدون القانونيون والمستشارون والعملاء يحصل كل منهم على عروض مخصصة مع فحوصات تعارض المصالح." },
    analyticsDesc: { en: "Track case resolution times, win rates, SLA compliance, workload distribution, billing metrics, and generate Saudi regulatory reports automatically.", ar: "تتبع أوقات حل القضايا ومعدلات الفوز والامتثال لاتفاقيات مستوى الخدمة وتوزيع عبء العمل ومقاييس الفوترة وإنشاء التقارير التنظيمية تلقائياً." },
    securityDesc: { en: "Attorney-client privilege protection, encrypted storage, comprehensive audit logs, and compliance with Saudi legal data requirements and bar association standards.", ar: "حماية امتياز المحامي والعميل والتخزين المشفر وسجلات التدقيق الشاملة والامتثال لمتطلبات البيانات القانونية السعودية." },
  },

  // ═══════════════════════════════════════════
  // 3. TASKS — enriched from PTMP/Taskgen
  // ═══════════════════════════════════════════
  {
    slug: "tasks",
    name: { en: "Nuzom Tasks", ar: "نُظُم المهام" },
    tagline: { en: "Task & Project Operations Management", ar: "إدارة المهام والعمليات" },
    description: { en: "A powerful pillar-based project management system with portfolios, programs, Kanban boards, scheduled reports, and real-time collaboration for enterprise operations.", ar: "نظام إدارة مشاريع قوي قائم على الركائز مع المحافظ والبرامج ولوحات كانبان والتقارير المجدولة والتعاون الفوري لعمليات المؤسسات." },
    icon: CheckSquare,
    color: "from-violet-500 to-purple-600",
    problem: { en: "Enterprise teams lose productivity with disconnected task tools, lack visibility into project progress across portfolios and programs, and struggle with cross-department coordination.", ar: "تفقد فرق المؤسسات الإنتاجية مع أدوات المهام المنفصلة وتفتقر إلى الرؤية في تقدم المشاريع عبر المحافظ والبرامج وتعاني من التنسيق بين الأقسام." },
    solution: { en: "Nuzom Tasks provides a unified pillar-based operations platform with portfolios, programs, projects, Kanban views, task occurrences, scheduled reports, and timeline visualization.", ar: "يوفر نُظُم المهام منصة عمليات موحدة قائمة على الركائز مع المحافظ والبرامج والمشاريع وعروض كانبان وتكرارات المهام والتقارير المجدولة." },
    features: [
      { title: { en: "Portfolios & Programs", ar: "المحافظ والبرامج" }, description: { en: "Organize projects into portfolios and programs for strategic alignment and oversight.", ar: "تنظيم المشاريع في محافظ وبرامج للتوافق الاستراتيجي والإشراف." }, icon: Layers },
      { title: { en: "Kanban & Timeline", ar: "كانبان والجدول الزمني" }, description: { en: "Visual Kanban boards and project timeline views for intuitive task management.", ar: "لوحات كانبان المرئية وعروض الجدول الزمني للمشاريع لإدارة المهام بشكل حدسي." }, icon: KanbanSquare },
      { title: { en: "Task Automation", ar: "أتمتة المهام" }, description: { en: "Auto-assign, recurring task occurrences, escalation rules, and smart notifications.", ar: "تعيين تلقائي وتكرارات المهام وقواعد التصعيد والإشعارات الذكية." }, icon: Workflow },
      { title: { en: "Departments & Companies", ar: "الأقسام والشركات" }, description: { en: "Multi-company and department management with hierarchical project structures.", ar: "إدارة الشركات والأقسام المتعددة مع هياكل مشاريع هرمية." }, icon: Building2 },
      { title: { en: "Scheduled Reports", ar: "التقارير المجدولة" }, description: { en: "Automated report generation and delivery on custom schedules.", ar: "إنشاء التقارير وتسليمها تلقائياً وفق جداول مخصصة." }, icon: Clock },
      { title: { en: "Multi-language", ar: "متعدد اللغات" }, description: { en: "Full Arabic and English support with RTL interface.", ar: "دعم كامل بالعربية والإنجليزية مع واجهة RTL." }, icon: Globe },
    ],
    workflowDesc: { en: "Define custom workflows for different project types. Automate task routing, approval gates, status transitions, and recurring task occurrences based on your operational rules.", ar: "تحديد سير عمل مخصص لأنواع المشاريع المختلفة. أتمتة توجيه المهام وبوابات الموافقة وانتقالات الحالة وتكرارات المهام." },
    rbacDesc: { en: "Admin, project managers, team leads, and members each have appropriate access levels. Portfolio-level oversight for executives, project-level for managers.", ar: "المدير ومديرو المشاريع وقادة الفرق والأعضاء لكل منهم مستويات وصول مناسبة. إشراف على مستوى المحفظة للمسؤولين التنفيذيين." },
    analyticsDesc: { en: "Measure team velocity, track bottlenecks, monitor deadline adherence, portfolio health scores, and generate executive summaries with scheduled automated reports.", ar: "قياس سرعة الفريق وتتبع الاختناقات ومراقبة الالتزام بالمواعيد النهائية ودرجات صحة المحفظة وإنشاء ملخصات تنفيذية بتقارير آلية مجدولة." },
    securityDesc: { en: "Enterprise security with SSO integration, data encryption at rest and in transit, comprehensive access audit trails, and multi-tenant isolation.", ar: "أمان المؤسسات مع تكامل SSO وتشفير البيانات ومسارات تدقيق وصول شاملة وعزل متعدد المستأجرين." },
  },

  // ═══════════════════════════════════════════
  // 4. HR — enriched from emdad360
  // ═══════════════════════════════════════════
  {
    slug: "hr",
    name: { en: "Nuzom HR", ar: "نُظُم الموارد البشرية" },
    tagline: { en: "HR & Workforce Management Platform", ar: "منصة إدارة الموارد البشرية والقوى العاملة" },
    description: { en: "End-to-end HR management platform covering attendance tracking, payroll processing, leave management, department structure, learning hub, and AI-powered workforce insights.", ar: "منصة إدارة موارد بشرية شاملة تغطي تتبع الحضور ومعالجة الرواتب وإدارة الإجازات وهيكل الأقسام ومركز التعلم ورؤى القوى العاملة بالذكاء الاصطناعي." },
    icon: Users,
    color: "from-amber-500 to-orange-600",
    problem: { en: "HR departments juggle multiple disconnected systems for attendance, payroll, leave tracking, and performance management, leading to data silos and compliance risks with Saudi labor law.", ar: "تتعامل أقسام الموارد البشرية مع أنظمة متعددة منفصلة للحضور والرواتب وتتبع الإجازات وإدارة الأداء مما يؤدي إلى صوامع بيانات ومخاطر امتثال مع نظام العمل السعودي." },
    solution: { en: "Nuzom HR unifies attendance, payroll, leave, departments, learning, and AI insights in one platform with Saudi labor law and GOSI compliance built-in.", ar: "يوحد نُظُم الموارد البشرية الحضور والرواتب والإجازات والأقسام والتعلم ورؤى الذكاء الاصطناعي في منصة واحدة مع الامتثال لنظام العمل السعودي والتأمينات الاجتماعية." },
    features: [
      { title: { en: "Attendance Tracking", ar: "تتبع الحضور" }, description: { en: "Automated attendance with shift management, overtime calculation, and biometric integration.", ar: "حضور آلي مع إدارة الورديات وحساب العمل الإضافي وتكامل البصمة." }, icon: UserCheck },
      { title: { en: "Payroll & Salaries", ar: "الرواتب والأجور" }, description: { en: "Automated payroll processing with GOSI deductions, allowances, and bank file generation.", ar: "معالجة الرواتب الآلية مع خصومات التأمينات الاجتماعية والبدلات وإنشاء ملفات البنك." }, icon: CreditCard },
      { title: { en: "Leave Management", ar: "إدارة الإجازات" }, description: { en: "Leave requests, approvals, balance tracking, and Saudi labor law compliant calculations.", ar: "طلبات الإجازات والموافقات وتتبع الأرصدة والحسابات المتوافقة مع نظام العمل السعودي." }, icon: Calendar },
      { title: { en: "Departments & Structure", ar: "الأقسام والهيكل التنظيمي" }, description: { en: "Organizational hierarchy, department management, and reporting structure.", ar: "الهيكل التنظيمي وإدارة الأقسام وهيكل التقارير." }, icon: Building2 },
      { title: { en: "Learning Hub", ar: "مركز التعلم" }, description: { en: "Training programs, course management, certifications, and skill development tracking.", ar: "برامج التدريب وإدارة الدورات والشهادات وتتبع تطوير المهارات." }, icon: GraduationCap },
      { title: { en: "AI Insights", ar: "رؤى الذكاء الاصطناعي" }, description: { en: "AI-powered workforce analytics, predictive turnover, and performance recommendations.", ar: "تحليلات القوى العاملة بالذكاء الاصطناعي والتنبؤ بالدوران وتوصيات الأداء." }, icon: Brain },
    ],
    workflowDesc: { en: "Automate the entire employee journey — onboarding checklists, leave approval chains, payroll processing, performance review cycles, and exit procedures with automated notifications.", ar: "أتمتة رحلة الموظف بالكامل — قوائم التأهيل وسلاسل موافقة الإجازات ومعالجة الرواتب ودورات مراجعة الأداء وإجراءات الخروج مع إشعارات آلية." },
    rbacDesc: { en: "HR managers, department heads, direct supervisors, and employees each have tailored access. Self-service portal for employees to manage their own requests.", ar: "مديرو الموارد البشرية ورؤساء الأقسام والمشرفون المباشرون والموظفون لكل منهم وصول مخصص. بوابة خدمة ذاتية للموظفين." },
    analyticsDesc: { en: "Track headcount trends, attendance patterns, payroll costs, leave utilization, training completion, and generate Saudi regulatory reports (GOSI, WPS) automatically.", ar: "تتبع اتجاهات عدد الموظفين وأنماط الحضور وتكاليف الرواتب واستخدام الإجازات وإتمام التدريب وإنشاء التقارير التنظيمية السعودية تلقائياً." },
    securityDesc: { en: "Employee data protection with encryption, access logging, GDPR-ready privacy controls, and full compliance with Saudi data privacy regulations.", ar: "حماية بيانات الموظفين بالتشفير وتسجيل الوصول وضوابط الخصوصية والامتثال الكامل لأنظمة خصوصية البيانات السعودية." },
  },

  // ═══════════════════════════════════════════
  // 5. FLEET — enriched from emdad360
  // ═══════════════════════════════════════════
  {
    slug: "fleet",
    name: { en: "Nuzom Fleet", ar: "نُظُم الأسطول" },
    tagline: { en: "Fleet & Vehicle Management System", ar: "نظام إدارة الأسطول والمركبات" },
    description: { en: "Complete fleet management solution with real-time vehicle tracking, fuel monitoring, predictive maintenance, document management, and digital safety inspections.", ar: "حل إدارة أسطول كامل مع تتبع المركبات الفوري ومراقبة الوقود والصيانة التنبؤية وإدارة المستندات والفحوصات الأمنية الرقمية." },
    icon: Truck,
    color: "from-cyan-500 to-blue-600",
    problem: { en: "Fleet operators face challenges with vehicle tracking, maintenance scheduling, fuel cost management, document expiry tracking, and ensuring driver compliance with safety inspections.", ar: "يواجه مشغلو الأساطيل تحديات في تتبع المركبات وجدولة الصيانة وإدارة تكاليف الوقود وتتبع انتهاء المستندات والتأكد من امتثال السائقين لفحوصات السلامة." },
    solution: { en: "Nuzom Fleet provides real-time fleet visibility, fuel analytics, predictive maintenance, document lifecycle management, and digital safety inspection checklists in one platform.", ar: "يوفر نُظُم الأسطول رؤية فورية للأسطول وتحليلات الوقود والصيانة التنبؤية وإدارة دورة حياة المستندات وقوائم فحص السلامة الرقمية في منصة واحدة." },
    features: [
      { title: { en: "Fuel Management", ar: "إدارة الوقود" }, description: { en: "Track fuel consumption, costs, and efficiency per vehicle with anomaly detection.", ar: "تتبع استهلاك الوقود والتكاليف والكفاءة لكل مركبة مع كشف الحالات الشاذة." }, icon: Fuel },
      { title: { en: "Predictive Maintenance", ar: "الصيانة التنبؤية" }, description: { en: "AI-powered maintenance scheduling based on mileage, time, and vehicle condition data.", ar: "جدولة الصيانة بالذكاء الاصطناعي بناءً على المسافة المقطوعة والوقت وبيانات حالة المركبة." }, icon: Wrench },
      { title: { en: "Document Lifecycle", ar: "دورة حياة المستندات" }, description: { en: "Track registrations, insurance, licenses with expiry alerts and renewal workflows.", ar: "تتبع التسجيلات والتأمين والرخص مع تنبيهات الانتهاء وسير عمل التجديد." }, icon: FileCheck },
      { title: { en: "Safety Inspections", ar: "فحوصات السلامة" }, description: { en: "Digital pre-trip and periodic inspection checklists with photo evidence and scoring.", ar: "قوائم فحص رقمية قبل الرحلة ودورية مع صور الأدلة والتسجيل." }, icon: ShieldAlert },
      { title: { en: "Fleet Dashboard", ar: "لوحة تحكم الأسطول" }, description: { en: "Real-time fleet location, status overview, and utilization metrics.", ar: "موقع الأسطول الفوري ونظرة عامة على الحالة ومقاييس الاستخدام." }, icon: LayoutDashboard },
      { title: { en: "Bilingual Support", ar: "دعم ثنائي اللغة" }, description: { en: "Full English and Arabic interface with RTL support.", ar: "واجهة كاملة بالإنجليزية والعربية مع دعم RTL." }, icon: Globe },
    ],
    workflowDesc: { en: "Automate maintenance scheduling based on mileage and time triggers. Set up fuel approval workflows, driver assignment rules, inspection schedules, and document renewal processes.", ar: "أتمتة جدولة الصيانة بناءً على المسافة المقطوعة ومحفزات الوقت. إعداد سير عمل الوقود وقواعد تعيين السائقين وجداول الفحص وعمليات تجديد المستندات." },
    rbacDesc: { en: "Fleet managers oversee all operations, drivers access their assignments and inspection forms, mechanics manage maintenance tasks, and admins control configurations.", ar: "يشرف مديرو الأسطول على جميع العمليات ويصل السائقون إلى مهامهم ونماذج الفحص ويدير الميكانيكيون مهام الصيانة." },
    analyticsDesc: { en: "Monitor fuel consumption patterns, vehicle utilization rates, maintenance costs, inspection compliance scores, and driver performance with detailed analytics dashboards.", ar: "مراقبة أنماط استهلاك الوقود ومعدلات استخدام المركبات وتكاليف الصيانة ودرجات امتثال الفحص وأداء السائقين بلوحات تحليلات مفصلة." },
    securityDesc: { en: "GPS data encryption, secure communication channels, and compliance with Saudi transport authority regulations and Dallah standards.", ar: "تشفير بيانات GPS وقنوات اتصال آمنة والامتثال لأنظمة هيئة النقل السعودية ومعايير دلّة." },
  },

  // ═══════════════════════════════════════════
  // 6. ANALYTICS — from Insight Weaver
  // ═══════════════════════════════════════════
  {
    slug: "analytics",
    name: { en: "Nuzom Analytics", ar: "نُظُم التحليلات" },
    tagline: { en: "Business Intelligence & Analytics Platform", ar: "منصة ذكاء الأعمال والتحليلات" },
    description: { en: "Interactive dashboards, data source connections, team collaboration, and governance tools — transform raw data into actionable business insights.", ar: "لوحات تحكم تفاعلية واتصالات مصادر البيانات والتعاون الجماعي وأدوات الحوكمة — تحويل البيانات الخام إلى رؤى أعمال قابلة للتنفيذ." },
    icon: PieChart,
    color: "from-emerald-500 to-teal-600",
    problem: { en: "Organizations drown in data scattered across multiple systems — creating reports takes days, insights arrive too late, and there's no single source of truth for decision-making.", ar: "تغرق المنظمات في البيانات المبعثرة عبر أنظمة متعددة — إنشاء التقارير يستغرق أياماً والرؤى تصل متأخرة ولا يوجد مصدر واحد للحقيقة لاتخاذ القرارات." },
    solution: { en: "Nuzom Analytics connects all your data sources, builds interactive dashboards, enables team collaboration on insights, and enforces data governance — all in one platform.", ar: "يربط نُظُم التحليلات جميع مصادر بياناتك ويبني لوحات تحكم تفاعلية ويمكّن التعاون الجماعي على الرؤى ويفرض حوكمة البيانات — كل ذلك في منصة واحدة." },
    features: [
      { title: { en: "Interactive Dashboards", ar: "لوحات تحكم تفاعلية" }, description: { en: "Build and customize drag-and-drop dashboards with real-time data visualization.", ar: "بناء وتخصيص لوحات تحكم بالسحب والإفلات مع تصور البيانات في الوقت الفعلي." }, icon: LayoutDashboard },
      { title: { en: "Data Sources", ar: "مصادر البيانات" }, description: { en: "Connect databases, APIs, spreadsheets, and cloud services as data sources.", ar: "ربط قواعد البيانات وواجهات البرمجة وجداول البيانات والخدمات السحابية كمصادر بيانات." }, icon: Database },
      { title: { en: "Smart Filters", ar: "فلاتر ذكية" }, description: { en: "Advanced filtering, drill-down, and cross-filtering across dashboard widgets.", ar: "فلترة متقدمة والتعمق والفلترة المتقاطعة عبر عناصر لوحة التحكم." }, icon: Filter },
      { title: { en: "Team Collaboration", ar: "التعاون الجماعي" }, description: { en: "Share dashboards, invite team members, and collaborate on data insights.", ar: "مشاركة لوحات التحكم ودعوة أعضاء الفريق والتعاون على رؤى البيانات." }, icon: Share2 },
      { title: { en: "Data Governance", ar: "حوكمة البيانات" }, description: { en: "Data quality rules, access policies, lineage tracking, and compliance controls.", ar: "قواعد جودة البيانات وسياسات الوصول وتتبع النسب وضوابط الامتثال." }, icon: Lock },
      { title: { en: "Public Dashboards", ar: "لوحات تحكم عامة" }, description: { en: "Publish dashboards publicly or embed them in websites and portals.", ar: "نشر لوحات التحكم بشكل عام أو تضمينها في المواقع والبوابات." }, icon: Globe },
    ],
    workflowDesc: { en: "Set up automated data pipelines that refresh dashboards on schedule. Configure alert rules for KPI thresholds, automate report distribution, and trigger actions based on data changes.", ar: "إعداد خطوط بيانات آلية تحدّث لوحات التحكم وفق جدول زمني. تكوين قواعد التنبيه لعتبات مؤشرات الأداء وأتمتة توزيع التقارير." },
    rbacDesc: { en: "Data admins manage sources and governance, analysts build dashboards, viewers consume reports. Each role has appropriate data access and editing permissions.", ar: "يدير مسؤولو البيانات المصادر والحوكمة ويبني المحللون لوحات التحكم ويستهلك المشاهدون التقارير. كل دور له أذونات وصول وتحرير مناسبة." },
    analyticsDesc: { en: "Meta-analytics: track dashboard usage, query performance, data freshness, and user engagement metrics to optimize your analytics platform itself.", ar: "تحليلات وصفية: تتبع استخدام لوحات التحكم وأداء الاستعلامات وحداثة البيانات ومقاييس تفاعل المستخدمين لتحسين منصة التحليلات نفسها." },
    securityDesc: { en: "Row-level security, data masking, encrypted connections, SSO integration, and comprehensive audit logs for all data access and modifications.", ar: "أمان على مستوى الصف وإخفاء البيانات والاتصالات المشفرة وتكامل SSO وسجلات تدقيق شاملة لجميع عمليات الوصول والتعديل." },
  },

  // ═══════════════════════════════════════════
  // 7. BOOKING — from Pixel Perfect / Bookly
  // ═══════════════════════════════════════════
  {
    slug: "booking",
    name: { en: "Nuzom Booking", ar: "نُظُم الحجوزات" },
    tagline: { en: "Booking & Appointment Management System", ar: "نظام إدارة الحجوزات والمواعيد" },
    description: { en: "All-in-one cloud booking system for salons, gyms, clinics, and training centers — with appointment scheduling, subscriptions, ZATCA-compliant invoicing, and multi-branch management.", ar: "نظام حجوزات سحابي متكامل للصالونات والنوادي الرياضية والعيادات ومراكز التدريب — مع جدولة المواعيد والاشتراكات والفوترة المتوافقة مع هيئة الزكاة وإدارة الفروع." },
    icon: CalendarDays,
    color: "from-pink-500 to-rose-600",
    problem: { en: "Service businesses manage appointments via WhatsApp, track subscriptions in spreadsheets, generate invoices manually, and have zero visibility into branch performance and customer patterns.", ar: "تدير شركات الخدمات المواعيد عبر واتساب وتتبع الاشتراكات في جداول بيانات وتُنشئ الفواتير يدوياً وليس لديها رؤية في أداء الفروع وأنماط العملاء." },
    solution: { en: "Nuzom Booking digitizes the entire booking lifecycle — smart scheduling, package management, automated reminders, ZATCA e-invoicing, and multi-branch analytics.", ar: "يرقمن نُظُم الحجوزات دورة الحجز بالكامل — جدولة ذكية وإدارة الباقات وتذكيرات آلية وفوترة إلكترونية متوافقة مع ZATCA وتحليلات متعددة الفروع." },
    features: [
      { title: { en: "Appointment Management", ar: "إدارة المواعيد" }, description: { en: "Smart scheduling with interactive calendar, auto-reminders, and break management.", ar: "جدولة ذكية مع تقويم تفاعلي وتذكيرات تلقائية وإدارة أوقات الراحة." }, icon: CalendarDays },
      { title: { en: "Subscriptions & Packages", ar: "الاشتراكات والباقات" }, description: { en: "Flexible session/duration packages with auto-deduction and seamless renewal.", ar: "باقات مرنة بالجلسات أو المدة مع خصم تلقائي وتجديد سلس." }, icon: CreditCard },
      { title: { en: "ZATCA E-Invoicing", ar: "الفوترة الإلكترونية ZATCA" }, description: { en: "Compliant electronic invoicing with QR codes and tax calculation.", ar: "فوترة إلكترونية متوافقة مع رموز QR وحساب الضرائب." }, icon: Receipt },
      { title: { en: "Customer Management", ar: "إدارة العملاء" }, description: { en: "Comprehensive profiles, attendance tracking, and direct communication.", ar: "ملفات شاملة للعملاء وتتبع الحضور والتواصل المباشر." }, icon: Users },
      { title: { en: "Multi-Branch", ar: "متعدد الفروع" }, description: { en: "Manage multiple locations with branch-specific settings and staff.", ar: "إدارة مواقع متعددة مع إعدادات وموظفين خاصين بكل فرع." }, icon: Building2 },
      { title: { en: "Financial Reports", ar: "التقارير المالية" }, description: { en: "Revenue analysis, payment tracking, and financial performance dashboards.", ar: "تحليل الإيرادات وتتبع المدفوعات ولوحات تحكم الأداء المالي." }, icon: BarChart3 },
    ],
    workflowDesc: { en: "Automate appointment confirmations, send reminders before sessions, auto-deduct from subscription balances, generate invoices on payment, and trigger renewal notifications for expiring packages.", ar: "أتمتة تأكيدات المواعيد وإرسال التذكيرات قبل الجلسات والخصم التلقائي من أرصدة الاشتراكات وإنشاء الفواتير عند الدفع وتشغيل إشعارات التجديد للباقات المنتهية." },
    rbacDesc: { en: "Business owners see all branches, branch managers control their location, staff see their schedules, and customers access their booking portal.", ar: "أصحاب الأعمال يرون جميع الفروع ومديرو الفروع يتحكمون في مواقعهم والموظفون يرون جداولهم والعملاء يصلون لبوابة الحجز." },
    analyticsDesc: { en: "Track booking rates, peak hours, staff utilization, revenue per service, subscription retention, and customer lifetime value across all branches.", ar: "تتبع معدلات الحجز وساعات الذروة واستخدام الموظفين والإيرادات لكل خدمة والاحتفاظ بالاشتراكات وقيمة العميل مدى الحياة عبر جميع الفروع." },
    securityDesc: { en: "PCI-compliant payment processing, encrypted customer data, secure booking links, and compliance with Saudi commercial data requirements.", ar: "معالجة مدفوعات متوافقة مع PCI وبيانات عملاء مشفرة وروابط حجز آمنة والامتثال لمتطلبات البيانات التجارية السعودية." },
  },

  // ═══════════════════════════════════════════
  // 8. ESIGN — from secure-sig-vault
  // ═══════════════════════════════════════════
  {
    slug: "esign",
    name: { en: "Nuzom Sign", ar: "نُظُم التوقيع" },
    tagline: { en: "Enterprise E-Signature Platform", ar: "منصة التوقيع الإلكتروني للمؤسسات" },
    description: { en: "Enterprise-grade e-signature platform with envelope workflows, bulk sending, template management, compliance tracking, correspondence management, and comprehensive audit trails.", ar: "منصة توقيع إلكتروني على مستوى المؤسسات مع سير عمل المظاريف والإرسال الجماعي وإدارة القوالب وتتبع الامتثال وإدارة المراسلات ومسارات تدقيق شاملة." },
    icon: PenTool,
    color: "from-indigo-500 to-blue-600",
    problem: { en: "Organizations waste days chasing physical signatures, printing and scanning documents, lose track of signing status, and lack legally compliant digital signature workflows.", ar: "تهدر المنظمات أياماً في ملاحقة التوقيعات المادية وطباعة ومسح المستندات وتفقد تتبع حالة التوقيع وتفتقر لسير عمل التوقيع الرقمي المتوافق قانونياً." },
    solution: { en: "Nuzom Sign enables instant digital signatures with envelope-based workflows, bulk operations, template library, retention policies, and full eIDAS/UETA compliance.", ar: "يمكّن نُظُم التوقيع التوقيعات الرقمية الفورية مع سير عمل قائم على المظاريف والعمليات الجماعية ومكتبة القوالب وسياسات الاحتفاظ والامتثال الكامل." },
    features: [
      { title: { en: "Envelope Workflows", ar: "سير عمل المظاريف" }, description: { en: "Create signing envelopes with ordered recipients, parallel signing, and custom fields.", ar: "إنشاء مظاريف توقيع مع مستلمين مرتبين والتوقيع المتوازي وحقول مخصصة." }, icon: Workflow },
      { title: { en: "Bulk Send", ar: "الإرسال الجماعي" }, description: { en: "Send documents for signature to hundreds of recipients simultaneously.", ar: "إرسال المستندات للتوقيع لمئات المستلمين في وقت واحد." }, icon: Megaphone },
      { title: { en: "Template Management", ar: "إدارة القوالب" }, description: { en: "Create reusable templates with pre-placed signature fields and recipient roles.", ar: "إنشاء قوالب قابلة لإعادة الاستخدام مع حقول توقيع وأدوار مستلمين محددة مسبقاً." }, icon: FileText },
      { title: { en: "Compliance & Retention", ar: "الامتثال والاحتفاظ" }, description: { en: "eIDAS/UETA compliant signatures with configurable document retention policies.", ar: "توقيعات متوافقة مع eIDAS/UETA مع سياسات احتفاظ بالمستندات قابلة للتكوين." }, icon: ClipboardCheck },
      { title: { en: "Correspondence Management", ar: "إدارة المراسلات" }, description: { en: "Track and manage all organizational correspondence with signing workflows.", ar: "تتبع وإدارة جميع المراسلات التنظيمية مع سير عمل التوقيع." }, icon: Briefcase },
      { title: { en: "Audit Trail", ar: "مسار التدقيق" }, description: { en: "Complete signing history with timestamps, IP addresses, and certificate details.", ar: "سجل توقيع كامل مع الطوابع الزمنية وعناوين IP وتفاصيل الشهادة." }, icon: Lock },
    ],
    workflowDesc: { en: "Design multi-step signing workflows with sequential and parallel routing, delegation rules, expiration deadlines, and automated reminders. Integrate with document management systems.", ar: "تصميم سير عمل توقيع متعدد الخطوات مع توجيه متسلسل ومتوازي وقواعد تفويض ومواعيد انتهاء وتذكيرات آلية. التكامل مع أنظمة إدارة المستندات." },
    rbacDesc: { en: "Organization admins manage settings, department managers control templates, signers access their documents, and workspace admins oversee compliance.", ar: "يدير مسؤولو المنظمة الإعدادات ويتحكم مديرو الأقسام في القوالب ويصل الموقعون إلى مستنداتهم ويشرف مسؤولو مساحات العمل على الامتثال." },
    analyticsDesc: { en: "Track signing completion rates, average turnaround time, envelope status distribution, department usage, and template effectiveness metrics.", ar: "تتبع معدلات إتمام التوقيع ومتوسط وقت الاستجابة وتوزيع حالة المظاريف واستخدام الأقسام ومقاييس فعالية القوالب." },
    securityDesc: { en: "Bank-grade AES-256 encryption, MFA authentication, PKI digital certificates, tamper-evident seals, and compliance with Saudi e-transactions regulations.", ar: "تشفير AES-256 على مستوى البنوك والمصادقة متعددة العوامل وشهادات PKI الرقمية وأختام مقاومة للتلاعب والامتثال لأنظمة المعاملات الإلكترونية السعودية." },
  },

  // ═══════════════════════════════════════════
  // 9. TICKETS — from tkt-system
  // ═══════════════════════════════════════════
  {
    slug: "tickets",
    name: { en: "Nuzom Tickets", ar: "نُظُم التذاكر" },
    tagline: { en: "IT Service Management & Helpdesk", ar: "إدارة خدمات تقنية المعلومات ومكتب المساعدة" },
    description: { en: "Enterprise ITSM platform with ticket management, change control, problem management, CMDB, release management, contract & vendor management, knowledge base, and AI automation hub.", ar: "منصة ITSM مؤسسية مع إدارة التذاكر والتحكم بالتغييرات وإدارة المشاكل وقاعدة بيانات التكوين وإدارة الإصدارات وإدارة العقود والموردين وقاعدة المعرفة ومحور أتمتة الذكاء الاصطناعي." },
    icon: Ticket,
    color: "from-orange-500 to-red-600",
    problem: { en: "IT departments handle tickets via email, track changes in spreadsheets, have no CMDB for asset relationships, and lack integrated workflows for problems, releases, and vendor management.", ar: "تتعامل أقسام تقنية المعلومات مع التذاكر عبر البريد الإلكتروني وتتبع التغييرات في جداول بيانات ولا تملك CMDB لعلاقات الأصول وتفتقر لسير عمل متكامل للمشاكل والإصدارات وإدارة الموردين." },
    solution: { en: "Nuzom Tickets unifies all ITSM processes — incidents, changes, problems, CMDB, releases, contracts, vendors, and knowledge base — with AI-powered automation and workflow builder.", ar: "يوحد نُظُم التذاكر جميع عمليات ITSM — الحوادث والتغييرات والمشاكل وCMDB والإصدارات والعقود والموردين وقاعدة المعرفة — مع أتمتة بالذكاء الاصطناعي." },
    features: [
      { title: { en: "Ticket Management", ar: "إدارة التذاكر" }, description: { en: "Create, assign, track, merge, split, and bulk-operate on tickets with SLA tracking.", ar: "إنشاء وتعيين وتتبع ودمج وتقسيم وعمليات جماعية على التذاكر مع تتبع SLA." }, icon: Headphones },
      { title: { en: "Change & Release", ar: "التغييرات والإصدارات" }, description: { en: "Change workflows with calendar view, approval chains, and release planning.", ar: "سير عمل التغييرات مع عرض التقويم وسلاسل الموافقة وتخطيط الإصدارات." }, icon: GitBranch },
      { title: { en: "CMDB", ar: "قاعدة بيانات التكوين" }, description: { en: "Configuration items, CI types, asset lifecycle, and relationship mapping.", ar: "عناصر التكوين وأنواع CI ودورة حياة الأصول وخريطة العلاقات." }, icon: Server },
      { title: { en: "Problem Management", ar: "إدارة المشاكل" }, description: { en: "Root cause analysis, problem board, known error database, and trend analytics.", ar: "تحليل الأسباب الجذرية ولوحة المشاكل وقاعدة بيانات الأخطاء المعروفة وتحليلات الاتجاهات." }, icon: Target },
      { title: { en: "Vendor & Contracts", ar: "الموردون والعقود" }, description: { en: "Vendor assessments, contract management, performance tracking, and cost management.", ar: "تقييم الموردين وإدارة العقود وتتبع الأداء وإدارة التكاليف." }, icon: Handshake },
      { title: { en: "AI Automation Hub", ar: "محور أتمتة الذكاء الاصطناعي" }, description: { en: "AI-powered ticket routing, auto-categorization, suggested solutions, and workflow builder.", ar: "توجيه التذاكر بالذكاء الاصطناعي والتصنيف التلقائي والحلول المقترحة ومنشئ سير العمل." }, icon: Brain },
    ],
    workflowDesc: { en: "Build custom workflows for ticket routing, change approvals, problem escalation, release deployment gates, and vendor onboarding. AI auto-assigns tickets and suggests resolutions from the knowledge base.", ar: "بناء سير عمل مخصص لتوجيه التذاكر وموافقات التغييرات وتصعيد المشاكل وبوابات نشر الإصدارات وتأهيل الموردين. الذكاء الاصطناعي يعيّن التذاكر تلقائياً ويقترح حلولاً من قاعدة المعرفة." },
    rbacDesc: { en: "Admins configure the system, agents handle tickets, change managers approve changes, problem managers investigate root causes, and end-users submit requests via the self-service portal.", ar: "المدراء يكوّنون النظام والوكلاء يتعاملون مع التذاكر ومديرو التغيير يوافقون على التغييرات ومديرو المشاكل يحققون في الأسباب الجذرية والمستخدمون يقدمون الطلبات عبر بوابة الخدمة الذاتية." },
    analyticsDesc: { en: "Track SLA compliance, first response time, resolution time, ticket volume trends, change success rates, CMDB health, agent workload, team performance, and TCO calculations.", ar: "تتبع الامتثال لاتفاقيات مستوى الخدمة ووقت الاستجابة الأول ووقت الحل واتجاهات حجم التذاكر ومعدلات نجاح التغييرات وصحة CMDB وعبء عمل الوكلاء وأداء الفريق وحسابات TCO." },
    securityDesc: { en: "Role-based access control, encrypted communications, IP-based restrictions, comprehensive audit trails, and compliance with ITIL best practices and Saudi cybersecurity regulations.", ar: "التحكم بالوصول حسب الأدوار والاتصالات المشفرة والقيود المبنية على IP ومسارات تدقيق شاملة والامتثال لأفضل ممارسات ITIL وأنظمة الأمن السيبراني السعودية." },
  },

  // ═══════════════════════════════════════════
  // 10. BUDGET — from Budget Tracker
  // ═══════════════════════════════════════════
  {
    slug: "budget",
    name: { en: "Nuzom Budget", ar: "نُظُم الميزانيات" },
    tagline: { en: "Budget & Procurement Management", ar: "إدارة الميزانيات والمشتريات" },
    description: { en: "Comprehensive budget management system with budget periods, purchase requests, purchase orders, vendor management, cost centers, department budgets, and full audit logging.", ar: "نظام إدارة ميزانيات شامل مع فترات الميزانية وطلبات الشراء وأوامر الشراء وإدارة الموردين ومراكز التكلفة وميزانيات الأقسام وتسجيل التدقيق الكامل." },
    icon: Wallet,
    color: "from-lime-500 to-green-600",
    problem: { en: "Finance teams manage budgets in spreadsheets, process purchase requests via email, lack visibility into spending across cost centers, and have no audit trail for budget approvals.", ar: "تدير فرق المالية الميزانيات في جداول بيانات وتعالج طلبات الشراء عبر البريد الإلكتروني وتفتقر للرؤية في الإنفاق عبر مراكز التكلفة وليس لديها مسار تدقيق لموافقات الميزانية." },
    solution: { en: "Nuzom Budget centralizes budget planning, purchase workflows, vendor management, and cost tracking with real-time spending visibility and comprehensive audit logs.", ar: "يجمع نُظُم الميزانيات تخطيط الميزانية وسير عمل الشراء وإدارة الموردين وتتبع التكاليف مع رؤية فورية للإنفاق وسجلات تدقيق شاملة." },
    features: [
      { title: { en: "Budget Planning", ar: "تخطيط الميزانية" }, description: { en: "Create budgets by period, department, project, and category with allocation tracking.", ar: "إنشاء الميزانيات حسب الفترة والقسم والمشروع والفئة مع تتبع التخصيص." }, icon: Target },
      { title: { en: "Purchase Requests", ar: "طلبات الشراء" }, description: { en: "Submit, review, and approve purchase requests with multi-level approval chains.", ar: "تقديم ومراجعة والموافقة على طلبات الشراء مع سلاسل موافقة متعددة المستويات." }, icon: Package },
      { title: { en: "Purchase Orders", ar: "أوامر الشراء" }, description: { en: "Generate POs from approved requests, track delivery, and manage payments.", ar: "إنشاء أوامر الشراء من الطلبات المعتمدة وتتبع التسليم وإدارة المدفوعات." }, icon: Receipt },
      { title: { en: "Vendor Management", ar: "إدارة الموردين" }, description: { en: "Vendor registration, performance ratings, and procurement history tracking.", ar: "تسجيل الموردين وتقييم الأداء وتتبع سجل المشتريات." }, icon: Store },
      { title: { en: "Cost Centers", ar: "مراكز التكلفة" }, description: { en: "Define cost centers, track expenses, and allocate budgets across departments.", ar: "تحديد مراكز التكلفة وتتبع المصروفات وتوزيع الميزانيات عبر الأقسام." }, icon: DollarSign },
      { title: { en: "Audit Logs", ar: "سجلات التدقيق" }, description: { en: "Complete trail of all budget changes, approvals, and transactions.", ar: "مسار كامل لجميع تغييرات الميزانية والموافقات والمعاملات." }, icon: ClipboardCheck },
    ],
    workflowDesc: { en: "Automate purchase request approvals based on amount thresholds and department hierarchy. Route POs to appropriate budget holders, trigger over-budget alerts, and auto-generate payment schedules.", ar: "أتمتة موافقات طلبات الشراء بناءً على حدود المبالغ والتسلسل الهرمي للأقسام. توجيه أوامر الشراء لأصحاب الميزانية المناسبين وتشغيل تنبيهات تجاوز الميزانية." },
    rbacDesc: { en: "CFO sees all budgets, department heads manage their allocations, procurement officers handle POs, requesters submit purchase requests, and auditors review logs.", ar: "المدير المالي يرى جميع الميزانيات ورؤساء الأقسام يديرون تخصيصاتهم ومسؤولو المشتريات يتعاملون مع أوامر الشراء والطالبون يقدمون طلبات الشراء والمدققون يراجعون السجلات." },
    analyticsDesc: { en: "Track budget utilization rates, spending trends, vendor performance scores, cost center analysis, purchase cycle times, and generate financial compliance reports.", ar: "تتبع معدلات استخدام الميزانية واتجاهات الإنفاق ودرجات أداء الموردين وتحليل مراكز التكلفة وأوقات دورة الشراء وإنشاء تقارير الامتثال المالي." },
    securityDesc: { en: "Financial-grade encryption, segregation of duties controls, approval delegation rules, and compliance with Saudi financial regulations and internal audit standards.", ar: "تشفير على مستوى مالي وضوابط فصل المهام وقواعد تفويض الموافقة والامتثال للأنظمة المالية السعودية ومعايير التدقيق الداخلي." },
  },

  // ═══════════════════════════════════════════
  // 11. FITAI — from creditguard-codex
  // ═══════════════════════════════════════════
  {
    slug: "fitai",
    name: { en: "Nuzom FitAI", ar: "نُظُم فت إيه آي" },
    tagline: { en: "AI-Powered Fit Intelligence Platform", ar: "منصة ذكاء المقاسات بالذكاء الاصطناعي" },
    description: { en: "Revolutionary AI platform that analyzes body measurements to recommend perfect-fit products — with fit profiles, smart recommendations, outfit builder, wardrobe management, and embeddable widgets.", ar: "منصة ذكاء اصطناعي ثورية تحلل قياسات الجسم للتوصية بمنتجات مثالية المقاس — مع ملفات المقاسات والتوصيات الذكية ومنشئ الأزياء وإدارة خزانة الملابس وعناصر قابلة للتضمين." },
    icon: Cpu,
    color: "from-fuchsia-500 to-purple-600",
    problem: { en: "E-commerce fashion retailers lose billions to returns caused by sizing issues. Customers guess their size, order multiple sizes, and return what doesn't fit — costly for both sides.", ar: "يخسر تجار الأزياء الإلكترونية مليارات بسبب المرتجعات الناتجة عن مشاكل المقاسات. يخمّن العملاء مقاسهم ويطلبون مقاسات متعددة ويُرجعون ما لا يناسبهم." },
    solution: { en: "Nuzom FitAI uses advanced AI to analyze body measurements from photos, predict perfect sizes, recommend matching products, and reduce returns by up to 60%.", ar: "يستخدم نُظُم فت إيه آي ذكاءً اصطناعياً متقدماً لتحليل قياسات الجسم من الصور والتنبؤ بالمقاسات المثالية والتوصية بالمنتجات المطابقة وتقليل المرتجعات بنسبة تصل إلى 60%." },
    features: [
      { title: { en: "Instant Analysis", ar: "تحليل فوري" }, description: { en: "Upload a photo and get accurate body measurements in seconds using advanced AI.", ar: "حمّل صورة واحصل على قياسات جسم دقيقة في ثوانٍ باستخدام الذكاء الاصطناعي المتقدم." }, icon: Zap },
      { title: { en: "Smart Recommendations", ar: "توصيات ذكية" }, description: { en: "Personalized product recommendations with fit scores, style matches, and size predictions.", ar: "توصيات منتجات مخصصة مع درجات الملاءمة ومطابقة الأنماط والتنبؤ بالمقاسات." }, icon: Sparkles },
      { title: { en: "Outfit Builder", ar: "منشئ الأزياء" }, description: { en: "AI-curated outfit combinations based on your style preferences and body type.", ar: "تنسيقات أزياء مختارة بالذكاء الاصطناعي بناءً على تفضيلات أسلوبك ونوع جسمك." }, icon: Shirt },
      { title: { en: "Fit Profile", ar: "ملف المقاسات" }, description: { en: "Save your measurements and preferences for instant size recommendations everywhere.", ar: "احفظ قياساتك وتفضيلاتك للحصول على توصيات مقاسات فورية في كل مكان." }, icon: UserCheck },
      { title: { en: "Embeddable Widget", ar: "عنصر قابل للتضمين" }, description: { en: "Add fit recommendations to any e-commerce store with a simple code snippet.", ar: "أضف توصيات المقاسات لأي متجر إلكتروني بمقطع كود بسيط." }, icon: Eye },
      { title: { en: "Privacy First", ar: "الخصوصية أولاً" }, description: { en: "Your data is encrypted and secure. We never share measurements or personal information.", ar: "بياناتك مشفرة وآمنة. لا نشارك القياسات أو المعلومات الشخصية أبداً." }, icon: Shield },
    ],
    workflowDesc: { en: "Customer uploads photo → AI extracts measurements → algorithm matches against product size charts → generates fit scores → recommends best sizes → saves to profile for future purchases.", ar: "العميل يحمّل صورة → الذكاء الاصطناعي يستخرج القياسات → الخوارزمية تطابق مع جداول مقاسات المنتجات → تنشئ درجات الملاءمة → توصي بأفضل المقاسات → تحفظ في الملف للمشتريات المستقبلية." },
    rbacDesc: { en: "Platform admins manage AI models and size charts, tenant admins configure their store integration, staff manage products, and customers access their fit profiles.", ar: "مدراء المنصة يديرون نماذج الذكاء الاصطناعي وجداول المقاسات ومدراء المتاجر يكوّنون تكاملهم والموظفون يديرون المنتجات والعملاء يصلون لملفات مقاساتهم." },
    analyticsDesc: { en: "Track fit accuracy rates, return reduction metrics, widget conversion rates, popular size distributions, and customer engagement analytics across all integrated stores.", ar: "تتبع معدلات دقة الملاءمة ومقاييس تقليل المرتجعات ومعدلات تحويل العنصر وتوزيعات المقاسات الشائعة وتحليلات تفاعل العملاء عبر جميع المتاجر المتكاملة." },
    securityDesc: { en: "End-to-end encryption for body measurements, GDPR-compliant data handling, no raw image storage, SOC 2 Type II certification, and privacy-by-design architecture.", ar: "تشفير شامل لقياسات الجسم ومعالجة بيانات متوافقة مع GDPR وعدم تخزين الصور الخام وشهادة SOC 2 Type II وهندسة الخصوصية بالتصميم." },
  },
];
