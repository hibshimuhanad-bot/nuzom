import { useParams, Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { blogPosts, blogCategories } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
      </article>
    </Layout>
  );
};

export default BlogPost;