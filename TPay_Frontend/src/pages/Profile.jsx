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
                <h3 className="text-gray-800 font-bold text-lg mb-4">Personal Info</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <InfoItem label="Tourist Name" value="Milan Wangdu" />
                    <Divider />
                    <InfoItem label="Nationality" value="USA" />
                    <Divider />
                    <InfoItem label="Passport Number" value="PA23232232" />
                    <Divider />
                    <InfoItem label="Tourist Visa" value={<span className="text-green-600 font-medium">Valid: 1 month</span>} />
                    <Divider />
                    <InfoItem label="Email" value="milan12@gmail.com" />
                </div>
            </section>

            {/* Quick Actions Section */}
            <section className="px-5 mt-6">
                <h3 className="text-gray-800 font-bold text-lg mb-4">Quick Action</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <ActionButton icon={<Lock size={20} className="text-blue-600" />} label="Change MPIN" showArrow />
                    <Divider />
                    <ActionButton icon={<Shield size={20} className="text-green-600" />} label="Change Password" showArrow />
                    <Divider />
                    <ActionButton icon={<HelpCircle size={20} className="text-purple-600" />} label="Tourist Support" showArrow />
                    <Divider />
                    <ActionButton icon={<Phone size={20} className="text-red-600" />} label="Emergency Contact" showArrow />
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
                    <Link to={"paymentprocess"}>
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
