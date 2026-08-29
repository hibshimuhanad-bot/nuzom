import fs from "fs";
import path from "path";
import PptxGenJS from "pptxgenjs";

const IMG = process.env.PPTX_IMG_DIR || "/tmp/pptx2/img";
const OUT = process.env.PPTX_OUT || "/tmp/pptx2/nzom-labs-company-profile.pptx";

const d = (f) => {
  const p = path.join(IMG, f);
  if (!fs.existsSync(p)) throw new Error(`Missing image: ${p}`);
  const b = fs.readFileSync(p);
  const mime = f.endsWith(".png") ? "image/png" : f.endsWith(".webp") ? "image/webp" : "image/jpeg";
  return { data: `${mime};base64,${b.toString("base64")}` };
};

const INK = "07060F";
const PAPER = "FFFFFF";
const PAPER2 = "F4F5F8";
const PURPLE = "7C6BFF";
const PURPLE_D = "4F46E5";
const MUTED = "5B6172";
const MUTED_L = "CBD5E1";
const BORDER = "E2E4E9";

const AR = "Tajawal";
const LAT = "Arial";

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Nzom Labs";
pptx.company = "Nzom Labs";
pptx.title = "Nzom Labs — Company Profile";
pptx.subject = "Company Profile";

const ar = (text, o = {}) => ({
  text,
  options: { fontFace: AR, rtlMode: true, align: "right", ...o },
});

const deck = [];
const newSlide = (dark = false) => {
  const s = pptx.addSlide();
  s.background = { color: dark ? INK : PAPER };
  deck.push({ s, dark });
  return s;
};

