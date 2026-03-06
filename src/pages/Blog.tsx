import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts, blogCategories } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Blog = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="bg-background py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal duration={800}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("blog.title")}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("blog.subtitle")}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {blogCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-secondary/10"
                  }`}
                >
                  {cat.label[language]}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} key={post.id} className="block h-full">
                <Card className="border-border/50 hover:shadow-lg transition-shadow cursor-pointer group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-muted-foreground text-xs">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime[language]}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {post.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt[language]}</p>
                    <span className="inline-block mt-3 px-2 py-1 rounded bg-secondary/10 text-secondary text-xs font-medium">
                      {blogCategories.find((c) => c.id === post.category)?.label[language]}
                    </span>
                  </CardContent>
                </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
