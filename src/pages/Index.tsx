import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Scale, Briefcase, Warehouse, Landmark, Server, ShieldCheck, Puzzle, Cloud, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";

/* ════════════════════════════════════════════
   HERO — AI gradient mesh + floating orbs
   ════════════════════════════════════════════ */
const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center ai-gradient-bg dot-pattern overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute top-[60%] right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[30%] right-[30%] w-48 h-48 rounded-full bg-[hsl(270_80%_60%/0.08)] blur-3xl animate-float-reverse" style={{ animationDelay: "4s" }} />
        {/* Small particles */}
        <div className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-accent/50 animate-glow-pulse" />
        <div className="absolute top-[70%] left-[25%] w-1.5 h-1.5 rounded-full bg-primary/50 animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] right-[20%] w-2 h-2 rounded-full bg-accent/40 animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[25%] right-[40%] w-1 h-1 rounded-full bg-primary/60 animate-glow-pulse" style={{ animationDelay: "3s" }} />
        {/* Geometric shapes */}
        <div className="absolute top-[25%] right-[12%] w-20 h-20 border border-primary/10 rounded-2xl rotate-12 animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[8%] w-16 h-16 border border-accent/10 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center" duration={800}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              {t("hero.subtitle").slice(0, 40)}…
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 text-gradient">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn animate-pulse-glow rounded-xl">
              <Link to="/products/hsse">
                {t("hero.explore")}
                <ArrowRight className="h-4 w-4 ms-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/60 text-foreground hover:bg-muted/50 px-8 rounded-xl backdrop-blur-sm">
              <Link to="/contact">
                <Play className="h-4 w-4 me-2" />
                {t("hero.demo")}
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

/* ════════════════════════════════════════════
   BENTO GRID — Products in asymmetric layout
   ════════════════════════════════════════════ */
const BentoGrid = () => {
  const { t, language } = useLanguage();

  // Bento sizing: first card is large (2×2), rest are 1×1
  const bentoClasses = [
    "sm:col-span-2 sm:row-span-2", // featured
    "",
    "",
    "",
    "",
  ];

  return (
    <section className="py-28 bg-background relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-blue">{t("ecosystem.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("ecosystem.subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-4 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 80} className={bentoClasses[i] || ""}>
              <Link to={`/products/${product.slug}`} className="block h-full">
                <div className={`bento-card p-6 h-full flex flex-col justify-between group relative overflow-hidden ${i === 0 ? "min-h-[320px]" : ""}`}>
                  {/* Inner glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <product.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className={`font-bold text-foreground mb-2 ${i === 0 ? "text-2xl" : "text-lg"}`}>
                      {product.name[language]}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${i === 0 ? "text-base" : "text-sm"}`}>
                      {product.tagline[language]}
                    </p>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{language === "ar" ? "اكتشف المزيد" : "Learn more"}</span>
                    <ArrowRight className="h-3.5 w-3.5 ms-1" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════
   WHY NUZOM — Glowing icon grid
   ════════════════════════════════════════════ */
const WhyNuzom = () => {
  const { t } = useLanguage();
  const items = [
    { icon: Server, titleKey: "why.enterprise.title", descKey: "why.enterprise.desc" },
    { icon: ShieldCheck, titleKey: "why.compliance.title", descKey: "why.compliance.desc" },
    { icon: Puzzle, titleKey: "why.modular.title", descKey: "why.modular.desc" },
    { icon: Cloud, titleKey: "why.cloud.title", descKey: "why.cloud.desc" },
  ];

  return (
    <section className="py-28 bg-muted/50 relative ai-gradient-bg">
      <div className="absolute inset-0 dot-pattern" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-4 text-gradient">{t("why.title")}</h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Enterprise-grade solutions built for scale
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="bento-card p-6 text-center group">
                {/* Icon glow */}
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

/* ════════════════════════════════════════════
   INDUSTRIES — Glass cards with hover glow
   ════════════════════════════════════════════ */
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

/* ════════════════════════════════════════════
   CTA — AI gradient mesh + shimmer button
   ════════════════════════════════════════════ */
const CTABanner = () => {
  const { t } = useLanguage();
  return (
    <section className="py-28 relative ai-gradient-bg overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      {/* Extra glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("cta.title")}</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 glow-btn animate-pulse-glow rounded-xl">
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

/* ════════════════════════════════════════════ */
const Index = () => {
  return (
    <Layout>
      <Hero />
      <BentoGrid />
      <WhyNuzom />
      <Industries />
      <CTABanner />
    </Layout>
  );
};

export default Index;
