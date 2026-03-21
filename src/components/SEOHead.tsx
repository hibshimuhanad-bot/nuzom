import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const pageMeta: Record<string, { title: string; titleAr: string; description: string; descriptionAr: string }> = {
  "/": {
    title: "Nzom Labs – Enterprise SaaS Systems for Modern Organizations",
    titleAr: "مختبرات الأنظمة – أنظمة SaaS للمؤسسات الحديثة",
    description: "Nzom Labs builds scalable SaaS platforms for operations, compliance, governance, and workflow management in Saudi Arabia.",
    descriptionAr: "مختبرات الأنظمة تبني منصات SaaS قابلة للتوسع لإدارة العمليات والامتثال والحوكمة في المملكة العربية السعودية.",
  },
  "/about": {
    title: "About Nzom Labs – Saudi Technology Studio",
    titleAr: "من نحن – مختبرات الأنظمة",
    description: "Learn about Nzom Labs, a Saudi technology studio focused on building enterprise SaaS systems for digital transformation.",
    descriptionAr: "تعرف على مختبرات الأنظمة، استوديو تقني سعودي متخصص في بناء أنظمة SaaS للمؤسسات.",
  },
  "/blog": {
    title: "Blog – Nzom Labs Insights",
    titleAr: "المدونة – رؤى مختبرات الأنظمة",
    description: "Insights on digital transformation, compliance best practices, and enterprise technology trends in Saudi Arabia.",
    descriptionAr: "رؤى حول التحول الرقمي وأفضل ممارسات الامتثال واتجاهات تقنية المؤسسات في السعودية.",
  },
  "/contact": {
    title: "Contact Nzom Labs – Request a Demo",
    titleAr: "تواصل معنا – مختبرات الأنظمة",
    description: "Get in touch with Nzom Labs for enterprise SaaS solutions. Request a demo or book a consultation.",
    descriptionAr: "تواصل مع مختبرات الأنظمة لحلول SaaS للمؤسسات. اطلب عرضاً توضيحياً أو احجز استشارة.",
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
          ? `${product.name.ar} – مختبرات الأنظمة`
          : `${product.name.en} – Nzom Labs`;
        description = language === "ar"
          ? product.tagline.ar
          : product.tagline.en;
      } else {
        title = "Nzom Labs";
        description = "";
      }
    } else if (blogMatch) {
      const post = blogPosts.find((p) => p.slug === blogMatch[1]);
      if (post) {
        title = language === "ar"
          ? `${post.title.ar} – مختبرات الأنظمة`
          : `${post.title.en} – Nzom Labs`;
        description = language === "ar"
          ? post.excerpt.ar
          : post.excerpt.en;
      } else {
        title = "Nzom Laps";
        description = "";
      }
    } else {
      const meta = pageMeta[path];
      if (meta) {
        title = language === "ar" ? meta.titleAr : meta.title;
        description = language === "ar" ? meta.descriptionAr : meta.description;
      } else {
        title = "Nzom Laps";
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
    setMeta("property", "og:url", `https://nzomlaps.com${path}`);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [location.pathname, language]);

  return null;
};

export default SEOHead;