import React from 'react';
import { Link } from 'react-router-dom';
import { PKG_FAMILY, PKG_ADVENTURE, PKG_HONEYMOON } from '../assets/images';

const teamMembers = [
  { name: 'Captain Coral', role: 'Chief Explorer', avatar: PKG_ADVENTURE },
  { name: 'Sandy Shells', role: 'Head of Happiness', avatar: PKG_HONEYMOON },
  { name: 'Wally Wave', role: 'Logistics Wizard', avatar: PKG_FAMILY },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#16B6A1] text-white py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold font-display drop-shadow-lg">About AndamanAbode</h1>
        <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">We're not just a travel company; we're storytellers, adventurers, and your best friends in the islands!</p>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Our Story */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Our Story</h2>
          <p className="mt-6 text-lg text-gray-600 text-center leading-relaxed">
            AndamanAbode was born from a simple idea: travel should be fun, easy, and full of wonder. After countless trips to these magical islands, we realized that planning an Andaman holiday could be a bit... tangled. So, we decided to create a place where planning your dream trip is as breezy as a walk on Radhanagar Beach. We combine local expertise with a splash of creativity to craft unforgettable journeys.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mt-16 bg-[#F6F4EE] rounded-3xl p-10 border-4 border-dashed border-[#FFC145]">
          <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Our Mission is Simple</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
            <div>
              <div className="text-5xl mb-2">🎉</div>
              <h3 className="text-2xl font-bold text-[#0B7CC1]">Create Joy</h3>
              <p className="mt-2 text-gray-600">To design holidays that are bursting with happiness and free of stress.</p>
            </div>
            <div>
              <div className="text-5xl mb-2">🌊</div>
              <h3 className="text-2xl font-bold text-[#0B7CC1]">Respect Nature</h3>
              <p className="mt-2 text-gray-600">To promote responsible tourism that protects the pristine beauty of the Andamans.</p>
            </div>
            <div>
              <div className="text-5xl mb-2">🤝</div>
              <h3 className="text-2xl font-bold text-[#0B7CC1]">Be Your Guide</h3>
              <p className="mt-2 text-gray-600">To be your trusted companion, offering expert advice and support every step of the way.</p>
            </div>
          </div>
        </section>
        
        {/* Meet the Crew */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Meet the Crew</h2>
          <p className="text-center text-lg text-gray-600 mt-4">The friendly faces behind your dream vacation!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {teamMembers.map(member => (
              <div key={member.name} className="bg-white rounded-3xl border-4 border-[#0FA3E2] p-6 text-center group hover:scale-105 transition-transform">
                <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg" />
                <h3 className="text-2xl font-bold text-[#0B7CC1] mt-4">{member.name}</h3>
                <p className="text-[#FF6F61] font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-[#0B7CC1] text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-extrabold font-display">Ready to Join the Fun?</h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto">Enough about us, let's talk about your adventure! We can't wait to help you plan it.</p>
          <Link to="/plan-trip" className="mt-8 inline-block bg-[#FFC145] text-[#0B7CC1] font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-300">
              Plan Your Adventure!
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;