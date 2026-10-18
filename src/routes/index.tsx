import { createFileRoute } from "@tanstack/react-router";
import { DURATION, OLD_PRICE, PAYPAL_URL, PRICE, whatsappUrl } from "@/lib/config";
import heroImg from "@/assets/hero.jpg";
import veoImg from "@/assets/veo.jpg";
import bananaImg from "@/assets/banana.jpg";
import flowImg from "@/assets/flow.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Google Gemini Pro 18 mois — Acheter maintenant" },
      { name: "description", content: "Abonnement Google AI Pro : Gemini, Veo, Nano Banana, Flow et 2 To de stockage. Activation rapide via WhatsApp." },
      { property: "og:title", content: "Google Gemini Pro 18 mois" },
      { property: "og:description", content: "Gemini, Veo, Nano Banana, Flow — tout Google AI Pro à petit prix." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const showcase = [
  {
    img: veoImg,
    alt: "Écran de film flottant montrant une montagne au coucher du soleil, entouré de bandes film et de traînées de lumière orange",
    title: "Veo 3",
    ar: "إنشاء فيديوهات بالذكاء الاصطناعي",
    text: "Générez des vidéos réalistes avec son à partir d'un simple texte.",
  },
  {
    img: bananaImg,
    alt: "Portrait sur fond noir à moitié transformé en liquide orange brillant",
    title: "Nano Banana",
    ar: "إنشاء وتعديل الصور",
    text: "Créez et retouchez des images en haute qualité en quelques secondes.",
  },
  {
    img: flowImg,
    alt: "Studio de montage cinématographique sombre avec frames de film et onde audio orange",
    title: "Flow",
    ar: "استوديو الأفلام بالذكاء الاصطناعي",
    text: "L'outil de création de films IA de Google, avec crédits IA inclus.",
  },
];

const features = [
  { icon: "✦", title: "Gemini 3 Pro", ar: "أقوى نموذج ذكاء اصطناعي", text: "Le modèle le plus avancé de Google pour écrire, coder, analyser et raisonner." },
  { icon: "🔬", title: "Deep Research", ar: "بحث معمق", text: "Des rapports de recherche complets générés automatiquement." },
  { icon: "💾", title: "2 To de stockage", ar: "تخزين 2 تيرابايت", text: "Google Drive, Gmail et Photos avec 2 To d'espace." },
  { icon: "📒", title: "NotebookLM Pro", ar: "دفتر ملاحظات ذكي", text: "Résumés, podcasts audio et analyse de vos documents." },
  { icon: "📧", title: "Gemini dans Gmail & Docs", ar: "داخل تطبيقات جوجل", text: "L'IA directement dans Gmail, Docs, Sheets et Meet." },
];

const steps = [
  { n: "1", t: "Cliquez sur Acheter", ar: "اضغط على اشتري الآن" },
  { n: "2", t: "Payez par carte via PayPal", ar: "ادفع بالبطاقة عبر PayPal" },
  { n: "3", t: "Recevez le lien sur WhatsApp", ar: "استلم رابط التفعيل على واتساب" },
];

function BuyButton({ big }: { big?: boolean }) {
  return (
    <a href={PAYPAL_URL} target="_blank" rel="noopener noreferrer" className={`btn-buy ${big ? "btn-buy-lg" : ""}`}>
      Acheter maintenant · اشتري الآن
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-border bg-card/60 px-5 py-3 backdrop-blur mx-4 md:mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-bold">G✦</div>
          <span className="font-display font-bold tracking-wide">GEMINI STORE</span>
        </div>
        <a href="#offre" className="text-sm text-muted-foreground hover:text-foreground">L'offre</a>
      </header>

      <section className="px-6 pt-20 pb-10 text-center">
        <h1 className="font-display text-5xl font-bold tracking-[0.12em] text-muted-foreground md:text-7xl">PRODUIT</h1>
        <p className="mt-4 font-display text-lg font-semibold tracking-[0.25em] md:text-xl">TOUTE L'IA DE GOOGLE</p>
        <p className="mt-2 text-muted-foreground" dir="rtl">كل أدوات الذكاء الاصطناعي من جوجل</p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="glow-card overflow-hidden rounded-[2rem] border border-border">
          <img
            src={heroImg}
            alt="Ordinateur portable et smartphone sur fond noir affichant une interface d'assistant IA en lumière orange"
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="glow-card mx-auto max-w-xl overflow-hidden rounded-[2rem] text-center">
          <div className="p-8">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Gemini Pro {DURATION}</h2>
            <div className="mt-6"><BuyButton /></div>
          </div>
          <div className="orange-panel pb-8 pl-16 pr-6 pt-12">
            <div className="rounded-2xl bg-card p-6 text-left shadow-2xl">
              <p className="font-display text-2xl font-black">GOOGLE AI Pro ✦</p>
              <div className="mt-3 flex flex-wrap items-baseline gap-3">
                <span className="font-display text-5xl font-black text-gold">{PRICE}</span>
                <span className="text-muted-foreground line-through">{OLD_PRICE}</span>
              </div>
              <p className="mt-1 font-semibold text-primary">{DURATION} d'accès complet</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {["Gemini 3 Pro", "Veo 3", "Nano Banana", "Flow + crédits", "2 To stockage", "Deep Research"].map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="text-primary">✓</span>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="offre" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Ce que vous obtenez</h2>
        <p className="mt-2 text-center text-muted-foreground" dir="rtl">ماذا ستحصل عليه مع هذا العرض</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {showcase.map((s) => (
            <div key={s.title} className="feature-card overflow-hidden rounded-2xl">
              <img
                src={s.img}
                alt={s.alt}
                width={960}
                height={688}
                loading="lazy"
                className="h-48 w-full object-cover md:h-56"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-primary" dir="rtl">{s.ar}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="feature-card rounded-2xl p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="text-sm text-primary" dir="rtl">{f.ar}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-center font-display text-3xl font-bold">Comment ça marche ?</h2>
        <p className="mt-2 text-center text-muted-foreground" dir="rtl">كيف تعمل العملية؟</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="feature-card rounded-2xl p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-buy font-display text-xl font-bold text-primary-foreground">{s.n}</div>
              <p className="mt-4 font-semibold">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground" dir="rtl">{s.ar}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="font-display text-4xl font-bold">Prêt à commencer ?</h2>
        <p className="mt-2 text-muted-foreground">{PRICE} seulement pour {DURATION}</p>
        <div className="mt-8"><BuyButton big /></div>
        <p className="mt-6 text-sm text-muted-foreground">
          Une question ? <a href={whatsappUrl()} className="text-primary underline">Contactez-nous sur WhatsApp</a>
        </p>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 Gemini Store · Paiement sécurisé PayPal
      </footer>
    </main>
  );
}
