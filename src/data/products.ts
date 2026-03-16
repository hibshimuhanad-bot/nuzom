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
  emotionalHook: { en: string; ar: string };
  imagineDay: { en: string; ar: string };
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
  // 1. HSSE — الإحساس: راحة البال
  // ═══════════════════════════════════════════
  {
    slug: "hsse",
    name: { en: "Nzom HSSE", ar: "نزوم السلامة" },
    tagline: {
      en: "Sleep well. Your sites are safe.",
      ar: "نَم وعينك مرتاحة.. مواقعك في أمان."
    },
    description: {
      en: "Imagine ending your day knowing every permit is tracked, every risk is logged, and every worker goes home safe. That's Nzom HSSE — peace of mind, not just a system.",
      ar: "تخيّل تنهي يومك وأنت متطمّن إن كل تصريح متابَع، وكل خطر مرصود، وكل عامل يرجع لأهله سالم. هذا نزوم السلامة — مو مجرد نظام، هذا راحة بال حقيقية."
    },
    emotionalHook: {
      en: "Peace of mind starts here.",
      ar: "راحة البال تبدأ من هنا."
    },
    imagineDay: {
      en: "Imagine starting your morning with a green dashboard — all permits approved, all inspections done, zero open risks. No panicked calls, no last-minute scrambles. You sip your coffee knowing every site is running safely. That's your new normal.",
      ar: "تخيّل تبدأ صباحك ولوحة التحكم كلها خضراء — كل التصاريح معتمدة، كل الفحوصات مكتملة، صفر مخاطر مفتوحة. بدون اتصالات مفاجئة، بدون ركض آخر لحظة. تشرب قهوتك وأنت تعرف إن كل موقع شغّال بأمان. هذا وضعك الجديد."
    },
    icon: Shield,
    color: "from-blue-500 to-cyan-600",
    problem: {
      en: "You wake up worried. Are the permits in order? Did that incident get reported? Is the site actually safe? You spend your day chasing papers, calling supervisors, and hoping nothing falls through the cracks.",
      ar: "تصحى وأنت قلقان. هل التصاريح جاهزة؟ هل الحادث تم تبليغه؟ هل الموقع فعلاً آمن؟ يومك يروح وأنت تلاحق أوراق وتتصل بمشرفين وتتمنى إن ما في شيء ضايع."
    },
    solution: {
      en: "With Nzom HSSE, you open one screen and see everything — permits, incidents, risks, inspections, training. Everything is tracked, everyone is accountable, and you finally breathe.",
      ar: "مع نزوم السلامة، تفتح شاشة وحدة وتشوف كل شيء — التصاريح، الحوادث، المخاطر، الفحوصات، التدريب. كل شيء متابَع، كل شخص مسؤول، وأخيراً ترتاح."
    },
    features: [
      { title: { en: "Permit to Work", ar: "تصاريح العمل" }, description: { en: "No more chasing signatures. Digital permits flow automatically to the right people.", ar: "بدون ملاحقة توقيعات. التصاريح الرقمية تروح للشخص الصحيح تلقائياً." }, icon: ClipboardCheck },
      { title: { en: "Incident Management", ar: "إدارة الحوادث" }, description: { en: "Report from the field in seconds. Investigation starts immediately, not days later.", ar: "بلّغ من الموقع في ثواني. التحقيق يبدأ فوراً، مو بعد أيام." }, icon: AlertTriangle },
      { title: { en: "Risk Assessment", ar: "تقييم المخاطر" }, description: { en: "See your risks on a heat map. Know exactly where to focus before something happens.", ar: "شوف مخاطرك على خريطة حرارية. اعرف وين تركّز قبل لا يصير شيء." }, icon: Flame },
      { title: { en: "LOTO & MOC", ar: "عزل الطاقة وإدارة التغيير" }, description: { en: "Energy isolation and change management with zero room for error.", ar: "عزل الطاقة وإدارة التغيير بدون أي مجال للخطأ." }, icon: Lock },
      { title: { en: "ISO Compliance & Audits", ar: "امتثال الآيزو والتدقيق" }, description: { en: "Audits become easy when everything is already documented and tracked.", ar: "التدقيق يصير سهل لما كل شيء موثّق ومتابَع من الأساس." }, icon: FileCheck },
      { title: { en: "Training & Lessons Learned", ar: "التدريب والدروس المستفادة" }, description: { en: "Every incident becomes a lesson. Every worker gets trained. Nothing is wasted.", ar: "كل حادث يصير درس. كل عامل يتدرّب. ما في شيء يروح هدر." }, icon: BookOpen },
    ],
    workflowDesc: { en: "The system works while you sleep. Permits get routed, incidents get escalated, inspections get scheduled — all automatically. You just set the rules once.", ar: "النظام يشتغل وأنت نايم. التصاريح تتوجّه، الحوادث تتصعّد، الفحوصات تنجدول — كل شيء تلقائي. أنت بس تحط القواعد مرة وحدة." },
    rbacDesc: { en: "Everyone sees exactly what they need. Safety officers see everything. Workers see their tasks. Managers see their sites. No confusion, no overload.", ar: "كل واحد يشوف بالضبط اللي يخصه. مسؤول السلامة يشوف كل شيء. العامل يشوف مهامه. المدير يشوف مواقعه. بدون لخبطة، بدون حمل زايد." },
    analyticsDesc: { en: "See the safety pulse of your entire organization at a glance. Trends, patterns, weak spots — all visible before they become problems.", ar: "شوف نبض السلامة في كل منظمتك بنظرة وحدة. الاتجاهات، الأنماط، النقاط الضعيفة — كلها واضحة قبل لا تصير مشاكل." },
    securityDesc: { en: "Your safety data is sacred. Enterprise encryption, Saudi regulatory compliance, and audit trails that satisfy even Aramco standards.", ar: "بيانات السلامة حقتك مقدسة. تشفير مؤسسي، امتثال للأنظمة السعودية، ومسارات تدقيق ترضي حتى معايير أرامكو." },
  },

  // ═══════════════════════════════════════════
  // 2. LEGAL — الإحساس: السيطرة
  // ═══════════════════════════════════════════
  {
    slug: "legal",
    name: { en: "Nzom Legal", ar: "نزوم القانونية" },
    tagline: {
      en: "Nothing slips through. Ever.",
      ar: "ولا شيء يفلت منك. أبداً."
    },
    description: {
      en: "Every case tracked. Every deadline met. Every document at your fingertips. Nzom Legal gives you total control over your legal operations — so you focus on winning, not searching.",
      ar: "كل قضية متابَعة. كل موعد ملتزم فيه. كل مستند في متناول يدك. نزوم القانونية يمنحك سيطرة مطلقة على عملياتك القانونية — عشان تركّز على كسب القضايا، مو البحث عن الملفات."
    },
    emotionalHook: {
      en: "Total control over your legal world.",
      ar: "عالمك القانوني، تحت سيطرتك الكاملة."
    },
    imagineDay: {
      en: "Imagine walking into court with every document ready, every precedent researched, every deadline color-coded on your calendar. Your client asks about case status — you answer in seconds, not hours. Your team works in sync without a single email chain. That's legal work, done right.",
      ar: "تخيّل تدخل المحكمة وكل مستند جاهز، كل سابقة مبحوثة، كل موعد ملوّن في تقويمك. عميلك يسأل عن حالة القضية — تجاوبه في ثواني، مو ساعات. فريقك يشتغل بتناغم بدون سلسلة إيميلات. هذا العمل القانوني، بالطريقة الصحيحة."
    },
    icon: Scale,
    color: "from-blue-500 to-cyan-600",
    problem: {
      en: "You're drowning in files. Deadlines sneak up on you. Court dates get mixed up. Your team wastes hours searching for documents instead of building cases. It feels like you're always one step behind.",
      ar: "غارق في الملفات. المواعيد النهائية تفاجئك. جلسات المحكمة تتلخبط. فريقك يضيّع ساعات يدوّر مستندات بدل ما يبني قضايا. دايم تحس إنك متأخر خطوة."
    },
    solution: {
      en: "Nzom Legal puts everything in one place — cases, sessions, documents, deadlines, billing. With AI that understands Saudi law, you're always prepared, always ahead.",
      ar: "نزوم القانونية يحط كل شيء في مكان واحد — القضايا، الجلسات، المستندات، المواعيد، الفوترة. مع ذكاء اصطناعي يفهم النظام السعودي، دايماً جاهز، دايماً متقدم."
    },
    features: [
      { title: { en: "Case Management", ar: "إدارة القضايا" }, description: { en: "Every case has its own world — files, notes, deadlines, all in one clean view.", ar: "كل قضية لها عالمها — ملفات، ملاحظات، مواعيد، كلها في عرض واحد نظيف." }, icon: Briefcase },
      { title: { en: "Court Sessions", ar: "الجلسات القضائية" }, description: { en: "Never miss a session. Calendar syncs, reminders, and prep checklists built in.", ar: "ما تفوت جلسة أبداً. مزامنة التقويم والتذكيرات وقوائم التحضير مدمجة." }, icon: Calendar },
      { title: { en: "AI Legal Assistant", ar: "المساعد القانوني الذكي" }, description: { en: "Ask it anything about Saudi law. It researches, drafts, and suggests — like having a junior associate who never sleeps.", ar: "اسأله أي شيء عن النظام السعودي. يبحث ويصيغ ويقترح — مثل محامي مساعد ما ينام أبداً." }, icon: Brain },
      { title: { en: "Document Management", ar: "إدارة المستندات" }, description: { en: "Find any document in seconds. Version control, templates, auto-generation.", ar: "لاقي أي مستند في ثواني. تحكم بالنسخ، قوالب، إنشاء تلقائي." }, icon: FileText },
      { title: { en: "Knowledge Base", ar: "قاعدة المعرفة" }, description: { en: "Your firm's collective wisdom, searchable and always growing.", ar: "الخبرة الجماعية لمكتبك، قابلة للبحث ودايم تنمو." }, icon: BookOpen },
      { title: { en: "Client Portal", ar: "بوابة العملاء" }, description: { en: "Clients track their cases themselves. Fewer calls, happier clients.", ar: "العملاء يتابعون قضاياهم بنفسهم. اتصالات أقل، عملاء أسعد." }, icon: Globe },
    ],
    workflowDesc: { en: "Cases flow naturally — assigned, tracked, escalated, resolved. Deadlines trigger reminders. Documents route for review. You focus on the law, the system handles the rest.", ar: "القضايا تمشي بسلاسة — تُعيَّن، تُتابَع، تُصعَّد، تُحَل. المواعيد تشغّل تذكيرات. المستندات تروح للمراجعة. أنت ركّز على القانون، النظام يتكفل بالباقي." },
    rbacDesc: { en: "Partners see the big picture. Associates see their cases. Clients see their status. Everyone gets exactly what they need — nothing more, nothing less.", ar: "الشركاء يشوفون الصورة الكبيرة. المحامون يشوفون قضاياهم. العملاء يشوفون حالتهم. كل واحد يحصل بالضبط اللي يحتاجه." },
    analyticsDesc: { en: "Know which cases are winning, which are stuck, and where your team spends its time. Data-driven decisions, not gut feelings.", ar: "اعرف أي القضايا تكسب، أيها عالقة، ووين فريقك يقضي وقته. قرارات مبنية على بيانات، مو أحاسيس." },
    securityDesc: { en: "Attorney-client privilege is non-negotiable. Bank-grade encryption, audit logs, and full Saudi data compliance protect every byte.", ar: "سرية المحامي والعميل ما فيها تفاوض. تشفير بنكي، سجلات تدقيق، وامتثال كامل للأنظمة السعودية يحمي كل بايت." },
  },

  // ═══════════════════════════════════════════
  // 3. TASKS — الإحساس: الارتياح
  // ═══════════════════════════════════════════
  {
    slug: "tasks",
    name: { en: "Nzom Tasks", ar: "نزوم المهام" },
    tagline: {
      en: "Relax. Everything is under control.",
      ar: "ارتاح.. كل شيء ماشي بالضبط."
    },
    description: {
      en: "Open the system in the morning and find every task clear, every project on track, nothing lost. Nzom Tasks gives you the relief of knowing exactly where everything stands.",
      ar: "افتح النظام الصبح وكل مهمة في مكانها، كل مشروع ماشي، وما في شيء ضايع. نزوم المهام يعطيك الراحة إنك تعرف بالضبط وين كل شيء واقف."
    },
    emotionalHook: {
      en: "Finally, clarity.",
      ar: "أخيراً.. كل شيء واضح."
    },
    imagineDay: {
      en: "Imagine opening your laptop and seeing a clean, organized board. Every task assigned, every deadline visible, every project progressing. No more chasing people. No more 'did you finish that?' messages. Just calm, productive work.",
      ar: "تخيّل تفتح اللابتوب وتشوف لوحة نظيفة ومرتبة. كل مهمة معيّنة، كل موعد واضح، كل مشروع يتقدم. بدون ملاحقة أحد. بدون رسائل 'خلصت ذاك؟'. بس شغل هادي ومنتج."
    },
    icon: CheckSquare,
    color: "from-violet-500 to-purple-600",
    problem: {
      en: "Tired of chasing people one by one? Every day you waste time figuring out who did what. Tasks fall through the cracks. Projects feel chaotic. You're the bottleneck because everything flows through you.",
      ar: "تعبت من متابعة الناس واحد واحد؟ كل يوم تضيع وقت تدور مين سوى إيش. مهام تضيع بين الشقوق. المشاريع تحس بفوضى. أنت عنق الزجاجة لأن كل شيء يمر عليك."
    },
    solution: {
      en: "With Nzom Tasks, you open the system and relax. Everything is in front of you — who's doing what, what's late, what's next. Your team moves without you having to push.",
      ar: "مع نزوم المهام، تفتح النظام وترتاح. كل شيء أمامك — مين يسوي إيش، إيش متأخر، إيش الجاي. فريقك يتحرك بدون ما تحتاج تدفعهم."
    },
    features: [
      { title: { en: "Portfolios & Programs", ar: "المحافظ والبرامج" }, description: { en: "See the big picture. All your projects organized into portfolios that make sense.", ar: "شوف الصورة الكبيرة. كل مشاريعك منظمة في محافظ واضحة." }, icon: Layers },
      { title: { en: "Kanban & Timeline", ar: "كانبان والجدول الزمني" }, description: { en: "Drag, drop, done. Visual boards that make task management feel effortless.", ar: "اسحب، أفلت، خلاص. لوحات مرئية تخلي إدارة المهام بدون جهد." }, icon: KanbanSquare },
      { title: { en: "Task Automation", ar: "أتمتة المهام" }, description: { en: "Tasks assign themselves. Reminders send themselves. You just watch it work.", ar: "المهام تتعيّن بنفسها. التذكيرات ترسل نفسها. أنت بس تشوفها تشتغل." }, icon: Workflow },
      { title: { en: "Departments & Companies", ar: "الأقسام والشركات" }, description: { en: "Multiple companies, multiple departments — one clear view of everything.", ar: "شركات متعددة، أقسام متعددة — عرض واحد واضح لكل شيء." }, icon: Building2 },
      { title: { en: "Scheduled Reports", ar: "التقارير المجدولة" }, description: { en: "Reports land in your inbox automatically. Stay informed without lifting a finger.", ar: "التقارير توصل لبريدك تلقائياً. خلّك على اطلاع بدون ما تحرك ساكن." }, icon: Clock },
      { title: { en: "Multi-language", ar: "متعدد اللغات" }, description: { en: "Arabic and English, right-to-left ready. Your whole team feels at home.", ar: "عربي وإنجليزي، جاهز للـ RTL. كل فريقك يحس بالراحة." }, icon: Globe },
    ],
    workflowDesc: { en: "Set it up once, and the system takes over. Tasks route to the right people, deadlines trigger alerts, status updates happen automatically. You manage the strategy, not the follow-ups.", ar: "جهّزه مرة وحدة، والنظام يتولى الباقي. المهام تروح للأشخاص الصحيحين، المواعيد تشغّل تنبيهات، التحديثات تصير تلقائياً. أنت تدير الاستراتيجية، مو المتابعات." },
    rbacDesc: { en: "Executives see portfolios. Managers see projects. Team members see their tasks. Everyone focuses on what matters to them.", ar: "المسؤولون التنفيذيون يشوفون المحافظ. المديرون يشوفون المشاريع. أعضاء الفريق يشوفون مهامهم. كل واحد يركز على اللي يهمه." },
    analyticsDesc: { en: "Know instantly — is your team fast or stuck? Which projects are healthy? Where are the bottlenecks? Real answers, not guesswork.", ar: "اعرف فوراً — فريقك سريع ولا عالق؟ أي المشاريع صحية؟ وين الاختناقات؟ إجابات حقيقية، مو تخمينات." },
    securityDesc: { en: "Your project data stays private. Enterprise encryption, access logs, and multi-tenant isolation keep everything locked down.", ar: "بيانات مشاريعك تبقى خاصة. تشفير مؤسسي، سجلات وصول، وعزل يحمي كل شيء." },
  },

  // ═══════════════════════════════════════════
  // 4. HR — الإحساس: الثقة
  // ═══════════════════════════════════════════
  {
    slug: "hr",
    name: { en: "Nzom HR", ar: "نزوم الموارد البشرية" },
    tagline: {
      en: "Your team is taken care of.",
      ar: "فريقك في أيدٍ أمينة."
    },
    description: {
      en: "When your people feel taken care of, they give their best. Nzom HR handles attendance, payroll, leaves, and growth — so your team trusts the system and you trust the numbers.",
      ar: "لما فريقك يحس إنه محتواه ومقدّر، يعطيك أفضل ما عنده. نزوم الموارد البشرية يتولّى الحضور والرواتب والإجازات والتطوير — فريقك يثق بالنظام، وأنت تثق بالأرقام."
    },
    emotionalHook: {
      en: "Happy teams build great companies.",
      ar: "الفريق الراضي يبني شركة عظيمة."
    },
    imagineDay: {
      en: "Imagine payroll running itself perfectly every month. Employees request leaves from their phones and get instant approvals. Attendance is tracked without arguments. Training paths are clear. Your HR team finally has time to focus on people, not paperwork.",
      ar: "تخيّل الرواتب تنزل بشكل مثالي كل شهر لحالها. الموظفين يطلبون إجازات من جوالاتهم ويحصلون موافقة فورية. الحضور يتسجّل بدون جدال. مسارات التدريب واضحة. فريق الموارد البشرية أخيراً عنده وقت يركز على الناس، مو الأوراق."
    },
    icon: Users,
    color: "from-amber-500 to-orange-600",
    problem: {
      en: "Payroll mistakes. Leave balance arguments. Attendance disputes. Your HR team spends all day on admin instead of building culture. Employees feel like numbers, not people.",
      ar: "أخطاء في الرواتب. جدالات على رصيد الإجازات. خلافات على الحضور. فريق الموارد البشرية يقضي يومه في إدارة بدل بناء ثقافة. الموظفين يحسون إنهم أرقام، مو بشر."
    },
    solution: {
      en: "Nzom HR automates the tedious stuff — payroll, attendance, leaves — so your HR team can focus on what matters: keeping your people happy, growing, and engaged.",
      ar: "نزوم الموارد البشرية يأتمت الأشياء المملة — الرواتب، الحضور، الإجازات — عشان فريق الموارد البشرية يركز على اللي يهم: إن فريقك يكون سعيد، يتطور، ومنخرط."
    },
    features: [
      { title: { en: "Attendance Tracking", ar: "تتبع الحضور" }, description: { en: "No more spreadsheets. Automatic tracking that everyone trusts.", ar: "بدون جداول بيانات. تتبع تلقائي يثق فيه الجميع." }, icon: UserCheck },
      { title: { en: "Payroll & Salaries", ar: "الرواتب والأجور" }, description: { en: "Payroll runs perfectly every time. GOSI compliant, bank-ready, zero stress.", ar: "الرواتب تنزل مثالية كل مرة. متوافق مع التأمينات، جاهز للبنك، صفر ضغط." }, icon: CreditCard },
      { title: { en: "Leave Management", ar: "إدارة الإجازات" }, description: { en: "Request, approve, done. Balances are always accurate. No more arguments.", ar: "اطلب، وافق، خلاص. الأرصدة دايم صحيحة. بدون جدال." }, icon: Calendar },
      { title: { en: "Departments & Structure", ar: "الأقسام والهيكل التنظيمي" }, description: { en: "Your org chart comes alive. Clear reporting lines, clear responsibilities.", ar: "الهيكل التنظيمي يصير حي. خطوط تقارير واضحة، مسؤوليات واضحة." }, icon: Building2 },
      { title: { en: "Learning Hub", ar: "مركز التعلم" }, description: { en: "Grow your people. Track their skills, certifications, and career paths.", ar: "طوّر فريقك. تابع مهاراتهم وشهاداتهم ومساراتهم المهنية." }, icon: GraduationCap },
      { title: { en: "AI Insights", ar: "رؤى الذكاء الاصطناعي" }, description: { en: "Predict who might leave before they do. Act on data, not surprises.", ar: "توقّع مين ممكن يستقيل قبل لا يسوي. تصرّف على بيانات، مو مفاجآت." }, icon: Brain },
    ],
    workflowDesc: { en: "From day one to exit interview, every HR process flows smoothly. Onboarding checklists complete themselves. Leave approvals route automatically. Payroll calculates without errors. Your HR team becomes strategic, not administrative.", ar: "من اليوم الأول إلى مقابلة الخروج، كل عملية موارد بشرية تمشي بسلاسة. قوائم التأهيل تكتمل لحالها. موافقات الإجازات تتوجّه تلقائياً. الرواتب تتحسب بدون أخطاء. فريق الموارد البشرية يصير استراتيجي، مو إداري." },
    rbacDesc: { en: "HR sees everything. Managers see their teams. Employees see their own data. Self-service means fewer tickets, happier everyone.", ar: "الموارد البشرية تشوف كل شيء. المديرون يشوفون فرقهم. الموظفون يشوفون بياناتهم. الخدمة الذاتية تعني تذاكر أقل، الكل أسعد." },
    analyticsDesc: { en: "See your workforce health at a glance. Turnover trends, attendance patterns, payroll costs — everything you need to make smart people decisions.", ar: "شوف صحة القوى العاملة بنظرة. اتجاهات الدوران، أنماط الحضور، تكاليف الرواتب — كل اللي تحتاجه تاخذ قرارات ذكية عن فريقك." },
    securityDesc: { en: "Employee data is sensitive. We treat it that way — encryption, access controls, and full Saudi privacy compliance.", ar: "بيانات الموظفين حساسة. نتعامل معها بهالطريقة — تشفير، ضوابط وصول، وامتثال كامل لأنظمة الخصوصية السعودية." },
  },

  // ═══════════════════════════════════════════
  // 5. FLEET — الإحساس: التحكم
  // ═══════════════════════════════════════════
  {
    slug: "fleet",
    name: { en: "Nzom Fleet", ar: "نزوم الأسطول" },
    tagline: {
      en: "Your fleet, under your eyes.",
      ar: "أسطولك كامل، تحت نظرك."
    },
    description: {
      en: "Every vehicle tracked. Every fuel receipt accounted for. Every maintenance scheduled before it's too late. Nzom Fleet gives you the confidence that your fleet is running efficiently — even when you're not watching.",
      ar: "كل مركبة متابَعة. كل ريال وقود محسوب. كل صيانة مجدولة قبل فوات الأوان. نزوم الأسطول يعطيك الثقة إن أسطولك يشتغل بأعلى كفاءة — حتى وأنت مو هناك."
    },
    emotionalHook: {
      en: "Control without micromanaging.",
      ar: "تحكّم كامل، بدون ما تلاحق أحد."
    },
    imagineDay: {
      en: "Imagine checking your fleet dashboard and seeing every vehicle's location, fuel level, and next maintenance date — all in real time. A driver completes a safety inspection from his phone before starting. An alert notifies you that a registration expires next week. Everything handled, nothing missed.",
      ar: "تخيّل تفتح لوحة الأسطول وتشوف موقع كل مركبة ومستوى الوقود وموعد الصيانة الجاي — كله بالوقت الفعلي. السائق يكمل فحص السلامة من جواله قبل ما يبدأ. تنبيه ينبّهك إن رخصة تنتهي الأسبوع الجاي. كل شيء متكفّل فيه، ما في شيء فايت."
    },
    icon: Truck,
    color: "from-cyan-500 to-blue-600",
    problem: {
      en: "You don't know where half your vehicles are. Fuel costs keep climbing and you can't figure out why. Maintenance surprises you with breakdowns. Documents expire without warning. It's chaos on wheels.",
      ar: "ما تعرف وين نص مركباتك. تكاليف الوقود تطلع وما تعرف ليش. الصيانة تفاجئك بأعطال. المستندات تنتهي بدون تحذير. فوضى على عجلات."
    },
    solution: {
      en: "Nzom Fleet puts your entire fleet on one screen. Real-time tracking, smart fuel analytics, predictive maintenance, and automatic document alerts. You're in control without micromanaging.",
      ar: "نزوم الأسطول يحط كل أسطولك في شاشة وحدة. تتبع فوري، تحليلات وقود ذكية، صيانة تنبؤية، وتنبيهات مستندات تلقائية. أنت متحكم بدون ملاحقة."
    },
    features: [
      { title: { en: "Fuel Management", ar: "إدارة الوقود" }, description: { en: "Know exactly where every riyal of fuel goes. Spot waste before it drains your budget.", ar: "اعرف بالضبط وين يروح كل ريال وقود. اكتشف الهدر قبل لا يستنزف ميزانيتك." }, icon: Fuel },
      { title: { en: "Predictive Maintenance", ar: "الصيانة التنبؤية" }, description: { en: "Fix it before it breaks. AI predicts maintenance needs based on real data.", ar: "صلّحها قبل لا تتعطل. الذكاء الاصطناعي يتوقع الصيانة بناءً على بيانات حقيقية." }, icon: Wrench },
      { title: { en: "Document Lifecycle", ar: "دورة حياة المستندات" }, description: { en: "Registrations, insurance, licenses — never expire without warning again.", ar: "التسجيلات، التأمين، الرخص — ما تنتهي بدون تحذير مرة ثانية." }, icon: FileCheck },
      { title: { en: "Safety Inspections", ar: "فحوصات السلامة" }, description: { en: "Digital checklists from the driver's phone. Photo evidence. No paperwork.", ar: "قوائم فحص رقمية من جوال السائق. صور كأدلة. بدون ورق." }, icon: ShieldAlert },
      { title: { en: "Fleet Dashboard", ar: "لوحة تحكم الأسطول" }, description: { en: "One glance tells you everything — location, status, utilization, alerts.", ar: "نظرة وحدة تقولك كل شيء — الموقع، الحالة، الاستخدام، التنبيهات." }, icon: LayoutDashboard },
      { title: { en: "Bilingual Support", ar: "دعم ثنائي اللغة" }, description: { en: "Full Arabic and English interface. Everyone on your team can use it.", ar: "واجهة كاملة بالعربي والإنجليزي. كل فريقك يقدر يستخدمها." }, icon: Globe },
    ],
    workflowDesc: { en: "Maintenance schedules itself. Fuel anomalies get flagged. Document renewals get triggered. Inspections get assigned. Your fleet runs like clockwork without constant supervision.", ar: "الصيانة تجدول نفسها. حالات الوقود الشاذة تتعلّم. تجديد المستندات يتفعّل. الفحوصات تتعيّن. أسطولك يمشي كالساعة بدون مراقبة مستمرة." },
    rbacDesc: { en: "Fleet managers see everything. Drivers see their vehicles and tasks. Mechanics see maintenance orders. Everyone has exactly the access they need.", ar: "مديرو الأسطول يشوفون كل شيء. السائقون يشوفون مركباتهم ومهامهم. الميكانيكيون يشوفون أوامر الصيانة. كل واحد عنده الوصول اللي يحتاجه بالضبط." },
    analyticsDesc: { en: "Track fuel trends, vehicle costs, driver behavior, and fleet utilization. Make decisions based on facts, not feelings.", ar: "تابع اتجاهات الوقود وتكاليف المركبات وسلوك السائقين واستخدام الأسطول. اتخذ قرارات مبنية على حقائق، مو أحاسيس." },
    securityDesc: { en: "GPS data encrypted. Communications secured. Fully compliant with Saudi transport regulations.", ar: "بيانات GPS مشفرة. الاتصالات مؤمّنة. متوافق بالكامل مع أنظمة النقل السعودية." },
  },

  // ═══════════════════════════════════════════
  // 6. ANALYTICS — الإحساس: الوضوح
  // ═══════════════════════════════════════════
  {
    slug: "analytics",
    name: { en: "Nzom Analytics", ar: "نزوم التحليلات" },
    tagline: {
      en: "See the full picture. Decide with confidence.",
      ar: "شوف الصورة كاملة. وقرّر وأنت واثق."
    },
    description: {
      en: "Stop guessing. Nzom Analytics turns your scattered data into clear, visual insights. Connect everything, see everything, and finally make decisions you're confident about.",
      ar: "كفاية تخمين. نزوم التحليلات يحوّل بياناتك المبعثرة لرؤى واضحة ومرئية. اربط كل شيء، شوف كل شيء، وأخيراً خذ قرارات وأنت مرتاح لها."
    },
    emotionalHook: {
      en: "Clarity changes everything.",
      ar: "لما تشوف الصورة واضحة، كل شيء يتغيّر."
    },
    imagineDay: {
      en: "Imagine walking into a meeting with a single dashboard that tells the whole story. No more 'let me check and get back to you.' No more conflicting spreadsheets. Just clear data, clear insights, and clear decisions. Your board is impressed. Your team is aligned. You're confident.",
      ar: "تخيّل تدخل اجتماع ومعك لوحة تحكم وحدة تحكي القصة كاملة. بدون 'خلّني أتأكد وأرد عليك.' بدون جداول بيانات متعارضة. بس بيانات واضحة، رؤى واضحة، وقرارات واضحة. مجلس الإدارة منبهر. فريقك متوافق. أنت واثق."
    },
    icon: PieChart,
    color: "from-emerald-500 to-teal-600",
    problem: {
      en: "Your data is everywhere — spreadsheets, systems, emails. Creating a report takes days. By the time you get the numbers, they're already old. You make decisions based on gut feeling because the real data is buried.",
      ar: "بياناتك في كل مكان — جداول بيانات، أنظمة، إيميلات. إنشاء تقرير ياخذ أيام. لما توصلك الأرقام، تكون قديمة. تاخذ قرارات على الحدس لأن البيانات الحقيقية مدفونة."
    },
    solution: {
      en: "Nzom Analytics connects all your data sources and builds beautiful, interactive dashboards. Real-time numbers, clear trends, shared insights. You see, you understand, you act.",
      ar: "نزوم التحليلات يربط كل مصادر بياناتك ويبني لوحات تحكم جميلة وتفاعلية. أرقام لحظية، اتجاهات واضحة، رؤى مشتركة. تشوف، تفهم، تتصرف."
    },
    features: [
      { title: { en: "Interactive Dashboards", ar: "لوحات تحكم تفاعلية" }, description: { en: "Drag, drop, and build dashboards that tell your story. No coding needed.", ar: "اسحب وأفلت وابني لوحات تحكم تحكي قصتك. بدون برمجة." }, icon: LayoutDashboard },
      { title: { en: "Data Sources", ar: "مصادر البيانات" }, description: { en: "Connect everything — databases, spreadsheets, APIs. One source of truth.", ar: "اربط كل شيء — قواعد بيانات، جداول، واجهات برمجة. مصدر حقيقة واحد." }, icon: Database },
      { title: { en: "Smart Filters", ar: "فلاتر ذكية" }, description: { en: "Drill down into any metric. Ask questions and get instant visual answers.", ar: "تعمّق في أي مقياس. اسأل أسئلة واحصل إجابات مرئية فورية." }, icon: Filter },
      { title: { en: "Team Collaboration", ar: "التعاون الجماعي" }, description: { en: "Share dashboards with your team. Comment on insights. Align on decisions.", ar: "شارك لوحات التحكم مع فريقك. علّق على الرؤى. اتفقوا على القرارات." }, icon: Share2 },
      { title: { en: "Data Governance", ar: "حوكمة البيانات" }, description: { en: "Clean data, trusted data. Quality rules and access policies built in.", ar: "بيانات نظيفة، بيانات موثوقة. قواعد جودة وسياسات وصول مدمجة." }, icon: Lock },
      { title: { en: "Public Dashboards", ar: "لوحات تحكم عامة" }, description: { en: "Share insights publicly or embed them in your website. Impress stakeholders.", ar: "شارك الرؤى بشكل عام أو ضمّنها في موقعك. أبهر أصحاب المصلحة." }, icon: Globe },
    ],
    workflowDesc: { en: "Data flows in automatically. Dashboards refresh themselves. Alerts trigger when KPIs cross thresholds. Reports deliver themselves to the right people. You just read and decide.", ar: "البيانات تتدفق تلقائياً. لوحات التحكم تحدّث نفسها. التنبيهات تشتغل لما مؤشرات الأداء تتجاوز الحدود. التقارير توصل نفسها للأشخاص الصحيحين. أنت بس اقرأ وقرّر." },
    rbacDesc: { en: "Admins control the data. Analysts build the dashboards. Viewers see what matters to them. Sensitive data stays protected at every level.", ar: "المدراء يتحكمون بالبيانات. المحللون يبنون لوحات التحكم. المشاهدون يشوفون اللي يهمهم. البيانات الحساسة محمية في كل مستوى." },
    analyticsDesc: { en: "Even your analytics has analytics. Track dashboard usage, query speed, data freshness — optimize the platform itself.", ar: "حتى التحليلات عندها تحليلات. تابع استخدام لوحات التحكم وسرعة الاستعلامات وحداثة البيانات — حسّن المنصة نفسها." },
    securityDesc: { en: "Row-level security, data masking, encrypted connections. Your data is visible only to those who should see it.", ar: "أمان على مستوى الصف، إخفاء البيانات، اتصالات مشفرة. بياناتك تنشاف بس من اللي لازم يشوفها." },
  },

  // ═══════════════════════════════════════════
  // 7. BOOKING — الإحساس: السلاسة
  // ═══════════════════════════════════════════
  {
    slug: "booking",
    name: { en: "Nzom Booking", ar: "نزوم الحجوزات" },
    tagline: {
      en: "Clients book easily. You grow effortlessly.",
      ar: "عملاءك يحجزون بسهولة. وأنت تنمو بدون ما تحس."
    },
    description: {
      en: "No more WhatsApp chaos. No more double bookings. Nzom Booking lets your clients book, pay, and subscribe — smoothly, professionally, automatically. You focus on service, we handle the logistics.",
      ar: "خلاص من فوضى الواتساب. خلاص من الحجوزات المزدوجة. نزوم الحجوزات يخلّي عملاءك يحجزون ويدفعون ويشتركون — بسلاسة واحترافية وتلقائياً. أنت ركّز على خدمتك، والباقي علينا."
    },
    emotionalHook: {
      en: "Smooth bookings, happy clients.",
      ar: "حجوزات بدون صداع، عملاء راضين."
    },
    imagineDay: {
      en: "Imagine your clients booking their appointments from their phones at 2 AM. Confirmations sent automatically. Reminders before the session. Invoices generated instantly. Your front desk isn't glued to the phone anymore. Your branches run independently. Your revenue grows while you sleep.",
      ar: "تخيّل عملاءك يحجزون مواعيدهم من جوالاتهم الساعة 2 الصبح. التأكيدات ترسل تلقائياً. التذكيرات قبل الجلسة. الفواتير تتولّد فوراً. الاستقبال ما عاد ملتصق بالتلفون. فروعك تمشي باستقلالية. إيراداتك تنمو وأنت نايم."
    },
    icon: CalendarDays,
    color: "from-pink-500 to-rose-600",
    problem: {
      en: "Appointments via WhatsApp. Subscriptions in spreadsheets. Invoices by hand. Your receptionist is overwhelmed. Double bookings happen weekly. You have no idea which branch is performing better. Sound familiar?",
      ar: "المواعيد عبر الواتساب. الاشتراكات في جداول بيانات. الفواتير باليد. موظف الاستقبال مضغوط. حجوزات مزدوجة تصير كل أسبوع. ما تعرف أي فرع أفضل أداءً. مألوف؟"
    },
    solution: {
      en: "Nzom Booking digitalizes everything — scheduling, packages, reminders, invoicing, multi-branch management. Your clients get a smooth experience, and you get clear business visibility.",
      ar: "نزوم الحجوزات يرقمن كل شيء — الجدولة، الباقات، التذكيرات، الفوترة، إدارة الفروع. عملاءك يحصلون تجربة سلسة، وأنت تحصل رؤية واضحة لعملك."
    },
    features: [
      { title: { en: "Appointment Management", ar: "إدارة المواعيد" }, description: { en: "Smart calendar that prevents double bookings. Clients book 24/7.", ar: "تقويم ذكي يمنع الحجوزات المزدوجة. العملاء يحجزون ٢٤/٧." }, icon: CalendarDays },
      { title: { en: "Subscriptions & Packages", ar: "الاشتراكات والباقات" }, description: { en: "Sell packages, track sessions, auto-renew. Revenue on autopilot.", ar: "بيع باقات، تابع الجلسات، تجدد تلقائي. إيرادات على الطيار الآلي." }, icon: CreditCard },
      { title: { en: "ZATCA E-Invoicing", ar: "الفوترة الإلكترونية ZATCA" }, description: { en: "Compliant invoices generated automatically. QR codes, tax — all handled.", ar: "فواتير متوافقة تتولّد تلقائياً. رموز QR، ضريبة — كلها مغطّاة." }, icon: Receipt },
      { title: { en: "Customer Management", ar: "إدارة العملاء" }, description: { en: "Know your clients. Their history, preferences, and visit patterns.", ar: "اعرف عملاءك. تاريخهم، تفضيلاتهم، وأنماط زياراتهم." }, icon: Users },
      { title: { en: "Multi-Branch", ar: "متعدد الفروع" }, description: { en: "Multiple locations, one system. Compare performance across branches.", ar: "مواقع متعددة، نظام واحد. قارن الأداء بين الفروع." }, icon: Building2 },
      { title: { en: "Financial Reports", ar: "التقارير المالية" }, description: { en: "Revenue, payments, trends — all clear, all real-time.", ar: "الإيرادات، المدفوعات، الاتجاهات — كلها واضحة، كلها لحظية." }, icon: BarChart3 },
    ],
    workflowDesc: { en: "Bookings confirm themselves. Reminders send themselves. Subscriptions deduct automatically. Invoices generate on payment. Renewals notify before expiry. It's a business that runs itself.", ar: "الحجوزات تتأكد لحالها. التذكيرات ترسل نفسها. الاشتراكات تخصم تلقائياً. الفواتير تتولّد مع الدفع. التجديدات تنبّه قبل الانتهاء. عمل يمشي لحاله." },
    rbacDesc: { en: "Owners see all branches. Branch managers control their location. Staff see their schedules. Clients see their bookings. Simple, clean, no confusion.", ar: "أصحاب الأعمال يشوفون كل الفروع. مديرو الفروع يتحكمون بموقعهم. الموظفون يشوفون جداولهم. العملاء يشوفون حجوزاتهم. بسيط، نظيف، بدون لخبطة." },
    analyticsDesc: { en: "Which services make the most money? When are your peak hours? Which staff is booked the most? Answers to grow your business.", ar: "أي الخدمات تجيب أكثر فلوس؟ متى ساعات الذروة؟ أي موظف محجوز أكثر؟ إجابات تنمّي عملك." },
    securityDesc: { en: "Payment data encrypted. Client information protected. Fully compliant with Saudi commercial regulations.", ar: "بيانات الدفع مشفرة. معلومات العملاء محمية. متوافق بالكامل مع الأنظمة التجارية السعودية." },
  },

  // ═══════════════════════════════════════════
  // 8. ESIGN — الإحساس: السرعة
  // ═══════════════════════════════════════════
  {
    slug: "esign",
    name: { en: "Nzom Sign", ar: "نزوم التوقيع" },
    tagline: {
      en: "Sign it. Done. Move on.",
      ar: "وقّع. خلاص. وامشِ لشغلك."
    },
    description: {
      en: "Stop printing, scanning, and waiting. Nzom Sign lets you send, sign, and seal documents in minutes — not days. Legally binding, instantly tracked, always available.",
      ar: "كفاية طباعة ومسح وانتظار. نزوم التوقيع يخلّيك ترسل وتوقّع وتختم مستنداتك في دقائق — مو أيام. ملزم قانونياً، متابَع لحظياً، ومتوفر في أي وقت."
    },
    emotionalHook: {
      en: "Speed that closes deals.",
      ar: "سرعة تقفل لك الصفقات."
    },
    imagineDay: {
      en: "Imagine sending a contract and getting it signed before your coffee gets cold. No printing. No scanning. No 'I'll sign it when I'm in the office.' Your client signs from their phone, you get notified instantly, and the deal is done. Days compressed into minutes.",
      ar: "تخيّل ترسل عقد ويترجع موقّع قبل لا قهوتك تبرد. بدون طباعة. بدون مسح. بدون 'بوقّعه لما أوصل المكتب.' عميلك يوقّع من جواله، تجيك الإشعار فوراً، والصفقة تمّت. أيام مضغوطة في دقائق."
    },
    icon: PenTool,
    color: "from-indigo-500 to-blue-600",
    problem: {
      en: "Documents sit on desks for days waiting for signatures. You print, sign, scan, email, wait, follow up, print again. Contracts get delayed. Deals get cold. And you can never find who signed what when.",
      ar: "المستندات تقعد على المكاتب أيام تنتظر توقيعات. تطبع، توقّع، تمسح، ترسل إيميل، تنتظر، تتابع، تطبع مرة ثانية. العقود تتأخر. الصفقات تبرد. وما تقدر تلاقي مين وقّع إيش متى."
    },
    solution: {
      en: "Nzom Sign makes signatures instant. Send a document, recipients sign from any device, you track everything in real time. Legally compliant, fully audited, lightning fast.",
      ar: "نزوم التوقيع يخلّي التوقيعات فورية. ارسل مستند، المستلمون يوقّعون من أي جهاز، تتابع كل شيء بالوقت الفعلي. متوافق قانونياً، مدقّق بالكامل، سريع كالبرق."
    },
    features: [
      { title: { en: "Envelope Workflows", ar: "سير عمل المظاريف" }, description: { en: "Design who signs first, second, third. Parallel or sequential — your rules.", ar: "صمّم مين يوقّع أول، ثاني، ثالث. متوازي أو متسلسل — قواعدك." }, icon: Workflow },
      { title: { en: "Bulk Send", ar: "الإرسال الجماعي" }, description: { en: "Send to hundreds at once. Same document, different signers, one click.", ar: "ارسل لمئات بمرة. نفس المستند، موقّعين مختلفين، ضغطة وحدة." }, icon: Megaphone },
      { title: { en: "Template Management", ar: "إدارة القوالب" }, description: { en: "Create once, reuse forever. Templates with pre-placed fields save hours.", ar: "أنشئ مرة، استخدم للأبد. القوالب مع حقول جاهزة توفّر ساعات." }, icon: FileText },
      { title: { en: "Compliance & Retention", ar: "الامتثال والاحتفاظ" }, description: { en: "Legally binding everywhere. Documents stored securely for as long as you need.", ar: "ملزم قانونياً في كل مكان. المستندات مخزّنة بأمان طول ما تحتاج." }, icon: ClipboardCheck },
      { title: { en: "Correspondence Management", ar: "إدارة المراسلات" }, description: { en: "Track every letter, memo, and document that flows through your organization.", ar: "تابع كل خطاب ومذكرة ومستند يمر عبر منظمتك." }, icon: Briefcase },
      { title: { en: "Audit Trail", ar: "مسار التدقيق" }, description: { en: "Who signed what, when, from where. Complete proof, zero disputes.", ar: "مين وقّع إيش، متى، من وين. إثبات كامل، صفر نزاعات." }, icon: Lock },
    ],
    workflowDesc: { en: "Documents flow like water. Send → Sign → Done. Auto-reminders for pending signatures. Delegation when someone is out. Expiry deadlines that keep things moving. You never chase a signature again.", ar: "المستندات تمشي مثل الماء. ارسل ← وقّع ← خلاص. تذكيرات تلقائية للتوقيعات المعلّقة. تفويض لما أحد غائب. مواعيد انتهاء تخلّي الأمور تمشي. ما تلاحق توقيع مرة ثانية." },
    rbacDesc: { en: "Admins control templates and policies. Departments manage their documents. Signers see only what needs their signature. Clean, simple, efficient.", ar: "المدراء يتحكمون بالقوالب والسياسات. الأقسام تدير مستنداتها. الموقّعون يشوفون بس اللي يحتاج توقيعهم. نظيف، بسيط، فعّال." },
    analyticsDesc: { en: "How fast are documents getting signed? Where are the bottlenecks? Which templates are used most? Data to make your document flow even faster.", ar: "كم بسرعة المستندات تتوقّع؟ وين الاختناقات؟ أي القوالب تُستخدم أكثر؟ بيانات تخلّي تدفق مستنداتك أسرع." },
    securityDesc: { en: "Bank-grade encryption. Digital certificates. Tamper-proof seals. Fully compliant with Saudi e-transaction regulations. Your signatures are as secure as your vault.", ar: "تشفير بنكي. شهادات رقمية. أختام مقاومة للتلاعب. متوافق بالكامل مع أنظمة المعاملات الإلكترونية السعودية. توقيعاتك آمنة مثل خزنتك." },
  },

  // ═══════════════════════════════════════════
  // 9. TICKETS — الإحساس: الهدوء
  // ═══════════════════════════════════════════
  {
    slug: "tickets",
    name: { en: "Nzom Tickets", ar: "نزوم التذاكر" },
    tagline: {
      en: "Problems solved. Calmly.",
      ar: "المشاكل تنحل. بكل هدوء."
    },
    description: {
      en: "IT issues don't have to mean chaos. Nzom Tickets brings calm to your helpdesk — every ticket tracked, every change managed, every problem resolved methodically. Your IT team works with purpose, not panic.",
      ar: "مشاكل التقنية ما لازم تعني فوضى وضغط. نزوم التذاكر يجلب الهدوء لفريقك التقني — كل تذكرة متابَعة، كل تغيير مُدار، وكل مشكلة تنحل بمنهجية واضحة. فريقك يشتغل بتركيز، مو بذعر."
    },
    emotionalHook: {
      en: "Calm in the storm.",
      ar: "هدوء وسط أي عاصفة تقنية."
    },
    imagineDay: {
      en: "Imagine a Monday morning where your helpdesk dashboard is green. Tickets are auto-assigned to the right people. AI suggests solutions before agents even read the full description. Changes go through proper approvals. Your IT team sips coffee and resolves issues methodically. No fire drills.",
      ar: "تخيّل صباح يوم الأحد ولوحة مكتب المساعدة خضراء. التذاكر تتعيّن تلقائياً للأشخاص الصحيحين. الذكاء الاصطناعي يقترح حلول قبل ما الوكلاء يقرون الوصف كامل. التغييرات تمر من الموافقات الصحيحة. فريقك التقني يشرب قهوته ويحل المشاكل بمنهجية. بدون حالات طوارئ."
    },
    icon: Ticket,
    color: "from-orange-500 to-red-600",
    problem: {
      en: "Tickets come from everywhere — email, calls, walk-ups. Nobody knows who's working on what. Changes happen without approval. Problems recur because nobody tracks root causes. Your IT team is always firefighting.",
      ar: "التذاكر تجي من كل مكان — إيميل، اتصالات، زيارات. ما أحد يعرف مين يشتغل على إيش. التغييرات تصير بدون موافقة. المشاكل تتكرر لأن ما أحد يتابع الأسباب الجذرية. فريقك التقني دايم يطفي حرائق."
    },
    solution: {
      en: "Nzom Tickets unifies everything — incidents, changes, problems, assets, vendors — into one calm, organized system. AI routes tickets, suggests solutions, and your team resolves with confidence.",
      ar: "نزوم التذاكر يوحّد كل شيء — الحوادث، التغييرات، المشاكل، الأصول، الموردين — في نظام واحد هادي ومنظم. الذكاء الاصطناعي يوجّه التذاكر، يقترح حلول، وفريقك يحل بثقة."
    },
    features: [
      { title: { en: "Ticket Management", ar: "إدارة التذاكر" }, description: { en: "Every issue has a home. Assign, track, resolve — with SLA guarantees.", ar: "كل مشكلة لها بيت. عيّن، تابع، حل — مع ضمانات SLA." }, icon: Headphones },
      { title: { en: "Change & Release", ar: "التغييرات والإصدارات" }, description: { en: "No more cowboy changes. Proper approvals, calendar views, and impact tracking.", ar: "بدون تغييرات عشوائية. موافقات صحيحة، عرض تقويم، وتتبع التأثير." }, icon: GitBranch },
      { title: { en: "CMDB", ar: "قاعدة بيانات التكوين" }, description: { en: "Know your assets and how they connect. When something breaks, know what's affected.", ar: "اعرف أصولك وكيف تترابط. لما شيء يتعطل، اعرف إيش يتأثر." }, icon: Server },
      { title: { en: "Problem Management", ar: "إدارة المشاكل" }, description: { en: "Stop fixing symptoms. Find root causes. Prevent problems from coming back.", ar: "وقّف ترقيع الأعراض. لاقي الأسباب الجذرية. امنع المشاكل من الرجوع." }, icon: Target },
      { title: { en: "Vendor & Contracts", ar: "الموردون والعقود" }, description: { en: "Track vendor performance and contracts. Know who delivers and who doesn't.", ar: "تابع أداء الموردين والعقود. اعرف مين يسلّم ومين لا." }, icon: Handshake },
      { title: { en: "AI Automation Hub", ar: "محور أتمتة الذكاء الاصطناعي" }, description: { en: "AI reads tickets, categorizes them, and suggests solutions. Your agents start ahead.", ar: "الذكاء الاصطناعي يقرأ التذاكر، يصنّفها، ويقترح حلول. وكلاءك يبدؤون متقدمين." }, icon: Brain },
    ],
    workflowDesc: { en: "Tickets route themselves to the right team. Escalations happen automatically. Changes go through approval gates. Problems get investigated systematically. Your IT department runs like a well-oiled machine.", ar: "التذاكر توجّه نفسها للفريق الصحيح. التصعيدات تصير تلقائياً. التغييرات تمر من بوابات الموافقة. المشاكل تتحقق منها بمنهجية. قسم تقنية المعلومات يمشي كالآلة المزيّتة." },
    rbacDesc: { en: "Admins configure. Agents resolve. Managers approve changes. End-users submit requests from a simple portal. Everyone knows their role.", ar: "المدراء يكوّنون. الوكلاء يحلون. المديرون يوافقون على التغييرات. المستخدمون يقدمون طلبات من بوابة بسيطة. كل واحد يعرف دوره." },
    analyticsDesc: { en: "Are SLAs being met? How fast do you respond? Which problems keep coming back? Data that makes your IT team better every week.", ar: "هل الـ SLA متحقق؟ كم بسرعة ترد؟ أي المشاكل ترجع؟ بيانات تخلّي فريقك التقني أفضل كل أسبوع." },
    securityDesc: { en: "Access controls, encrypted communications, audit trails, and ITIL compliance. Your IT governance meets the highest standards.", ar: "ضوابط وصول، اتصالات مشفرة، مسارات تدقيق، وامتثال ITIL. حوكمة تقنية المعلومات تلبي أعلى المعايير." },
  },

  // ═══════════════════════════════════════════
  // 10. BUDGET — الإحساس: الأمان المالي
  // ═══════════════════════════════════════════
  {
    slug: "budget",
    name: { en: "Nzom Budget", ar: "نزوم الميزانيات" },
    tagline: {
      en: "Your money, under control.",
      ar: "كل ريال، تحت عينك."
    },
    description: {
      en: "No more budget surprises. No more unauthorized purchases. Nzom Budget gives you complete financial visibility — every riyal tracked, every purchase approved, every budget on target. Sleep well knowing your finances are in order.",
      ar: "خلاص من المفاجآت المالية. خلاص من المشتريات بدون إذن. نزوم الميزانيات يعطيك رؤية مالية شاملة — كل ريال متابَع، كل عملية شراء معتمدة، وكل ميزانية ماشية بالمسار. نم مرتاح وأنت عارف إن أموالك في أمان."
    },
    emotionalHook: {
      en: "Financial peace of mind.",
      ar: "راحة بال مالية حقيقية."
    },
    imagineDay: {
      en: "Imagine opening your budget dashboard and seeing every department's spending in real time. A purchase request comes in — it routes through approvals automatically, checks the budget, and generates a PO. No surprises at month-end. No awkward conversations about overspending. Just clean, controlled finances.",
      ar: "تخيّل تفتح لوحة الميزانيات وتشوف إنفاق كل قسم بالوقت الفعلي. طلب شراء يجي — يمر من الموافقات تلقائياً، يتأكد من الميزانية، وينشئ أمر شراء. بدون مفاجآت نهاية الشهر. بدون محادثات محرجة عن تجاوز الإنفاق. بس ماليّة نظيفة ومتحكّم فيها."
    },
    icon: Wallet,
    color: "from-lime-500 to-green-600",
    problem: {
      en: "Budgets in spreadsheets. Purchase requests via email. No one knows how much is left in the budget until it's too late. Overspending happens silently. Month-end becomes a nightmare of reconciliation.",
      ar: "الميزانيات في جداول بيانات. طلبات الشراء عبر الإيميل. ما أحد يعرف كم باقي في الميزانية إلا لما يفوت الأوان. تجاوز الإنفاق يصير بصمت. نهاية الشهر تصير كابوس مطابقة."
    },
    solution: {
      en: "Nzom Budget centralizes everything — planning, purchasing, tracking, reporting. Real-time visibility into every riyal. Approvals that prevent overspending before it happens. Financial control that gives you confidence.",
      ar: "نزوم الميزانيات يجمع كل شيء — التخطيط، الشراء، التتبع، التقارير. رؤية فورية لكل ريال. موافقات تمنع تجاوز الإنفاق قبل ما يصير. تحكّم مالي يعطيك ثقة."
    },
    features: [
      { title: { en: "Budget Planning", ar: "تخطيط الميزانية" }, description: { en: "Plan by period, department, project. Know exactly how much is allocated and spent.", ar: "خطّط حسب الفترة والقسم والمشروع. اعرف بالضبط كم مخصّص وكم مصروف." }, icon: Target },
      { title: { en: "Purchase Requests", ar: "طلبات الشراء" }, description: { en: "Submit, review, approve — with automatic budget checks before approval.", ar: "قدّم، راجع، وافق — مع فحص ميزانية تلقائي قبل الموافقة." }, icon: Package },
      { title: { en: "Purchase Orders", ar: "أوامر الشراء" }, description: { en: "From approved request to PO in one click. Track delivery and payments.", ar: "من طلب معتمد إلى أمر شراء بضغطة. تابع التسليم والمدفوعات." }, icon: Receipt },
      { title: { en: "Vendor Management", ar: "إدارة الموردين" }, description: { en: "Rate vendors, track history, choose the best. Data-driven procurement.", ar: "قيّم الموردين، تابع التاريخ، اختر الأفضل. مشتريات مبنية على بيانات." }, icon: Store },
      { title: { en: "Cost Centers", ar: "مراكز التكلفة" }, description: { en: "Know where every riyal goes. Track expenses by center, department, project.", ar: "اعرف وين يروح كل ريال. تابع المصروفات حسب المركز والقسم والمشروع." }, icon: DollarSign },
      { title: { en: "Audit Logs", ar: "سجلات التدقيق" }, description: { en: "Every approval, every change, every transaction — fully documented.", ar: "كل موافقة، كل تغيير، كل معاملة — موثّقة بالكامل." }, icon: ClipboardCheck },
    ],
    workflowDesc: { en: "Purchase requests check budgets automatically. Approvals route to the right managers. POs generate from approved requests. Budgets update in real time. No manual work, no errors, no surprises.", ar: "طلبات الشراء تفحص الميزانيات تلقائياً. الموافقات تروح للمديرين الصحيحين. أوامر الشراء تتولّد من الطلبات المعتمدة. الميزانيات تتحدث بالوقت الفعلي. بدون عمل يدوي، بدون أخطاء، بدون مفاجآت." },
    rbacDesc: { en: "Finance controls the big picture. Department heads manage their budgets. Requesters submit and track. Approvers approve from their phones. Everyone plays their part.", ar: "المالية تتحكم بالصورة الكبيرة. رؤساء الأقسام يديرون ميزانياتهم. مقدّمو الطلبات يقدمون ويتابعون. المعتمدون يوافقون من جوالاتهم. كل واحد يلعب دوره." },
    analyticsDesc: { en: "Budget vs actual — in real time. Spending trends, vendor costs, department efficiency. The numbers that keep your finances healthy.", ar: "الميزانية مقابل الفعلي — بالوقت الفعلي. اتجاهات الإنفاق، تكاليف الموردين، كفاءة الأقسام. الأرقام اللي تخلّي مالياتك صحية." },
    securityDesc: { en: "Financial data deserves the highest protection. Encryption, access controls, audit trails, and full Saudi regulatory compliance.", ar: "البيانات المالية تستحق أعلى حماية. تشفير، ضوابط وصول، مسارات تدقيق، وامتثال كامل للأنظمة السعودية." },
  },

  // ═══════════════════════════════════════════
  // 11. FITAI — الإحساس: الدقة
  // ═══════════════════════════════════════════
  {
    slug: "fitai",
    name: { en: "Nzom FitAI", ar: "نزوم فت" },
    tagline: {
      en: "Perfect fit. First time.",
      ar: "المقاس الصح. من أول مرة."
    },
    description: {
      en: "No more returns because of wrong sizes. Nzom FitAI uses AI to predict the perfect fit for every customer — reducing returns, increasing satisfaction, and making online fashion finally work.",
      ar: "خلاص من المرتجعات بسبب مقاسات غلط. نزوم فت يستخدم الذكاء الاصطناعي عشان يتوقع المقاس المثالي لكل عميل — يقلّل المرتجعات، يرفع الرضا، ويخلّي الموضة أونلاين أخيراً تشتغل صح."
    },
    emotionalHook: {
      en: "Precision that delights.",
      ar: "دقة تصنع الفرق."
    },
    imagineDay: {
      en: "Imagine a customer browsing your online store. Instead of guessing their size, AI tells them exactly which size will fit — based on their body, the fabric, and the brand's cut. They order confidently, it fits perfectly, they come back for more. Returns drop. Reviews improve. Your brand becomes known for getting it right.",
      ar: "تخيّل عميل يتصفح متجرك أونلاين. بدل ما يخمّن مقاسه، الذكاء الاصطناعي يقوله بالضبط أي مقاس يناسبه — بناءً على جسمه والقماش وقصّة الماركة. يطلب بثقة، يلبسه بشكل مثالي، يرجع يشتري مرة ثانية. المرتجعات تنزل. التقييمات تتحسن. علامتك التجارية تشتهر إنها تجيبها صح."
    },
    icon: Shirt,
    color: "from-fuchsia-500 to-pink-600",
    problem: {
      en: "Online fashion has a 30%+ return rate — mostly because of sizing. Customers guess, order multiple sizes, return what doesn't fit. It costs you money, damages your brand, and frustrates your customers.",
      ar: "الموضة أونلاين فيها نسبة مرتجعات أكثر من 30% — أغلبها بسبب المقاسات. العملاء يخمّنون، يطلبون مقاسات متعددة، ويرجّعون اللي ما يناسب. يكلفك فلوس، يضر علامتك التجارية، ويحبط عملاءك."
    },
    solution: {
      en: "Nzom FitAI uses computer vision and machine learning to recommend the exact right size. Customers order once, it fits, they're happy. Returns drop dramatically. Your bottom line improves.",
      ar: "نزوم فت يستخدم الرؤية الحاسوبية والتعلم الآلي يوصي بالمقاس الصحيح بالضبط. العملاء يطلبون مرة، يناسبهم، يكونون سعداء. المرتجعات تنزل بشكل كبير. أرباحك تتحسن."
    },
    features: [
      { title: { en: "AI Size Prediction", ar: "توقع المقاس بالذكاء الاصطناعي" }, description: { en: "Accurate size recommendations based on body measurements and garment data.", ar: "توصيات مقاس دقيقة بناءً على قياسات الجسم وبيانات الملابس." }, icon: Brain },
      { title: { en: "Virtual Try-On", ar: "التجربة الافتراضية" }, description: { en: "See how clothes look on you before buying. Confidence before checkout.", ar: "شوف كيف الملابس تبان عليك قبل الشراء. ثقة قبل الدفع." }, icon: Eye },
      { title: { en: "Body Scanning", ar: "مسح الجسم" }, description: { en: "Quick, private body measurements using just a smartphone camera.", ar: "قياسات جسم سريعة وخاصة باستخدام كاميرا الجوال فقط." }, icon: Sparkles },
      { title: { en: "Brand Calibration", ar: "معايرة العلامة التجارية" }, description: { en: "Every brand fits differently. AI learns each brand's sizing patterns.", ar: "كل ماركة تلبس بشكل مختلف. الذكاء الاصطناعي يتعلم أنماط مقاسات كل ماركة." }, icon: Shirt },
      { title: { en: "Analytics Dashboard", ar: "لوحة التحليلات" }, description: { en: "Track return rates, size distribution, and recommendation accuracy.", ar: "تابع نسب المرتجعات وتوزيع المقاسات ودقة التوصيات." }, icon: BarChart3 },
      { title: { en: "E-commerce Integration", ar: "تكامل التجارة الإلكترونية" }, description: { en: "Plugs into Shopify, WooCommerce, or any custom store. Simple setup.", ar: "يتكامل مع شوبيفاي وووكومرس أو أي متجر مخصص. إعداد بسيط." }, icon: Store },
    ],
    workflowDesc: { en: "Customer visits your store → AI recommends size → Customer orders confidently → It fits → Customer is happy → They come back. A simple loop that transforms your business.", ar: "العميل يزور متجرك ← الذكاء الاصطناعي يوصي بالمقاس ← العميل يطلب بثقة ← يناسبه ← العميل سعيد ← يرجع. دورة بسيطة تحوّل عملك." },
    rbacDesc: { en: "Store admins manage products and calibration. Marketing sees conversion data. Customers get personalized recommendations. Your data stays your data.", ar: "مدراء المتجر يديرون المنتجات والمعايرة. التسويق يشوف بيانات التحويل. العملاء يحصلون توصيات مخصصة. بياناتك تبقى بياناتك." },
    analyticsDesc: { en: "Watch your return rate drop in real time. Track which sizes sell most, which products need recalibration, and how AI recommendations affect revenue.", ar: "شاهد نسبة المرتجعات تنزل بالوقت الفعلي. تابع أي المقاسات تنباع أكثر، أي المنتجات تحتاج إعادة معايرة، وكيف توصيات الذكاء الاصطناعي تأثّر على الإيرادات." },
    securityDesc: { en: "Body data is deeply personal. We encrypt everything, never share data, and comply with the strictest privacy standards.", ar: "بيانات الجسم شخصية جداً. نشفّر كل شيء، ما نشارك بيانات أبداً، ونلتزم بأعلى معايير الخصوصية." },
  },
];
