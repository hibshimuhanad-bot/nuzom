export interface BlogPost {
  id: string;
  title: { en: string; ar: string };
  excerpt: { en: string; ar: string };
  category: string;
  date: string;
  readTime: { en: string; ar: string };
}

export const blogCategories = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "digital-transformation", label: { en: "Digital Transformation", ar: "التحول الرقمي" } },
  { id: "compliance", label: { en: "Compliance", ar: "الامتثال" } },
  { id: "enterprise-ops", label: { en: "Enterprise Operations", ar: "عمليات المؤسسات" } },
  { id: "tech-trends", label: { en: "Tech Trends", ar: "اتجاهات التكنولوجيا" } },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: { en: "Digital Transformation in Saudi Construction", ar: "التحول الرقمي في قطاع البناء السعودي" },
    excerpt: { en: "How construction companies in Saudi Arabia are leveraging SaaS platforms to modernize operations and improve safety compliance.", ar: "كيف تستفيد شركات البناء في المملكة العربية السعودية من منصات SaaS لتحديث العمليات وتحسين الامتثال للسلامة." },
    category: "digital-transformation",
    date: "2026-02-15",
    readTime: { en: "5 min read", ar: "٥ دقائق قراءة" },
  },
  {
    id: "2",
    title: { en: "Navigating Saudi Compliance Requirements", ar: "التنقل في متطلبات الامتثال السعودية" },
    excerpt: { en: "A comprehensive guide to understanding and meeting regulatory compliance requirements in the Saudi business landscape.", ar: "دليل شامل لفهم وتلبية متطلبات الامتثال التنظيمي في بيئة الأعمال السعودية." },
    category: "compliance",
    date: "2026-02-01",
    readTime: { en: "7 min read", ar: "٧ دقائق قراءة" },
  },
  {
    id: "3",
    title: { en: "The Future of Enterprise Fleet Management", ar: "مستقبل إدارة أساطيل المؤسسات" },
    excerpt: { en: "Exploring how AI and IoT are transforming fleet management operations for enterprise organizations.", ar: "استكشاف كيف يغير الذكاء الاصطناعي وإنترنت الأشياء عمليات إدارة الأسطول للمؤسسات." },
    category: "tech-trends",
    date: "2026-01-20",
    readTime: { en: "6 min read", ar: "٦ دقائق قراءة" },
  },
  {
    id: "4",
    title: { en: "Streamlining Legal Operations with Technology", ar: "تبسيط العمليات القانونية بالتكنولوجيا" },
    excerpt: { en: "How legal firms can reduce operational overhead and improve case outcomes through digital workflow automation.", ar: "كيف يمكن لمكاتب المحاماة تقليل النفقات التشغيلية وتحسين نتائج القضايا من خلال أتمتة سير العمل الرقمي." },
    category: "enterprise-ops",
    date: "2026-01-10",
    readTime: { en: "4 min read", ar: "٤ دقائق قراءة" },
  },
  {
    id: "5",
    title: { en: "HR Tech Trends in the GCC Region", ar: "اتجاهات تكنولوجيا الموارد البشرية في منطقة الخليج" },
    excerpt: { en: "An overview of the latest HR technology trends shaping workforce management in the Gulf region.", ar: "نظرة عامة على أحدث اتجاهات تكنولوجيا الموارد البشرية التي تشكل إدارة القوى العاملة في منطقة الخليج." },
    category: "tech-trends",
    date: "2025-12-28",
    readTime: { en: "5 min read", ar: "٥ دقائق قراءة" },
  },
  {
    id: "6",
    title: { en: "Building a Culture of Safety in Enterprise Operations", ar: "بناء ثقافة السلامة في عمليات المؤسسات" },
    excerpt: { en: "Best practices for establishing and maintaining a strong safety culture across large-scale enterprise operations.", ar: "أفضل الممارسات لإنشاء والحفاظ على ثقافة سلامة قوية عبر عمليات المؤسسات الكبيرة." },
    category: "compliance",
    date: "2025-12-15",
    readTime: { en: "6 min read", ar: "٦ دقائق قراءة" },
  },
];
