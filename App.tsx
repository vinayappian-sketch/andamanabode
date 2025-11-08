import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import PackagesPage from './pages/PackagesPage';
import StickyCTA from './components/StickyCTA';
import PlanTripPage from './pages/PlanTripPage';
import FerriesPage from './pages/FerriesPage';
import ItinerariesPage from './pages/ItinerariesPage';
import BlogPage from './pages/blogPage';
import AboutPage from './pages/AboutPage';
import TaxisPage from './pages/TaxisPage';
import PermitsPage from './pages/PermitsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPostPage from './pages/BlogPostPage';
import PackageDetailsPage from './pages/PackageDetailsPage';

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-[#F6F4EE] text-gray-800">
        <Header />
        <main className="flex-grow pt-52">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:packageId" element={<PackageDetailsPage />} />
            <Route path="/plan-trip" element={<PlanTripPage />} />
            <Route path="/ferries" element={<FerriesPage />} />
            <Route path="/taxis" element={<TaxisPage />} />
            <Route path="/itineraries" element={<ItinerariesPage />} />
            <Route path="/permits" element={<PermitsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA />
      </div>
    </HashRouter>
  );
}

export default App;