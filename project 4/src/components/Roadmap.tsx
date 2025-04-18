import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const RoadmapItem: React.FC<{
  title: string;
  date: string;
  description: string;
  completed: boolean;
  isLast?: boolean;
}> = ({ title, date, description, completed, isLast = false }) => {
  return (
    <div className="relative">
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-7 top-7 w-0.5 bg-gray-200 h-full -z-10"></div>
      )}
      
      {/* Content */}
      <div className="flex gap-4">
        <div className="flex-shrink-0 mt-1">
          {completed ? (
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
          ) : (
            <Circle className="h-6 w-6 text-blue-600" />
          )}
        </div>
        <div className="pb-10">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <span className="text-sm text-blue-600 font-medium">{date}</span>
          </div>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Roadmap</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Our path to building the future of decentralized governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Phase 1: Foundation</h3>
            <div className="space-y-0">
              <RoadmapItem
                title="DAO Formation"
                date="Q1 2023"
                description="Establishment of the core team, legal structure, and initial governance framework."
                completed={true}
              />
              <RoadmapItem
                title="Whitepaper Release"
                date="Q2 2023"
                description="Publication of our vision, technical specifications, and governance model."
                completed={true}
              />
              <RoadmapItem
                title="Initial Token Distribution"
                date="Q3 2023"
                description="Fair launch of governance tokens to establish the initial community of stakeholders."
                completed={true}
              />
              <RoadmapItem
                title="Governance Platform V1"
                date="Q4 2023"
                description="Launch of the basic governance platform with proposal creation and voting functionality."
                completed={true}
                isLast={true}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Phase 2: Growth & Innovation</h3>
            <div className="space-y-0">
              <RoadmapItem
                title="Treasury Management Tools"
                date="Q1 2024"
                description="Development of advanced treasury management features with multi-signature requirements."
                completed={true}
              />
              <RoadmapItem
                title="Analytics Dashboard"
                date="Q2 2024"
                description="Launch of comprehensive analytics tools for monitoring governance activity and treasury performance."
                completed={true}
              />
              <RoadmapItem
                title="Governance Platform V2"
                date="Q3 2024"
                description="Upgrade with advanced voting mechanisms, delegation, and improved user experience."
                completed={false}
              />
              <RoadmapItem
                title="DAO-to-DAO Collaboration Tools"
                date="Q4 2024"
                description="Development of features enabling collaboration between different DAOs and governance systems."
                completed={false}
                isLast={true}
              />
            </div>
          </div>

          <div className="md:col-span-2 mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-2">Phase 3: Expansion & Ecosystem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
              <div className="space-y-0">
                <RoadmapItem
                  title="Industry Partnerships"
                  date="Q1 2025"
                  description="Establish strategic partnerships with key projects and organizations in the web3 space."
                  completed={false}
                />
                <RoadmapItem
                  title="Mobile Application"
                  date="Q2 2025"
                  description="Launch of mobile applications for governance participation on the go."
                  completed={false}
                  isLast={true}
                />
              </div>
              <div className="space-y-0">
                <RoadmapItem
                  title="Governance SDK"
                  date="Q3 2025"
                  description="Release of a software development kit for other projects to implement our governance features."
                  completed={false}
                />
                <RoadmapItem
                  title="Global Expansion"
                  date="Q4 2025"
                  description="Initiatives to expand adoption across multiple regions and regulatory environments."
                  completed={false}
                  isLast={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg transition-colors duration-200 font-medium text-lg">
            View Full Roadmap
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;