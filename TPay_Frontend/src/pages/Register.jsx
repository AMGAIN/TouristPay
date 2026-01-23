import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, Check } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="relative w-full max-w-[400px] min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50/30 shadow-xl overflow-y-auto no-scrollbar pb-8">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 rounded-b-3xl"></div>
      <div className="absolute top-32 right-10 w-40 h-40 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-32 left-10 w-32 h-32 bg-gradient-to-r from-purple-100/30 to-pink-100/20 rounded-full blur-2xl"></div>
      
      {/* Header with status bar */}
      <div className="pt-10 px-6 relative z-10">

        {/* Welcome Section */}
        <div className="mb-10">
          <div className="mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-2">Log in to your account</p>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
        </div>
      </div>

      {/* Login Form */}
      <div className="px-6 relative z-10">
        <form className="space-y-6">
            {/* Full Name Field */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative group">
              
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all placeholder:text-gray-400 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-all duration-200 ${rememberMe 
                  ? 'bg-gradient-to-br from-indigo-500 to-purple-500 border-transparent' 
                  : 'border-gray-300 group-hover:border-indigo-300'}`}
                >
                  {rememberMe && <Check size={14} className="text-white" />}
                </div>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                Remember me
              </span>
            </label>
            
            <Link 
              to="/forgot-password" 
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <Link to={"/login"}>
          <button 
            type="submit"
            className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] transition-all duration-200"
          >
            Register
          </button>
          </Link>

        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <span className="px-4 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        {/* Create Account */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Don't have an account?{' '}
            <Link 
              to="/login" 
              className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
            >
              Create new account
            </Link>
          </p>
          
          {/* Social Login Icons (Optional) */}
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="text-blue-600 font-bold text-lg">f</div>
            </button>
            <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="text-red-500 font-bold text-lg">G</div>
            </button>
            <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
              <div className="text-blue-400 font-bold text-lg">in</div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="mt-12 px-6">
        <p className="text-center text-xs text-gray-400">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-indigo-400 hover:text-indigo-300">Terms</Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}