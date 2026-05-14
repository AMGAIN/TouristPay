import React from "react";
import { Link } from "react-router-dom";
import {
  Filter,
  Clock,
  Gift,
  QrCode,
  Smartphone,
  Building2,
  CreditCard,
  Wallet,
  Tag,
} from "lucide-react";

import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-gray-50">

      {/* ---------------- HEADER ---------------- */}
      <header className="pt-10 px-6 pb-5 bg-white sticky top-0 z-20 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/profile" className="relative">
              <img
                src="https://i.pravatar.cc/150?img=33"
                className="w-12 h-12 rounded-full ring-2 ring-indigo-500 ring-offset-2"
                alt="profile"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hi! Rajan
              </h1>
              <p className="text-sm text-gray-500">Welcome back</p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-xs font-semibold text-green-800">Verified</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-600">Tourist</span>
          </div>
        </div>
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      {/* pb-28 = space for bottom navbar */}
      <main className="pb-28">

        {/* Balance */}
        <div className="px-5 mt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-5 rounded-2xl">
              <p className="text-indigo-200 text-sm">Available Balance</p>
              <h2 className="text-3xl font-bold mt-2">NPR 12,000.89</h2>
              <div className="mt-4 flex items-center gap-2 text-xs text-indigo-200">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Wallet Active
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between">
              <div>
                <p className="text-gray-500 text-xs">Conversion</p>
                <h3 className="text-lg font-bold mt-1">USD</h3>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs">Rate</p>
                <h3 className="text-xl font-bold text-indigo-600">132.40</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Payments */}
        <section className="px-5 mt-6">
          <SectionHeader title="QUICK PAYMENTS" />
          <div className="grid grid-cols-4 gap-3">
            <ActionButton icon={<Smartphone className="w-6 h-6 text-blue-300" />} label="Mobile Top-up" colorClass="bg-indigo-50" />
            <ActionButton icon={<Building2 className="w-6 h-6 text-blue-300" />} label="Bank Transfer" colorClass="bg-blue-50" />
            <ActionButton icon={<CreditCard className="w-6 h-6 text-blue-300" />} label="Card Payment" colorClass="bg-purple-50" />
            <ActionButton icon={<Wallet className="w-6 h-6 text-blue-300" />} label="Wallet Top-up" colorClass="bg-pink-50" />
          </div>
        </section>

        {/* Offers */}
<section className="px-5 mt-8">
  <SectionHeader title="OFFERS & DEALS" />

  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl border border-slate-700/40">
    
    {/* Background Glow */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>

    <div className="relative z-10 flex flex-col gap-5">
      
      {/* Badge */}
      <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
        <Tag className="w-4 h-4 text-orange-300" />
        <span className="text-xs tracking-wide font-semibold text-orange-200">
          LIMITED OFFER
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold leading-tight text-white">
          Get 50% Off on Your First Ride
        </h3>

        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
          Start your journey with exclusive savings. Apply the promo code below during checkout.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-4">
        
        {/* Promo Code */}
        <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10">
          <p className="text-[11px] uppercase tracking-wider text-slate-400">
            Promo Code
          </p>
          <p className="text-sm font-bold text-orange-300">
            WELCOME50
          </p>
        </div>

        {/* Button */}
        <button className="px-5 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-semibold hover:scale-105 transition-transform duration-200 shadow-md">
          Claim Offer
        </button>
      </div>
    </div>
  </div>
</section>

        {/* Quick Actions */}
        <section className="px-5 mt-8">
          <SectionHeader title="QUICK ACTIONS" />
          <div className="grid grid-cols-4 gap-3">
            <QuickAction icon={<QrCode />} label="Scan QR" />
            <QuickAction icon={<Clock />} label="History" />
            <QuickAction icon={<Gift />} label="Rewards" />
            <QuickAction icon={<Filter />} label="Filters" />
          </div>
        </section>

        {/* Transactions */}
        <section className="px-5 mt-8">
          <SectionHeader title="RECENT TRANSACTIONS" />
          <div className="space-y-3">
            <TransactionItem
              type="sent"
              title="To John Doe"
              subtitle="Bank Transfer"
              amount="- $50.00"
              time="10:30 AM"
            />
            <TransactionItem
              type="received"
              title="From Sarah"
              subtitle="Mobile Wallet"
              amount="+ $120.00"
              time="Yesterday"
            />
          </div>
        </section>

      </main>

      {/* ---------------- BOTTOM NAV ---------------- */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe">
        <BottomNav />
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const SectionHeader = ({ title }) => (
  <div className="flex justify-between mb-3 px-1">
    <h3 className="text-gray-800 font-bold text-lg">{title}</h3>
    <span className="text-indigo-600 text-sm font-medium cursor-pointer">See All</span>
  </div>
);

const ActionButton = ({ icon, label, colorClass }) => (
  <button className="flex flex-col border border-zinc-300 items-center p-4 rounded-2xl bg-white shadow-sm translation-transform hover:scale-105">
    <div className={`p-3 rounded-full ${colorClass}`}>
      {icon}
    </div>
    <span className="text-xs font-semibold mt-2">{label}</span>
  </button>
);

const QuickAction = ({ icon, label }) => (
  <button className="flex border border-zinc-300 flex-col items-center p-4 rounded-2xl bg-white shadow-sm translation-transform hover:scale-105">
    <div className="p-3 rounded-full bg-gray-50">{icon}</div>
    <span className="text-xs font-semibold mt-2">{label}</span>
  </button>
);

const TransactionItem = ({ type, title, subtitle, amount, time }) => {
  const colors = {
    sent: "bg-red-100 text-red-600",
    received: "bg-green-100 text-green-600",
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${colors[type]}`}>
          {type === "sent" ? "→" : "←"}
        </div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-bold ${amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
          {amount}
        </p>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
    </div>
  );
};