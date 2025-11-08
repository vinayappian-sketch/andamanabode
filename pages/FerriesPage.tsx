import React from 'react';
import { Link } from 'react-router-dom';

const CheckCircleIcon = () => (
  <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const XCircleIcon = () => (
    <svg className="w-6 h-6 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);


const FerriesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative bg-[#0FA3E2] text-white py-20 text-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-extrabold font-display drop-shadow-lg">Andaman Ferry Guide</h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">Your smooth sailing starts here. Navigate the islands like a pro!</p>
        <div className="absolute -bottom-1 left-0 w-full h-16 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23ffffff\' fill-opacity=\'1\' d=\'M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Intro */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#0B7CC1]">Why Ferries Are Your Best Friends Here</h2>
          <p className="mt-4 text-lg text-gray-600">
            The Andaman & Nicobar archipelago is a chain of beautiful islands. To hop from one paradise to another, ferries are not just a choice, they're the lifeline! They connect the main hubs and unlock access to the most stunning beaches and activities.
          </p>
        </section>

        {/* Routes */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">The Golden Triangle Route</h2>
          <p className="text-center text-lg text-gray-600 mt-4">Most adventures happen along this popular sea route!</p>
          <div className="mt-8 flex justify-center items-center flex-wrap gap-4 font-display text-2xl font-bold">
            <div className="bg-[#F6F4EE] p-6 rounded-2xl border-2 border-[#16B6A1]">Port Blair</div>
            <div className="text-[#0FA3E2] text-4xl">↔️</div>
            <div className="bg-[#F6F4EE] p-6 rounded-2xl border-2 border-[#16B6A1]">Havelock</div>
            <div className="text-[#0FA3E2] text-4xl">↔️</div>
            <div className="bg-[#F6F4EE] p-6 rounded-2xl border-2 border-[#16B6A1]">Neil Island</div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mt-16">
          <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Private vs. Government Ferries</h2>
          <p className="text-center text-lg text-gray-600 mt-4">Which one should you choose? Here’s a quick showdown.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#FFC145]">
              <h3 className="text-3xl font-bold text-center text-[#0B7CC1]">Private Ferries</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3"><CheckCircleIcon /><div><span className="font-bold">Fast & Punctual:</span> Stick to their schedule, getting you there on time.</div></li>
                <li className="flex items-start gap-3"><CheckCircleIcon /><div><span className="font-bold">Clean & Comfy:</span> Air-conditioned cabins and comfortable seating.</div></li>
                <li className="flex items-start gap-3"><CheckCircleIcon /><div><span className="font-bold">Easy Online Booking:</span> Book tickets from anywhere, anytime.</div></li>
                <li className="flex items-start gap-3"><XCircleIcon /><div><span className="font-bold">Higher Cost:</span> Convenience comes at a premium price.</div></li>
              </ul>
              <div className="mt-6 text-center bg-[#F6F4EE] p-3 rounded-xl"><strong>Best for:</strong> Travelers who prioritize comfort, time, and hassle-free booking.</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border-4 border-dashed border-[#FF6F61]">
              <h3 className="text-3xl font-bold text-center text-[#0B7CC1]">Government Ferries</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3"><CheckCircleIcon /><div><span className="font-bold">Budget-Friendly:</span> Significantly cheaper tickets.</div></li>
                <li className="flex items-start gap-3"><XCircleIcon /><div><span className="font-bold">Basic Amenities:</span> Non-AC, simple seating. Can get crowded.</div></li>
                <li className="flex items-start gap-3"><XCircleIcon /><div><span className="font-bold">Offline Booking:</span> Tickets often require queuing at counters.</div></li>
                <li className="flex items-start gap-3"><XCircleIcon /><div><span className="font-bold">Less Punctual:</span> Schedules can be subject to delays or changes.</div></li>
              </ul>
               <div className="mt-6 text-center bg-[#F6F4EE] p-3 rounded-xl"><strong>Best for:</strong> Budget travelers, backpackers, and those with flexible schedules.</div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section className="mt-16">
            <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Pro Tips for Smooth Sailing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="bg-[#F6F4EE] p-6 rounded-2xl text-center"><h4 className="font-bold text-xl text-[#0B7CC1]">Book Ahead</h4><p className="mt-2 text-gray-600">Especially during peak season (Dec-Feb), tickets sell out fast!</p></div>
                <div className="bg-[#F6F4EE] p-6 rounded-2xl text-center"><h4 className="font-bold text-xl text-[#0B7CC1]">Arrive Early</h4><p className="mt-2 text-gray-600">Reach the jetty at least 1 hour before departure for check-in.</p></div>
                <div className="bg-[#F6F4EE] p-6 rounded-2xl text-center"><h4 className="font-bold text-xl text-[#0B7CC1]">Pack Smart</h4><p className="mt-2 text-gray-600">Keep essentials and ID handy. Luggage limit is usually 25kg.</p></div>
                <div className="bg-[#F6F4EE] p-6 rounded-2xl text-center"><h4 className="font-bold text-xl text-[#0B7CC1]">Feeling Wavy?</h4><p className="mt-2 text-gray-600">If prone to seasickness, take medication beforehand and choose a middle seat.</p></div>
            </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-[#0B7CC1] text-white rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-extrabold font-display">Feeling Overwhelmed?</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto">Don't worry about the logistics. Let us handle all your ferry bookings for a stress-free vacation!</p>
            <Link to="/plan-trip" className="mt-8 inline-block bg-[#FFC145] text-[#0B7CC1] font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-300">
                Let's Plan Your Trip!
            </Link>
        </section>
      </div>
    </div>
  );
};

export default FerriesPage;