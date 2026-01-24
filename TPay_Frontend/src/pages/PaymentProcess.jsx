import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BottomNav from "../components/BottomNav";


const PaymentProcess = () => {
    const [amount, setAmount] = useState('00.00');
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    const navigate = useNavigate(); // ✅ added

    const handleNumberClick = (value) => {
        if (amount === '00.00' && value !== '.') {
            setAmount(value === '0' ? '0.00' : value);
        } else {
            if (amount.length < 10) {
                const newAmount = amount === '00.00' ? value : amount + value;
                if (newAmount.includes('.')) {
                    const parts = newAmount.split('.');
                    if (parts[1].length <= 2) {
                        setAmount(newAmount);
                    }
                } else {
                    setAmount(newAmount);
                }
            }
        }
    };

    const handleDelete = () => {
        if (amount.length > 1) {
            const newAmount = amount.slice(0, -1);
            if (newAmount === '' || newAmount === '0') {
                setAmount('00.00');
            } else {
                if (!newAmount.includes('.')) {
                    setAmount(newAmount + '.00');
                } else {
                    const parts = newAmount.split('.');
                    if (parts[1] === '') {
                        setAmount(parts[0] + '.00');
                    } else if (parts[1].length === 1) {
                        setAmount(parts[0] + '.' + parts[1] + '0');
                    } else {
                        setAmount(newAmount);
                    }
                }
            }
        } else {
            setAmount('00.00');
        }
    };

    const handleContinuePayment = () => {
        if (amount === '00.00' || parseFloat(amount) <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);

            // ✅ navigation only happens here
            navigate('pprocess2', {
                state: { amount }
            });
        }, 1500);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        console.log(`Navigating to ${tab}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="flex items-center px-6 pt-6">
                    <Link to="/">
                        <ArrowLeft size={24} />
                    </Link>

                    <div className="flex-1 text-center text-xl font-bold text-blue-600">
                        Send Money
                    </div>

                    <div className="w-6"></div>
                </div>

                {/* Balance */}
                <div className="mt-6 px-6">
                    <div className="text-gray-500 text-sm">Balance</div>
                    <div className="text-3xl font-bold text-gray-800">
                        NPR 12000.89
                    </div>
                </div>

                {/* Merchant */}
                <div className="mt-8 mx-6 p-4 bg-blue-50 rounded-2xl">
                    <div className="text-lg font-semibold text-gray-800">
                        Shushila Enterprises
                    </div>
                    <div className="mt-1 text-gray-600 text-sm">
                        Merchant ID <span className="font-mono">11000032000432</span>
                    </div>
                    <div className="mt-3 flex justify-center">
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            Make Safe Payment
                        </div>
                    </div>
                </div>

                {/* Amount */}
                <div className="mt-8 px-6">
                    <div className="text-gray-500 text-sm">Send Amount</div>
                    <div className="text-5xl font-bold text-gray-800 text-center py-4 border-b-2">
                        NPR {amount}
                    </div>
                </div>

                {/* Number Pad */}
                <div className="mt-8 px-6 pb-8">
                    <div className="grid grid-cols-3 gap-4">
                        {[1,2,3,4,5,6,7,8,9,'.',0,'DEL'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    if (item === 'DEL') handleDelete();
                                    else if (item === '.') {
                                        if (!amount.includes('.')) handleNumberClick('.');
                                    } else {
                                        handleNumberClick(item.toString());
                                    }
                                }}
                                className={`h-16 rounded-2xl text-2xl font-medium
                                    ${item === 'DEL'
                                        ? 'bg-red-50 text-red-600'
                                        : item === '.'
                                        ? 'bg-gray-100 text-gray-700'
                                        : 'bg-blue-50 text-blue-700'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ✅ Continue Button (NO LINK HERE) */}
                <div className="px-6 pb-6">
                    <button
                        onClick={handleContinuePayment}
                        disabled={isProcessing}
                        className={`w-full py-4 rounded-2xl text-white font-bold text-lg
                            ${isProcessing
                                ? 'bg-blue-400'
                                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                            }`}
                    >
                        {isProcessing ? 'Processing...' : 'Continue Payment'}
                    </button>
                </div>
                <BottomNav />

            </div>

            <p className="mt-8 text-gray-600 text-sm text-center max-w-md">
                After scanning the QR code, enter the amount and click "Continue Payment".
            </p>
        </div>
    );
};

export default PaymentProcess;
