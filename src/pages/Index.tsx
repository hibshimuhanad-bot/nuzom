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
    <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-hero dot-pattern overflow-hidden">
      {/* Subtle mesh layer */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-70" />

      {/* Particle field — minimal */}
      <Suspense fallback={null}>
        <ParticleField count={24} />
      </Suspense>

      {/* Restrained floating shapes — neutral only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[12%] start-[8%] w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute top-[58%] end-[12%] w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[22%] end-[10%] w-20 h-20 border border-border rounded-2xl rotate-12 animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[28%] start-[8%] w-16 h-16 border border-border rounded-xl -rotate-12 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center" duration={800} startVisible>
          {/* Minimal badge — neutral */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/60 backdrop-blur-sm mb-8">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium text-muted-foreground">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 text-foreground tracking-tight">
            {t("hero.title")}
          </h1>

          <div className="hairline w-32 mx-auto mb-6 md:mb-8" />

          <p className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-xl font-semibold shadow-accent-glow transition-all hover:-translate-y-0.5">
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {t("hero.explore")}
                <DirectionalArrow className="h-4 w-4 ms-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border bg-background/40 text-foreground hover:bg-foreground/[0.04] hover:border-foreground/40 px-8 rounded-xl backdrop-blur-sm transition-all">
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