const addFooter = (s, dark, idx, total) => {
  const num = String(idx + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  s.addText([{ text: `${num} / ${tot}`, options: { fontFace: LAT, align: "left" } }], {
    x: 0.5, y: 6.95, w: 1.5, h: 0.3, fontSize: 11, color: dark ? MUTED_L : MUTED,
  });
  if (idx > 0) {
    s.addText([{ text: "nzomlabs.com", options: { fontFace: LAT, align: "right" } }], {
      x: 10.5, y: 6.95, w: 2.3, h: 0.3, fontSize: 11, color: dark ? MUTED_L : MUTED,
    });
  }
};

const products = [
  {
    slug: "zerisks",
    name: "Zerisks HSSE",
    tagline: "نظام إدارة الصحة والسلامة والبيئة",
    desc: "راحة البال تبدأ من هنا. كل تصريح متابَع، كل خطر مرصود، وكل عامل يرجع لأهله سالم.",
    features: [
      "تصاريح العمل تتوجّه رقمياً للشخص الصحيح",
      "الحوادث تُبلَّغ من الموقع في ثواني",
      "مخاطر مرئية على خريطة حرارية",
      "امتثال الآيزو والتدقيق جاهز دائماً",
    ],
    audience: "المواقع الصناعية ومقاولي أرامكو وسابك ومعادن",
    url: "zerisks.nzomlabs.com",
  },
  {
    slug: "aldalyel",
    name: "الدليل",
    tagline: "نظام إدارة الشؤون القانونية",
    desc: "عالمك القانوني تحت سيطرتك الكاملة. قضايا، جلسات، مستندات، مواعيد — كلها في مكان واحد.",
    features: [
      "إدارة القضايا والجلسات والمواعيد النهائية",
      "مستندات منظمة بإصدارات وقوالب",
      "مساعد قانوني ذكي يفهم النظام السعودي",
      "بوابة عملاء لمتابعة حالة القضايا",
    ],
    audience: "مكاتب المحاماة والإدارات القانونية",
    url: "aldalyel.app/register",
  },
  {
    slug: "nexdo",
    name: "Nexdo",
    tagline: "نظام إدارة المهام والمشاريع",
    desc: "أخيراً كل شيء واضح. مهام معيّنة، مواعيد مرئية، ومشاريع تتقدم بدون ملاحقة.",
    features: [
      "محافظ وبرامج لمشاريع متعددة",
      "لوحات Kanban وجداول زمنية",
      "أتمتة المهام والتذكيرات",
      "دعم متعدد اللغات والشركات",
    ],
    audience: "فرق المشاريع والعمليات في المؤسسات",
    url: "nexdo.nzomlabs.com",
  },
  {
    slug: "meeadi",
    name: "Meeadi",
    tagline: "نظام إدارة الحجوزات والمواعيد",
    desc: "حجوزات بدون صداع، عملاء راضين. عملاءك يحجزون ويدفعون ويشتركون — بسلاسة واحترافية.",
    features: [
      "تقويم ذكي يمنع الحجوزات المزدوجة",
      "اشتراكات وباقات مع تجديد تلقائي",
      "فواتير إلكترونية متوافقة مع ZATCA",
      "إدارة متعددة الفروع والتقارير المالية",
    ],
    audience: "العيادات والصالونات والمراكز الخدمية",
    url: "meeadi.nzomlabs.com",
  },
  {
    slug: "crm",
    name: "Namaa CRM",
    tagline: "نظام إدارة علاقات العملاء",
    desc: "كل عميل في مكانه، وكل صفقة تحت السيطرة. فرق المبيعات تشتغل بانسجام.",
    features: [
      "إدارة العملاء والشركات والفرص",
      "Pipeline مبيعات مرئي وسحب وإفلات",
      "مهام ومتابعات تلقائية",
      "تقارير أداء وتحويل لحظية",
    ],
    audience: "فرق المبيعات والتسويق في الشركات",
    url: "namaacrm.app/register",
  },
  {
    slug: "samaa-plus",
    name: "سمعة بلس",
    tagline: "أدر سمعة أعمالك بذكاء",
    desc: "مراجعات Google من كل فرع في لوحة واحدة، ردود ذكية بالعربية، وتنبيهات فورية للمراجعات الحرجة.",
    features: [
      "مزامنة مراجعات Google من كل الفروع",
      "ردود ذكية بالعربية بصوت علامتك",
      "تنبيهات فورية للنجمة الواحدة",
      "تقارير ومقارنة مع المنافسين",
    ],
    audience: "المطاعم والعيادات والفنادق وسلاسل التجزئة",
    url: "sumaaplus.nzomlabs.com/login",
  },
  {
    slug: "visitor-path",
    name: "Visitor Path",
    tagline: "نظام إدارة الزوار",
    desc: "مدخل منشأتك تحت سيطرتك الكاملة. دعوات، استقبال، موافقات، قائمة مراقبة، وإشغال مباشر.",
    features: [
      "زيارات ودعوات مسجّلة مسبقاً",
      "تسجيل دخول حضوري من الاستقبال",
      "موافقات المستضيف من أي جهاز",
      "فحص قائمة المراقبة وإشغال مباشر",
    ],
    audience: "المنشآت الشركاتية والحكومية والمرافق الحساسة",
    url: "visitorpath.nzomlabs.com",
  },
];

/* ---------------- 1. COVER ---------------- */
{
  const s = newSlide(true);
  s.addShape(pptx.ShapeType.roundRect, { x: 8.2, y: 0.55, w: 4.6, h: 1.55, fill: { color: PAPER }, rectRadius: 0.08, line: { color: PAPER } });
  s.addImage({ ...d("logo.png"), x: 8.5, y: 0.75, w: 4.0, h: 1.15, sizing: { type: "contain", w: 4.0, h: 1.15 } });

  s.addText([ar("مختبرات الأنظمة")], { x: 0.5, y: 1.6, w: 7.2, h: 1.1, fontSize: 54, bold: true, color: PAPER, valign: "middle" });
  s.addText([ar("شريكك الرقمي لبناء منظومات العمليات")], { x: 0.5, y: 2.75, w: 7.2, h: 0.9, fontSize: 32, color: PURPLE, valign: "middle" });
  s.addShape(pptx.ShapeType.rect, { x: 0.5, y: 3.75, w: 1.2, h: 0.06, fill: { color: PURPLE } });
  s.addText(
    [ar("أنظمة SaaS جاهزة للاستخدام في السلامة والقانون والمهام والحجوزات وإدارة العملاء والسمعة والزوار — مصممة للمنظمات السعودية.")],
    { x: 0.5, y: 4.0, w: 7.0, h: 1.4, fontSize: 22, color: MUTED_L, lineSpacingMultiple: 1.35 },
  );
  s.addText([{ text: "RIYADH  ·  SAUDI ARABIA", options: { fontFace: LAT, align: "right", charSpacing: 2 } }], {
    x: 0.5, y: 5.65, w: 7.0, h: 0.4, fontSize: 15, color: MUTED_L, bold: true,
  });

  s.addShape(pptx.ShapeType.rect, { x: 8.2, y: 2.35, w: 4.6, h: 3.6, fill: { color: PURPLE_D }, rectRadius: 0.08, line: { color: PURPLE_D } });
  const stats = [
    ["7+", "أنظمة جاهزة"],
    ["24/7", "دعم فني"],
    ["Saudi", "استضافة محلية"],
  ];
  stats.forEach(([num, label], i) => {
    const y = 2.55 + i * 1.15;
    const isAr = /[\u0600-\u06FF]/.test(num);
    s.addText([{ text: num, options: { fontFace: isAr ? AR : LAT, rtlMode: isAr, align: "center" } }], { x: 8.4, y, w: 4.2, h: 0.55, fontSize: 36, bold: true, color: PAPER });
    s.addText([ar(label)], { x: 8.4, y: y + 0.55, w: 4.2, h: 0.35, fontSize: 18, color: MUTED_L, align: "center" });
  });
}

/* ---------------- 2. ABOUT ---------------- */
{
  const s = newSlide();
  s.addText([ar("من نحن")], { x: 8.8, y: 0.5, w: 4.0, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("مختبرات الأنظمة")], { x: 0.5, y: 1.05, w: 12.3, h: 0.85, fontSize: 40, bold: true, color: INK, align: "right" });
  s.addText(
    [ar("مختبرات الأنظمة هي استوديو تقني سعودي متخصص في بناء أنظمة SaaS للمنظمات الحديثة. تأسست برؤية تبسيط العمليات المؤسسية المعقدة من خلال التكنولوجيا، حيث نصمم ونطور منصات قابلة للتوسع تعالج تحديات تشغيلية حقيقية في المملكة.")],
    { x: 0.5, y: 2.05, w: 12.3, h: 1.4, fontSize: 22, color: MUTED, lineSpacingMultiple: 1.35, align: "right" },
  );
  s.addText(
    [ar("نركز على القطاعات الأكثر حاجة للتحول الرقمي — المقاولات، القانون، وإدارة المرافق — نقدم أنظمة جاهزة للاستخدام تزيل التعقيد وتسرّع النمو للشركات بجميع أحجامها.")],
    { x: 0.5, y: 3.55, w: 12.3, h: 1.2, fontSize: 22, color: MUTED, lineSpacingMultiple: 1.35, align: "right" },
  );
  const values = [
    ["البساطة", "أنظمة جاهزة بدون أي تعقيد — فعّل وابدأ."],
    ["الأمان", "حماية بيانات عملائنا أولوية قصوى في كل مستوى."],
    ["الابتكار", "نستخدم أحدث التقنيات والذكاء الاصطناعي لتقديم حلول أذكى."],
    ["الدعم المستمر", "فريقنا معك من التفعيل إلى التشغيل الكامل وما بعده."],
  ];
  const cardW = 2.85;
  const gap = 0.25;
  const startX = 13.333 - 0.5 - cardW;
  values.forEach(([title, desc], i) => {
    const x = startX - i * (cardW + gap);
    const y = 4.7;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: cardW, h: 1.75, fill: { color: PAPER2 }, rectRadius: 0.06, line: { color: BORDER } });
    s.addText([ar(title)], { x: x + 0.15, y: y + 0.1, w: cardW - 0.3, h: 0.45, fontSize: 20, bold: true, color: INK, align: "right" });
    s.addText([ar(desc)], { x: x + 0.15, y: y + 0.55, w: cardW - 0.3, h: 1.0, fontSize: 16, color: MUTED, align: "right" });
  });
}

