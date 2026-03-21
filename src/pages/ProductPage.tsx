import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, Sparkles, GitBranch, Users, BarChart3, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import tasksScreenshot from "@/assets/screenshots/tasks-product-shot.png";

const screenshotMap: Record<string, string> = {
  tasks: tasksScreenshot,
};

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">{t("product.notfound")}</h1>
            <Button asChild><Link to="/">{t("product.gohome")}</Link></Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero — Clean, focused */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center ai-gradient-bg overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="max-w-3xl mx-auto text-center" duration={800}>
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
              <product.icon className="h-7 w-7 text-foreground" />
            </div>
            <p className="text-accent text-base md:text-lg font-semibold mb-2">{product.emotionalHook[language]}</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-gradient drop-shadow-sm">{product.name[language]}</h1>
            <p className="text-lg md:text-xl text-accent mb-2">{product.tagline[language]}</p>
            <p className="text-foreground/70 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{product.description[language]}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn rounded-xl">
              <Link to="/contact">
                {t("product.demo")}
                {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Screenshot Preview */}
      {screenshotMap[product.slug] && (
        <section className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gradient-blue">{t("product.preview")}</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="max-w-5xl mx-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/30 transition-transform duration-500 hover:scale-[1.02] cursor-zoom-in">
                      <img
                        src={screenshotMap[product.slug]}
                        alt={`${product.name[language]} dashboard`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-background/95 backdrop-blur-sm border-border/50">
                    <img
                      src={screenshotMap[product.slug]}
                      alt={`${product.name[language]} dashboard`}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Problem / Solution — Story */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <ScrollReveal>
            <div className="bento-card p-6 md:p-10 mb-6">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <span className="text-destructive text-lg">⚡</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t("product.problem")}</h2>
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">{product.problem[language]}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="bento-card p-6 md:p-10 border-accent/20 bg-accent/5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-accent text-lg">✓</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t("product.solution")}</h2>
              <p className="text-foreground/75 leading-relaxed text-base md:text-lg">{product.solution[language]}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Imagine Section */}
      <section className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <ScrollReveal>
            <div className="text-center mb-5">
              <Sparkles className="h-7 w-7 text-accent mx-auto mb-3" />
              <h2 className="text-2xl md:text-3xl font-bold text-gradient-blue">{t("product.imagine")}</h2>
            </div>
            <p className="text-foreground/75 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto">
              {product.imagineDay[language]}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 md:py-20 bg-background relative">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-gradient-blue">{t("product.features")}</h2>
            <p className="text-foreground/70 text-center mb-10 max-w-lg mx-auto">{product.tagline[language]}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bento-card p-5 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-muted border border-border/50 flex items-center justify-center mb-3 group-hover:border-primary/30 transition-colors">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1.5 text-sm">{feature.title[language]}</h3>
                  <p className="text-foreground/65 text-sm leading-relaxed">{feature.description[language]}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Merged: Workflow + RBAC + Analytics + Security — compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mt-10">
            {[
              { icon: GitBranch, title: t("product.workflow"), desc: product.workflowDesc[language] },
              { icon: Users, title: t("product.rbac"), desc: product.rbacDesc[language] },
              { icon: BarChart3, title: t("product.analytics"), desc: product.analyticsDesc[language] },
              { icon: ShieldCheck, title: t("product.security"), desc: product.securityDesc[language] },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bento-card p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-muted border border-border/50 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                      <p className="text-foreground/65 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 relative ai-gradient-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <p className="text-accent text-base font-semibold mb-2">{product.emotionalHook[language]}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">{t("cta.title")}</h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 glow-btn rounded-xl">
              <Link to="/contact">
                {t("product.demo")}
                {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
