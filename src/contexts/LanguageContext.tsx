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
  "hero.badge": { en: "Ready-made solutions · No complexity", ar: "حلول جاهزة · بدون تعقيد" },
  "hero.title": { en: "Ready-made software to manage your business — Start today", ar: "برامج جاهزة لإدارة أعمالك — ابدأ اليوم" },
  "hero.subtitle": { en: "Over 11 systems ready for immediate use. From safety to HR, from legal to finance — your solutions are ready, just contact us.", ar: "أكثر من 11 نظام جاهز للاستخدام الفوري. من السلامة إلى الموارد البشرية، من القانون إلى المالية — حلولك جاهزة، فقط تواصل معنا." },
  "hero.explore": { en: "Browse Systems", ar: "تصفّح الأنظمة" },
  "hero.demo": { en: "Contact Us Now", ar: "تواصل معنا الآن" },
  "hero.stats": { en: "11 Ready Systems · 8 Sectors · Instant Activation", ar: "١١ نظام جاهز · ٨ قطاعات · تفعيل فوري" },

  // Ecosystem
  "ecosystem.title": { en: "Ready-to-Run Systems", ar: "أنظمة جاهزة للتشغيل" },
  "ecosystem.subtitle": { en: "Choose the right system for your business — ready to activate and customize to your needs", ar: "اختر النظام المناسب لعملك — جاهز للتفعيل والتخصيص حسب احتياجك" },
  "ecosystem.learn_more": { en: "Learn more", ar: "اكتشف المزيد" },
  "ecosystem.available": { en: "Available Now", ar: "متوفر الآن" },
  "ecosystem.coming_soon": { en: "Coming Soon", ar: "قريباً" },

  // Why Nzom
  "why.title": { en: "Why Nzom Laps", ar: "لماذا مختبرات الأنظمة" },
  "why.subtitle": { en: "Solutions designed to get you started immediately", ar: "حلول مصممة لتبدأ فوراً" },
  "why.enterprise.title": { en: "Ready for Immediate Use", ar: "جاهز للاستخدام الفوري" },
  "why.enterprise.desc": { en: "No need to build from scratch — our systems are ready to activate.", ar: "لا حاجة لبناء من الصفر، أنظمتنا جاهزة للتفعيل." },
  "why.compliance.title": { en: "Fits Small & Large", ar: "يناسب الصغيرة والكبيرة" },
  "why.compliance.desc": { en: "From a company with 10 employees to an enterprise with 10,000.", ar: "من شركة بـ 10 موظفين إلى مؤسسة بـ 10,000." },
  "why.modular.title": { en: "One System or Full Suite", ar: "نظام واحد أو منظومة كاملة" },
  "why.modular.desc": { en: "Pick what you need, and add more systems later.", ar: "اختر ما تحتاج، وأضف أنظمة أخرى لاحقاً." },
  "why.cloud.title": { en: "Continuous Support", ar: "دعم فني مستمر" },
  "why.cloud.desc": { en: "Our team is with you from activation to full operation.", ar: "فريقنا معك من التفعيل إلى التشغيل الكامل." },

  // How to Start
  "howto.title": { en: "How to Get Started?", ar: "كيف تبدأ؟" },
  "howto.subtitle": { en: "Three simple steps to your ready system", ar: "ثلاث خطوات بسيطة لنظامك الجاهز" },
  "howto.step1.title": { en: "Choose Your System", ar: "اختر النظام" },
  "howto.step1.desc": { en: "Browse our systems and pick what suits your business.", ar: "تصفّح أنظمتنا واختر ما يناسب عملك." },
  "howto.step2.title": { en: "Contact Us", ar: "تواصل معنا" },
  "howto.step2.desc": { en: "Our team understands your needs and prepares everything.", ar: "فريقنا يفهم احتياجك ويجهز كل شيء." },
  "howto.step3.title": { en: "Start Working", ar: "ابدأ العمل" },
  "howto.step3.desc": { en: "Your system is ready and running within days.", ar: "نظامك جاهز ويعمل خلال أيام." },

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
  "cta.title": { en: "Your solutions are ready — one step away", ar: "حلولك جاهزة — خطوة واحدة تفصلك" },
  "cta.subtitle": { en: "Contact us now and get your system ready to work. No waiting, no complexity.", ar: "تواصل معنا الآن واحصل على نظامك جاهز للعمل. بدون انتظار، بدون تعقيد." },
  "cta.button": { en: "Contact Us Now", ar: "تواصل معنا الآن" },

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