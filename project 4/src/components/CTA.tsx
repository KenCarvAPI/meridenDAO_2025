import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Community?</h2>
          <p className="text-xl mb-10 text-blue-100">
            Join us in building and strengthening the cryptocurrency scene in cities outside of London.
            Your voice matters in shaping the future of our community.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              Learn More About Us
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              Read the Documentation
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
              View GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;