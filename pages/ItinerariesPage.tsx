import React from 'react';
import { Link } from 'react-router-dom';

interface Itinerary {
  duration: string;
  title: string;
  emoji: string;
  description: string;
  plan: { day: string; highlight: string }[];
}

const ITINERARIES_DATA: Itinerary[] = [
  {
    duration: '3 Days',
    title: 'The Quick Dip',
    emoji: '🏝️→🐠→✈️',
    description: 'Perfect for a weekend getaway to get a taste of island life.',
    plan: [
      { day: 'Day 1', highlight: 'Arrive in Port Blair, witness the Cellular Jail Light & Sound Show.' },
      { day: 'Day 2', highlight: 'Day trip to Ross & North Bay Islands for history and snorkeling.' },
      { day: 'Day 3', highlight: 'Local sightseeing and souvenir shopping before departure.' },
    ],
  },
  {
    duration: '5 Days',
    title: 'The Island Hopper',
    emoji: '✈️→🚤→🏝️→🌅→✈️',
    description: 'Experience the best of Port Blair and the stunning Havelock Island.',
    plan: [
      { day: 'Day 1', highlight: 'Arrival in Port Blair, check-in and relax.' },
      { day: 'Day 2', highlight: 'Ferry to Havelock Island, check into your beach resort.' },
      { day: 'Day 3', highlight: 'Visit the world-famous Radhanagar Beach for a spectacular sunset.' },
      { day: 'Day 4', highlight: 'Explore Elephant Beach (optional trek) for water sports. Return to Port Blair.' },
      { day: 'Day 5', highlight: 'Depart from Port Blair with amazing memories.' },
    ],
  },
  {
    duration: '7 Days',
    title: 'The Tropical Explorer',
    emoji: '🏝️→🚤→🐠→🐢→🌅→✈️',
    description: 'A classic itinerary covering Port Blair, Havelock, and the tranquil Neil Island.',
    plan: [
      { day: 'Day 1', highlight: 'Arrive in Port Blair, explore Corbyn\'s Cove Beach.' },
      { day: 'Day 2', highlight: 'Ferry to Havelock. Enjoy the evening at your leisure.' },
      { day: 'Day 3', highlight: 'Havelock: Radhanagar Beach glory.' },
      { day: 'Day 4', highlight: 'Ferry to Neil Island. Visit Laxmanpur Beach for sunset.' },
      { day: 'Day 5', highlight: 'Neil Island: See the Natural Bridge and explore Bharatpur Beach.' },
      { day: 'Day 6', highlight: 'Return ferry to Port Blair for last-minute shopping.' },
      { day: 'Day 7', highlight: 'Fly back home, full of sunshine.' },
    ],
  },
   {
    duration: '15 Days',
    title: 'The Grand Andaman Odyssey',
    emoji: '🗺️→🐢→🌋→🛶→🐠→✈️',
    description: 'The ultimate deep dive into the Andamans, from popular spots to off-the-beaten-path gems.',
    plan: [
      { day: 'Day 1-2', highlight: 'Port Blair: Settle in, Cellular Jail, and local exploration.' },
      { day: 'Day 3-6', highlight: 'Havelock: Relax, explore, and complete an optional PADI Open Water Diver course!' },
      { day: 'Day 7-8', highlight: 'Neil Island: Slow down and enjoy the serene beaches and natural wonders.' },
      { day: 'Day 9', highlight: 'Travel to Baratang Island to see the Limestone Caves and Mud Volcano.' },
      { day: 'Day 10-12', highlight: 'Journey to North Andaman: Explore Rangat, Mayabunder, and Diglipur.' },
      { day: 'Day 13', highlight: 'Diglipur: Visit Ross & Smith Islands and trek to Saddle Peak.' },
      { day: 'Day 14', highlight: 'Begin the scenic road journey back to Port Blair.' },
      { day: 'Day 15', highlight: 'Depart from Port Blair, an Andaman expert now!' },
    ],
  },
];

const ItineraryCard: React.FC<{ itinerary: Itinerary }> = ({ itinerary }) => {
    return (
        <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#16B6A1]">
            <h3 className="text-3xl font-bold text-center text-[#0B7CC1]">{itinerary.title}</h3>
            <p className="text-center font-display text-2xl my-3 text-[#FF6F61]">{itinerary.duration}</p>
            <p className="text-center text-4xl mb-4" role="img" aria-label="itinerary emoji">{itinerary.emoji}</p>
            <p className="text-center text-gray-600 mb-6">{itinerary.description}</p>
            <div className="space-y-3">
                {itinerary.plan.map((item, index) => (
                    <div key={index} className="bg-[#F6F4EE] p-3 rounded-lg flex gap-3">
                        <div className="font-bold text-[#0B7CC1]">{item.day}:</div>
                        <div className="text-gray-700">{item.highlight}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


const ItinerariesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Find Your Perfect Itinerary</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          From quick dips to deep dives, we've sketched out the perfect journeys. Pick a plan or let's create a custom one for you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {ITINERARIES_DATA.map(itinerary => <ItineraryCard key={itinerary.duration} itinerary={itinerary} />)}
        </div>

        <section className="mt-16 bg-[#F6F4EE] rounded-3xl p-8 border-4 border-[#FFC145]">
            <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Pro Packing Tips</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 text-center">
                <div className="flex flex-col items-center"><div className="text-4xl mb-2" role="img" aria-label="t-shirt emoji">👕</div><span className="font-semibold">Light Cottons</span></div>
                <div className="flex flex-col items-center"><div className="text-4xl mb-2" role="img" aria-label="sun emoji">☀️</div><span className="font-semibold">Reef-Safe Sunscreen</span></div>
                <div className="flex flex-col items-center"><div className="text-4xl mb-2" role="img" aria-label="backpack emoji">🎒</div><span className="font-semibold">Waterproof Bag</span></div>
                <div className="flex flex-col items-center"><div className="text-4xl mb-2" role="img" aria-label="mosquito emoji">🦟</div><span className="font-semibold">Insect Repellent</span></div>
                <div className="flex flex-col items-center"><div className="text-4xl mb-2" role="img" aria-label="credit card emoji">💳</div><span className="font-semibold">ID &amp; Permits</span></div>
            </div>
        </section>

        <section className="mt-16 bg-[#0B7CC1] text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-extrabold font-display">Want to Mix & Match?</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto">Love an itinerary but want to add an extra day or activity? No problem! We create fully customized plans.</p>
            <Link to="/plan-trip" className="mt-8 inline-block bg-[#FFC145] text-[#0B7CC1] font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-300">
                Customize My Trip
            </Link>
        </section>
      </div>
    </div>
  );
};

export default ItinerariesPage;