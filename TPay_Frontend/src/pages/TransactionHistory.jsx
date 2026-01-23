import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Download, 
  Search,
  ArrowUpRight,
  ArrowDownRight,
  CreditCard,
  Utensils,
  Car,
  ShoppingBag,
  Home,
  Clock,
  Gift,
  User,
  QrCode,
  MoreVertical,
  ChevronDown
} from 'lucide-react';

const transactions = [
  {
    id: 1,
    title: "Money Added via International Card",
    subtitle: "Bank Transfer + Visa ending ****4521",
    amount: "+15,000",
    currency: "NPR",
    type: "income",
    category: "card",
    date: "Today - July 1, 2025",
    time: "10:30 AM",
    txnId: "TPA2025063015430",
    status: "completed",
    icon: <CreditCard className="text-blue-500" size={20} />
  },
  {
    id: 2,
    title: "Lunch at Dal Bhat Corner",
    subtitle: "Thamel, Kathmandu • QR Payment",
    amount: "-400",
    currency: "NPR",
    type: "expense",
    category: "food",
    date: "Today - July 1, 2025",
    time: "1:15 PM",
    txnId: "TPA2025063014215",
    status: "completed",
    icon: <Utensils className="text-red-500" size={20} />
  },
  {
    id: 3,
    title: "Taxi to Nepal Engineering College",
    subtitle: "Ride Booking • 45 km journey",
    amount: "-1,000",
    currency: "NPR",
    type: "expense",
    category: "transport",
    date: "Yesterday - June 30, 2025",
    time: "5:21 PM",
    txnId: "TPA2025062917215",
    status: "completed",
    icon: <Car className="text-purple-500" size={20} />
  },
  {
    id: 4,
    title: "Hotel Booking - Kathmandu Grand",
    subtitle: "3 nights • Booking.com",
    amount: "-12,500",
    currency: "NPR",
    type: "expense",
    category: "hotel",
    date: "June 29, 2025",
    time: "8:45 PM",
    txnId: "TPA2025062819452",
    status: "completed",
    icon: <Home className="text-orange-500" size={20} />
  },
  {
    id: 5,
    title: "Cashback Reward",
    subtitle: "Loyalty Program • Monthly Reward",
    amount: "+500",
    currency: "NPR",
    type: "income",
    category: "reward",
    date: "June 28, 2025",
    time: "12:00 PM",
    txnId: "TPA2025062712000",
    status: "completed",
    icon: <Gift className="text-green-500" size={20} />
  },
  {
    id: 6,
    title: "Shopping at Bhat Bhateni",
    subtitle: "Supermarket • Groceries",
    amount: "-3,250",
    currency: "NPR",
    type: "expense",
    category: "shopping",
    date: "June 27, 2025",
    time: "4:30 PM",
    txnId: "TPA2025062616301",
    status: "completed",
    icon: <ShoppingBag className="text-pink-500" size={20} />
  }
];

const filterOptions = [
  { id: 'all', label: 'All', icon: <Filter size={16} /> },
  { id: 'income', label: 'Income', icon: <ArrowUpRight size={16} /> },
  { id: 'expense', label: 'Expenses', icon: <ArrowDownRight size={16} /> },
  { id: 'transport', label: 'Transport', icon: <Car size={16} /> },
  { id: 'food', label: 'Food', icon: <Utensils size={16} /> },
  { id: 'shopping', label: 'Shopping', icon: <ShoppingBag size={16} /> },
];

