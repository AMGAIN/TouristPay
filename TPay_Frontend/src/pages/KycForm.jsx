import React, { useState } from 'react';

const TouristKYCForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    
    // Passport Details
    passportNumber: '',
    placeOfIssue: '',
    issueDate: '',
    expiryDate: '',
    
    // Visa & Travel Information
    visaType: '',
    visaIssueDate: '',
    visaExpiryDate: '',
    expectedExitDate: '',
    
    // Financial Information
    sourceOfFunds: '',
    estimatedAmount: '',
    primaryBankName: '',
    monthlyIncomeRange: '',
    
    // Document Upload
    passportPhoto: null,
    visaPage: null,
    selfie: null,
    proofOfAddress: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('KYC Form Submitted Successfully!');
    // Here you would typically send the data to your backend
  };

  const countryOptions = ['United States', 'United Kingdom', 'Canada', 'Australia', 'India', 'Germany', 'France', 'Japan', 'China', 'Other'];
  const visaTypeOptions = ['Tourist Visa', 'Business Visa', 'Student Visa', 'Work Visa', 'Transit Visa'];
  const sourceOfFundsOptions = ['Employment', 'Business', 'Savings', 'Investments', 'Family Support', 'Other'];
  const monthlyIncomeOptions = ['Below $1,000', '$1,000 - $3,000', '$3,000 - $5,000', '$5,000 - $10,000', 'Above $10,000'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
          <h1 className="text-2xl font-bold">Tourist KYC Verification</h1>
          <p className="text-blue-100 mt-1">Complete verification to convert currency to NPR</p>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4, 5].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {step}
                </div>
                <div className="text-xs mt-2 text-gray-600 text-center">
                  {step === 1 && 'Personal'}
                  {step === 2 && 'Passport'}
                  {step === 3 && 'Visa'}
                  {step === 4 && 'Financial'}
                  {step === 5 && 'Documents'}
                </div>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-200 mt-2 relative">
            <div className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300"
                 style={{ width: `${((currentStep - 1) / 4) * 100}%` }}></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter first name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Middle Name *
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter middle name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter last name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality *
                  </label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Select Country</option>
                    {countryOptions.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Passport Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">Passport Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passport Number *
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter passport number"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Place of Issue *
                  </label>
                  <input
                    type="text"
                    name="placeOfIssue"
                    value={formData.placeOfIssue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter place of issue"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Issue Date *
                  </label>
                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date *
                  </label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Visa & Travel Information */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">Visa & Travel Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visa Type *
                  </label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Select Visa Type</option>
                    {visaTypeOptions.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visa Issue Date *
                  </label>
                  <input
                    type="date"
                    name="visaIssueDate"
                    value={formData.visaIssueDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visa Expiry Date *
                  </label>
                  <input
                    type="date"
                    name="visaExpiryDate"
                    value={formData.visaExpiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Exit Date *
                  </label>
                  <input
                    type="date"
                    name="expectedExitDate"
                    value={formData.expectedExitDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Financial Information */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">Financial Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Source of Funds *
                  </label>
                  <select
                    name="sourceOfFunds"
                    value={formData.sourceOfFunds}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Select Source</option>
                    {sourceOfFundsOptions.map((source) => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Amount to Convert *
                  </label>
                  <input
                    type="number"
                    name="estimatedAmount"
                    value={formData.estimatedAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Primary bank name
                  </label>
                  <input
                    type="text"
                    name="primaryBankName"
                    value={formData.primaryBankName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Enter bank name"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Income Range *
                  </label>
                  <select
                    name="monthlyIncomeRange"
                    value={formData.monthlyIncomeRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Select Range</option>
                    {monthlyIncomeOptions.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Document Upload */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-blue-600 pl-3">Document Upload</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Passport Photo Page *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">Clear photo of passport information page</p>
                  <input
                    type="file"
                    name="passportPhoto"
                    onChange={handleInputChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition hover:border-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Visa Page *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">Clear photo of Nepal visa</p>
                  <input
                    type="file"
                    name="visaPage"
                    onChange={handleInputChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition hover:border-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Selfie *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">Recent clear selfie for verification</p>
                  <input
                    type="file"
                    name="selfie"
                    onChange={handleInputChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition hover:border-blue-400"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Proof of Address *
                  </label>
                  <p className="text-sm text-gray-500 mb-2">Utility bill, bank statement, or official document</p>
                  <input
                    type="file"
                    name="proofOfAddress"
                    onChange={handleInputChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition hover:border-blue-400"
                    required
                  />
                </div>
              </div>
              
              {/* Document Requirements */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2">Document Requirements:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• All documents must be clear and readable</li>
                  <li>• Accepted formats: JPG, PNG, PDF (max 10MB each)</li>
                  <li>• Documents should be recent (within 3 months for financial documents)</li>
                  <li>• Ensure all information is visible and not cut off</li>
                </ul>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              className={`px-6 py-2 rounded-lg font-medium transition ${currentStep === 1 ? 'invisible' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            
            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Next Step
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
              >
                Submit Form
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TouristKYCForm;