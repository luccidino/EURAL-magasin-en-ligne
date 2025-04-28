export default function PromoInput({ promoCode, setPromoCode }) {
  return (
    <input
      type="text"
      placeholder="Code promo"
      value={promoCode}
      onChange={(e) => setPromoCode(e.target.value)}
      className="w-full p-2 border rounded mb-4"
    />
  );
}
