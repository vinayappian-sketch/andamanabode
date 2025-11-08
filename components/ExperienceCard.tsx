import React from 'react';
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white rounded-3xl border-4 border-[#0B7CC1] shadow-lg p-6 group transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border-2 border-[#16B6A1]">
        <img src={experience.imageUrl} alt={experience.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-2 right-2 bg-[#FF6F61] text-white font-bold text-sm px-3 py-1 rounded-full">
          {experience.priceRange}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-[#0B7CC1]">{experience.title}</h3>
      <p className="text-gray-600 mt-2 mb-4 h-12 overflow-hidden">{experience.description}</p>
      <div className="flex justify-end">
        <button className="bg-[#FFC145] text-[#0B7CC1] font-bold py-2 px-6 rounded-full transition-all duration-300 group-hover:bg-[#FF6F61] group-hover:text-white transform group-hover:scale-105">
          Dive In!
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;