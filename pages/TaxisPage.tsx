import React from 'react';
import { Link } from 'react-router-dom';

const TaxiCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
    <div className="bg-white p-8 rounded-3xl border-4 border-dashed border-[#FFC145] text-center transform hover:scale-105 transition-transform duration-300">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-3xl font-bold text-[#0B7CC1]">{title}</h3>
        <p className="mt-3 text-gray-600">{description}</p>
    </div>
);


const TaxisPage: React.FC = () => {
    return (
        <div className="bg-[#F6F4EE]">
            <div className="relative bg-[#0FA3E2] text-white py-20 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold font-display drop-shadow-lg">Taxis & Transfers</h1>
                <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto">Seamless travel from the moment you land. We'll get you where you need to go, hassle-free!</p>
            </div>

            <div className="container mx-auto px-6 py-16 md:py-24">
                <section className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-[#0B7CC1]">Your Private Ride in Paradise</h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Navigating the islands is a breeze with our reliable transfer services. Forget the stress of finding a cab; we provide clean, air-conditioned vehicles with professional drivers to ensure your journey is comfortable and safe.
                    </p>
                </section>

                <section className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TaxiCard 
                            icon="✈️"
                            title="Airport Transfers"
                            description="We'll be waiting for you at the arrival gate! Smooth transfers from Veer Savarkar Airport to your hotel in Port Blair."
                        />
                        <TaxiCard 
                            icon="🚤"
                            title="Jetty Transfers"
                            description="Catching a ferry? We provide timely pickups and drop-offs to Haddo Jetty and Phoenix Bay Jetty for your island hopping."
                        />
                         <TaxiCard 
                            icon="🗺️"
                            title="Full-Day Cabs"
                            description="Explore at your own pace! Hire a cab for a full day of sightseeing in Port Blair or South Andaman."
                        />
                    </div>
                </section>
                
                <section className="mt-16 bg-white p-8 rounded-3xl border-4 border-[#16B6A1]">
                    <h2 className="text-4xl font-bold text-center text-[#0B7CC1]">Why Book With Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-8 text-center max-w-5xl mx-auto">
                        <div>
                            <h3 className="font-bold text-xl text-[#0B7CC1]">Punctual Service</h3>
                            <p className="text-gray-600 mt-2">We value your time. Our drivers are always on schedule.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-[#0B7CC1]">Clean & Safe Cars</h3>
                            <p className="text-gray-600 mt-2">All our vehicles are regularly sanitized and well-maintained.</p>
                        </div>
                         <div>
                            <h3 className="font-bold text-xl text-[#0B7CC1]">Transparent Pricing</h3>
                            <p className="text-gray-600 mt-2">No hidden costs. The price we quote is the price you pay.</p>
                        </div>
                    </div>
                </section>
                
                <section className="mt-16 bg-[#0B7CC1] text-white rounded-3xl p-12 text-center">
                    <h2 className="text-4xl font-extrabold font-display">Ready to Ride?</h2>
                    <p className="mt-4 text-xl max-w-2xl mx-auto">Include transfers in your holiday package for a completely seamless experience.</p>
                    <Link to="/plan-trip" className="mt-8 inline-block bg-[#FFC145] text-[#0B7CC1] font-bold text-xl px-10 py-4 rounded-full shadow-2xl transform transition-transform hover:scale-110 duration-300">
                        Book My Transfers
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default TaxisPage;