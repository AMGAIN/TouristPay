import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-6">

      {/* Success Icon */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        Payment Successful
      </h1>

      <p className="text-gray-600 text-center mb-10">
        Your payment has been completed successfully.
      </p>

      {/* ✅ WORKING BUTTON */}
      <button
        onClick={() => navigate('/')}
        className="w-full max-w-sm py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;
