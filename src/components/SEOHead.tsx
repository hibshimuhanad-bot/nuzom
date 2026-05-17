import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";
import { blogPosts } from "@/data/blog";

const SITE_URL = "https://nzomlabs.com";

const pageMeta: Record<string, { title: string; titleAr: string; description: string; descriptionAr: string }> = {
  "/": {
    title: "Nzom Labs – Enterprise SaaS for Modern Organizations",
    titleAr: "مختبرات الأنظمة – حلول رقمية متكاملة للمؤسسات",
    description: "Nzom Labs builds scalable SaaS platforms for operations, compliance, governance, and workflow management in Saudi Arabia.",
    descriptionAr: "مختبرات الأنظمة تبني منصات رقمية قابلة للتوسع لإدارة العمليات والامتثال والحوكمة في المملكة العربية السعودية.",
  },
  "/about": {
    title: "About Nzom Labs – Saudi Technology Studio",
    titleAr: "من نحن – مختبرات الأنظمة",
    description: "Learn about Nzom Labs, a Saudi technology studio focused on building enterprise SaaS systems for digital transformation.",
    descriptionAr: "تعرف على مختبرات الأنظمة، استوديو تقني سعودي متخصص في بناء أنظمة رقمية للمؤسسات.",
  },
  "/blog": {
    title: "Blog – Nzom Labs Insights",
    titleAr: "المدونة – رؤى مختبرات الأنظمة",
    description: "Insights on digital transformation, compliance best practices, and enterprise technology trends in Saudi Arabia.",
    descriptionAr: "رؤى حول التحول الرقمي وأفضل ممارسات الامتثال واتجاهات التقنية المؤسسية في السعودية.",
  },
  "/contact": {
    title: "Contact Nzom Labs – Request a Demo",
    titleAr: "تواصل معنا – مختبرات الأنظمة",
    description: "Get in touch with Nzom Labs for enterprise SaaS solutions. Request a demo or book a consultation.",
    descriptionAr: "تواصل مع مختبرات الأنظمة لحلول المؤسسات الرقمية. اطلب عرضاً توضيحياً أو احجز استشارة.",
  },
  "/privacy": {
    title: "Privacy Policy – Nzom Labs",
    titleAr: "سياسة الخصوصية – مختبرات الأنظمة",
    description: "Read the privacy policy of Nzom Labs. Learn how we collect, use, and protect your data.",
    descriptionAr: "اطلع على سياسة الخصوصية لمختبرات الأنظمة وكيف نجمع ونستخدم ونحمي بياناتك.",
  },
  "/terms": {
    title: "Terms & Conditions – Nzom Labs",
    titleAr: "الشروط والأحكام – مختبرات الأنظمة",
    description: "Review the terms and conditions for using Nzom Labs services and platforms.",
    descriptionAr: "اطلع على شروط وأحكام استخدام خدمات ومنصات مختبرات الأنظمة.",
  },
  "/faq": {
    title: "FAQ – Nzom Labs",
    titleAr: "الأسئلة الشائعة – مختبرات الأنظمة",
    description: "Find answers to common questions about Nzom Labs systems, pricing, and support.",
    descriptionAr: "اعثر على إجابات للأسئلة الشائعة حول أنظمة مختبرات الأنظمة والدعم الفني.",
  },
  "/admin": {
    title: "Admin Dashboard – Nzom Labs",
    titleAr: "لوحة التحكم – مختبرات الأنظمة",
    description: "Internal administration dashboard for Nzom Labs staff to manage site content and operations.",
    descriptionAr: "لوحة الإدارة الداخلية لطاقم مختبرات الأنظمة لإدارة محتوى الموقع والعمليات.",
  },
  "/admin/login": {
    title: "Admin Login – Nzom Labs",
    titleAr: "تسجيل دخول الإدارة – مختبرات الأنظمة",
    description: "Secure sign-in page for Nzom Labs administrators to access the internal management dashboard.",
    descriptionAr: "صفحة دخول آمنة لمشرفي مختبرات الأنظمة للوصول إلى لوحة الإدارة الداخلية.",
  },
  "/unsubscribe": {
    title: "Unsubscribe – Nzom Labs",
    titleAr: "إلغاء الاشتراك – مختبرات الأنظمة",
    description: "Manage your email preferences and unsubscribe from Nzom Labs marketing or transactional notifications.",
    descriptionAr: "أدِر تفضيلات البريد وألغِ اشتراكك في رسائل مختبرات الأنظمة التسويقية أو الإشعارية.",
  },
};

const upsertMeta = (attr: string, key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const JSONLD_ID = "seo-jsonld-route";
const upsertJsonLd = (json: object | null) => {
  let el = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
  if (!json) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = JSONLD_ID;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(json);
};

const SEOHead = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const path = location.pathname;
    const productMatch = path.match(/^\/products\/(.+)$/);
    const blogMatch = path.match(/^\/blog\/(.+)$/);

    let title = "Nzom Labs";
    let description = "";
    let ogType: "article" | "website" = "website";
    let jsonLd: object | null = null;

    if (productMatch) {
      const product = products.find((p) => p.slug === productMatch[1]);
      if (product) {
        title = language === "ar"
          ? `${product.name.ar} – مختبرات الأنظمة`
          : `${product.name.en} – Nzom Labs`;
        description = language === "ar" ? product.tagline.ar : product.tagline.en;
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "Product",
          name: language === "ar" ? product.name.ar : product.name.en,
          description,
          brand: { "@type": "Brand", name: "Nzom Labs" },
          url: `${SITE_URL}${path}`,
        };
      }
    } else if (blogMatch) {
      const post = blogPosts.find((p) => p.slug === blogMatch[1]);
      if (post) {
        title = language === "ar"
          ? `${post.title.ar} – مختبرات الأنظمة`
          : `${post.title.en} – Nzom Labs`;
        description = language === "ar" ? post.excerpt.ar : post.excerpt.en;
        ogType = "article";
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: language === "ar" ? post.title.ar : post.title.en,
          description,
          datePublished: post.date,
          author: { "@type": "Organization", name: "Nzom Labs" },
          publisher: { "@type": "Organization", name: "Nzom Labs" },
          mainEntityOfPage: `${SITE_URL}${path}`,
        };
      }
    } else {
      const meta = pageMeta[path];
      if (meta) {
        title = language === "ar" ? meta.titleAr : meta.title;
        description = language === "ar" ? meta.descriptionAr : meta.description;
      }
    }

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", `${SITE_URL}${path}`);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertCanonical(`${SITE_URL}${path}`);
    upsertJsonLd(jsonLd);
  }, [location.pathname, language]);

  return null;
};

export default SEOHead;
