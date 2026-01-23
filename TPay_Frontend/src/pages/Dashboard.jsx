import React from "react";
import { Link } from "react-router-dom";
import {
  Filter,
  Home,
  Clock,
  Gift,
  User,
  QrCode
} from "lucide-react";
import BankIcon from "../assets/icons/bank.png";
import CardIcon from "../assets/icons/card.png";
import MobileIcon from "../assets/icons/mobile.png";
import OfferIcon from "../assets/icons/offer.png";
import ScanIcon from "../assets/icons/scan.png";
import WalletIcon from "../assets/icons/wallet.png";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-y-auto no-scrollbar pb-28 bg-gray-50">

      {/* Header */}
      <header className="pt-10 px-6 pb-5 bg-white sticky top-0 z-10 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Profile + Greeting */}
          <div className="flex items-center gap-4">
            <Link to="/profile" className="relative">
              <img
                src="https://i.pravatar.cc/150?img=33"
                className="w-12 h-12 rounded-full ring-2 ring-indigo-500 ring-offset-2"
                alt="profile"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hi, Milan 👋
              </h1>
              <p className="text-sm text-gray-500">Welcome back</p>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-xs font-semibold text-green-800">Verified</span>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-600">Tourist</span>
          </div>
        </div>
      </header>

      {/* Balance + Conversion Cards */}
      <div className="px-5 mt-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Balance (2/3 width) */}
          <div className="col-span-2 bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-5 rounded-2xl">
            <p className="text-indigo-200 text-sm">Available Balance</p>
            <h2 className="text-3xl font-bold mt-2">NPR 12,000.89</h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-indigo-200">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Wallet Active
            </div>
          </div>

          {/* Conversion (1/3 width) */}
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
        <SectionHeader title="Quick Payments" />
        <div className="grid grid-cols-4 gap-3">
          <ActionButton icon={MobileIcon} label="Mobile Top-up" colorClass="bg-indigo-50" />
          <ActionButton icon={BankIcon} label="Bank Transfer" colorClass="bg-blue-50" />
          <ActionButton icon={CardIcon} label="Card Payment" colorClass="bg-purple-50" />
          <ActionButton icon={WalletIcon} label="Wallet Top-up" colorClass="bg-pink-50" />
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-[400px] bg-white h-20 flex justify-around items-center border-t border-gray-200">
        <NavButton icon={Home} label="Home" active={true} />
        <Link to="/tHistory">
          <NavButton icon={Clock} label="History" />
        </Link>
        <div className="relative -top-4">
          <Link to={"pprocess"}>
            <button className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <QrCode size={20} className="text-white" />
            </button>
            </Link>
        </div>
        <NavButton icon={Gift} label="Offers" />
        <Link to="/profile">
          <NavButton icon={User} label="Profile" />
        </Link>
      </nav>
    </div>
  );
}

/* ---------------- UI Components ---------------- */

const SectionHeader = ({ title }) => (
  <h3 className="text-gray-800 font-bold text-lg mb-3 px-1 flex justify-between">
    {title}
    <span className="text-indigo-600 text-sm font-medium">See All</span>
  </h3>
);

const ActionButton = ({ icon, label, colorClass }) => (
  <button className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
    <div className={`p-3 rounded-full ${colorClass}`}>
      <img src={icon} className="w-6 h-6" alt={label} />
    </div>
    <span className="text-xs font-semibold mt-2 text-gray-800">{label}</span>
  </button>
);

const NavButton = ({ icon: Icon, label, active = false }) => (
  <button className="flex flex-col items-center justify-center p-2">
    <div className={`p-2 rounded-lg ${active ? 'bg-indigo-50' : ''}`}>
      <Icon className={`w-5 h-5 ${active ? 'text-indigo-600' : 'text-gray-400'}`} />
    </div>
    <span className={`text-xs mt-1 ${active ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
      {label}
    </span>
  </button>
);
