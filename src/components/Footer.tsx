import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-lg">
                {language === "ar" ? "نُظُم لاب" : "Nuzom Lab"}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-muted-foreground hover:text-secondary text-sm transition-colors"
                  >
                    {product.name[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{t("nav.blog")}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">{t("nav.contact")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>info@nuzomlab.com</li>
              <li>{language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} Nuzom Lab. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
