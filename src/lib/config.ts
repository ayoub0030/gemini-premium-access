// Edit these values with your real info.
export const PRICE = "199 MAD";
export const OLD_PRICE = "2 400 MAD";
export const DURATION = "18 mois";
// PayPal payment link (PayPal.me, hosted button or payment link).
// In PayPal, set the return URL after payment to: https://YOUR-SITE/merci
export const PAYPAL_URL = "https://www.paypal.com/ncp/payment/VOTRE_LIEN";
// WhatsApp number, digits only with country code (no +).
export const WHATSAPP_NUMBER = "212600000000";
export const WHATSAPP_MESSAGE =
  "Bonjour, je viens de payer l'abonnement Google Gemini Pro via PayPal. Merci de m'envoyer le lien d'activation.";
export const whatsappUrl = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
