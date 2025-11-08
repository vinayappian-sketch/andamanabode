import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#0FA3E2] text-white overflow-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold font-display drop-shadow-lg leading-tight">Your Andaman Adventure Awaits!</h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto drop-shadow">Dive into crystal clear waters, explore lush islands, and make unforgettable memories. Ready to splash?</p>
        <Link to="/plan-trip" className="mt-8 inline-block bg-[#FFC145] text-[#0B7CC1] font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition-transform hover:scale-115 hover:rotate-[-3deg] duration-300 ease-in-out">
          Plan My Trip!
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32">
        <svg className="w-full h-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Background wave */}
          <path d="M0 101.333C120 13.3332 240 189.333 360 101.333C480 13.3332 600 189.333 720 101.333C840 13.3332 960 189.333 1080 101.333C1200 13.3332 1320 189.333 1440 101.333V120H0V101.333Z" fill="#F6F4EE" fillOpacity="0.5">
              <animate attributeName="d" from="M0 101.333C120 13.3332 240 189.333 360 101.333C480 13.3332 600 189.333 720 101.333C840 13.3332 960 189.333 1080 101.333C1200 13.3332 1320 189.333 1440 101.333V120H0V101.333Z" to="M0 63.9999C120 -21.3333 240 149.333 360 101.333C480 53.3332 600 149.333 720 101.333C840 53.3332 960 149.333 1080 101.333C1200 53.3332 1320 149.333 1440 63.9999V120H0V63.9999Z" dur="12s" repeatCount="indefinite" />
          </path>
          {/* Foreground wave */}
          <path d="M0 63.9999C120 -21.3333 240 149.333 360 101.333C480 53.3332 600 149.333 720 101.333C840 53.3332 960 149.333 1080 101.333C1200 53.3332 1320 149.333 1440 63.9999V120H0V63.9999Z" fill="#F6F4EE">
            <animate attributeName="d" from="M0 63.9999C120 -21.3333 240 149.333 360 101.333C480 53.3332 600 149.333 720 101.333C840 53.3332 960 149.333 1080 101.333C1200 53.3332 1320 149.333 1440 63.9999V120H0V63.9999Z" to="M0 101.333C120 13.3332 240 189.333 360 101.333C480 13.3332 600 189.333 720 101.333C840 13.3332 960 189.333 1080 101.333C1200 13.3332 1320 189.333 1440 101.333V120H0V101.333Z" dur="8s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;