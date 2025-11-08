import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_PACKAGES } from '../data/packages';

const PackageDetailsPage: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = ALL_PACKAGES.find(p => p.id === packageId);

  if (!pkg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-16">
        <div className="bg-white rounded-3xl border-4 border-dashed border-[#FF6F61] p-12 shadow-lg max-w-2xl">
          <div className="text-6xl text-[#FFC145]">🤔</div>
          <h1 className="text-4xl font-extrabold text-[#0B7CC1] mt-4">Package Not Found!</h1>
          <p className="mt-2 text-lg text-gray-500">Looks like this package has sailed away. Let's find you another one.</p>
          <Link to="/packages" className="mt-8 inline-block bg-[#16B6A1] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
            Back to All Packages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image and CTA */}
          <div>
            <div className="sticky top-60">
              <div className="rounded-3xl overflow-hidden border-4 border-[#16B6A1] shadow-lg">
                <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-auto object-cover" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-gray-700">Starting From</p>
                <p className="text-5xl font-extrabold text-[#FF6F61]">Contact Us</p>
                <p className="text-sm text-gray-500">for best prices</p>
                <Link to="/plan-trip" className="mt-6 inline-block w-full bg-[#FF6F61] text-white font-bold text-xl py-4 rounded-full shadow-lg transform transition-transform hover:scale-105 duration-300">
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>

          {/* Details */}
          <article>
            <span className="bg-[#FFC145] text-white font-semibold px-3 py-1 rounded-full text-sm">{pkg.duration}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B7CC1] mt-4">{pkg.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">{pkg.description}</p>
            
            <h2 className="text-3xl font-bold text-[#0B7CC1] mt-10 mb-4">What's Included?</h2>
            <ul className="space-y-3">
              {pkg.inclusions.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <span className="text-green-500 text-2xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <Link to="/packages" className="bg-[#16B6A1] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
                ← Back to All Packages
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;
