import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle, Users, Puzzle, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  { icon: CheckCircle, titleKey: "why.enterprise.title", descKey: "why.enterprise.desc" },
  { icon: Users, titleKey: "why.compliance.title", descKey: "why.compliance.desc" },
  { icon: Puzzle, titleKey: "why.modular.title", descKey: "why.modular.desc" },
  { icon: ShieldCheck, titleKey: "why.cloud.title", descKey: "why.cloud.desc" },
];

const WhyNuzom = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 bg-muted/50 relative ai-gradient-bg">
      <div className="absolute inset-0 dot-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 text-gradient">{t("why.title")}</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">{t("why.subtitle")}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="bento-card p-6 text-center group">
                <div className="relative w-16 h-16 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors animate-glow-pulse" />
                  <div className="relative w-16 h-16 rounded-2xl bg-muted border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(item.descKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNuzom;
