import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown, Globe } from "lucide-react";
import { products } from "@/data/products";
import { useState } from "react";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Nzom Labs" className="w-8 h-8 rounded-lg object-contain" />
          <span className="text-foreground font-bold text-lg">
            {language === "ar" ? "مختبرات الأنظمة" : "Nzom Labs"}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
              ? "text-secondary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 outline-none">
              {t("nav.solutions")}
              <ChevronDown className="h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-card border-border">
              {products.map((product) => (
                <DropdownMenuItem key={product.slug} asChild>
                  <Link to={`/products/${product.slug}`} className="cursor-pointer">
                    <product.icon className="h-4 w-4 me-2" />
                    {product.name[language]}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
              ? "text-secondary"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="flex items-center gap-1 px-2 py-1.5 rounded-md text-foreground/80 hover:text-foreground text-sm transition-colors"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "عربي" : "EN"}
          </button>

          <Button asChild size="sm" className="hidden md:inline-flex bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Link to="/contact">{t("nav.demo")}</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={language === "ar" ? "right" : "left"} className="bg-background border-border">
              <SheetTitle className="text-foreground">
                {language === "ar" ? "مختبرات الأنظمة" : "Nzom Laps"}
              </SheetTitle>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground/80 hover:text-foreground text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-4">
                  <p className="text-foreground/60 text-sm mb-2">{t("nav.solutions")}</p>
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="block text-foreground/80 hover:text-foreground py-1.5"
                    >
                      {product.name[language]}
                    </Link>
                  ))}
                </div>
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-4">
                  <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.demo")}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;