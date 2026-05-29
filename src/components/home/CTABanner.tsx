import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const CTABanner = () => {
  const { t, language } = useLanguage();
  return (
    <section className="py-28 relative overflow-hidden bg-secondary border-y border-border">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <div className="hairline w-24 mx-auto mb-8 opacity-60" />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground leading-tight">{t("cta.title")}</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-10 rounded-xl font-semibold shadow-elegant transition-all hover:-translate-y-0.5">
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
