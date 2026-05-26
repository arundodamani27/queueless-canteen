"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { addToCart } from "../store/cart";

type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  available: boolean;
};

export default function MenuPage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/menu/")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
    });

    alert(`${item.name} added to cart`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-xl">
        Loading menu...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-4xl font-bold text-cyan-400">Canteen Menu</h1>

        <Link href="/cart">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition">
            View Cart
          </button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-cyan-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>

            <p className="text-slate-400 mb-3">{item.category}</p>

            <p className="text-3xl font-bold text-cyan-400 mb-6">
              ₹{item.price}
            </p>

            <button
              onClick={() => handleAddToCart(item)}
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-xl font-semibold transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}