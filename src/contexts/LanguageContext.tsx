import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.solutions": { en: "Solutions", ar: "الحلول" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.demo": { en: "Request Demo", ar: "طلب عرض" },

  // Hero
  "hero.title": { en: "Engineering Enterprise SaaS Systems for Modern Organizations", ar: "تصميم أنظمة SaaS المؤسسية للمنظمات الحديثة" },
  "hero.subtitle": { en: "Nzom Laps builds scalable SaaS platforms designed to help organizations manage operations, compliance, and governance digitally.", ar: "مختبرات الأنظمة تبني منصات SaaS قابلة للتوسع لمساعدة المنظمات في إدارة العمليات والامتثال والحوكمة رقمياً." },
  "hero.explore": { en: "Explore Solutions", ar: "استكشف الحلول" },
  "hero.demo": { en: "Request Demo", ar: "طلب عرض تجريبي" },

  // Ecosystem
  "ecosystem.title": { en: "Our SaaS Ecosystem", ar: "منظومة الحلول البرمجية" },
  "ecosystem.subtitle": { en: "Five integrated platforms designed for enterprise operations", ar: "خمس منصات متكاملة مصممة لعمليات المؤسسات" },
  "ecosystem.learn_more": { en: "Learn more", ar: "اكتشف المزيد" },

  // Why Nzom
  "why.title": { en: "Why Nzom Laps", ar: "لماذا مختبرات الأنظمة" },
  "why.subtitle": { en: "Enterprise-grade solutions built for scale", ar: "حلول مؤسسية مصممة للتوسع والنمو" },
  "why.enterprise.title": { en: "Enterprise Architecture", ar: "بنية مؤسسية" },
  "why.enterprise.desc": { en: "Multi-tenant SaaS infrastructure designed for scale.", ar: "بنية SaaS متعددة المستأجرين مصممة للتوسع." },
  "why.compliance.title": { en: "Saudi Compliance Ready", ar: "جاهز للامتثال السعودي" },
  "why.compliance.desc": { en: "Systems designed with local regulatory environments in mind.", ar: "أنظمة مصممة مع مراعاة البيئات التنظيمية المحلية." },
  "why.modular.title": { en: "Modular Ecosystem", ar: "منظومة معيارية" },
  "why.modular.desc": { en: "Each system works independently or as an integrated platform.", ar: "كل نظام يعمل بشكل مستقل أو كمنصة متكاملة." },
  "why.cloud.title": { en: "Cloud Infrastructure", ar: "بنية سحابية" },
  "why.cloud.desc": { en: "Secure modern infrastructure ready for enterprise deployment.", ar: "بنية تحتية حديثة وآمنة جاهزة للنشر المؤسسي." },

  // Industries
  "industries.title": { en: "Industries We Serve", ar: "القطاعات التي نخدمها" },
  "industries.construction": { en: "Construction Companies", ar: "شركات المقاولات" },
  "industries.legal": { en: "Legal Firms", ar: "مكاتب المحاماة" },
  "industries.corporate": { en: "Corporate Enterprises", ar: "المؤسسات الكبرى" },
  "industries.facility": { en: "Facility Management", ar: "إدارة المرافق" },
  "industries.government": { en: "Government Contractors", ar: "المقاولون الحكوميون" },

  // Testimonials
  "testimonials.title": { en: "Trusted by Industry Leaders", ar: "موثوق من قادة الصناعة" },
  "testimonials.subtitle": { en: "See what our clients say about working with us", ar: "اطلع على آراء عملائنا حول العمل معنا" },

  // CTA
  "cta.title": { en: "Ready to digitize your operations?", ar: "مستعد لرقمنة عملياتك؟" },
  "cta.subtitle": { en: "Let's discuss how Nzom Laps can transform your organization.", ar: "دعنا نناقش كيف يمكن لمختبرات الأنظمة تحويل منظمتك." },
  "cta.button": { en: "Request Demo", ar: "طلب عرض تجريبي" },

  // About
  "about.story.title": { en: "Our Story", ar: "قصتنا" },
  "about.story.text": { en: "Nzom Laps is a technology studio building SaaS systems for modern organizations. Founded with the vision to simplify complex enterprise operations through technology, we design and develop scalable platforms that address real operational challenges.", ar: "مختبرات الأنظمة هي استوديو تقني يبني أنظمة SaaS للمنظمات الحديثة. تأسست برؤية تبسيط العمليات المؤسسية المعقدة من خلال التكنولوجيا." },
  "about.vision.title": { en: "Our Vision", ar: "رؤيتنا" },
  "about.vision.text": { en: "To become a leading SaaS ecosystem provider in Saudi Arabia.", ar: "أن نصبح مزود منظومة SaaS رائد في المملكة العربية السعودية." },
  "about.mission.title": { en: "Our Mission", ar: "مهمتنا" },
  "about.mission.text": { en: "Design systems that simplify complex organizational operations.", ar: "تصميم أنظمة تبسط العمليات التنظيمية المعقدة." },

  // Contact
  "contact.title": { en: "Get in Touch", ar: "تواصل معنا" },
  "contact.subtitle": { en: "Ready to transform your operations? Let's talk.", ar: "مستعد لتحويل عملياتك؟ دعنا نتحدث." },
  "contact.name": { en: "Company Name", ar: "اسم الشركة" },
  "contact.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone", ar: "الهاتف" },
  "contact.product": { en: "Product Interest", ar: "المنتج المهتم به" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.demo.title": { en: "Book a Demo", ar: "احجز عرض تجريبي" },
  "contact.demo.desc": { en: "See our platforms in action with a personalized demo.", ar: "شاهد منصاتنا أثناء العمل مع عرض تجريبي مخصص." },

  // Blog
  "blog.title": { en: "Blog & Insights", ar: "المدونة والرؤى" },
  "blog.subtitle": { en: "Latest insights on digital transformation and enterprise operations", ar: "أحدث الرؤى حول التحول الرقمي وعمليات المؤسسات" },

  // Product common
  "product.features": { en: "Key Features", ar: "الميزات الرئيسية" },
  "product.dashboard": { en: "Dashboard Preview", ar: "معاينة لوحة التحكم" },
  "product.workflow": { en: "Workflow Automation", ar: "أتمتة سير العمل" },
  "product.rbac": { en: "Role-Based Access Control", ar: "التحكم بالوصول حسب الأدوار" },
  "product.analytics": { en: "Analytics & Reporting", ar: "التحليلات والتقارير" },
  "product.security": { en: "Security & Compliance", ar: "الأمان والامتثال" },
  "product.demo": { en: "Request a Demo", ar: "اطلب عرض تجريبي" },
  "product.problem": { en: "The Challenge", ar: "التحدي" },
  "product.solution": { en: "Our Solution", ar: "حلنا" },

  // Footer
  "footer.description": { en: "Building enterprise SaaS systems for modern organizations.", ar: "بناء أنظمة SaaS مؤسسية للمنظمات الحديثة." },
  "footer.products": { en: "Products", ar: "المنتجات" },
  "footer.company": { en: "Company", ar: "الشركة" },
  "footer.rights": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ar");
  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};