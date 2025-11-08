import React from 'react';
import { Link } from 'react-router-dom';

const CheckListItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mt-1">✓</div>
        <span>{text}</span>
    </li>
);

const PermitsPage: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="relative bg-[#FF6F61] text-white py-20 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold font-display drop-shadow-lg">Permits & Travel Tips</h1>
                <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">A little planning goes a long way. Here's what you need to know for a smooth and responsible trip.</p>
            </div>

            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Permits Section */}
                    <section>
                        <h2 className="text-4xl font-bold text-[#0B7CC1]">Do I Need a Permit?</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            For Indian nationals, the Andamans are like any other state - no special permits needed for most tourist spots like Port Blair, Havelock, and Neil Island. However, some protected areas require a special permit.
                        </p>
                        <div className="mt-8 bg-[#F6F4EE] p-6 rounded-3xl border-4 border-dashed border-[#0FA3E2]">
                            <h3 className="text-2xl font-bold text-[#0B7CC1]">Jolly Buoy & Red Skin Islands</h3>
                            <p className="mt-3 text-gray-700">
                                To visit these pristine islands within the Mahatma Gandhi Marine National Park, a permit is mandatory.
                            </p>
                            <ul className="mt-4 space-y-3 text-gray-700">
                                <li><strong>Where to Get:</strong> Issued by the Forest Department/Tourism Office.</li>
                                <li><strong>When:</strong> Usually issued 1-2 days in advance. It's best to plan ahead!</li>
                                <li><strong>What's Needed:</strong> A valid Photo ID card (like Aadhaar) is required for each person.</li>
                                <li><strong>Our Tip:</strong> Let us handle it! We can arrange these permits as part of your package to save you the hassle.</li>
                            </ul>
                        </div>
                         <p className="mt-6 text-gray-600 text-sm">
                            *Foreign nationals require a Restricted Area Permit (RAP), which is now usually issued on arrival at the Port Blair airport.
                        </p>
                    </section>

                    {/* Responsible Travel Section */}
                    <section>
                        <h2 className="text-4xl font-bold text-[#0B7CC1]">Your Eco-Tourist Checklist</h2>
                        <p className="mt-4 text-lg text-gray-600">
                           The Andamans are a fragile paradise. Let's work together to keep them beautiful for generations to come.
                        </p>
                        <div className="mt-8 bg-[#F6F4EE] p-8 rounded-3xl border-4 border-[#16B6A1]">
                           <ul className="space-y-4 text-lg text-gray-800">
                                <CheckListItem text="Say NO to single-use plastic. Carry a reusable water bottle." />
                                <CheckListItem text="Use only reef-safe sunscreen to protect the delicate corals." />
                                <CheckListItem text="Do not touch or stand on coral reefs. Admire from a distance." />
                                <CheckListItem text="Never take shells, corals, or sand as souvenirs. Leave only footprints." />
                                <CheckListItem text="Dispose of waste responsibly in designated bins." />
                                <CheckListItem text="Be respectful of local culture and traditions." />
                           </ul>
                        </div>
                    </section>
                </div>

                 {/* CTA */}
                <section className="mt-16 bg-[#0B7CC1] text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-extrabold font-display">Travel Smart, Not Hard</h2>
                    <p className="mt-4 text-xl max-w-2xl mx-auto">We build all necessary permits and eco-friendly practices into our packages. Travel with peace of mind!</p>
                    <Link to="/plan-trip" className="mt-8 inline-block bg-[#FFC145] text-[#0B7CC1] font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-300">
                        Plan a Hassle-Free Trip
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default PermitsPage;