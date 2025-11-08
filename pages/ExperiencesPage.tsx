import React from 'react';
import ExperienceCard from '../components/ExperienceCard';
import type { Experience } from '../types';
import { EXP_SCUBA, EXP_SNORKELING, EXP_KAYAKING, EXP_PARASAILING, EXP_JET_SKI, EXP_SEA_WALK, EXP_SEAKART, EXP_GLASS_BOAT } from '../assets/images';

const ALL_EXPERIENCES: Experience[] = [
  { id: 'scuba', title: 'Scuba Diving', description: 'Explore vibrant coral reefs and marine life in crystal clear waters.', priceRange: '₹3,500+', quickFacts: { duration: '45 mins', age: '10+', swimming: 'Not required' }, imagePrompt: 'A vibrant cartoon coral reef in Andaman with colorful fish and a scuba diver.', imageUrl: EXP_SCUBA },
  { id: 'snorkeling', title: 'Snorkeling', description: 'Float on the surface and witness the amazing underwater world from above.', priceRange: '₹1,000+', quickFacts: { duration: '30 mins', age: '5+', swimming: 'Not required' }, imagePrompt: 'A happy cartoon person snorkeling in clear blue Andaman water, looking at fish.', imageUrl: EXP_SNORKELING },
  { id: 'kayaking', title: 'Mangrove Kayaking', description: 'Paddle through serene mangrove creeks, a unique and peaceful adventure.', priceRange: '₹2,500+', quickFacts: { duration: '2 hours', age: '8+', swimming: 'Not required' }, imagePrompt: 'A cartoon-style illustration of a person kayaking through a lush mangrove forest in the Andamans.', imageUrl: EXP_KAYAKING },
  { id: 'parasailing', title: 'Parasailing', description: 'Soar high above the sea and get a breathtaking bird\'s-eye view of the islands.', priceRange: '₹3,000+', quickFacts: { duration: '10 mins', age: '12+', swimming: 'Not required' }, imagePrompt: 'A cartoon person parasailing high in the sky over a tropical Andaman island.', imageUrl: EXP_PARASAILING },
  { id: 'jet-ski', title: 'Jet Ski', description: 'Feel the thrill of speed as you zip across the turquoise waters.', priceRange: '₹600+', quickFacts: { duration: '10 mins', age: '18+', swimming: 'Recommended' }, imagePrompt: 'A dynamic cartoon of someone riding a jet ski fast across the Andaman sea, making a splash.', imageUrl: EXP_JET_SKI },
  { id: 'sea-walk', title: 'Underwater Sea Walk', description: 'Walk on the ocean floor and get up close with friendly fish. No swimming needed!', priceRange: '₹3,200+', quickFacts: { duration: '30 mins', age: '7+', swimming: 'Not required' }, imagePrompt: 'A cartoon drawing of people doing an underwater sea walk on the Andaman seabed, surrounded by happy fish.', imageUrl: EXP_SEA_WALK },
  { id: 'seakart', title: 'Seakart Adventure', description: 'Drive your own hybrid go-kart on the sea for a unique self-drive experience.', priceRange: '₹3,500+', quickFacts: { duration: '20 mins', age: '18+ to drive', swimming: 'Not required' }, imagePrompt: 'A fun cartoon of a Seakart boat zipping across the water near an Andaman island.', imageUrl: EXP_SEAKART },
  { id: 'glass-boat', title: 'Glass-Bottom Boat', description: 'See the corals and fish through a glass floor without getting wet.', priceRange: '₹1,000+', quickFacts: { duration: '1 hour', age: 'All ages', swimming: 'Not required' }, imagePrompt: 'A cartoon glass-bottom boat revealing a colorful coral reef below in the Andamans.', imageUrl: EXP_GLASS_BOAT },
];

const ExperiencesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Choose Your Adventure</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">From serene paddles to high-speed thrills, the Andaman Sea is your playground. What adventure will you pick today?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
          {ALL_EXPERIENCES.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;