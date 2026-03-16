import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, MessageCircle, Rocket } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { icon: Sparkles, numAr: "١", numEn: "1", titleKey: "howto.step1.title", descKey: "howto.step1.desc" },
  { icon: MessageCircle, numAr: "٢", numEn: "2", titleKey: "howto.step2.title", descKey: "howto.step2.desc" },
  { icon: Rocket, numAr: "٣", numEn: "3", titleKey: "howto.step3.title", descKey: "howto.step3.desc" },
];

const HowToStart = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-28 bg-muted/30 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("howto.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t("howto.subtitle")}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bento-card p-8 text-center group relative">
                <div className="text-4xl font-extrabold text-primary/20 mb-4">{language === "ar" ? step.numAr : step.numEn}</div>
                <div className="relative w-14 h-14 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors animate-glow-pulse" />
                  <div className="relative w-14 h-14 rounded-2xl bg-muted border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStart;