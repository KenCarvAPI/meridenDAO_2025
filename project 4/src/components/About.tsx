import React from 'react';
import { CheckCircle2, Globe, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">About MeridenDAO</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-neutral-600 max-w-3xl mx-auto">
            Building and strengthening cryptocurrency communities beyond London.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h3>
            <p className="text-neutral-600 mb-6">
              MeridenDAO is a community-led initiative aimed at building and strengthening the cryptocurrency 
              scene in the cities outside of London. We believe in the power of local communities to drive 
              innovation and adoption in the cryptocurrency space.
            </p>
            <p className="text-neutral-600 mb-6">
              Our goal is to create vibrant, interconnected cryptocurrency communities that foster education, 
              collaboration, and growth beyond the traditional financial centers.
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
                  <span className="font-medium text-neutral-900">Inclusivity:</span> Creating opportunities for 
                  everyone to participate in the cryptocurrency ecosystem.
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Local Impact</h3>
            <p className="text-neutral-600">
              Empowering local communities to build and grow their own cryptocurrency ecosystems.
            </p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Community First</h3>
            <p className="text-neutral-600">
              Prioritizing community feedback and involvement in all our initiatives and events.
            </p>
          </div>
          <div className="bg-neutral-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Education Focus</h3>
            <p className="text-neutral-600">
              Providing resources and knowledge to help communities understand and adopt cryptocurrency technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;