import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MailX, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }

    const validate = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const res = await fetch(
          `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: anonKey } }
        );
        const data = await res.json();
        if (!res.ok) { setStatus("invalid"); return; }
        setStatus(data.reason === "already_unsubscribed" ? "already" : "valid");
      } catch { setStatus("error"); }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      setStatus(data?.reason === "already_unsubscribed" ? "already" : "success");
    } catch { setStatus("error"); }
    finally { setProcessing(false); }
  };

  const content: Record<Status, { icon: React.ReactNode; title: string; desc: string }> = {
    loading: {
      icon: <Loader2 className="h-12 w-12 text-secondary animate-spin" />,
      title: language === "ar" ? "جاري التحقق..." : "Verifying...",
      desc: "",
    },
    valid: {
      icon: <MailX className="h-12 w-12 text-secondary" />,
      title: language === "ar" ? "إلغاء الاشتراك" : "Unsubscribe",
      desc: language === "ar" ? "هل تريد إلغاء الاشتراك من رسائل البريد الإلكتروني؟" : "Would you like to unsubscribe from emails?",
    },
    already: {
      icon: <CheckCircle2 className="h-12 w-12 text-muted-foreground" />,
      title: language === "ar" ? "تم إلغاء الاشتراك مسبقاً" : "Already Unsubscribed",
      desc: language === "ar" ? "لقد تم إلغاء اشتراكك بالفعل." : "You have already unsubscribed.",
    },
    invalid: {
      icon: <AlertCircle className="h-12 w-12 text-destructive" />,
      title: language === "ar" ? "رابط غير صالح" : "Invalid Link",
      desc: language === "ar" ? "هذا الرابط غير صالح أو منتهي الصلاحية." : "This link is invalid or expired.",
    },
    success: {
      icon: <CheckCircle2 className="h-12 w-12 text-green-500" />,
      title: language === "ar" ? "تم إلغاء الاشتراك" : "Unsubscribed",
      desc: language === "ar" ? "لن تتلقى رسائل بريد إلكتروني منا بعد الآن." : "You will no longer receive emails from us.",
    },
    error: {
      icon: <AlertCircle className="h-12 w-12 text-destructive" />,
      title: language === "ar" ? "حدث خطأ" : "Something went wrong",
      desc: language === "ar" ? "يرجى المحاولة مرة أخرى لاحقاً." : "Please try again later.",
    },
  };

  const c = content[status];

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center ai-gradient-bg">
        <div className="text-center space-y-6 max-w-md mx-auto px-4">
          <div className="flex justify-center">{c.icon}</div>
          <h1 className="text-2xl font-bold text-foreground">{c.title}</h1>
          {c.desc && <p className="text-muted-foreground">{c.desc}</p>}
          {status === "valid" && (
            <Button
              onClick={handleUnsubscribe}
              disabled={processing}
              variant="destructive"
              className="mt-4"
            >
              {processing && <Loader2 className="h-4 w-4 me-2 animate-spin" />}
              {language === "ar" ? "تأكيد إلغاء الاشتراك" : "Confirm Unsubscribe"}
            </Button>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Unsubscribe;
