import { useLanguage } from "@/contexts/LanguageContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: language === "ar" ? "تم إرسال الرسالة بنجاح" : "Message sent successfully!" });
    }, 1000);
  };

  return (
    <Layout>
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("contact.title")}</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t("contact.name")}</Label>
                    <Input required placeholder={language === "ar" ? "اسم الشركة" : "Your company name"} />
                  </div>
                  <div className="space-y-2">
                    <Label>{t("contact.email")}</Label>
                    <Input type="email" required placeholder="email@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>{t("contact.phone")}</Label>
                    <Input type="tel" placeholder="+966" />
                  </div>
                  <div className="space-y-2">
                    <Label>{t("contact.product")}</Label>
                    <Select>
                      <SelectTrigger>
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
                  <Label>{t("contact.message")}</Label>
                  <Textarea rows={5} placeholder={language === "ar" ? "كيف يمكننا مساعدتك؟" : "How can we help you?"} />
                </div>
                <Button type="submit" disabled={loading} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Send className="h-4 w-4 me-2" />
                  {t("contact.send")}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">{t("contact.demo.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t("contact.demo.desc")}</p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@nuzomlab.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{language === "ar" ? "الهاتف" : "Phone"}</p>
                    <p className="text-sm text-muted-foreground">+966 11 XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{language === "ar" ? "الموقع" : "Location"}</p>
                    <p className="text-sm text-muted-foreground">{language === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-muted rounded-xl h-40 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
