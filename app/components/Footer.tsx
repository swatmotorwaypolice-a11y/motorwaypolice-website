'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-blue-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - About Section */}
          <div className="flex flex-col items-start">
            {/* SWAT Motorway Police Logo */}
            <div className="relative flex-shrink-0 mb-4">
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

          {/* Middle Column - Useful Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <nav className="flex flex-col gap-3">
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                Challan Verification
              </a>
              <a href="#" className="text-gray-200 hover:text-white transition-colors">
                License Verification
              </a>
              <a href="/about-us" className="text-gray-200 hover:text-white transition-colors">
                About US
              </a>
            </nav>
          </div>

          {/* Right Column - Get in touch */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Get in touch</h3>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mb-4">
              {/* Facebook Icon */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Twitter Icon */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              {/* YouTube Icon */}
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            
            {/* Call to Action Text */}
            <p className="text-sm text-gray-200">
              Don't miss our future updates! follow us on social media.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Navigation */}
      <div className="border-t border-blue-800 bg-blue-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Copyright */}
            <div className="text-gray-300 text-center md:text-left">
              Swat Traffic Police All Rights Reserved.
            </div>
            
            {/* Footer Navigation Links */}
            <nav className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact US
              </a>
              <a href="/about-us" className="text-gray-300 hover:text-white transition-colors">
                About US
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-800 hover:bg-blue-700 text-white rounded shadow-lg flex items-center justify-center transition-all z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </footer>
  );
}

