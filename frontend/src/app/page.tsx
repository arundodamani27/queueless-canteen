"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  QrCode,
  Clock3,
  CreditCard,
  Bot,
  CheckCircle,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Bot size={28} />,
      title: "Virtual Billing Agent",
      desc: "Acts like a digital billing counter during rush hours.",
    },
    {
      icon: <CreditCard size={28} />,
      title: "Secure Digital Payments",
      desc: "Students can pay instantly and receive a live bill.",
    },
    {
      icon: <Clock3 size={28} />,
      title: "Save Time",
      desc: "Reduce long queues and waiting during lunch rush.",
    },
    {
      icon: <QrCode size={28} />,
      title: "QR Access",
      desc: "Quick access by scanning QR code placed in the canteen.",
    },
  ];

  const steps = [
    {
      title: "Scan QR",
      desc: "Students scan the canteen QR code during rush hours.",
      icon: <QrCode size={32} />,
    },
    {
      title: "Select Food",
      desc: "Choose meals, snacks, or beverages using the virtual counter.",
      icon: <UtensilsCrossed size={32} />,
    },
    {
      title: "Pay Instantly",
      desc: "Complete payment securely through the app.",
      icon: <CreditCard size={32} />,
    },
    {
      title: "Show Live Bill",
      desc: "Display digital bill at serving counter and collect food.",
      icon: <CheckCircle size={32} />,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-cyan-400">QueueLess Canteen</h1>
        <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-medium transition">
          Try Demo
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold mb-4">
              Smart Rush Hour Canteen Solution
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Skip Long Lunch Queues with a{" "}
              <span className="text-cyan-400">Virtual Counter</span>
            </h1>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              QueueLess Canteen reduces rush-hour congestion by providing a
              digital self-ordering counter that works alongside the traditional
              billing system.
            </p>

            <div className="flex gap-4">
              <Link href="/menu">
  <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
    Get Started <ArrowRight size={18} />
  </button>
</Link>

              <button className="border border-slate-700 hover:border-cyan-400 px-6 py-3 rounded-xl transition">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Mock Digital Bill */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="bg-white text-black rounded-3xl shadow-2xl w-[340px] p-6">
              <div className="text-center border-b pb-4">
                <h2 className="font-bold text-xl">QUEUELESS CANTEEN</h2>
                <p className="text-sm">Digital Live Bill</p>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Bill No</span>
                  <span>V2041</span>
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

      {/* Problem Section */}
      <section className="px-8 md:px-20 py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">The Problem</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            During lunch breaks, hundreds of engineering, MBA, and MCA students
            rush to a single billing counter. This creates long queues, delays
            service, and causes frustration.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="px-8 md:px-20 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Solution</h2>
          <p className="text-slate-300 text-lg">
            A smart virtual billing counter activated only during rush hours.
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

      {/* Features */}
      <section className="px-8 md:px-20 py-20 bg-slate-900">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-slate-300 text-lg">
            Built for speed, scalability, and student convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 p-6 rounded-2xl"
            >
              <div className="text-cyan-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Transform Your College Canteen Experience
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          QueueLess helps reduce waiting time and improves food service
          efficiency during peak hours.
        </p>

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-2xl font-semibold text-lg transition">
          Launch Virtual Counter
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 md:px-20 py-8 text-center text-slate-400">
        © 2026 QueueLess Canteen • MCA Final Year Project
      </footer>
    </main>
  );
}