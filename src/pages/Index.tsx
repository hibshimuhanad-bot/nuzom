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
      {/* Mesh gradient layer */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />

      {/* Particle field */}
      <Suspense fallback={null}>
        <ParticleField count={40} />
      </Suspense>

      {/* Floating orbs — navy + gold */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        <div className="absolute top-[12%] start-[8%] w-72 h-72 rounded-full bg-primary/12 blur-3xl animate-float" />
        <div className="absolute top-[58%] end-[12%] w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[30%] end-[28%] w-56 h-56 rounded-full bg-primary-glow/10 blur-3xl animate-float-reverse" style={{ animationDelay: "4s" }} />
        {/* Gold sparkles */}
        <div className="absolute top-[20%] start-[40%] w-2 h-2 rounded-full bg-accent/70 animate-glow-pulse shadow-gold-glow" />
        <div className="absolute top-[72%] start-[25%] w-1.5 h-1.5 rounded-full bg-accent/60 animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] end-[20%] w-2 h-2 rounded-full bg-accent/50 animate-glow-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[25%] end-[40%] w-1 h-1 rounded-full bg-accent/70 animate-glow-pulse" style={{ animationDelay: "3s" }} />
        {/* Geometric shapes with gold tint */}
        <div className="absolute top-[22%] end-[10%] w-20 h-20 border border-accent/20 rounded-2xl rotate-12 animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[28%] start-[8%] w-16 h-16 border border-accent/20 rounded-xl -rotate-12 animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="max-w-4xl mx-auto text-center" duration={800} startVisible>
          {/* Gold accent badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-8 shadow-premium">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium text-foreground/80">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] mb-6 md:mb-8 text-gradient">
            {t("hero.title")}
          </h1>

          {/* Gold hairline divider */}
          <div className="hairline-gold w-32 mx-auto mb-6 md:mb-8" />

          <p className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-gold text-primary hover:opacity-95 px-8 rounded-xl font-bold shadow-gold-glow transition-all hover:-translate-y-0.5 hover:shadow-premium">
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}>
                {t("hero.explore")}
                <DirectionalArrow className="h-4 w-4 ms-2" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent/40 bg-background/40 text-foreground hover:bg-accent/10 hover:border-accent/70 px-8 rounded-xl backdrop-blur-sm transition-all">
              <Link to="/contact">
                <Play className="h-4 w-4 me-2 text-accent" />
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
