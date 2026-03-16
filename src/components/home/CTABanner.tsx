import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTABanner = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-28 relative ai-gradient-bg overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">{t("cta.title")}</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 glow-btn animate-pulse-glow rounded-xl">
            <Link to="/contact">
              {t("cta.button")}
              {language === "ar" ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
            </Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTABanner;
