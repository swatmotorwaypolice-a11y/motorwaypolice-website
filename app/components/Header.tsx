'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isMobileMediaOpen, setIsMobileMediaOpen] = useState(false);

  return (
    <header className="w-full ">
      {/* Top Information Bar */}
      <div className="bg-blue-900 text-white py-2 px-7">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <div className="text-center md:text-left">
            Admission Open at Traffic Driving School. For more information call Helpline 130
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">Follow Us:</span>
            <div className="flex gap-2">
              {/* Facebook Icon */}
              <a href="#" className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Twitter Icon */}
              <a href="#" className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center hover:bg-cyan-400 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* YouTube Icon */}
              <a href="#" className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="bg-white border-b border-gray-200">   
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo Section */}
            <div className="flex items-center">
              {/* SWAT Motorway Police Logo */}
              <div className="relative flex-shrink-0">
                <Image
                  src="/WhatsApp Image 2025-11-02 at 22.01.49_0640b234.jpg"
                  alt="SWAT Motorway Police Logo"
                  width={320}
                  height={320}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="/driving-license"
                className="text-gray-800 hover:text-red-600 font-medium relative pb-1 transition-colors"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>
              </a>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  className="text-gray-800 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
                >
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-blue-900 py-2 z-50">
                    <a
                      href="/traffic-challan"
                      className="block px-4 py-4 text-white hover:bg-blue-800 transition-colors"
                    >
                      Challan Verification
                    </a>
                    <a
                      href="/driving-license"
                      className="block px-4 py-4 text-white hover:bg-blue-800 transition-colors"
                    >
                      Driving License Verification
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-4 text-white hover:bg-blue-800 transition-colors"
                    >
                      Driving School Admission Form
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-4 text-white hover:bg-blue-800 transition-colors"
                    >
                      Traffic Fine
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-4 text-white hover:bg-blue-800 transition-colors"
                    >
                      Apply for Learner
                    </a>
                  </div>
                )}
              </div>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsMediaDropdownOpen(true)}
                onMouseLeave={() => setIsMediaDropdownOpen(false)}
              >
                <button
                  className="text-gray-800 hover:text-red-600 font-medium flex items-center gap-1 transition-colors"
                >
                  Media
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isMediaDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                )}
              </div>
              
              <a
                href="#"
                className="text-gray-800 hover:text-red-600 font-medium transition-colors"
              >
                Downloads
              </a>
              
              <a
                href="/about-us"
                className="text-gray-800 hover:text-red-600 font-medium transition-colors"
              >
                About US
              </a>
              
              <a
                href="#"
                className="text-gray-800 hover:text-red-600 font-medium transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-800 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-gray-800 hover:text-red-600 font-medium py-2 border-b border-gray-200"
                >
                  Home
                </a>
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full text-gray-800 hover:text-red-600 font-medium py-2 flex items-center justify-between border-b border-gray-200"
                  >
                    Services
                    <svg 
                      className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileServicesOpen && (
                    <div className="pl-4 pb-2 border-b border-gray-200 bg-blue-900">
                      <a
                        href="/traffic-challan"
                        className="block text-white hover:bg-blue-800 font-medium py-3 px-4 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Challan Verification
                      </a>
                      <a
                        href="/driving-license"
                        className="block text-white hover:bg-blue-800 font-medium py-3 px-4 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Driving License Verification
                      </a>
                      <a
                        href="#"
                        className="block text-white hover:bg-blue-800 font-medium py-3 px-4 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Driving School Admission Form
                      </a>
                      <a
                        href="#"
                        className="block text-white hover:bg-blue-800 font-medium py-3 px-4 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Traffic Fine
                      </a>
                      <a
                        href="#"
                        className="block text-white hover:bg-blue-800 font-medium py-3 px-4 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Apply for Learner
                      </a>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    onClick={() => setIsMobileMediaOpen(!isMobileMediaOpen)}
                    className="w-full text-gray-800 hover:text-red-600 font-medium py-2 flex items-center justify-between border-b border-gray-200"
                  >
                    Media
                    <svg 
                      className={`w-4 h-4 transition-transform ${isMobileMediaOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileMediaOpen && (
                    <div className="pl-4 pb-2 border-b border-gray-200">
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        YouTube
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Twitter
                      </a>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Facebook
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="#"
                  className="text-gray-800 hover:text-red-600 font-medium py-2 border-b border-gray-200"
                >
                  Downloads
                </a>
                <a
                  href="/about-us"
                  className="text-gray-800 hover:text-red-600 font-medium py-2 border-b border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About US
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-red-600 font-medium py-2"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

