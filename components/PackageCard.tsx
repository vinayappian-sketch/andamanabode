import React from 'react';
import { Link } from 'react-router-dom';
import type { Package } from '../types';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <div className="bg-white rounded-3xl border-4 border-dashed border-[#16B6A1] shadow-lg p-6 group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col">
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border-2 border-[#0B7CC1]">
        <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-2 left-2 bg-[#FFC145] text-white font-bold text-sm px-3 py-1 rounded-full shadow-md">
          {pkg.duration}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-[#0B7CC1]">{pkg.title}</h3>
        <p className="text-gray-600 mt-2 mb-4 h-12 overflow-hidden">{pkg.description}</p>
      </div>
      <div className="mt-auto pt-4">
        <Link
          to={`/packages/${pkg.id}`}
          className="block w-full text-center bg-[#FF6F61] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[#0FA3E2]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;