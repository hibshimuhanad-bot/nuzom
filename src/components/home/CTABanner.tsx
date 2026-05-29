import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTABanner = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-28 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <div className="hairline-gold w-24 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary-foreground leading-tight">{t("cta.title")}</h2>
          <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary hover:opacity-95 px-10 rounded-xl font-bold shadow-gold-glow transition-all hover:-translate-y-0.5">
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


export default CTABanner;
