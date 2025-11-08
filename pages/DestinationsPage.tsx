import React from 'react';
import type { Destination } from '../types';
import { DEST_PORT_BLAIR, DEST_HAVELOCK, DEST_NEIL, DEST_BARATANG, DEST_DIGLIPUR, DEST_LITTLE_ANDAMAN } from '../assets/images';


const MOCK_DESTINATIONS: Destination[] = [
  { id: 'port-blair', name: 'Port Blair', overview: 'The bustling capital, a blend of history and modernity, and your gateway to the islands.', imagePrompt: 'A vibrant cartoon illustration of Port Blair\'s Cellular Jail with a sunny sky.', imageUrl: DEST_PORT_BLAIR },
  { id: 'havelock', name: 'Havelock (Swaraj)', overview: 'Famous for Radhanagar Beach, pristine waters, and world-class scuba diving.', imagePrompt: 'A beautiful cartoon of Radhanagar Beach, Havelock Island, with white sand and turquoise water.', imageUrl: DEST_HAVELOCK },
  { id: 'neil', name: 'Neil (Shaheed)', overview: 'A tranquil gem with lush green landscapes, unspoiled beaches, and a relaxed vibe.', imagePrompt: 'A peaceful cartoon landscape of Neil Island with natural rock bridges and calm sea.', imageUrl: DEST_NEIL },
  { id: 'baratang', name: 'Baratang', overview: 'Home to unique mangrove creeks, limestone caves, and mud volcanoes.', imagePrompt: 'A vibrant cartoon illustration of the stunning limestone caves at Baratang Island, Andaman.', imageUrl: DEST_BARATANG },
  { id: 'diglipur', name: 'Diglipur', overview: 'The northern frontier, known for its turtle nesting sites and the highest peak in the Andamans.', imagePrompt: 'A cute cartoon turtle on the beach at Diglipur, with Saddle Peak in the background.', imageUrl: DEST_DIGLIPUR },
  { id: 'little-andaman', name: 'Little Andaman', overview: 'A surfer\'s paradise with waterfalls, pristine beaches, and a remote, adventurous feel.', imagePrompt: 'A cartoon surfer riding a wave at Little Andaman, with a waterfall in the background.', imageUrl: DEST_LITTLE_ANDAMAN },
];

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <div className="bg-white rounded-3xl border-4 border-[#FFC145] shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2">
      <div className="relative aspect-video">
        <img src={destination.imageUrl} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#0B7CC1]">{destination.name}</h3>
        <p className="text-gray-600 mt-2">{destination.overview}</p>
      </div>
    </div>
  );
};

const DestinationsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Find Your Island</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">From lively hubs to secluded paradises, every island in the Andamans tells its own story. Which one will be yours?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {MOCK_DESTINATIONS.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;