"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Order = {
  order_number: string;
  customer_name: string;
  total_amount: number;
  payment_status: string;
};

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: () => Promise<void>;
};

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => {
      open: () => void;
    };
  }
}

export default function BillPage() {
  const params = useParams();
  const orderId = params.orderId as string;

  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  const handlePayment = async () => {
    if (!order) return;

    const paymentRes = await fetch(
      "http://127.0.0.1:8000/payments/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: order.total_amount,
        }),
      }
    );

    const paymentData = await paymentRes.json();

    const options: RazorpayOptions = {
      key: "rzp_test_StgGPRaS6b9bd9",
      amount: paymentData.amount,
      currency: "INR",
      name: "QueueLess Canteen",
      description: "Food Order Payment",
      order_id: paymentData.id,
      handler: async () => {
        await fetch(
          `http://127.0.0.1:8000/payments/mark-paid/${orderId}`,
          {
            method: "POST",
          }
        );

        const updated = await fetch(
          `http://127.0.0.1:8000/orders/${orderId}`
        );

        const updatedData = await updated.json();
        setOrder(updatedData);
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="bg-white text-black rounded-3xl shadow-2xl w-[380px] p-8">
        <div className="text-center border-b pb-4">
          <h1 className="text-2xl font-bold">QUEUELESS CANTEEN</h1>
          <p>Digital Receipt</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <span>Order No</span>
            <span>{order.order_number}</span>
          </div>

          <div className="flex justify-between">
            <span>Customer</span>
            <span>{order.customer_name}</span>
          </div>

          <div className="flex justify-between">
            <span>Total</span>
            <span>₹{order.total_amount}</span>
          </div>

          <div className="flex justify-between">
            <span>Status</span>
            <span>{order.payment_status}</span>
          </div>

          {order.payment_status === "pending" ? (
            <button
              onClick={handlePayment}
              className="w-full mt-6 bg-cyan-500 text-white py-3 rounded-xl"
            >
              Pay Now
            </button>
          ) : (
            <div className="text-center mt-6">
              <span className="bg-green-500 text-white px-5 py-2 rounded-full">
                PAYMENT SUCCESS
              </span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}