// src/components/Success.jsx
import React from 'react';

const Success = ({ onBackToHome }) => {
  return (
    <div className="border border-black min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold">9:41</div>
          <div className="w-20 h-6 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      {/* Success Content */}
      <div className="flex flex-col items-center justify-center flex-grow max-w-sm w-full">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Your Transaction Pin Created Successfully
        </h1>

        <p className="text-gray-600 text-center mb-12">
          You can now use this PIN for secure transactions. Keep it confidential and don't share it with anyone.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={onBackToHome}
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition-transform duration-150 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </button>

        {/* Additional Info */}
        <div className="mt-12 p-4 bg-blue-50 rounded-xl border border-blue-200 w-full">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-800 text-sm">PIN Security Tips</h3>
              <ul className="text-xs text-blue-700 mt-1 space-y-1">
                <li>• Don't share your PIN with anyone</li>
                <li>• Change your PIN periodically</li>
                <li>• Use a combination you can remember</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;