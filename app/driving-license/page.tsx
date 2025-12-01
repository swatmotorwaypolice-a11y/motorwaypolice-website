'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LicenseDetails {
  cnic: string;
  name: string;
  fatherName: string;
  licenseNumber: string;
  licenseType: string;
  issueDate: string;
  expiryDate: string;
  bloodGroup: string;
  address: string;
  imageUrl: string;
}

// Mock data - In production, this would come from an API
const mockLicenseData: { [key: string]: LicenseDetails } = {
  '2120365927549': {
    cnic: '21203-6592754-9',
    name: 'BAKHTIAR ALI',
    fatherName: 'GHANI GUL',
    licenseNumber: '0000042923',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-13',
    expiryDate: '2030-01-18',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/b.jpg'
  },
  '4230163474233': {
    cnic: '42301-6347523-3',
    name: 'XYZ',
    fatherName: 'ABC',
    licenseNumber: 'DL-12345',
    licenseType: 'LTV,HTV',
    issueDate: '2022-01-15',
    expiryDate: '2027-01-14',
    address: "null",
    bloodGroup: 'O+',
    imageUrl: '/1.jpeg'
  },
  '2120335765455': {
    cnic: '21203-3576545-5',
    name: 'SHOAIB KHAN',
    fatherName: 'MAIN GUL',
    licenseNumber: '00000015765',
    licenseType: 'HTV',
    issueDate: '2025-02-12',
    expiryDate: '2030-02-05',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/5.jpg'
  },
  '2120342246557': {
    cnic: '21203-4224655-7',
    name: 'AKHTAR FARAZ',
    fatherName: 'TAJ AKBAR',
    licenseNumber: '00000013298',
    licenseType: 'LTV ONLY',
    issueDate: '2025-02-09',
    expiryDate: '2030-02-26',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/Akh.JPG'
  },
  
  '2120363981105': {
    cnic: '21203-6398110-5',
    name: 'KHALIL UR RAHMAN',
    fatherName: 'HAJI RAHMAN',
    licenseNumber: '00000042994',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '2025-02-13',
    expiryDate: '2030-01-18',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/k.jpg'
  },
  
  '2120399645695': {
    cnic: '21203-9964569-5',
    name: 'SAFEER ULLAH',
    fatherName: 'SAIF ULREHMAN',
    licenseNumber: '00000042387',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '2025-03-09',
    expiryDate: '2030-02-26',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/s.jpg'
  },
  
  '4240151782795': {
    cnic: '42401-5178279-5',
    name: 'ZARDULLAH KHAN',
    fatherName: 'SYED AHMED',
    licenseNumber: '00000032467',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-27',
    expiryDate: '2030-02-15',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/z.jpg'
  },
  
  '2120371695539': {
    cnic: '21203-7169553-9',
    name: 'ZAKIR KHAN',
    fatherName: 'GULAB SAID',
    licenseNumber: '00000042854',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-27',
    expiryDate: '2030-01-22',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/za.jpeg'
  },
  
 '2120339022943': {
    cnic: '21203-3902294-3',
    name: 'SHAN ALAM',
    fatherName: 'SARAF GUL',
    licenseNumber: '00000067957',
    licenseType: 'HTV ONLY',
    issueDate: '2025-02-19',
    expiryDate: '2030-01-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/11.png'
  },
  '2120392842251': {
    cnic: '21203-9284225-1',
    name: 'LUQMAN',
    fatherName: 'SHERA KHAN',
    licenseNumber: '00000065821',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-19',
    expiryDate: '2030-02-16',
    address: "null",
    bloodGroup: 'B Positive',
    imageUrl: '/12.JPG'
  },
  '2120355373995': {
    cnic: '21203-5537399-5',
    name: 'IQRA AZAM',
    fatherName: 'SAIDRA AZAM',
    licenseNumber: '00000075821',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-05',
    expiryDate: '2030-02-18',
    address: "null",
    bloodGroup: 'O +',
    imageUrl: '/13.jpg'
  },
  '2120385352021': {
    cnic: '21203-8535202-1',
    name: 'SAAD ULLAH',
    fatherName: 'SHAHZAD GUL',
    licenseNumber: '00000066493',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-19',
    expiryDate: '2030-02-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/14.png'
  },
  '2120392857463': {
    cnic: '21203-9285746-3',
    name: 'ARSHAD ALI',
    fatherName: 'AZMALI',
    licenseNumber: '00000069871',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-18',
    expiryDate: '2030-02-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/15.png'
  },
  '2120243885383': {
    cnic: '21202-4388538-3',
    name: 'SUBHAN KHAN',
    fatherName: 'MIRAJ KHAN',
    licenseNumber: '00000066821',
    licenseType: 'LTV,HTV ONLY',
    issueDate: '2025-02-19',
    expiryDate: '2030-01-16',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/16.png'
  },
  '2120327813295': {
    cnic: '21203-2781329-5',
    name: 'SAMIL KHAN',
    fatherName: 'GUL ROMAN',
    licenseNumber: '00000075421',
    licenseType: 'HTV ONLY',
    issueDate: '2025-04-05',
    expiryDate: '2030-03-12',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/12.png'
  },
  '2120397473809': {
    cnic: '21203-9747380-9',
    name: 'SADAM HUSSAIN',
    fatherName: 'NOORA GUL',
    licenseNumber: '00000076411',
    licenseType: 'HTV ONLY',
    issueDate: '2025-03-05',
    expiryDate: '2030-02-12',
    address: "null",
    bloodGroup: 'N/A',
    imageUrl: '/sadam.jpeg'
  },
};

