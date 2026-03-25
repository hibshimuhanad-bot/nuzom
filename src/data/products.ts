import {
  Shield, Scale, CheckSquare, Users,
  LayoutDashboard, Lock, Workflow, ClipboardCheck, BarChart3, Globe,
  CalendarDays, Brain,
  FileText, AlertTriangle, Flame, Cog, BookOpen, FileCheck,
  Briefcase, Calendar, Gavel,
  Target, Layers, KanbanSquare, Clock,
  CreditCard, Building2,
  Receipt
} from "lucide-react";

export interface Product {
  slug: string;
  available?: boolean;
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
  screenshots?: string[];
}

export const products: Product[] = [
  // ═══════════════════════════════════════════
  // 1. Zerisks — الإحساس: راحة البال
  // ═══════════════════════════════════════════
  {
    slug: "zerisks",
    available: true,
    name: { en: "Zerisks HSSE", ar: "زي ريسك" },
    tagline: {
      en: "Sleep well. Your sites are safe.",
      ar: "نَم وعينك مرتاحة.. مواقعك في أمان."
    },
    description: {
      en: "Imagine ending your day knowing every permit is tracked, every risk is logged, and every worker goes home safe. That's Zerisks HSSE — peace of mind, not just a system.",
      ar: "تخيّل تنهي يومك وأنت متطمّن إن كل تصريح متابَع، وكل خطر مرصود، وكل عامل يرجع لأهله سالم. هذا زي ريسك — مو مجرد نظام، هذا راحة بال حقيقية."
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
      en: "With Zerisks HSSE, you open one screen and see everything — permits, incidents, risks, inspections, training. Everything is tracked, everyone is accountable, and you finally breathe.",
      ar: "مع زي ريسك، تفتح شاشة وحدة وتشوف كل شيء — التصاريح، الحوادث، المخاطر، الفحوصات، التدريب. كل شيء متابَع، كل شخص مسؤول، وأخيراً ترتاح."
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
    slug: "aldalyel",
    available: true,
    name: { en: "Aldalyel -Legal ", ar: "الدليل" },
    tagline: {
      en: "Nothing slips through. Ever.",
      ar: "ولا شيء يفلت منك. أبداً."
    },
    description: {
      en: "Every case tracked. Every deadline met. Every document at your fingertips. Aldalyel -Legal gives you total control over your legal operations — so you focus on winning, not searching.",
      ar: "كل قضية متابَعة. كل موعد ملتزم فيه. كل مستند في متناول يدك. الدليل يمنحك سيطرة مطلقة على عملياتك القانونية — عشان تركّز على كسب القضايا، مو البحث عن الملفات."
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
      en: "Aldalyel -Legal puts everything in one place — cases, sessions, documents, deadlines, billing. With AI that understands Saudi law, you're always prepared, always ahead.",
      ar: "الدليل يحط كل شيء في مكان واحد — القضايا، الجلسات، المستندات، المواعيد، الفوترة. مع ذكاء اصطناعي يفهم النظام السعودي، دايماً جاهز، دايماً متقدم."
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
    slug: "nexdo",
    available: true,
    name: { en: "Nexdo Task Managment ", ar: "نكست دو" },
    tagline: {
      en: "Relax. Everything is under control.",
      ar: "ارتاح.. كل شيء ماشي بالضبط."
    },
    description: {
      en: "Open the system in the morning and find every task clear, every project on track, nothing lost. Nexdo Task Managment gives you the relief of knowing exactly where everything stands.",
      ar: "افتح النظام الصبح وكل مهمة في مكانها، كل مشروع ماشي، وما في شيء ضايع. نكست دو يعطيك الراحة إنك تعرف بالضبط وين كل شيء واقف."
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
      en: "With Nexdo Task Managment, you open the system and relax. Everything is in front of you — who's doing what, what's late, what's next. Your team moves without you having to push.",
      ar: "مع نكست دو، تفتح النظام وترتاح. كل شيء أمامك — مين يسوي إيش، إيش متأخر، إيش الجاي. فريقك يتحرك بدون ما تحتاج تدفعهم."
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
    screenshots: ["tasks-product-shot"],
  },




  // ═══════════════════════════════════════════
  // 7. BOOKING — الإحساس: السلاسة
  // ═══════════════════════════════════════════
  {
    slug: "booking",
    available: true,
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

];
