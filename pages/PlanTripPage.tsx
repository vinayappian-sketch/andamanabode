import React, { useState } from 'react';

const PlanTripPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '1',
    dates: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Trip Enquiry:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-16">
        <div className="bg-white rounded-3xl border-4 border-dashed border-[#16B6A1] p-12 shadow-lg max-w-2xl">
          <div className="text-6xl text-[#FFC145]">🎉</div>
          <h1 className="text-4xl font-extrabold text-[#0B7CC1] mt-4">Thank You!</h1>
          <p className="mt-4 text-2xl text-gray-600 font-display">Your dream trip is one step closer!</p>
          <p className="mt-2 text-lg text-gray-500">We've received your enquiry and one of our travel wizards will get back to you shortly. Get your bags ready!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-[#0B7CC1]">Let's Plan Your Dream Trip!</h1>
        <p className="text-center text-xl text-gray-600 mt-4 max-w-3xl mx-auto">Fill out the form below, and our island experts will craft a personalized itinerary just for you. No strings, just sunshine!</p>
        
        <form onSubmit={handleSubmit} className="mt-12 max-w-2xl mx-auto bg-[#F6F4EE] p-8 rounded-3xl border-4 border-[#0FA3E2]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-bold text-[#0B7CC1] mb-2">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-bold text-[#0B7CC1] mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-lg font-bold text-[#0B7CC1] mb-2">Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
            </div>
            <div>
              <label htmlFor="travelers" className="block text-lg font-bold text-[#0B7CC1] mb-2">No. of Travelers</label>
              <input type="number" id="travelers" name="travelers" min="1" value={formData.travelers} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="dates" className="block text-lg font-bold text-[#0B7CC1] mb-2">Preferred Travel Dates</label>
            <input type="text" id="dates" name="dates" placeholder="e.g., Mid-December" value={formData.dates} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition" />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-lg font-bold text-[#0B7CC1] mb-2">Tell Us Your Dream Itinerary!</label>
            <textarea id="message" name="message" rows={5} placeholder="Mention any specific activities, islands, or preferences..." value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border-2 border-[#16B6A1] focus:ring-[#FFC145] focus:border-[#FFC145] transition"></textarea>
          </div>
          <div className="mt-8 text-center">
            <button type="submit" className="bg-[#FF6F61] text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300 ease-in-out">
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanTripPage;