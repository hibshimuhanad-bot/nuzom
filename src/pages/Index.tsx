import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Play, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const ParticleField = lazy(() => import("@/components/ParticleField"));
const BentoGrid = lazy(() => import("@/components/home/BentoGrid"));
const WhyNuzom = lazy(() => import("@/components/home/WhyNuzom"));
const HowToStart = lazy(() => import("@/components/home/HowToStart"));
const Industries = lazy(() => import("@/components/home/Industries"));
const Testimonials = lazy(() => import("@/components/home/Testimonials"));
const CTABanner = lazy(() => import("@/components/home/CTABanner"));

/* ════════════════════════════════════════════
   HERO — AI gradient mesh + floating orbs
   ════════════════════════════════════════════ */
const Hero = () => {
  const { t, language } = useLanguage();
  const DirectionalArrow = language === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center ai-gradient-bg dot-pattern overflow-hidden">
      {/* Particle field */}
      <Suspense fallback={null}>
        <ParticleField count={70} />
      </Suspense>
      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
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
        <ScrollReveal className="max-w-4xl mx-auto text-center" duration={800} startVisible>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 text-gradient">
            {t("hero.title")}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn animate-pulse-glow rounded-xl">
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {t("hero.explore")}
                <DirectionalArrow className="h-4 w-4 ms-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/60 text-foreground hover:bg-muted/50 px-8 rounded-xl backdrop-blur-sm">
              <Link to="/contact">
                <Play className="h-4 w-4 me-2" />
                {t("hero.demo")}
              </Link>
            </Button>
          </div>
          <p className="mt-6 md:mt-8 text-xs md:text-sm text-muted-foreground tracking-wide">
            {t("hero.stats")}
          </p>
        </ScrollReveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

/* ════════════════════════════════════════════ */
const Index = () => {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={null}>
        <BentoGrid />
        <WhyNuzom />
        <HowToStart />
        <Industries />
        <Testimonials />
        <CTABanner />
      </Suspense>
    </Layout>
  );
};

export default Index;
