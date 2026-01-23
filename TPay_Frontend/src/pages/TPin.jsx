// src/components/TransactionPin.jsx
import React, { useState, useRef, useEffect } from 'react';

const TPin = ({ onPinSet, onBack, showSuccess }) => {
  const [pin, setPin] = useState(['', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
  const [step, setStep] = useState(1); // 1: Enter PIN, 2: Confirm PIN
  const [error, setError] = useState('');
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const inputsRef = useRef([]);

  // If showSuccess prop is passed, show success screen immediately
  useEffect(() => {
    if (showSuccess) {
      setShowSuccessScreen(true);
    }
  }, [showSuccess]);

  // Initialize refs for input focus
  useEffect(() => {
    inputsRef.current = inputsRef.current.slice(0, 4);
  }, []);

  // Focus the next empty input
  const focusNextInput = (index) => {
    if (index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Focus the previous input on backspace
  const focusPrevInput = (index) => {
    if (index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleNumberClick = (number) => {
    if (step === 1) {
      const currentIndex = pin.findIndex(digit => digit === '');
      if (currentIndex !== -1) {
        const newPin = [...pin];
        newPin[currentIndex] = number;
        setPin(newPin);
        
        if (currentIndex < 3) {
          focusNextInput(currentIndex);
        } else {
          // All digits filled, move to confirm step after a delay
          setTimeout(() => {
            setStep(2);
            setError('');
          }, 300);
        }
      }
    } else {
      const currentIndex = confirmPin.findIndex(digit => digit === '');
      if (currentIndex !== -1) {
        const newConfirmPin = [...confirmPin];
        newConfirmPin[currentIndex] = number;
        setConfirmPin(newConfirmPin);
        
        if (currentIndex < 3) {
          focusNextInput(currentIndex);
        }
      }
    }
  };

  const handleDeleteClick = () => {
    if (step === 1) {
      const lastFilledIndex = pin.reduce((lastIndex, digit, index) => 
        digit !== '' ? index : lastIndex, -1
      );
      
      if (lastFilledIndex !== -1) {
        const newPin = [...pin];
        newPin[lastFilledIndex] = '';
        setPin(newPin);
        inputsRef.current[lastFilledIndex]?.focus();
      }
    } else {
      const lastFilledIndex = confirmPin.reduce((lastIndex, digit, index) => 
        digit !== '' ? index : lastIndex, -1
      );
      
      if (lastFilledIndex !== -1) {
        const newConfirmPin = [...confirmPin];
        newConfirmPin[lastFilledIndex] = '';
        setConfirmPin(newConfirmPin);
        inputsRef.current[lastFilledIndex]?.focus();
      } else {
        // If all digits empty, go back to step 1
        setStep(1);
        inputsRef.current[3]?.focus();
      }
    }
  };

  const handleSetPin = () => {
    if (step === 1) {
      if (pin.some(digit => digit === '')) {
        setError('Please enter 4-digit PIN');
        return;
      }
      setStep(2);
      setError('');
    } else {
      const enteredPin = pin.join('');
      const confirmedPin = confirmPin.join('');
      
      if (confirmedPin.length < 4) {
        setError('Please confirm your 4-digit PIN');
        return;
      }
      
      if (enteredPin !== confirmedPin) {
        setError('PINs do not match. Please try again.');
        setPin(['', '', '', '']);
        setConfirmPin(['', '', '', '']);
        setStep(1);
        inputsRef.current[0]?.focus();
        return;
      }
      
      // PIN is set successfully - show success screen
      setShowSuccessScreen(true);
      
      // Call onPinSet callback if provided
      if (onPinSet) {
        onPinSet(enteredPin);
      }
    }
  };

  const handleInputChange = (index, value) => {
    if (value && !/^\d$/.test(value)) return;
    
    if (step === 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      
      if (value && index < 3) {
        focusNextInput(index);
      }
    } else {
      const newConfirmPin = [...confirmPin];
      newConfirmPin[index] = value;
      setConfirmPin(newConfirmPin);
      
      if (value && index < 3) {
        focusNextInput(index);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (step === 1) {
        if (!pin[index] && index > 0) {
          focusPrevInput(index);
        }
      } else {
        if (!confirmPin[index] && index > 0) {
          focusPrevInput(index);
        }
      }
    }
  };

  const handleBackClick = () => {
    if (step === 2) {
      setStep(1);
      setConfirmPin(['', '', '', '']);
      setError('');
    } else if (onBack) {
      onBack();
    }
  };

  const handleBackToHome = () => {
    if (onBack) {
      onBack();
    }
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, 'DEL'];

  // Show success screen if enabled
  if (showSuccessScreen) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
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
            onClick={handleBackToHome}
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
  }

  // Original Transaction PIN screen
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="text-lg font-semibold">9:41</div>
          <div className="w-20 h-6 bg-gray-800 rounded-full"></div>
        </div>
        
        <div className="flex items-center mb-6">
          <button 
            onClick={handleBackClick}
            className="mr-3 p-2 rounded-lg hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Set Transaction Pin</h1>
        </div>
      </div>

      {/* PIN Display */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="text-center mb-6">
          <h3 className="font-semibold text-gray-700 mb-4">
            {step === 1 ? 'Enter your 4-digit PIN' : 'Confirm your 4-digit PIN'}
          </h3>
          
          <div className="flex justify-center space-x-4 mb-6">
            {(step === 1 ? pin : confirmPin).map((digit, index) => (
              <input
                key={index}
                ref={el => inputsRef.current[index] = el}
                type="password"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-16 h-16 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                inputMode="numeric"
                autoFocus={index === 0 && step === 1}
              />
            ))}
          </div>
          
          {error && (
            <div className="text-red-600 text-sm mb-4">{error}</div>
          )}
          
          <div className="text-gray-500 text-sm">
            {step === 1 
              ? 'Enter a 4-digit PIN for transactions' 
              : 'Re-enter the same PIN to confirm'}
          </div>
        </div>
      </div>

      {/* Number Pad */}
      <div className="mb-20">
        <div className="grid grid-cols-3 gap-4">
          {numbers.map((number) => (
            <button
              key={number}
              onClick={() => {
                if (number === '.') return; // Dot is disabled
                if (number === 'DEL') {
                  handleDeleteClick();
                } else {
                  handleNumberClick(number.toString());
                }
              }}
              className={`h-20 rounded-xl flex items-center justify-center text-xl font-medium ${
                number === 'DEL'
                  ? 'bg-red-100 text-red-600 hover:bg-red-200'
                  : number === '.'
                  ? 'bg-transparent text-transparent cursor-default'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              disabled={number === '.'}
            >
              {number === 'DEL' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                </svg>
              ) : (
                number
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Set Pin Button */}
      <button
        onClick={handleSetPin}
        className="w-full py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition-transform duration-150 fixed bottom-4 left-4 right-4"
      >
        {step === 1 ? 'Continue' : 'Set Pin'}
      </button>
    </div>
  );
};

export default TPin;