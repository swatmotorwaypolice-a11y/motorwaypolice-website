'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ABOUT
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 bg-blue-600 w-20"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="h-1 bg-blue-600 w-20"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              SWAT Traffic Police
            </h2>
          </div>

          {/* Introduction Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Swat Traffic Police is one of the five police jurisdictions in the capital city 
                and is responsible for managing and controlling traffic matters of a huge area of 1257 square kilometers. 
                The Traffic force, established in 1971, comprising of 500 police officers and personnel, controls the 
                road traffic, which has lately become a major task for the police. Due to the increase in volume of 
                road traffic, causing continuous traffic congestion in the cities especially in peak hours, the demands 
                on the police to meet with the situation for smooth running of traffic has a corresponding increase.
              </p>
            </div>
          </div>

          {/* History Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                History
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  The concept of the traffic Police in Peshawar was introduced in 1971 under the command and control 
                  of a Senior Superintendent of Police and ever since the department has been rendering effective services 
                  towards building a community where traffic crimes are minimal and every violation is being dealt strictly 
                  according to the laws.
                </p>
                
                <p className="text-lg">
                  In 1984, another milestone was achieved in the shape of traffic school establishment. The main objective 
                  of the school is to train the police constables and other staff and turn them into a good law enforcing 
                  force. The traffic cadre was also introduced the same year with the purpose to bring the traffic police 
                  under the command and control of AIG Traffic. The new position was created in order to make effective 
                  policies and prepare vigilant and efficient force.
                </p>
                
                <p className="text-lg">
                  Besides, the introduction of ticketing system in 1998 is also a remarkable step toward achieving a 
                  controlled-traffic society. In 2003 the division of AIG and SSP contributed to the developmental task 
                  and multiplied its competence. Four years later in 2007; the generation of new codes consolidated traffic 
                  police department, and in 2009 e-payment system was introduced to squeeze the worries of general public.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
                Vision
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                To enhance the quality of life and well being of all people in the swat Traffic Police 
                by contributing to making our place safer and secure, without the fear of crime and violence.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

