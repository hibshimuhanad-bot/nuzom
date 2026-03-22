import { Link } from "react-router-dom";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.webp";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";

const Footer = () => {
  const { t, language } = useLanguage();
  const brandName = language === "ar" ? "مختبرات الأنظمة" : "Nzom Labs";

  return (
    <footer className="bg-background text-foreground border-t border-border/30 dot-pattern">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Nzom Labs" className="w-8 h-8 rounded-lg object-contain" />
              <span className="font-bold text-lg">{brandName}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/nzomlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com/company/nzomlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/nzomlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://tiktok.com/@nzomlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
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
              <li><Link to="/faq" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{language === "ar" ? "الأسئلة الشائعة" : "FAQ"}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.legal")}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{t("privacy.title")}</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-secondary text-sm transition-colors">{t("terms.title")}</Link></li>
            </ul>
            <h4 className="font-semibold mb-2 mt-6">{t("nav.contact")}</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>info@nzomlabs.com</li>
              <li>{language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} {brandName}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;