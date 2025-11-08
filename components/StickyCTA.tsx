import React from 'react';
import { Link } from 'react-router-dom';

const StickyCTA: React.FC = () => {
  return (
    <Link to="/plan-trip" className="fixed bottom-6 right-6 bg-[#FF6F61] text-white font-bold text-lg px-6 py-4 rounded-full shadow-2xl z-50 flex items-center gap-3 transform transition-transform hover:scale-110 animate-bounce">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
      <span>Plan My Trip</span>
    </Link>
  );
};

export default StickyCTA;