"use client";

import { useState } from "react";
import { getCart, clearCart } from "../store/cart";
import { useRouter } from "next/navigation";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  const [cart] = useState<CartItem[]>(() => getCart());
  const [customerName, setCustomerName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    if (!customerName.trim()) {
      alert("Please enter your name");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer_name: customerName,
          total_amount: total,
        }),
      });

      const data = await response.json();

      clearCart();

      router.push(`/bill/${data.order_number}`);
    } catch (error) {
      console.error(error);
      alert("Failed to create order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-8 py-10">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
        Checkout
      </h1>

      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl">
        <input
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-4 rounded-xl bg-slate-800 mb-6 outline-none"
        />

        <div className="space-y-4 mb-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold text-cyan-400 mb-6">
          Total: ₹{total}
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
        >
          {loading ? "Creating Order..." : "Place Order"}
        </button>
      </div>
    </main>
  );
}