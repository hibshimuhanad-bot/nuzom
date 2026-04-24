import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicy = () => {
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              {t("privacy.title")}
            </h1>
            <p className="text-muted-foreground mb-10 text-sm">
              {isAr ? "آخر تحديث: مارس 2026" : "Last updated: March 2026"}
            </p>
          </ScrollReveal>

          <div className="prose prose-sm md:prose-base max-w-none text-foreground/90 space-y-8">
            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "1. مقدمة" : "1. Introduction"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "تلتزم مختبرات الأنظمة (Nzom Labs) بحماية خصوصية مستخدمي خدماتها. توضح هذه السياسة كيفية جمع واستخدام وحماية بياناتكم الشخصية وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية (PDPL)."
                    : "Nzom Labs is committed to protecting the privacy of its users. This policy explains how we collect, use, and protect your personal data in accordance with the Saudi Personal Data Protection Law (PDPL)."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "2. البيانات التي نجمعها" : "2. Data We Collect"}</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isAr ? "اسم الشركة والبريد الإلكتروني ورقم الهاتف عند تعبئة نموذج التواصل" : "Company name, email, and phone number when submitting the contact form"}</li>
                  <li>{isAr ? "بيانات الاستخدام والتصفح (مثل الصفحات التي تمت زيارتها)" : "Usage and browsing data (e.g., pages visited)"}</li>
                  <li>{isAr ? "ملفات تعريف الارتباط (Cookies) لتحسين تجربة المستخدم" : "Cookies to improve user experience"}</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "3. كيف نستخدم بياناتكم" : "3. How We Use Your Data"}</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isAr ? "للرد على استفساراتكم وطلباتكم" : "To respond to your inquiries and requests"}</li>
                  <li>{isAr ? "لتحسين خدماتنا ومنتجاتنا" : "To improve our services and products"}</li>
                  <li>{isAr ? "لإرسال تحديثات ومعلومات ذات صلة (بموافقتكم)" : "To send relevant updates and information (with your consent)"}</li>
                  <li>{isAr ? "للامتثال للمتطلبات النظامية في المملكة العربية السعودية" : "To comply with regulatory requirements in Saudi Arabia"}</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "4. حماية البيانات" : "4. Data Protection"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "نستخدم إجراءات أمنية تقنية وتنظيمية مناسبة لحماية بياناتكم الشخصية من الوصول غير المصرح به أو الفقدان أو التلف. تُخزَّن جميع البيانات على خوادم آمنة داخل المملكة العربية السعودية أو في مواقع معتمدة."
                    : "We use appropriate technical and organizational security measures to protect your personal data from unauthorized access, loss, or damage. All data is stored on secure servers within Saudi Arabia or in approved locations."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "5. حقوقكم" : "5. Your Rights"}</h2>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  {isAr ? "وفقاً لنظام حماية البيانات الشخصية (PDPL)، يحق لكم:" : "Under the PDPL, you have the right to:"}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isAr ? "الاطلاع على بياناتكم الشخصية المحفوظة لدينا" : "Access your personal data held by us"}</li>
                  <li>{isAr ? "طلب تصحيح أو حذف بياناتكم" : "Request correction or deletion of your data"}</li>
                  <li>{isAr ? "سحب موافقتكم على معالجة البيانات" : "Withdraw consent for data processing"}</li>
                  <li>{isAr ? "تقديم شكوى للجهة المختصة (الهيئة السعودية للبيانات والذكاء الاصطناعي - سدايا)" : "File a complaint with the relevant authority (SDAIA)"}</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "6. مشاركة البيانات" : "6. Data Sharing"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "لا نبيع أو نشارك بياناتكم الشخصية مع أطراف ثالثة إلا في الحالات التالية: بموافقتكم الصريحة، أو عند الحاجة لتقديم الخدمة، أو بموجب طلب من جهة حكومية مختصة."
                    : "We do not sell or share your personal data with third parties except: with your explicit consent, when necessary to provide the service, or as required by a competent government authority."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "7. التواصل معنا" : "7. Contact Us"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "لأي استفسارات تتعلق بسياسة الخصوصية أو لممارسة حقوقكم، يرجى التواصل معنا عبر البريد الإلكتروني: sales@nzomlabs.com"
                    : "For any privacy-related inquiries or to exercise your rights, please contact us at: sales@nzomlabs.com"}
                </p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
