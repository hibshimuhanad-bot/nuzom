import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, ArrowLeft, Sparkles, GitBranch, Users, BarChart3, ShieldCheck, ExternalLink, Check, ShieldCheck as ShieldBadge, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import tasksScreenshot from "@/assets/screenshots/tasks-product-shot.png";
import hsseScreenshot from "@/assets/screenshots/hsse-product-shot.png";
import legalScreenshot from "@/assets/screenshots/legal-product-shot.png";
import { logoMap } from "@/lib/productLogos";

const screenshotMap: Record<string, string> = {
  tasks: tasksScreenshot,
  hsse: hsseScreenshot,
  legal: legalScreenshot,
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
            {logoMap[product.slug] ? (
              <img
                src={logoMap[product.slug]}
                alt={`${product.name[language]} logo`}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-contain mx-auto mb-5 shadow-lg"
              />
            ) : (
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <product.icon className="h-7 w-7 text-foreground" />
              </div>
            )}

            <p className="text-primary text-base md:text-lg font-semibold mb-2">{product.emotionalHook[language]}</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-foreground">{product.name[language]}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">{product.tagline[language]}</p>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{product.description[language]}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {product.primaryCTA ? (
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn rounded-xl">
                  <a href={product.primaryCTA.href} target={product.primaryCTA.external ? "_blank" : undefined} rel={product.primaryCTA.external ? "noopener noreferrer" : undefined}>
                    {product.primaryCTA.label[language]}
                    {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn rounded-xl">
                  <Link to="/contact">
                    {t("product.demo")}
                    {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
                  </Link>
                </Button>
              )}
              {slug === "nexdo" && (
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8 border-primary/30 hover:bg-primary/10">
                  <a href="https://ptmpillare.lovable.app/" target="_blank" rel="noopener noreferrer">
                    {language === "ar" ? "جرّب الديمو" : "Try Demo"}
                    <ExternalLink className="h-4 w-4 ms-2" />
                  </a>
                </Button>
              )}
              {slug === "crm" && (
                <Button asChild size="lg" variant="outline" className="rounded-xl px-8 border-primary/30 hover:bg-primary/10">
                  <a href="https://namaacrm.app/" target="_blank" rel="noopener noreferrer">
                    {language === "ar" ? "زيارة الموقع" : "Visit Site"}
                    <ExternalLink className="h-4 w-4 ms-2" />
                  </a>
                </Button>
              )}
            </div>
            {product.trustBadges && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                {product.trustBadges.map((badge, i) => (
                  <Badge key={i} variant="outline" className="border-primary/20 bg-primary/5 text-muted-foreground font-normal py-1.5 px-3">
                    <ShieldBadge className="h-3 w-3 me-1.5 text-primary" />
                    {badge[language]}
                  </Badge>
                ))}
              </div>
            )}
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
                      loading="lazy"
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
            <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">{product.tagline[language]}</p>
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

      {/* Testimonial */}
      {product.testimonial && (
        <section className="py-14 md:py-20 bg-background relative">
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <ScrollReveal>
              <div className="bento-card p-8 md:p-12 text-center">
                <Quote className="h-8 w-8 text-primary mx-auto mb-5 opacity-60" />
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 font-medium">
                  "{product.testimonial.quote[language]}"
                </p>
                <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/20">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-foreground font-bold">
                    {product.testimonial.author[language].charAt(0)}
                  </div>
                  <div className="text-start">
                    <p className="text-foreground font-semibold text-sm">{product.testimonial.author[language]}</p>
                    <p className="text-muted-foreground text-xs">{product.testimonial.role[language]}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Pricing */}
      {product.pricing && product.pricing.length > 0 && (
        <section className="py-14 md:py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gradient-blue">
                {language === "ar" ? "أسعار بسيطة وواضحة" : "Simple, Transparent Pricing"}
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                {language === "ar" ? "ابدأ مجاناً 14 يوم — بدون بطاقة ائتمان" : "Start with a 14-day free trial — no credit card required"}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {product.pricing.map((plan, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`bento-card p-7 h-full flex flex-col ${plan.highlighted ? "border-primary/40 bg-primary/5 relative" : ""}`}>
                    {plan.highlighted && (
                      <Badge className="absolute top-4 end-4 bg-primary text-primary-foreground">
                        {language === "ar" ? "الأكثر شيوعاً" : "Most Popular"}
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name[language]}</h3>
                    <p className="text-muted-foreground text-sm mb-5">{plan.description[language]}</p>
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-extrabold text-foreground">{plan.price[language]}</span>
                      <span className="text-muted-foreground text-sm ms-2">{plan.period[language]}</span>
                    </div>
                    <ul className="space-y-3 mb-7 flex-1">
                      {plan.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{f[language]}</span>
                        </li>
                      ))}
                    </ul>
                    {product.primaryCTA && (
                      <Button asChild size="lg" className={`w-full rounded-xl ${plan.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90 glow-btn" : "bg-card border border-primary/30 text-foreground hover:bg-primary/10"}`}>
                        <a href={product.primaryCTA.href} target={product.primaryCTA.external ? "_blank" : undefined} rel={product.primaryCTA.external ? "noopener noreferrer" : undefined}>
                          {product.primaryCTA.label[language]}
                        </a>
                      </Button>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {product.faq && product.faq.length > 0 && (
        <section className="py-14 md:py-20 bg-background relative">
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <ScrollReveal className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-gradient-blue">
                {language === "ar" ? "أسئلة شائعة" : "Frequently Asked Questions"}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="bento-card p-2 md:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {product.faq.map((item, i) => (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border/30 last:border-0">
                      <AccordionTrigger className="text-start text-foreground font-semibold hover:no-underline px-3">
                        {item.question[language]}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed px-3">
                        {item.answer[language]}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 md:py-20 relative ai-gradient-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <p className="text-accent text-base font-semibold mb-2">{product.emotionalHook[language]}</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gradient">
              {product.primaryCTA
                ? (language === "ar" ? "ابدأ تنظيم عملك خلال دقائق" : "Get organized in minutes")
                : t("cta.title")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("cta.subtitle")}</p>
            {product.primaryCTA ? (
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 glow-btn rounded-xl">
                <a href={product.primaryCTA.href} target={product.primaryCTA.external ? "_blank" : undefined} rel={product.primaryCTA.external ? "noopener noreferrer" : undefined}>
                  {product.primaryCTA.label[language]}
                  {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 glow-btn rounded-xl">
                <Link to="/contact">
                  {t("product.demo")}
                  {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
                </Link>
              </Button>
            )}
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
