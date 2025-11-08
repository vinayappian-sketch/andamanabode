import React, { useState } from 'react';
import type { FaqItem } from '../types';

const MOCK_FAQS: FaqItem[] = [
  {
    question: 'What is the best time to visit the Andaman Islands?',
    answer: 'The best time to visit is from October to May. The weather is pleasant, and the sea is calm, making it ideal for water sports and sightseeing.'
  },
  {
    question: 'Do I need a passport to visit the Andamans?',
    answer: 'If you are an Indian citizen, you do not need a passport. A valid photo ID like Aadhaar or a driver\'s license is sufficient. Foreign nationals require a passport and a visa, and a Restricted Area Permit (RAP) which is usually granted on arrival.'
  },
  {
    question: 'Are credit cards widely accepted?',
    answer: 'Credit and debit cards are accepted in most hotels, resorts, and dive centers in Port Blair and Havelock. However, it\'s highly recommended to carry enough cash for small shops, local eateries, and in more remote areas like Neil Island.'
  },
  {
    question: 'Is it safe to swim in the sea?',
    answer: 'Yes, it is generally very safe to swim at the designated beaches. However, always pay attention to local advice and any warning signs. Some areas might have crocodiles, but these are clearly marked and are not tourist areas.'
  },
  {
    question: 'What kind of mobile network coverage can I expect?',
    answer: 'BSNL Airtel and Jio have the best coverage in the main islands like Port Blair, Havelock, and Neil. Internet connectivity can be slow and unreliable, so it\'s a great opportunity for a digital detox!'
  },
  {
    question: 'Can you customize a package for us?',
    answer: 'Absolutely! We specialize in creating tailor-made itineraries. Just fill out our "Plan My Trip" form with your preferences, and our team will craft the perfect holiday for you.'
  }
];

const FaqAccordionItem: React.FC<{ faq: FaqItem; isOpen: boolean; onClick: () => void; }> = ({ faq, isOpen, onClick }) => (
    <div className="border-b-2 border-dashed border-[#16B6A1]">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-2">
            <h3 className="text-xl font-bold text-[#0B7CC1]">{faq.question}</h3>
            <span className={`transform transition-transform duration-300 text-3xl font-display text-[#FF6F61] ${isOpen ? 'rotate-45' : ''}`}>+</span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="p-4 text-gray-600 bg-white rounded-lg mb-4">{faq.answer}</p>
        </div>
    </div>
);


const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Frequently Asked Questions</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          Got questions? We've got answers! Here are some things travelers often ask us.
        </p>
        
        <div className="mt-12 max-w-4xl mx-auto bg-[#F6F4EE] p-8 rounded-3xl border-4 border-[#0FA3E2]">
            {MOCK_FAQS.map((faq, index) => (
                <FaqAccordionItem 
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;