import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">About MeridenDAO</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-neutral-600 max-w-3xl mx-auto">
            Building and strengthening cryptocurrency communities across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h3>
            <p className="text-neutral-600 mb-6">
              MeridenDAO is a community-led initiative aimed at building and strengthening the cryptocurrency 
              scene across the UK. Our goal is to create vibrant, interconnected cryptocurrency community that global blockchain projects can access, contributing to the growth of the UK’s digital asset ecosystem.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                <p className="text-neutral-600">
                  <span className="font-medium text-neutral-900">Community-First:</span> Building strong local 
                  cryptocurrency communities through education and collaboration.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                <p className="text-neutral-600">
                  <span className="font-medium text-neutral-900">Activation:</span> Provide a platform for local
                  communities to connect, build knowledge, and collaborate with blockchain projects.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0" />
                <p className="text-neutral-600">
                  <span className="font-medium text-neutral-900">Innovation:</span> Fostering technological 
                  advancement and adoption in cities outside traditional financial centers.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary-200 rounded-xl -rotate-3 scale-105"></div>
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="MeridenDAO Community"
              className="relative rounded-xl shadow-xl w-full h-auto object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;