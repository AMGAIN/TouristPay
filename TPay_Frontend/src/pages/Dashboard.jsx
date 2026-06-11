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
<header className="relative overflow-hidden bg-white shadow-lg rounded-b-3xl px-6 pt-10 pb-6 sticky top-0 z-20">

  {/* Background Decoration */}
  <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-70"></div>
  <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60"></div>

  <div className="relative flex items-center justify-between">

    {/* Left Side */}
    <div className="flex items-center gap-4">

      <Link
        to="/profile"
        className="relative group"
      >
        <div className="absolute inset-0 rounded-full bg-indigo-500 blur-md opacity-40 group-hover:opacity-70 transition"></div>

        <img
          src="https://i.pravatar.cc/150?img=33"
          alt="profile"
          className="relative w-14 h-14 rounded-full border-4 border-white shadow-lg object-cover"
        />

        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></span>
      </Link>

      <div>
        <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold">
          Good Morning 👋
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900">
          Hi, Rajan
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Welcome back! Ready for your next adventure?
        </p>
      </div>

    </div>

    {/* Right Badge */}

    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-2xl px-4 py-2 shadow-sm">

      <div className="flex items-center gap-2">

        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

        <div>
          <p className="text-xs font-bold text-green-700">
            VERIFIED
          </p>

          <p className="text-xs text-gray-500">
            Tourist Account
          </p>
        </div>

      </div>

    </div>

  </div>

  {/* Bottom Card */}

  <div className="mt-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg">

    <div className="flex justify-between items-center">

      <div>
        <p className="text-xs opacity-80">
          Explore Nepal
        </p>

        <h3 className="text-lg font-bold mt-1">
          Discover New Destinations
        </h3>
      </div>

      <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl">
        <p className="text-xs">Status</p>
        <p className="font-semibold">Active</p>
      </div>

    </div>

  </div>

</header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      {/* pb-28 = space for bottom navbar */}
      <main className="pb-28 border ">

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
            {/* <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe"> */}
              <BottomNav />
            {/* </div> */}
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

const SectionHeader = ({ title }) => (
  <div className="flex items-center justify-between mb-5">
    <div>
      <h2 className="text-xl font-bold text-black tracking-tight">
        {title}
      </h2>
      <div className="w-10 h-1 rounded-full bg-black mt-1"></div>
    </div>

    <button className="text-sm font-semibold text-zinc-500 hover:text-black transition-colors duration-300">
      View All →
    </button>
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

import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

const TransactionItem = ({
  type,
  title,
  subtitle,
  amount,
  time,
}) => {
  const isReceived = type === "received";

  return (
    <div
      className="
      group
      bg-white
      border
      border-zinc-200
      rounded-3xl
      p-5
      flex
      justify-between
      items-center
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <div className="flex items-center gap-4">
        <div
          className={`
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          transition-all
          duration-300

          ${
            isReceived
              ? "bg-black text-white"
              : "bg-zinc-100 text-black"
          }
          `}
        >
          {isReceived ? (
            <ArrowDownLeft className="w-6 h-6" />
          ) : (
            <ArrowUpRight className="w-6 h-6" />
          )}
        </div>

        <div>
          <h3 className="font-bold text-black text-base">
            {title}
          </h3>

          <p className="text-sm text-zinc-500 mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="text-right">
        <p
          className={`text-lg font-bold ${
            isReceived
              ? "text-green-600"
              : "text-black"
          }`}
        >
          {amount}
        </p>

        <p className="text-xs text-zinc-400 mt-1">
          {time}
        </p>
      </div>
    </div>
  );
};