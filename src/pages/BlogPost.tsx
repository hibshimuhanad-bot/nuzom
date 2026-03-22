import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { blogPosts, blogCategories } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const categoryToProduct: Record<string, { slug: string; name: { en: string; ar: string }; cta: { en: string; ar: string } }> = {
  hsse: {
    slug: "hsse",
    name: { en: "Nzom HSSE", ar: "نزوم السلامة" },
    cta: { en: "Discover how Nzom HSSE can transform your safety operations", ar: "اكتشف كيف يمكن لنزوم السلامة تحويل عمليات السلامة لديك" },
  },
  legal: {
    slug: "legal",
    name: { en: "Nzom Legal", ar: "نزوم القانونية" },
    cta: { en: "See how Nzom Legal streamlines your legal workflow", ar: "شاهد كيف يُبسّط نزوم القانونية سير عملك القانوني" },
  },
  tasks: {
    slug: "tasks",
    name: { en: "Nzom Tasks", ar: "نزوم المهام" },
    cta: { en: "Learn how Nzom Tasks eliminates project chaos", ar: "تعرّف كيف يقضي نزوم المهام على فوضى المشاريع" },
  },
  booking: {
    slug: "booking",
    name: { en: "Nzom Booking", ar: "نزوم الحجوزات" },
    cta: { en: "Explore how Nzom Booking modernizes your appointments", ar: "استكشف كيف يُحدّث نزوم الحجوزات نظام مواعيدك" },
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const isAr = language === "ar";

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            {isAr ? "المقال غير موجود" : "Post Not Found"}
          </h1>
          <Link to="/blog" className="text-secondary hover:underline">
            {isAr ? "العودة إلى المدونة" : "Back to Blog"}
          </Link>
        </section>
      </Layout>
    );
  }

  const category = blogCategories.find((c) => c.id === post.category);
  const BackArrow = isAr ? ArrowRight : ArrowLeft;
  const product = categoryToProduct[post.category];

  // Related articles: same category first, then others, exclude current
  const relatedPosts = [
    ...blogPosts.filter((p) => p.category === post.category && p.id !== post.id),
    ...blogPosts.filter((p) => p.category !== post.category && p.id !== post.id),
  ].slice(0, 3);

  return (
    <Layout>
      <article>
        <section className="ai-gradient-bg dot-pattern py-24 relative overflow-hidden">
          <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="container mx-auto px-4 max-w-3xl relative z-10">
            <ScrollReveal duration={800}>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
              >
                <BackArrow className="h-4 w-4" />
                {isAr ? "العودة إلى المدونة" : "Back to Blog"}
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {post.title[language]}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime[language]}
                </span>
                {category && (
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
                    {category.label[language]}
                  </span>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none text-foreground">
                {post.content[language].split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("• **")) {
                    const items = paragraph.split("\n").filter(Boolean);
                    return (
                      <ul key={i} className="space-y-3 my-6 list-none ps-0">
                        {items.map((item, j) => {
                          const match = item.match(/^• \*\*(.+?)\*\*: (.+)$/);
                          if (match) {
                            return (
                              <li key={j} className="flex gap-2 text-muted-foreground leading-relaxed">
                                <span className="text-secondary font-semibold shrink-0">•</span>
                                <span>
                                  <strong className="text-foreground">{match[1]}:</strong> {match[2]}
                                </span>
                              </li>
                            );
                          }
                          return <li key={j} className="text-muted-foreground">{item}</li>;
                        })}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {product && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-3xl">
              <ScrollReveal>
                <div className="rounded-2xl border border-border bg-card p-8 md:p-12 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {product.name[language]}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                    {product.cta[language]}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-xl">
                      <Link to={`/products/${product.slug}`}>
                        {isAr ? "تعرّف على المنتج" : "Learn More"}
                        {isAr ? <ArrowLeft className="h-4 w-4 ms-2" /> : <ArrowRight className="h-4 w-4 ms-2" />}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
                      <Link to="/contact">
                        {isAr ? "اطلب عرض تجريبي" : "Request a Demo"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {relatedPosts.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                  {isAr ? "مقالات مشابهة" : "Related Articles"}
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((related, idx) => {
                  const relCat = blogCategories.find((c) => c.id === related.category);
                  return (
                    <ScrollReveal key={related.id} delay={idx * 100}>
                      <Link
                        to={`/blog/${related.slug}`}
                        className="group block rounded-2xl border border-border bg-card p-6 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 h-full"
                      >
                        {relCat && (
                          <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                            {relCat.label[language]}
                          </span>
                        )}
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                          {related.title[language]}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {related.excerpt[language]}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {related.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {related.readTime[language]}
                          </span>
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default BlogPost;