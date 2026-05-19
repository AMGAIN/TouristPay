import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Clock, Gift, User, QrCode } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className=" flex justify-evenly w-full">

      <NavButton  to="/" icon={Home} label="Home" active={isActive("/")} />

      <NavButton to="/tHistory" icon={Clock} label="History" active={isActive("/tHistory")} />

      {/* Center Scan Button */}
      <div className="relative top-5">
        <Link to="/pprocess">
          <button className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <QrCode size={22} className="text-white" />
          </button>
        </Link>
      </div>

      <NavButton to="/offers" icon={Gift} label="Offers" active={isActive("/offers")} />

      <NavButton to="/profile" icon={User} label="Profile" active={isActive("/profile")} />
    </nav>
  );
};

const NavButton = ({ to, icon: Icon, label, active }) => (
  <Link to={to} className="flex flex-col items-center">
    <div className={`p-2 rounded-lg ${active ? "bg-indigo-50" : ""}`}>
      <Icon className={`w-5 h-5 ${active ? "text-indigo-600" : "text-gray-400"}`} />
    </div>
    <span className={`text-xs mt-1 ${active ? "text-indigo-600 font-semibold" : "text-gray-500"}`}>
      {label}
    </span>
  </Link>
);

export default BottomNav;
