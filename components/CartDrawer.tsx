import { useState } from "react";
import PromoInput from "./PromoInput";
import { Loader2 } from "lucide-react";

export default function CartDrawer({ cart, promoCode, setPromoCode }) {
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const discountedTotal = promoCode === "EURAL10" ? (total * 0.9).toFixed(2) : total.toFixed(2);

  const checkout = async () => {
    setLoading(true);
    const response = await fetch("/api/sumup-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, promoCode }),
    });
    const data = await response.json();
    window.location.href = data.checkout_url;
  };

  return (
    <aside className="fixed top-0 right-0 w-80 h-full bg-white p-6 border-l shadow-2xl overflow-y-auto z-50">
      <h2 className="text-2xl font-bold mb-6">Votre Panier</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.name} ({item.size})</span>
              <span>{item.price} €</span>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="mt-6">
          <PromoInput promoCode={promoCode} setPromoCode={setPromoCode} />
          <p className="text-xl font-semibold my-4">Total : {discountedTotal} €</p>
          <button
            className="w-full bg-gradient-to-r from-violetGradientStart to-violetGradientEnd text-white py-3 rounded-xl mt-4"
            onClick={checkout}
          >
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "Payer par carte"}
          </button>
        </div>
      )}
    </aside>
  );
}
