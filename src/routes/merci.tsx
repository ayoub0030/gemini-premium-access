import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { whatsappUrl } from "@/lib/config";

export const Route = createFileRoute("/merci")({
  head: () => ({
    meta: [
      { title: "Merci pour votre achat — Gemini Pro" },
      { name: "description", content: "Paiement reçu. Recevez votre lien d'activation Gemini sur WhatsApp." },
      { property: "og:title", content: "Merci pour votre achat — Gemini Pro" },
      { property: "og:description", content: "Recevez votre lien d'activation Gemini sur WhatsApp." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Merci,
});

function Merci() {
  useEffect(() => {
    const t = setTimeout(() => (window.location.href = whatsappUrl()), 2500);
    return () => clearTimeout(t);
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="glow-card max-w-md rounded-3xl p-10">
        <div className="text-5xl">✅</div>
        <h1 className="mt-4 font-display text-3xl font-bold">Paiement reçu !</h1>
        <p className="mt-2 text-muted-foreground">تم الدفع بنجاح</p>
        <p className="mt-4 text-muted-foreground">
          Redirection vers WhatsApp pour recevoir votre lien d'activation…
        </p>
        <a href={whatsappUrl()} className="btn-buy mt-8 inline-block">
          Ouvrir WhatsApp
        </a>
      </div>
    </main>
  );
}
