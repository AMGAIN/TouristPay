// src/components/SendMoney.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SendMoney = () => {
    const [amount, setAmount] = useState('1000');
    const [selectedPurpose, setSelectedPurpose] = useState('');
    const [remarks, setRemarks] = useState('');

    const purposes = [
        { id: 'hotels', label: 'Hotels Bills' },
        { id: 'travels', label: 'Travels ticket' },
        { id: 'food', label: 'Food' },
        { id: 'wallet', label: 'Wallet Transfer' },
        { id: 'others', label: 'Others' }
    ];

    const handleAmountClick = (value) => {
        setAmount(value);
    };

    const handleContinue = () => {
        if (!selectedPurpose) {
            alert('Please select a purpose');
            return;
        }
        // Handle payment continuation logic here
        console.log({
            amount,
            purpose: selectedPurpose,
            remarks,
            merchantId: '11000032000432'
        });
    };

    // Simple SVG icons as components
    const HomeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    );

    const HistoryIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );

    const OffersIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
    );

    const ProfileIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
            {/* Header */}
            <div className="mb-6">
                

                <h1 className="text-2xl font-bold text-gray-800">Send Money</h1>
                <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-gray-500 text-sm">Balance</div>
                    <div className="text-3xl font-bold text-gray-800">NPR 12000.89</div>
                </div>
            </div>

            {/* Merchant Info */}
            <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
                <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-lg">S</span>
                    </div>
                    <div className="ml-3">
                        <h3 className="font-semibold text-gray-800">Shushila Enterprises</h3>
                        <div className="text-gray-500 text-sm">Merchant ID: 11000032000432</div>
                    </div>
                </div>
            </div>

           

            {/* Purpose Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h3 className="font-semibold text-gray-700 mb-4">Purpose</h3>
                <div className="space-y-3">
                    {purposes.map((purpose) => (
                        <div
                            key={purpose.id}
                            onClick={() => setSelectedPurpose(purpose.id)}
                            className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedPurpose === purpose.id
                                    ? 'bg-blue-50 border border-blue-200'
                                    : 'hover:bg-gray-50'
                                }`}
                        >
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${selectedPurpose === purpose.id
                                    ? 'border-blue-600 bg-blue-600'
                                    : 'border-gray-300'
                                }`}>
                                {selectedPurpose === purpose.id && (
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                            </div>
                            <span className={`font-medium ${selectedPurpose === purpose.id
                                    ? 'text-blue-600'
                                    : 'text-gray-700'
                                }`}>
                                {purpose.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Remarks Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">Remarks</h3>
                <input
                    type="text"
                    placeholder="Write remarks"
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* Continue Button */}
            <Link to="tpin">
            <button
                onClick={handleContinue}
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition-transform duration-150 mb-20"
            >
                Continue Payment
            </button>
            </Link>


            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
                <div className="flex justify-around items-center py-3">
                    <NavItem icon={<HomeIcon />} label="Home" active={true} />
                    <NavItem icon={<HistoryIcon />} label="History" />
                    <NavItem icon={<OffersIcon />} label="Offers" />
                    <NavItem icon={<ProfileIcon />} label="Profile" />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, active = false }) => (
    <div className="flex flex-col items-center cursor-pointer">
        <div className={`${active ? 'text-blue-600' : 'text-gray-500'}`}>
            {icon}
        </div>
        <span className={`text-xs mt-1 ${active ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
            {label}
        </span>
    </div>
);

export default SendMoney;