export default function TransactionHistory() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredTransactions = transactions.filter(txn => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'income') return txn.type === 'income';
    if (activeFilter === 'expense') return txn.type === 'expense';
    return txn.category === activeFilter;
  });

  const groupedTransactions = filteredTransactions.reduce((groups, txn) => {
    const date = txn.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(txn);
    return groups;
  }, {});

  return (
    <div className="relative w-full max-w-[400px] min-h-screen bg-gradient-to-b from-white via-gray-50 to-indigo-50/20 shadow-xl overflow-y-auto no-scrollbar pb-24">
      
      {/* Header */}
      <header className="pt-10 px-6 pb-4 bg-gradient-to-b from-white to-white/95 backdrop-blur-sm sticky top-0 z-20">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Transaction History
          </h1>
          <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            <Download size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
          />
        </div>

        {/* Filter Buttons - Desktop */}
        <div className="hidden md:flex gap-2 mb-4">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${activeFilter === filter.id 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {filter.icon}
              <span className="text-sm font-medium">{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Filter Dropdown - Mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-2xl"
          >
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-600" />
              <span className="font-medium">
                {filterOptions.find(f => f.id === activeFilter)?.label}
              </span>
            </div>
            <ChevronDown size={18} className={`text-gray-600 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          {showFilters && (
            <div className="absolute left-6 right-6 mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-30">
              {filterOptions.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActiveFilter(filter.id);
                    setShowFilters(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 ${activeFilter === filter.id ? 'bg-indigo-50' : ''} hover:bg-gray-50 transition-colors`}
                >
                  {filter.icon}
                  <span className={`font-medium ${activeFilter === filter.id ? 'text-indigo-600' : 'text-gray-700'}`}>
                    {filter.label}
                  </span>
                  {activeFilter === filter.id && (
                    <div className="ml-auto w-2 h-2 bg-indigo-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-100">
            <div className="flex items-center gap-2 mb-1">
              <ArrowUpRight size={16} className="text-green-600" />
              <span className="text-sm text-green-800 font-medium">Income</span>
            </div>
            <p className="text-xl font-bold text-green-900">NPR 15,500</p>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-2xl border border-red-100">
            <div className="flex items-center gap-2 mb-1">
              <ArrowDownRight size={16} className="text-red-600" />
              <span className="text-sm text-red-800 font-medium">Expenses</span>
            </div>
            <p className="text-xl font-bold text-red-900">NPR 17,150</p>
          </div>
        </div>
      </header>

      {/* Transactions List */}
      <div className="px-6 pb-8">
        {Object.entries(groupedTransactions).map(([date, dateTransactions]) => (
          <div key={date} className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">{date}</h2>
              <span className="text-sm text-gray-500">
                {dateTransactions.length} transactions
              </span>
            </div>

            <div className="space-y-3">
              {dateTransactions.map((txn) => (
                <div
                  key={txn.id}
                  className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-xl ${txn.type === 'income' ? 'bg-green-50' : 'bg-red-50'}`}>
                        {txn.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{txn.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{txn.subtitle}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                            TXN: {txn.txnId}
                          </span>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${txn.status === 'completed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'}`}>
                            {txn.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className={`text-lg font-bold ${txn.type === 'income' 
                        ? 'text-green-600' 
                        : 'text-red-600'}`}>
                        {txn.type === 'income' ? '+' : '-'}{txn.currency} {txn.amount}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{txn.time}</div>
                    </div>
                  </div>

                  {/* Transaction Details - Hidden by default */}
                  <div className="mt-4 pt-4 border-t border-gray-100 hidden group-hover:block">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-gray-500">Category:</span>
                        <span className="ml-2 font-medium capitalize">{txn.category}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Type:</span>
                        <span className={`ml-2 font-medium ${txn.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                          {txn.type === 'income' ? 'Credit' : 'Debit'}
                        </span>
                      </div>
                    </div>
                    <button className="mt-3 w-full py-2 text-sm text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <button className="w-full py-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl text-gray-600 font-medium hover:bg-gray-200 transition-colors">
          Load More Transactions
        </button>

        {/* Empty State (when filtered results are empty) */}
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Filter size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">No transactions found</h3>
            <p className="text-gray-500">Try changing your filters or search term</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full max-w-[400px] bg-white h-20 flex justify-around items-center border-t border-gray-200">
        <Link to={"/"}>
        <NavButton icon={<Home size={20} />} label="Home" />
        </Link>
        <NavButton icon={<Clock size={20} />} label="History" active={true} />
        <div className="relative -top-4">
          <button className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
            <QrCode size={20} className="text-white" />
          </button>
        </div>
        <NavButton icon={<Gift size={20} />} label="Offers" />
        <Link to="/profile">
        <NavButton icon={<User size={20} />} label="Profile" />
        </Link>
      </nav>
    </div>
  );
}

const NavButton = ({ icon, label, active = false }) => (
  <button className="flex flex-col items-center justify-center p-2">
    <div className={`p-2 rounded-lg ${active ? 'bg-indigo-50' : ''}`}>
      {React.cloneElement(icon, {
        className: `w-5 h-5 ${active ? 'text-indigo-600' : 'text-gray-400'}`
      })}
    </div>
    <span className={`text-xs mt-1 ${active ? 'text-indigo-600 font-semibold' : 'text-gray-500'}`}>
      {label}
    </span>
  </button>
);