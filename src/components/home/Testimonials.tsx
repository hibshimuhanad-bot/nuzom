import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: { en: "Eng. Khalid Al-Rashidi", ar: "م. خالد الراشدي" },
    role: { en: "VP of Operations, Al-Manar Group", ar: "نائب رئيس العمليات، مجموعة المنار" },
    quote: { en: "Zerisks transformed our safety compliance workflow. Incident reporting that used to take days now happens in real-time.", ar: "زي ريسك حوّل سير عمل الامتثال بالسلامة لدينا. الإبلاغ عن الحوادث الذي كان يستغرق أياماً أصبح يحدث في الوقت الفعلي." },
  },
  {
    name: { en: "Sarah Al-Otaibi", ar: "سارة العتيبي" },
    role: { en: "Legal Director, Horizon Law Firm", ar: "المدير القانوني، مكتب هورايزن للمحاماة" },
    quote: { en: "aldalyel streamlined our entire case management process. We've seen a 40% improvement in case resolution time.", ar: "الدليل نظّم عملية إدارة القضايا بالكامل. شهدنا تحسناً بنسبة 40% في وقت حل القضايا." },
  },
  {
    name: { en: "Mohammed Al-Harbi", ar: "محمد الحربي" },
    role: { en: "COO, Desert Star Construction", ar: "مدير العمليات، شركة نجم الصحراء للمقاولات" },
    quote: { en: "The integration between Nexdo and Booking modules gave us unprecedented visibility across our 2,000+ workforce.", ar: "التكامل بين نكست دو ونظام الحجوزات أعطانا رؤية غير مسبوقة عبر أكثر من ٢٬٠٠٠ موظف." },
  },
  {
    name: { en: "Dr. Nora Al-Zahrani", ar: "د. نورا الزهراني" },
    role: { en: "IT Manager, Riyadh Metro Project", ar: "مدير تقنية المعلومات، مشروع مترو الرياض" },
    quote: { en: "Nzom Booking reduced our scheduling conflicts by 60% with smart room allocation and automated confirmations.", ar: "نزوم الحجوزات خفّض تعارضات الجدولة بنسبة 60% بفضل التخصيص الذكي للقاعات والتأكيدات الآلية." },
  },
];

const Testimonials = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("testimonials.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("testimonials.subtitle")}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-20">
          {testimonials.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bento-card p-6 h-full flex flex-col group">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  "{item.quote[language]}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border/20">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-foreground font-bold text-sm">
                    {item.name[language].charAt(0)}
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{item.name[language]}</p>
                    <p className="text-muted-foreground text-xs">{item.role[language]}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="text-sm text-muted-foreground uppercase tracking-widest text-center mt-8">
            {t("testimonials.trust")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;