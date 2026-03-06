import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Scale, Briefcase, Warehouse, Landmark, Server, ShieldCheck, Puzzle, Cloud } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Hero = () => {
  const { t, language } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/3 animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rotate-45 bg-accent/5 animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-10 left-1/4 w-2 h-2 rounded-full bg-accent/40" />
        <div className="absolute bottom-32 right-1/3 w-3 h-3 rounded-full bg-accent/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center" duration={800}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 animate-pulse-glow">
              <Link to="/products/hsse">
                {t("hero.explore")}
                <ArrowRight className="h-4 w-4 ms-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8">
              <Link to="/contact">
                <Play className="h-4 w-4 me-2" />
                {t("hero.demo")}
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("ecosystem.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("ecosystem.subtitle")}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 100}>
              <Link to={`/products/${product.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{product.name[language]}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{product.tagline[language]}</p>
                  </CardContent>
                </Card>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyNuzom = () => {
  const { t } = useLanguage();
  const items = [
    { icon: Server, titleKey: "why.enterprise.title", descKey: "why.enterprise.desc" },
    { icon: ShieldCheck, titleKey: "why.compliance.title", descKey: "why.compliance.desc" },
    { icon: Puzzle, titleKey: "why.modular.title", descKey: "why.modular.desc" },
    { icon: Cloud, titleKey: "why.cloud.title", descKey: "why.cloud.desc" },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">{t("why.title")}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-secondary" />
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

const Industries = () => {
  const { t } = useLanguage();
  const items = [
    { icon: Building2, key: "industries.construction" },
    { icon: Scale, key: "industries.legal" },
    { icon: Briefcase, key: "industries.corporate" },
    { icon: Warehouse, key: "industries.facility" },
    { icon: Landmark, key: "industries.government" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">{t("industries.title")}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="flex flex-col items-center p-6 rounded-xl bg-muted hover:bg-secondary/5 transition-colors group">
                <item.icon className="h-10 w-10 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground text-center">{t(item.key)}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t("cta.title")}</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
            <Link to="/contact">
              {t("cta.button")}
              <ArrowRight className="h-4 w-4 ms-2" />
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Ecosystem />
      <WhyNuzom />
      <Industries />
      <CTABanner />
    </Layout>
  );
};

export default Index;
