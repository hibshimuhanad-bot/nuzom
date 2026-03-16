import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, Scale, Briefcase, Warehouse, Landmark } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  { icon: Building2, key: "industries.construction" },
  { icon: Scale, key: "industries.legal" },
  { icon: Briefcase, key: "industries.corporate" },
  { icon: Warehouse, key: "industries.facility" },
  { icon: Landmark, key: "industries.government" },
];

const Industries = () => {
  const { t } = useLanguage();

  return (
    <section className="py-28 bg-background relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16 text-gradient-blue">{t("industries.title")}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bento-card flex flex-col items-center p-8 group cursor-default">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-accent/10 blur-lg group-hover:bg-accent/20 transition-colors" />
                  <div className="relative w-14 h-14 rounded-full bg-muted border border-border/50 flex items-center justify-center group-hover:border-accent/30 transition-colors">
                    <item.icon className="h-7 w-7 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <span className="text-sm font-medium text-foreground text-center">{t(item.key)}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
