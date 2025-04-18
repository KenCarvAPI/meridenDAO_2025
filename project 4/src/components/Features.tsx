import React from 'react';
import { Vote, BarChart4, Landmark, Wallet, ShieldCheck, Microscope } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="governance" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Governance Features</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides comprehensive tools for decentralized governance and treasury management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Vote className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Proposal Voting</h3>
            <p className="text-gray-600">
              Create, discuss, and vote on governance proposals using a variety of voting mechanisms including token-weighted, quadratic, and conviction voting.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <BarChart4 className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
            <p className="text-gray-600">
              Track governance metrics, monitor treasury performance, and analyze voting patterns with our comprehensive dashboard.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Landmark className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Treasury Management</h3>
            <p className="text-gray-600">
              Manage collective assets with multi-signature requirements and transparent accounting of all financial transactions.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Wallet className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Token Distribution</h3>
            <p className="text-gray-600">
              Distribute governance tokens to contributors and stakeholders with customizable vesting schedules and allocation rules.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h3>
            <p className="text-gray-600">
              Implement safeguards against governance attacks with timelock delays, minimum quorum requirements, and security audits.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Microscope className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Research Initiatives</h3>
            <p className="text-gray-600">
              Fund and collaborate on research to advance the field of decentralized governance and organizational structures.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#technology" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-colors duration-200 font-medium text-lg">
            Explore Our Technology
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;