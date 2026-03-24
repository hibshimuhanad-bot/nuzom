import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Shield, Scale, CheckSquare, CalendarDays, Building2 } from "lucide-react";

interface FAQItem {
  q: { en: string; ar: string };
  a: { en: string; ar: string };
}

interface FAQSection {
  id: string;
  title: { en: string; ar: string };
  icon: any;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    id: "general",
    title: { en: "General", ar: "عام" },
    icon: Building2,
    items: [
      {
        q: { en: "What is Nzom Labs?", ar: "ما هي مختبرات الأنظمة؟" },
        a: {
          en: "Nzom Labs is a Saudi technology studio that builds ready-to-use SaaS systems for enterprises. We focus on helping organizations in Saudi Arabia and the Gulf digitize their operations with modern, scalable platforms.",
          ar: "مختبرات الأنظمة هي استوديو تقني سعودي يبني أنظمة رقمية جاهزة للاستخدام للمؤسسات. نركز على مساعدة المنظمات في السعودية والخليج على رقمنة عملياتها بمنصات حديثة وقابلة للتوسع.",
        },
      },
      {
        q: { en: "What industries do you serve?", ar: "ما القطاعات التي تخدمونها؟" },
        a: {
          en: "We serve multiple sectors including construction, oil & gas, legal firms, consulting offices, healthcare, hospitality, government entities, and service-based businesses across Saudi Arabia.",
          ar: "نخدم قطاعات متعددة تشمل المقاولات والنفط والغاز والمكاتب القانونية والاستشارية والرعاية الصحية والضيافة والجهات الحكومية والشركات الخدمية في المملكة العربية السعودية.",
        },
      },
      {
        q: { en: "How long does system activation take?", ar: "كم يستغرق تفعيل النظام؟" },
        a: {
          en: "Our systems are designed for rapid deployment. Most clients are up and running within a few days, not months. We handle setup, configuration, and initial training to ensure a smooth start.",
          ar: "أنظمتنا مصممة للنشر السريع. معظم العملاء يبدأون العمل خلال أيام وليس أشهر. نتولى الإعداد والتهيئة والتدريب الأولي لضمان بداية سلسة.",
        },
      },
      {
        q: { en: "Do you offer technical support?", ar: "هل تقدمون دعم فني؟" },
        a: {
          en: "Yes, we provide continuous technical support to all our clients. Our team is available to help with any technical issues, system updates, and user training throughout your subscription.",
          ar: "نعم، نقدم دعماً فنياً مستمراً لجميع عملائنا. فريقنا متاح للمساعدة في أي مشاكل تقنية وتحديثات النظام وتدريب المستخدمين طوال فترة اشتراكك.",
        },
      },
      {
        q: { en: "Is my data secure with Nzom Labs?", ar: "هل بياناتي آمنة مع مختبرات الأنظمة؟" },
        a: {
          en: "Absolutely. Data security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and follow best practices in data protection. Your data is stored securely and never shared with third parties.",
          ar: "بالتأكيد. أمن البيانات هو أولويتنا القصوى. نستخدم تشفيراً بمستوى المؤسسات وبنية سحابية آمنة ونتبع أفضل الممارسات في حماية البيانات. بياناتك مخزنة بشكل آمن ولا تُشارك مع أطراف ثالثة.",
        },
      },
      {
        q: { en: "How can I request a demo?", ar: "كيف أطلب عرضاً توضيحياً؟" },
        a: {
          en: "Simply visit our Contact page and fill out the form. Our team will reach out to schedule a personalized demo based on your needs and industry.",
          ar: "ببساطة قم بزيارة صفحة التواصل واملأ النموذج. سيتواصل معك فريقنا لتحديد موعد عرض توضيحي مخصص بناءً على احتياجاتك وقطاعك.",
        },
      },
    ],
  },
  {
    id: "hsse",
    title: { en: "Zerisks", ar: "زي ريسك" },
    icon: Shield,
    items: [
      {
        q: { en: "What does Zerisks cover?", ar: "ماذا يغطي زي ريسك؟" },
        a: {
          en: "Zerisks is a comprehensive safety management system covering incident reporting, work permit management, risk assessments, safety inspections, training tracking, and real-time analytics dashboards.",
          ar: "زي ريسك هو نظام شامل لإدارة السلامة يغطي تقارير الحوادث وإدارة تصاريح العمل وتقييم المخاطر وجولات التفتيش وتتبع التدريب ولوحات تحليلات فورية.",
        },
      },
      {
        q: { en: "Does it comply with Saudi safety regulations?", ar: "هل يتوافق مع أنظمة السلامة السعودية؟" },
        a: {
          en: "Yes, Zerisks is designed to align with Saudi labor law requirements and international safety standards like OSHA and ISO 45001, helping you maintain compliance effortlessly.",
          ar: "نعم، زي ريسك مصمم ليتوافق مع متطلبات نظام العمل السعودي والمعايير الدولية مثل OSHA و ISO 45001، مما يساعدك على الامتثال بسهولة.",
        },
      },
      {
        q: { en: "Can field workers use it on mobile?", ar: "هل يمكن لعمال الميدان استخدامه من الجوال؟" },
        a: {
          en: "Absolutely. Zerisks is fully responsive and works on any device — mobile, tablet, or desktop — so field workers can report incidents and complete inspections directly from the site.",
          ar: "بالتأكيد. زي ريسك يعمل على جميع الأجهزة — جوال أو تابلت أو كمبيوتر — مما يتيح لعمال الميدان تسجيل الحوادث وإتمام التفتيش من الموقع مباشرة.",
        },
      },
    ],
  },
  {
    id: "legal",
    title: { en: "aldalyel", ar: "الدليل" },
    icon: Scale,
    items: [
      {
        q: { en: "What can aldalyel do for my firm?", ar: "ماذا يمكن أن يقدم الدليل لمكتبي؟" },
        a: {
          en: "aldalyel helps law firms and legal departments manage cases, track deadlines, organize documents, automate workflows, and generate reports — all from one unified platform powered by AI.",
          ar: "الدليل يساعد مكاتب المحاماة والإدارات القانونية في إدارة القضايا وتتبع المواعيد وتنظيم المستندات وأتمتة سير العمل وإنشاء التقارير — كل ذلك من منصة واحدة مدعومة بالذكاء الاصطناعي.",
        },
      },
      {
        q: { en: "Does it support Arabic legal documents?", ar: "هل يدعم المستندات القانونية العربية؟" },
        a: {
          en: "Yes, aldalyel fully supports Arabic and English documents, with RTL layout and bilingual templates designed for the Saudi legal context.",
          ar: "نعم، الدليل يدعم المستندات العربية والإنجليزية بالكامل، مع تخطيط من اليمين لليسار وقوالب ثنائية اللغة مصممة للسياق القانوني السعودي.",
        },
      },
      {
        q: { en: "Can multiple lawyers collaborate on the same case?", ar: "هل يمكن لعدة محامين التعاون على نفس القضية؟" },
        a: {
          en: "Yes, aldalyel supports team collaboration with role-based access. Multiple team members can work on the same case while maintaining proper access controls and audit trails.",
          ar: "نعم، يدعم الدليل التعاون الجماعي مع صلاحيات حسب الدور. يمكن لعدة أعضاء العمل على نفس القضية مع الحفاظ على ضوابط الوصول وسجل المراجعة.",
        },
      },
    ],
  },
  {
    id: "tasks",
    title: { en: "Nexdo", ar: "نكست دو" },
    icon: CheckSquare,
    items: [
      {
        q: { en: "How is Nexdo different from other project management tools?", ar: "كيف يختلف نكست دو عن أدوات إدارة المشاريع الأخرى؟" },
        a: {
          en: "Nexdo is built specifically for enterprises in the region. It supports Arabic, manages portfolios and programs (not just projects), includes automated follow-ups, and provides executive-level dashboards for full operational visibility.",
          ar: "نكست دو مصمم خصيصاً للمؤسسات في المنطقة. يدعم العربية ويدير المحافظ والبرامج (وليس المشاريع فقط)، ويتضمن متابعات آلية ولوحات تحكم تنفيذية لرؤية تشغيلية كاملة.",
        },
      },
      {
        q: { en: "Can I track team performance and deadlines?", ar: "هل يمكنني تتبع أداء الفريق والمواعيد النهائية؟" },
        a: {
          en: "Yes, Nexdo provides real-time dashboards showing task completion rates, team workload, overdue items, and progress across all projects and portfolios.",
          ar: "نعم، يوفر نكست دو لوحات تحكم فورية تعرض معدلات إنجاز المهام وأعباء عمل الفريق والمهام المتأخرة والتقدم عبر جميع المشاريع والمحافظ.",
        },
      },
      {
        q: { en: "Does it support Kanban and Gantt views?", ar: "هل يدعم عرض كانبان وجانت؟" },
        a: {
          en: "Yes, Nexdo offers multiple views including Kanban boards, Gantt charts, list views, and calendar views to suit different work styles and preferences.",
          ar: "نعم، يقدم نكست دو عروضاً متعددة تشمل لوحات كانبان ومخططات جانت وعرض القوائم والتقويم لتناسب أساليب العمل المختلفة.",
        },
      },
    ],
  },
  {
    id: "booking",
    title: { en: "Nzom Booking", ar: "نزوم الحجوزات" },
    icon: CalendarDays,
    items: [
      {
        q: { en: "What types of businesses can use Nzom Booking?", ar: "ما أنواع الأعمال التي يمكنها استخدام نزوم الحجوزات؟" },
        a: {
          en: "Nzom Booking is ideal for clinics, salons, consulting offices, training centers, coworking spaces, and any service-based business that manages appointments and schedules.",
          ar: "نزوم الحجوزات مثالي للعيادات والصالونات ومكاتب الاستشارات ومراكز التدريب ومساحات العمل المشتركة وأي عمل خدمي يدير مواعيد وجداول.",
        },
      },
      {
        q: { en: "Does it support ZATCA e-invoicing?", ar: "هل يدعم الفوترة الإلكترونية لهيئة الزكاة؟" },
        a: {
          en: "Yes, Nzom Booking includes built-in ZATCA-compliant e-invoicing, so you can issue electronic invoices that meet Saudi regulatory requirements directly from the platform.",
          ar: "نعم، يتضمن نزوم الحجوزات فوترة إلكترونية متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك، مما يتيح لك إصدار فواتير إلكترونية مباشرة من المنصة.",
        },
      },
      {
        q: { en: "Can customers book online by themselves?", ar: "هل يمكن للعملاء الحجز أونلاين بأنفسهم؟" },
        a: {
          en: "Yes, Nzom Booking provides a customer-facing booking page where clients can view available slots, select services, and book appointments 24/7 without calling or messaging.",
          ar: "نعم، يوفر نزوم الحجوزات صفحة حجز للعملاء يمكنهم من خلالها عرض الأوقات المتاحة واختيار الخدمات وحجز المواعيد على مدار الساعة بدون اتصال أو رسائل.",
        },
      },
    ],
  },
];

