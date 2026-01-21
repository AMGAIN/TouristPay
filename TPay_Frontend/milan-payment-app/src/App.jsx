// import AeroplaneIcon from "./assets/icons/aeroplane.png";
import BankIcon from "./assets/icons/bank.png";
import CardIcon from "./assets/icons/card.png";
import ClockIcon from "./assets/icons/clock.png";
import HomeIcon from "./assets/icons/home.png";
import MobileIcon from "./assets/icons/mobile.png";
import OfferIcon from "./assets/icons/offer.png";
import ScanIcon from "./assets/icons/scan.png";
import UserIcon from "./assets/icons/user.png";
import WalletIcon from "./assets/icons/wallet.png";

import { SectionHeader, ActionButton } from "./components/UI";

export default function App() {
  return (
    <div className="relative w-full max-w-[400px] h-screen bg-[#FAFAFA] shadow-xl overflow-y-auto no-scrollbar pb-24">

      {/* Header */}
      <header className="pt-10 px-6 pb-4 bg-white">
        <div className="flex justify-between mb-6">
          <span className="text-xl font-bold">9:41</span>
          <img
            src="https://i.pravatar.cc/150?img=33"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold">Hi, Milan 👋</h1>
      </header>

      {/* Balance */}
      <div className="px-5 mt-4">
        <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-6 rounded-2xl">
          <p className="text-indigo-200">Total Balance</p>
          <h2 className="text-3xl font-bold">NPR 12,000.89</h2>
        </div>
      </div>

      {/* Quick Payments */}
      <section className="px-5 mt-6">
        <SectionHeader title="Quick Payments" />
        <div className="grid grid-cols-4 gap-3">
          <ActionButton icon={MobileIcon} label="Mobile" colorClass="bg-indigo-50 text-indigo-600" />
          <ActionButton icon={BankIcon} label="Bank" colorClass="bg-blue-50 text-blue-600" />
          <ActionButton icon={CardIcon} label="Card" colorClass="bg-purple-50 text-purple-600" />
          <ActionButton icon={WalletIcon} label="Wallet" colorClass="bg-pink-50 text-pink-600" />
        </div>
      </section>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 w-full max-w-[400px] bg-white h-20 flex justify-around items-center border-t">
        <HomeIcon />
        <ClockIcon />
        <ScanIcon className="text-primary w-10 h-10" />
        <OfferIcon />
        <UserIcon />
      </nav>

    </div>
  );
}
