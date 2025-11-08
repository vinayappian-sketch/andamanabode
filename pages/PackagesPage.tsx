import React from 'react';
import PackageCard from '../components/PackageCard';
import type { Package } from '../types';
import { PKG_HONEYMOON, PKG_FAMILY, PKG_ADVENTURE, PKG_SHORT, PKG_NORTH, PKG_LUXURY } from '../assets/images';

const ALL_PACKAGES: Package[] = [
    { id: 'honeymoon', title: 'Honeymoon Bliss', duration: '5N/6D', description: 'Romantic getaways, private beaches, and candle-lit dinners. The perfect start!', imagePrompt: 'A cartoon-style romantic beach dinner setup at sunset in the Andaman Islands.', inclusions: ['Private Cabs', 'Ferries', 'Breakfast'], imageUrl: PKG_HONEYMOON },
    { id: 'family', title: 'Family Fun Fiesta', duration: '6N/7D', description: 'Action-packed adventures and relaxing beach time for the whole family.', imagePrompt: 'A happy cartoon family building a sandcastle on a sunny Andaman beach.', inclusions: ['All Transfers', 'Activities', 'Breakfast'], imageUrl: PKG_FAMILY },
    { id: 'adventure', title: 'Thrill Seeker\'s Quest', duration: '7N/8D', description: 'Dive deep, trek through jungles, and conquer the waves with this adventure package.', imagePrompt: 'Cartoon illustration of adventurous activities in Andaman: scuba diving, trekking, and jet ski.', inclusions: ['Scuba Dive', 'Trekking', 'Ferries'], imageUrl: PKG_ADVENTURE },
    { id: 'short', title: 'Weekend Splash', duration: '3N/4D', description: 'A quick but refreshing dip into the best of the Andamans. Perfect for a short break!', imagePrompt: 'A cartoon suitcase with sunglasses and a snorkel on a vibrant Andaman beach.', inclusions: ['Airport Transfer', 'Port Blair Stay', 'Breakfast'], imageUrl: PKG_SHORT },
    { id: 'north', title: 'North Andaman Loop', duration: '8N/9D', description: 'Go off the beaten path to explore Diglipur, Rangat, and the turtle nesting grounds.', imagePrompt: 'A whimsical cartoon map of North Andaman, showing a path to Diglipur with a friendly turtle waving from a beach.', inclusions: ['All Road Travel', 'Permits', 'Local Stays'], imageUrl: PKG_NORTH },
    { id: 'luxury', title: 'Luxury Escape', duration: '6N/7D', description: 'Indulge in the finest resorts, private cruises, and exclusive experiences.', imagePrompt: 'A sleek cartoon private yacht cruising on turquoise Andaman waters, with a luxurious beachfront villa visible on an island.', inclusions: ['5-Star Resorts', 'Private Cruise', 'Gourmet Meals'], imageUrl: PKG_LUXURY },
];

const PackagesPage: React.FC = () => {
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Your Perfect Island Getaway</h1>
                <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">We've bundled the best of the islands into neat little packages. Just pack your bags and we'll handle the rest!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                    {ALL_PACKAGES.map(pkg => (
                        <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PackagesPage;