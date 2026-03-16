import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const NotFound = () => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const DirectionalArrow = language === "ar" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[70vh] flex items-center justify-center ai-gradient-bg dot-pattern overflow-hidden">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 rounded-full bg-accent/8 blur-3xl animate-float-slow" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-lg mx-auto" duration={800} startVisible>
            <div className="text-8xl md:text-9xl font-extrabold text-gradient mb-6">404</div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t("notfound.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("notfound.desc")}</p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 glow-btn rounded-xl">
              <Link to="/">
                {t("notfound.home")}
                <DirectionalArrow className="h-4 w-4 ms-2" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;