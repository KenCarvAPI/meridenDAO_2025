import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-100 opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Building <span className="text-primary-600">Crypto Communities</span> Beyond London
            </h1>
            <p className="mt-6 text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0">
              MeridenDAO is a community-led initiative aimed at building and strengthening the cryptocurrency scene in the cities outside of London.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-200 font-medium text-lg">
                Join the Community
              </button>
              <button className="px-8 py-4 bg-white text-primary-600 rounded-lg shadow-lg hover:bg-neutral-50 transition-all duration-200 font-medium text-lg border border-primary-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-full bg-primary-100 absolute rounded-full scale-110 blur-3xl opacity-70 -z-10"></div>
            <img 
              src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Community Building"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="font-bold text-3xl md:text-4xl text-primary-600">10K+</div>
            <div className="mt-2 text-neutral-600">Community Members</div>
          </div>
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="font-bold text-3xl md:text-4xl text-primary-600">20+</div>
            <div className="mt-2 text-neutral-600">Cities Represented</div>
          </div>
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="font-bold text-3xl md:text-4xl text-primary-600">50+</div>
            <div className="mt-2 text-neutral-600">Events Hosted</div>
          </div>
          <div className="p-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="font-bold text-3xl md:text-4xl text-primary-600">24/7</div>
            <div className="mt-2 text-neutral-600">Community Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;