/* ---------------- 3. VISION & MISSION ---------------- */
{
  const s = newSlide();
  s.addText([ar("الرؤية والمهمة")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });

  s.addShape(pptx.ShapeType.roundRect, { x: 6.8, y: 1.25, w: 6.0, h: 2.6, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
  s.addShape(pptx.ShapeType.roundRect, { x: 6.6, y: 1.45, w: 0.18, h: 2.2, fill: { color: PURPLE }, rectRadius: 0.04, line: { color: PURPLE } });
  s.addText([ar("رؤيتنا")], { x: 7.0, y: 1.45, w: 5.5, h: 0.5, fontSize: 26, bold: true, color: INK, align: "right" });
  s.addText([ar("أن نصبح مزود منظومة SaaS رائد في المملكة العربية السعودية.")], { x: 7.0, y: 2.1, w: 5.5, h: 1.5, fontSize: 24, color: MUTED, align: "right", lineSpacingMultiple: 1.3 });

  s.addShape(pptx.ShapeType.roundRect, { x: 6.8, y: 4.15, w: 6.0, h: 2.6, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
  s.addShape(pptx.ShapeType.roundRect, { x: 6.6, y: 4.35, w: 0.18, h: 2.2, fill: { color: PURPLE_D }, rectRadius: 0.04, line: { color: PURPLE_D } });
  s.addText([ar("مهمتنا")], { x: 7.0, y: 4.35, w: 5.5, h: 0.5, fontSize: 26, bold: true, color: INK, align: "right" });
  s.addText([ar("تصميم أنظمة تبسط العمليات التنظيمية المعقدة.")], { x: 7.0, y: 5.0, w: 5.5, h: 1.5, fontSize: 24, color: MUTED, align: "right", lineSpacingMultiple: 1.3 });
}

/* ---------------- 4. WHY NZOM ---------------- */
{
  const s = newSlide();
  s.addText([ar("لماذا مختبرات الأنظمة")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("حلول مصممة لتبدأ فوراً")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });

  const items = [
    ["جاهز للاستخدام الفوري", "لا حاجة لبناء من الصفر، أنظمتنا جاهزة للتفعيل."],
    ["يناسب الصغيرة والكبيرة", "من شركة بـ 10 موظفين إلى مؤسسة بـ 10,000."],
    ["نظام واحد أو منظومة كاملة", "اختر ما تحتاج، وأضف أنظمة أخرى لاحقاً."],
    ["دعم فني مستمر", "فريقنا معك من التفعيل إلى التشغيل الكامل."],
  ];
  const cardW = 5.8;
  const gap = 0.5;
  const rightX = 13.333 - 0.5 - cardW;
  items.forEach(([title, desc], i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = rightX - col * (cardW + gap);
    const y = 2.1 + row * 2.1;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: cardW, h: 1.85, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
    s.addShape(pptx.ShapeType.ellipse, { x: x + cardW - 0.45, y: y + 0.25, w: 0.28, h: 0.28, fill: { color: PURPLE } });
    s.addText([ar(title)], { x: x + 0.25, y: y + 0.2, w: cardW - 0.7, h: 0.5, fontSize: 23, bold: true, color: INK, align: "right" });
    s.addText([ar(desc)], { x: x + 0.25, y: y + 0.75, w: cardW - 0.5, h: 0.9, fontSize: 19, color: MUTED, align: "right" });
  });
}

/* ---------------- 5. COMPANY DIVISIONS ---------------- */
{
  const s = newSlide();
  s.addText([ar("أقسام الشركة")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("ثلاثة أقسام تخدم تحولك الرقمي")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });

  const divs = [
    ["أنظمة SaaS", "منظومة متكاملة من الأنظمة الجاهزة للسلامة والقانون والمهام والحجوزات وإدارة العملاء والسمعة والزوار.", PURPLE],
    ["توريد الأجهزة", "[نص يُستكمل لاحقًا — أضف فئات الأجهزة والعلامات التجارية التي تقدمها الشركة.]", PURPLE_D],
    ["الخدمات التقنية", "تصميم وتطوير المواقع، مراجعة الكود، الاستشارات التقنية، الدعم والصيانة، وأتمتة بالذكاء الاصطناعي.", "5B6172"],
  ];
  divs.forEach(([title, desc, color], i) => {
    const x = 9.0 - i * 4.15;
    s.addShape(pptx.ShapeType.roundRect, { x, y: 2.2, w: 3.85, h: 3.8, fill: { color: PAPER2 }, rectRadius: 0.1, line: { color: BORDER } });
    s.addShape(pptx.ShapeType.roundRect, { x: x + 0.2, y: 2.45, w: 0.7, h: 0.18, fill: { color }, rectRadius: 0.04, line: { color } });
    s.addText([ar(title)], { x: x + 0.2, y: 2.85, w: 3.45, h: 0.7, fontSize: 26, bold: true, color: INK, align: "right" });
    s.addText([ar(desc)], { x: x + 0.2, y: 3.65, w: 3.45, h: 2.1, fontSize: 19, color: MUTED, align: "right", lineSpacingMultiple: 1.3 });
  });
}

/* ---------------- 6. PRODUCT ECOSYSTEM ---------------- */
{
  const s = newSlide();
  s.addText([ar("منظومة الأنظمة")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("أنظمة جاهزة للتشغيل")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });

  products.forEach((p, i) => {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const x = 9.55 - col * 3.15;
    const y = 2.0 + row * 2.25;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 2.9, h: 2.0, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
    if (fs.existsSync(path.join(IMG, `${p.slug}-logo.png`))) {
      s.addImage({ ...d(`${p.slug}-logo.png`), x: x + 1.55, y: y + 0.15, w: 1.1, h: 0.55, sizing: { type: "contain", w: 1.1, h: 0.55 } });
    }
    s.addText([ar(p.name)], { x: x + 0.15, y: y + 0.75, w: 2.6, h: 0.45, fontSize: 18, bold: true, color: INK, align: "right" });
    s.addText([ar(p.tagline)], { x: x + 0.15, y: y + 1.2, w: 2.6, h: 0.65, fontSize: 14, color: MUTED, align: "right" });
  });
}

/* ---------------- 7-13. PRODUCT SLIDES ---------------- */
products.forEach((p, idx) => {
  const s = newSlide();
  const hasLogo = fs.existsSync(path.join(IMG, `${p.slug}-logo.png`));
  const hasPreview = fs.existsSync(path.join(IMG, `${p.slug}-preview.png`));

  if (hasLogo) {
    s.addImage({ ...d(`${p.slug}-logo.png`), x: 9.8, y: 0.45, w: 2.9, h: 0.9, sizing: { type: "contain", w: 2.9, h: 0.9 } });
  }
  s.addText([ar(p.name)], { x: 0.5, y: 0.5, w: 8.8, h: 0.7, fontSize: 34, bold: true, color: INK, align: "right" });
  s.addText([ar(p.tagline)], { x: 0.5, y: 1.15, w: 8.8, h: 0.45, fontSize: 20, color: PURPLE, align: "right" });
  s.addText([ar(p.desc)], { x: 0.5, y: 1.7, w: 8.8, h: 0.9, fontSize: 18, color: MUTED, align: "right", lineSpacingMultiple: 1.25 });

  p.features.forEach((feat, i) => {
    const y = 2.75 + i * 0.78;
    s.addShape(pptx.ShapeType.ellipse, { x: 8.95, y: y + 0.22, w: 0.16, h: 0.16, fill: { color: PURPLE } });
    s.addText([ar(feat)], { x: 0.5, y, w: 8.2, h: 0.6, fontSize: 19, color: INK, align: "right", valign: "middle" });
  });

  s.addShape(pptx.ShapeType.roundRect, { x: 9.4, y: 2.75, w: 3.4, h: 2.8, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
  if (hasPreview) {
    s.addImage({ ...d(`${p.slug}-preview.png`), x: 9.55, y: 2.9, w: 3.1, h: 2.5, sizing: { type: "contain", w: 3.1, h: 2.5 } });
  } else {
    s.addText([ar("[صورة المعاينة]")], { x: 9.55, y: 3.9, w: 3.1, h: 0.5, fontSize: 16, color: MUTED, align: "center" });
  }

  s.addShape(pptx.ShapeType.roundRect, { x: 9.4, y: 5.75, w: 3.4, h: 0.85, fill: { color: INK }, rectRadius: 0.08, line: { color: INK } });
  s.addText([ar(p.audience)], { x: 9.55, y: 5.9, w: 3.1, h: 0.55, fontSize: 15, color: PAPER, align: "center", valign: "middle" });

  s.addText([{ text: p.url, options: { fontFace: LAT, align: "left" } }], {
    x: 0.5, y: 6.55, w: 5.0, h: 0.3, fontSize: 13, color: PURPLE_D,
  });
});

/* ---------------- 14. HARDWARE PLACEHOLDER ---------------- */
{
  const s = newSlide();
  s.addText([ar("قسم توريد الأجهزة")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("[نص يُستكمل لاحقًا]")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });
  s.addText(
    [ar("هنا يتم عرض فئات الأجهزة والمعدات التي تقدمها مختبرات الأنظمة، مثل أجهزة الحاسب، الشاشات، الطابعات، أجهزة الشبكات، وأي علامات تجارية تشارك معها الشركة. يرجى استبدال هذا النص بالمحتوى الفعلي.")],
    { x: 0.5, y: 2.0, w: 12.3, h: 1.2, fontSize: 22, color: MUTED, align: "right", lineSpacingMultiple: 1.35 },
  );
  const cats = [
    "[فئة الأجهزة ١ — أضف الوصف]",
    "[فئة الأجهزة ٢ — أضف الوصف]",
    "[فئة الأجهزة ٣ — أضف الوصف]",
  ];
  cats.forEach((c, i) => {
    const x = 9.0 - i * 4.15;
    const y = 3.6;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 3.85, h: 2.4, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
    s.addText([ar(c)], { x: x + 0.2, y: y + 0.3, w: 3.45, h: 1.8, fontSize: 19, color: MUTED, align: "right", lineSpacingMultiple: 1.3 });
  });
}

/* ---------------- 15. IT SERVICES PLACEHOLDER ---------------- */
{
  const s = newSlide();
  s.addText([ar("قسم الخدمات التقنية")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("خدمات تقنية لدعم منظمتك")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });

  const services = [
    ["تصميم وتطوير المواقع", "مواقع احترافية متوافقة مع الهوية الرقمية لعلامتك."],
    ["مراجعة الكود", "تدقيق تقني لضمان جودة وأمان الكود البرمجي."],
    ["الاستشارات التقنية", "توجيه استراتيجي لاختيار التقنية المناسبة لأهدافك."],
    ["الدعم والصيانة", "متابعة مستمرة لضمان استقرار الأنظمة والخدمات."],
    ["أتمتة بالذكاء الاصطناعي", "ربط WhatsApp وCRM بذكاء اصطناعي، ومساعد شخصي ذكي."],
    ["[خدمة إضافية]", "[نص يُستكمل لاحقًا — أضف أي خدمة أخرى تناسب استراتيجيتك.]"],
  ];
  services.forEach(([title, desc], i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 9.45 - col * 6.0;
    const y = 2.05 + row * 1.55;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.7, h: 1.35, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
    s.addShape(pptx.ShapeType.ellipse, { x: x + 5.25, y: y + 0.2, w: 0.25, h: 0.25, fill: { color: PURPLE } });
    s.addText([ar(title)], { x: x + 0.25, y: y + 0.15, w: 4.85, h: 0.45, fontSize: 20, bold: true, color: INK, align: "right" });
    s.addText([ar(desc)], { x: x + 0.25, y: y + 0.6, w: 4.85, h: 0.6, fontSize: 16, color: MUTED, align: "right" });
  });
}

/* ---------------- 16. ENTERPRISE CAPABILITIES ---------------- */
{
  const s = newSlide();
  s.addText([ar("القدرات المؤسسية")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("بنية تحتية تستحق ثقة المؤسسات")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });

  const caps = [
    ["الصلاحيات والأدوار", "RBAC لتحكم دقيق فيما يشاهده ويعدّل كل مستخدم."],
    ["الفوترة الإلكترونية", "متوافق مع متطلبات ZATCA للفواتير الإلكترونية."],
    ["سير العمل", "أتمتة العمليات وتوجيه المهام بين الفرق تلقائياً."],
    ["ثنائي اللغة وRTL", "واجهة عربية/إنجليزية كاملة مع دعم الاتجاه من اليمين لليسار."],
    ["الأمان والامتثال", "تشفير مؤسسي، بيانات مستضافة في السعودية، امتثال PDPL."],
    ["تعدد المواقع", "إدارة فروع ومواقع متعددة تحت مؤسسة واحدة."],
  ];
  caps.forEach(([title, desc], i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 9.45 - col * 6.0;
    const y = 2.05 + row * 1.55;
    s.addShape(pptx.ShapeType.roundRect, { x, y, w: 5.7, h: 1.35, fill: { color: PAPER2 }, rectRadius: 0.08, line: { color: BORDER } });
    s.addShape(pptx.ShapeType.ellipse, { x: x + 5.25, y: y + 0.2, w: 0.25, h: 0.25, fill: { color: PURPLE } });
    s.addText([ar(title)], { x: x + 0.25, y: y + 0.15, w: 4.85, h: 0.45, fontSize: 20, bold: true, color: INK, align: "right" });
    s.addText([ar(desc)], { x: x + 0.25, y: y + 0.6, w: 4.85, h: 0.6, fontSize: 16, color: MUTED, align: "right" });
  });
}

/* ---------------- 17. HOW TO START ---------------- */
{
  const s = newSlide();
  s.addText([ar("كيف تبدأ")], { x: 0.5, y: 0.5, w: 12.3, h: 0.5, fontSize: 18, bold: true, color: PURPLE, align: "right" });
  s.addText([ar("ثلاث خطوات لنظامك الجاهز")], { x: 0.5, y: 1.05, w: 12.3, h: 0.7, fontSize: 40, bold: true, color: INK, align: "right" });

  const steps = [
    ["١", "اختر النظام", "تصفّح أنظمتنا واختر ما يناسب عملك."],
    ["٢", "تواصل معنا", "فريقنا يفهم احتياجك ويجهز كل شيء."],
    ["٣", "ابدأ العمل", "نظامك جاهز ويعمل خلال أيام."],
  ];
  steps.forEach(([num, title, desc], i) => {
    const x = 10.0 - i * 4.2;
    s.addShape(pptx.ShapeType.roundRect, { x, y: 2.4, w: 3.7, h: 3.2, fill: { color: PAPER2 }, rectRadius: 0.1, line: { color: BORDER } });
    s.addShape(pptx.ShapeType.ellipse, { x: x + 1.35, y: 2.65, w: 1.0, h: 1.0, fill: { color: PURPLE } });
    s.addText([ar(num)], { x, y: 2.75, w: 3.7, h: 0.8, fontSize: 40, bold: true, color: PAPER, align: "center" });
    s.addText([ar(title)], { x: x + 0.2, y: 3.85, w: 3.3, h: 0.55, fontSize: 26, bold: true, color: INK, align: "center" });
    s.addText([ar(desc)], { x: x + 0.2, y: 4.45, w: 3.3, h: 0.9, fontSize: 18, color: MUTED, align: "center" });
  });
}

/* ---------------- 18. CONTACT (dark) ---------------- */
{
  const s = newSlide(true);
  s.addText([ar("تواصل معنا")], { x: 0.5, y: 0.45, w: 8.0, h: 0.85, fontSize: 44, bold: true, color: PAPER, align: "left", valign: "middle" });
  s.addText([{ text: "GET IN TOUCH  ·  RIYADH", options: { fontFace: LAT, align: "left", charSpacing: 3 } }], {
    x: 0.52, y: 1.32, w: 8.0, h: 0.4, fontSize: 16, bold: true, color: PURPLE,
  });

  const rows = [
    ["الهاتف / واتساب", "+966 54 654 7545"],
    ["البريد الإلكتروني", "sales@nzomlabs.com"],
    ["الموقع الإلكتروني", "nzomlabs.com"],
    ["إكس", "@nzomlabs"],
    ["لينكدإن", "nzomlabs"],
    ["إنستقرام", "@nzomlabs"],
    ["تيك توك", "@nzomlabs"],
    ["يوتيوب", "@NzomLabs"],
    ["الموقع", "الرياض — المملكة العربية السعودية"],
  ];
  rows.forEach(([label, value], i) => {
    const y = 2.0 + i * 0.55;
    s.addText([ar(label)], { x: 8.2, y, w: 4.5, h: 0.45, fontSize: 19, bold: true, color: PURPLE, valign: "middle", align: "right" });
    const isAr = /[\u0600-\u06FF]/.test(value);
    s.addText([{ text: value, options: { fontFace: isAr ? AR : LAT, rtlMode: isAr, align: "left" } }], {
      x: 0.5, y, w: 7.5, h: 0.45, fontSize: 21, bold: true, color: PAPER, valign: "middle",
    });
  });
}

/* ---------------- footers ---------------- */
const total = deck.length;
deck.forEach(({ s, dark }, i) => addFooter(s, dark, i, total));

await pptx.writeFile({ fileName: OUT });
console.log("written", OUT);