export default function DrivingLicenseVerification() {
  const [cnic, setCnic] = useState('');
  const [licenseDetails, setLicenseDetails] = useState<LicenseDetails | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLicenseDetails(null);
    
    // Remove dashes and spaces from CNIC
    const cleanedCnic = cnic.replace(/[-\s]/g, '');
    
    if (!cleanedCnic) {
      setError('Please enter your CNIC number');
      return;
    }
    
    if (cleanedCnic.length !== 13) {
      setError('CNIC must be 13 digits (without dashes)');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const details = mockLicenseData[cleanedCnic];
      if (details) {
        setLicenseDetails(details);
        setError('');
      } else {
        setError('License not found. Please verify your CNIC number.');
        setLicenseDetails(null);
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
              DRIVING LICENSE VERIFICATION
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 bg-blue-600 w-20"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="h-1 bg-blue-600 w-20"></div>
            </div>
            <p className="text-gray-600 text-lg">
              Verify licenses with ease - ensuring credibility and authenticity at your fingertips.
            </p>
          </div>

          {/* Verification Form */}
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <label htmlFor="cnic" className="text-lg font-bold text-gray-800 min-w-[200px]">
                  Enter CNIC Number:
                </label>
                <div className="flex-grow">
                  <input
                    type="text"
                    id="cnic"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    placeholder="1730125212537"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
                    maxLength={15}
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Enter your CNIC without dashes e.g: 1234567890000
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isLoading ? 'Verifying...' : 'Verify License'}
                </button>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}
            </form>

            {/* License Details Display */}
            {licenseDetails && (
              <div className="mt-8 border-t-2 border-gray-200 pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Passport Size Image */}
                  <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">License Holder Photo</h3>
                    <div className="w-48 h-48 bg-gray-200 rounded-lg border-4 border-blue-600 overflow-hidden flex items-center justify-center">
                      {licenseDetails.imageUrl ? (
                        <img
                          src={licenseDetails.imageUrl}
                          alt={licenseDetails.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <div className="text-gray-400 text-center p-4">
                          <svg className="w-24 h-24 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                          <p>No Image Available</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* License Details */}
                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">License Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">Full Name</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.name}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">Father's Name</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.fatherName}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">CNIC Number</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.cnic}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">License Number</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.licenseNumber}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">License Type</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.licenseType}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">Blood Group</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.bloodGroup}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">Issue Date</label>
                        <p className="text-gray-900 font-medium text-lg">{licenseDetails.issueDate}</p>
                      </div>
                      
                      <div>
                        <label className="text-sm font-semibold text-gray-600 block mb-1">Expiry Date</label>
                        <p className={`font-medium text-lg ${
                          new Date(licenseDetails.expiryDate) > new Date() 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {licenseDetails.expiryDate}
                          {new Date(licenseDetails.expiryDate) < new Date() && (
                            <span className="ml-2 text-xs">(Expired)</span>
                          )}
                        </p>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="text-sm font-semibold text-gray-600 block mb-1">Address</label>
                        <p className="text-gray-900 font-medium">{licenseDetails.address}</p>
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
               Driving License Verification and Online Check Procedures
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Verifying your Sawat driving license is now a hassle-free process with our online system. 
                Simply visit our website, enter your CNIC number, and get immediate access to your license details. 
                This system is designed to save you time and effort, eliminating the need to visit a physical office.
              </p>
              <p>
                Our user-friendly interface ensures that even those with minimal internet experience can navigate easily. 
                The verification process not only provides you with instant access to your license information but also 
                ensures the authenticity and credibility of the document.
              </p>
              <p>
                The online verification system displays comprehensive details including your personal information, 
                license type, validity period, and photograph. This makes it convenient for various purposes such as 
                employment verification, vehicle rental, or personal record keeping.
              </p>
              <p>
                All information is securely processed and maintained in compliance with data protection regulations. 
                Your privacy is our priority, and we ensure that your personal data remains confidential and protected.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}






















