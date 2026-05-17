import React from 'react';
import {
    ArrowLeft,
    LogOut,
    Shield,
    Lock,
    HelpCircle,
    Phone,
    ChevronRight,
    Calendar,
    CreditCard,
    Activity,
    Home,
    Clock,
    Gift,
    User,
    QrCode
} from 'lucide-react';
import { Link } from "react-router-dom";

export default function ProfilePage() {
    return (
        <div className="relative min-h-screen overflow-y-auto no-scrollbar pb-28 bg-gray-50">

            {/* Header */}
            <header className="pt-10 px-6 pb-4 bg-white sticky top-0 z-10 shadow-sm">
                <div className="flex items-center mb-6">
                    <Link to="/" className="mr-4">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-2xl font-bold">My Profile</h1>
                </div>
            </header>

            {/* Profile Card */}
            <div className="px-5 mt-4">
                <div className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                        <img
                            src="https://i.pravatar.cc/150?img=33"
                            className="w-16 h-16 rounded-full border-2 border-white"
                            alt="profile"
                        />
                        <div className="ml-4">
                            <h2 className="text-xl font-bold">Milan Wangdu</h2>
                            <div className="flex items-center mt-1">
                                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                                    Verified Tourist Account
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="px-5 mt-6">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                    <div className="grid grid-cols-3 gap-4">
                        <StatItem icon={<Calendar size={20} className="text-indigo-600" />} label="Days in Nepal" value="12" />
                        <StatItem icon={<CreditCard size={20} className="text-green-600" />} label="Total Spent" value="₹45K" />
                        <StatItem icon={<Activity size={20} className="text-purple-600" />} label="Transactions" value="156" />
                    </div>
                </div>
            </div>

            {/* Personal Info Section */}
<section className="px-5 mt-6">
  <div className="flex items-center justify-between mb-4">
    <div>
      <h3 className="text-black font-bold text-xl">Personal Info</h3>
      <p className="text-gray-500 text-sm">
        Tourist identification details
      </p>
    </div>

    <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md">
      <span className="text-white font-bold text-sm">ID</span>
    </div>
  </div>

  <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-xl">
    
    {/* Decorative Blur */}
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 p-1">
      
      <InfoItem
        label="Tourist Name"
        value="Milan Wangdu"
        icon="👤"
      />

      <Divider />

      <InfoItem
        label="Nationality"
        value="USA"
        icon="🌍"
      />

      <Divider />

      <InfoItem
        label="Passport Number"
        value="PA23232232"
        icon="🛂"
      />

      <Divider />

      <InfoItem
        label="Tourist Visa"
        value={
          <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            Valid • 1 Month
          </span>
        }
        icon="📄"
      />

      <Divider />

      <InfoItem
        label="Email"
        value="milan12@gmail.com"
        icon="✉️"
      />
    </div>
  </div>
</section>

            {/* Quick Actions Section */}
            <section className="px-5 mt-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="text-gray-900 font-bold text-xl tracking-tight">
                            Quick Actions
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Manage your security and support options
                        </p>
                    </div>

                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-md">
                        <Shield size={18} className="text-white" />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">

                    <ActionButton
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
                                <Lock size={22} className="text-blue-600" />
                            </div>
                        }
                        label="Change MPIN"
                        subtitle="Update your secure payment PIN"
                        showArrow
                    />

                    <Divider />

                    <ActionButton
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                                <Shield size={22} className="text-green-600" />
                            </div>
                        }
                        label="Change Password"
                        subtitle="Keep your account protected"
                        showArrow
                    />

                    <Divider />

                    <ActionButton
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
                                <HelpCircle size={22} className="text-purple-600" />
                            </div>
                        }
                        label="Tourist Support"
                        subtitle="24/7 help & assistance"
                        showArrow
                    />

                    <Divider />

                    <ActionButton
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center">
                                <Phone size={22} className="text-red-600" />
                            </div>
                        }
                        label="Emergency Contact"
                        subtitle="Quick access to emergency numbers"
                        showArrow
                    />
                </div>
            </section>

            {/* Log Out Button */}
            <div className="px-5 mt-6 mb-8">
                <button className="w-full flex items-center justify-center gap-2 bg-white p-4 rounded-2xl shadow-sm border border-red-100 hover:bg-red-50 transition-colors">
                    <LogOut size={20} className="text-red-600" />
                    <span className="text-red-600 font-semibold">Log Out Account</span>
                </button>
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full max-w-[400px] bg-white h-20 flex justify-around items-center border-t border-gray-200">
                <Link to="/">
                    <NavButton icon={Home} label="Home" />
                </Link>
                <Link to="/tHistory">
                    <NavButton icon={Clock} label="History" />
                </Link>
                <div className="relative -top-4">
                    <Link to={"/paymentprocess"}>
                        <button className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                            <QrCode size={20} className="text-white" />
                        </button>
                    </Link>
                </div>
                <NavButton icon={Gift} label="Offers" />
                <NavButton icon={User} label="Profile" active />
            </nav>
        </div>
    );
}

/* ---------------- UI Components ---------------- */
const StatItem = ({ icon, label, value }) => (
    <div className="flex flex-col items-center">
        <div className="p-2 rounded-full bg-gray-50 mb-2">{icon}</div>
        <span className="text-2xl font-bold text-gray-800">{value}</span>
        <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
);

const InfoItem = ({ label, value }) => (
    <div className="flex justify-between items-center p-4">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-gray-800">{value}</span>
    </div>
);

const ActionButton = ({ icon, label, showArrow = false }) => (
    <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gray-50">{icon}</div>
            <span className="font-medium text-gray-800">{label}</span>
        </div>
        {showArrow && <ChevronRight size={20} className="text-gray-400" />}
    </button>
);

const Divider = () => <div className="h-px bg-gray-100" />;

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
