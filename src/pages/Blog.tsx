import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { blogPosts, blogCategories } from "@/data/blog";
import { Calendar, Clock, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";

const Blog = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center ai-gradient-bg dot-pattern overflow-hidden">
        <ParticleField count={40} className="absolute inset-0" />
        <div className="absolute top-16 left-[15%] w-56 h-56 rounded-full bg-[hsl(var(--glow-purple))] opacity-[0.08] blur-[100px] animate-float-slow" />
        <div className="absolute bottom-16 right-[10%] w-48 h-48 rounded-full bg-[hsl(var(--glow-accent))] opacity-[0.06] blur-[80px] animate-float-reverse" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{language === "ar" ? "آخر المقالات" : "Latest Insights"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {language === "ar" ? (
                <><span className="text-gradient">المدونة</span></>
              ) : (
                <>Our <span className="text-gradient">Blog</span></>
              )}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("blog.subtitle")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background grid-pattern relative">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {blogCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-[0_0_20px_hsl(var(--glow-primary)/0.3)]"
                      : "bg-card/50 text-muted-foreground border-border/50 hover:border-secondary/50 hover:text-foreground backdrop-blur-sm"
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
                <Link to={`/blog/${post.slug}`} className="block h-full group">
                  <div className="bento-card p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-3 text-muted-foreground text-xs">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime[language]}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient-blue transition-colors">
                      {post.title[language]}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt[language]}</p>
                    <span className="inline-block mt-4 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium border border-secondary/20 w-fit">
                      {blogCategories.find((c) => c.id === post.category)?.label[language]}
                    </span>
                  </div>
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
