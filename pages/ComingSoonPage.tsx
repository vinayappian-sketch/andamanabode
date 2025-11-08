import React from 'react';

interface ComingSoonPageProps {
  title: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="bg-white rounded-3xl border-4 border-dashed border-[#FF6F61] p-12 shadow-lg">
        <h1 className="text-5xl font-extrabold text-[#0B7CC1]">{title}</h1>
        <p className="mt-4 text-2xl text-gray-600 font-display">Something Awesome is Bubbling Up!</p>
        <p className="mt-2 text-lg text-gray-500 max-w-md">Our little fishy friends are hard at work building this page. Please swim by again soon!</p>
        <div className="mt-8 text-6xl animate-bounce text-[#0FA3E2]">🐠</div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
