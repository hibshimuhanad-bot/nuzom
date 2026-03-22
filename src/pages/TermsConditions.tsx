import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/ScrollReveal";

const TermsConditions = () => {
  const { language, t } = useLanguage();
  const isAr = language === "ar";

  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              {t("terms.title")}
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
                    ? "تحكم هذه الشروط والأحكام استخدامكم لموقع وخدمات مختبرات الأنظمة (Nzom Labs). باستخدامكم لخدماتنا، فإنكم توافقون على الالتزام بهذه الشروط. يخضع هذا العقد لأنظمة المملكة العربية السعودية."
                    : "These Terms and Conditions govern your use of the Nzom Labs website and services. By using our services, you agree to be bound by these terms. This agreement is governed by the laws of the Kingdom of Saudi Arabia."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "2. الخدمات" : "2. Services"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "توفر مختبرات الأنظمة أنظمة SaaS جاهزة للاستخدام تشمل إدارة السلامة والمهام والشؤون القانونية والحجوزات. نحتفظ بالحق في تعديل أو تحديث خدماتنا في أي وقت مع إشعاركم مسبقاً."
                    : "Nzom Labs provides ready-to-use SaaS systems including safety management, task management, legal affairs, and booking. We reserve the right to modify or update our services at any time with prior notice."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "3. حسابات المستخدمين" : "3. User Accounts"}</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isAr ? "أنتم مسؤولون عن الحفاظ على سرية بيانات حسابكم" : "You are responsible for maintaining the confidentiality of your account"}</li>
                  <li>{isAr ? "يجب تقديم معلومات صحيحة ودقيقة عند التسجيل" : "You must provide accurate information when registering"}</li>
                  <li>{isAr ? "يحق لنا تعليق أو إلغاء الحسابات المخالفة" : "We reserve the right to suspend or terminate accounts that violate these terms"}</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "4. الملكية الفكرية" : "4. Intellectual Property"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "جميع حقوق الملكية الفكرية المتعلقة بالموقع والخدمات والأنظمة مملوكة لمختبرات الأنظمة. لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق."
                    : "All intellectual property rights related to the website, services, and systems are owned by Nzom Labs. No content may be copied, distributed, or modified without prior written permission."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "5. حدود المسؤولية" : "5. Limitation of Liability"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "لا تتحمل مختبرات الأنظمة المسؤولية عن أي أضرار غير مباشرة أو عرضية ناتجة عن استخدام خدماتنا. مسؤوليتنا الإجمالية لا تتجاوز المبالغ المدفوعة مقابل الخدمة خلال الاثني عشر شهراً السابقة."
                    : "Nzom Labs is not liable for any indirect or incidental damages resulting from the use of our services. Our total liability shall not exceed the amounts paid for the service in the preceding twelve months."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "6. الاشتراك والدفع" : "6. Subscription & Payment"}</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{isAr ? "تُحدد رسوم الاشتراك حسب النظام والباقة المختارة" : "Subscription fees are determined by the selected system and plan"}</li>
                  <li>{isAr ? "يتم الدفع بالريال السعودي ما لم يُتفق على خلاف ذلك" : "Payment is in Saudi Riyal unless otherwise agreed"}</li>
                  <li>{isAr ? "جميع الأسعار لا تشمل ضريبة القيمة المضافة (15%)" : "All prices are exclusive of VAT (15%)"}</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "7. إنهاء الخدمة" : "7. Termination"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "يمكن لأي من الطرفين إنهاء الاتفاقية بإشعار كتابي مسبق مدته 30 يوماً. عند الإنهاء، سنوفر لكم فترة 30 يوماً لتصدير بياناتكم."
                    : "Either party may terminate this agreement with 30 days' written notice. Upon termination, we will provide a 30-day period to export your data."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "8. القانون الحاكم وحل النزاعات" : "8. Governing Law & Disputes"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "تخضع هذه الشروط لأنظمة المملكة العربية السعودية. يتم حل أي نزاعات ودياً أولاً، وفي حال تعذر ذلك، يُحال النزاع إلى المحاكم المختصة في مدينة الرياض."
                    : "These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes shall first be resolved amicably, and if not possible, referred to the competent courts in Riyadh."}
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="text-xl font-semibold mb-3 text-foreground">{isAr ? "9. التواصل" : "9. Contact"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {isAr
                    ? "لأي استفسارات حول هذه الشروط والأحكام، يرجى التواصل عبر: info@nzomlabs.com"
                    : "For any inquiries about these terms, please contact: info@nzomlabs.com"}
                </p>
              </section>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
