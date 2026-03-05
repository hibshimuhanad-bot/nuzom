import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const pageMeta: Record<string, { title: string; titleAr: string; description: string; descriptionAr: string }> = {
  "/": {
    title: "Nuzom Lab – Enterprise SaaS Systems for Modern Organizations",
    titleAr: "نُظُم لاب – أنظمة SaaS للمؤسسات الحديثة",
    description: "Nuzom Lab builds scalable SaaS platforms for operations, compliance, governance, and workflow management in Saudi Arabia.",
    descriptionAr: "نُظُم لاب تبني منصات SaaS قابلة للتوسع لإدارة العمليات والامتثال والحوكمة في المملكة العربية السعودية.",
  },
  "/about": {
    title: "About Nuzom Lab – Saudi Technology Studio",
    titleAr: "من نحن – نُظُم لاب",
    description: "Learn about Nuzom Lab, a Saudi technology studio focused on building enterprise SaaS systems for digital transformation.",
    descriptionAr: "تعرف على نُظُم لاب، استوديو تقني سعودي متخصص في بناء أنظمة SaaS للمؤسسات.",
  },
  "/blog": {
    title: "Blog – Nuzom Lab Insights",
    titleAr: "المدونة – رؤى نُظُم لاب",
    description: "Insights on digital transformation, compliance best practices, and enterprise technology trends in Saudi Arabia.",
    descriptionAr: "رؤى حول التحول الرقمي وأفضل ممارسات الامتثال واتجاهات تقنية المؤسسات في السعودية.",
  },
  "/contact": {
    title: "Contact Nuzom Lab – Request a Demo",
    titleAr: "تواصل معنا – نُظُم لاب",
    description: "Get in touch with Nuzom Lab for enterprise SaaS solutions. Request a demo or book a consultation.",
    descriptionAr: "تواصل مع نُظُم لاب لحلول SaaS للمؤسسات. اطلب عرضاً توضيحياً أو احجز استشارة.",
  },
};

const SEOHead = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const path = location.pathname;
    const productMatch = path.match(/^\/products\/(.+)$/);
    const blogMatch = path.match(/^\/blog\/(.+)$/);

    let title: string;
    let description: string;

    if (productMatch) {
      const product = products.find((p) => p.slug === productMatch[1]);
      if (product) {
        title = language === "ar"
          ? `${product.name.ar} – نُظُم لاب`
          : `${product.name.en} – Nuzom Lab`;
        description = language === "ar"
          ? product.tagline.ar
          : product.tagline.en;
      } else {
        title = "Nuzom Lab";
        description = "";
      }
    } else if (blogMatch) {
      const post = blogPosts.find((p) => p.slug === blogMatch[1]);
      if (post) {
        title = language === "ar"
          ? `${post.title.ar} – نُظُم لاب`
          : `${post.title.en} – Nuzom Lab`;
        description = language === "ar"
          ? post.excerpt.ar
          : post.excerpt.en;
      } else {
        title = "Nuzom Lab";
        description = "";
      }
    } else {
      const meta = pageMeta[path];
      if (meta) {
        title = language === "ar" ? meta.titleAr : meta.title;
        description = language === "ar" ? meta.descriptionAr : meta.description;
      } else {
        title = "Nuzom Lab";
        description = "";
      }
    }

    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `https://nuzomlab.com${path}`);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [location.pathname, language]);

  return null;
};

export default SEOHead;
