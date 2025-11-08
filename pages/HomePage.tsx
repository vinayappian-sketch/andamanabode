import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ExperienceCard from '../components/ExperienceCard';
import PackageCard from '../components/PackageCard';
import type { Experience } from '../types';
import { EXP_SCUBA, EXP_KAYAKING, EXP_SEA_WALK } from '../assets/images';
import { ALL_PACKAGES } from '../data/packages';

const MOCK_EXPERIENCES: Experience[] = [
  { id: 'scuba', title: 'Scuba Diving', description: 'Explore vibrant coral reefs and marine life in the crystal clear Andaman waters.', priceRange: '₹3,500+', quickFacts: { duration: '45 mins', age: '10+', swimming: 'Not required' }, imagePrompt: 'A vibrant cartoon coral reef in Andaman with colorful fish and a scuba diver.', imageUrl: EXP_SCUBA },
  { id: 'kayak', title: 'Mangrove Kayaking', description: 'Paddle through serene mangrove creeks, a unique and peaceful adventure.', priceRange: '₹2,500+', quickFacts: { duration: '2 hours', age: '8+', swimming: 'Not required' }, imagePrompt: 'A cartoon-style illustration of a person kayaking through a lush mangrove forest in the Andamans.', imageUrl: EXP_KAYAKING },
  { id: 'seawalk', title: 'Underwater Sea Walk', description: 'Walk on the ocean floor and get up close with friendly fish. No swimming needed!', priceRange: '₹3,200+', quickFacts: { duration: '30 mins', age: '7+', swimming: 'Not required' }, imagePrompt: 'A cartoon drawing of people doing an underwater sea walk on the Andaman seabed, surrounded by happy fish.', imageUrl: EXP_SEA_WALK },
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 md:py-24 animate-fade-in-up">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0B7CC1]">Popular Packages</h2>
          <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Hand-crafted holidays for every kind of traveler. Pick your perfect escape!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {ALL_PACKAGES.slice(0, 3).map(pkg => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 animate-fade-in-up" style={{animationDelay: '200ms'}}>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0B7CC1]">Unforgettable Experiences</h2>
           <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Ready for an adventure? Dive into the best activities the islands have to offer.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {MOCK_EXPERIENCES.map(exp => <ExperienceCard key={exp.id} experience={exp} />)}
          </div>
          <div className="text-center mt-12">
            <Link to="/experiences" className="bg-[#16B6A1] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              See All Experiences
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;