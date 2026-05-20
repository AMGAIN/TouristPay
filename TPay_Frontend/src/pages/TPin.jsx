import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CORRECT_PIN = '1234';

const TPin = () => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const numbers = ['1','2','3','4','5','6','7','8','9','0'];

  const handleNumberClick = (num) => {
    const index = pin.findIndex(p => p === '');
    if (index === -1) return;

    const newPin = [...pin];
    newPin[index] = num;
    setPin(newPin);
  };

  const handleDelete = () => {
    const last = pin.reduce((acc, val, i) => val ? i : acc, -1);
    if (last !== -1) {
      const newPin = [...pin];
      newPin[last] = '';
      setPin(newPin);
    }
  };

  const handleConfirm = () => {
    if (pin.includes('')) {
      setError('Please enter 4-digit PIN');
      return;
    }

    if (pin.join('') !== CORRECT_PIN) {
      setError('Incorrect PIN');
      setPin(['', '', '', '']);
      return;
    }

    setError('');
    setSuccess(true);
  };

  /* ================= SUCCESS SCREEN ================= */
  if (success) {
    return (
      <div className="min-h-screen bg-[#0b1220] flex flex-col items-center justify-center text-white p-6">

        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
        <p className="text-gray-400 text-center mb-8">
          Your transaction has been completed securely.
        </p>

        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 rounded-xl font-semibold
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     shadow-lg active:scale-95 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  /* ================= PIN SCREEN ================= */
  return (
    <div className="min-h-screen bg-[#0b1220] text-white flex flex-col items-center p-6">

      {/* Header */}
      <div className="w-full max-w-md mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 mb-4 hover:text-white transition"
        >
          ← Back
        </button>

        <h1 className="text-2xl font-bold">Enter Transaction PIN</h1>
        <p className="text-gray-400 text-sm mt-1">
          Secure payment authentication
        </p>
      </div>

      {/* PIN BOX */}
      <div className="w-full max-w-md bg-[#111b2e] border border-[#1f2a44] rounded-2xl p-6 mb-6">
        <div className="flex justify-center gap-3 mb-2">

          {pin.map((d, i) => (
            <div
              key={i}
              className="w-12 h-12 flex items-center justify-center rounded-xl
                         bg-[#0b1220] border border-[#1f2a44] text-2xl font-bold"
            >
              {d ? '•' : ''}
            </div>
          ))}

        </div>

        {error && (
          <p className="text-red-400 text-sm text-center mt-3">{error}</p>
        )}
      </div>

      {/* KEYPAD */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-md">

        {numbers.map((n) => (
          <button
            key={n}
            onClick={() => handleNumberClick(n)}
            className="h-12 rounded-xl bg-[#111b2e] border border-[#1f2a44]
                       text-lg font-medium hover:bg-[#16233a]
                       active:scale-95 transition"
          >
            {n}
          </button>
        ))}

        {/* DELETE */}
        <button
          onClick={handleDelete}
          className="h-12 rounded-xl bg-red-500/10 border border-red-500/30
                     text-red-400 font-medium active:scale-95 transition"
        >
          DEL
        </button>

        <div></div>
      </div>

      {/* CONFIRM BUTTON */}
      <div className="fixed bottom-6 left-6 right-6 max-w-md mx-auto">
        <button
          onClick={handleConfirm}
          className="w-full py-4 rounded-2xl font-semibold text-white
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     shadow-lg hover:shadow-blue-500/30
                     active:scale-95 transition"
        >
          Confirm Payment
        </button>
      </div>

    </div>
  );
};

export default TPin;