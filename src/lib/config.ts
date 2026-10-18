// Edit these values with your real info.
export const PRICE = "199 MAD";
export const OLD_PRICE = "2 400 MAD";
export const DURATION = "18 mois";
// PayPal payment link (PayPal.me, hosted button or payment link).
// In PayPal, set the return URL after payment to: https://YOUR-SITE/merci
export const PAYPAL_URL = "https://www.paypal.com/ncp/payment/GQFN88SLJWYXQ";
// WhatsApp number, digits only with country code (no +).
export const WHATSAPP_NUMBER = "212600000000";
export const WHATSAPP_MESSAGE =
  "Bonjour, je viens de payer l'abonnement Google Gemini Pro via PayPal. Merci de m'envoyer le lien d'activation.";
export const whatsappUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export type Faq = { q: string; ar: string; a: string };

export const FAQ_ITEMS: Faq[] = [
  {
    q: "Combien de temps pour recevoir mon lien ?",
    ar: "كم من الوقت لاستلام رابط التفعيل؟",
    a: "Dès que votre paiement est validé, PayPal vous ramène sur cette page puis ouvre WhatsApp avec un message déjà prêt. Envoyez-le : je vous réponds avec le lien d'activation.",
  },
  {
    q: "Puis-je payer par carte sans compte PayPal ?",
    ar: "هل يمكنني الدفع بالبطاقة بدون حساب باي بال؟",
    a: "Oui. Sur la page de paiement, choisissez « Payer par carte » (Payer sans compte PayPal), puis entrez votre carte Visa ou Mastercard.",
  },
  {
    q: "Est-ce un paiement unique ?",
    ar: "هل هو دفع مرة واحدة؟",
    a: `Oui : ${PRICE} une seule fois pour ${DURATION}. Aucun renouvellement automatique, aucun prélèvement caché.`,
  },
  {
    q: "Sur quels appareils puis-je l'utiliser ?",
    ar: "على أي أجهزة يمكنني استخدامه؟",
    a: "Sur ordinateur, Android, iPhone et iPad, avec l'application Google ou directement dans le navigateur.",
  },
  {
    q: "Et si je rencontre un problème avec le lien ?",
    ar: "ماذا لو واجهت مشكلة في الرابط؟",
    a: "Écrivez-moi sur WhatsApp avec votre reçu PayPal : je vérifie et je vous donne un accès qui fonctionne.",
  },
  {
    q: "Est-ce un produit officiel de Google ?",
    ar: "هل هذا منتج رسمي من جوجل؟",
    a: "L'abonnement est un abonnement Google AI Pro. Nous ne sommes pas Google : nous fournissons l'accès, l'activation et le support sur WhatsApp.",
  },
];

// SAMPLE reviews — replace with real messages from your customers, or remove the section.
export type Review = { name: string; city: string; text: string; ar: string };

export const REVIEWS: Review[] = [
  {
    name: "Yassine",
    city: "Casablanca",
    text: "J'ai reçu le lien peu après le paiement. Tout marche, j'utilise Veo tous les jours pour mes vidéos.",
    ar: "وصلني الرابط بسرعة وكل شيء يعمل",
  },
  {
    name: "Salma",
    city: "Rabat",
    text: "J'ai pu payer par carte sans créer de compte PayPal. Imbattable comme prix pour 18 mois.",
    ar: "دفعت بالبطاقة بدون حساب باي بال",
  },
  {
    name: "Hamza",
    city: "Marrakech",
    text: "Grosse différence avec la version gratuite : Deep Research et 2 To de stockage, ça change tout.",
    ar: "فرق كبير عن النسخة المجانية",
  },
];
