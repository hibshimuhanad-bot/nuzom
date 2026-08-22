import {
  Shield, Scale, CheckSquare, Users,
  LayoutDashboard, Lock, Workflow, ClipboardCheck, BarChart3, Globe,
  CalendarDays, Brain,
  FileText, AlertTriangle, Flame, Cog, BookOpen, FileCheck,
  Briefcase, Calendar, Gavel,
  Target, Layers, KanbanSquare, Clock,
  CreditCard, Building2,
  Receipt, Star, MessageSquare, ThumbsUp
} from "lucide-react";

export interface PricingPlan {
  name: { en: string; ar: string };
  price: { en: string; ar: string };
  period: { en: string; ar: string };
  description: { en: string; ar: string };
  features: { en: string; ar: string }[];
  highlighted?: boolean;
}

export interface FAQItem {
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export interface Testimonial {
  quote: { en: string; ar: string };
  author: { en: string; ar: string };
  role: { en: string; ar: string };
}

export interface PrimaryCTA {
  label: { en: string; ar: string };
  href: string;
  external?: boolean;
}

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
  // Optional landing-page enhancements
  primaryCTA?: PrimaryCTA;
  pricing?: PricingPlan[];
  faq?: FAQItem[];
  testimonial?: Testimonial;
  trustBadges?: { en: string; ar: string }[];
}

