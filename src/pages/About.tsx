import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target, Cloud, Cpu, Layers } from "lucide-react";

const About = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {language === "ar" ? "من نحن" : "About Nuzom Lab"}
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            {language === "ar" ? "نُظُم لاب – استوديو تقني سعودي" : "A Saudi technology studio building enterprise SaaS systems"}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">{t("about.story.title")}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("about.story.text")}</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <Eye className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{t("about.vision.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.vision.text")}</p>
              </CardContent>
            </Card>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <Target className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{t("about.mission.title")}</h3>
                <p className="text-muted-foreground leading-relaxed">{t("about.mission.text")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {language === "ar" ? "التقنيات" : "Technology Stack"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: Cloud, title: language === "ar" ? "بنية سحابية" : "Cloud Infrastructure", desc: language === "ar" ? "بنية تحتية سحابية حديثة وآمنة" : "Modern and secure cloud infrastructure" },
              { icon: Layers, title: language === "ar" ? "بنية SaaS قابلة للتوسع" : "Scalable SaaS Architecture", desc: language === "ar" ? "أنظمة متعددة المستأجرين مصممة للنمو" : "Multi-tenant systems designed for growth" },
              { icon: Cpu, title: language === "ar" ? "أتمتة بالذكاء الاصطناعي" : "AI-Driven Automation", desc: language === "ar" ? "حلول ذكية لأتمتة العمليات" : "Smart solutions for process automation" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
