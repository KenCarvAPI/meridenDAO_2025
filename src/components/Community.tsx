import React from 'react';
import { MessageSquare, Github, Twitter, Globe } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Join Our Community</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-neutral-600 max-w-3xl mx-auto">
            Connect with like-minded individuals and participate in building the future of decentralized governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">Get Involved</h3>
            <p className="text-neutral-600 mb-8">
              MeridenDAO is a community-driven organization that relies on the contributions of its members. 
              Whether you're a developer, designer, researcher, or simply interested in decentralized governance, 
              there are many ways to get involved.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Join the Discussion</h4>
                  <p className="text-neutral-600">Participate in governance discussions on our forum and Discord server.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Contribute to Code</h4>
                  <p className="text-neutral-600">Help develop and improve our open-source governance tools.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Twitter className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Spread the Word</h4>
                  <p className="text-neutral-600">Share our mission on social media and help grow the community.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-neutral-900">Participate in Governance</h4>
                  <p className="text-neutral-600">Vote on proposals and help shape the future of the DAO.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg shadow-lg hover:bg-primary-700 transition-all duration-200 font-medium text-lg">
                Join Our Discord
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5981933/pexels-photo-5981933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Community Event"
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/8111304/pexels-photo-8111304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Community Meeting"
                  className="rounded-lg shadow-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.pexels.com/photos/7792787/pexels-photo-7792787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Virtual Meetup"
                  className="rounded-lg shadow-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.pexels.com/photos/6457580/pexels-photo-6457580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Community Workshop"
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-200 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-full z-[-1]"></div>
          </div>
        </div>
        
        <div className="mt-24 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-50"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-primary-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest updates on governance proposals, community events, and new features.
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-lg border border-primary-400 bg-white/10 text-white placeholder-primary-200 focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;