import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import ScrollReveal from "@/components/ScrollReveal";

const bentoClasses = [
  "sm:col-span-2 sm:row-span-2",
  "", "", "", "",
  "sm:col-span-2",
  "", "",
  "sm:col-span-2",
  "", "",
];

const BentoGrid = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-28 bg-background relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-blue">{t("ecosystem.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("ecosystem.subtitle")}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)] gap-4 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 80} className={bentoClasses[i] || ""}>
              <Link to={`/products/${product.slug}`} className="block h-full">
                <div className={`bento-card p-6 h-full flex flex-col justify-between group relative overflow-hidden ${i === 0 ? "min-h-[320px]" : ""}`}>
                  <span className={`absolute top-3 end-3 z-20 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${i === 0 ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-muted text-muted-foreground border border-border/50"}`}>
                    {i === 0 ? t("ecosystem.available") : t("ecosystem.coming_soon")}
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <product.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <h3 className={`font-bold text-foreground mb-2 ${i === 0 ? "text-2xl" : "text-lg"}`}>
                      {product.name[language]}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${i === 0 ? "text-base" : "text-sm"}`}>
                      {product.tagline[language]}
                    </p>
                  </div>
                  <div className="relative z-10 mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{t("ecosystem.learn_more")}</span>
                    {language === "ar" ? <ArrowLeft className="h-3.5 w-3.5 ms-1" /> : <ArrowRight className="h-3.5 w-3.5 ms-1" />}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
