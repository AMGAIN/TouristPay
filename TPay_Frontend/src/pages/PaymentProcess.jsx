import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PaymentProcess = () => {
    const [amount, setAmount] = useState('00.00');
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

    const handleNumberClick = (value) => {
        if (amount === '00.00' && value !== '.') {
            setAmount(value === '0' ? '0.00' : value);
        } else {
            if (amount.length < 10) { // Limit length
                const newAmount = amount === '00.00' ? value : amount + value;
                // Ensure proper decimal formatting
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
                // Ensure proper decimal formatting
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
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            // alert(`Payment of NPR ${amount} to Shushila Enterprises processed successfully!`);
        }, 1500);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // In a real app, this would navigate to different views
        console.log(`Navigating to ${tab}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
                {/* Header with time */}
                <div className="flex items-center px-6 pt-6">
                    {/* Left: Back button */}
                    <Link to="/">
                        <ArrowLeft size={24} />
                    </Link>

                    {/* Center: Title */}
                    <div className="flex-1 text-center text-xl font-bold text-blue-600">
                        Send Money
                    </div>

                    {/* Right: empty space to balance the left icon */}
                    <div className="w-6"></div>
                </div>

                {/* Balance Section */}
                <div className="mt-6 px-6">
                    <div className="text-gray-500 text-sm">Balance</div>
                    <div className="text-3xl font-bold text-gray-800">NPR 12000.89</div>
                </div>

                {/* Merchant Info */}
                <div className="mt-8 mx-6 p-4 bg-blue-50 rounded-2xl">
                    <div className="text-lg font-semibold text-gray-800">Shushila Enterprises</div>
                    <div className="mt-1 text-gray-600 text-sm">
                        Merchant ID <span className="font-mono">11000032000432</span>
                    </div>
                    <div className="mt-3 flex items-center justify-center">
                        <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                            Make Safe Payment
                        </div>
                    </div>
                </div>

                {/* Amount Display */}
                <div className="mt-8 px-6">
                    <div className="text-gray-500 text-sm">Send Amount</div>
                    <div className="text-5xl font-bold text-gray-800 text-center py-4 border-b-2 border-gray-100">
                        NPR {amount}
                    </div>
                </div>

                {/* Number Pad */}
                <div className="mt-8 px-6 pb-8">
                    <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'DEL'].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    if (item === 'DEL') {
                                        handleDelete();
                                    } else if (item === '.') {
                                        if (!amount.includes('.')) {
                                            handleNumberClick('.');
                                        }
                                    } else {
                                        handleNumberClick(item.toString());
                                    }
                                }}
                                className={`  h-16 rounded-2xl flex items-center justify-center text-2xl font-medium  ${item === 'DEL'? 'bg-red-50 text-red-600 hover:bg-red-100 active:bg-red-200': item === '.'? 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300': 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200'}  transition-colors duration-200`}>
                                {item === 'DEL' ? (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l9-9 9 9-9 9-9-9z" />
                                    </svg>
                                ) : item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Continue Button */}
                <div className="px-6 pb-6">
                    <Link to="pprocess2">
                    <button
                        onClick={handleContinuePayment}
                        disabled={isProcessing}
                        className={`
              w-full py-4 rounded-2xl text-white font-bold text-lg
              ${isProcessing
                                ? 'bg-blue-400'
                                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                            }
              transition-colors duration-200
              flex items-center justify-center
            `}
                    >
                        {isProcessing ? (
                            <>
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            'Continue Payment'
                        )}
                    </button>
                    </Link>
                </div>

                {/* Bottom Navigation */}
                <div className="border-t border-gray-200">
                    <div className="grid grid-cols-5">
                        {['Home', 'History', 'Offers', 'Profile'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`
                  py-4 flex flex-col items-center justify-center
                  ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'}
                  hover:text-blue-500 transition-colors duration-200
                `}
                            >
                                <div className={`text-sm font-medium ${activeTab === tab ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {tab}
                                </div>
                                {activeTab === tab && (
                                    <div className="w-1/2 h-1 bg-blue-600 rounded-full mt-1"></div>
                                )}
                            </button>
                        ))}
                        {/* Add an empty div for the middle spacing */}
                        <div className="py-4"></div>
                    </div>
                </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 text-center text-gray-600 text-sm max-w-md">
                <p>After scanning the QR code, enter the amount you wish to send and click "Continue Payment" to proceed.</p>
            </div>
        </div>
    );
};

export default PaymentProcess;