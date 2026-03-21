import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Cloud, Cpu, Layers, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";

const About = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center ai-gradient-bg dot-pattern overflow-hidden">
        <ParticleField count={50} className="absolute inset-0" />
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-[hsl(var(--glow-purple))] opacity-[0.08] blur-[100px] animate-float-slow" />
        <div className="absolute bottom-10 right-[15%] w-60 h-60 rounded-full bg-[hsl(var(--glow-accent))] opacity-[0.06] blur-[80px] animate-float-reverse" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{language === "ar" ? "تعرّف علينا" : "Get to Know Us"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {language === "ar" ? (
                <>من <span className="text-gradient">نحن</span></>
              ) : (
                <>About <span className="text-gradient">Nzom Labs</span></>
              )}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {language === "ar" ? "مختبرات الأنظمة – استوديو تقني سعودي" : "A Saudi technology studio building enterprise SaaS systems"}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background grid-pattern relative">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <ScrollReveal>
            <div className="bento-card p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.story.title")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("about.story.text")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_30%_50%,hsl(var(--glow-primary)/0.08),transparent)]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="bento-card p-8 h-full shimmer-border">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-5">
                  <Eye className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{t("about.vision.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.vision.text")}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bento-card p-8 h-full shimmer-border">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5">
                  <Target className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{t("about.mission.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.mission.text")}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background dot-pattern relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              {language === "ar" ? "التقنيات" : "Technology Stack"}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: language === "ar" ? "بنية سحابية" : "Cloud Infrastructure", desc: language === "ar" ? "بنية تحتية سحابية حديثة وآمنة" : "Modern and secure cloud infrastructure", color: "text-secondary" },
              { icon: Layers, title: language === "ar" ? "بنية SaaS قابلة للتوسع" : "Scalable SaaS Architecture", desc: language === "ar" ? "أنظمة متعددة المستأجرين مصممة للنمو" : "Multi-tenant systems designed for growth", color: "text-accent" },
              { icon: Cpu, title: language === "ar" ? "أتمتة بالذكاء الاصطناعي" : "AI-Driven Automation", desc: language === "ar" ? "حلول ذكية لأتمتة العمليات" : "Smart solutions for process automation", color: "text-[hsl(var(--glow-purple))]" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="bento-card p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-card/80 border border-border/50 flex items-center justify-center animate-pulse-glow">
                    <item.icon className={`h-8 w-8 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;