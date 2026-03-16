import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/data/products";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "@/components/ScrollReveal";
import ParticleField from "@/components/ParticleField";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          company_name: formData.company_name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          product: formData.product || null,
          message: formData.message.trim() || null,
        });

      if (error) throw error;

      toast({ title: language === "ar" ? "تم إرسال الرسالة بنجاح" : "Message sent successfully!" });
      setFormData({ company_name: "", email: "", phone: "", product: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
      toast({
        title: language === "ar" ? "حدث خطأ" : "Something went wrong",
        description: language === "ar" ? "يرجى المحاولة مرة أخرى" : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: language === "ar" ? "البريد الإلكتروني" : "Email", value: "info@nzomlaps.com" },
    { icon: MapPin, label: language === "ar" ? "الموقع" : "Location", value: language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center ai-gradient-bg dot-pattern overflow-hidden">
        <ParticleField count={40} className="absolute inset-0" />
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[hsl(var(--glow-primary))] opacity-[0.08] blur-[100px] animate-float-slow" />
        <div className="absolute bottom-10 left-[20%] w-48 h-48 rounded-full bg-[hsl(var(--glow-accent))] opacity-[0.06] blur-[80px] animate-float-reverse" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal duration={800}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{language === "ar" ? "تواصل معنا" : "Get in Touch"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {language === "ar" ? (
                <><span className="text-gradient">تواصل</span> معنا</>
              ) : (
                <>Contact <span className="text-gradient">Us</span></>
              )}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-background grid-pattern relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="left" className="md:col-span-2">
              <div className="bento-card p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground">{t("contact.name")}</Label>
                      <Input
                        required
                        maxLength={100}
                        placeholder={language === "ar" ? "اسم الشركة" : "Your company name"}
                        value={formData.company_name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company_name: e.target.value }))}
                        className="bg-background/50 border-border/50 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">{t("contact.email")}</Label>
                      <Input
                        type="email"
                        required
                        maxLength={255}
                        placeholder="email@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        className="bg-background/50 border-border/50 focus:border-secondary"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-foreground">{t("contact.phone")}</Label>
                      <Input
                        type="tel"
                        maxLength={20}
                        placeholder="+966"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="bg-background/50 border-border/50 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-foreground">{t("contact.product")}</Label>
                      <Select value={formData.product} onValueChange={(val) => setFormData((prev) => ({ ...prev, product: val }))}>
                        <SelectTrigger className="bg-background/50 border-border/50">
                          <SelectValue placeholder={language === "ar" ? "اختر المنتج" : "Select product"} />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((p) => (
                            <SelectItem key={p.slug} value={p.slug}>{p.name[language]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-foreground">{t("contact.message")}</Label>
                    <Textarea
                      rows={5}
                      maxLength={2000}
                      placeholder={language === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help you?"}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="bg-background/50 border-border/50 focus:border-secondary"
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="glow-btn bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Send className="h-4 w-4 me-2" />
                    {t("contact.send")}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                <div className="bento-card p-6 shimmer-border">
                  <h3 className="font-semibold text-foreground mb-3">{t("contact.demo.title")}</h3>
                  <p className="text-muted-foreground text-sm">{t("contact.demo.desc")}</p>
                </div>

                <div className="bento-card p-6 space-y-5">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bento-card h-40 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground/30" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;