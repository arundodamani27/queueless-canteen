"use client";

import Link from "next/link";
import { useState } from "react";
import { getCart, removeFromCart } from "../store/cart";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(() => getCart());

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id: number) => {
    removeFromCart(id);
    setCart(getCart());
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-slate-400 text-lg">Cart is empty</p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 p-5 rounded-2xl flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-slate-400">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl transition"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-2xl font-bold text-cyan-400">
            Total: ₹{total}
          </div>

          <Link href="/checkout">
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold text-lg transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </main>
  );
}