"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock3,
  CreditCard,
  CheckCircle,
  ArrowRight,
  UtensilsCrossed,
  QrCode,
  Coffee,
} from "lucide-react";

export default function Home() {
  const benefits = [
    {
      icon: <Clock3 size={28} />,
      title: "Faster Ordering",
      desc: "Skip long queues and place your order within seconds.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Instant Payments",
      desc: "Pay online securely and avoid cash counter delays.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Digital Receipt",
      desc: "Show your live receipt and collect food instantly.",
    },
    {
      icon: <QrCode size={28} />,
      title: "Quick Access",
      desc: "Open instantly using QR code from the canteen.",
    },
  ];

  const steps = [
    {
      icon: <QrCode size={32} />,
      title: "Open QueueLess",
      desc: "Scan QR code or open the website from your phone.",
    },
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Choose Food",
      desc: "Browse menu and add your favorite food to cart.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Pay Online",
      desc: "Complete secure payment in just a few taps.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Collect Food",
      desc: "Show digital receipt and collect your food.",
    },
  ];

  const menuPreview = [
    { name: "Veg Meals", price: "₹50" },
    { name: "Tea", price: "₹10" },
    { name: "Coffee", price: "₹15" },
    { name: "Sandwich", price: "₹40" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">
          QueueLess Canteen
        </h1>

        <Link href="/menu">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-medium transition">
            Order Now
          </button>
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative px-8 py-24 md:px-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold mb-4">
              Smart Campus Food Ordering
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Skip the Queue.
              <br />
              <span className="text-cyan-400">Order in Seconds.</span>
            </h1>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Browse menu, pay instantly, and collect your food without waiting
              in long canteen lines.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link href="/menu">
                <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
                  Start Ordering <ArrowRight size={18} />
                </button>
              </Link>

              <button
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-xl transition"
              >
                How It Works
              </button>
            </div>
          </motion.div>

          {/* Digital Receipt Mock */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="bg-white text-black rounded-3xl shadow-2xl w-[340px] p-6">
              <div className="text-center border-b pb-4">
                <h2 className="font-bold text-xl">QUEUELESS CANTEEN</h2>
                <p className="text-sm">Digital Receipt</p>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Order No</span>
                  <span>ORD2041</span>
                </div>

                <div className="flex justify-between">
                  <span>Veg Meals</span>
                  <span>₹50</span>
                </div>

                <div className="flex justify-between">
                  <span>Tea</span>
                  <span>₹10</span>
                </div>

                <div className="border-t pt-3 flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹60</span>
                </div>

                <div className="text-center mt-4">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-xs animate-pulse">
                    PAYMENT VERIFIED
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-8 md:px-20 py-20 bg-slate-900">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Why Students Love It</h2>
          <p className="text-slate-300 text-lg">
            Faster, easier, and stress-free food ordering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="px-8 md:px-20 py-20"
      >
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-300 text-lg">
            Get your food in 4 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
            >
              <div className="text-cyan-400 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menu Preview */}
      <section className="px-8 md:px-20 py-20 bg-slate-900">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Popular Menu Items</h2>
          <p className="text-slate-300 text-lg">
            Quick favorites students order every day.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {menuPreview.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl text-center"
            >
              <div className="flex justify-center mb-4 text-cyan-400">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Hungry? Skip the Queue Now.
        </h2>

        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Order food faster and enjoy a smooth canteen experience.
        </p>

        <Link href="/menu">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold text-lg transition">
            Order Food Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 md:px-20 py-8 text-center text-slate-400">
        © 2026 QueueLess Canteen
      </footer>
    </main>
  );
}