import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CORRECT_PIN = '1234';

const TPin = () => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const inputsRef = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, 4);
  }, []);

  const focusNextInput = (index) => {
    if (index < 3) inputsRef.current[index + 1]?.focus();
  };

  const handleNumberClick = (number) => {
    const currentIndex = pin.findIndex(d => d === '');
    if (currentIndex === -1) return;

    const newPin = [...pin];
    newPin[currentIndex] = number;
    setPin(newPin);

    if (currentIndex < 3) focusNextInput(currentIndex);
  };

  const handleDeleteClick = () => {
    const lastIndex = pin.reduce((last, d, i) => (d !== '' ? i : last), -1);
    if (lastIndex !== -1) {
      const newPin = [...pin];
      newPin[lastIndex] = '';
      setPin(newPin);
      inputsRef.current[lastIndex]?.focus();
    }
  };

  const handleConfirmPayment = () => {
    if (pin.some(d => d === '')) {
      setError('Please enter 4-digit PIN');
      return;
    }

    const enteredPin = pin.join('');
    if (enteredPin !== CORRECT_PIN) {
      setError('Wrong PIN. Please try again.');
      setPin(['', '', '', '']);
      inputsRef.current[0]?.focus();
      return;
    }

    // Payment success
    setError('');
    setShowSuccessScreen(true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const numbers = [1,2,3,4,5,6,7,8,9,0,'DEL'];

  /* ================= PAYMENT SUCCESS SCREEN ================= */
  if (showSuccessScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">Payment Successful</h1>
        <p className="text-gray-600 text-center mb-10">
          Your payment has been completed successfully.
        </p>

        <button
          onClick={handleBackToHome}
          className="w-full max-w-sm py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
        >
          Go back to home
        </button>
      </div>
    );
  }

  /* ================= PIN ENTRY SCREEN ================= */
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 pb-28">
      {/* pb-28 ensures scrolling content doesn't hide behind fixed button */}

      {/* Header */}
      <div className="mb-6 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-3 p-2 rounded-lg">
          ←
        </button>
        <h1 className="text-2xl font-bold">Enter Transaction PIN</h1>
      </div>

      {/* PIN Inputs */}
      <div className="bg-white rounded-2xl p-8 mb-8">
        <h3 className="text-center font-semibold mb-6">Enter your 4-digit PIN</h3>
        <div className="flex justify-center space-x-4 mb-4">
          {pin.map((digit, i) => (
            <input
              key={i}
              ref={el => inputsRef.current[i] = el}
              type="password"
              maxLength="1"
              value={digit}
              readOnly
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg"
            />
          ))}
        </div>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
      </div>

      {/* NUMBER PAD */}
      <div className="grid grid-cols-3 gap-4 mb-28">
        {numbers.map(n => (
          <button
            key={n}
            onClick={() => n === 'DEL' ? handleDeleteClick() : handleNumberClick(n.toString())}
            className={`h-20 rounded-xl text-xl font-medium ${
              n === 'DEL' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {/* MOBILE FIXED CONFIRM BUTTON */}
      <button
        onClick={handleConfirmPayment}
        className="fixed bottom-4 left-4 right-4 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 active:scale-95 transition-transform duration-150"
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default TPin;