const FAQ = () => {
  const { language, t } = useLanguage();
  const isAr = language === "ar";
  const [activeSection, setActiveSection] = useState("general");

  const currentSection = faqSections.find((s) => s.id === activeSection) || faqSections[0];

  // Inject FAQ JSON-LD structured data
  useEffect(() => {
    const allItems = faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q.en,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a.en,
        },
      }))
    );

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allItems,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify(jsonLd);

    // Remove existing if any
    document.getElementById("faq-jsonld")?.remove();
    document.head.appendChild(script);

    return () => {
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="ai-gradient-bg dot-pattern py-24 relative overflow-hidden">
        <ParticleField className="absolute inset-0 opacity-30" />
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-secondary/10 blur-3xl animate-float" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4" />
              {isAr ? "مركز المساعدة" : "Help Center"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isAr
                ? "إجابات على أكثر الأسئلة شيوعاً حول مختبرات الأنظمة وأنظمتنا"
                : "Answers to the most common questions about Nzom Labs and our systems"}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Section Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {faqSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-secondary text-secondary-foreground shadow-md"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {section.title[language]}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Accordion */}
          <ScrollReveal>
            <Accordion type="single" collapsible className="space-y-3">
              {currentSection.items.map((item, idx) => (
                <AccordionItem
                  key={`${currentSection.id}-${idx}`}
                  value={`${currentSection.id}-${idx}`}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-foreground font-semibold text-base hover:no-underline py-5">
                    {item.q[language]}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a[language]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {isAr ? "لم تجد إجابة لسؤالك؟" : "Didn't find your answer?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isAr
                ? "تواصل معنا وسيقوم فريقنا بالرد عليك في أقرب وقت"
                : "Reach out to us and our team will get back to you shortly"}
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8">
              <Link to="/contact">
                {isAr ? "تواصل معنا" : "Contact Us"}
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;