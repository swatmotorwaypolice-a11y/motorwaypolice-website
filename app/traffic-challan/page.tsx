'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ChallanDetails {
  challanNumber: string;
  vehicleNumber: string;
  ownerName: string;
  violationDate: string;
  violationType: string;
  fineAmount: string;
  status: string;
  location: string;
  dueDate: string;
}

// Mock data - In production, this would come from an API
const mockChallanData: { [key: string]: ChallanDetails } = {
  'CH-12345': {
    challanNumber: 'CH-12345',
    vehicleNumber: 'ABC-1234',
    ownerName: 'Muhammad Ali',
    violationDate: '2024-01-15',
    violationType: 'Speeding (Exceeded 60 km/h)',
    fineAmount: 'Rs. 2,000',
    status: 'Pending',
    location: 'Motorway M-1, KM 50',
    dueDate: '2024-02-15'
  },
  'CH-67890': {
    challanNumber: 'CH-67890',
    vehicleNumber: 'XYZ-5678',
    ownerName: 'Fatima Khan',
    violationDate: '2024-01-20',
    violationType: 'Red Light Violation',
    fineAmount: 'Rs. 1,500',
    status: 'Paid',
    location: 'Traffic Signal, F-6 Islamabad',
    dueDate: '2024-02-20'
  }
};

export default function TrafficChallanVerification() {
  const [challanNumber, setChallanNumber] = useState('');
  const [challanDetails, setChallanDetails] = useState<ChallanDetails | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setChallanDetails(null);
    
    const cleanedChallan = challanNumber.trim().toUpperCase();
    
    if (!cleanedChallan) {
      setError('Please enter your challan number');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const details = mockChallanData[cleanedChallan];
      if (details) {
        setChallanDetails(details);
        setError('');
      } else {
        setError('Challan not found. Please verify your challan number.');
        setChallanDetails(null);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TRAFFIC CHALLAN VERIFICATION
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 bg-blue-600 w-20"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="h-1 bg-blue-600 w-20"></div>
            </div>
            <p className="text-gray-600 text-lg">
              Verify your traffic challan details and payment status quickly and securely.
            </p>
          </div>

          {/* Verification Form */}
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <label htmlFor="challan" className="text-lg font-bold text-gray-800 min-w-[200px]">
                  Enter Challan Number:
                </label>
                <div className="flex-grow">
                  <input
                    type="text"
                    id="challan"
                    value={challanNumber}
                    onChange={(e) => setChallanNumber(e.target.value)}
                    placeholder="CH-12345"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg uppercase"
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter your challan number e.g: CH-12345
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? 'Verifying...' : 'Verify Challan'}
                </button>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
            </form>

            {/* Challan Details Display */}
            {challanDetails && (
              <div className="mt-8 border-t-2 border-gray-200 pt-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Challan Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Challan Number</label>
                      <p className="text-gray-900 font-bold text-xl">{challanDetails.challanNumber}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Status</label>
                      <p className={`font-bold text-xl ${
                        challanDetails.status === 'Paid' 
                          ? 'text-green-600' 
                          : challanDetails.status === 'Pending'
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}>
                        {challanDetails.status}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Vehicle Number</label>
                      <p className="text-gray-900 font-medium text-lg">{challanDetails.vehicleNumber}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Owner Name</label>
                      <p className="text-gray-900 font-medium text-lg">{challanDetails.ownerName}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Violation Date</label>
                      <p className="text-gray-900 font-medium text-lg">{challanDetails.violationDate}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Due Date</label>
                      <p className={`font-medium text-lg ${
                        new Date(challanDetails.dueDate) < new Date() && challanDetails.status !== 'Paid'
                          ? 'text-red-600' 
                          : 'text-gray-900'
                      }`}>
                        {challanDetails.dueDate}
                        {new Date(challanDetails.dueDate) < new Date() && challanDetails.status !== 'Paid' && (
                          <span className="ml-2 text-xs">(Overdue)</span>
                        )}
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Violation Type</label>
                      <p className="text-gray-900 font-medium text-lg">{challanDetails.violationType}</p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                      <label className="text-sm font-semibold text-gray-600 block mb-1">Location</label>
                      <p className="text-gray-900 font-medium text-lg">{challanDetails.location}</p>
                    </div>
                    
                    <div className="bg-pink-50 border-2 border-pink-200 p-6 rounded-lg md:col-span-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <label className="text-sm font-semibold text-gray-600 block mb-1">Fine Amount</label>
                          <p className="text-pink-700 font-bold text-3xl">{challanDetails.fineAmount}</p>
                        </div>
                        {challanDetails.status !== 'Paid' && (
                          <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors">
                            Pay Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Information Section */}
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Traffic Challan Verification and Payment Procedures
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Our online traffic challan verification system allows you to quickly check the status and details 
                of your traffic violations. Simply enter your challan number to view comprehensive information 
                including violation type, fine amount, payment status, and due date.
              </p>
              <p>
                The system provides real-time updates on your challan status, making it easy to track whether 
                payments have been processed or if fines are still pending. You can also view violation details 
                such as location, date, and type of traffic offense.
              </p>
              <p>
                For unpaid challans, you can proceed with online payment directly through our secure payment gateway. 
                The system accepts various payment methods including credit/debit cards, mobile banking, and other 
                digital payment options.
              </p>
              <p>
                All transactions are processed securely, and you will receive immediate confirmation upon successful 
                payment. Your payment history and challan records are maintained for your convenience and future reference.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