export const products: Product[] = [
  // ═══════════════════════════════════════════
  // 1. Zerisks — الإحساس: راحة البال
  // ═══════════════════════════════════════════
  {
    slug: "zerisks",
    available: true,
    name: { en: "Zerisks HSSE", ar: "Zerisks HSSE" },
    tagline: {
      en: "Sleep well. Your sites are safe.",
      ar: "نظام إدارة الصحة والسلامة والبيئة"
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
    color: "from-primary to-accent",
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
    primaryCTA: {
      label: { en: "Start Free", ar: "ابدأ مجاناً" },
      href: "https://zerisks.nzomlabs.com",
      external: true,
    },
    testimonial: {
      quote: {
        en: "Zerisks transformed our safety compliance workflow. Incident reporting that used to take days now happens in real-time, and our audits became dramatically easier.",
        ar: "زي ريسك حوّل سير عمل الامتثال بالسلامة عندنا. الإبلاغ عن الحوادث اللي كان ياخذ أيام صار يصير لحظياً، والتدقيق صار أسهل بشكل كبير.",
      },
      author: { en: "One of our clients", ar: "أحد عملائنا" },
      role: { en: "Industrial Operations — Saudi Arabia", ar: "عمليات صناعية — المملكة العربية السعودية" },
    },
    trustBadges: [
      { en: "PDPL Compliant", ar: "متوافق مع نظام حماية البيانات" },
      { en: "Data Hosted in Saudi Arabia", ar: "بياناتك مستضافة في السعودية" },
      { en: "Native Arabic Support", ar: "دعم عربي أصيل" },
      { en: "Aramco-Grade Standards", ar: "بمعايير ترضي أرامكو" },
    ],
    faq: [
      {
        question: { en: "Is Zerisks suitable for Saudi industrial sites?", ar: "هل زي ريسك مناسب للمواقع الصناعية السعودية؟" },
        answer: { en: "Yes. Zerisks is built on Saudi regulatory requirements and meets the standards expected by Aramco, SABIC, and Ma'aden contractors.", ar: "نعم. زي ريسك مبني على الأنظمة السعودية ويلبّي المعايير المتوقعة من مقاولي أرامكو وسابك ومعادن." },
      },
      {
        question: { en: "Can field workers report incidents from their phones?", ar: "هل يقدر العمّال يبلّغون عن الحوادث من جوّالاتهم؟" },
        answer: { en: "Absolutely. Workers report incidents and submit permits from any device, in Arabic or English, even with weak connectivity.", ar: "بالتأكيد. العمّال يبلّغون عن الحوادث ويقدّمون التصاريح من أي جهاز، بالعربي أو الإنجليزي، حتى مع شبكة ضعيفة." },
      },
      {
        question: { en: "Where is my safety data stored?", ar: "أين تُخزَّن بيانات السلامة؟" },
        answer: { en: "All your data is hosted on secure servers inside Saudi Arabia, fully compliant with the Personal Data Protection Law (PDPL).", ar: "كل بياناتك مستضافة على خوادم آمنة داخل المملكة العربية السعودية، بامتثال كامل لنظام حماية البيانات الشخصية (PDPL)." },
      },
      {
        question: { en: "Does Zerisks integrate with other Nzom products?", ar: "هل يتكامل زي ريسك مع منتجات نُظم الأخرى؟" },
        answer: { en: "Yes. Zerisks works seamlessly alongside Nexdo (tasks) and Aldalyel (legal) when you need them — but it stands alone perfectly for HSSE teams.", ar: "نعم. زي ريسك يعمل بسلاسة مع نكست دو (المهام) والدليل (القانوني) عند الحاجة — لكنه يقف لوحده بكفاءة كاملة لفِرَق السلامة." },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // 2. LEGAL — الإحساس: السيطرة
  // ═══════════════════════════════════════════
  {
    slug: "aldalyel",
    available: true,
    name: { en: "Aldalyel", ar: "الدليل" },
    tagline: {
      en: "Nothing slips through. Ever.",
      ar: "نظام إدارة الشؤون القانونية"
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
    color: "from-primary to-accent",
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
    primaryCTA: {
      label: { en: "Start Free", ar: "ابدأ مجاناً" },
      href: "https://aldalyel.app/register",
      external: true,
    },
    trustBadges: [
      { en: "PDPL Compliant", ar: "متوافق مع نظام حماية البيانات" },
      { en: "Data Hosted in Saudi Arabia", ar: "بياناتك مستضافة في السعودية" },
      { en: "Native Arabic Support", ar: "دعم عربي أصيل" },
      { en: "No Credit Card · 14-Day Trial", ar: "بدون بطاقة ائتمان · تجربة 14 يوم" },
    ],
    testimonial: {
      quote: {
        en: "Aldalyel streamlined our entire case management process. We've seen a 40% improvement in case resolution time, and not a single session has been missed since we started.",
        ar: "الدليل نظّم عملية إدارة القضايا بالكامل. شفنا تحسّن 40% في وقت حل القضايا، وما فاتتنا أي جلسة من يوم ما بدأنا.",
      },
      author: { en: "One of our clients", ar: "أحد عملائنا" },
      role: { en: "Law Firm — Saudi Arabia", ar: "مكتب محاماة — المملكة العربية السعودية" },
    },
    faq: [
      {
        question: { en: "Do I need a credit card for the free trial?", ar: "هل أحتاج بطاقة ائتمان للتجربة المجانية؟" },
        answer: { en: "No. Start your 14-day free trial instantly without any payment information. We'll only ask for billing details if you decide to continue.", ar: "لا. ابدأ تجربتك المجانية لمدة 14 يوم فوراً بدون أي بيانات دفع. نطلب بيانات الفوترة فقط إذا قررت الاستمرار." },
      },
      {
        question: { en: "Where is my case data stored?", ar: "أين تُخزَّن بيانات قضاياي؟" },
        answer: { en: "All your data is hosted on secure servers inside Saudi Arabia, fully compliant with the Personal Data Protection Law (PDPL).", ar: "كل بياناتك مستضافة على خوادم آمنة داخل المملكة العربية السعودية، بامتثال كامل لنظام حماية البيانات الشخصية (PDPL)." },
      },
      {
        question: { en: "What happens after the free trial ends?", ar: "ماذا يحدث بعد انتهاء التجربة المجانية؟" },
        answer: { en: "You can choose a plan that fits you, or your account will be paused — your data stays safe for 90 days giving you time to decide.", ar: "تختار الخطة المناسبة، أو يتم إيقاف الحساب مؤقتاً — وبياناتك تبقى محفوظة لمدة 90 يوم لتعطيك وقت كافٍ للقرار." },
      },
      {
        question: { en: "Does Aldalyel integrate with other Nzom products?", ar: "هل يتكامل الدليل مع منتجات نُظم الأخرى؟" },
        answer: { en: "Yes. Aldalyel works seamlessly alongside Zerisks (HSSE) and other Nzom Labs tools when you need them — but it stands alone perfectly for law firms.", ar: "نعم. الدليل يعمل بسلاسة مع زي ريسك (HSSE) وأدوات نُظم الأخرى عند الحاجة — لكنه يقف لوحده بكفاءة كاملة لمكاتب المحاماة." },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // 3. TASKS — الإحساس: الارتياح
  // ═══════════════════════════════════════════
  {
    slug: "nexdo",
    available: true,
    name: { en: "Nexdo Task Managment ", ar: "Nexdo Task Managment" },
    tagline: {
      en: "Relax. Everything is under control.",
      ar: "نظام إدارة المهام والمشاريع"
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
    color: "from-primary to-accent",
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
    primaryCTA: {
      label: { en: "Start Free", ar: "ابدأ مجاناً" },
      href: "https://nexdo.nzomlabs.com",
      external: true,
    },
    screenshots: ["tasks-product-shot"],
    testimonial: {
      quote: {
        en: "Nexdo gave us unprecedented visibility across our large workforce. Tasks finally route to the right people, deadlines stop slipping, and our managers spend their time on strategy instead of follow-ups.",
        ar: "نكست دو أعطانا رؤية ما شفناها قبل عبر فريقنا الكبير. المهام أخيراً تروح للأشخاص الصحيحين، المواعيد بطّلت تطيح، والمديرون يصرفون وقتهم على الاستراتيجية بدل المتابعات.",
      },
      author: { en: "One of our clients", ar: "أحد عملائنا" },
      role: { en: "Large-Scale Project — Saudi Arabia", ar: "مشروع كبير الحجم — المملكة العربية السعودية" },
    },
    trustBadges: [
      { en: "PDPL Compliant", ar: "متوافق مع نظام حماية البيانات" },
      { en: "Data Hosted in Saudi Arabia", ar: "بياناتك مستضافة في السعودية" },
      { en: "Native Arabic Support", ar: "دعم عربي أصيل" },
      { en: "No Credit Card · 14-Day Trial", ar: "بدون بطاقة ائتمان · تجربة 14 يوم" },
    ],
    faq: [
      {
        question: { en: "Do I need a credit card for the free trial?", ar: "هل أحتاج بطاقة ائتمان للتجربة المجانية؟" },
        answer: { en: "No. Start your 14-day free trial instantly without any payment information. We'll only ask for billing details if you decide to continue.", ar: "لا. ابدأ تجربتك المجانية لمدة 14 يوم فوراً بدون أي بيانات دفع. نطلب بيانات الفوترة فقط إذا قررت الاستمرار." },
      },
      {
        question: { en: "Where is my project data stored?", ar: "أين تُخزَّن بيانات مشاريعي؟" },
        answer: { en: "All your data is hosted on secure servers inside Saudi Arabia, fully compliant with the Personal Data Protection Law (PDPL).", ar: "كل بياناتك مستضافة على خوادم آمنة داخل المملكة العربية السعودية، بامتثال كامل لنظام حماية البيانات الشخصية (PDPL)." },
      },
      {
        question: { en: "Can I try Nexdo before subscribing?", ar: "هل أقدر أجرّب نكست دو قبل الاشتراك؟" },
        answer: { en: "Yes. A live demo is available, and you can start a free trial to test the full system with your team before committing.", ar: "نعم. يوجد ديمو مباشر، وتقدر تبدأ تجربة مجانية لاختبار النظام كاملاً مع فريقك قبل الاشتراك." },
      },
      {
        question: { en: "Does Nexdo integrate with other Nzom products?", ar: "هل يتكامل نكست دو مع منتجات نُظم الأخرى؟" },
        answer: { en: "Yes. Nexdo works seamlessly with Namaa CRM and Aldalyel when you need them — and it stands alone perfectly for any team managing projects and tasks.", ar: "نعم. نكست دو يعمل بسلاسة مع نظام إدارة العملاء والدليل عند الحاجة — ويقف لوحده بكفاءة كاملة لأي فريق يدير مشاريع ومهام." },
      },
    ],
  },




  // ═══════════════════════════════════════════
  // 7. BOOKING — الإحساس: السلاسة
  // ═══════════════════════════════════════════
  {
    slug: "booking",
    available: true,
    name: { en: "Nzom Booking", ar: "Nzom Booking" },
    tagline: {
      en: "Clients book easily. You grow effortlessly.",
      ar: "نظام إدارة الحجوزات والمواعيد"
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
    color: "from-primary to-accent",
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
    primaryCTA: {
      label: { en: "Start Free", ar: "ابدأ مجاناً" },
      href: "/contact",
    },
    testimonial: {
      quote: {
        en: "Nzom Booking reduced our scheduling conflicts dramatically with smart allocation and automated confirmations. Our front desk isn't glued to the phone anymore, and our branches finally run independently.",
        ar: "نزوم الحجوزات خفّض تعارضات الجدولة بشكل كبير بفضل التخصيص الذكي والتأكيدات الآلية. الاستقبال ما عاد ملتصق بالتلفون، وفروعنا أخيراً تمشي باستقلالية.",
      },
      author: { en: "One of our clients", ar: "أحد عملائنا" },
      role: { en: "Multi-Branch Service Business — Saudi Arabia", ar: "نشاط خدمي متعدد الفروع — المملكة العربية السعودية" },
    },
    trustBadges: [
      { en: "PDPL Compliant", ar: "متوافق مع نظام حماية البيانات" },
      { en: "ZATCA E-Invoicing Ready", ar: "متوافق مع الفوترة الإلكترونية ZATCA" },
      { en: "Data Hosted in Saudi Arabia", ar: "بياناتك مستضافة في السعودية" },
      { en: "Native Arabic Support", ar: "دعم عربي أصيل" },
    ],
    faq: [
      {
        question: { en: "Is Nzom Booking ZATCA-compliant?", ar: "هل نزوم الحجوزات متوافق مع ZATCA؟" },
        answer: { en: "Yes. Every invoice is generated as a compliant e-invoice with QR code and VAT details, following the Saudi ZATCA requirements.", ar: "نعم. كل فاتورة تتولّد كفاتورة إلكترونية متوافقة برمز QR وتفاصيل الضريبة، حسب متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA)." },
      },
      {
        question: { en: "Can clients book without downloading an app?", ar: "هل يقدر العملاء يحجزون بدون تنزيل تطبيق؟" },
        answer: { en: "Yes. Booking happens through a public link your clients open on any browser — no app, no account creation required.", ar: "نعم. الحجز يصير عن طريق رابط عام يفتحه العميل من أي متصفح — بدون تطبيق، وبدون إنشاء حساب." },
      },
      {
        question: { en: "Where is my booking and customer data stored?", ar: "أين تُخزَّن بيانات الحجوزات والعملاء؟" },
        answer: { en: "All your data is hosted on secure servers inside Saudi Arabia, fully compliant with the Personal Data Protection Law (PDPL).", ar: "كل بياناتك مستضافة على خوادم آمنة داخل المملكة العربية السعودية، بامتثال كامل لنظام حماية البيانات الشخصية (PDPL)." },
      },
      {
        question: { en: "Does Nzom Booking integrate with other Nzom products?", ar: "هل يتكامل نزوم الحجوزات مع منتجات نُظم الأخرى؟" },
        answer: { en: "Yes. It pairs naturally with Sumaa Plus (turn satisfied customers into reviewers) and Namaa CRM (sync customer history) — and stands alone perfectly for any service business.", ar: "نعم. يتكامل بشكل طبيعي مع سمعة بلس (حوّل عملاءك الراضين إلى مراجعين) ونظام إدارة العملاء (مزامنة سجل العميل) — ويقف لوحده بكفاءة كاملة لأي نشاط خدمي." },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // 8. CRM — الإحساس: السيطرة والانسجام
  // ═══════════════════════════════════════════
  {
    slug: "crm",
    available: true,
    name: { en: "Customers Relation Managments", ar: "Customers Relation Managments" },
    tagline: {
      en: "Your customers, perfectly in tune.",
      ar: "نظام إدارة علاقات العملاء"
    },
    description: {
      en: "No more lost leads in inboxes. No more deals slipping through Excel. CRM gives every customer their place, every deal its stage, and every follow-up its time. Your sales team finally moves in harmony.",
      ar: "خلاص من الفرص الضائعة في الإيميلات. خلاص من الصفقات اللي تطيح بين ملفات الإكسل. نظام إدارة علاقات العملاء يعطي كل عميل مكانه، وكل صفقة مرحلتها، وكل متابعة وقتها. فريق المبيعات أخيراً يشتغل بانسجام."
    },
    emotionalHook: {
      en: "Every customer in place. Every deal in control.",
      ar: "كل عميل في مكانه، وكل صفقة تحت السيطرة."
    },
    imagineDay: {
      en: "Imagine opening your morning to a clear pipeline — every lead scored, every deal at the right stage, every follow-up scheduled. Your team knows exactly who to call, when, and why. Deals stop slipping. Revenue becomes predictable. Growth becomes a plan, not a hope.",
      ar: "تخيّل تفتح صباحك على pipeline واضح — كل فرصة مُقيّمة، كل صفقة في مرحلتها الصحيحة، كل متابعة مجدولة. فريقك يعرف بالضبط مين يكلّم ومتى وليش. الصفقات تبطّل تطيح. الإيرادات تصير متوقّعة. النمو يصير خطة، مو أمنية."
    },
    icon: Users,
    color: "from-primary to-accent",
    problem: {
      en: "Leads pile up in WhatsApp. Deals tracked in scattered spreadsheets. Follow-ups forgotten. Sales reps duplicate work. You don't know which deals will close this month — or why some keep slipping away.",
      ar: "الفرص تتكدّس في الواتساب. الصفقات متابَعة في جداول مبعثرة. المتابعات تُنسى. مندوبو المبيعات يكرّرون نفس الشغل. ما تعرف أي صفقات راح تُقفل هذا الشهر — ولا ليش بعضها يضيع منك."
    },
    solution: {
      en: "CRM unifies leads, contacts, companies, deals, and tasks in one clean workspace. Every interaction is logged, every pipeline is visual, every report is one click away. You see your sales like never before.",
      ar: "نظام إدارة علاقات العملاء يوحّد الفرص والعملاء والشركات والصفقات والمهام في مساحة عمل واحدة نظيفة. كل تفاعل موثّق، كل pipeline مرئي، كل تقرير على بُعد ضغطة. تشوف مبيعاتك بطريقة ما شفتها قبل."
    },
    features: [
      { title: { en: "Contacts & Companies", ar: "إدارة العملاء والشركات" }, description: { en: "A single source of truth for every customer and company you deal with.", ar: "مصدر واحد موثوق لكل عميل وشركة تتعامل معها." }, icon: Building2 },
      { title: { en: "Deals & Pipeline", ar: "الصفقات والـ Pipeline" }, description: { en: "Visual sales pipeline. Drag deals between stages. Never lose track again.", ar: "pipeline مبيعات مرئي. اسحب الصفقات بين المراحل. ما تضيع منك صفقة مرة ثانية." }, icon: KanbanSquare },
      { title: { en: "Lead Management", ar: "إدارة الفرص المحتملة" }, description: { en: "Capture, score, and convert leads into customers — systematically.", ar: "استقبل وقيّم وحوّل الفرص إلى عملاء — بطريقة منهجية." }, icon: Target },
      { title: { en: "Tasks & Follow-ups", ar: "المهام والمتابعات" }, description: { en: "Every customer gets the right follow-up at the right time. Nothing forgotten.", ar: "كل عميل يحصل على المتابعة الصحيحة في الوقت الصحيح. ما يُنسى شيء." }, icon: CheckSquare },
      { title: { en: "Reports & Dashboards", ar: "التقارير ولوحات التحكم" }, description: { en: "Sales performance, conversion rates, revenue forecasts — all live.", ar: "أداء المبيعات، معدلات التحويل، توقعات الإيرادات — كلها لحظية." }, icon: BarChart3 },
      { title: { en: "Smart Notifications", ar: "الإشعارات الذكية" }, description: { en: "Be alerted on stuck deals, hot leads, and overdue follow-ups instantly.", ar: "تنبيهات فورية للصفقات الراكدة، الفرص الساخنة، والمتابعات المتأخرة." }, icon: AlertTriangle },
    ],
    workflowDesc: { en: "Leads route to the right rep automatically. Deals progress through your defined stages. Tasks are created on every status change. Follow-ups schedule themselves. Your sales process runs like clockwork.", ar: "الفرص تتوزّع على المندوب الصحيح تلقائياً. الصفقات تتنقّل بين المراحل اللي حدّدتها. المهام تتولّد مع كل تغيير حالة. المتابعات تجدول نفسها. عملية مبيعاتك تمشي زي الساعة." },
    rbacDesc: { en: "Sales managers see the full pipeline. Reps see their accounts. Marketing sees lead sources. Each role gets exactly the view they need — nothing more, nothing less.", ar: "مديرو المبيعات يشوفون الـ pipeline كامل. المندوبون يشوفون حساباتهم. التسويق يشوف مصادر الفرص. كل دور يشوف بالضبط اللي يخصه — لا أكثر، ولا أقل." },
    analyticsDesc: { en: "Which deals are likely to close? Which reps perform best? Where do leads drop off? Real answers that turn data into revenue.", ar: "أي صفقات محتمل تُقفل؟ أي مندوب الأفضل أداءً؟ وين تطيح الفرص؟ إجابات حقيقية تحوّل البيانات إلى إيرادات." },
    securityDesc: { en: "Customer data is sacred. Multi-tenant isolation, encrypted storage, and full Saudi PDPL compliance keep your most valuable asset safe.", ar: "بيانات العملاء مقدسة. عزل متعدد المستأجرين، تخزين مشفّر، وامتثال كامل لنظام حماية البيانات السعودي PDPL يحمي أثمن أصولك." },
    primaryCTA: {
      label: { en: "Start Free", ar: "ابدأ مجاناً" },
      href: "https://namaacrm.app/register",
      external: true,
    },
    trustBadges: [
      { en: "PDPL Compliant", ar: "متوافق مع نظام حماية البيانات" },
      { en: "Data Hosted in Saudi Arabia", ar: "بياناتك مستضافة في السعودية" },
      { en: "Native Arabic Support", ar: "دعم عربي أصيل" },
      { en: "No Credit Card · 14-Day Trial", ar: "بدون بطاقة ائتمان · تجربة 14 يوم" },
    ],
    testimonial: {
      quote: {
        en: "Our pipeline finally feels under control. Leads stop falling through the cracks, follow-ups happen on time, and we can actually forecast revenue instead of guessing. Our sales team moves in harmony now.",
        ar: "الـ pipeline حقنا أخيراً تحت السيطرة. الفرص بطّلت تطيح، المتابعات تصير في وقتها، وصرنا فعلاً نقدر نتوقّع الإيرادات بدل التخمين. فريق المبيعات يشتغل بانسجام الحين.",
      },
      author: { en: "One of our clients", ar: "أحد عملائنا" },
      role: { en: "Sales Team — Saudi Arabia", ar: "فريق مبيعات — المملكة العربية السعودية" },
    },
    faq: [
      {
        question: { en: "Do I need a credit card for the free trial?", ar: "هل أحتاج بطاقة ائتمان للتجربة المجانية؟" },
        answer: { en: "No. Start your 14-day free trial instantly without any payment information. We'll only ask for billing details if you decide to continue.", ar: "لا. ابدأ تجربتك المجانية لمدة 14 يوم فوراً بدون أي بيانات دفع. نطلب بيانات الفوترة فقط إذا قررت الاستمرار." },
      },
      {
        question: { en: "Where is my customer data stored?", ar: "أين تُخزَّن بيانات عملائي؟" },
        answer: { en: "All your data is hosted on secure servers inside Saudi Arabia, fully compliant with the Personal Data Protection Law (PDPL).", ar: "كل بياناتك مستضافة على خوادم آمنة داخل المملكة العربية السعودية، بامتثال كامل لنظام حماية البيانات الشخصية (PDPL)." },
      },
      {
        question: { en: "What happens after the free trial ends?", ar: "ماذا يحدث بعد انتهاء التجربة المجانية؟" },
        answer: { en: "You can pick the plan that fits you, or your account will be paused — your data stays safe for 90 days giving you time to decide.", ar: "تختار الخطة المناسبة، أو يتم إيقاف الحساب مؤقتاً — وبياناتك تبقى محفوظة لمدة 90 يوم لتعطيك وقت كافٍ للقرار." },
      },
      {
        question: { en: "Does Namaa CRM integrate with other Nzom products?", ar: "هل يتكامل نظام إدارة العملاء مع منتجات نُظم الأخرى؟" },
        answer: { en: "Yes. Namaa CRM works seamlessly with Nexdo (tasks) and Aldalyel (legal) when you need them — and it stands alone perfectly for sales teams.", ar: "نعم. نظام إدارة العملاء يعمل بسلاسة مع نكست دو (المهام) والدليل (القانوني) عند الحاجة — ويقف لوحده بكفاءة كاملة لفرق المبيعات." },
      },
    ],
  },

  // ═══════════════════════════════════════════
  // 9. SUMAA PLUS — الإحساس: الطمأنينة على السمعة
  // ═══════════════════════════════════════════
  {
    slug: "samaa-plus",
    available: true,
    name: { en: "Sumaa Plus", ar: "سمعة بلس" },
    tagline: {
      en: "Manage your business reputation, intelligently.",
      ar: "أدر سمعة أعمالك بذكاء"
    },
    description: {
      en: "Every Google review tracked. Every reply crafted with AI in fluent Arabic. Every 1-star alert reaches you instantly. Sumaa Plus turns your scattered branch reviews into one calm, controlled stream — so your reputation never catches you off guard.",
      ar: "كل مراجعة على Google متابَعة. كل رد مصاغ بذكاء اصطناعي بعربية فصيحة. كل تنبيه نجمة وحدة يوصلك فوراً. سمعة بلس تحوّل مراجعات فروعك المبعثرة إلى قناة واحدة هادئة تحت السيطرة — عشان سمعتك ما تفاجئك أبداً."
    },
    emotionalHook: {
      en: "Your reputation, in your hands — moment by moment.",
      ar: "سمعتك تحت سيطرتك — لحظة بلحظة."
    },
    imagineDay: {
      en: "Imagine starting your morning with one screen showing every review from every branch — sorted, scored, and ready. Negative reviews flagged before they spread. AI-drafted replies awaiting your approval in your tone. Your branch managers respond consistently, not improvising. Your brand voice stays calm, professional, human — across every location.",
      ar: "تخيّل تبدأ صباحك بشاشة وحدة تعرض كل مراجعة من كل فرع — مصنّفة، مقيّمة، وجاهزة. المراجعات السلبية مرصودة قبل لا تنتشر. ردود مصاغة بالذكاء الاصطناعي تنتظر موافقتك بأسلوبك. مديرو فروعك يردّون بانسجام، مو باجتهادات. صوت علامتك يبقى هادئ، احترافي، إنساني — في كل موقع."
    },
    icon: Star,
    color: "from-primary to-accent",
    problem: {
      en: "Reviews land on Google before you see them. Each branch replies differently — or doesn't reply at all. A single 1-star review goes viral before anyone notices. You have no unified view across locations, no consistency, no control. Your reputation is being shaped without you in the room.",
      ar: "المراجعات تنزل على Google قبل ما تشوفها. كل فرع يرد بطريقته — أو ما يرد أصلاً. مراجعة وحدة بنجمة وحدة تنتشر قبل لا أحد ينتبه. ما عندك رؤية موحدة عبر الفروع، ولا انسجام، ولا سيطرة. سمعتك تتشكّل وأنت مو في الغرفة."
    },
    solution: {
      en: "Sumaa Plus connects directly to Google Business Profile, pulls every review across all your branches into one workspace, drafts AI replies in Arabic, and alerts you instantly on critical reviews. Approvals, escalations, and competitor benchmarking — all in one calm dashboard.",
      ar: "سمعة بلس يربط مباشرة بـ Google Business Profile، يسحب كل المراجعات من جميع فروعك إلى مساحة عمل وحدة، يصيغ ردود ذكية بالعربية، وينبّهك فوراً على المراجعات الحرجة. الموافقات، التصعيدات، ومقارنة المنافسين — كلها في لوحة وحدة هادئة."
    },
    features: [
      { title: { en: "Google Reviews Sync", ar: "مزامنة مراجعات Google" }, description: { en: "Direct integration with Google Business Profile. Every review, every location, in real time.", ar: "تكامل مباشر مع Google Business Profile. كل مراجعة، كل موقع، لحظة بلحظة." }, icon: Star },
      { title: { en: "AI Arabic Replies", ar: "ردود ذكية بالعربية" }, description: { en: "Smart replies drafted in fluent Arabic, matching your brand voice. Approve in one click.", ar: "ردود ذكية مصاغة بعربية فصيحة، بنفس صوت علامتك. توافق بضغطة." }, icon: Brain },
      { title: { en: "Critical 1★ Alerts", ar: "تنبيهات النجمة الواحدة" }, description: { en: "The moment a 1-star review lands, you know. Notifications fire before it spreads.", ar: "اللحظة اللي تنزل فيها مراجعة بنجمة وحدة، تعرف. الإشعارات توصل قبل لا تنتشر." }, icon: AlertTriangle },
      { title: { en: "Approval Workflow", ar: "سير عمل الموافقات" }, description: { en: "Branch managers draft, reputation managers approve. Nothing reaches Google by mistake.", ar: "مديرو الفروع يصيغون، مديرو السمعة يوافقون. ما يوصل لـ Google شيء بالغلط." }, icon: Workflow },
      { title: { en: "Multi-Branch Management", ar: "إدارة متعددة الفروع" }, description: { en: "Restaurants, clinics, hotels, retail — all locations under one tenant, with clean scopes.", ar: "مطاعم، عيادات، فنادق، تجزئة — كل المواقع تحت مؤسسة وحدة، بصلاحيات واضحة." }, icon: Building2 },
      { title: { en: "Competitors & Reports", ar: "المنافسون والتقارير" }, description: { en: "Track competitor ratings beside yours. Trend reports show where you're winning or losing.", ar: "تابع تقييمات المنافسين جنب تقييماتك. تقارير الاتجاهات تورّيك وين تكسب ووين تخسر." }, icon: BarChart3 },
    ],
    workflowDesc: { en: "Reviews sync from Google automatically. AI drafts a reply. Branch manager edits, reputation manager approves, system publishes back to Google — with full audit trail. Critical reviews escalate instantly. You set the rules once.", ar: "المراجعات تتزامن من Google تلقائياً. الذكاء الاصطناعي يصيغ الرد. مدير الفرع يعدّل، مدير السمعة يوافق، النظام ينشر للـ Google — بسجل تدقيق كامل. المراجعات الحرجة تتصعّد فوراً. تحط القواعد مرة وحدة." },
    rbacDesc: { en: "Platform owners see everything. Tenant admins manage their organization. Reputation managers handle all branches. Branch managers see only their locations — no tokens, no direct publish. Clean separation, zero leakage.", ar: "مالكو المنصة يشوفون كل شيء. مديرو المؤسسة يديرون منظمتهم. مديرو السمعة يتولّون كل الفروع. مديرو الفروع يشوفون مواقعهم فقط — بدون توكنات، بدون نشر مباشر. فصل نظيف، صفر تسريب." },
    analyticsDesc: { en: "See your average rating trend per branch, per city, per service. Compare against competitors. Spot which locations need attention before the numbers slip publicly.", ar: "شوف اتجاه متوسط تقييمك لكل فرع، لكل مدينة، لكل خدمة. قارن مع المنافسين. اكتشف أي مواقع تحتاج اهتمام قبل لا تنزل الأرقام علناً." },
    securityDesc: { en: "Google OAuth tokens stored in encrypted Vault — never in the database directly. Full PDPL compliance, data hosted in Saudi Arabia, audit logs on every sync and publish.", ar: "توكنات Google OAuth محفوظة في Vault مشفّر — أبداً في قاعدة البيانات مباشرة. امتثال كامل لنظام حماية البيانات، البيانات مستضافة في السعودية، سجلات تدقيق على كل مزامنة ونشر." },
    primaryCTA: {
      label: { en: "Start Free", ar: "ابدأ مجاناً" },
      href: "https://sumaaplus.nzomlabs.com/login",
      external: true,
    },
    trustBadges: [
      { en: "PDPL Compliant", ar: "متوافق مع نظام حماية البيانات" },
      { en: "Data Hosted in Saudi Arabia", ar: "بياناتك مستضافة في السعودية" },
      { en: "Official Google Business Profile Integration", ar: "تكامل رسمي مع Google Business Profile" },
      { en: "No Credit Card · 14-Day Trial", ar: "بدون بطاقة ائتمان · تجربة 14 يوم" },
    ],
    testimonial: {
      quote: {
        en: "Before Sumaa Plus, a bad review would sit unanswered for days across our branches. Now every review is replied to within an hour, in our brand voice. Our average rating jumped from 4.1 to 4.6 in three months.",
        ar: "قبل سمعة بلس، المراجعة السيئة كانت تظل بدون رد لأيام في فروعنا. الحين كل مراجعة يوصلها رد خلال ساعة، بصوت علامتنا. متوسط تقييمنا قفز من 4.1 إلى 4.6 خلال ثلاثة أشهر.",
      },
      author: { en: "One of our clients", ar: "أحد عملائنا" },
      role: { en: "Multi-Branch F&B Group — Saudi Arabia", ar: "مجموعة مطاعم متعددة الفروع — المملكة العربية السعودية" },
    },
    faq: [
      {
        question: { en: "Do I need a credit card for the free trial?", ar: "هل أحتاج بطاقة ائتمان للتجربة المجانية؟" },
        answer: { en: "No. Start your 14-day free trial instantly without any payment information. We'll only ask for billing details if you decide to continue.", ar: "لا. ابدأ تجربتك المجانية لمدة 14 يوم فوراً بدون أي بيانات دفع. نطلب بيانات الفوترة فقط إذا قررت الاستمرار." },
      },
      {
        question: { en: "Where is my reputation data stored?", ar: "أين تُخزَّن بيانات سمعتي؟" },
        answer: { en: "All your data is hosted on secure servers inside Saudi Arabia, fully compliant with the Personal Data Protection Law (PDPL). Google OAuth tokens are kept in an encrypted Vault — never in plain database fields.", ar: "كل بياناتك مستضافة على خوادم آمنة داخل المملكة العربية السعودية، بامتثال كامل لنظام حماية البيانات الشخصية (PDPL). توكنات Google OAuth محفوظة في Vault مشفّر — أبداً في حقول قاعدة بيانات عادية." },
      },
      {
        question: { en: "How do I connect my Google Business Profile?", ar: "كيف أربط حساب Google Business Profile؟" },
        answer: { en: "From your dashboard, click 'Connect Google'. You'll be taken through Google's official OAuth flow, then you map each branch to its Google location. Reviews start syncing immediately.", ar: "من لوحة التحكم، اضغط 'ربط Google'. تمر بتدفّق OAuth الرسمي من Google، ثم تربط كل فرع بموقعه على Google. المراجعات تبدأ تتزامن فوراً." },
      },
      {
        question: { en: "Does Sumaa Plus integrate with other Nzom products?", ar: "هل يتكامل سمعة بلس مع منتجات نُظم الأخرى؟" },
        answer: { en: "Yes. Sumaa Plus pairs naturally with Nzom Booking (turn happy customers into reviewers) and Namaa CRM (sync customer sentiment) — but it stands alone perfectly for any multi-branch business.", ar: "نعم. سمعة بلس يتكامل بشكل طبيعي مع نزوم الحجوزات (حوّل عملاءك السعداء إلى مراجعين) ونظام إدارة العملاء (مزامنة مشاعر العملاء) — ويقف لوحده بكفاءة كاملة لأي عمل متعدد الفروع." },
      },
    ],
  },

];
