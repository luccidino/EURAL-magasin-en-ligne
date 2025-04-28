import { useState } from "react";

export default function ProductCard({ product, addToCart }) {
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="rounded-2xl shadow-lg hover:scale-105 transition-transform">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-t-2xl" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.price} €</p>
        <select
          className="w-full mb-4 p-2 border rounded"
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <button
          className="w-full bg-gradient-to-r from-violetGradientStart to-violetGradientEnd text-white py-2 rounded-xl"
          onClick={() => addToCart(product, selectedSize)}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
