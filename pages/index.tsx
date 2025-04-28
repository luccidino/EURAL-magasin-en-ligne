import { useState } from "react";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

const products = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Vêtement Sport ${i + 1}`,
  price: (Math.random() * 50 + 20).toFixed(2),
  image: `/images/product-placeholder-${(i % 5) + 1}.jpg`,
}));

export default function Home() {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");

  const addToCart = (product, size) => {
    setCart([...cart, { ...product, size }]);
  };

  return (
    <div className="p-6 max-w-screen-xl mx-auto font-sans">
      <header className="text-center mb-8">
        <div className="flex flex-col items-center">
          <Image src="/eural-logo.png" alt="Logo Eural" width={120} height={120} />
          <h1 className="text-5xl font-heading mt-4 bg-gradient-to-r from-violetGradientStart to-violetGradientEnd text-transparent bg-clip-text uppercase tracking-widest">
            EURAL
          </h1>
          <p className="text-lg italic text-gray-600 mt-2">
            Tu ne connais pas tes limites avant de les avoir dépassées
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </section>

      <CartDrawer cart={cart} promoCode={promoCode} setPromoCode={setPromoCode} />
    </div>
  );
}
