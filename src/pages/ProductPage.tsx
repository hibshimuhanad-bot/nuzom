import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, GitBranch, Users, BarChart3, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button asChild><Link to="/">Go Home</Link></Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center ai-gradient-bg dot-pattern overflow-hidden">
        <ParticleField count={50} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-accent/8 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-[hsl(270_80%_60%/0.06)] blur-3xl animate-float-reverse" style={{ animationDelay: "4s" }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center" duration={800}>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
              <product.icon className="h-8 w-8 text-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gradient">{product.name[language]}</h1>
            <p className="text-xl text-accent mb-3">{product.tagline[language]}</p>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">{product.description[language]}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn animate-pulse-glow rounded-xl">
              <Link to="/contact">
                {t("product.demo")}
                <ArrowRight className="h-4 w-4 ms-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="bento-card p-8 h-full">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                  <span className="text-destructive text-lg">⚡</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("product.problem")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{product.problem[language]}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bento-card p-8 h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent text-lg">✓</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">{t("product.solution")}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{product.solution[language]}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/50 relative ai-gradient-bg">
        <div className="absolute inset-0 dot-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-blue">{t("product.features")}</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">{product.tagline[language]}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bento-card p-6 h-full group">
                  <div className="relative w-12 h-12 mb-4">
                    <div className="absolute inset-0 rounded-xl bg-primary/15 blur-lg group-hover:bg-primary/25 transition-colors animate-glow-pulse" />
                    <div className="relative w-12 h-12 rounded-xl bg-muted border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title[language]}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description[language]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient-blue">{t("product.dashboard")}</h2>
            <div className="bento-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
              </div>
              <div className="p-8 flex items-center justify-center min-h-[300px] relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/3 to-transparent" />
                <div className="text-center text-muted-foreground relative z-10">
                  <Monitor className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">{product.name[language]} Dashboard Preview</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-muted/50 relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 rounded-xl bg-primary/15 blur-lg animate-glow-pulse" />
                <div className="relative w-12 h-12 rounded-xl bg-muted border border-border/50 flex items-center justify-center">
                  <GitBranch className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.workflow")}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.workflowDesc[language]}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bento-card p-8">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold text-sm group-hover:bg-primary/20 transition-colors">{step}</div>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden border border-border/30">
                        <div className="h-full rounded-full bg-gradient-to-r from-primary/60 to-accent/40" style={{ width: `${100 - step * 15}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RBAC */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left" className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-3">
                {["Admin", "Manager", "User", "Viewer"].map((role, i) => (
                  <div key={role} className="bento-card p-5 text-center group">
                    <div className="relative w-10 h-10 mx-auto mb-2">
                      <div className="absolute inset-0 rounded-full bg-accent/10 blur-md group-hover:bg-accent/20 transition-colors" />
                      <div className="relative w-10 h-10 rounded-full bg-muted border border-border/50 flex items-center justify-center">
                        <Users className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-foreground">{role}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150} className="order-1 md:order-2">
              <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 rounded-xl bg-primary/15 blur-lg animate-glow-pulse" />
                <div className="relative w-12 h-12 rounded-xl bg-muted border border-border/50 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.rbac")}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.rbacDesc[language]}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-24 bg-muted/50 relative">
        <div className="absolute inset-0 dot-pattern" />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="relative w-12 h-12 mb-4">
                <div className="absolute inset-0 rounded-xl bg-primary/15 blur-lg animate-glow-pulse" />
                <div className="relative w-12 h-12 rounded-xl bg-muted border border-border/50 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.analytics")}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.analyticsDesc[language]}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bento-card p-6">
                <div className="flex items-end gap-2 h-36">
                  {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-muted border border-border/20" style={{ height: `${h}%` }}>
                      <div className="w-full rounded-t bg-gradient-to-t from-primary/50 to-accent/30 transition-all duration-500 hover:from-primary/70 hover:to-accent/50" style={{ height: `${h * 0.6}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <ScrollReveal>
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 rounded-2xl bg-accent/15 blur-xl animate-glow-pulse" />
              <div className="relative w-16 h-16 rounded-2xl bg-muted border border-border/50 flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 text-accent" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("product.security")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">{product.securityDesc[language]}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative ai-gradient-bg overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">{t("cta.title")}</h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 glow-btn animate-pulse-glow rounded-xl">
              <Link to="/contact">
                {t("product.demo")}
                <ArrowRight className="h-4 w-4 ms-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
