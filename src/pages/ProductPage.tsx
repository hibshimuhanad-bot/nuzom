import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Monitor, GitBranch, Users, BarChart3, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center" duration={800}>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mx-auto mb-6`}>
              <product.icon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{product.name[language]}</h1>
            <p className="text-xl text-secondary mb-3">{product.tagline[language]}</p>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">{product.description[language]}</p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link to="/contact">
                {t("product.demo")}
                <ArrowRight className="h-4 w-4 ms-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.problem")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{product.problem[language]}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.solution")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{product.solution[language]}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t("product.features")}</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="border-border/50 h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-secondary mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{feature.title[language]}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description[language]}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">{t("product.dashboard")}</h2>
            <div className="bg-muted rounded-2xl border border-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/5 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center text-muted-foreground">
                  <Monitor className="h-16 w-16 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">{product.name[language]} Dashboard Preview</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <GitBranch className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.workflow")}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.workflowDesc[language]}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-semibold text-sm">{step}</div>
                      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-secondary/40 rounded-full" style={{ width: `${100 - step * 15}%` }} />
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-3">
                {["Admin", "Manager", "User", "Viewer"].map((role) => (
                  <div key={role} className="bg-muted rounded-lg p-4 text-center">
                    <Users className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <span className="text-sm font-medium text-foreground">{role}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150} className="order-1 md:order-2">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.rbac")}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.rbacDesc[language]}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.analytics")}</h2>
              <p className="text-muted-foreground leading-relaxed">{product.analyticsDesc[language]}</p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-end gap-2 h-32">
                  {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-secondary/20 rounded-t" style={{ height: `${h}%` }}>
                      <div className="w-full bg-secondary rounded-t" style={{ height: `${h * 0.6}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("product.security")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto">{product.securityDesc[language]}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">{t("cta.title")}</h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8">
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
