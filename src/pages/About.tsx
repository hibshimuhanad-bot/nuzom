import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Eye, Target, Cloud, Cpu, Layers, Sparkles, Zap, Shield, Lightbulb, HeadphonesIcon, ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t, language } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  const values = [
    { icon: Zap, titleKey: "about.values.simplicity.title", descKey: "about.values.simplicity.desc", color: "text-secondary" },
    { icon: Shield, titleKey: "about.values.security.title", descKey: "about.values.security.desc", color: "text-accent" },
    { icon: Lightbulb, titleKey: "about.values.innovation.title", descKey: "about.values.innovation.desc", color: "text-[hsl(var(--glow-purple))]" },
    { icon: HeadphonesIcon, titleKey: "about.values.support.title", descKey: "about.values.support.desc", color: "text-secondary" },
  ];

  const stats = [
    { value: "4", label: t("about.stats.systems") },
    { value: "5+", label: t("about.stats.sectors") },
    { value: t("about.stats.activation.value"), label: t("about.stats.activation") },
    { value: "24/7", label: t("about.stats.support") },
  ];

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
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">{t("about.story.text1")}</p>
              <p className="text-muted-foreground text-lg leading-relaxed">{t("about.story.text2")}</p>
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

      {/* Values */}
      <section className="py-20 bg-background dot-pattern relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t("about.values.title")}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bento-card p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-card/80 border border-border/50 flex items-center justify-center mb-4 animate-pulse-glow">
                    <item.icon className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t(item.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_400px_at_50%_50%,hsl(var(--glow-accent)/0.06),transparent)]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t("about.stats.title")}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bento-card p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background grid-pattern relative">
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

      {/* Our Products */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_70%_50%,hsl(var(--glow-primary)/0.06),transparent)]" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-3">{t("about.products.title")}</h2>
            <p className="text-muted-foreground text-center mb-12">{t("about.products.subtitle")}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 100}>
                <Link to={`/products/${product.slug}`}>
                  <div className="bento-card p-6 h-full hover:border-primary/30 transition-colors group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center`} style={{ backgroundColor: `${product.color}15` }}>
                        <product.icon className="h-6 w-6" style={{ color: product.color }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{product.name[language]}</h3>
                        <p className="text-muted-foreground text-sm">{product.tagline[language]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-primary group-hover:gap-2 transition-all">
                      <span>{t("ecosystem.learn_more")}</span>
                      <ArrowIcon className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background dot-pattern relative">
        <div className="container mx-auto px-4 max-w-2xl text-center relative z-10">
          <ScrollReveal>
            <div className="bento-card p-10 md:p-14 shimmer-border">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("cta.title")}</h2>
              <p className="text-muted-foreground mb-8">{t("cta.subtitle")}</p>
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact">
                  {t("cta.button")}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
